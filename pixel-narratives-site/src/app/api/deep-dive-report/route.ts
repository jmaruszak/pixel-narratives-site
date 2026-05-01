import { NextResponse } from "next/server";
import OpenAI from "openai";

import { parseOpenAiDeepDivePayload } from "@/lib/deepDiveReport";
import {
  MAX_DEEP_DIVE_REPORT_BODY_BYTES,
  validateDeepDiveReportPayload,
} from "@/lib/deepDiveReportApiValidate";
import { consumeDeepDiveReportRateLimits } from "@/lib/deepDiveReportRateLimit";

const LOG_PREFIX = "[deep-dive-report]";

/** OpenAI capped ~10s — UX target is 8–12s inclusive of network latency. */
const OPENAI_TIMEOUT_MS = 10_000;

/** Only env — verify no accidental client bundles of this route. */
const apiKeyEnv = () => process.env.OPENAI_API_KEY?.trim() ?? "";
const modelEnv = () => process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini";

function forwardClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for")?.trim();
  if (fwd) return fwd.split(",")[0]?.trim() || "";
  const xr = req.headers.get("x-real-ip")?.trim();
  if (xr) return xr;
  const cf = req.headers.get("cf-connecting-ip")?.trim();
  return cf ?? "";
}

function compactPayload(input: {
  score: number;
  category: string;
  sectionScores: unknown;
  responses: unknown;
  deepDiveResponses: unknown;
}) {
  return {
    score: input.score,
    category: input.category,
    pillars: Array.isArray(input.sectionScores)
      ? input.sectionScores.map((row) => ({
          id: (row as { id?: string }).id,
          score: (row as { score?: unknown }).score,
        }))
      : [],
    assessmentResponses: Array.isArray(input.responses)
      ? input.responses.map((entry) => ({
          id: (entry as { id?: unknown }).id,
          answer: (entry as { answer?: unknown }).answer,
          points: (entry as { points?: unknown }).points,
        }))
      : [],
    deepDiveAnswers: input.deepDiveResponses,
  };
}

export async function POST(req: Request) {
  let raw: string;
  try {
    raw = await req.text();
  } catch {
    return NextResponse.json({ ok: false, error: "Malformed body." }, { status: 400 });
  }

  if (Buffer.byteLength(raw, "utf8") > MAX_DEEP_DIVE_REPORT_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Payload too large." }, { status: 400 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const validated = validateDeepDiveReportPayload(body);
  if (!validated.ok) {
    return NextResponse.json({ ok: false, error: validated.error }, { status: 400 });
  }

  const ip = forwardClientIp(req);
  /*
   * Apply rate limits AFTER validation — garbage traffic shouldn't burn quota slots.
   * TODO: Persist in Redis/KV (see lib/deepDiveReportRateLimit.ts) for horizontally scaled deploys.
   */
  const limit = consumeDeepDiveReportRateLimits({
    ip,
    emailNormalized: validated.emailNormalized,
    companyNormalized: validated.companyNormalized,
  });
  if (!limit.ok) {
    console.warn(`${LOG_PREFIX} rate-limit`, limit.reason);
    return NextResponse.json({ ok: false, errorCode: "rate_limit", fallback: true }, { status: 429 });
  }

  const apiKey = apiKeyEnv();
  if (!apiKey) {
    console.info(`${LOG_PREFIX} OPENAI_API_KEY unset — deterministic snapshot expected client-side`);
    return NextResponse.json({ ok: false, errorCode: "openai_disabled", fallback: true }, { status: 200 });
  }

  const o = body as Record<string, unknown>;
  const compact = compactPayload({
    score: o.score as number,
    category: String(o.category).trim(),
    sectionScores: o.sectionScores,
    responses: o.responses,
    deepDiveResponses: o.deepDiveResponses,
  });

  const system = `Produce a directional "AI Opportunity Snapshot" for leaders.
Respond with JSON only (schema): {"summary":"...","topOpportunities":["str","str","str"],"commonGaps":["str","str","str"],"suggestedNextMoves":["str","str","str"],"blueprintBridge":"...","internalSalesNotes":"..."}
Audience-facing fields MUST stay directional-only: forbid named tools/apps/vendors, stacks, MCP, architecture, step-by-step implementation, integrations, ROI numbers, KPI promises, automation/code recipes.
internalSalesNotes: brief rep qualifiers only — no hallucinated operational facts missing from supplied JSON inputs.`;

  const client = new OpenAI({
    apiKey,
    timeout: OPENAI_TIMEOUT_MS,
    maxRetries: 0,
  });

  let content: string | undefined;

  try {
    const completion = await client.chat.completions.create({
      model: modelEnv(),
      messages: [
        { role: "system", content: system },
        { role: "user", content: JSON.stringify(compact) },
      ],
      temperature: 0.35,
      max_completion_tokens: 900,
      response_format: { type: "json_object" },
    });
    /** Standard chat completions route — tooling disabled implicitly (no plugins/tools payloads). */

    content = completion.choices[0]?.message?.content?.trim();
  } catch (e) {
    const name = e instanceof Error ? e.name : "";
    const msg = e instanceof Error ? e.message : String(e);
    if (name === "AbortError" || /timeout/i.test(msg)) {
      console.error(`${LOG_PREFIX} timeout`);
      return NextResponse.json({ ok: false, errorCode: "timeout", fallback: true }, { status: 200 });
    }
    console.error(`${LOG_PREFIX}`, msg);
    return NextResponse.json({ ok: false, errorCode: "openai_error", fallback: true }, { status: 200 });
  }

  if (!content?.length) {
    return NextResponse.json({ ok: false, errorCode: "empty_response", fallback: true }, { status: 200 });
  }

  let parsedAi: unknown;
  try {
    parsedAi = JSON.parse(content);
  } catch {
    return NextResponse.json({ ok: false, errorCode: "malformed_json", fallback: true }, { status: 200 });
  }

  const report = parseOpenAiDeepDivePayload(parsedAi);
  if (!report) {
    return NextResponse.json({ ok: false, errorCode: "malformed_structure", fallback: true }, { status: 200 });
  }

  return NextResponse.json({ ok: true, report }, { status: 200 });
}

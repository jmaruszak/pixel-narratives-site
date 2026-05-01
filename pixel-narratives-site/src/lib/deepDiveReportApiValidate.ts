import { assessmentQuestions, type SectionScore } from "@/lib/aiReadinessAssessment";

export const MAX_DEEP_DIVE_REPORT_BODY_BYTES = 25 * 1024;
export const MAX_PAYLOAD_STRING_LENGTH = 2000;

export const REQUIRED_DEEP_DIVE_IDS = [
  "dd_business_size",
  "dd_tools",
  "dd_bottleneck",
  "dd_ai_goal",
  "dd_data_comfort",
] as const;

const SECTION_IDS: SectionScore["id"][] = ["usage", "readinessGaps", "goals"];

function checkLen(s: string, path: string): { ok: true } | { ok: false; error: string } {
  if (s.length > MAX_PAYLOAD_STRING_LENGTH) {
    return { ok: false, error: `Field too long: ${path}` };
  }
  return { ok: true };
}

function deepStringCheck(
  val: unknown,
  path: string,
  depth: number
): { ok: true } | { ok: false; error: string } {
  if (depth > 12) return { ok: false, error: "Payload too nested" };
  if (val == null || typeof val === "number" || typeof val === "boolean") return { ok: true };
  if (typeof val === "string") return checkLen(val, path);
  if (Array.isArray(val)) {
    for (let i = 0; i < val.length; i++) {
      const r = deepStringCheck(val[i], `${path}[${i}]`, depth + 1);
      if (!r.ok) return r;
    }
    return { ok: true };
  }
  if (typeof val === "object") {
    for (const [k, v] of Object.entries(val as object)) {
      const r = deepStringCheck(v, `${path}.${k}`, depth + 1);
      if (!r.ok) return r;
    }
    return { ok: true };
  }
  return { ok: true };
}

/** Validates POST body shape before calling OpenAI. */
export function validateDeepDiveReportPayload(body: unknown): {
  ok: true;
  emailNormalized?: string;
  companyNormalized?: string;
} | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid JSON body" };
  }

  const o = body as Record<string, unknown>;

  if (typeof o.score !== "number" || Number.isNaN(o.score)) {
    return { ok: false, error: "Missing or invalid score" };
  }
  if (typeof o.category !== "string" || !o.category.trim()) {
    return { ok: false, error: "Missing or invalid category" };
  }
  if (o.category.trim().length > MAX_PAYLOAD_STRING_LENGTH) {
    return { ok: false, error: "Category too long" };
  }

  if (!Array.isArray(o.sectionScores)) {
    return { ok: false, error: "sectionScores must be an array" };
  }
  if (o.sectionScores.length !== SECTION_IDS.length) {
    return { ok: false, error: "sectionScores must include all pillar scores" };
  }
  const seen = new Set<string>();
  for (const row of o.sectionScores) {
    if (!row || typeof row !== "object") return { ok: false, error: "Invalid sectionScores entry" };
    const s = row as Record<string, unknown>;
    if (typeof s.id !== "string" || !SECTION_IDS.includes(s.id as SectionScore["id"])) {
      return { ok: false, error: "Invalid sectionScores id" };
    }
    if (seen.has(s.id)) return { ok: false, error: "Duplicate sectionScores id" };
    seen.add(s.id);
    if (typeof s.score !== "number" || Number.isNaN(s.score)) {
      return { ok: false, error: "Invalid section score" };
    }
  }
  for (const id of SECTION_IDS) {
    if (!seen.has(id)) return { ok: false, error: `Missing section score: ${id}` };
  }

  if (!Array.isArray(o.responses)) {
    return { ok: false, error: "responses must be an array" };
  }
  if (o.responses.length !== assessmentQuestions.length) {
    return { ok: false, error: "responses must include full assessment answers" };
  }

  if (!Array.isArray(o.deepDiveResponses)) {
    return { ok: false, error: "deepDiveResponses must be an array" };
  }

  const byId = new Map<string, { answerLabels?: unknown }>();
  for (const item of o.deepDiveResponses) {
    if (!item || typeof item !== "object" || typeof (item as { id?: unknown }).id !== "string") {
      return { ok: false, error: "Invalid deepDiveResponses entry" };
    }
    const id = (item as { id: string }).id;
    byId.set(id, item as { answerLabels?: unknown });
  }

  for (const id of REQUIRED_DEEP_DIVE_IDS) {
    const entry = byId.get(id);
    if (!entry) return { ok: false, error: `Missing Deep Dive answer: ${id}` };
    const labels = entry.answerLabels;
    const arrOk =
      Array.isArray(labels) && labels.some((x) => typeof x === "string" && String(x).trim());
    const strOk = typeof labels === "string" && labels.trim().length > 0;
    if (!arrOk && !strOk) {
      return { ok: false, error: `Deep Dive answer empty: ${id}` };
    }
  }

  let emailNormalized: string | undefined;
  let companyNormalized: string | undefined;

  if (typeof o.email === "string" && o.email.trim()) {
    const e = o.email.trim().toLowerCase();
    if (e.length > 320) return { ok: false, error: "Email too long" };
    emailNormalized = e;
  }
  if (typeof o.company === "string" && o.company.trim()) {
    companyNormalized = o.company.trim().toLowerCase().slice(0, 512);
  }

  const sizeCheck = deepStringCheck(body, "body", 0);
  if (!sizeCheck.ok) return sizeCheck;

  return { ok: true, emailNormalized, companyNormalized };
}

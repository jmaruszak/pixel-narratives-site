/** Category for CRM when OpenAI path did not yield a usable model response. */
export type OpenAiFallbackErrorCode =
  | "openai_disabled"
  | "rate_limit"
  | "timeout"
  | "network"
  | "malformed_structure"
  | "malformed_json"
  | "empty_response"
  | "openai_error";

export type DeepDiveGenerationSource = "openai" | "deterministic_fallback";

export type DeepDiveReportMeta = {
  generationSource: DeepDiveGenerationSource;
  /** Present when generationSource === deterministic_fallback due to infra/model/parsing/rate-limit. */
  openAiErrorCategory?: OpenAiFallbackErrorCode | string;
};

export type UnifiedDeepDiveReport = {
  summary: string;
  summaryParagraphs: string[];
  topOpportunities: string[];
  commonGaps: string[];
  suggestedNextMoves: string[];
  blueprintBridge: string;
  internalSalesNotes: string;
  generationSource: DeepDiveGenerationSource;
};

/** Input shaped like `buildDeepDiveSnapshot()` return value in the assessment UI. */
export type DeterministicDeepDiveSnapshotInput = {
  whatYourAnswersSuggest: string[];
  topOpportunities: string[];
  commonGaps: string[];
  suggestedNextMoves: string[];
  whereBlueprintGoesDeeper: string;
};

function normalizeThree(strings: readonly string[], fallback: string): string[] {
  const cleaned = strings.map((s) => s.trim()).filter(Boolean);
  const out = [...cleaned];
  while (out.length < 3) out.push(fallback);
  return out.slice(0, 3);
}

export function summaryToParagraphs(summary: string): string[] {
  const trimmed = summary.trim();
  if (!trimmed) return [];
  const parts = trimmed.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  return parts.length > 0 ? parts : [trimmed];
}

export function deterministicSnapshotToUnified(
  snapshot: DeterministicDeepDiveSnapshotInput
): UnifiedDeepDiveReport {
  const summaryParagraphs = snapshot.whatYourAnswersSuggest.slice(0, 3);
  const summary =
    summaryParagraphs.length > 0
      ? summaryParagraphs.join("\n\n")
      : snapshot.topOpportunities.join(" ");

  return {
    summary,
    summaryParagraphs:
      summaryParagraphs.length > 0
        ? summaryParagraphs
        : summaryToParagraphs(summary.length > 0 ? summary : "Directional Deep Dive snapshot."),
    topOpportunities: normalizeThree(snapshot.topOpportunities, "—"),
    commonGaps: normalizeThree(snapshot.commonGaps, "—"),
    suggestedNextMoves: normalizeThree(snapshot.suggestedNextMoves, "—"),
    blueprintBridge: snapshot.whereBlueprintGoesDeeper,
    internalSalesNotes:
      "[Fallback snapshot] Generated locally — OpenAI report unavailable or misconfigured.",
    generationSource: "deterministic_fallback",
  };
}

/** Coerce loosely typed OpenAI JSON into UnifiedDeepDiveReport. Returns null if invalid. */
export function parseOpenAiDeepDivePayload(data: unknown): UnifiedDeepDiveReport | null {
  if (!data || typeof data !== "object") return null;
  const o = data as Record<string, unknown>;
  const summary = typeof o.summary === "string" ? o.summary.trim() : "";

  const topOk = Array.isArray(o.topOpportunities);
  const gapsOk = Array.isArray(o.commonGaps);
  const movesOk = Array.isArray(o.suggestedNextMoves);
  if (!(topOk && gapsOk && movesOk)) return null;

  const topStrings = (o.topOpportunities as unknown[]).filter(
    (x): x is string => typeof x === "string"
  );
  const gapStrings = (o.commonGaps as unknown[]).filter(
    (x): x is string => typeof x === "string"
  );
  const moveStrings = (o.suggestedNextMoves as unknown[]).filter(
    (x): x is string => typeof x === "string"
  );

  const topOpportunities = normalizeThree(topStrings, "—");
  const commonGaps = normalizeThree(gapStrings, "—");
  const suggestedNextMoves = normalizeThree(moveStrings, "—");

  const blueprintBridge =
    typeof o.blueprintBridge === "string" && o.blueprintBridge.trim()
      ? o.blueprintBridge.trim()
      : "The Blueprint expands this directional view into practical sequencing anchored in how your team actually operates—without replacing your judgment.";

  const internalSalesNotes =
    typeof o.internalSalesNotes === "string" ? o.internalSalesNotes.trim() : "";

  const summaryParagraphs =
    summary.length > 0
      ? summaryToParagraphs(summary)
      : summaryToParagraphs(topOpportunities.join(" \n\n "));

  return {
    summary: summary || topOpportunities.join(" "),
    summaryParagraphs,
    topOpportunities,
    commonGaps,
    suggestedNextMoves,
    blueprintBridge,
    internalSalesNotes,
    generationSource: "openai",
  };
}

export function formatUnifiedDeepDiveForCRM(r: UnifiedDeepDiveReport): string {
  const lines = [
    "Deep Dive generated snapshot",
    `Generation source: ${r.generationSource}`,
    "",
    "Summary (customer-facing):",
    r.summaryParagraphs.join("\n\n"),
    "",
    "Top opportunities:",
    ...r.topOpportunities.map((x, i) => `${i + 1}. ${x}`),
    "",
    "Common gaps:",
    ...r.commonGaps.map((x, i) => `${i + 1}. ${x}`),
    "",
    "Suggested next moves:",
    ...r.suggestedNextMoves.map((x, i) => `${i + 1}. ${x}`),
    "",
    "Blueprint bridge:",
    r.blueprintBridge,
    "",
    "Internal sales notes:",
    r.internalSalesNotes || "—",
  ];
  return lines.join("\n");
}

/** Returns formatted notes block or null if payload is not a valid unified report. */
export function tryFormatDeepDiveGeneratedReportForNotes(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const o = data as Record<string, unknown>;
  const needs = [
    "summary",
    "summaryParagraphs",
    "topOpportunities",
    "commonGaps",
    "suggestedNextMoves",
    "blueprintBridge",
    "internalSalesNotes",
    "generationSource",
  ];
  for (const k of needs) {
    if (!(k in o)) return null;
  }
  if (typeof o.generationSource !== "string") return null;
  const r: UnifiedDeepDiveReport = {
    summary: String(o.summary),
    summaryParagraphs: Array.isArray(o.summaryParagraphs)
      ? o.summaryParagraphs.filter((x) => typeof x === "string")
      : [],
    topOpportunities: Array.isArray(o.topOpportunities)
      ? o.topOpportunities.filter((x) => typeof x === "string")
      : [],
    commonGaps: Array.isArray(o.commonGaps)
      ? o.commonGaps.filter((x) => typeof x === "string")
      : [],
    suggestedNextMoves: Array.isArray(o.suggestedNextMoves)
      ? o.suggestedNextMoves.filter((x) => typeof x === "string")
      : [],
    blueprintBridge: String(o.blueprintBridge),
    internalSalesNotes: String(o.internalSalesNotes),
    generationSource: o.generationSource as DeepDiveGenerationSource,
  };
  if (r.summaryParagraphs.length === 0 && r.summary) {
    r.summaryParagraphs = summaryToParagraphs(r.summary);
  }
  return formatUnifiedDeepDiveForCRM(r);
}

/** Appends generation metadata + validated snapshot formatting for webhook `notes`. */
export function appendGeneratedDeepDiveToNotes(
  baseNotes: string,
  generatedReport: unknown,
  meta?: DeepDiveReportMeta | null
): string {
  const metaLines: string[] = [];
  if (meta?.generationSource) {
    metaLines.push(`Deep Dive report generation source: ${meta.generationSource}`);
  }
  if (meta?.openAiErrorCategory) {
    metaLines.push(`OpenAI/report service note (when fallback): ${meta.openAiErrorCategory}`);
  }
  const formatted = tryFormatDeepDiveGeneratedReportForNotes(generatedReport);
  const chunk = [
    metaLines.length ? metaLines.join("\n") : null,
    formatted,
  ]
    .filter(Boolean)
    .join("\n\n");
  return chunk.length > 0 ? `${baseNotes}\n\n---\n${chunk}` : baseNotes;
}

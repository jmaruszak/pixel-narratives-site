"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  assessmentQuestions,
  buildAnswerPayload,
  calculateReadinessBreakdown,
  type AssessmentAnswer,
  type AssessmentAnswers,
  type AssessmentQuestion,
  type ReadinessScoreBreakdown,
} from "../lib/aiReadinessAssessment";
import {
  deterministicSnapshotToUnified,
  type DeepDiveReportMeta,
  type UnifiedDeepDiveReport,
} from "../lib/deepDiveReport";

type LeadForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
};

type Step =
  | "intro"
  | "questions"
  | "results"
  | "deepDiveQuestions"
  | "deepDiveLead"
  | "deepDiveReport";

type DeepDiveSingleQuestion = {
  id: string;
  section: string;
  type: "single";
  question: string;
  options: Array<{ value: string; label: string }>;
};

type DeepDiveMultiQuestion = {
  id: string;
  section: string;
  type: "multi";
  question: string;
  options: Array<{ value: string; label: string; exclusive?: boolean }>;
};

type DeepDiveQuestion = DeepDiveSingleQuestion | DeepDiveMultiQuestion;

type DeepDiveAnswers = Record<string, string | string[]>;

const DEEP_DIVE_QUESTIONS: DeepDiveQuestion[] = [
  {
    id: "dd_business_size",
    section: "Deep Dive",
    type: "single",
    question: "Roughly how large is your business?",
    options: [
      { value: "under_1m", label: "Under $1M in annual revenue" },
      { value: "1m_3m", label: "$1M–$3M in annual revenue" },
      { value: "3m_10m", label: "$3M–$10M in annual revenue" },
      { value: "10m_plus", label: "$10M+ in annual revenue" },
      { value: "prefer_not_say", label: "Not sure / prefer not to say" },
    ],
  },
  {
    id: "dd_tools",
    section: "Deep Dive",
    type: "multi",
    question: "Where does most of your customer or operational data live today?",
    options: [
      { value: "crm", label: "CRM" },
      { value: "spreadsheets", label: "Spreadsheets" },
      { value: "email_inboxes", label: "Email inboxes" },
      { value: "pm_tools", label: "Project management tools" },
      { value: "accounting", label: "Accounting or billing software" },
      { value: "industry_specific", label: "Industry-specific software" },
      { value: "peoples_heads", label: "Mostly in people’s heads" },
      { value: "not_sure", label: "Not sure", exclusive: true },
    ],
  },
  {
    id: "dd_bottleneck",
    section: "Deep Dive",
    type: "single",
    question: "Which area feels most inefficient right now?",
    options: [
      { value: "lead_sales", label: "Lead follow-up and sales process" },
      { value: "onboarding_delivery", label: "Customer onboarding or service delivery" },
      { value: "reporting", label: "Reporting and decision-making" },
      { value: "internal_ops", label: "Internal operations and admin" },
      { value: "marketing_execution", label: "Marketing content or campaign execution" },
      { value: "scattered_data", label: "Data is scattered across too many places" },
    ],
  },
  {
    id: "dd_ai_goal",
    section: "Deep Dive",
    type: "single",
    question: "What would make AI feel like a win over the next 90 days?",
    options: [
      { value: "save_time", label: "Save time" },
      { value: "increase_revenue", label: "Increase revenue" },
      { value: "improve_cx", label: "Improve customer experience" },
      { value: "better_decisions", label: "Make better decisions with data" },
      { value: "reduce_followup", label: "Reduce manual follow-up" },
      { value: "better_assets", label: "Create better marketing or sales assets" },
    ],
  },
  {
    id: "dd_data_comfort",
    section: "Deep Dive",
    type: "single",
    question: "How comfortable are you letting AI tools interact with company data?",
    options: [
      { value: "not_comfortable", label: "Not comfortable yet" },
      { value: "public_ok", label: "Comfortable with public/non-sensitive data" },
      { value: "internal_controlled", label: "Comfortable with internal data if access is controlled" },
      {
        value: "clear_governance",
        label: "Comfortable if security, permissions, and review steps are clear",
      },
      { value: "already_using", label: "We already use AI with business data" },
    ],
  },
];

const initialLeadForm: LeadForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
};

function isQuestionAnswered(question: AssessmentQuestion, answers: AssessmentAnswers) {
  const answer = answers[question.id];

  if (question.type === "multi") {
    return Array.isArray(answer) && answer.length > 0;
  }

  if (question.type === "scale") {
    return typeof answer === "number";
  }

  return Boolean(answer);
}

function isDeepDiveQuestionAnswered(question: DeepDiveQuestion, ddAnswers: DeepDiveAnswers) {
  const answer = ddAnswers[question.id];

  if (question.type === "multi") {
    return Array.isArray(answer) && answer.length > 0;
  }

  return typeof answer === "string" && answer.length > 0;
}

function buildDeepDiveResponsesForApi(ddAnswers: DeepDiveAnswers) {
  return DEEP_DIVE_QUESTIONS.map((q) => {
    const raw = ddAnswers[q.id];
    const labels: string[] =
      q.type === "multi"
        ? Array.isArray(raw)
          ? raw
              .map((val) => q.options.find((o) => o.value === val)?.label ?? val)
              .filter(Boolean)
          : []
        : typeof raw === "string"
          ? [(q.options.find((o) => o.value === raw)?.label ?? raw) as string]
          : [];

    return { id: q.id, question: q.question, answerLabels: labels };
  });
}

type DeepDiveSnapshotContent = {
  whatYourAnswersSuggest: string[];
  topOpportunities: string[];
  commonGaps: string[];
  suggestedNextMoves: string[];
  whereBlueprintGoesDeeper: string;
};

function getDdSingle(dd: DeepDiveAnswers, id: string): string | undefined {
  const v = dd[id];
  return typeof v === "string" ? v : undefined;
}

function getDdMulti(dd: DeepDiveAnswers, id: string): string[] {
  const v = dd[id];
  return Array.isArray(v) ? v : [];
}

/** Directional snapshot only — no tools, architectures, or step-by-step workflows. */
function buildDeepDiveSnapshot(
  breakdown: ReadinessScoreBreakdown,
  dd: DeepDiveAnswers
): DeepDiveSnapshotContent {
  const category = breakdown.tier.category;
  const weakestSection = [...breakdown.sectionScores].reduce((a, b) =>
    b.score < a.score ? b : a
  );

  const businessSize = getDdSingle(dd, "dd_business_size") ?? "prefer_not_say";
  const bottleneck = getDdSingle(dd, "dd_bottleneck") ?? "internal_ops";
  const aiGoal = getDdSingle(dd, "dd_ai_goal") ?? "save_time";
  const comfort = getDdSingle(dd, "dd_data_comfort") ?? "public_ok";
  const tools = getDdMulti(dd, "dd_tools");

  const fragmentedData =
    tools.length >= 3 ||
    tools.includes("peoples_heads") ||
    bottleneck === "scattered_data";

  const suggest: string[] = [];

  suggest.push(
    `Your readiness result (${category}) points to ${breakdown.score}/10 maturity today. Taken together with your Deep Dive pick for where friction shows up (${bottleneck === "lead_sales" ? "revenue-facing follow-through" : bottleneck === "onboarding_delivery" ? "delivery and onboarding" : bottleneck === "reporting" ? "reporting and decision cadence" : bottleneck === "internal_ops" ? "internal ops and admin" : bottleneck === "marketing_execution" ? "marketing throughput" : "how data sits across teams"}), this is typically a phase where prioritization beats adding more experiments.`
  );

  suggest.push(
    `Across the assessment pillars, “${weakestSection.label}” surfaced as relative headroom (${weakestSection.score}/10 versus your overall score). That does not imply failure in that area; it implies that gains there would likely compound if you stabilize how work repeats day to day.`
  );

  suggest.push(
    `You described a credible 90-day “win shape” (${aiGoal === "save_time" ? "recovering senior time through fewer manual loops" : aiGoal === "increase_revenue" ? "lifting conversion or pipeline quality" : aiGoal === "improve_cx" ? "smoother customer experience" : aiGoal === "better_decisions" ? "cleaner operational signals" : aiGoal === "reduce_followup" ? "fewer dropped follow-ups" : "better sales and marketing assets"}), paired with comfort level (${comfort === "not_comfortable" ? "starting from low data exposure until policies feel clear" : comfort === "public_ok" ? "lighter-touch data use initially" : comfort === "internal_controlled" ? "controlled internal access" : comfort === "clear_governance" ? "explicit review and permission guardrails" : "hands-on adoption with sensitive data"}). That combination usually defines how fast—and how boldly—you should sequence early initiatives.`
  );

  const opps: string[] = [];

  switch (bottleneck) {
    case "lead_sales":
      opps.push(
        "Tightening handoffs between inbound interest and consistent follow-through so replies, tasks, and context do not dissolve between people."
      );
      break;
    case "onboarding_delivery":
      opps.push(
        "Standardizing repeatable steps in onboarding or fulfillment so variance drops and customers get predictable experiences without heroic effort."
      );
      break;
    case "reporting":
      opps.push(
        "Shrinking lag between operational reality and readable summaries so recurring decisions rely on fresher narratives, even before anything custom is engineered."
      );
      break;
    case "marketing_execution":
      opps.push(
        "Increasing the ratio of deliberate campaign ideas shipped versus stalled drafts by clarifying approvals, tone, and who owns iteration."
      );
      break;
    case "scattered_data":
      opps.push(
        "Reducing thrash caused by fragmented customer and ops context so teams argue less about facts and spend more effort on deliberate tradeoffs."
      );
      break;
    default:
      opps.push(
        "Elevating operational rhythm: fewer interruptions from recurring admin chores and clearer accountability for repeatable internal processes."
      );
  }

  if (weakestSection.id === "readinessGaps") {
    opps.push(
      "Bringing explicit expectations for how humans and automation split work—enough governance to spread safely, without paralyzing speed."
    );
  } else if (weakestSection.id === "usage") {
    opps.push(
      "Channeling exploratory AI enthusiasm into bounded pilots attached to workflows that already consume real hours each week."
    );
  } else {
    opps.push(
      "Aligning urgency and sequencing so near-term ambitions map to observable outcomes Leadership can recognize—not just more activity."
    );
  }

  if (businessSize !== "prefer_not_say") {
    const scaleHint =
      businessSize === "under_1m"
        ? "fewer lanes to coordinate"
        : businessSize === "1m_3m" || businessSize === "3m_10m"
          ? "more handoffs to protect"
          : "more surface area where small inconsistencies multiply";
    opps.push(
      `At your described scale, changes that improve repeatability (${scaleHint}) tend to outperform one-off flashy experiments.`
    );
  } else {
    opps.push(
      "Defining scope honestly up front—even without exact revenue disclosures—helps avoid scattering effort across hypothetical big-company priorities."
    );
  }

  const topOpportunities = opps.slice(0, 3);

  const gaps: string[] = [];

  if (category === "Early Stage") {
    gaps.push(
      "Ambiguous ownership for what “good AI use” looks like day to day leads to stalled experiments that never compound."
    );
  } else if (category === "Emerging Potential") {
    gaps.push(
      "Momentum without crisp measurement makes it unclear which workflows deserve more investment versus which should be paused."
    );
  } else {
    gaps.push(
      "Operational drag from multiplying tools or habits can outweigh gains unless standards and reuse are tightened intentionally."
    );
  }

  if (fragmentedData) {
    gaps.push(
      "Information living across many unofficial homes increases rework, mistrust of reports, and slow consensus when teams need answers quickly."
    );
  }

  if (comfort === "not_comfortable" || comfort === "public_ok") {
    gaps.push(
      "A conservative stance on sensitive data—while prudent—often delays documenting even lightweight review habits that would unlock pragmatic internal pilots."
    );
  } else {
    gaps.push(
      "Comfort with richer data participation still needs crisp boundaries—without them, shortcuts can quietly become informal policy."
    );
  }

  const moves: string[] = [
    "Pick one bottleneck you named and write a blunt one-paragraph hypothesis: “If we fixed X observably within 90 days, we would recognize success because _____.”",
    "Inventory where that bottleneck burns time weekly (even qualitatively) so you can distinguish theater from leverage before expanding scope.",
  ];

  if (comfort === "not_comfortable" || comfort === "public_ok") {
    moves.push(
      "Stand up lightweight review language now—who approves AI-assisted summaries, where outputs live, what never leaves the building—without waiting for perfection."
    );
  } else {
    moves.push(
      "Stress-test accountability: name one owner for approvals on AI-assisted drafts touching customers or regulated topics before scaling usage."
    );
  }

  if (fragmentedData) {
    moves.push(
      "Align on one canonical narrative for critical customer milestones—even if spreadsheets remain—for 90 days, so debate shifts from locating truth to acting on it."
    );
  } else {
    moves.push(
      "Pair leaders and operators briefly on realistic adoption timing so experiments match how people already work—not an abstract future org chart."
    );
  }

  const blueprintContrast =
    "This snapshot aligns patterns from your readiness score and follow-up picks so you know where directional energy tends to matter in the next quarter. An AI Readiness Blueprint is different: it ingests workflow reality, stakeholder constraints, sequencing risk, adoption habits, and the specific tradeoffs worth taking now versus later—in other words the actual path from ambiguity to rollout you can steward week by week.";

  return {
    whatYourAnswersSuggest: suggest.slice(0, 3),
    topOpportunities,
    commonGaps: gaps.slice(0, 3),
    suggestedNextMoves: moves.slice(0, 4),
    whereBlueprintGoesDeeper: blueprintContrast,
  };
}

function formatDeepDiveFallbackReason(code: string): string {
  const phrases: Record<string, string> = {
    rate_limit: "too many requests in a short window—try again in a bit",
    timeout: "the AI request timed out",
    openai_disabled: "the optional narrative layer isn’t enabled in this environment",
    network: "a network or connection issue",
    malformed_json: "the AI reply couldn’t be read as structured data",
    malformed_structure: "the AI reply didn’t match the expected format",
    empty_response: "the AI returned an empty reply",
    openai_error: "the AI service returned an error",
    unknown: "something unexpected happened",
  };
  return phrases[code] ?? code.replace(/_/g, " ");
}

export default function AiReadinessAssessment() {
  const [step, setStep] = useState<Step>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [leadForm, setLeadForm] = useState<LeadForm>(initialLeadForm);
  const [deepDiveQuestionIndex, setDeepDiveQuestionIndex] = useState(0);
  const [deepDiveAnswers, setDeepDiveAnswers] = useState<DeepDiveAnswers>({});
  const [deepDiveSubmitError, setDeepDiveSubmitError] = useState("");
  const [reportAiRefreshing, setReportAiRefreshing] = useState(false);
  const [unifiedDeepDiveReport, setUnifiedDeepDiveReport] = useState<UnifiedDeepDiveReport | null>(
    null
  );
  const [deepDiveReportMeta, setDeepDiveReportMeta] = useState<DeepDiveReportMeta>({
    generationSource: "deterministic_fallback",
  });
  const [crmSyncNotice, setCrmSyncNotice] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = assessmentQuestions[questionIndex];
  const scoreBreakdown = useMemo(
    () => calculateReadinessBreakdown(answers),
    [answers]
  );
  const { score, tier } = scoreBreakdown;
  const progress =
    step === "intro"
      ? 0
      : step === "questions"
        ? ((questionIndex + 1) / assessmentQuestions.length) * 100
        : 100;

  const deepDiveSnapshot = useMemo(
    () => buildDeepDiveSnapshot(scoreBreakdown, deepDiveAnswers),
    [scoreBreakdown, deepDiveAnswers]
  );

  const currentDeepQuestion = DEEP_DIVE_QUESTIONS[deepDiveQuestionIndex];

  function startDeepDive() {
    transitionTo(() => {
      setDeepDiveAnswers({});
      setDeepDiveQuestionIndex(0);
      setDeepDiveSubmitError("");
      setUnifiedDeepDiveReport(null);
      setDeepDiveReportMeta({ generationSource: "deterministic_fallback" });
      setCrmSyncNotice("");
      setReportAiRefreshing(false);
      setStep("deepDiveQuestions");
    });
  }

  function updateDeepDiveAnswer(question: DeepDiveQuestion, value: string | string[]) {
    setDeepDiveAnswers((current) => ({
      ...current,
      [question.id]: value,
    }));
  }

  function toggleDeepDiveMulti(question: DeepDiveMultiQuestion, value: string) {
    const option = question.options.find((item) => item.value === value);
    const current = Array.isArray(deepDiveAnswers[question.id])
      ? (deepDiveAnswers[question.id] as string[])
      : [];

    if (option?.exclusive) {
      updateDeepDiveAnswer(question, current.includes(value) ? [] : [value]);
      return;
    }

    const withoutExclusive = current.filter((item) => {
      const opt = question.options.find((optionItem) => optionItem.value === item);
      return !opt?.exclusive;
    });
    const next = withoutExclusive.includes(value)
      ? withoutExclusive.filter((item) => item !== value)
      : [...withoutExclusive, value];

    updateDeepDiveAnswer(question, next);
  }

  function transitionTo(callback: () => void) {
    setIsTransitioning(true);
    window.setTimeout(() => {
      callback();
      window.setTimeout(() => setIsTransitioning(false), 40);
    }, 170);
  }

  function updateAnswer(question: AssessmentQuestion, value: AssessmentAnswer) {
    setAnswers((current) => ({
      ...current,
      [question.id]: value,
    }));
  }

  function toggleMultiAnswer(question: AssessmentQuestion, value: string) {
    if (question.type !== "multi") return;

    const option = question.options.find((item) => item.value === value);
    const current = Array.isArray(answers[question.id])
      ? (answers[question.id] as string[])
      : [];

    if (option?.exclusive) {
      updateAnswer(question, current.includes(value) ? [] : [value]);
      return;
    }

    const withoutExclusive = current.filter((item) => {
      const currentOption = question.options.find((optionItem) => optionItem.value === item);
      return !currentOption?.exclusive;
    });
    const next = withoutExclusive.includes(value)
      ? withoutExclusive.filter((item) => item !== value)
      : [...withoutExclusive, value];

    updateAnswer(question, next);
  }

  function goNext() {
    if (step === "intro") {
      transitionTo(() => setStep("questions"));
      return;
    }

    if (step === "questions" && questionIndex < assessmentQuestions.length - 1) {
      transitionTo(() => setQuestionIndex((index) => index + 1));
      return;
    }

    if (step === "questions") {
      transitionTo(() => setStep("results"));
      return;
    }

    if (step === "deepDiveQuestions" && deepDiveQuestionIndex < DEEP_DIVE_QUESTIONS.length - 1) {
      transitionTo(() => setDeepDiveQuestionIndex((index) => index + 1));
      return;
    }

    if (step === "deepDiveQuestions") {
      transitionTo(() => setStep("deepDiveLead"));
    }
  }

  function goBack() {
    if (step === "questions" && questionIndex > 0) {
      transitionTo(() => setQuestionIndex((index) => index - 1));
      return;
    }

    if (step === "questions") {
      transitionTo(() => setStep("intro"));
      return;
    }

    if (step === "deepDiveQuestions" && deepDiveQuestionIndex > 0) {
      transitionTo(() => setDeepDiveQuestionIndex((index) => index - 1));
      return;
    }

    if (step === "deepDiveQuestions") {
      transitionTo(() => setStep("results"));
      return;
    }

    if (step === "deepDiveLead") {
      transitionTo(() => {
        setDeepDiveQuestionIndex(DEEP_DIVE_QUESTIONS.length - 1);
        setStep("deepDiveQuestions");
      });
    }
  }

  async function submitDeepDiveLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDeepDiveSubmitError("");
    setCrmSyncNotice("");
    setIsSubmitting(true);

    const snapshot = buildDeepDiveSnapshot(scoreBreakdown, deepDiveAnswers);

    /*
     * Deterministic unified report first: the report screen appears immediately with a coherent
     * narrative; optional OpenAI can replace fields when available (timeouts/disabled stays local).
     */
    const deterministicUnified = deterministicSnapshotToUnified(snapshot);

    setUnifiedDeepDiveReport(deterministicUnified);
    setDeepDiveReportMeta({ generationSource: "deterministic_fallback" });
    setReportAiRefreshing(true);
    transitionTo(() => setStep("deepDiveReport"));

    let finalUnified: UnifiedDeepDiveReport = deterministicUnified;
    let finalMeta: DeepDiveReportMeta = { generationSource: "deterministic_fallback" };

    const answersBlock = {
      score,
      category: tier.category,
      rawTotal: scoreBreakdown.rawTotal,
      maxTotal: scoreBreakdown.maxTotal,
      sectionTotals: scoreBreakdown.sectionTotals,
      sectionScores: scoreBreakdown.sectionScores,
      responses: buildAnswerPayload(answers),
    };

    const deepDiveResponses = buildDeepDiveResponsesForApi(deepDiveAnswers);

    const reportPayload = {
      score,
      category: tier.category,
      sectionScores: answersBlock.sectionScores,
      responses: answersBlock.responses,
      deepDiveResponses,
      email: leadForm.email.trim(),
      company: leadForm.company.trim(),
    };

    try {
      const response = await fetch("/api/deep-dive-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportPayload),
      });

      let data: unknown = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      const j = data as {
        ok?: boolean;
        report?: UnifiedDeepDiveReport;
        fallback?: boolean;
        errorCode?: string;
      };

      if (response.ok && j.ok === true && j.report && typeof j.report === "object") {
        finalUnified = j.report;
        finalMeta = { generationSource: "openai" };
        setUnifiedDeepDiveReport(j.report);
        setDeepDiveReportMeta(finalMeta);
      } else {
        const code =
          typeof j?.errorCode === "string"
            ? j.errorCode
            : !response.ok
              ? "network"
              : "unknown";
        finalMeta = { generationSource: "deterministic_fallback", openAiErrorCategory: code };
        setDeepDiveReportMeta(finalMeta);
      }
    } catch {
      finalMeta = { generationSource: "deterministic_fallback", openAiErrorCategory: "network" };
      setDeepDiveReportMeta(finalMeta);
    } finally {
      setReportAiRefreshing(false);
      setIsSubmitting(false);
    }

    const crmPayload = {
      ...leadForm,
      score,
      category: tier.category,
      answers: answersBlock,
      leadForm: { ...leadForm },
      deepDiveResponses,
      deepDiveGeneratedReport: finalUnified,
      deepDiveReportMeta: finalMeta,
      source: "pixelnarratives.studio/ai-readiness-assessment",
      leadType: "ai-readiness-deep-dive",
    };

    try {
      const response = await fetch("/api/assessment-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Assessment CRM sync failed after Deep Dive snapshot", text);
        setCrmSyncNotice(
          "We couldn't sync this lead to our team inbox yet. Your snapshot is still shown above—feel free to contact us directly if you don't hear back."
        );
      }
    } catch (error) {
      console.error("Assessment CRM sync failed after Deep Dive snapshot", error);
      setCrmSyncNotice(
        "We couldn't sync this lead to our team inbox yet. Your snapshot is still shown above—feel free to contact us directly if you don't hear back."
      );
    }
  }

  function printSummary() {
    window.print();
  }

  const unifiedForDeepDiveReport = useMemo(
    () =>
      unifiedDeepDiveReport ?? deterministicSnapshotToUnified(deepDiveSnapshot),
    [deepDiveSnapshot, unifiedDeepDiveReport]
  );

  const canContinue =
    step === "questions"
      ? isQuestionAnswered(currentQuestion, answers)
      : step === "deepDiveQuestions"
        ? isDeepDiveQuestionAnswered(currentDeepQuestion, deepDiveAnswers)
        : true;

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-10 md:py-24">
      <div className="mb-8">
        <div className="h-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[var(--foreground)] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
          <span>AI Readiness</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>

      <div
        className={[
          "rounded-[32px] border border-white/8 bg-white/[0.02] p-7 transition duration-200 md:p-10",
          isTransitioning ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        {step === "intro" ? (
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Intelligence Layer
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              AI Readiness Self-Assessment
            </h1>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>
                How ready is your company to turn AI from scattered experiments
                into a real business advantage?
              </p>
              <p>
                This quick 10-question assessment takes about 3 minutes. Answer
                honestly — there are no wrong answers.
              </p>
            </div>
            <button
              type="button"
              onClick={goNext}
              className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start the Assessment
            </button>
          </div>
        ) : null}

        {step === "questions" ? (
          <div>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                  {currentQuestion.section}
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl leading-[1.08] md:text-5xl">
                  {currentQuestion.question}
                </h2>
                {"helper" in currentQuestion ? (
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    {currentQuestion.helper}
                  </p>
                ) : null}
              </div>
              <p className="text-sm text-[var(--muted)]">
                Question {questionIndex + 1} of {assessmentQuestions.length}
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {currentQuestion.type === "single"
                ? currentQuestion.options.map((option) => {
                    const active = answers[currentQuestion.id] === option.value;
                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => updateAnswer(currentQuestion, option.value)}
                        className={[
                          "rounded-[20px] border p-5 text-left text-base leading-relaxed transition",
                          active
                            ? "border-white/25 bg-white/[0.08] text-[var(--foreground)]"
                            : "border-white/8 bg-white/[0.02] text-[var(--muted)] hover:border-white/16 hover:bg-white/[0.04]",
                        ].join(" ")}
                      >
                        <span className="mr-3 font-mono text-xs">{option.value}</span>
                        {option.label}
                      </button>
                    );
                  })
                : null}

              {currentQuestion.type === "multi"
                ? currentQuestion.options.map((option) => {
                    const selected = Array.isArray(answers[currentQuestion.id])
                      ? (answers[currentQuestion.id] as string[])
                      : [];
                    const active = selected.includes(option.value);
                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => toggleMultiAnswer(currentQuestion, option.value)}
                        className={[
                          "rounded-[20px] border p-5 text-left text-base leading-relaxed transition",
                          active
                            ? "border-white/25 bg-white/[0.08] text-[var(--foreground)]"
                            : "border-white/8 bg-white/[0.02] text-[var(--muted)] hover:border-white/16 hover:bg-white/[0.04]",
                        ].join(" ")}
                      >
                        {option.label}
                      </button>
                    );
                  })
                : null}

              {currentQuestion.type === "scale" ? (
                <div className="grid grid-cols-5 gap-3 md:grid-cols-10">
                  {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => {
                    const active = answers[currentQuestion.id] === value;
                    return (
                      <button
                        type="button"
                        key={value}
                        onClick={() => updateAnswer(currentQuestion, value)}
                        className={[
                          "aspect-square rounded-full border text-sm transition md:text-base",
                          active
                            ? "border-white/30 bg-[var(--foreground)] text-black"
                            : "border-white/10 text-[var(--muted)] hover:bg-white/[0.04] hover:text-[var(--foreground)]",
                        ].join(" ")}
                      >
                        {value}
                      </button>
                    );
                  })}
                  <div className="col-span-5 flex justify-between text-xs uppercase tracking-[0.2em] text-[var(--muted)] md:col-span-10">
                    <span>{currentQuestion.minLabel}</span>
                    <span>{currentQuestion.maxLabel}</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!canContinue}
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {questionIndex === assessmentQuestions.length - 1
                  ? "See Results"
                  : "Continue"}
              </button>
            </div>
          </div>
        ) : null}

        {step === "results" ? (
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Your Results
            </p>
            <div className="mt-5 grid gap-8 md:grid-cols-[0.4fr_0.6fr] md:items-center">
              <div className="rounded-[28px] border border-white/8 bg-black p-8 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  Readiness Score
                </p>
                <p className="mt-4 text-7xl leading-none md:text-8xl">{score}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">out of 10</p>
                <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">
                  Raw readiness points: {scoreBreakdown.rawTotal} of{" "}
                  {scoreBreakdown.maxTotal}
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  {tier.range}
                </p>
                <h2 className="mt-3 text-4xl leading-none md:text-6xl">
                  {tier.category}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {tier.summary}
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <span className="text-[var(--foreground)]">How we can help:</span>{" "}
              turn this score into a practical AI roadmap, starting with the
              highest-value workflow to fix first.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {scoreBreakdown.sectionScores.map((section) => (
                <div
                  key={section.id}
                  className="rounded-[20px] border border-white/8 bg-white/[0.02] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {section.label}
                  </p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <p className="text-4xl leading-none">{section.score}</p>
                    <p className="pb-1 text-sm text-[var(--muted)]">/10</p>
                  </div>
                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[var(--foreground)]"
                      style={{ width: `${section.score * 10}%` }}
                    />
                  </div>
                  <p className="mt-3 text-xs text-[var(--muted)]">
                    {section.rawTotal} of {section.maxTotal} raw points
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[28px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
              <h3 className="text-2xl leading-tight md:text-3xl">
                Turn this into a 90-day AI opportunity snapshot
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Your score gives you the starting point. Answer a few focused
                follow-ups and we&apos;ll show where your business is most likely
                leaving time, efficiency, or revenue on the table.
              </p>
              <button
                type="button"
                onClick={startDeepDive}
                className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Get My Deep Dive
              </button>
              <p className="mt-4 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">
                Directional guidance only. The full Blueprint builds the
                implementation roadmap.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={printSummary}
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Save or print your results
              </button>
              <a
                href="https://calendly.com/pixelnarratives"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Book a strategy call
              </a>
              <a
                href="/intelligence-layer"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Explore Intelligence Layer
              </a>
            </div>
          </div>
        ) : null}

        {step === "deepDiveQuestions" ? (
          <div>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                  {currentDeepQuestion.section}
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl leading-[1.08] md:text-5xl">
                  {currentDeepQuestion.question}
                </h2>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Deep Dive Question {deepDiveQuestionIndex + 1} of {DEEP_DIVE_QUESTIONS.length}
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              {currentDeepQuestion.type === "single"
                ? currentDeepQuestion.options.map((option) => {
                    const active = deepDiveAnswers[currentDeepQuestion.id] === option.value;
                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => updateDeepDiveAnswer(currentDeepQuestion, option.value)}
                        className={[
                          "rounded-[20px] border p-5 text-left text-base leading-relaxed transition",
                          active
                            ? "border-white/25 bg-white/[0.08] text-[var(--foreground)]"
                            : "border-white/8 bg-white/[0.02] text-[var(--muted)] hover:border-white/16 hover:bg-white/[0.04]",
                        ].join(" ")}
                      >
                        {option.label}
                      </button>
                    );
                  })
                : null}

              {currentDeepQuestion.type === "multi"
                ? currentDeepQuestion.options.map((option) => {
                    const selected = Array.isArray(deepDiveAnswers[currentDeepQuestion.id])
                      ? (deepDiveAnswers[currentDeepQuestion.id] as string[])
                      : [];
                    const active = selected.includes(option.value);
                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() =>
                          toggleDeepDiveMulti(currentDeepQuestion, option.value)
                        }
                        className={[
                          "rounded-[20px] border p-5 text-left text-base leading-relaxed transition",
                          active
                            ? "border-white/25 bg-white/[0.08] text-[var(--foreground)]"
                            : "border-white/8 bg-white/[0.02] text-[var(--muted)] hover:border-white/16 hover:bg-white/[0.04]",
                        ].join(" ")}
                      >
                        {option.label}
                      </button>
                    );
                  })
                : null}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!canContinue}
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue
              </button>
            </div>
          </div>
        ) : null}

        {step === "deepDiveLead" ? (
          <form onSubmit={submitDeepDiveLead} className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Deep Dive
            </p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
              Where should we send your AI opportunity snapshot?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Enter your details to generate your directional Deep Dive report.
              You&apos;ll see the snapshot here, and we&apos;ll save a copy with
              your assessment.
            </p>

            {deepDiveSubmitError ? (
              <p className="mt-4 text-sm text-red-300">{deepDiveSubmitError}</p>
            ) : null}

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <label className="text-sm text-[var(--muted)]">
                Name
                <input
                  required
                  value={leadForm.name}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, name: event.target.value }))
                  }
                  className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-white/25"
                />
              </label>
              <label className="text-sm text-[var(--muted)]">
                Email
                <input
                  required
                  type="email"
                  value={leadForm.email}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, email: event.target.value }))
                  }
                  className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-white/25"
                />
              </label>
              <label className="text-sm text-[var(--muted)]">
                Company
                <input
                  required
                  value={leadForm.company}
                  onChange={(event) =>
                    setLeadForm((current) => ({
                      ...current,
                      company: event.target.value,
                    }))
                  }
                  className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-white/25"
                />
              </label>
              <label className="text-sm text-[var(--muted)]">
                Phone (optional)
                <input
                  type="tel"
                  value={leadForm.phone}
                  onChange={(event) =>
                    setLeadForm((current) => ({ ...current, phone: event.target.value }))
                  }
                  className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-white/25"
                />
              </label>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
              >
                {isSubmitting ? "Generating your snapshot…" : "Generate My Snapshot"}
              </button>
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-relaxed text-[var(--muted)]">
              By submitting this assessment, you agree that Pixel Narratives may
              use your information to generate your results and follow up about
              AI strategy, workflows, and related services. We do not sell your
              information. Read our{" "}
              <a
                href="/privacy"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        ) : null}

        {step === "deepDiveReport" ? (
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              AI Opportunity Snapshot
            </p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl md:leading-none">
              Your directional 90-day AI snapshot
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--muted)]">
              {reportAiRefreshing ? (
                <span aria-live="polite">Refining with optional AI narration…</span>
              ) : null}
              {crmSyncNotice ? (
                <span className="text-amber-200/90 md:max-w-xl" aria-live="polite">
                  {crmSyncNotice}
                </span>
              ) : null}
            </div>

            {deepDiveReportMeta.generationSource === "deterministic_fallback" &&
            deepDiveReportMeta.openAiErrorCategory ? (
              <p className="mt-6 max-w-3xl rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-[var(--muted)]">
                This report is complete and grounded in your answers—we build it the same way for
                everyone. The optional wording pass didn’t run ({formatDeepDiveFallbackReason(String(deepDiveReportMeta.openAiErrorCategory))}).
              </p>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3 print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Save or print this snapshot
              </button>
            </div>

            <div className="mt-12 space-y-12">
              <section>
                <h3 className="text-lg font-normal text-[var(--foreground)] md:text-xl">
                  What your answers suggest
                </h3>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {unifiedForDeepDiveReport.summaryParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-lg font-normal text-[var(--foreground)] md:text-xl">
                  Top 3 likely opportunities
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {unifiedForDeepDiveReport.topOpportunities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-normal text-[var(--foreground)] md:text-xl">
                  Common gaps at this stage
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {unifiedForDeepDiveReport.commonGaps.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-normal text-[var(--foreground)] md:text-xl">
                  Suggested next moves
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {unifiedForDeepDiveReport.suggestedNextMoves.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-normal text-[var(--foreground)] md:text-xl">
                  Where the Blueprint goes deeper
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {unifiedForDeepDiveReport.blueprintBridge}
                </p>
              </section>
            </div>

            <div className="mt-14 rounded-[28px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
              <h3 className="text-2xl leading-tight md:text-3xl">
                Want the actual roadmap?
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                The Deep Dive is a directional snapshot. The AI Readiness Blueprint
                maps your actual workflows, data, priorities, and implementation
                sequence into a practical plan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://calendly.com/pixelnarratives"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Book a Blueprint Call
                </a>
                <a
                  href="/intelligence-layer"
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                >
                  Explore Intelligence Layer
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export type SingleChoiceValue = "A" | "B" | "C" | "D";

export type AssessmentAnswer =
  | SingleChoiceValue
  | string[]
  | number
  | undefined;

export type AssessmentAnswers = Record<string, AssessmentAnswer>;

export type SingleChoiceQuestion = {
  id: string;
  section: string;
  type: "single";
  question: string;
  options: Array<{
    value: SingleChoiceValue;
    label: string;
  }>;
};

export type MultiChoiceQuestion = {
  id: string;
  section: string;
  type: "multi";
  question: string;
  helper: string;
  options: Array<{
    value: string;
    label: string;
    points: number;
    exclusive?: boolean;
  }>;
};

export type ScaleQuestion = {
  id: string;
  section: string;
  type: "scale";
  question: string;
  helper: string;
  minLabel: string;
  maxLabel: string;
};

export type AssessmentQuestion =
  | SingleChoiceQuestion
  | MultiChoiceQuestion
  | ScaleQuestion;

export type ReadinessTier = {
  category:
    | "Strategic & Ready"
    | "Operationally Ready"
    | "Emerging Potential"
    | "Early Stage";
  range: string;
  summary: string;
};

export type SectionScore = {
  id: "usage" | "readinessGaps" | "goals";
  label: string;
  rawTotal: number;
  minTotal: number;
  maxTotal: number;
  score: number;
};

export type ReadinessScoreBreakdown = {
  rawTotal: number;
  minTotal: number;
  maxTotal: number;
  score: number;
  tier: ReadinessTier;
  sectionTotals: Record<string, number>;
  sectionScores: SectionScore[];
};

export const minimumRawScore = 9;
export const maximumRawScore = 46;

const sectionScoreDefinitions: Array<{
  id: SectionScore["id"];
  label: string;
  sections: string[];
  minTotal: number;
  maxTotal: number;
}> = [
  {
    id: "usage",
    label: "Usage & Maturity",
    sections: ["Current AI Usage & Maturity"],
    minTotal: 4,
    maxTotal: 16,
  },
  {
    id: "readinessGaps",
    label: "Governance & Adoption",
    sections: ["Pain Points & Readiness Gaps"],
    minTotal: 4,
    maxTotal: 16,
  },
  {
    id: "goals",
    label: "Goals & Urgency",
    sections: ["Goals & Ambition"],
    minTotal: 1,
    maxTotal: 14,
  },
];

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "tools_in_use",
    section: "Current AI Usage & Maturity",
    type: "single",
    question:
      "How many AI tools (ChatGPT, Claude, Midjourney, Gemini, etc.) is your team actively using?",
    options: [
      { value: "A", label: "None or just experimenting personally" },
      { value: "B", label: "1–2 tools, used occasionally" },
      { value: "C", label: "3+ tools, with some team-wide adoption" },
      { value: "D", label: "Multiple tools integrated into daily workflows" },
    ],
  },
  {
    id: "current_results",
    section: "Current AI Usage & Maturity",
    type: "single",
    question: "What best describes your company’s current AI results?",
    options: [
      { value: "A", label: "Mostly hype — very little measurable impact" },
      {
        value: "B",
        label: "Some time savings on small tasks, but nothing strategic",
      },
      {
        value: "C",
        label: "A few useful pilots or automations delivering value",
      },
      { value: "D", label: "Consistent, tracked ROI across departments" },
    ],
  },
  {
    id: "organization",
    section: "Current AI Usage & Maturity",
    type: "single",
    question: "How organized is your AI approach right now?",
    options: [
      {
        value: "A",
        label: "Completely ad-hoc (people just doing their own thing)",
      },
      { value: "B", label: "Some informal guidelines" },
      { value: "C", label: "Basic processes or one person leading efforts" },
      { value: "D", label: "Clear strategy, priorities, and governance" },
    ],
  },
  {
    id: "team_confidence",
    section: "Current AI Usage & Maturity",
    type: "single",
    question:
      "How confident are you in your team’s ability to use AI effectively and safely?",
    options: [
      {
        value: "A",
        label: "Not confident — lots of hesitation or misuse risk",
      },
      { value: "B", label: "Somewhat confident in a few people" },
      { value: "C", label: "Most of the team is capable but inconsistent" },
      {
        value: "D",
        label: "High confidence — we have training and standards",
      },
    ],
  },
  {
    id: "biggest_frustration",
    section: "Pain Points & Readiness Gaps",
    type: "single",
    question: "What’s your biggest frustration with AI right now?",
    options: [
      {
        value: "A",
        label: "Too much time wasted testing tools with no clear wins",
      },
      {
        value: "B",
        label: "Concern about data privacy, compliance, or brand risk",
      },
      {
        value: "C",
        label: "Ideas exist but we can’t prioritize or implement effectively",
      },
      {
        value: "D",
        label: "We get results but they don’t scale or stick with the team",
      },
    ],
  },
  {
    id: "business_alignment",
    section: "Pain Points & Readiness Gaps",
    type: "single",
    question:
      "How aligned is AI with your top business goals (revenue, efficiency, customer experience)?",
    options: [
      {
        value: "A",
        label: "Not aligned — AI feels disconnected from strategy",
      },
      { value: "B", label: "Somewhat aligned" },
      { value: "C", label: "Mostly aligned for a few initiatives" },
      {
        value: "D",
        label: "Strongly aligned — AI is part of how we plan growth",
      },
    ],
  },
  {
    id: "governance",
    section: "Pain Points & Readiness Gaps",
    type: "single",
    question:
      "Do you have governance or policies around AI use (approved tools, data handling, output review)?",
    options: [
      { value: "A", label: "No policies at all" },
      { value: "B", label: "Very basic or informal rules" },
      { value: "C", label: "Some guidelines in place" },
      { value: "D", label: "Clear, documented governance" },
    ],
  },
  {
    id: "adoption_readiness",
    section: "Pain Points & Readiness Gaps",
    type: "single",
    question:
      "How easy would it be for your team to adopt a new AI-powered process?",
    options: [
      {
        value: "A",
        label: "Very difficult — resistance or skill gaps",
      },
      {
        value: "B",
        label: "Possible but would need significant hand-holding",
      },
      { value: "C", label: "Fairly straightforward with good training" },
      { value: "D", label: "Smooth — we’ve done it successfully before" },
    ],
  },
  {
    id: "success_goals",
    section: "Goals & Ambition",
    type: "multi",
    question:
      "What would success with AI look like for your company in the next 12 months?",
    helper: "Select all that apply.",
    options: [
      {
        value: "efficiency",
        label: "Reduce manual work / increase efficiency",
        points: 1,
      },
      {
        value: "experience",
        label: "Improve content, marketing, or customer experience",
        points: 1,
      },
      {
        value: "revenue",
        label: "Create new revenue streams or product features",
        points: 1,
      },
      {
        value: "insights",
        label: "Better decision-making through insights",
        points: 1,
      },
      {
        value: "unsure",
        label: "None of the above / still figuring it out",
        points: 0,
        exclusive: true,
      },
    ],
  },
  {
    id: "importance",
    section: "Goals & Ambition",
    type: "scale",
    question: "On a scale of 1–10, how important is it for you to get AI right in 2026?",
    helper: "1 = Nice to have, 10 = Critical to our growth/survival.",
    minLabel: "Nice to have",
    maxLabel: "Critical",
  },
];

const singleChoicePoints: Record<SingleChoiceValue, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
};

export function getQuestionPoints(
  question: AssessmentQuestion,
  answer: AssessmentAnswer
) {
  if (question.type === "single") {
    return typeof answer === "string" && answer in singleChoicePoints
      ? singleChoicePoints[answer as SingleChoiceValue]
      : 0;
  }

  if (question.type === "multi") {
    const selected = Array.isArray(answer) ? answer : [];
    return Math.min(
      4,
      selected.reduce((total, value) => {
        const option = question.options.find((item) => item.value === value);
        return total + (option?.points ?? 0);
      }, 0)
    );
  }

  if (question.type === "scale") {
    return typeof answer === "number" ? answer : 0;
  }

  return 0;
}

export function calculateReadinessScore(answers: AssessmentAnswers) {
  return calculateReadinessBreakdown(answers).score;
}

export function calculateReadinessBreakdown(
  answers: AssessmentAnswers
): ReadinessScoreBreakdown {
  const total = assessmentQuestions.reduce((sum, question) => {
    return sum + getQuestionPoints(question, answers[question.id]);
  }, 0);
  const normalized =
    1 + ((total - minimumRawScore) / (maximumRawScore - minimumRawScore)) * 9;
  const score = Math.max(1, Math.min(10, Math.round(normalized)));
  const sectionTotals = assessmentQuestions.reduce<Record<string, number>>(
    (sections, question) => {
      sections[question.section] =
        (sections[question.section] ?? 0) +
        getQuestionPoints(question, answers[question.id]);
      return sections;
    },
    {}
  );
  const sectionScores = sectionScoreDefinitions.map((section) => {
    const rawTotal = section.sections.reduce(
      (sum, sectionName) => sum + (sectionTotals[sectionName] ?? 0),
      0
    );
    const normalized =
      1 +
      ((rawTotal - section.minTotal) / (section.maxTotal - section.minTotal)) *
        9;

    return {
      id: section.id,
      label: section.label,
      rawTotal,
      minTotal: section.minTotal,
      maxTotal: section.maxTotal,
      score: Math.max(1, Math.min(10, Math.round(normalized))),
    };
  });

  return {
    rawTotal: total,
    minTotal: minimumRawScore,
    maxTotal: maximumRawScore,
    score,
    tier: getReadinessTier(score),
    sectionTotals,
    sectionScores,
  };
}

export function getReadinessTier(score: number): ReadinessTier {
  if (score >= 9) {
    return {
      category: "Strategic & Ready",
      range: "9–10",
      summary:
        "You’re ahead of most teams. The opportunity now is not basic adoption, it is leverage: prioritizing the highest-value use cases, preventing tool sprawl, and turning AI into a repeatable operating advantage.",
    };
  }

  if (score >= 7) {
    return {
      category: "Operationally Ready",
      range: "7–8",
      summary:
        "You have enough structure and momentum to turn AI into real operational value. The opportunity now is to tighten governance, improve adoption, and scale what is already working across the business.",
    };
  }

  if (score >= 4) {
    return {
      category: "Emerging Potential",
      range: "4–6",
      summary:
        "There’s momentum here, but it needs direction. The next move is to choose one high-value use case, build it into the way your team already works, and measure whether it actually improves the business.",
    };
  }

  return {
    category: "Early Stage",
    range: "1–3",
    summary:
      "You’re early in the AI journey, which is not a bad place to be. The most important move now is to avoid random tool testing and build a clear foundation: where AI should help, what should stay human, and which workflow is worth improving first.",
  };
}

export function buildAnswerPayload(answers: AssessmentAnswers) {
  return assessmentQuestions.map((question) => ({
    id: question.id,
    section: question.section,
    question: question.question,
    answer: answers[question.id],
    points: getQuestionPoints(question, answers[question.id]),
  }));
}

"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  assessmentQuestions,
  buildAnswerPayload,
  calculateReadinessBreakdown,
  type AssessmentAnswer,
  type AssessmentAnswers,
  type AssessmentQuestion,
} from "../lib/aiReadinessAssessment";

type LeadForm = {
  name: string;
  email: string;
  company: string;
  phone: string;
};

type Step = "intro" | "questions" | "lead" | "results";

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

export default function AiReadinessAssessment() {
  const [step, setStep] = useState<Step>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [leadForm, setLeadForm] = useState<LeadForm>(initialLeadForm);
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
      transitionTo(() => setStep("lead"));
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

    if (step === "lead") {
      transitionTo(() => setStep("questions"));
    }
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...leadForm,
      score,
      category: tier.category,
      answers: {
        score,
        category: tier.category,
        rawTotal: scoreBreakdown.rawTotal,
        maxTotal: scoreBreakdown.maxTotal,
        sectionTotals: scoreBreakdown.sectionTotals,
        sectionScores: scoreBreakdown.sectionScores,
        responses: buildAnswerPayload(answers),
      },
      source: "pixelnarratives.studio/ai-readiness-assessment",
    };

    try {
      const response = await fetch("/api/assessment-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Assessment CRM sync failed", await response.text());
      }
    } catch (error) {
      console.error("Assessment CRM sync failed", error);
    } finally {
      setIsSubmitting(false);
      transitionTo(() => setStep("results"));
    }
  }

  function printSummary() {
    window.print();
  }

  const canContinue =
    step !== "questions" || isQuestionAnswered(currentQuestion, answers);

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

        {step === "lead" ? (
          <form onSubmit={submitLead} className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Almost Done
            </p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
              Where should we send your AI readiness summary?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Enter your details to view your results and next steps. Phone is
              optional.
            </p>

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
                {isSubmitting ? "Calculating..." : "View My Results"}
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
      </div>
    </div>
  );
}

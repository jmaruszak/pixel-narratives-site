"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const STEPS = [
  {
    title: "Define Your Outcomes",
    body: "We align on what success looks like - revenue, time saved, efficiency, or growth.",
  },
  {
    title: "Audit Your Current Systems",
    body: "We map your workflows, tools, and bottlenecks to identify where value is being lost.",
  },
  {
    title: "Build Your Blueprint",
    body: "You get a clear, actionable plan for automation, AI tools, and workflow improvements.",
  },
  {
    title: "Implement & Optimize",
    body: "We deploy systems, refine performance, and track measurable improvements over time.",
  },
] as const;

export default function IntelligenceLayerProcessFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const update = useCallback(() => {
    if (reducedMotion) {
      setProgress(1);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const { top, height } = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollable = height - vh;
    if (scrollable <= 0) {
      setProgress(1);
      return;
    }
    setProgress(Math.max(0, Math.min(1, -top / scrollable)));
  }, [reducedMotion]);

  useLayoutEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mql.matches);
    const onMql = () => setReducedMotion(mql.matches);
    mql.addEventListener("change", onMql);
    return () => mql.removeEventListener("change", onMql);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setProgress(1);
      return;
    }
    const onScroll = () => requestAnimationFrame(update);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion, update]);

  const t = progress * 4;
  const lineH = progress * 100;
  const lineV = progress * 100;

  return (
    <section
      ref={sectionRef}
      className={[
        "il-process border-t border-white/8",
        !reducedMotion && "min-h-[190vh]",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby="il-process-heading"
    >
      <div
        className={[
          "il-process-sticky flex min-h-screen items-center",
          !reducedMotion && "sticky top-0",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Intelligence Layer Process
            </p>
            <h2
              id="il-process-heading"
              className="mt-4 text-2xl font-normal leading-snug text-[var(--foreground)] sm:text-3xl md:max-w-xl"
            >
              A structured path from goals to systems—and measurable follow-through.
            </h2>
          </div>

          <div className="il-process-canvas relative mt-12 pl-7 md:mt-16 md:pl-0">
            <div
              className="il-process-rail-h pointer-events-none absolute z-0 hidden w-full md:block"
              style={{ top: "1.45rem" }}
              aria-hidden
            >
              <div className="il-process-h-track" />
              <div className="il-process-h-fill-wrap">
                <div
                  className="il-process-h-fill"
                  style={{
                    width: reducedMotion ? "100%" : `${lineH}%`,
                  }}
                />
              </div>
            </div>

            <ol className="relative z-[1] m-0 grid list-none gap-9 p-0 md:grid-cols-4 md:gap-2 md:gap-y-0">
              {STEPS.map((step, i) => {
                const stepT = t - i;
                const o = Math.min(
                  1,
                  Math.max(0.1, 0.1 + stepT * 0.88)
                );
                const y = reducedMotion
                  ? 0
                  : Math.min(0, (1 - Math.min(1, o / 0.99)) * 9);
                return (
                  <li
                    key={step.title}
                    className="il-process-step relative m-0 min-w-0 pl-0 md:pt-0 md:text-left"
                    style={
                      reducedMotion
                        ? { opacity: 1, transform: "none" }
                        : { opacity: o, transform: `translate3d(0, ${y}px, 0)` }
                    }
                  >
                    <div
                      className="mb-2.5 text-[0.6rem] font-mono font-normal tabular-nums text-[var(--muted)] md:absolute md:top-0 md:mb-0 md:flex md:min-h-7 md:min-w-0 md:max-w-full md:items-end md:leading-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-base font-normal leading-snug text-[var(--foreground)] md:mt-8">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-balance text-[var(--muted)]">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ol>

            <div
              className="il-process-rail-v pointer-events-none absolute top-0 bottom-0 left-[0.15rem] z-0 w-px md:hidden"
              aria-hidden
            >
              <div className="il-process-v-track" />
              <div
                className="il-process-v-fill"
                style={{
                  height: reducedMotion ? "100%" : `${lineV}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

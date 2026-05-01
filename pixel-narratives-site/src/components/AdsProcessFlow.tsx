"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

const STEPS = [
  {
    title: "Creative Consultation",
    body: "We learn about your brand, audience, and goals.",
  },
  {
    title: "Build the Concept",
    body: "We develop a high-impact, shareable ad idea tailored to your brand.",
  },
  {
    title: "Produce the Spot",
    body: "We create the ad using AI-powered production and cinematic editing.",
  },
  {
    title: "Launch + Amplify",
    body: "You deploy the ad across your channels and campaigns.",
  },
] as const;

export default function AdsProcessFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const update = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const { top, height } = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const scrollable = height - vh;
    if (scrollable <= 0) {
      setProgress(1);
      return;
    }
    const p = -top / scrollable;
    setProgress(Math.max(0, Math.min(1, p)));
  }, []);

  useEffect(() => {
    if (reducedMotion) {
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

  const displayProgress = reducedMotion ? 1 : progress;
  const t = displayProgress * 4;
  const lineH = displayProgress * 100;
  const lineV = displayProgress * 100;

  return (
    <section
      ref={sectionRef}
      className={[
        "ads-process border-t border-white/8",
        !reducedMotion && "min-h-[200vh]",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby="ads-process-heading"
    >
      <div
        className={[
          "ads-process-sticky flex min-h-screen items-center",
          !reducedMotion && "sticky top-0",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Ads Process
            </p>
            <h2
              id="ads-process-heading"
              className="mt-4 text-4xl leading-[1.05] md:text-5xl"
            >
              From insight
              <br />
              to launch.
            </h2>
          </div>

          <div className="ads-process-canvas relative mt-16 pl-7 md:mt-20 md:pl-0">
            <div
              className="ads-process-rail-h pointer-events-none absolute z-0 hidden w-full md:block"
              style={{ top: "1.55rem" }}
              aria-hidden
            >
              <div className="ads-process-h-track" />
              <div className="ads-process-h-fill-wrap">
                <div
                  className="ads-process-h-fill"
                  style={{
                    width: reducedMotion ? "100%" : `${lineH}%`,
                  }}
                />
              </div>
            </div>

            <ol className="relative z-[1] m-0 grid list-none gap-10 p-0 md:grid-cols-4 md:gap-2 md:gap-y-0">
              {STEPS.map((step, i) => {
                const stepT = t - i;
                const o = Math.min(1, Math.max(0.16, 0.16 + stepT * 0.95));
                const y = reducedMotion ? 0 : Math.min(0, (1 - o) * 12);
                const complete = t >= i + 0.75;
                return (
                  <li
                    key={step.title}
                    className="relative m-0 pl-0 md:pt-0 md:text-center"
                    style={
                      reducedMotion
                        ? { opacity: 1, transform: "none" }
                        : { opacity: o, transform: `translate3d(0, ${y}px, 0)` }
                    }
                  >
                    <div
                      className="ads-process-index mb-3 text-[0.65rem] font-mono font-medium leading-none tabular-nums transition-colors duration-500 md:mb-0 md:flex md:min-h-8 md:items-end md:justify-center md:pb-0.5"
                      data-complete={complete ? "true" : "false"}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg leading-snug text-[var(--foreground)] md:mt-0 md:text-balance md:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-balance text-[var(--muted)]">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ol>

            <div
              className="ads-process-rail-v pointer-events-none absolute top-0 bottom-0 left-[0.15rem] z-0 w-px md:hidden"
              aria-hidden
            >
              <div className="ads-process-v-track" />
              <div
                className="ads-process-v-fill"
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

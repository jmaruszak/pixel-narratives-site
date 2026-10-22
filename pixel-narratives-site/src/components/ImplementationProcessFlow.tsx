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
    title: "Discover",
    body: "We get to know your business, how you work, and where we can make a meaningful difference.",
  },
  {
    title: "Define",
    body: "We agree on what we're doing, what it costs, how long it should take, and what success looks like.",
  },
  {
    title: "Deliver",
    body: "We get to work. You'll know what's happening, what's been accomplished, and what's coming next.",
  },
  {
    title: "Demonstrate",
    body: "We show you what we've built or accomplished, make sure your team knows how to use it, and measure the results where possible.",
  },
  {
    title: "Continue",
    body: "Some projects end with a handshake. Others turn into ongoing partnerships. Either way, we're here when you need us.",
  },
] as const;

export default function ImplementationProcessFlow() {
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
    setProgress(Math.max(0, Math.min(1, -top / scrollable)));
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
  const t = displayProgress * STEPS.length;
  const lineH = displayProgress * 100;
  const lineV = displayProgress * 100;

  return (
    <section
      ref={sectionRef}
      className={[
        "il-process border-t border-white/8",
        !reducedMotion && "min-h-[190vh] max-lg:min-h-0",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby="il-process-heading"
    >
      <div
        className={[
          "il-process-sticky flex min-h-screen items-center max-lg:min-h-0",
          !reducedMotion && "sticky top-0 max-lg:static",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <h2
              id="il-process-heading"
              className="text-2xl font-normal leading-snug text-[var(--foreground)] sm:text-3xl"
            >
              What Does Working With Us Look Like?
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>Every business is different. But working with us shouldn&apos;t be complicated.</p>
              <p>
                Whether we&apos;re building something for you, training your team, or helping you
                figure out what&apos;s possible, you&apos;ll always know what to expect.
              </p>
            </div>
          </div>

          <div className="il-process-canvas relative mt-12 pl-7 md:mt-16 lg:pl-0">
            <div
              className="il-process-rail-h pointer-events-none absolute z-0 hidden w-full lg:block"
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

            <ol className="relative z-[1] m-0 grid list-none gap-9 p-0 lg:grid-cols-5 lg:gap-2 lg:gap-y-0">
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
                    className="il-process-step relative m-0 min-w-0 pl-0 lg:pt-0 lg:text-left"
                    style={
                      reducedMotion
                        ? { opacity: 1, transform: "none" }
                        : { opacity: o, transform: `translate3d(0, ${y}px, 0)` }
                    }
                  >
                    <div
                      className="mb-2.5 text-[0.6rem] font-mono font-normal tabular-nums text-[var(--muted)] lg:absolute lg:top-0 lg:mb-0 lg:flex lg:min-h-7 lg:min-w-0 lg:max-w-full lg:items-end lg:leading-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-base font-normal leading-snug text-[var(--foreground)] lg:mt-8">
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
              className="il-process-rail-v pointer-events-none absolute top-0 bottom-0 left-[0.15rem] z-0 w-px lg:hidden"
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

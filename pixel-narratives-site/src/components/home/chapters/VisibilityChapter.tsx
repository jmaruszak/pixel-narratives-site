"use client";

import { m, useTransform, type MotionValue } from "framer-motion";
import ParallaxLayer from "../motion/primitives/ParallaxLayer";
import { CHAPTER_BANDS, segmentProgress } from "../motion/motionTokens";

type VisibilityChapterProps = {
  scrollYProgress: MotionValue<number>;
};

export default function VisibilityChapter({
  scrollYProgress,
}: VisibilityChapterProps) {
  const local = useTransform(scrollYProgress, (value) =>
    segmentProgress(value, CHAPTER_BANDS.visibility.start, CHAPTER_BANDS.visibility.end),
  );
  const panelScale = useTransform(local, [0, 0.35, 1], [0.92, 1, 0.98]);
  const panelOpacity = useTransform(local, [0, 0.2, 1], [0, 1, 1]);
  const gridOpacity = useTransform(local, [0, 0.25], [0, 0.12]);

  return (
    <div className="relative flex h-full w-full items-center justify-end px-6 md:px-12">
      <m.div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{ opacity: gridOpacity }}
        aria-hidden
      >
        <div className="grid h-full w-full grid-cols-12 grid-rows-8 gap-px p-8">
          {Array.from({ length: 96 }).map((_, index) => (
            <div key={index} className="border border-white/20" />
          ))}
        </div>
      </m.div>

      <p
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none text-[clamp(6rem,18vw,14rem)] font-semibold leading-none text-white/[0.02] md:left-8"
        aria-hidden
      >
        01
      </p>

      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        depth="mid"
        range={[CHAPTER_BANDS.visibility.start, CHAPTER_BANDS.visibility.end]}
        className="relative w-full max-w-3xl lg:max-w-4xl"
      >
        <m.div
          className="rounded-[28px] border border-white/12 bg-black/55 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-8"
          style={{ scale: panelScale, opacity: panelOpacity }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Search visibility
          </p>
          <p className="mt-4 text-4xl leading-none md:text-5xl">+34%</p>
          <p className="mt-2 text-sm text-[var(--muted)]">Organic reach trajectory</p>
          <div className="mt-8 space-y-3">
            {["Your brand", "Category leader"].map((row, index) => (
              <div
                key={row}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/40 px-5 py-4"
              >
                <span className="text-sm text-[var(--foreground)] md:text-base">
                  {row}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {index === 0 ? "Rising" : "Benchmark"}
                </span>
              </div>
            ))}
          </div>
        </m.div>
      </ParallaxLayer>
    </div>
  );
}

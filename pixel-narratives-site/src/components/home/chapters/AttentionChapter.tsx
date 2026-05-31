"use client";

import { m, useTransform, type MotionValue } from "framer-motion";
import ParallaxLayer from "../motion/primitives/ParallaxLayer";
import { CHAPTER_BANDS, segmentProgress } from "../motion/motionTokens";

type AttentionChapterProps = {
  scrollYProgress: MotionValue<number>;
};

export default function AttentionChapter({
  scrollYProgress,
}: AttentionChapterProps) {
  const local = useTransform(scrollYProgress, (value) =>
    segmentProgress(value, CHAPTER_BANDS.attention.start, CHAPTER_BANDS.attention.end),
  );
  const frameScale = useTransform(local, [0, 0.4, 1], [0.9, 1, 0.98]);
  const frameOpacity = useTransform(local, [0, 0.25, 1], [0, 1, 1]);
  const plateY = useTransform(local, [0, 1], [48, -24]);

  return (
    <div className="relative flex h-full w-full items-center justify-center px-6 md:justify-end md:px-12">
      <p
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none text-[clamp(6rem,18vw,14rem)] font-semibold leading-none text-white/[0.02] md:left-8"
        aria-hidden
      >
        02
      </p>

      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        depth="fg"
        range={[CHAPTER_BANDS.attention.start, CHAPTER_BANDS.attention.end]}
        className="relative w-full max-w-4xl"
      >
        <m.div style={{ y: plateY, scale: frameScale, opacity: frameOpacity }}>
          <div className="relative aspect-video overflow-hidden rounded-[32px] border border-white/12 bg-black/55 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <img
              src="/images/studio-launch-still.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/20" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Cinematic frame
              </p>
              <p className="mt-3 max-w-lg text-2xl leading-tight text-[var(--foreground)] md:text-3xl">
                Story first. Ask second.
              </p>
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)] backdrop-blur md:block">
            Hook · Story · Payoff
          </div>
        </m.div>
      </ParallaxLayer>
    </div>
  );
}

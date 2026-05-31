"use client";

import { m, useTransform, type MotionValue } from "framer-motion";
import GlowNode from "../motion/primitives/GlowNode";
import WorkflowEdge from "../motion/primitives/WorkflowEdge";
import ParallaxLayer from "../motion/primitives/ParallaxLayer";
import { CHAPTER_BANDS, segmentProgress } from "../motion/motionTokens";

const NODES = ["Lead", "CRM", "Workflow", "Report"] as const;

type ScaleChapterProps = {
  scrollYProgress: MotionValue<number>;
};

export default function ScaleChapter({ scrollYProgress }: ScaleChapterProps) {
  const local = useTransform(scrollYProgress, (value) =>
    segmentProgress(value, CHAPTER_BANDS.scale.start, CHAPTER_BANDS.scale.end),
  );
  const groupOpacity = useTransform(local, [0, 0.2, 1], [0, 1, 1]);
  const groupY = useTransform(local, [0, 1], [40, -20]);
  const pathOpacity = useTransform(local, [0.35, 0.7], [0, 1]);
  const pathY = useTransform(local, [0.35, 0.7], [24, 0]);

  return (
    <div className="relative flex h-full w-full items-center justify-end px-6 md:px-12">
      <p
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 select-none text-[clamp(6rem,18vw,14rem)] font-semibold leading-none text-white/[0.02] md:left-8"
        aria-hidden
      >
        03
      </p>

      <ParallaxLayer
        scrollYProgress={scrollYProgress}
        depth="mid"
        range={[CHAPTER_BANDS.scale.start, CHAPTER_BANDS.scale.end]}
        className="relative w-full max-w-4xl"
      >
        <m.div style={{ opacity: groupOpacity, y: groupY }}>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-4">
            {NODES.map((node, index) => (
              <ScaleNode
                key={node}
                label={node}
                index={index}
                local={local}
              />
            ))}
          </div>
          <m.div
            className="mt-10 rounded-[28px] border border-white/12 bg-black/55 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-8"
            style={{ opacity: pathOpacity, y: pathY }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Automation path
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Capture", "Route", "Notify", "Measure"].map((step) => (
                <span
                  key={step}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-[var(--foreground)]"
                >
                  {step}
                </span>
              ))}
            </div>
          </m.div>
        </m.div>
      </ParallaxLayer>
    </div>
  );
}

function ScaleNode({
  label,
  index,
  local,
}: {
  label: string;
  index: number;
  local: MotionValue<number>;
}) {
  const nodeProgress = useTransform(local, [0.1 + index * 0.08, 0.55 + index * 0.08], [0, 1]);
  const opacity = useTransform(nodeProgress, [0, 0.4], [0, 1]);
  const y = useTransform(nodeProgress, [0, 1], [28, 0]);

  return (
    <m.div className="relative flex flex-col items-center" style={{ opacity, y }}>
      <div className="flex min-h-[7rem] w-full flex-col items-center justify-center rounded-[24px] border border-white/12 bg-black/55 px-3 py-5 text-center shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl md:min-h-[8.5rem]">
        <GlowNode size="sm" />
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
          {label}
        </p>
      </div>
      {index < NODES.length - 1 ? (
        <EdgeProgress local={local} index={index} />
      ) : null}
    </m.div>
  );
}

function EdgeProgress({
  local,
  index,
}: {
  local: MotionValue<number>;
  index: number;
}) {
  const progress = useTransform(
    local,
    [0.18 + index * 0.1, 0.5 + index * 0.1],
    [0, 1],
  );

  return (
    <m.div className="absolute left-[calc(100%+0.25rem)] top-12 hidden w-[calc(100%-0.5rem)] sm:block">
      <WorkflowEdgeProgress progress={progress} />
    </m.div>
  );
}

function WorkflowEdgeProgress({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  const scaleX = useTransform(progress, (value) => Math.max(0, Math.min(1, value)));

  return (
    <m.span
      className="block h-px origin-left bg-gradient-to-r from-white/5 via-white/40 to-white/5"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

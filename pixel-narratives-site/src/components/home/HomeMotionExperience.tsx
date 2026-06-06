"use client";

import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import DestinationCards from "./DestinationCards";
import HomeCinematicBackdrop from "./HomeCinematicBackdrop";
import HomeLenisProvider from "./HomeLenisProvider";
import {
  CHAPTER_COPY,
  SCROLL_TRACK_HEIGHT_VH,
  SCROLL_TRACK_HEIGHT_VH_MOBILE,
} from "./motion/motionTokens";
import { getChapter, useChapterMotion, useHomeScrollProgress } from "./useHomeScrollProgress";
import { useCoarsePointer } from "./useCoarsePointer";
import { useReducedMotion } from "./useReducedMotion";

const VisibilityChapter = dynamic(() => import("./chapters/VisibilityChapter"), {
  ssr: false,
});
const AttentionChapter = dynamic(() => import("./chapters/AttentionChapter"), {
  ssr: false,
});
const ScaleChapter = dynamic(() => import("./chapters/ScaleChapter"), {
  ssr: false,
});

const PROGRESS_CHAPTERS = ["visibility", "attention", "scale"] as const;

function ChapterHeadline({
  scrollYProgress,
  chapterTextVisibility,
}: {
  scrollYProgress: ReturnType<typeof useHomeScrollProgress>["scrollYProgress"];
  chapterTextVisibility: ReturnType<typeof useChapterMotion>["chapterTextVisibility"];
}) {
  const [chapter, setChapter] = useState<
    "visibility" | "attention" | "scale"
  >("visibility");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = getChapter(value);
    if (next === "visibility" || next === "attention" || next === "scale") {
      setChapter(next);
    }
  });

  const copy = CHAPTER_COPY[chapter];

  return (
    <m.div
      className="pointer-events-none absolute left-6 top-28 z-20 max-w-xl md:left-10 md:top-32 lg:max-w-2xl"
      style={{ opacity: chapterTextVisibility }}
    >
      <p
        className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]"
        aria-live="polite"
      >
        {copy.label}
      </p>
      <h2 className="mt-4 text-4xl leading-none md:text-5xl lg:text-6xl">
        {copy.headline}
      </h2>
    </m.div>
  );
}

function ChapterProgressRail({
  scrollYProgress,
}: {
  scrollYProgress: ReturnType<typeof useHomeScrollProgress>["scrollYProgress"];
}) {
  const [chapter, setChapter] = useState<
    "visibility" | "attention" | "scale" | "intro" | "release"
  >("intro");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setChapter(getChapter(value));
  });

  return (
    <div
      className="pointer-events-none absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      aria-hidden
    >
      {PROGRESS_CHAPTERS.map((segment) => (
        <div
          key={segment}
          className={`h-10 w-px transition-colors duration-500 ${
            chapter === segment ? "bg-[var(--foreground)]" : "bg-white/15"
          }`}
        />
      ))}
    </div>
  );
}

function ScrollDrivenStage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isCoarsePointer = useCoarsePointer();
  const scrollTrackHeightVh = isCoarsePointer
    ? SCROLL_TRACK_HEIGHT_VH_MOBILE
    : SCROLL_TRACK_HEIGHT_VH;
  const { scrollYProgress } = useHomeScrollProgress(trackRef);
  const {
    introOpacity,
    introScale,
    introY,
    introFilter,
    introBackdropOpacity,
    scrollHintOpacity,
    visibilityOpacity,
    attentionOpacity,
    scaleOpacity,
    chapterTextVisibility,
    stageReleaseOpacity,
  } = useChapterMotion(scrollYProgress);

  const orbLeftY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbRightY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <>
      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${scrollTrackHeightVh}vh` }}
      >
        <div className="sticky top-0 h-[100svh] overflow-hidden bg-[var(--background)]">
          <HomeCinematicBackdrop
            introBackdropOpacity={introBackdropOpacity}
            visibilityOpacity={visibilityOpacity}
            attentionOpacity={attentionOpacity}
            scaleOpacity={scaleOpacity}
          />

          <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_20%,rgba(245,241,232,0.06),transparent_55%)]" />

          <m.div
            className="pointer-events-none absolute -left-24 top-20 z-[1] h-72 w-72 rounded-full bg-white/[0.04] blur-3xl"
            style={{ y: orbLeftY }}
          />
          <m.div
            className="pointer-events-none absolute -right-16 bottom-16 z-[1] h-96 w-96 rounded-full bg-white/[0.03] blur-3xl"
            style={{ y: orbRightY }}
          />

          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(11,12,15,0.55)_100%)]"
            aria-hidden
          />

          <div
            className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_left_center,rgba(11,12,15,0.72)_0%,rgba(11,12,15,0.35)_42%,transparent_72%)]"
            aria-hidden
          />

          <div className="home-stage-grain pointer-events-none absolute inset-0 z-[3]" aria-hidden />

          <m.div
            className="relative z-10 h-full"
            style={{ opacity: stageReleaseOpacity }}
          >
            <m.div
              className="pointer-events-none absolute inset-0 flex items-center px-6 md:px-10"
              style={{
                opacity: introOpacity,
                scale: introScale,
                y: introY,
                filter: introFilter,
              }}
            >
              <div className="max-w-3xl">
                <p className="hero-entrance text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                  Pixel Narratives
                </p>
                <h1 className="hero-entrance hero-entrance-delay-1 mt-4 text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
                  Every business is trying to get somewhere.
                </h1>
                <p className="hero-entrance hero-entrance-delay-2 mt-6 max-w-2xl text-lg text-[var(--foreground)] md:text-xl">
                  More visibility. More attention. More results.
                </p>
              </div>
            </m.div>

            <ChapterHeadline
              scrollYProgress={scrollYProgress}
              chapterTextVisibility={chapterTextVisibility}
            />

            <ChapterProgressRail scrollYProgress={scrollYProgress} />

            <m.div
              className="absolute inset-0 pt-36 md:pt-40"
              style={{ opacity: visibilityOpacity }}
            >
              <VisibilityChapter scrollYProgress={scrollYProgress} />
            </m.div>
            <m.div
              className="absolute inset-0 pt-36 md:pt-40"
              style={{ opacity: attentionOpacity }}
            >
              <AttentionChapter scrollYProgress={scrollYProgress} />
            </m.div>
            <m.div
              className="absolute inset-0 pt-36 md:pt-40"
              style={{ opacity: scaleOpacity }}
            >
              <ScaleChapter scrollYProgress={scrollYProgress} />
            </m.div>

            <m.div
              className="pointer-events-none absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--muted)]"
              style={{ opacity: scrollHintOpacity }}
            >
              <span className="text-xs uppercase tracking-[0.35em]">Scroll</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5 animate-pulse"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </m.div>
          </m.div>
        </div>
      </div>
      <DestinationCards />
    </>
  );
}

function ReducedMotionHome() {
  return (
    <>
      <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-24 md:px-10 md:py-32">
        <img
          src="/images/home-cinematic.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"
          aria-hidden
        />
        <div className="relative max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Pixel Narratives
          </p>
          <h1 className="mt-4 text-5xl leading-[0.95] md:text-7xl">
            Every business is trying to get somewhere.
          </h1>
          <p className="mt-6 text-lg text-[var(--foreground)] md:text-xl">
            More visibility. More attention. More results.
          </p>
        </div>
      </section>
      <DestinationCards />
    </>
  );
}

export default function HomeMotionExperience() {
  const reducedMotion = useReducedMotion();

  return (
    <HomeLenisProvider enabled={!reducedMotion}>
      <LazyMotion features={domAnimation}>
        <section aria-label="Pixel Narratives homepage experience">
          {reducedMotion ? <ReducedMotionHome /> : <ScrollDrivenStage />}
        </section>
      </LazyMotion>
    </HomeLenisProvider>
  );
}

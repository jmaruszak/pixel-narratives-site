"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import {
  CHAPTER_BANDS,
  getChapter,
  segmentProgress,
  type HomeChapter,
} from "./motion/motionTokens";

export { getChapter, segmentProgress, type HomeChapter };

export function useHomeScrollProgress(trackRef: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return { scrollYProgress };
}

export function useChapterMotion(scrollYProgress: MotionValue<number>) {
  const introOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.07, 0.1],
    [1, 1, 0.15, 0],
  );
  const introScale = useTransform(
    scrollYProgress,
    [0, CHAPTER_BANDS.intro.end],
    [1, 0.97],
  );
  const introY = useTransform(
    scrollYProgress,
    [0, CHAPTER_BANDS.intro.end],
    [0, -16],
  );
  const introBlur = useTransform(
    scrollYProgress,
    [0, 0.04, 0.07, 0.1],
    [0, 0, 4, 8],
  );
  const introFilter = useTransform(introBlur, (value) => `blur(${value}px)`);

  const introBackdropOpacity = useTransform(
    scrollYProgress,
    [0, CHAPTER_BANDS.intro.end - 0.02, CHAPTER_BANDS.visibility.start],
    [1, 1, 0],
  );

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.05, 0.08], [1, 1, 0]);

  const visibilityOpacity = useTransform(
    scrollYProgress,
    [
      CHAPTER_BANDS.visibility.start - 0.02,
      CHAPTER_BANDS.visibility.start + 0.06,
      CHAPTER_BANDS.visibility.end - 0.06,
      CHAPTER_BANDS.visibility.end + 0.02,
    ],
    [0, 1, 1, 0],
  );

  const attentionOpacity = useTransform(
    scrollYProgress,
    [
      CHAPTER_BANDS.attention.start - 0.02,
      CHAPTER_BANDS.attention.start + 0.06,
      CHAPTER_BANDS.attention.end - 0.06,
      CHAPTER_BANDS.attention.end + 0.02,
    ],
    [0, 1, 1, 0],
  );

  const scaleOpacity = useTransform(
    scrollYProgress,
    [
      CHAPTER_BANDS.scale.start - 0.02,
      CHAPTER_BANDS.scale.start + 0.06,
      CHAPTER_BANDS.scale.end - 0.06,
      CHAPTER_BANDS.scale.end + 0.02,
    ],
    [0, 1, 1, 0],
  );

  const chapterTextVisibility = useTransform(
    scrollYProgress,
    [
      CHAPTER_BANDS.visibility.start,
      CHAPTER_BANDS.visibility.start + 0.04,
      CHAPTER_BANDS.scale.end,
      CHAPTER_BANDS.release.start,
    ],
    [0, 1, 1, 0],
  );

  const stageReleaseOpacity = useTransform(
    scrollYProgress,
    [CHAPTER_BANDS.release.start, CHAPTER_BANDS.release.end],
    [1, 0.72],
  );

  return {
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
  };
}

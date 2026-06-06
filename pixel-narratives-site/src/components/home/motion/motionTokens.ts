export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;

export const DESTINATION_REVEAL = {
  headerDuration: 1.35,
  cardDuration: 1.15,
  cardStagger: 0.18,
  ease: CINEMATIC_EASE,
} as const;

export const SCRUB_SPRING = { stiffness: 40, damping: 20 } as const;

export const PARALLAX = {
  bg: 0.15,
  mid: 0.35,
  fg: 0.6,
} as const;

export const SCROLL_TRACK_HEIGHT_VH = 480;
export const SCROLL_TRACK_HEIGHT_VH_MOBILE = 320;

export const CHAPTER_BANDS = {
  intro: { start: 0, end: 0.12 },
  visibility: { start: 0.12, end: 0.38 },
  attention: { start: 0.38, end: 0.64 },
  scale: { start: 0.64, end: 0.88 },
  release: { start: 0.88, end: 1 },
} as const;

export type HomeChapter = keyof typeof CHAPTER_BANDS;

export function segmentProgress(
  progress: number,
  start: number,
  end: number,
): number {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

export function getChapter(progress: number): HomeChapter {
  if (progress < CHAPTER_BANDS.visibility.start) return "intro";
  if (progress < CHAPTER_BANDS.attention.start) return "visibility";
  if (progress < CHAPTER_BANDS.scale.start) return "attention";
  if (progress < CHAPTER_BANDS.release.start) return "scale";
  return "release";
}

export const CHAPTER_COPY = {
  visibility: {
    label: "Visibility",
    headline: "Get Found. Convert More.",
  },
  attention: {
    label: "Attention",
    headline: "Get Remembered",
  },
  scale: {
    label: "Implementation",
    headline: "Get Results",
  },
} as const;

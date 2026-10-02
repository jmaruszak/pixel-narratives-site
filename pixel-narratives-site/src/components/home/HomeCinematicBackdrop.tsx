"use client";

import { m, type MotionValue } from "framer-motion";
import Image from "next/image";

type HomeCinematicBackdropProps = {
  introBackdropOpacity: MotionValue<number>;
  visibilityOpacity: MotionValue<number>;
  attentionOpacity: MotionValue<number>;
  scaleOpacity: MotionValue<number>;
};

const INTRO_LAYER = {
  src: "/images/home-cinematic.jpg",
  key: "intro",
} as const;

const CHAPTER_LAYERS = [
  {
    src: "/images/web-cinematic.jpg",
    key: "visibility",
  },
  {
    src: "/images/hero-cinematic.jpg",
    key: "attention",
  },
  {
    src: "/images/int-cinematic.jpg",
    key: "scale",
  },
] as const;

function CinematicScrim({ chapter = false }: { chapter?: boolean }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      {chapter ? <div className="absolute inset-0 bg-black/45" aria-hidden /> : null}
      <div className="hero-ambient-gradient absolute inset-0" />
    </>
  );
}

export default function HomeCinematicBackdrop({
  introBackdropOpacity,
  visibilityOpacity,
  attentionOpacity,
  scaleOpacity,
}: HomeCinematicBackdropProps) {
  const chapterOpacities = [visibilityOpacity, attentionOpacity, scaleOpacity];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <m.div className="absolute inset-0" style={{ opacity: introBackdropOpacity }}>
        <Image
          src={INTRO_LAYER.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <CinematicScrim />
      </m.div>

      {CHAPTER_LAYERS.map((layer, index) => (
        <m.div
          key={layer.key}
          className="absolute inset-0"
          style={{ opacity: chapterOpacities[index] }}
        >
          <Image
            src={layer.src}
            alt=""
            fill
            sizes="100vw"
            className="scale-[1.02] object-cover blur-[2px]"
          />
          <CinematicScrim chapter />
        </m.div>
      ))}
    </div>
  );
}

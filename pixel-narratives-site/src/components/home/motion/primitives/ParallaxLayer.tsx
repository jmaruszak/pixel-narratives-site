"use client";

import { m, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";
import { PARALLAX } from "../motionTokens";

type ParallaxLayerProps = {
  children: ReactNode;
  scrollYProgress: MotionValue<number>;
  depth?: keyof typeof PARALLAX;
  className?: string;
  range?: [number, number];
};

export default function ParallaxLayer({
  children,
  scrollYProgress,
  depth = "mid",
  className = "",
  range = [0, 1],
}: ParallaxLayerProps) {
  const y = useTransform(
    scrollYProgress,
    range,
    [40 * PARALLAX[depth], -40 * PARALLAX[depth]],
  );

  return (
    <m.div className={className} style={{ y }}>
      {children}
    </m.div>
  );
}

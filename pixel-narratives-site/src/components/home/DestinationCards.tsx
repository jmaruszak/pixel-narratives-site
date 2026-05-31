"use client";

import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef } from "react";
import CtaCard from "../CtaCard";
import NextStepSection from "../NextStepSection";
import { HOME_PATH_CARDS } from "../../lib/homePathCards";
import { CINEMATIC_EASE } from "./motion/motionTokens";

export default function DestinationCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <LazyMotion features={domAnimation}>
      <NextStepSection contentClassName="pb-24 pt-8 md:pb-32 md:pt-12">
        <div ref={ref}>
          <m.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 1.1, ease: CINEMATIC_EASE }}
          >
            <h2 className="text-4xl leading-none md:text-6xl">
              There are three paths to growth.
            </h2>
            <p className="mt-4 text-lg text-[var(--foreground)] md:text-xl">
              Visibility. Attention. Scale.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Every business is trying to grow. The challenge is knowing where
              to focus next. Whether you need to be found, earn more attention,
              or build systems that scale, we&apos;ll help you choose the right
              path forward.
            </p>
          </m.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {HOME_PATH_CARDS.map((card, index) => (
              <m.div
                key={card.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.14,
                  ease: CINEMATIC_EASE,
                }}
              >
                <CtaCard {...card} compact />
              </m.div>
            ))}
          </div>
        </div>
      </NextStepSection>
    </LazyMotion>
  );
}

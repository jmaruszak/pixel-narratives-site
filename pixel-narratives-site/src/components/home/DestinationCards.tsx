"use client";

import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import CtaCard from "../CtaCard";
import NextStepSection from "../NextStepSection";
import { HOME_PATH_CARDS } from "../../lib/homePathCards";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";
import { DESTINATION_REVEAL } from "./motion/motionTokens";

const TRUST_SIGNALS = [
  { href: "/work", label: "See the work" },
  { href: WEB_INTEL_PAGE_TOOL_URL, label: "Free website scan", external: true },
  { href: "/contact", label: "Discuss a project" },
] as const;

export default function DestinationCards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <LazyMotion features={domAnimation}>
      <NextStepSection contentClassName="pb-24 pt-8 md:pb-32 md:pt-12" showGridAccent>
        <div ref={ref}>
          <m.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{
              duration: DESTINATION_REVEAL.headerDuration,
              ease: DESTINATION_REVEAL.ease,
            }}
          >
            <h2 className="text-4xl leading-none md:text-6xl">
              What do you want to improve?
            </h2>
            <p className="mt-4 text-lg text-[var(--foreground)] md:text-xl">
              Save time. Use AI better. Get found. Reach more customers.
            </p>
            <p className="pn-body mt-6">
              Pick the problem that matters most right now. We will help you
              choose the right next step.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[var(--muted)]">
              {TRUST_SIGNALS.map((item, index) => (
                <span key={item.href} className="inline-flex items-center gap-3">
                  {index > 0 ? (
                    <span className="text-white/20" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="transition hover:text-[var(--foreground)]"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </m.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:items-stretch">
            {HOME_PATH_CARDS.map((card, index) => (
              <m.div
                key={card.id}
                className="h-full"
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{
                  duration: DESTINATION_REVEAL.cardDuration,
                  delay: 0.15 + index * DESTINATION_REVEAL.cardStagger,
                  ease: DESTINATION_REVEAL.ease,
                }}
              >
                <CtaCard {...card} compact equalHeight />
              </m.div>
            ))}
          </div>
        </div>
      </NextStepSection>
    </LazyMotion>
  );
}

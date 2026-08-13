"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import DestinationCards from "./DestinationCards";
import { SERVICE_LINE_SUMMARY } from "../../lib/services";

function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/images/home-hero.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
        aria-hidden
      />
      <div className="hero-ambient-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="home-stage-grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="max-w-4xl">
          <p className="hero-entrance text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Pixel Narratives
          </p>
          <h1 className="hero-entrance hero-entrance-delay-1 mt-4 text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            We Help Businesses Save Time, Win More Customers and Get More Done.
          </h1>
          <p className="hero-entrance hero-entrance-delay-2 mt-6 max-w-3xl text-lg text-[var(--foreground)] md:text-xl">
            {SERVICE_LINE_SUMMARY}
          </p>
          <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
            <Link
              href="/automation"
              className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Talk About Automation
            </Link>
            <Link
              href="/contact"
              className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
            >
              Tell Us What You&apos;re Trying to Improve
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomationHighlight() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10 md:py-24">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Primary service
          </p>
          <h2 className="mt-4 text-4xl leading-none md:text-5xl">
            Turn repetitive work into better systems.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Employees lose hours to follow-up, scheduling, duplicate data entry,
            and tools that do not talk to each other. We build the workflows,
            CRM, reporting, and internal tools that get that time back.
          </p>
          <div className="mt-8">
            <Link
              href="/automation"
              className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Talk About Automation
            </Link>
          </div>
        </div>
        <ul className="space-y-3 rounded-[28px] border border-white/8 bg-white/[0.02] p-8 text-base text-[var(--foreground)] md:text-lg">
          <li>Slow lead response and inconsistent follow-up</li>
          <li>Information spread across spreadsheets and inboxes</li>
          <li>Manual scheduling and duplicate data entry</li>
          <li>Disconnected tools and poor reporting</li>
        </ul>
      </div>
    </section>
  );
}

export default function HomeMotionExperience() {
  return (
    <LazyMotion features={domAnimation}>
      <HomeHero />
      <AutomationHighlight />
      <DestinationCards />
    </LazyMotion>
  );
}

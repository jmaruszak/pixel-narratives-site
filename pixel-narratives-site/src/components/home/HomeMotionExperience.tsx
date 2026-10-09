import Image from "next/image";
import OutcomeStack from "../editorial/OutcomeStack";
import PathChooser from "../editorial/PathChooser";
import ServiceEditorial from "../editorial/ServiceEditorial";
import StatementBand from "../editorial/StatementBand";
import { SERVICE_LINE_SUMMARY, SERVICES } from "../../lib/services";

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-black md:aspect-[21/9] md:min-h-[34rem] md:max-h-[88vh]">
      <Image
        src="/images/home-hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-left md:object-contain md:object-center"
        aria-hidden
      />
      <video
        className="pointer-events-none absolute inset-0 hidden h-full w-full object-contain object-center md:motion-safe:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/home-hero-poster.jpg"
        aria-hidden
      >
        <source
          src="/videos/pixel-video-header.mp4"
          type="video/mp4"
          media="(min-width: 768px) and (prefers-reduced-motion: no-preference)"
        />
      </video>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25"
        aria-hidden
      />
      <div className="hero-ambient-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="home-stage-grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl flex-col justify-end px-6 py-20 md:h-full md:min-h-[34rem] md:px-10 md:py-24">
        <p className="hero-entrance pn-kicker text-[var(--muted)]">
          Pixel Narratives
        </p>
        <h1 className="hero-entrance hero-entrance-delay-1 pn-display mt-5 max-w-5xl">
          Put AI to work in your business.
        </h1>
        <p className="hero-entrance hero-entrance-delay-2 mt-7 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
          We help you figure out where AI makes sense, decide what is worth
          pursuing, and put those ideas into practice.
        </p>
        <p className="hero-entrance hero-entrance-delay-2 mt-8 max-w-3xl text-sm uppercase tracking-[0.18em] text-[var(--foreground)] md:text-base md:tracking-[0.22em]">
          {SERVICE_LINE_SUMMARY}
        </p>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Start a Conversation
          </a>
          <a
            href="/work"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            See What We Do
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomeMotionExperience() {
  const automation = SERVICES[0];
  const training = SERVICES[1];
  const websites = SERVICES[2];
  const marketing = SERVICES[3];

  return (
    <>
      <HomeHero />
      <ServiceEditorial
        personalityHeadline="This Should Be Easier."
        serviceName={automation.name}
        supportLine="AI Adoption + Practical Implementation"
        explanation="Bring us a specific problem or an ongoing need. We help identify where AI can create value, improve how your team uses existing tools, guide adoption, and build custom solutions when the work calls for them."
        examples={[
          "Identify and prioritize useful AI opportunities",
          "Get more from tools your team already has",
          "Improve workflows and guide adoption",
          "Build custom solutions when they are the right fit",
          "Provide ongoing AI leadership",
        ]}
        media="/images/int-cinematic.jpg"
        mediaAlt="Cinematic still for implementation work"
        cta={{ href: "/contact?need=automation", label: automation.ctaLabel }}
      />
      <OutcomeStack
        tone="light"
        items={[
          "Less manual work.",
          "Faster follow-up.",
          "More customers.",
          "Better productivity.",
        ]}
      />
      <ServiceEditorial
        reverse
        personalityHeadline={
          <>
            Your team has ChatGPT.
            <br />
            Now what?
          </>
        }
        serviceName={training.name}
        explanation="Standalone training built around your team, the tools they use, and what they need to accomplish. No custom software or implementation project is required."
        examples={[
          "ChatGPT, Claude, Microsoft Copilot, and other useful tools",
          "AI video, creative production, research, and analysis",
          "Hands-on work on real tasks from the business",
          "Leadership, department, and role-specific sessions",
        ]}
        media="/images/training-hero.png"
        mediaAlt="Team workshop with a presenter at a whiteboard"
        cta={{ href: training.href, label: training.ctaLabel }}
      />
      <ServiceEditorial
        personalityHeadline={
          <>
            If people can&apos;t find you,
            <br />
            the rest doesn&apos;t matter much.
          </>
        }
        serviceName={websites.name}
        explanation="We build and improve websites, strengthen search visibility, and help businesses show up where customers are looking."
        examples={[
          "Website design, development, and landing pages",
          "SEO, local search, and Google Business Profile",
          "Technical cleanup, schema, and conversion work",
        ]}
        media="/images/web-cinematic.jpg"
        mediaAlt="Analyst reviewing a website map against a city skyline"
        cta={{ href: websites.href, label: websites.ctaLabel }}
      />
      <ServiceEditorial
        reverse
        personalityHeadline={
          <>
            Being good isn&apos;t the same
            <br />
            as being noticed.
          </>
        }
        serviceName={marketing.name}
        explanation="Campaigns, advertising, video, content, and creative designed to reach the right people and generate opportunity. AI helps us produce and test creative efficiently, but the idea still has to be good."
        examples={[
          "Campaigns, paid advertising, and lead generation",
          "Video, commercials, and social content",
          "Creative production with a defined finish line",
        ]}
        media="/images/hero-cinematic.jpg"
        mediaAlt="Cinematic still from Pixel Narratives campaign work"
        cta={{ href: marketing.href, label: marketing.ctaLabel }}
      />
      <PathChooser />
      <StatementBand
        tone="light"
        headline={
          <>
            AI is great.
            <br />
            Results are better.
          </>
        }
        lede="We use AI to solve business problems. Faster builds, clearer follow-up, better creative, less wasted time."
      />
      <StatementBand
        headline="What's slowing you down?"
        lede="Tell us what you're trying to improve. We'll talk about the better way."
        action={{ href: "/contact", label: "Start a Conversation" }}
      />
    </>
  );
}

import OutcomeStack from "../editorial/OutcomeStack";
import PathChooser from "../editorial/PathChooser";
import ServiceEditorial from "../editorial/ServiceEditorial";
import StatementBand from "../editorial/StatementBand";
import { SERVICE_LINE_SUMMARY, SERVICES } from "../../lib/services";

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
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25"
        aria-hidden
      />
      <div className="hero-ambient-gradient pointer-events-none absolute inset-0" aria-hidden />
      <div className="home-stage-grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl flex-col justify-end px-6 py-20 md:px-10 md:py-24">
        <p className="hero-entrance pn-kicker text-[var(--muted)]">
          Pixel Narratives
        </p>
        <h1 className="hero-entrance hero-entrance-delay-1 pn-display mt-5 max-w-5xl">
          There&apos;s probably a better way to do this.
        </h1>
        <p className="hero-entrance hero-entrance-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Your business shouldn&apos;t be held together by repetitive work,
          missed follow-ups, a website nobody finds, and marketing you never
          have time to do.
        </p>
        <p className="hero-entrance hero-entrance-delay-2 mt-8 text-2xl leading-none md:text-4xl">
          We build the better way.
        </p>
        <p className="hero-entrance hero-entrance-delay-2 mt-4 max-w-3xl text-sm uppercase tracking-[0.18em] text-[var(--foreground)] md:text-base md:tracking-[0.22em]">
          {SERVICE_LINE_SUMMARY}
        </p>
        <p className="hero-entrance hero-entrance-delay-2 mt-3 text-base text-[var(--muted)] md:text-lg">
          Save time. Win more customers. Get more done.
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
        supportLine="AI + Automation + Business Systems"
        explanation="We build better business systems using AI, automation, and modern software. Sometimes that means automating the work. Sometimes it means giving your team a much better way to do it."
        examples={[
          "CRM and lead follow-up",
          "Dashboards and reporting",
          "Client portals and internal tools",
          "Integrations between the software you already have",
          "AI workflows where they actually help",
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
        explanation="Practical workshops and training built around the work your team actually does. We teach people how to use AI in their jobs."
        examples={[
          "Leadership, department, and role-specific sessions",
          "Hands-on work on real tasks from the business",
          "Repeatable workflows people can keep using",
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
        explanation="We build and improve websites, strengthen search visibility, and help businesses show up where customers are looking. Google, local search, and AI search included."
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
        explanation="Campaigns, advertising, video, content, and creative designed to reach the right people and generate opportunity. AI makes us faster. Taste still matters."
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

import AdsProcessFlow from "../../components/AdsProcessFlow";
import CinematicPageHero from "../../components/CinematicPageHero";
import { AttentionPulseBriefForm } from "../../components/ContactForms";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import CaseStudiesSection, {
  FeaturedCampaignSection,
} from "../../components/narrative-intelligence/CaseStudiesSection";

export const metadata = buildPageMetadata({
  title: "Marketing | Pixel Narratives",
  description:
    "Attention is a managed advertising campaign from Pixel Narratives. We develop the concept, produce the commercial, place the campaign, and report what happened.",
  path: "/marketing",
  image: "/images/hero-cinematic.jpg",
  imageAlt: "Marketing cinematic visual for Pixel Narratives",
});

const PULSE_INCLUDES = [
  "One original advertising concept",
  "One finished 15 to 30 second commercial",
  "TV and social formats",
  "Two revision rounds",
  "Campaign setup and management",
  "Up to two weeks of advertising",
  "Up to $1,000 in media included",
  "Tracking and campaign readout",
] as const;

const PULSE_READOUT = [
  "Spend",
  "Impressions",
  "Households reached, where available",
  "Video completions, where available",
  "Site activity, where it can be measured",
  "Observations",
  "Recommended next step",
] as const;

const RETAINER_INCLUDES = [
  "New advertising concepts and creative",
  "Campaign planning and management",
  "Creative updates and recuts",
  "Streaming, social, and digital placement",
  "Campaign readouts",
  "Ongoing recommendations",
] as const;

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/marketing",
            name: "Marketing",
            description:
              "Three ways to run advertising with Pixel Narratives: Attention Pulse, Attention Retainer, and Full Brand Campaign.",
            serviceType: "Digital Marketing and Campaign Production",
          }),
          buildWebPage({
            path: "/marketing",
            name: "Marketing | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/marketing#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Marketing", path: "/marketing" },
          ]),
        ]}
      />

      <CinematicPageHero
        imageSrc="/images/hero-cinematic.jpg"
        imageAlt="Cinematic marketing campaign visual"
        title="Being Good Isn't the Same as Being Noticed."
        subtitle="Marketing"
      >
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="#attention-pulse-brief"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Start an Attention Pulse
          </a>
          <a
            href="/contact?need=marketing"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
          >
            Start a Conversation
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How we work
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Focus on what
              <br />
              you can repeat.
            </h2>
          </div>
          <div className="flex max-w-xl items-end">
            <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              <p>
                Your business outcomes are the goal, which we achieve by
                focusing on repeatable activities that will lead to your
                desired results.
              </p>
              <p>
                For advertising, we control the creative, where it runs, who it
                reaches, how often it shows, the spend, the tracking, and what
                we learn afterward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Attention
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              A managed advertising
              <br />
              campaign
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Concept. Creative. Production. Placement. Measurement. You get a
              finished campaign without having to learn video production,
              streaming platforms, or campaign reporting.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              AI-assisted production allows us to move faster and iterate more.
            </p>
          </div>
        </div>
      </section>

      <FeaturedCampaignSection />
      <CaseStudiesSection />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Start here
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Attention Pulse
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Starting at $5,000
            </p>
            <h3 className="mt-6 text-2xl leading-none md:text-3xl">
              One campaign. One price. A defined finish line.
            </h3>
          </div>

          <div className="mt-12 rounded-[28px] border border-white/12 bg-white/[0.03] p-8 md:p-10">
            <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              We develop the idea, produce the creative, put it in front of the
              right audience, and show you what happened.
            </p>
            <ul className="mt-8 grid gap-2 text-sm text-[var(--foreground)] sm:grid-cols-2 md:text-base">
              {PULSE_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                The readout can include
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-[var(--foreground)] sm:grid-cols-2 md:text-base">
                {PULSE_READOUT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                Platforms report different numbers. We share what the campaign
                actually produced.
              </p>
            </div>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              When it&apos;s over, it&apos;s over. You can stop there, run
              another campaign, or keep Pixel Narratives involved.
            </p>
            <div className="mt-8">
              <a
                href="#attention-pulse-brief"
                className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Start an Attention Pulse
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Media
            </p>
            <h3 className="mt-4 text-2xl leading-none md:text-3xl">
              Media is billed at cost.
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              The first $1,000 of media is included with Attention Pulse.
              Additional media is billed at cost. We do not add a percentage
              markup to media.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Ongoing
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Attention Retainer
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Starting at $2,250/month · 3-month minimum
            </p>
            <h3 className="mt-6 text-2xl leading-none md:text-3xl">
              Keep us in the room.
            </h3>
          </div>

          <div className="mt-10 rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              For businesses that want Pixel Narratives to stay involved as an
              ongoing creative and advertising partner.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              We plan campaigns, develop new creative, manage placement, watch
              what&apos;s happening, and help decide what to do next.
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              A typical engagement can include
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-[var(--foreground)] sm:grid-cols-2 md:text-base">
              {RETAINER_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Media spend is separate and billed at cost.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Retainers are scoped around how often you need new creative, how
              many campaigns we&apos;re managing, and how involved you want us
              to be.
            </p>
            <div className="mt-8">
              <a
                href="/contact?need=marketing"
                className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Discuss Marketing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Bigger Idea
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Full Brand Campaign
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Starting at $15,000
            </p>
            <h3 className="mt-6 text-2xl leading-none md:text-3xl">
              When one piece of creative isn&apos;t enough.
            </h3>
          </div>

          <div className="mt-10 rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              For launches, promotions, market expansions, brand campaigns, and
              bigger ideas that need multiple pieces working together.
            </p>
            <ul className="mt-8 grid gap-2 text-sm text-[var(--foreground)] sm:grid-cols-2 md:text-base">
              <li>Campaign concept and creative direction</li>
              <li>Multiple pieces of original creative</li>
              <li>Assets for different channels and formats</li>
              <li>Campaign planning and rollout</li>
              <li>Paid media strategy and management</li>
              <li>Multi-market placement when needed</li>
            </ul>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              We start with what you&apos;re trying to accomplish, then build
              the campaign around it.
            </p>
            <div className="mt-8">
              <a
                href="/contact?need=marketing"
                className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Discuss Marketing
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Placement
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Streaming & Live Sports
            </h2>
          </div>
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Your campaign can appear across streaming television and
              available live-sports inventory, including college football, NFL,
              and other programming.
            </p>
            <p>
              Availability depends on the market, audience, timing, inventory,
              and budget, so we confirm placement before making promises about
              specific programming.
            </p>
            <p className="font-medium text-[var(--foreground)]">
              The goal is simple: put your business in places your customers
              already pay attention to.
            </p>
          </div>
        </div>
      </section>

      <AdsProcessFlow />

      <section
        id="attention-pulse-brief"
        className="scroll-mt-24 border-t border-white/8"
      >
        <div className="mx-auto w-full max-w-4xl px-6 pn-section md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Attention Pulse Brief
          </p>
          <h2 className="mt-4 text-4xl leading-none md:text-6xl">
            Tell us about the business
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Tell us a little about the business and where you want to be seen.
            We will confirm fit and campaign direction on a short call before
            production starts.
          </p>
          <div className="mt-4 rounded-[28px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <AttentionPulseBriefForm />
            <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
              We confirm fit on a short call before production starts.
            </p>
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.marketing} />
      <Footer />
    </main>
  );
}

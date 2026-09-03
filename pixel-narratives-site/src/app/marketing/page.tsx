import AdsProcessFlow from "../../components/AdsProcessFlow";
import CinematicPageHero from "../../components/CinematicPageHero";
import { AttentionPulseBriefForm } from "../../components/ContactForms";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { CALENDLY_URL } from "../../lib/businessLocation";
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
  "One advertising concept",
  "One finished 15 to 30 second commercial",
  "16:9 advertising master",
  "9:16 social version with captions",
  "Two revision rounds",
  "Campaign setup",
  "One advertising campaign up to two weeks",
  "Up to $1,000 in media included",
  "Geographic and audience setup",
  "Frequency management",
  "Tracking setup where appropriate",
  "Campaign readout",
] as const;

const PULSE_READOUT = [
  "Spend",
  "Impressions",
  "Households reached, where the platform provides it",
  "Video completions, where the platform provides it",
  "Site activity, where it can be measured",
  "Observations",
  "Recommended next step",
] as const;

const RETAINER_QUARTER = [
  "One advertising campaign",
  "One creative update, recut, caption refresh, or 6 to 10 second sting",
  "Campaign readout",
  "Quarterly observations and recommendations",
] as const;

const RETAINER_YEAR = [
  "3 new advertising concepts",
  "3 finished commercial masters plus social versions",
  "4 advertising campaigns set up and managed",
  "4 recuts, caption refreshes, or 6 to 10 second stings using existing creative",
  "Readout after each campaign",
  "Quarterly campaign note",
] as const;

const ADDITIONAL_INCLUDES = [
  "One new concept",
  "One new finished commercial",
  "Two revision rounds",
  "16:9 master",
  "9:16 social cut with captions",
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
              "Managed advertising campaigns that get a business noticed: Attention Pulse and Attention Retainer. Distinct from website visibility work, which is about being found.",
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
        title="Reach More Customers"
        subtitle="Marketing"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-10 flex flex-wrap gap-4">
          <a
            href="#attention-pulse-brief"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Start an Attention Pulse
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
          >
            Book a Call
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
              AI-assisted production is how we make the work.
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
              $5,000
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              One campaign. One price. A defined finish line.
            </p>
          </div>

          <div className="mt-12 rounded-[28px] border border-white/12 bg-white/[0.03] p-8 md:p-10">
            <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              A complete advertising campaign, from concept through the
              campaign readout. There is no ongoing commitment.
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
              When it is complete, you can stop, run another campaign, add
              another concept, or move to Attention Retainer.
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
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              If you add media during the original Pulse campaign:
            </p>
            <ul className="mt-4 max-w-3xl space-y-2 text-sm text-[var(--foreground)] md:text-base">
              <li>Up to $2,500 additional: no extra management fee</li>
              <li>$2,501 to $5,000 additional: $750 campaign management fee</li>
              <li>$5,001 to $10,000 additional: $1,000 campaign management fee</li>
              <li>Above $10,000: quoted for the campaign</li>
            </ul>
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
              $2,250/month · 3-month minimum
            </p>
          </div>

          <div className="mt-10 rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              For businesses that want Pixel Narratives to stay on as a creative
              partner and manage marketing campaigns. Visibility work helps
              customers find you. Attention keeps the business noticed.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Media is not included. Client media spend is separate and billed
              at cost if we pass it through.
            </p>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Typical quarter
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                  {RETAINER_QUARTER.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Across 12 months
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                  {RETAINER_YEAR.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Shorter engagements follow the quarterly rhythm. A 3-month
              engagement does not include the full annual creative allotment.
              Extra concepts and additional campaigns are quoted separately.
            </p>
            <div className="mt-8">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Book a Call
              </a>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.02] p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Add-on
                </p>
                <h3 className="mt-3 text-2xl leading-none md:text-3xl">
                  Additional Creative
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  $2,500
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  For current or previous Attention Pulse and Attention Retainer
                  clients. New customers start with Attention Pulse. Media is
                  not included.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-[var(--foreground)] md:text-base">
                  {ADDITIONAL_INCLUDES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="cta-pulse-outline inline-flex shrink-0 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Fit
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Who Attention
              <br />
              is for
            </h2>
          </div>
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Owner-led local and regional businesses, especially in Mississippi
              and the South. It often fits a high-trust or high-ticket service,
              a professional practice, or a company where one additional good
              customer matters.
            </p>
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
              Streaming and
              <br />
              live sports
            </h2>
          </div>
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Campaigns can run across streaming television and available
              live-sports inventory. That can include college football, NFL, and
              other programming, depending on market, inventory, geography,
              timing, and budget.
            </p>
            <p>
              We do not promise a specific game, team, or network until we
              confirm what is available. The point is attention, familiarity,
              and showing up professionally in places customers already watch.
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

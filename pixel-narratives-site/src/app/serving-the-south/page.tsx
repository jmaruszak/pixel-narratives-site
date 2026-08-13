import type { Metadata } from "next";
import Link from "next/link";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import {
  SERVICE_PILLARS,
  buildOrganizationSchema,
  formatServiceAreaList,
} from "../../lib/businessLocation";
import {
  hubMarketCards,
  hubSecondaryMentions,
} from "../../lib/locationLandingPages";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

export const metadata: Metadata = buildPageMetadata({
  title: "Serving the South | Pixel Narratives",
  description:
    "Automation, websites, training, and marketing for Mississippi and Southern businesses. Pixel Narratives is headquartered in Madison, Mississippi.",
  path: "/serving-the-south",
});

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Serving the South",
  description:
    "Regional hub for Pixel Narratives service areas across Mississippi and the South.",
  url: "https://pixelnarratives.studio/serving-the-south",
  about: {
    "@type": "Organization",
    name: "Pixel Narratives",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madison",
      addressRegion: "MS",
      addressCountry: "US",
    },
  },
};

export default function ServingTheSouthPage() {
  const secondaryMentionLabels = formatServiceAreaList(hubSecondaryMentions);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Serving the South
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Save Time, Win Customers, and Get More Done for Mississippi and the
            South
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl md:leading-8">
            <p>
              Pixel Narratives helps Southern businesses save time, win more
              customers, and get more done.
            </p>
            <p>
              We are based in Madison, Mississippi, and work with business owners
              across the South over Zoom and from our office.
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl md:leading-8">
            Most work starts with a Zoom call. From there, we help with website
            visibility, campaign direction, and AI implementation from our office
            in Madison.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a call
            </Link>
            <a
              href={WEB_INTEL_PAGE_TOOL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
            >
              Run a free website scan
            </a>
            <Link
              href="/ai-readiness-assessment"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
            >
              AI + Automation Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How we help
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              What we help with
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {SERVICE_PILLARS.map((pillar) => (
              <article
                key={pillar.headline}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl leading-snug md:text-3xl">
                  {pillar.headline}
                </h3>
                <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                  {pillar.outcome}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {pillar.body}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-5 inline-block text-sm text-[var(--foreground)] transition hover:opacity-80"
                >
                  Explore {pillar.headline}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Markets we know well
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Where we work most often
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubMarketCards.map((market) => (
              <Link
                key={market.slug}
                href={`/${market.slug}`}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 transition hover:border-white/15 hover:bg-white/[0.04]"
              >
                <h3 className="text-2xl leading-snug">{market.label}</h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {market.description}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            We also work with business owners in {secondaryMentionLabels} and
            across the South. Our focus is helping businesses in the region save
            time, win more customers, and get more done. We work with clients
            anywhere when the engagement is a good fit.
          </p>
        </div>
      </section>

      <section className="next-step-section border-t border-white/8">
        <div className="next-step-bg" aria-hidden />
        <div className="next-step-fade" aria-hidden />
        <div className="next-step-content mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl leading-none md:text-6xl">
              Ready to talk about your market?
            </h2>
            <p className="pn-body mt-6">
              Start with a call or a free website scan. The AI + Automation
              Assessment is optional.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Book a call
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                About Pixel Narratives
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

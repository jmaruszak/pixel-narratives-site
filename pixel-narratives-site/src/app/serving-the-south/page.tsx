import type { Metadata } from "next";
import Link from "next/link";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import {
  SERVICE_PILLARS,
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  formatServiceAreaList,
} from "../../lib/businessLocation";
import {
  hubMarketCards,
  hubSecondaryMentions,
} from "../../lib/locationLandingPages";
import { SITE_URL, buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Consulting & Implementation Across the South | Pixel Narratives",
  description:
    "Pixel Narratives is based in Madison, Mississippi and works with small and midsize businesses across selected Southern markets on AI consulting, automation, implementation, and training.",
  path: "/serving-the-south",
});

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Consulting & Implementation Across the South",
  description:
    "Regional hub for Pixel Narratives AI consulting and implementation across Mississippi and selected Southern markets.",
  url: `${SITE_URL}/serving-the-south`,
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

const marketListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Pixel Narratives Southern markets",
  itemListElement: hubMarketCards.map((market, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: market.label,
    url: `${SITE_URL}/${market.slug}`,
  })),
};

export default function ServingTheSouthPage() {
  const secondaryMentionLabels = formatServiceAreaList(hubSecondaryMentions);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Serving the South", path: "/serving-the-south" },
  ]);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marketListSchema) }}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Serving the South
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            AI Consulting &amp; Implementation Across the South
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl md:leading-8">
            <p>
              Pixel Narratives is based in Madison, Mississippi. We work with
              small and midsize businesses across selected Southern markets on
              AI consulting, automation, implementation, and training.
            </p>
            <p>
              The company focuses regionally because the work is practical
              implementation, not a national enterprise program. Owner-led
              businesses need someone who can look at how the week actually
              runs, put AI into those workflows, and stay close enough to the
              market to understand the context. Most engagements happen over
              Zoom. We work directly with teams when that is the better fit.
            </p>
          </div>
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
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Each market page is a full landing page for AI consulting and
              implementation in that area. We do not operate offices in every
              city. Madison, Mississippi is the home base.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hubMarketCards.map((market) => (
              <article
                key={market.slug}
                className="flex flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h3 className="text-2xl leading-snug">{market.label}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--muted)]">
                  {market.description}
                </p>
                <p className="mt-6">
                  <Link
                    href={`/${market.slug}`}
                    className="text-sm text-[var(--foreground)] transition hover:opacity-80"
                  >
                    {market.hrefLabel}
                  </Link>
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            We also work with business owners in {secondaryMentionLabels} and
            across the South when the engagement is a good fit.
          </p>
        </div>
      </section>

      <PageBottomCta
        eyebrow="Next Step"
        headline="Ready to talk about your market?"
        body="Start with a call or a free website scan. The AI + Automation Assessment is optional if you want a clearer picture first."
        primaryAction={{ href: "/contact", label: "Book a call" }}
        secondaryAction={{ href: "/about", label: "About Pixel Narratives" }}
      />
      <Footer />
    </main>
  );
}

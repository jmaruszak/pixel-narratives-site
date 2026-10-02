import type { Metadata } from "next";
import Link from "next/link";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import {
  SERVICE_AREA_HUB_MENTIONS,
  SERVICE_PILLARS,
} from "../../lib/businessLocation";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Implementation Across Mississippi and the South | Pixel Narratives",
  description:
    "Pixel Narratives is based in Madison, Mississippi and serves businesses across Mississippi and the South with AI implementation, automation, training, websites, and marketing.",
  path: "/serving-the-south",
});

const marketGroups = [
  {
    title: "Mississippi Is Home",
    body: "Pixel Narratives is based in Madison. We work throughout the Jackson Metro and across Mississippi, including Madison, Ridgeland, Jackson, Flowood, Brandon, and Gluckstadt.",
  },
  {
    title: "Serving the South",
    body: "We work with businesses throughout the South when the problem, working relationship, and project are a good fit. Most implementation work can happen without creating a local office.",
  },
  {
    title: "Atlanta",
    body: "Atlanta is our first deliberate expansion market outside Mississippi. We serve Atlanta businesses from our Madison home base. Pixel Narratives does not have an Atlanta office.",
  },
] as const;

const marketListSchema = {
  "@type": "ItemList" as const,
  name: "Pixel Narratives service areas",
  itemListElement: SERVICE_AREA_HUB_MENTIONS.map((market, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: market.region ? `${market.name}, ${market.region}` : market.name,
  })),
};

export default function ServingTheSouthPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <JsonLd
        graph={[
          buildWebPage({
            path: "/serving-the-south",
            name: "AI Implementation Across Mississippi and the South",
            description:
              "Pixel Narratives is based in Madison, serves businesses across Mississippi and the South, and actively works with Atlanta as an expansion market.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Serving the South", path: "/serving-the-south" },
          ]),
          marketListSchema,
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Serving the South
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            We build the better way across the South.
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl md:leading-8">
            <p>
              Mississippi is home. Pixel Narratives is based in Madison and
              works with businesses throughout the Jackson Metro, across the
              state, and across the South. Atlanta is the first market we are
              deliberately expanding into outside Mississippi.
            </p>
            <p>
              We help with AI and automation implementation, training,
              websites and visibility, and marketing. We serve Atlanta from
              Madison and do not represent it as a physical office.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start a Conversation
            </Link>
            <a
              href={WEB_INTEL_PAGE_TOOL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
            >
              Check My Online Visibility
            </a>
            <Link
              href="/ai-readiness-assessment"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
            >
              AI Readiness Assessment
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
              Where We Work
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Mississippi first. The South beyond it.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marketGroups.map((market) => (
              <article
                key={market.title}
                className="flex flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h3 className="text-2xl leading-snug">{market.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--muted)]">
                  {market.body}
                </p>
                <p className="mt-6">
                  <Link
                    href="/contact"
                    className="text-sm text-[var(--foreground)] transition hover:opacity-80"
                  >
                    Discuss a Project
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageBottomCta
        eyebrow="Next Step"
        headline="Ready to talk about your market?"
        body="Start with a call or a free website scan. The AI Readiness Assessment is optional if you want a clearer picture first."
        primaryAction={{ href: "/contact", label: "Start a Conversation" }}
        secondaryAction={{ href: "/about", label: "About Pixel Narratives" }}
      />
      <Footer />
    </main>
  );
}

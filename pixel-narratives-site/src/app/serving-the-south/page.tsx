import type { Metadata } from "next";
import Link from "next/link";

import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { SERVICE_AREA_HUB_MENTIONS } from "../../lib/businessLocation";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

export const metadata: Metadata = buildPageMetadata({
  title: "Who We Work With | Pixel Narratives",
  description:
    "We work with business owners, leadership teams, and departments that want practical help using AI, from Madison across Mississippi, Birmingham, Memphis, Mobile plus Alabama's Eastern Shore, and Atlanta.",
  path: "/serving-the-south",
});

const helpGroups = [
  {
    title: "Implementation",
    outcome: "Save time. Reduce repetitive work. Make your business easier to run.",
    body: "We help you figure out where AI makes sense and how to put it to work. From a specific project to an ongoing partnership, we bring the expertise to help you make good decisions and get things done.",
    href: "/implementation",
    cta: "Explore Implementation",
  },
  {
    title: "Training",
    outcome: "Get your team up to speed on AI.",
    body: "Practical workshops built around your people and the work they do. ChatGPT, Claude, Microsoft Copilot, AI video, research, creative tools, and more.",
    href: "/training",
    cta: "Explore Training",
  },
  {
    title: "Visibility",
    outcome: "Helping customers find you.",
    body: "Websites, SEO, and AI search. We help you build a stronger online presence and get found by more of your customers.",
    href: "/websites",
    cta: "Explore Visibility",
  },
  {
    title: "Marketing",
    outcome: "Get attention. Make an impression. Bring in business.",
    body: "We help businesses reach more customers through creative strategy, social media, advertising, and original content.",
    href: "/marketing",
    cta: "Explore Marketing",
  },
] as const;

const marketGroups = [
  {
    title: "Mississippi",
    body: "Madison is home. We work with businesses throughout the Jackson metro and across Mississippi, helping owners and teams put AI to work.",
    href: "/locations/mississippi",
    cta: "Explore Mississippi",
  },
  {
    title: "Birmingham, Alabama",
    body: "We help Birmingham businesses put AI to work, train their teams, improve their online presence, and reach more customers.",
    href: "/locations/birmingham",
    cta: "Explore Birmingham",
  },
  {
    title: "Memphis, Tennessee",
    body: "From getting started with AI to making better use of the tools you already have, we help Memphis businesses find practical ways to move forward.",
    href: "/locations/memphis",
    cta: "Explore Memphis",
  },
  {
    title: "Mobile + Eastern Shore, Alabama",
    body: "We work with businesses in Mobile, Daphne, Fairhope, and surrounding communities, helping them use AI, improve how they work, and grow.",
    href: "/locations/mobile-eastern-shore",
    cta: "Explore Mobile + Eastern Shore",
  },
  {
    title: "Atlanta, Georgia",
    body: "AI implementation, training, websites, and marketing for businesses in the Atlanta area.",
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
            name: "Who We Work With | Pixel Narratives",
            description:
              "We work with business owners, leadership teams, and departments that want practical help using AI. Pixel Narratives is based in Madison, Mississippi.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Who We Work With", path: "/serving-the-south" },
          ]),
          marketListSchema,
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Who We Work With
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Practical help for people who want to put AI to work.
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl md:leading-8">
            <p>
              We work with business owners, leadership teams, and departments
              that want practical help using AI.
            </p>
            <p>
              Pixel Narratives is based in Madison, Mississippi. We work with
              businesses across Mississippi, Birmingham, Memphis, Mobile plus
              Alabama&apos;s Eastern Shore, and Atlanta.
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
              href="/work-with-us"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
            >
              Work With Us
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
            {helpGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h3 className="text-2xl leading-snug md:text-3xl">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                  {group.outcome}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {group.body}
                </p>
                <Link
                  href={group.href}
                  className="mt-5 inline-flex min-h-11 items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
                >
                  {group.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl leading-none md:text-5xl">Where we work</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {marketGroups.map((market) => (
              <article
                key={market.title}
                className="flex flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h3 className="text-2xl leading-snug">{market.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--muted)]">
                  {market.body}
                </p>
                {"href" in market && market.href ? (
                  <p className="mt-6">
                    <Link
                      href={market.href}
                      className="inline-flex min-h-11 items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
                    >
                      {market.cta}
                    </Link>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

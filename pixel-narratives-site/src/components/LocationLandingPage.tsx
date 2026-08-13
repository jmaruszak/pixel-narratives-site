import Link from "next/link";

import Footer from "./Footer";
import Nav from "./Nav";
import { SERVICE_PILLARS, buildLocationServiceSchema } from "../lib/businessLocation";
import type { LocationLandingPage } from "../lib/locationLandingPages";
import { WEB_INTEL_PAGE_TOOL_URL } from "../lib/webIntelligence";

function buildFaqSchema(page: LocationLandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function LocationLandingPageView({
  page,
}: {
  page: LocationLandingPage;
}) {
  const serviceSchema = buildLocationServiceSchema({
    name: `Pixel Narratives in ${page.marketLabel}`,
    description: page.intro,
    url: `/${page.slug}`,
    areaServed: page.areaServed,
  });

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(page)),
        }}
      />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              {page.marketLabel}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {page.intro}
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
          <div className="grid gap-6 md:grid-cols-2">
            {page.sections.map((section) => (
              <article
                key={section.heading}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h2 className="text-3xl leading-none md:text-4xl">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Common questions
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6"
              >
                <h3 className="text-2xl leading-none">{faq.question}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="next-step-section border-t border-white/8">
        <div className="next-step-bg" aria-hidden />
        <div className="next-step-fade" aria-hidden />
        <div className="next-step-content mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Related
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-5xl">
              Keep exploring
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

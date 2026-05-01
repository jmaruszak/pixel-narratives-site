import Link from "next/link";

import Footer from "./Footer";
import Nav from "./Nav";
import type { SeoLandingPage } from "../lib/seoLandingPages";

const siteUrl = "https://pixelnarratives.studio";

export function buildServiceSchema(page: SeoLandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name:
      page.offer === "ads"
        ? "AI Commercial Production"
        : "Intelligence Layer AI Consulting",
    provider: {
      "@type": "Organization",
      name: "Pixel Narratives",
      url: siteUrl,
    },
    areaServed: "United States",
    serviceType:
      page.offer === "ads"
        ? "AI-powered commercial video production"
        : "AI consulting, workflow automation, and implementation",
    description: page.intro,
    url: `${siteUrl}/${page.slug}`,
  };
}

export function buildFaqSchema(page: SeoLandingPage) {
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

export default function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildServiceSchema(page)),
        }}
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
              {page.offer === "ads" ? "AI Ads" : "Intelligence Layer"}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                {page.cta}
              </a>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Visit Pixel Narratives
              </Link>
            </div>
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
                {section.answer ? (
                  <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    {section.answer}
                  </p>
                ) : null}
                {section.body?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 space-y-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.table ? (
                  <div className="mt-6 overflow-hidden rounded-[18px] border border-white/8">
                    <table className="w-full border-collapse text-left text-sm md:text-base">
                      <thead className="bg-white/[0.04] text-[var(--foreground)]">
                        <tr>
                          {section.table.headers.map((header) => (
                            <th key={header} className="px-4 py-3 font-normal">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/8 text-[var(--muted)]">
                        {section.table.rows.map((row) => (
                          <tr key={row.join("-")}>
                            {row.map((cell) => (
                              <td key={cell} className="px-4 py-3 align-top">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
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
              Direct Answers to Common Questions
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
              Keep exploring the right path.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                {page.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

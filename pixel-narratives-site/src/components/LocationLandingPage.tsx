import Link from "next/link";

import type { LocationLandingPage } from "../lib/locationLandingPages";
import { JsonLd, buildLocationPageGraph } from "../lib/schema";
import { SERVICES } from "../lib/services";
import Footer from "./Footer";
import Nav from "./Nav";
import PageBottomCta from "./PageBottomCta";

export default function LocationLandingPageView({
  page,
}: {
  page: LocationLandingPage;
}) {
  const graph = buildLocationPageGraph({
    slug: page.slug,
    name: page.title,
    description: page.description,
    breadcrumbName: page.breadcrumbName,
    areaServed: page.areaServed,
    faqs: page.faqs,
  });

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd graph={graph} />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            <Link href="/serving-the-south" className="transition hover:opacity-80">
              Locations
            </Link>
            {" / "}
            {page.marketLabel}
          </p>
          <h1 className="mt-5 text-5xl leading-[1.05] md:text-7xl">{page.h1}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {page.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Conversation
            </Link>
            <Link
              href="/starting-small"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-6 py-3 text-sm transition hover:bg-white/5"
            >
              Find Your Quick Win
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              {page.marketLabel}
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              {page.marketHeading}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {page.marketBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              What We Do
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Four ways to work with us
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
              Each service stands on its own. Start with the need that matters
              most to your business.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="flex flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-7 md:p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {service.problem}
                </p>
                <h3 className="mt-4 text-3xl leading-none">{service.name}</h3>
                <p className="mt-5 flex-1 leading-relaxed text-[var(--muted)]">
                  {page.serviceNotes[service.id]}
                </p>
                <Link
                  href={service.href}
                  className="mt-7 inline-flex min-h-11 items-center self-start text-sm transition hover:opacity-80"
                >
                  Explore {service.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How to Begin
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              {page.engagementHeading}
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {page.engagementBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <Link
                href="/starting-small"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Starting Small
              </Link>{" "}
              offers contained first projects.{" "}
              <Link
                href="/automation#fractional-caio"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Fractional AI Leadership
              </Link>{" "}
              is available when the business needs ongoing support.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Common Questions
          </p>
          <h2 className="mt-4 text-4xl leading-none md:text-5xl">
            Working with Pixel Narratives
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-7"
              >
                <h3 className="text-2xl leading-snug">{faq.question}</h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="text-3xl leading-none md:text-4xl">
              Explore our regional footprint
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              See the markets Pixel Narratives serves across the South.
            </p>
          </div>
          <Link
            href="/serving-the-south"
            className="inline-flex min-h-11 items-center self-start rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 md:self-auto"
          >
            View All Locations
          </Link>
        </div>
      </section>

      <PageBottomCta
        eyebrow="Next Step"
        headline={page.ctaHeadline}
        body={page.ctaBody}
        primaryAction={{ href: "/contact", label: "Book a Conversation" }}
        secondaryAction={{ href: "/services", label: "Explore Services" }}
      />
      <Footer />
    </main>
  );
}

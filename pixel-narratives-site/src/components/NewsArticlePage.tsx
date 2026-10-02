import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Nav from "./Nav";
import PageBottomCta from "./PageBottomCta";
import { buildNewsArticleGraph, type NewsItem } from "../lib/news";
import { JsonLd } from "../lib/schema";

export default function NewsArticlePage({
  item,
  children,
}: {
  item: NewsItem;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <JsonLd graph={buildNewsArticleGraph(item)} />

      <article>
        <header className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--muted)]">
              <Link href="/news" className="transition hover:text-[var(--foreground)]">
                News &amp; Media
              </Link>
              <span aria-hidden className="mx-2">/</span>
              <span aria-current="page">{item.typeLabel}</span>
            </nav>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              {item.kicker}
            </p>
            <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
              {item.title}
            </h1>
            {item.deck ? (
              <p className="mt-8 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                {item.deck}
              </p>
            ) : null}
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
              {item.sourceLine}
            </p>
            {item.dateline ? (
              <p className="mt-6 text-base text-[var(--muted)] md:text-lg">
                {item.dateline}
              </p>
            ) : null}
          </div>
        </header>

        <section className="border-t border-white/8">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl [&_a]:text-[var(--foreground)] [&_a]:transition [&_a]:hover:opacity-80 [&_h2]:pt-8 [&_h2]:text-2xl [&_h2]:leading-snug [&_h2]:text-[var(--foreground)] md:[&_h2]:text-3xl">
              {children}
            </div>

            {item.quote ? (
              <blockquote className="mt-12 max-w-3xl border-l border-white/20 pl-6">
                <p className="text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
                  &ldquo;{item.quote.text}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-[var(--muted)]">
                  — {item.quote.attribution}
                </footer>
              </blockquote>
            ) : null}

            <div className="mt-12 max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              <p>{item.closingNote}</p>
              <p>
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--foreground)] transition hover:opacity-80"
                >
                  {item.externalLinkLabel}
                </a>
              </p>
            </div>
          </div>
        </section>
      </article>

      <section className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-3 px-6 py-10 md:px-10">
          <Link
            href="/news"
            className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5"
          >
            More News
          </Link>
          <Link
            href="/insights"
            className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5"
          >
            Explore Insights
          </Link>
          <Link
            href="/serving-the-south"
            className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5"
          >
            Where We Work
          </Link>
        </div>
      </section>

      <PageBottomCta
        eyebrow="Next Step"
        headline="Ready to talk about what to improve?"
        body="Tell us how the business runs today. We will look at where automation, training, or a stronger online presence would help."
        primaryAction={{ href: "/contact", label: "Start a Conversation" }}
      />
      <Footer />
    </main>
  );
}

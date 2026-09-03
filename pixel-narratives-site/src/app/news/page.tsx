import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { buildNewsIndexGraph, NEWS_ITEMS, newsPath } from "../../lib/news";
import { JsonLd } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Pixel Narratives in the News | Madison, Mississippi",
  description:
    "Press releases and media coverage about Pixel Narratives, a Madison, Mississippi company helping businesses implement AI, automation, training and digital systems.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
      <Nav />
      <JsonLd graph={buildNewsIndexGraph()} />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            News
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            News &amp; Media
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Pixel Narratives is based in Madison, Mississippi. We help small and
            midsize businesses put AI to work through automation, training,
            websites, and marketing. Below is a summary of our press releases
            and media coverage.
          </p>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-6">
            {NEWS_ITEMS.map((item) => (
              <article
                key={item.slug}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {item.typeLabel}
                </p>
                <time
                  dateTime={item.datePublished}
                  className="mt-3 block text-sm text-[var(--muted)]"
                >
                  {item.dateLabel}
                </time>
                <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-4xl">
                  <Link
                    href={newsPath(item)}
                    className="transition hover:opacity-80"
                  >
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.source}
                </p>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {item.indexSummary}
                </p>
                <p className="mt-6">
                  <Link
                    href={newsPath(item)}
                    className="text-sm text-[var(--foreground)] transition hover:opacity-80"
                  >
                    {item.indexCtaLabel}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="next-step-section border-t border-white/8">
        <div className="next-step-bg" aria-hidden />
        <div className="next-step-fade" aria-hidden />
        <div className="next-step-content mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl leading-none md:text-6xl">
              Ready to talk about what to improve?
            </h2>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

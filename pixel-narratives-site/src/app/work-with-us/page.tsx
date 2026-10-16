import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { ENGAGEMENTS, WORK_WITH_US_INTRO } from "../../lib/engagements";
import { JsonLd, buildBreadcrumbs, buildWebPage } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Work With Us | Pixel Narratives",
  description:
    "Explore, Build, Equip, Partner, or Enterprise Partner. Choose how you'd like to work with Pixel Narratives. We'll recommend an approach based on your needs.",
  path: "/work-with-us",
});

export default function WorkWithUsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/work-with-us",
            name: "Work With Us | Pixel Narratives",
            description:
              "Choose how you'd like to work with us. Explore, Build, Equip, Partner, or Enterprise Partner. We'll recommend an approach based on your needs.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Work With Us", path: "/work-with-us" },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-4xl">
          <p className="pn-kicker text-[var(--muted)]">Work With Us</p>
          <h1 className="pn-page-title mt-5">
            Choose how you&apos;d like to work with us.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {WORK_WITH_US_INTRO.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="divide-y divide-white/8 border-y border-white/8">
            {ENGAGEMENTS.map((engagement) => (
              <article
                key={engagement.id}
                id={engagement.id}
                className="scroll-mt-28 grid gap-6 py-12 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-16 md:py-16"
              >
                <div>
                  <h2 className="text-4xl leading-none md:text-5xl">
                    {engagement.name}
                  </h2>
                  <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                    {engagement.price}
                  </p>
                </div>
                <div>
                  {"lede" in engagement && engagement.lede ? (
                    <p className="text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
                      {engagement.lede}
                    </p>
                  ) : null}
                  <p
                    className={`max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg ${
                      "lede" in engagement && engagement.lede ? "mt-5" : ""
                    }`}
                  >
                    {engagement.body}
                  </p>
                  {"note" in engagement && engagement.note ? (
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                      {engagement.note}
                    </p>
                  ) : null}
                  {engagement.id === "explore" ? (
                    <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
                      Prefer a self-serve starting point?{" "}
                      <Link
                        href="/ai-readiness-assessment"
                        className="text-[var(--foreground)] transition hover:opacity-80"
                      >
                        Take the AI Readiness Assessment.
                      </Link>
                    </p>
                  ) : null}
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5"
                    >
                      Start a Conversation
                    </Link>
                  </div>
                </div>
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
            <h2 className="pn-display max-w-4xl">
              Let&apos;s put AI to work for your business.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              Whether you have a specific project in mind or you&apos;re
              exploring what&apos;s possible, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-11 items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

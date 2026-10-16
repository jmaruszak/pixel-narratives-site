import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildBreadcrumbs, buildWebPage } from "../../lib/schema";
import { SERVICES } from "../../lib/services";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "What We Do | Pixel Narratives",
  description:
    "Pixel Narratives helps businesses put AI to work through implementation, training, visibility, and marketing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/services",
            name: "What We Do | Pixel Narratives",
            description:
              "Pixel Narratives helps businesses put AI to work through implementation, training, visibility, and marketing.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "What We Do", path: "/services" },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-4xl">
          <p className="pn-kicker text-[var(--muted)]">What We Do</p>
          <h1 className="pn-page-title mt-5">
            Pixel Narratives helps businesses put AI to work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            From improving operations to reaching more customers, we help you
            find practical ways to put AI to work.
          </p>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="divide-y divide-white/8 border-y border-white/8">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="grid gap-4 py-12 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-16 md:py-16"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    {service.problem}
                  </p>
                  <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                    {service.name}
                  </h2>
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
                    {service.outcome}
                  </p>
                  <p className="mt-4 max-w-xl leading-relaxed text-[var(--muted)]">
                    {service.body}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-7 inline-flex min-h-11 items-center self-start rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                  >
                    {service.ctaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              How engagement works
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              Work With Us
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">
              Choose how you&apos;d like to work with us. We&apos;ll recommend
              an approach based on your needs.
            </p>
            <Link
              href="/work-with-us"
              className="mt-7 inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              See how we work together
            </Link>
          </div>
        </div>
      </section>

      <section className="next-step-section border-t border-white/8">
        <div className="next-step-bg" aria-hidden />
        <div className="next-step-fade" aria-hidden />
        <div className="next-step-content mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl leading-none md:text-6xl">
              Not sure where to begin?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              Whether you have a specific project in mind or you&apos;re
              exploring what&apos;s possible, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-11 items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
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

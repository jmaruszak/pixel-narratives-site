import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildBreadcrumbs, buildWebPage } from "../../lib/schema";
import { SERVICES } from "../../lib/services";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Services | Pixel Narratives",
  description:
    "Explore AI and automation implementation, team training, websites and visibility, marketing, Fractional AI Leadership, and contained first projects from Pixel Narratives.",
  path: "/services",
});

const entryPoints = [
  {
    eyebrow: "Start Small",
    title: "Starting Small",
    body: "Choose one clear problem, one useful outcome, and a contained first project.",
    href: "/starting-small",
    cta: "Find Your Quick Win",
  },
  {
    eyebrow: "Ongoing Leadership",
    title: "Fractional AI Leadership",
    body: "Bring in a Fractional CAIO to identify opportunities, guide implementation, and keep AI initiatives moving.",
    href: "/automation#fractional-caio",
    cta: "Explore Fractional CAIO",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/services",
            name: "Pixel Narratives Services",
            description:
              "AI and automation implementation, AI training, websites and visibility, marketing, Fractional AI Leadership, and contained first projects.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Services
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            What are you trying to improve?
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Pixel Narratives helps businesses save time, use AI better, get
            found, and reach more customers. Start with the problem in front of
            you.
          </p>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="flex flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-7 md:p-9"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {service.problem}
                </p>
                <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                  {service.name}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[var(--foreground)]">
                  {service.outcome}
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-[var(--muted)]">
                  {service.body}
                </p>
                <Link
                  href={service.href}
                  className="mt-7 inline-flex min-h-11 items-center self-start rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                >
                  {service.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 md:px-10 md:py-20">
          {entryPoints.map((entry) => (
            <article
              key={entry.title}
              className="rounded-[28px] border border-white/8 bg-white/[0.02] p-7 md:p-9"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                {entry.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                {entry.title}
              </h2>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">
                {entry.body}
              </p>
              <Link
                href={entry.href}
                className="mt-7 inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                {entry.cta}
              </Link>
            </article>
          ))}
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
              Tell us what is taking too much time, creating friction, or
              getting in the way.
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

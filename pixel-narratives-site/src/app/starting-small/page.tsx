import CarePricing from "../../components/CarePricing";
import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import PricingNote from "../../components/PricingNote";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Starting Small | Pixel Narratives",
  description:
    "Start with one useful thing. Choose an Implementation Quick Win, Website Starter, or one finished piece of creative.",
  path: "/starting-small",
  image: "/images/home-cinematic.jpg",
  imageAlt: "Pixel Narratives cinematic visual",
});

const NEXT_SERVICES = [
  { href: "/services", label: "All Services" },
  { href: "/automation", label: "AI & Automation" },
  { href: "/training", label: "Training" },
  { href: "/websites", label: "Websites & Visibility" },
  { href: "/marketing", label: "Marketing" },
] as const;

export default function StartingSmallPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/starting-small",
            name: "Starting Small",
            description:
              "Implementation Quick Win and Website Starter at $2,500, or a Creative Quick Win at $1,500. Focused work with a finished outcome.",
            serviceType:
              "Small-scope implementation, website, and creative projects",
          }),
          buildWebPage({
            path: "/starting-small",
            name: "Starting Small | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/starting-small#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Starting Small", path: "/starting-small" },
          ]),
        ]}
      />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/home-cinematic.jpg"
        imageAlt="Cinematic still for Pixel Narratives"
        title="Start with one useful thing."
        subtitle="Starting Small"
      />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Three places to start
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              A finished outcome you can use.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-start">
            <article className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <h3 className="text-2xl leading-none md:text-3xl">
                Implementation Quick Win
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                $2,500
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                One problem. One useful outcome.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Start with something specific that is costing your team time,
                creating friction, or getting in the way of better work.
                We&apos;ll figure out the simplest way to fix it.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Focused on one clear business problem</li>
                <li>Explore automation if it makes sense</li>
                <li>Built around the tools and processes you already use</li>
                <li>Tested before handoff</li>
                <li>Documented so your team knows what to do with it</li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                The purpose is to solve a problem, put the solution to work,
                and prove the value.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                If the problem is bigger than one quick win, the{" "}
                <a
                  href="/automation"
                  className="text-[var(--foreground)] transition hover:opacity-80"
                >
                  AI & Automation Assessment starts at $1,250
                </a>
                . We map the work, identify the best opportunities, and decide
                what&apos;s worth building first.
              </p>
              <div className="mt-8">
                <a
                  href="/contact?need=automation"
                  className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Find Your Quick Win
                </a>
              </div>
            </article>

            <article className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <h3 className="text-2xl leading-none md:text-3xl">Website Starter</h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                $2,500
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                A focused website that gives your business a starting point for
                customers.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                For businesses that need a professional web presence.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Five focused pages built around your business and customers</li>
                <li>
                  Home, Services, About, Contact, plus one proof, case study, or
                  landing page
                </li>
                <li>Custom design and mobile layout</li>
                <li>SEO foundations and analytics setup</li>
                <li>
                  Clear calls to action that give visitors a next step
                </li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                You get a site that explains what you do, builds credibility,
                and makes it easy for the right people to take action.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Need a larger site, deeper search visibility work, or more
                functionality? Our{" "}
                <a
                  href="/websites"
                  className="font-medium text-[var(--foreground)] transition hover:opacity-80"
                >
                  Website + Visibility Build starts at $7,500.
                </a>
              </p>
              <div className="mt-8">
                <a
                  href="/contact?need=websites"
                  className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Build My Site
                </a>
              </div>
            </article>

            <article className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <h3 className="text-2xl leading-none md:text-3xl">
                Creative Quick Win
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                $1,500
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                One idea. One finished piece of creative.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Have something you want to promote, explain, launch, or get
                people to notice? Let&apos;s build a compelling idea.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>One creative concept</li>
                <li>One short AI-generated video or social ad</li>
                <li>One message and one audience</li>
                <li>One finished format</li>
                <li>One revision round</li>
                <li>Ready for you to publish or promote</li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                No campaign management. No media spend. No ongoing commitment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                You get one finished piece of creative and a chance to see
                what&apos;s possible.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                Want to turn it into a larger campaign?{" "}
                <a
                  href="/marketing"
                  className="font-medium text-[var(--foreground)] transition hover:opacity-80"
                >
                  Attention Pulse starts at $5,000.
                </a>
              </p>
              <div className="mt-8">
                <a
                  href="/contact?need=marketing"
                  className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Discuss Creative
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CarePricing level="starter" />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <h2 className="text-3xl leading-none md:text-4xl">When you want to go further.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Implementation, training, websites, visibility, and marketing.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {NEXT_SERVICES.map((service) => (
              <li key={service.href}>
                <a
                  href={service.href}
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PricingNote />
      <PageBottomCta
        eyebrow="Next Step"
        headline="Tell us the one thing worth fixing."
        body="A workflow, a website, or a question about which one to start with. We will tell you if a small project is the right fit."
        primaryAction={{ href: "/contact", label: "Start a Conversation" }}
      />
      <Footer />
    </main>
  );
}

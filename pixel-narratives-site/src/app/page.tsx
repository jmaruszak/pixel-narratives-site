import type { Metadata } from "next";
import AdsProcessFlow from "../components/AdsProcessFlow";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ServicesGridReveal from "../components/ServicesGridReveal";

export const metadata: Metadata = {
  title: "Pixel Narratives | AI Ads + Business AI Systems",
  description:
    "Pixel Narratives builds AI-powered commercial ads and practical AI systems for brands that need attention, workflows, and measurable value.",
  alternates: { canonical: "/" },
};

const homepageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pixel Narratives",
    url: "https://pixelnarratives.studio",
    description:
      "AI-powered commercial production and business AI implementation studio.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Commercial Production",
    provider: { "@type": "Organization", name: "Pixel Narratives" },
    areaServed: "United States",
    serviceType: "AI-powered commercial video production",
    description:
      "Concept-driven AI commercial production for cinematic video ads and brand campaigns.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Intelligence Layer AI Consulting",
    provider: { "@type": "Organization", name: "Pixel Narratives" },
    areaServed: "United States",
    serviceType: "AI consulting, workflow automation, and implementation",
    description:
      "AI consulting and implementation for workflows, automation, CRM systems, governance, and measurable business value.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      {homepageSchemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="relative min-h-[90vh] overflow-hidden">
        <img
          src="/images/hero-cinematic.jpg"
          alt="Businessman discovering a new type of studio"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="hero-ambient-gradient pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] w-full max-w-7xl items-center px-6 py-32 md:px-10">
          <div className="max-w-3xl">
            <h1 className="hero-entrance leading-none text-white font-semibold">
              <span className="block text-6xl md:text-8xl">
                Narrative Intelligence
              </span>
              <span className="block text-3xl text-white/80 md:text-4xl">
                for Brands
              </span>
            </h1>

            <div className="hero-entrance hero-entrance-delay-1 mt-8 space-y-2 text-lg text-white/70 md:text-xl">
              <p>AI-powered ads built around a real concept.</p>
              <p>Practical AI systems built around measurable value.</p>
            </div>

            <div className="hero-entrance hero-entrance-delay-2 mt-10">
              <a
                href="https://calendly.com/pixelnarratives"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
              <span className="block">Creative that gets attention.</span>
              <span className="mt-2 block sm:mt-2.5 md:mt-3">
                Systems that create leverage.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="service-card rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Studio
              </p>
              <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                Pixel Narratives Studio
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Cinematic, AI-powered commercial production built around
                concepts people actually want to watch, remember, and share.
              </p>
              <div className="mt-8">
                <a
                  href="/projects"
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="service-card rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Intelligence Layer
              </p>
              <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                AI strategy and implementation
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                For businesses ready to turn scattered AI usage into practical
                workflows, automation, governance, and measurable operating value.
              </p>
              <div className="mt-8">
                <a
                  href="/intelligence-layer"
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                >
                  Explore Intelligence Layer
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The Problem
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Most ads look
              <br />
              the same.
            </h2>
          </div>

          <div className="flex max-w-xl items-end">
            <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              <p>Generic content rarely earns attention on its own.</p>
              <p>
                You don’t need more output.
                <br />
                You need a sharper concept and a smarter system behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdsProcessFlow />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              What We Do
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Ads built
              <br />
              to be shared.
            </h2>
          </div>

          <ServicesGridReveal className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="service-reveal-item">
              <div className="service-card rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">
                  Narrative Intelligence
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  We build around the story, not the slogan. Every campaign
                  needs a setup, a turn, and a payoff.
                </p>
              </div>
            </div>

            <div className="service-reveal-item">
              <div className="service-card rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">
                  Entertainment-Driven Advertising
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  If it feels like an ad, it’s already losing. The work has to
                  earn attention before it asks for anything.
                </p>
              </div>
            </div>

            <div className="service-reveal-item">
              <div className="service-card rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">
                  AI-Native Production
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  Cinematic, bold, and built to feel bigger than the budget.
                </p>
              </div>
            </div>
          </ServicesGridReveal>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Featured Campaign
            </p>

            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              The Homie
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              A spec campaign created for Fizz Soda as our entry into the Runway
              Big Ad Contest — built to show how much energy, personality, and
              cinematic style a brand spot can carry.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start">
            <div className="overflow-hidden rounded-[24px] border border-white/8 bg-black">
              <video
                className="block w-full"
                controls
                playsInline
                preload="metadata"
                poster="/images/runway-still.jpg"
                src="/videos/the-last-fizz.mp4"
              >
                <img
                  src="/images/runway-still.jpg"
                  alt="The Homie campaign still for Fizz Soda"
                  className="block w-full object-cover"
                />
              </video>
            </div>

            <div className="flex flex-col justify-between rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Fizz Soda
                </p>

                <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                  The Homie
                </h3>
              </div>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                    <li>Spec campaign</li>
                    <li>Creative direction</li>
                    <li>Concept development</li>
                    <li>AI-native production</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="mailto:hello@pixelnarratives.studio"
                    className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                  >
                    Ask About a Campaign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="next-step-section border-t border-white/8">
        <div className="next-step-bg" aria-hidden />
        <div className="next-step-fade" aria-hidden />
        <div className="next-step-content mx-auto w-full max-w-7xl px-6 py-28 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Next Step
            </p>

            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Choose the path that fits
              <br />
              what you need next.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Whether you need a campaign that earns attention or systems that
              create leverage, Pixel Narratives is built to help you move.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Studio
              </p>

              <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                Build a campaign
              </h3>

              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                For brands that want cinematic, concept-driven creative built
                to be watched, remembered, and shared.
              </p>

              <div className="mt-8">
                <a
                  href="https://calendly.com/pixelnarratives"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Book a Creative Call
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Intelligence Layer
              </p>

              <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                Build your AI systems
              </h3>

              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                For businesses ready to move from scattered AI usage to practical
                workflows, stronger systems, and measurable value.
              </p>

              <div className="mt-8">
                <a
                  href="/intelligence-layer"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Explore Intelligence Layer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
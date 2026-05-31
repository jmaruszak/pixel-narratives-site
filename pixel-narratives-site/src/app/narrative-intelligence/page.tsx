import AdsProcessFlow from "../../components/AdsProcessFlow";
import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { buildPageMetadata } from "../../lib/siteMetadata";
import ServicesGridReveal from "../../components/ServicesGridReveal";
import CaseStudiesSection, {
  FeaturedCampaignSection,
} from "../../components/narrative-intelligence/CaseStudiesSection";

export const metadata = buildPageMetadata({
  title: "Narrative Intelligence | Pixel Narratives",
  description:
    "Cinematic, concept-driven AI commercial production from Pixel Narratives. Ads built to be watched, remembered, and shared.",
  path: "/narrative-intelligence",
  image: "/images/hero-cinematic.jpg",
  imageAlt: "Narrative Intelligence cinematic visual for Pixel Narratives",
});

export default function NarrativeIntelligencePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <CinematicPageHero
        imageSrc="/images/hero-cinematic.jpg"
        imageAlt="Businessman discovering a new type of studio"
        title="Narrative Intelligence"
        subtitle="for Brands"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 text-lg text-white/70 md:text-xl">
          <p>Strategy First Storytelling Powered by AI</p>
        </div>
      </CinematicPageHero>

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
                You don&apos;t need more output.
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

          <ServicesGridReveal className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
            <div className="service-reveal-item h-full">
              <div className="service-card flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">
                  Narrative Intelligence
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  We build around the story, not the slogan. Every campaign
                  needs a setup, a turn, and a payoff.
                </p>
              </div>
            </div>
            <div className="service-reveal-item h-full">
              <div className="service-card flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">
                  Entertainment-First
                </h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  Built to be watched first. The ask only works after the story
                  lands.
                </p>
              </div>
            </div>
            <div className="service-reveal-item h-full">
              <div className="service-card flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
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

      <FeaturedCampaignSection />
      <CaseStudiesSection />

      <PageBottomCta {...DESTINATION_CTAS.narrativeIntelligence} />

      <Footer />
    </main>
  );
}

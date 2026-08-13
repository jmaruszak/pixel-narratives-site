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
  title: "Marketing | Pixel Narratives",
  description:
    "Reach more customers with campaigns, ads, video, content, and lead generation. Pixel Narratives uses AI where it helps production.",
  path: "/marketing",
  image: "/images/hero-cinematic.jpg",
  imageAlt: "Marketing cinematic visual for Pixel Narratives",
});

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <CinematicPageHero
        imageSrc="/images/hero-cinematic.jpg"
        imageAlt="Cinematic marketing campaign visual"
        title="Reach More Customers"
        subtitle="Marketing"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 max-w-2xl space-y-5 text-lg text-white/70 md:text-xl">
          <p>
            Campaigns, ads, video, content, and lead generation built to get
            seen, remembered, and acted on.
          </p>
          <p className="text-base md:text-lg">
            AI-assisted production can move faster.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10">
          <a
            href="/contact?need=marketing"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Discuss a Campaign
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The problem
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
                You do not need more output.
                <br />
                You need a sharper concept and a clearer path to the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdsProcessFlow />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              What we do
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Marketing built
              <br />
              to be acted on.
            </h2>
          </div>

          <ServicesGridReveal className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
            <div className="service-reveal-item h-full">
              <div className="service-card flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">Campaigns</h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  Paid ads, organic content, email, and landing pages around one
                  clear offer.
                </p>
              </div>
            </div>
            <div className="service-reveal-item h-full">
              <div className="service-card flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">Video</h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  Commercials and social spots built to be watched first. The
                  ask comes after the story lands.
                </p>
              </div>
            </div>
            <div className="service-reveal-item h-full">
              <div className="service-card flex h-full flex-col rounded-[28px] border border-white/8 bg-white/[0.02] p-8">
                <h3 className="text-3xl leading-none md:text-4xl">Lead generation</h3>
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  Reach the right audience and give them a next step that
                  supports sales.
                </p>
              </div>
            </div>
          </ServicesGridReveal>
        </div>
      </section>

      <FeaturedCampaignSection />
      <CaseStudiesSection />

      <PageBottomCta {...DESTINATION_CTAS.marketing} />
      <Footer />
    </main>
  );
}

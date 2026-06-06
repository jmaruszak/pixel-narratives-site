import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

export const metadata = buildPageMetadata({
  title: "Web Intelligence | Pixel Narratives",
  description:
    "Scan your live website for SEO signals, AI discoverability, conversion friction, and redesign opportunities, then get a pragmatic game plan.",
  path: "/web-intelligence",
  image: "/images/web-cinematic.jpg",
  imageAlt: "Web Intelligence cinematic visual for Pixel Narratives",
});

const SECTIONS = [
  {
    eyebrow: "Website Visibility",
    title: "See how your site shows up today.",
    body: "Web Intelligence reads your live URL for search signals, structure, and content gaps, so you know what is helping or hurting visibility before you invest in a rebuild.",
  },
  {
    eyebrow: "AI Discoverability",
    title: "Understand how AI systems might read you.",
    body: "As discovery shifts toward AI-assisted search and recommendations, your site needs clear structure, useful content, and signals that machines can interpret. We surface where you are strong and where you are invisible.",
  },
  {
    eyebrow: "Conversion Friction",
    title: "Spot what slows people down.",
    body: "Slow paths, unclear CTAs, and operational friction points cost leads. The scan highlights practical fixes, not abstract scores, so you can prioritize what moves conversion.",
  },
  {
    eyebrow: "Redesign Opportunities",
    title: "Know when a refresh is worth it.",
    body: "Sometimes the answer is copy and structure. Sometimes it is a rebuild. Web Intelligence helps you see where a redesign, content pass, or technical cleanup would create the most leverage.",
  },
] as const;

export default function WebIntelligencePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/web-cinematic.jpg"
        imageAlt="Analyst reviewing a holographic website intelligence map against a city skyline at night"
        title="Web Intelligence"
        subtitle="Visibility starts with your URL."
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          <p>
            Enter a URL for a structured look at SEO signals, AI visibility,
            operational friction points, and a pragmatic game plan. We use Web
            Intelligence often during Intelligence Layer Blueprint work, and you
            can try it anytime.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href={WEB_INTEL_PAGE_TOOL_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Open Web Intelligence
          </a>
          <a
            href="/intelligence-layer"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            Explore Business Intelligence
          </a>
        </div>
      </CinematicPageHero>

      {SECTIONS.map((section, index) => (
        <section
          key={section.eyebrow}
          className={`border-t border-white/8 ${index % 2 === 1 ? "bg-white/[0.01]" : ""}`}
        >
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pn-section md:grid-cols-2 md:items-center md:px-10">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                {section.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl leading-none md:text-5xl">
                {section.title}
              </h2>
            </div>
            <p
              className={`text-lg leading-relaxed text-[var(--muted)] md:text-xl ${index % 2 === 1 ? "md:order-1" : ""}`}
            >
              {section.body}
            </p>
          </div>
        </section>
      ))}

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Guide
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-4xl">
              Visibility in the Age of AI
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Learn how search, SEO, AI visibility, E-E-A-T, and YouTube shape
              how customers discover and trust businesses online.
            </p>
            <div className="mt-8">
              <a
                href="/visibility-in-the-age-of-ai"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Read the guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.webIntelligence} />

      <Footer />
    </main>
  );
}

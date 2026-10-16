import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

export const metadata = buildPageMetadata({
  title: "Visibility | Pixel Narratives",
  description:
    "Websites, SEO, and AI search. We help you build a stronger online presence and get found by more of your customers.",
  path: "/websites",
  image: "/images/web-cinematic.jpg",
  imageAlt: "Websites and online visibility cinematic visual for Pixel Narratives",
});

const SECTIONS = [
  {
    eyebrow: "Website",
    title: "A site that helps people take action.",
    body: "Design, development, landing pages, performance, and conversion work so visitors can understand your offer and contact you.",
  },
  {
    eyebrow: "Search",
    title: "Show up where customers are looking.",
    body: "Design, SEO, Google Business Profile, schema, AI search visibility and technical cleanup.",
  },
  {
    eyebrow: "Conversion",
    title: "Spot what slows people down.",
    body: "Unclear calls to action, slow pages, and messy paths cost leads. We prioritize practical fixes, not abstract scores.",
  },
  {
    eyebrow: "Live scan",
    title: "Start with your URL.",
    body: "Run a free look at your live site for search signals, structure, friction, and improvement priorities. Then we can talk about what to change.",
  },
] as const;

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/websites",
            name: "Visibility",
            description:
              "Websites, SEO, and AI search. We help you build a stronger online presence and get found by more of your customers. No ranking guarantees.",
            serviceType: "Websites, SEO, and AI Search Visibility",
          }),
          buildWebPage({
            path: "/websites",
            name: "Visibility | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/websites#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Visibility", path: "/websites" },
          ]),
        ]}
      />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/web-cinematic.jpg"
        imageAlt="Analyst reviewing a website map against a city skyline at night"
        title="If People Can't Find You, the Rest Doesn't Matter Much."
        subtitle="Visibility"
      >
        <p className="hero-entrance hero-entrance-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          Websites, SEO, and AI search. We help you build a stronger online
          presence and get found by more of your customers.
        </p>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/contact?need=websites"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Improve My Website
          </a>
          <a
            href={WEB_INTEL_PAGE_TOOL_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            Check My Online Visibility
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
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              What an engagement may look like
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              Build a foundation, or improve the one you have
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              A contained website can start as a Build. Larger sites and
              ongoing visibility work are quoted from scope.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              See{" "}
              <a
                href="/work-with-us"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Work With Us
              </a>{" "}
              for how an engagement works.
            </p>
            <div className="mt-8">
              <a
                href="/contact?need=websites"
                className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Improve My Website
              </a>
            </div>
          </div>
        </div>
      </section>

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
              How search, local presence, and AI answers shape how customers
              discover and trust businesses online.
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

      <PageBottomCta {...DESTINATION_CTAS.websites} />
      <Footer />
    </main>
  );
}

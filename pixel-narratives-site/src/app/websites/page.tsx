import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import PricingNote from "../../components/PricingNote";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs, ORG_ID } from "../../lib/schema";
import { SITE_URL, buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

export const metadata = buildPageMetadata({
  title: "Websites + Online Visibility | Pixel Narratives",
  description:
    "Get found online. Website design, SEO, local SEO, Google Business Profile, conversion, and AI search visibility from Pixel Narratives.",
  path: "/websites",
  image: "/images/web-cinematic.jpg",
  imageAlt: "Websites and online visibility cinematic visual for Pixel Narratives",
});

const SECTIONS = [
  {
    eyebrow: "Website",
    title: "A site that helps people take action.",
    body: "Design, development, landing pages, performance, and conversion work so visitors can understand the offer and contact you.",
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
            name: "Websites + Online Visibility",
            description:
              "Website + Visibility Build and Visibility Sprint: a modern digital foundation to be understood and discovered, or focused optimization of an existing site. No ranking or AI-answer guarantees.",
            serviceType: "Website Development and Online Visibility",
          }),
          {
            "@type": "Service" as const,
            "@id": `${SITE_URL}/websites#website-visibility-build`,
            name: "Website + Visibility Build",
            url: `${SITE_URL}/websites`,
            description:
              "Starting at $7,500. Up to 10 core pages. A modern website with search and AI-search visibility foundations. Larger websites and custom functionality are scoped separately.",
            serviceType: "Website and search visibility foundation",
            provider: { "@id": ORG_ID },
          },
          {
            "@type": "Service" as const,
            "@id": `${SITE_URL}/websites#visibility-sprint`,
            name: "Visibility Sprint",
            url: `${SITE_URL}/websites`,
            description:
              "Starting at $5,000. Improve search, local, technical, and AI-search visibility of an existing website. Not an unlimited redesign.",
            serviceType: "Search and AI-search visibility optimization",
            provider: { "@id": ORG_ID },
          },
          buildWebPage({
            path: "/websites",
            name: "Websites + Online Visibility | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/websites#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Websites + Online Visibility", path: "/websites" },
          ]),
        ]}
      />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/web-cinematic.jpg"
        imageAlt="Analyst reviewing a website map against a city skyline at night"
        title="Get Found Online"
        subtitle="Websites + Online Visibility"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          <p>
            Help more of the right customers find the business and take action.
            Position your business to be found wherever your customers are
            searching, from Google to AI-powered search.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href={WEB_INTEL_PAGE_TOOL_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Check My Online Visibility
          </a>
          <a
            href="/contact?need=websites"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            Improve My Website
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
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Offers
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              Build a foundation, or improve the one you have
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col rounded-[24px] border border-white/12 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Get found
              </p>
              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Website + Visibility Build
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $7,500
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                A modern digital foundation so the business is clearly
                understood online, discoverable in search, structured for
                conversion, and easier for AI search systems to interpret.
                Includes up to 10 core pages. Larger websites and custom
                functionality are scoped based on project needs.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Website strategy and information architecture</li>
                <li>Up to 10 core pages</li>
                <li>Modern responsive design and conversion-focused structure</li>
                <li>Technical and on-page SEO foundations</li>
                <li>Organization structured data where appropriate</li>
                <li>Google Business Profile alignment where applicable</li>
                <li>Analytics and Search Console setup</li>
                <li>Mobile, performance, and clear calls to action</li>
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
                Custom applications, portals, ecommerce, calculators, and
                substantial integrations are scoped separately. We do not
                guarantee rankings or appearance in AI answers.
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

            <div className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Existing site
              </p>
              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Visibility Sprint
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $5,000
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                For businesses that already have a viable website and need
                stronger search, local, technical, and AI-search visibility.
                This is optimization of an existing digital foundation, not an
                unlimited redesign.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Website visibility audit</li>
                <li>Search and AI-search / entity visibility analysis</li>
                <li>Google Business Profile optimization</li>
                <li>Technical SEO and on-page work on priority pages</li>
                <li>Organization structured data</li>
                <li>Local search and conversion/CTA improvements</li>
                <li>Analytics and Search Console review or setup</li>
                <li>Prioritized visibility roadmap</li>
              </ul>
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

      <PricingNote />
      <PageBottomCta {...DESTINATION_CTAS.websites} />
      <Footer />
    </main>
  );
}

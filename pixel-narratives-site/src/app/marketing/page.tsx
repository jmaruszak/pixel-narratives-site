import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import WorkVideo from "../../components/work/WorkVideo";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import {
  MARKETING_CAPABILITIES,
  MARKETING_CHAD,
  MARKETING_MORE_WORK,
  MARKETING_PAGE,
  MARKETING_SUMMARY,
} from "../../lib/marketingContent";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { CHAD_CAMPAIGN } from "../../lib/workPortfolio";

export const metadata = buildPageMetadata({
  title: "Marketing | Pixel Narratives",
  description: MARKETING_SUMMARY,
  path: "/marketing",
  image: "/images/hero-cinematic.jpg",
  imageAlt: "Marketing cinematic visual for Pixel Narratives",
});

export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/marketing",
            name: "Marketing",
            description: MARKETING_SUMMARY,
            serviceType: "Marketing, Creative, and Advertising",
          }),
          buildWebPage({
            path: "/marketing",
            name: "Marketing | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/marketing#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Marketing", path: "/marketing" },
          ]),
        ]}
      />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/hero-cinematic.jpg"
        imageAlt="Cinematic marketing campaign visual"
        title={MARKETING_PAGE.headline}
        subtitle={MARKETING_PAGE.eyebrow}
      >
        <p className="hero-entrance hero-entrance-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          {MARKETING_PAGE.lede}
        </p>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/contact?need=marketing"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Start a Conversation
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              What we do
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              From the first idea to the finished campaign.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {MARKETING_CAPABILITIES.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h3 className="text-2xl leading-none">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Selected work
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl leading-none md:text-6xl">
            See what we&apos;ve been making.
          </h2>

          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              {MARKETING_CHAD.category}
            </p>
            <h3 className="mt-4 text-4xl leading-none md:text-5xl">
              {MARKETING_CHAD.title}
            </h3>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {MARKETING_CHAD.body}
            </p>
            <p className="mt-6 max-w-3xl text-base text-[var(--foreground)] md:text-lg">
              {MARKETING_CHAD.metrics}
            </p>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {CHAD_CAMPAIGN.commercials.map((commercial) => (
                <WorkVideo
                  key={commercial.title}
                  title={
                    commercial.title === "Chad GPT: Introduction"
                      ? "Introduction"
                      : commercial.title
                  }
                  videoSrc={commercial.videoSrc}
                  posterSrc={commercial.posterSrc}
                />
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {MARKETING_MORE_WORK.map((piece) => (
              <div key={piece.title}>
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {piece.eyebrow}
                </p>
                <WorkVideo
                  title={piece.title}
                  videoSrc={piece.videoSrc}
                  posterSrc={piece.posterSrc}
                />
                <p className="mt-3 max-w-lg text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {piece.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.marketing} />
      <Footer />
    </main>
  );
}

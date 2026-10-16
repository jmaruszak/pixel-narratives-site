import Image from "next/image";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import WorkVideo from "../../components/work/WorkVideo";
import YouTubeEmbed from "../../components/work/YouTubeEmbed";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import {
  AGENCY_DASHBOARD,
  BADGEPASS_WORKSHOP,
  CHAD_CAMPAIGN,
  RESTAURANT_ASSESSMENT,
  RISKY_BUSINESS,
  TEAM_P,
  WORK_PAGE,
} from "../../lib/workPortfolio";

export const metadata = buildPageMetadata({
  title: "Our Work | Pixel Narratives",
  description:
    "Selected work from Pixel Narratives: original campaigns, custom software, team training, and AI-native film.",
  path: "/work",
  image: "/images/home-hero-poster.jpg",
  imageAlt: "Selected work from Pixel Narratives",
});

function ProjectMeta({
  category,
  origin,
  light = false,
}: {
  category: string;
  origin: string;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.35em] ${
        light ? "text-[var(--ink-muted)]" : "text-[var(--muted)]"
      }`}
    >
      {category}
      <span className={`mx-3 ${light ? "text-black/20" : "text-white/20"}`}>
        /
      </span>
      {origin}
    </p>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/work",
            name: "Our Work | Pixel Narratives",
            description:
              "Selected work from Pixel Narratives: original campaigns, custom software, team training, and AI-native film.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
        <p className="pn-kicker text-[var(--muted)]">{WORK_PAGE.eyebrow}</p>
        <h1 className="pn-page-title mt-5">{WORK_PAGE.headline}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          {WORK_PAGE.lede}
        </p>
      </section>

      <article className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <ProjectMeta
            category={CHAD_CAMPAIGN.category}
            origin={CHAD_CAMPAIGN.origin}
          />
          <h2 className="mt-4 max-w-4xl text-5xl leading-none md:text-7xl">
            {CHAD_CAMPAIGN.title}
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {CHAD_CAMPAIGN.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="text-base text-[var(--foreground)] md:text-lg">
              {CHAD_CAMPAIGN.note}
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {CHAD_CAMPAIGN.commercials.map((commercial) => (
              <WorkVideo
                key={commercial.title}
                title={commercial.title}
                videoSrc={commercial.videoSrc}
                posterSrc={commercial.posterSrc}
              />
            ))}
          </div>

          <dl className="mt-14 grid gap-8 border-t border-white/8 pt-10 sm:grid-cols-3">
            {CHAD_CAMPAIGN.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {metric.label}
                </dt>
                <dd className="mt-3 text-3xl leading-none md:text-4xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-[var(--muted)]">
            {CHAD_CAMPAIGN.period}
          </p>
        </div>
      </article>

      <article className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pn-section md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:px-10">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] border border-white/8 bg-black">
            <Image
              src={AGENCY_DASHBOARD.imageSrc}
              alt={AGENCY_DASHBOARD.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <ProjectMeta
              category={AGENCY_DASHBOARD.category}
              origin={AGENCY_DASHBOARD.origin}
            />
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              {AGENCY_DASHBOARD.title}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {AGENCY_DASHBOARD.body}
            </p>
          </div>
        </div>
      </article>

      <article className="pn-band-light">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:px-10">
          <div>
            <ProjectMeta
              category={BADGEPASS_WORKSHOP.category}
              origin={BADGEPASS_WORKSHOP.origin}
              light
            />
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              {BADGEPASS_WORKSHOP.title}
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed md:text-xl">
              {BADGEPASS_WORKSHOP.body}
            </p>
          </div>
          <blockquote>
            <p className="text-2xl leading-snug text-[var(--ink)] md:text-4xl md:leading-[1.15]">
              &ldquo;{BADGEPASS_WORKSHOP.quote}&rdquo;
            </p>
            <footer className="mt-10">
              <p className="text-base text-[var(--ink)]">
                {BADGEPASS_WORKSHOP.attribution}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-muted)]">
                {BADGEPASS_WORKSHOP.role}
              </p>
            </footer>
          </blockquote>
        </div>
      </article>

      <article className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pn-section md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-10">
          <YouTubeEmbed videoId={TEAM_P.youtubeId} title={TEAM_P.youtubeTitle} />
          <div>
            <ProjectMeta category={TEAM_P.category} origin={TEAM_P.origin} />
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              {TEAM_P.title}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {TEAM_P.body}
            </p>
          </div>
        </div>
      </article>

      <article className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-10 px-6 pn-section md:flex-row md:items-center md:justify-between md:px-10">
          <div className="max-w-xl">
            <ProjectMeta
              category={RISKY_BUSINESS.category}
              origin={RISKY_BUSINESS.origin}
            />
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              {RISKY_BUSINESS.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {RISKY_BUSINESS.body}
            </p>
          </div>
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-[24px] border border-white/8 bg-black">
            <Image
              src={RISKY_BUSINESS.imageSrc}
              alt={RISKY_BUSINESS.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 28rem"
              className="object-contain"
            />
          </div>
        </div>
      </article>

      <article className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <figure>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] border border-white/8 bg-black">
              <Image
                src={RESTAURANT_ASSESSMENT.imageSrc}
                alt={RESTAURANT_ASSESSMENT.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--muted)]">
              {RESTAURANT_ASSESSMENT.imageNote}
            </figcaption>
          </figure>
          <div>
            <ProjectMeta
              category={RESTAURANT_ASSESSMENT.category}
              origin={RESTAURANT_ASSESSMENT.origin}
            />
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              {RESTAURANT_ASSESSMENT.title}
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {RESTAURANT_ASSESSMENT.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <a
              href={RESTAURANT_ASSESSMENT.sampleHref}
              className="mt-8 inline-flex min-h-11 items-center text-sm text-[var(--foreground)] underline decoration-white/30 underline-offset-4 transition hover:opacity-80"
            >
              {RESTAURANT_ASSESSMENT.sampleLabel}
            </a>
          </div>
        </div>
      </article>

      <PageBottomCta
        eyebrow="Contact"
        headline="Let's talk about your business."
        body="Have something in mind, or just curious about what's possible? We'd love to hear from you."
        primaryAction={{ href: "/contact", label: "Start a Conversation" }}
      />
      <Footer />
    </main>
  );
}

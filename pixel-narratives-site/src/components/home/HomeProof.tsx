import Image from "next/image";
import Link from "next/link";
import WorkVideo from "../work/WorkVideo";
import {
  AGENCY_DASHBOARD,
  CHAD_CAMPAIGN,
  RESTAURANT_ASSESSMENT,
  WORK_PAGE,
} from "../../lib/workPortfolio";

export default function HomeProof() {
  const featuredCommercial = CHAD_CAMPAIGN.commercials[0];

  return (
    <section className="home-scene overflow-x-clip">
      <div className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <p className="home-scene-enter pn-kicker text-[var(--muted)]">
          {WORK_PAGE.eyebrow}
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          {WORK_PAGE.lede}
        </p>

        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:tracking-[0.35em]">
            {CHAD_CAMPAIGN.category}
            <span className="mx-3 text-white/20">/</span>
            {CHAD_CAMPAIGN.origin}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl leading-none md:text-6xl">
            {CHAD_CAMPAIGN.title}
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {CHAD_CAMPAIGN.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <WorkVideo
              title={featuredCommercial.title}
              videoSrc={featuredCommercial.videoSrc}
              posterSrc={featuredCommercial.posterSrc}
            />
          </div>
        </div>

        <div className="mt-16 grid items-end gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.42fr)] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:tracking-[0.35em]">
              {AGENCY_DASHBOARD.category}
              <span className="mx-3 text-white/20">/</span>
              {AGENCY_DASHBOARD.origin}
            </p>
            <h3 className="mt-4 text-3xl leading-none md:text-4xl">
              {AGENCY_DASHBOARD.title}
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {AGENCY_DASHBOARD.body}
            </p>
            <p className="mt-8 text-sm text-[var(--muted)] md:text-base">
              {CHAD_CAMPAIGN.metrics
                .map((metric) => `${metric.value} ${metric.label.toLowerCase()}`)
                .join(" · ")}
            </p>
          </div>
          <div className="relative aspect-[3/2] w-full max-w-sm justify-self-end overflow-hidden rounded-[24px] border border-white/8 bg-black">
            <Image
              src={AGENCY_DASHBOARD.imageSrc}
              alt={AGENCY_DASHBOARD.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 24vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-16 grid items-end gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.42fr)] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:tracking-[0.35em]">
              {RESTAURANT_ASSESSMENT.category}
              <span className="mx-3 text-white/20">/</span>
              {RESTAURANT_ASSESSMENT.origin}
            </p>
            <h3 className="mt-4 text-3xl leading-none md:text-4xl">
              {RESTAURANT_ASSESSMENT.title}
            </h3>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg">
              {RESTAURANT_ASSESSMENT.body[0].split(". ")[0]}.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {RESTAURANT_ASSESSMENT.imageNote}
            </p>
          </div>
          <div className="relative aspect-[3/2] w-full max-w-sm justify-self-end overflow-hidden rounded-[24px] border border-white/8 bg-black">
            <Image
              src={RESTAURANT_ASSESSMENT.imageSrc}
              alt={RESTAURANT_ASSESSMENT.imageAlt}
              fill
              sizes="(max-width: 1023px) 100vw, 24vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <p className="mt-10">
          <Link
            href="/work"
            className="inline-flex min-h-11 items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
          >
            See more of our work
          </Link>
        </p>
      </div>
    </section>
  );
}

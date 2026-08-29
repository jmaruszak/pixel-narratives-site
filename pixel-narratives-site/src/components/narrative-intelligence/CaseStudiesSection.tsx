import { CASE_STUDIES, FEATURED_CAMPAIGN } from "../../lib/siteContent";

export default function CaseStudiesSection() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Selected Work
          </p>
          <h2 className="mt-4 text-5xl leading-none md:text-7xl">
            Selected
            <br />
            work.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Examples of other Pixel Narratives creative work.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.title}
              className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start"
            >
              <div className="aspect-video overflow-hidden rounded-[24px] border border-white/8 bg-black">
                <video
                  className="block h-full w-full"
                  controls
                  playsInline
                  preload="metadata"
                  poster={study.posterSrc}
                  src={study.videoSrc}
                >
                  <img
                    src={study.posterSrc}
                    alt={study.posterAlt}
                    width={1920}
                    height={1080}
                    className="block h-full w-full object-cover"
                  />
                </video>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {study.eyebrow}
                </p>
                <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                  {study.title}
                </h3>
                <div className="mt-8 space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Problem
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                      {study.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Solution
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Result
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                      {study.result}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Deliverables
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                      {study.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#attention-pulse-brief"
                      className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                    >
                      Start an Attention Pulse
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCampaignSection() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            {FEATURED_CAMPAIGN.eyebrow}
          </p>
          <h2 className="mt-4 text-5xl leading-none md:text-7xl">
            {FEATURED_CAMPAIGN.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {FEATURED_CAMPAIGN.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {FEATURED_CAMPAIGN.commercials.map((commercial) => (
            <div key={commercial.title}>
              <div className="aspect-video overflow-hidden rounded-[24px] border border-white/8 bg-black">
                <video
                  className="block h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  src={commercial.videoSrc}
                />
              </div>
              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                {commercial.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_CAMPAIGN.details.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-base text-[var(--foreground)] md:text-lg">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Campaign Targets
              </p>
              <ul className="mt-3 space-y-2 text-base text-[var(--foreground)] md:text-lg">
                {FEATURED_CAMPAIGN.targets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Actual Results
              </p>
              <p className="mt-3 text-base text-[var(--foreground)] md:text-lg">
                {FEATURED_CAMPAIGN.actualResults}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                {FEATURED_CAMPAIGN.resultsNote}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="#attention-pulse-brief"
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
            >
              Start an Attention Pulse
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

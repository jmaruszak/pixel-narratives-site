import { CASE_STUDIES, FEATURED_CAMPAIGN } from "../../lib/siteContent";

export default function CaseStudiesSection() {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Case Studies
          </p>
          <h2 className="mt-4 text-5xl leading-none md:text-7xl">
            Selected
            <br />
            work.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Cinematic campaign work. These pieces are marketing examples, not
            automation case studies.
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
                      href="/contact?need=marketing"
                      className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                    >
                      Discuss a Campaign
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

        <div className="mt-14 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div className="aspect-video overflow-hidden rounded-[24px] border border-white/8 bg-black">
            <video
              className="block h-full w-full"
              controls
              playsInline
              preload="metadata"
              poster={FEATURED_CAMPAIGN.posterSrc}
              src={FEATURED_CAMPAIGN.videoSrc}
            >
              <img
                src={FEATURED_CAMPAIGN.posterSrc}
                alt={FEATURED_CAMPAIGN.posterAlt}
                width={1920}
                height={1080}
                className="block h-full w-full object-cover"
              />
            </video>
          </div>

          <div className="flex flex-col justify-between rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                {FEATURED_CAMPAIGN.client}
              </p>
              <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                {FEATURED_CAMPAIGN.title}
              </h3>
            </div>
            <div className="mt-10 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Problem
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {FEATURED_CAMPAIGN.problem}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Solution
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {FEATURED_CAMPAIGN.solution}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Result
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {FEATURED_CAMPAIGN.result}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Deliverables
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                  {FEATURED_CAMPAIGN.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <a
                  href="/contact?need=marketing"
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                >
                  Discuss a Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

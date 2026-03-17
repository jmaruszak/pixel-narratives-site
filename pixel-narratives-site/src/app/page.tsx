import Nav from "../components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="relative min-h-[90vh] overflow-hidden">
  <img
    src="/images/hero-cinematic.jpg"
    alt="Explorers overlooking a sea of clouds at sunrise"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

  <div className="relative mx-auto flex min-h-[90vh] w-full max-w-7xl items-center px-6 py-32 md:px-10">
    <div className="max-w-3xl">
    <h1 className="leading-none text-white font-semibold">
        <span className="block text-6xl md:text-8xl">
          Narrative Intelligence
        </span>
        <span className="block text-3xl text-white/80 md:text-4xl">
          for Brands
        </span>
      </h1>

      <div className="mt-8 space-y-2 text-lg text-white/70 md:text-xl">
        <p>Strategy-first storytelling.</p>
        <p>AI-native production.</p>
      </div>

      <div className="mt-10">
        <a
          href="https://calendly.com/pixelnarratives"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
        >
          Book a Call
        </a>
      </div>
    </div>
  </div>
</section>

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
              <p>Generic messaging. No narrative spine.</p>
              <p>
                You don’t need more content.
                <br />
                You need a concept.
              </p>
            </div>
          </div>
        </div>
      </section>

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

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 transition hover:border-white/20 hover:bg-white/[0.04]">
              <h3 className="text-3xl leading-none md:text-4xl">
                Narrative Intelligence
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                We build around the story, not the slogan. Every campaign needs a
                setup, a turn, and a payoff.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 transition hover:border-white/20 hover:bg-white/[0.04]">
              <h3 className="text-3xl leading-none md:text-4xl">
                Entertainment-Driven Advertising
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                If it feels like an ad, it’s already losing. The work has to earn
                attention before it asks for anything.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 transition hover:border-white/20 hover:bg-white/[0.04]">
              <h3 className="text-3xl leading-none md:text-4xl">
                AI-Native Production
              </h3>
              <p className="mt-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Cinematic, bold, and built to feel bigger than the budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Selected Campaigns
            </p>

            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Studio Launch
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              A cinematic introduction to Pixel Narratives and the kind of work the
              studio exists to create.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start">
          <div className="overflow-hidden rounded-[24px] border border-white/8 bg-black">
  <video
    className="block w-full"
    controls
    playsInline
    preload="metadata"
    poster="/images/studio-launch-still.jpg"
    src="/videos/pixel-narratives-launch.mp4"
  >
    <img
      src="/images/studio-launch-still.jpg"
      alt="Pixel Narratives Studio Launch still"
      className="block w-full object-cover"
    />
  </video>
</div>
<div className="flex flex-col justify-between rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Studio Launch
                </p>

                <h3 className="mt-4 text-3xl leading-none md:text-4xl">
                  Pixel Narratives Launch Commercial
                </h3>
              </div>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                    <li>Studio launch commercial</li>
                    <li>Creative direction</li>
                    <li>Concept development</li>
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="/projects"
                    className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                  >
                    View Campaign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-28 text-center md:px-10">
          <h2 className="text-5xl leading-none md:text-7xl">
            Ready to build something
            <br />
            people actually watch?
          </h2>

          <div className="mt-12">
            <a
              href="https://calendly.com/pixelnarratives"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} Pixel Narratives</p>

          <a
            href="mailto:hello@pixelnarratives.studio"
            className="transition hover:text-[var(--foreground)]"
          >
            hello@pixelnarratives.studio
          </a>
        </div>
      </footer>
    </main>
  );
}
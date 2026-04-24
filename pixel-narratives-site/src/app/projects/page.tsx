import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Selected Work
          </p>

          <h1 className="mt-4 text-5xl leading-none sm:text-6xl md:text-8xl">
            Projects
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            A selection of cinematic, concept-driven work built to make brands
            more watchable, memorable, and distinct.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {/* Project 1 */}
          <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start">
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

            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Studio Launch
              </p>

              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Pixel Narratives Launch Commercial
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    Overview
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    Built as the first flagship campaign for the studio, this
                    piece introduces the tone, ambition, and cinematic standard
                    behind Pixel Narratives.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                    <li>Launch commercial</li>
                    <li>Creative direction</li>
                    <li>Concept development</li>
                  </ul>
                </div>

                <div>
                  <a
                    href="mailto:hello@pixelnarratives.studio"
                    className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                  >
                    Ask About a Campaign
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start">
            <div className="overflow-hidden rounded-[24px] border border-white/8 bg-black">
              <video
                className="block w-full"
                controls
                playsInline
                preload="metadata"
                poster="/images/cinder-wealth-still.jpg"
                src="/videos/cinder-wealth-ad.mp4"
              >
                <img
                  src="/images/cinder-wealth-still.jpg"
                  alt="Cinder Wealth brand spot still"
                  className="block w-full object-cover"
                />
              </video>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Brand Campaign
              </p>

              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Cinder Wealth Brand Spot
              </h2>

              <div className="mt-8 space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    Overview
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    A polished brand-led concept demonstrating how cinematic
                    storytelling can elevate financial services beyond generic
                    category advertising.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    Deliverables
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                    <li>Brand commercial</li>
                    <li>Concept development</li>
                    <li>Visual direction</li>
                  </ul>
                </div>

                <div>
                  <a
                    href="mailto:hello@pixelnarratives.studio"
                    className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
                  >
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
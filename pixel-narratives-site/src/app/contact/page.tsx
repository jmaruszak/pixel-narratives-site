import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="mx-auto w-full max-w-4xl px-6 py-24 md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          Contact
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
  Let’s Build Something
</h1>

<p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
  Campaigns that capture attention. Systems that work.
</p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          Whether you’re looking to launch a campaign or implement AI across your
          business, we’ll help you take the next step.
        </p>

        <div className="mt-12 grid gap-6">
          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Start Here
            </p>

            <h2 className="mt-4 text-2xl leading-none md:text-3xl">
              Book a Zoom call
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Schedule a Zoom call to talk through your goals, where you are
              today, and what the right next step looks like.
            </p>

            <div className="mt-6">
              <a
                href="https://calendly.com/pixelnarratives"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Book a Zoom Call
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Creative / Ads
            </p>

            <h2 className="mt-4 text-2xl leading-none md:text-3xl">
              Request a concept
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              Tell us what you’re promoting, who it’s for, where the ad will run,
              and what you want people to remember. If you have a website, offer
              page, or existing creative, include that too.
            </p>

            <div className="mt-6">
              <a
                href="mailto:hello@pixelnarratives.studio?subject=Request%20a%20Concept"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Email the Brief
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Prefer email?
            </p>

            <a
              href="mailto:hello@pixelnarratives.studio"
              className="mt-4 inline-block text-xl text-[var(--foreground)] transition hover:text-white"
            >
              hello@pixelnarratives.studio
            </a>

            <p className="mt-4 text-sm text-[var(--muted)]">
              We reply within 1–2 business days.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Prefer phone?
            </p>

            <a
              href="tel:+19045247269"
              className="mt-4 inline-block text-xl text-[var(--foreground)] transition hover:text-white"
            >
              904-524-7269
            </a>

            <p className="mt-4 text-sm text-[var(--muted)]">
              For direct questions about a campaign, AI workflow, or next step.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
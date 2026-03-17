import Nav from "../../components/Nav";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="mx-auto w-full max-w-4xl px-6 py-24 md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          Contact
        </p>

        <h1 className="mt-4 text-6xl leading-none md:text-8xl">
          Let’s make
          <br />
          something worth sharing.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          For campaign inquiries, partnerships, or creative conversations, book
          a call or send us a note.
        </p>

        <div className="mt-12 rounded-[32px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
          <div className="flex flex-col gap-6">
            <a
              href="https://calendly.com/pixelnarratives"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Call
            </a>

            <div>
              <p className="text-sm text-[var(--muted)]">or email</p>
              <a
                href="mailto:hello@pixelnarratives.studio"
                className="mt-2 inline-block text-lg text-[var(--foreground)] transition hover:text-white"
              >
                hello@pixelnarratives.studio
              </a>
            </div>

            <p className="text-sm text-[var(--muted)]">
              We reply within 1–2 business days.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
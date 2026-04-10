import Nav from "../../components/Nav";

export default function IntelligenceLayerPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Intelligence Layer
            </p>

            <h1 className="mt-4 text-3xl leading-none sm:text-4xl md:text-5xl">
  From AI experimentation to operational advantage.
</h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Most teams are already experimenting with AI. Very few businesses
              have turned that activity into policy, process, workflow, and
              measurable business value. Intelligence Layer helps close that gap.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/pixelnarratives"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Book a Discovery Call
              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/8 bg-black">
            <img
              src="/images/int-cinematic.jpg"
              alt="Cinematic Intelligence Layer hero image"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div className="overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              The Gap
            </p>

            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              Your team is using AI. But your business probably is not.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>
                ChatGPT logins, scattered prompts, and one-off experiments do
                not create business value on their own.
              </p>
              <p>
                Without policy, tool selection, access control, workflow design,
                implementation support, and team adoption, AI stays stuck in the
                “interesting” category instead of becoming a real operating
                advantage.
              </p>
              <p>
                Intelligence Layer is built to help owners move from curiosity
                to execution.
              </p>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Best First Step
            </p>

            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              Intelligence Layer Blueprint
            </h2>

            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              $950
            </p>

            <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              A focused strategic engagement designed to identify where AI fits
              in your business, what tools make sense, where access and cost
              should be controlled, and what should happen next.
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Includes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>AI policy and governance guidance</li>
                <li>Tool stack recommendations</li>
                <li>Team access strategy</li>
                <li>Core use case identification</li>
                <li>Prompt library foundation</li>
                <li>Automation opportunity mapping</li>
                <li>30–60 day roadmap</li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="https://calendly.com/pixelnarratives"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Start with the Blueprint
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-16">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-[24px] border border-white/8 bg-black p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Ongoing Support
              </p>

              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Growth Tier
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $2,000/month
              </p>

              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
  Build and stabilize your AI layer over a structured 12-month engagement.
  This is where the real work happens: implementing core systems, refining
  them, and making sure your team actually uses them.
</p>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                What’s Included
              </p>

              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Build 2–4 core AI workflows inside your business</li>
                <li>Tool setup and system integration</li>
                <li>Ongoing refinement and troubleshooting</li>
                <li>Monthly working sessions</li>
                <li>Ongoing support between sessions</li>
                <li>Team training and onboarding</li>
              </ul>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  What to Expect
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                  <li>Months 1–2: Build core systems</li>
                  <li>Months 3–4: Improve and stabilize</li>
                  <li>Months 5–6: Drive adoption across your team</li>
                  <li>Months 7–12: Maintain, optimize, and deepen adoption</li>
                </ul>
              </div>

              
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-[24px] border border-white/8 bg-black p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Ongoing Support
              </p>

              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Maintenance Tier
              </h2>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Ongoing Support at 50% of Growth Tier
              </p>

              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Keep your systems running smoothly without overpaying for build
                work. Once your core systems are in place, we transition you to
                a lighter support model focused on stability and small
                improvements.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                What’s Included
              </p>

              <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Ongoing system maintenance and adjustments</li>
                <li>Quarterly optimization reviews</li>
                <li>Ongoing support as needed</li>
                <li>Minor workflow improvements as needed</li>
              </ul>

              <p className="mt-8 text-base leading-relaxed text-[var(--muted)]">
                Designed for long-term support without unnecessary cost.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-[24px] border border-white/8 bg-black p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Custom Solutions
              </p>

              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Tailored AI systems and advanced workflow builds
              </h2>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
                For businesses with more specific needs, we scope and build
                tailored AI systems, internal tools, and advanced workflow
                automations designed around the way your business actually
                operates.
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Starting at
                </p>
                <p className="mt-2 text-2xl leading-none">$15,000</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-[24px] border border-white/8 bg-black p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Who This Is For
              </p>

              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Practical implementation for growing teams
              </h2>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <ul className="space-y-3 text-sm text-[var(--foreground)] md:text-base">
                <li>Owner led businesses curious about AI but not sure where to start</li>
                <li>Teams already experimenting with AI but lacking structure</li>
                <li>Owners who want practical implementation</li>
                <li>
                  Companies looking to save time, reduce friction, and move faster
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            How We Work
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-5xl">
            Stop experimenting with AI. Start building it into the business.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            The goal is not more tools for the sake of it. The goal is smarter
            systems, better workflows, stronger team adoption, and a clearer
            return on time and spend.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/pixelnarratives"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Discovery Call
            </a>

            <a
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
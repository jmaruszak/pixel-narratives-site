import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import IntelligenceLayerProcessFlow from "../../components/IntelligenceLayerProcessFlow";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Intelligence Layer | Pixel Narratives",
  description:
    "Move from AI experimentation to operational advantage: AI implementation for businesses, workflow automation, operational AI consulting, and the Intelligence Layer Blueprint.",
  path: "/intelligence-layer",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Intelligence Layer cinematic visual for Pixel Narratives",
});

const IMPLEMENTATION_PROJECTS = [
  "CRM automation",
  "Website redesigns",
  "AI workflow systems",
  "Lead routing",
  "Internal knowledge systems",
  "AI visibility optimization",
  "Custom GPTs",
  "Reporting dashboards",
] as const;

export default function IntelligenceLayerPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/int-cinematic.jpg"
        imageAlt="Cinematic Intelligence Layer hero image"
        title="Intelligence Layer"
        subtitle="From AI experimentation to operational advantage."
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 space-y-5 text-lg leading-relaxed text-white/70 md:text-xl">
          <p>
            Most teams are already experimenting with AI. Very few businesses
            have turned that activity into policy, process, workflow, and
            measurable business value. Intelligence Layer helps close that gap.
          </p>
          <p className="text-base md:text-lg">
            Think of it as a practical Fractional AI Officer for growing
            businesses: part strategy, part implementation, part
            accountability.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/ai-readiness-assessment"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Take the AI Readiness Assessment
          </a>
          <a
            href="https://calendly.com/pixelnarratives"
            target="_blank"
            rel="noreferrer"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            Book a Discovery Call
          </a>
        </div>
      </CinematicPageHero>

      <IntelligenceLayerProcessFlow />

      {/* Pricing */}
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Offerings
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              A clear path from blueprint to implementation
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-start">
            {/* Intelligence Layer Blueprint */}
            <div className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Best First Step
              </p>

              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Intelligence Layer Blueprint
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                $950
              </p>

              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                A focused strategic engagement designed to identify where AI fits
                in your business, what tools make sense, where access and cost
                should be controlled, and what should happen next.
              </p>

              <div className="mt-8 flex-1">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  Includes
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                  <li>Workflow and bottleneck review</li>
                  <li>AI and automation opportunity mapping</li>
                  <li>Tool stack recommendations</li>
                  <li>Team access and adoption guidance</li>
                  <li>Immediate quick-win recommendations</li>
                  <li>Scoped implementation project roadmap</li>
                  <li>30–60 day priority plan</li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/pixelnarratives"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Start with the Blueprint
                </a>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  Not sure where you stand?{" "}
                  <a
                    href="/ai-readiness-assessment"
                    className="text-[var(--foreground)] transition hover:opacity-80"
                  >
                    Take the AI Readiness Assessment.
                  </a>
                </p>
              </div>
            </div>

            {/* Guided Implementation */}
            <div className="flex flex-col rounded-[24px] border border-white/12 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Ongoing Support
              </p>

              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Guided Implementation
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $1,200/month · 3-month minimum
              </p>

              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                Deliver outcomes through implementation over a structured engagement.
                This is where the real work happens: implementing core systems over time, refining
                them, and making sure your team is trained to use them.
              </p>

              <div className="mt-8 flex-1">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  What&apos;s Included
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                  <li>Build core AI workflows inside your business</li>
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
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Every engagement is different, but most follow a progression like this:
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                    <li>Phase 1: Build core systems</li>
                    <li>Phase 2: Improve and stabilize performance</li>
                    <li>Phase 3: Drive adoption across your team</li>
                    <li>Phase 4: Expand into new projects and opportunities</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/pixelnarratives"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>

            {/* Fractional Chief AI Officer */}
            <div className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Operational Scale
              </p>

              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Fractional Chief AI Officer
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $5,000/month
              </p>

              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                For leadership teams ready to treat AI as an operational priority, not
                a side experiment. We work at the executive level to align strategy,
                systems, and implementation across the organization.
              </p>

              <div className="mt-8 flex-1">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  What&apos;s Included
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                  <li>Executive AI strategy</li>
                  <li>Operational redesign</li>
                  <li>Implementation oversight</li>
                  <li>Leadership advisory</li>
                  <li>Quarterly initiatives</li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="https://calendly.com/pixelnarratives"
                  target="_blank"
                  rel="noreferrer"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Maintenance Support
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Ongoing support available for existing clients, pricing adjusted based on scope.
              Keep your systems running smoothly without overpaying for build work. Once your
              core systems are in place, we transition you to a lighter support model focused on
              stability and small improvements.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-[var(--foreground)] sm:grid-cols-2 md:text-base">
              <li>Ongoing system maintenance and adjustments</li>
              <li>Quarterly optimization reviews</li>
              <li>Ongoing support as needed</li>
              <li>Minor workflow improvements as needed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation Projects */}
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            Custom Solutions
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-4xl">
            Tailored AI systems and advanced workflow builds
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            For businesses with more specific needs, we scope and build
            tailored AI systems, internal tools, and advanced workflow
            automations designed around the way your business actually
            operates.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IMPLEMENTATION_PROJECTS.map((project) => (
              <div
                key={project}
                className="rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-[var(--foreground)] md:text-base"
              >
                {project}
              </div>
            ))}
          </div>

          <p className="mt-8 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Quoted based on scope.
          </p>
        </div>
      </section>

      {/* The Gap */}
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              The Gap
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-4xl">
              Your team is using AI. But your business probably is not.
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
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
        </div>
      </section>

      {/* Case Study */}
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <div className="rounded-[24px] border border-white/8 bg-black p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Implementation Example
              </p>

              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                From fragmented systems to a clear roadmap
              </h2>

              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                A professional services firm came to us with good tools, scattered
                workflows, and no shared picture of what to fix first. Leads moved
                through manual handoffs. Content lived in too many places. AI
                experiments were happening, but nothing connected to how the
                business actually ran.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                What We Did
              </p>

              <ul className="mt-4 space-y-3 text-sm text-[var(--foreground)] md:text-base">
                <li>Mapped workflows, tools, and bottlenecks across the business</li>
                <li>Identified where time, follow-up, and handoffs were leaking</li>
                <li>Delivered a scoped implementation roadmap with clear priorities</li>
                <li>Defined practical next steps for systems, automation, and team adoption</li>
              </ul>

              <p className="mt-8 text-base leading-relaxed text-[var(--muted)]">
                The outcome was not a pile of AI recommendations. It was a clearer
                operating picture, a prioritized plan, and a practical path from
                experimentation to implementation.
              </p>

              <div className="mt-8">
                <a
                  href="/sample-intelligence-layer-blueprint"
                  className="text-sm text-[var(--foreground)] transition hover:opacity-80"
                >
                  See what a blueprint looks like →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Blueprint */}
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <h2 className="max-w-3xl text-3xl leading-none md:text-4xl">
              See a Sample Blueprint
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>
                A lot of businesses do not need more random AI ideas. They need
                someone to look at how the business actually runs and find where
                time, money, attention, and follow-up are leaking.
              </p>
              <p>
                This sample shows the structure and thinking behind an
                Intelligence Layer Blueprint: business analysis, quick wins,
                workflow improvements, and scoped project opportunities.
              </p>
              <p>
                Actual client blueprints go deeper. They include AI tools,
                services, process changes, automation ideas, and implementation
                recommendations specific to your business.
              </p>
              <p className="text-[var(--foreground)]">
                In many cases, the best starting point is not a flashy AI tool.
                It is organizing the data, workflows, and handoffs that AI will
                eventually depend on.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/sample-intelligence-layer-blueprint"
                className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                View Sample Blueprint
              </a>
              <a
                href="/ai-readiness-assessment"
                className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Take the AI Readiness Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
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
                <li>Enterprises already experimenting with AI but lacking structure</li>
                <li>CEOs who want practical implementation</li>
                <li>
                  Companies looking to save time, reduce friction, and move faster
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.intelligenceLayer} />
      <Footer />
    </main>
  );
}

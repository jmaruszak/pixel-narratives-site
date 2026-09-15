import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import ImplementationProcessFlow from "../../components/ImplementationProcessFlow";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import PricingNote from "../../components/PricingNote";
import OutcomeStack from "../../components/editorial/OutcomeStack";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "AI Implementation & Business Automation | Pixel Narratives",
  description:
    "Practical business systems using AI, automation, CRM, dashboards, and internal tools. Pixel Narratives implements a better way to work, not a promise to automate everything.",
  path: "/automation",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Implementation cinematic visual for Pixel Narratives",
});

const PROBLEMS = [
  "Employees spending hours on repetitive work",
  "Slow lead response and inconsistent follow-up",
  "Disconnected tools that do not share information",
  "Data spread across spreadsheets and inboxes",
  "Manual scheduling and duplicate data entry",
  "Poor reporting and administrative bottlenecks",
] as const;

const EXAMPLES = [
  {
    title: "Lead follow-up",
    body: "When a lead comes in, the next step happens. No more waiting until someone remembers to send the email.",
  },
  {
    title: "Dashboards",
    body: "See what is happening in the business without hunting through spreadsheets and inboxes.",
  },
  {
    title: "Client portals",
    body: "Give clients a place to see status, files, and next steps instead of another thread that gets lost.",
  },
  {
    title: "Internal tools",
    body: "Build the small systems your team actually needs, instead of forcing the work into software that does not fit.",
  },
  {
    title: "AI assistance",
    body: "Use AI to help people do the work faster and with fewer mistakes. Not to replace judgment.",
  },
  {
    title: "Workflow automation",
    body: "When a step is repetitive and rules-based, we automate it. When it is not, we find a better way to do it.",
  },
  {
    title: "CRM + integrations",
    body: "Connect the tools you already use so information does not get stuck in one place.",
  },
] as const;

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/automation",
            name: "Implementation",
            description:
              "Practical business systems using AI, automation, CRM, dashboards, internal tools, and integrations. Sometimes we automate the work. Sometimes we give the team a better way to do it.",
            serviceType: "AI Implementation and Business Automation",
          }),
          buildWebPage({
            path: "/automation",
            name: "AI Implementation & Business Automation | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/automation#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Implementation", path: "/automation" },
          ]),
        ]}
      />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/int-cinematic.jpg"
        imageAlt="Cinematic implementation hero image"
        title="This Should Be Easier."
        subtitle="Implementation"
      >
        <p className="hero-entrance hero-entrance-delay-1 mt-4 text-sm uppercase tracking-[0.18em] text-white/55">
          AI + Automation + Business Systems
        </p>
        <div className="hero-entrance hero-entrance-delay-1 mt-8 space-y-5 text-lg leading-relaxed text-white/70 md:text-xl">
          <p>
            We build better business systems using AI, automation, and modern
            software. Sometimes that means automating the work. Sometimes it
            means assisting the people who do it. Sometimes it means building
            or connecting a better tool.
          </p>
          <p className="text-white/90">
            The goal isn&apos;t automation. The goal is a better way to work.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/contact?need=automation"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Discuss a Project
          </a>
          <a
            href="/contact"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            Start a Conversation
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The problem
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              Work piles up in the wrong places.
            </h2>
          </div>
          <ul className="space-y-3 text-base text-[var(--foreground)] md:text-lg">
            {PROBLEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="pn-kicker">What this looks like</p>
            <h2 className="mt-5 max-w-3xl text-3xl leading-none md:text-5xl">
              Concrete systems. Plain English.
            </h2>
            <p className="pn-lede mt-6">
              Implementation is the service. Automation is one of the tools.
              These are the kinds of better ways we build.
            </p>
          </div>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {EXAMPLES.map((example) => (
              <article
                key={example.title}
                className="grid gap-3 py-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-baseline md:gap-10 md:py-10"
              >
                <h3 className="text-2xl leading-none md:text-4xl">
                  {example.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {example.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OutcomeStack
        items={[
          "Save time.",
          "Faster follow-up.",
          "Leads not lost.",
          "Better tools.",
          "Organized information.",
          "Connected systems.",
        ]}
      />

      <ImplementationProcessFlow />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              How we work
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              A clear path from assessment to implementation
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:items-start">
            <div className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Optional first step
              </p>
              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Implementation Assessment
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $1,250
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                A focused look at how work moves through the business:
                bottlenecks, tools, follow-up, and what should happen next.
                From there, the right path may be Guided Implementation, a
                custom project, or ongoing AI leadership.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Workflow and bottleneck review</li>
                <li>Automation opportunity mapping</li>
                <li>Tool recommendations</li>
                <li>Quick-win list</li>
                <li>Scoped implementation roadmap</li>
                <li>30 to 60 day priority plan</li>
              </ul>
              <div className="mt-8">
                <a
                  href="/contact?need=automation"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Discuss a Project
                </a>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  Prefer a self-serve starting point?{" "}
                  <a
                    href="/ai-readiness-assessment"
                    className="text-[var(--foreground)] transition hover:opacity-80"
                  >
                    Take the AI Readiness Assessment.
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col rounded-[24px] border border-white/12 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                We help you do it
              </p>
              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Guided Implementation
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $1,500/month · 3-month minimum
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                For business owners and internal leads who want expert
                guidance while implementing AI themselves. Two working sessions
                each month help you prioritize opportunities, choose tools,
                build workflows, troubleshoot implementation and keep progress
                moving.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Two virtual working sessions per month</li>
                <li>Ongoing implementation guidance</li>
                <li>Prioritization, tool choice, and troubleshooting</li>
                <li>You implement inside the business, with us helping you succeed</li>
                <li>3-month minimum</li>
              </ul>
              <div className="mt-8">
                <a
                  href="/contact?need=automation"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Discuss a Project
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                We build it for you
              </p>
              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Implementation Projects
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $5,000 · Custom scoped
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                Pixel Narratives builds the better way to do the work. That can
                mean automation, an integration, a dashboard, an internal tool,
                or connecting systems you already have. Scope follows the
                complexity of the work.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Workflow automation and CRM implementation</li>
                <li>Integrations between tools you already use</li>
                <li>Scheduling, reporting, and internal tools</li>
                <li>Custom AI systems where they fit the work</li>
                <li>Scoped after we understand the process</li>
              </ul>
              <div className="mt-8">
                <a
                  href="/contact?need=automation"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Discuss a Project
                </a>
              </div>
            </div>

            <div className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                We help lead it
              </p>
              <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                Ongoing AI leadership
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Fractional CAIO
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $6,250/month
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                Ongoing AI leadership for companies that need strategy,
                prioritization, and implementation oversight without a
                full-time executive hire.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>AI strategy and roadmap leadership</li>
                <li>Prioritization and opportunity identification</li>
                <li>Implementation oversight</li>
                <li>Vendor and tool decisions</li>
                <li>Executive guidance on organizational adoption</li>
              </ul>
              <div className="mt-8">
                <a
                  href="/contact?need=automation"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Discuss a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <h2 className="max-w-3xl text-3xl leading-none md:text-4xl">
              Training helps the team use what we build
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              We build better ways to work.{" "}
              <a
                href="/training"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Training
              </a>{" "}
              teaches the team to use them. Same problem, different part of the
              work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <h2 className="max-w-3xl text-3xl leading-none md:text-4xl">
              See a sample Implementation Assessment
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              This sample shows the structure: business snapshot, quick wins,
              workflow improvements, and scoped project opportunities. Actual
              client work goes deeper and is specific to how your business runs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/sample-implementation-assessment"
                className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                View the sample
              </a>
            </div>
          </div>
        </div>
      </section>

      <PricingNote />
      <PageBottomCta {...DESTINATION_CTAS.automation} />
      <Footer />
    </main>
  );
}

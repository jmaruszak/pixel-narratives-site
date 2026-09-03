import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import IntelligenceLayerProcessFlow from "../../components/IntelligenceLayerProcessFlow";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Automation + Implementation | Pixel Narratives",
  description:
    "Turn repetitive work into better systems. Pixel Narratives builds workflow automation, CRM, scheduling, reporting, and internal tools that save time and reduce errors.",
  path: "/automation",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Automation and implementation cinematic visual for Pixel Narratives",
});

const PROBLEMS = [
  "Employees spending hours on repetitive work",
  "Slow lead response and inconsistent follow-up",
  "Disconnected tools that do not share information",
  "Data spread across spreadsheets and inboxes",
  "Manual scheduling and duplicate data entry",
  "Poor reporting and administrative bottlenecks",
] as const;

const OUTCOMES = [
  "Save employee hours",
  "Reduce manual work",
  "Improve lead response time",
  "Increase productivity",
  "Improve consistency and reduce errors",
  "Make information easier to access",
] as const;

const IMPLEMENTATION_PROJECTS = [
  "Workflow automation",
  "CRM implementation",
  "Lead routing and follow-up",
  "Scheduling systems",
  "Dashboards and reporting",
  "Client portals",
  "Internal tools",
  "Software integrations",
] as const;

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/automation",
            name: "Automation + Implementation",
            description:
              "AI implementation and business automation: a paid assessment, Guided Implementation for owners implementing with expert coaching, custom implementation projects, and Fractional Chief AI Officer leadership.",
            serviceType: "AI Implementation and Business Automation",
          }),
          buildWebPage({
            path: "/automation",
            name: "Automation + Implementation | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/automation#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Automation + Implementation", path: "/automation" },
          ]),
        ]}
      />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/int-cinematic.jpg"
        imageAlt="Cinematic automation and implementation hero image"
        title="Turn Repetitive Work Into Better Systems"
        subtitle="Automation + Implementation"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 space-y-5 text-lg leading-relaxed text-white/70 md:text-xl">
          <p>
            Pixel Narratives builds practical solutions that reduce manual work,
            improve productivity, and help businesses run better.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/contact?need=automation"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Talk About Automation
          </a>
          <a
            href="/contact"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            Discuss a Project
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
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The outcome
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              Hours back. Fewer errors. Clearer operations.
            </h2>
          </div>
          <ul className="space-y-3 text-base text-[var(--foreground)] md:text-lg">
            {OUTCOMES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <IntelligenceLayerProcessFlow />

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
                $950
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                A focused look at how work moves through the business:
                bottlenecks, tools, follow-up, and what should happen next.
                From there, the right path may be Guided Implementation, a
                custom project, or Fractional CAIO support.
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
                    Take the AI + Automation Assessment.
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
                $1,500/month · 3-month minimum
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
                  Talk About Automation
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
                Custom scoped
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                Pixel Narratives builds the system. Automations, integrations,
                workflows, internal tools, and operational improvements are
                scoped to the complexity of the work.
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
                Fractional Chief AI Officer
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $5,000/month
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
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            What we build
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-4xl">
            Systems around the way the business already operates
          </h2>
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
              <a
                href="/training"
                className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Team training
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.automation} />
      <Footer />
    </main>
  );
}

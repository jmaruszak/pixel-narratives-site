import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import ImplementationProcessFlow from "../../components/ImplementationProcessFlow";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import OutcomeStack from "../../components/editorial/OutcomeStack";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "AI Implementation for Businesses | Pixel Narratives",
  description:
    "Identify where AI can create value, choose the right tools and opportunities, guide adoption, improve workflows, and build custom solutions when they make sense.",
  path: "/implementation",
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
    body: "See what is happening in your business without hunting through spreadsheets and inboxes.",
  },
  {
    title: "Client portals",
    body: "Give clients a place to see status, files, and next steps instead of another thread that gets lost.",
  },
  {
    title: "Internal tools",
    body: "Build the small systems your team needs instead of forcing the work into software that does not fit.",
  },
  {
    title: "AI assistance",
    body: "Use AI to help your people work faster and with fewer mistakes. Not to replace judgment.",
  },
  {
    title: "Workflow automation",
    body: "When a step is repetitive and rules-based, we automate it. When it isn't, we look at a better process.",
  },
  {
    title: "CRM + integrations",
    body: "Connect the tools you already use so information does not get stuck in one place.",
  },
] as const;

export default function ImplementationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/implementation",
            name: "Implementation",
            description:
              "Practical AI implementation, adoption guidance, workflow improvement, tool selection, and custom solutions when they make sense for your business.",
            serviceType: "AI Implementation and Adoption",
          }),
          buildWebPage({
            path: "/implementation",
            name: "AI Implementation for Businesses | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/implementation#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Implementation", path: "/implementation" },
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
          AI Adoption + Practical Implementation
        </p>
        <p className="hero-entrance hero-entrance-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          We help you identify where AI makes sense, decide what is worth
          pursuing, and put it to work. That can include existing tools, a
          better process, something custom, or ongoing guidance.
        </p>
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
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              How we work
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-4xl">
              An engagement may start as Explore, a scoped Build, or an
              ongoing Partner relationship.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              See{" "}
              <a
                href="/work-with-us"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Work With Us
              </a>{" "}
              for how we work together.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 md:px-10">
          <div>
            <h2 className="text-xl leading-snug">
              Team Training
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              Your team can learn ChatGPT, Claude, Microsoft Copilot, and
              other useful tools without a custom implementation project.{" "}
              <a
                href="/training"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Explore standalone team training
              </a>
              .
            </p>
          </div>
          <div>
            <h2 className="text-xl leading-snug">
              See a sample Implementation Assessment
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
              The sample shows the structure. Actual client work is specific
              to how your business runs.{" "}
              <a
                href="/sample-implementation-assessment"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                View the sample
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.automation} />
      <Footer />
    </main>
  );
}

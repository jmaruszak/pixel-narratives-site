import CinematicPageHero from "../../components/CinematicPageHero";
import { CorporateWorkshopInquiryForm } from "../../components/ContactForms";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { CALENDLY_URL } from "../../lib/businessLocation";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Corporate AI Workshops | Pixel Narratives",
  description:
    "Corporate AI Workshops starting at $15,000. Private, customized training for leadership, departments, and employees from Pixel Narratives.",
  path: "/training",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Team training cinematic visual for Pixel Narratives",
});

const WORK_EXAMPLES = [
  "Research",
  "Writing",
  "Analysis",
  "Meeting preparation",
  "Follow-up",
  "Internal communication",
  "Sales preparation",
  "Proposal development",
  "Customer communication",
  "Process documentation",
  "Data review",
  "Recruiting workflows",
  "Management reporting",
  "Brainstorming",
  "Knowledge retrieval",
] as const;

const TEAM_SESSIONS = [
  {
    title: "Leadership + Management",
    body: "Where AI can realistically help the company. Research and decision preparation. Working with large amounts of information. Meeting preparation and follow-up. Internal communication. Delegation and workflow design. Finding repeatable work that may be improved. Setting useful boundaries for AI use.",
  },
  {
    title: "Sales",
    body: "Account and prospect research. Meeting and call preparation. Follow-up. Proposal development. Organizing notes. Drafting outreach. Reviewing pipelines and opportunities. Creating useful sales materials.",
  },
  {
    title: "Operations",
    body: "Process documentation and SOPs. Internal knowledge. Summarizing information. Reviewing recurring reports. Drafting internal communication. Finding repetitive administrative work. Turning messy information into usable formats. Spotting work that may be worth automating later.",
  },
  {
    title: "HR + People",
    body: "Job descriptions. Interview preparation. Onboarding materials. Training documentation. Internal communication. Policy research and organization. Employee FAQs. Summarizing appropriate non-sensitive information. Repeatable administrative workflows. Employment decisions stay with people.",
  },
] as const;

const WORKSHOP_STEPS = [
  {
    title: "Foundation",
    body: "A working understanding of modern AI tools, what they can do, where they fall short, and how to use them responsibly.",
  },
  {
    title: "Team sessions",
    body: "Examples built for the departments in the room: leadership, sales, operations, HR, or other participating teams.",
  },
  {
    title: "Working sessions",
    body: "People use AI on realistic tasks and start building ways of working they can repeat after the workshop.",
  },
  {
    title: "Workflow development",
    body: "We identify the strongest use cases that should continue once everyone is back at their desk.",
  },
  {
    title: "Next steps",
    body: "Useful workflows, open questions, and areas that may deserve deeper implementation later.",
  },
] as const;

const FULL_DAY_INCLUDES = [
  "Leadership alignment",
  "AI foundation",
  "Team-specific demonstrations",
  "Hands-on working sessions",
  "Workflow identification",
  "Closing discussion and next steps",
] as const;

const TWO_DAY_ONE = [
  "Leadership",
  "Shared AI foundation",
  "Company-wide context",
  "Initial team sessions",
] as const;

const TWO_DAY_TWO = [
  "Department-specific working sessions",
  "Deeper workflow development",
  "Practical exercises",
  "Implementation opportunities",
  "Next-step planning",
] as const;

const BEFORE_THE_ROOM = [
  "Leadership conversation",
  "Understanding the teams attending",
  "Identifying current tools",
  "Identifying repetitive work",
  "Gathering useful examples",
  "Understanding AI policies or restrictions already in place",
  "Selecting the workflows that will make the workshop useful",
] as const;

const LEAVES_WITH = [
  "A customized workshop",
  "Team-specific examples",
  "Repeatable AI workflows identified during the engagement",
  "Workshop materials",
  "Practical prompt and workflow examples",
  "A workshop summary and working guide",
  "Recommended next steps",
  "A follow-up leadership session",
] as const;

const RESPONSIBLE_USE = [
  "Sensitive company information",
  "Customer information",
  "Choosing appropriate tools",
  "Human review",
  "Accuracy",
  "Internal policies",
  "Useful boundaries",
] as const;

const AUDIENCES = [
  "Leadership teams",
  "Management teams",
  "Sales organizations",
  "Operations teams",
  "HR teams",
  "Professional services firms",
  "Banks and financial organizations",
  "Regional companies",
  "Multi-location businesses",
  "Organizations with multiple departments",
] as const;

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildServicePageSchema({
            path: "/training",
            name: "Corporate AI Workshops",
            description:
              "Corporate AI workshops starting at $15,000. Private, customized training for leadership, departments, and employees. Full-day or two-day engagements, not monthly advisory coaching.",
            serviceType: "Corporate AI Training and Workshops",
          }),
          buildWebPage({
            path: "/training",
            name: "Corporate AI Workshops | Pixel Narratives",
            mainEntity: { "@id": "https://pixelnarratives.studio/training#service" },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Training", path: "/training" },
          ]),
        ]}
      />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/training-hero.png"
        imageAlt="Team workshop with a presenter at a whiteboard"
        title="Help Your Team Get More Done"
        subtitle="Team Training"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-white/70 md:text-xl">
          <p>
            Practical AI training built around the work your team already does.
          </p>
          <p className="text-base md:text-lg">
            We learn how your teams work, identify useful places for AI, and
            teach your team the skills relevant to their role.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="#workshop-inquiry"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Discuss a Workshop
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
          >
            Book a Call
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How we work
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Focus on what
              <br />
              you can repeat.
            </h2>
          </div>
          <div className="flex max-w-xl items-end">
            <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              <p>
                Your business outcomes are the goal, which we achieve by
                focusing on repeatable activities that will lead to your
                desired results.
              </p>
              <p>
                For training, we look at the work people already do again and
                again, then teach the team how to use AI in that work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The work
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Where work repeats, AI can help.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              We learn enough about the organization to make the training
              relevant. The workshop connects AI to actual business activities.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Every company is different. These are the kinds of work we often
              train around.
            </p>
          </div>
          <ul className="mt-12 grid gap-2 text-sm text-[var(--foreground)] sm:grid-cols-2 md:grid-cols-3 md:text-base">
            {WORK_EXAMPLES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Built around your teams
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Different teams use AI differently.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Leadership, sales, operations, HR, and other departments have
              different days. The workshop is shaped around the people in the
              room.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TEAM_SESSIONS.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h3 className="text-2xl leading-none">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Workshops can also be built around finance, marketing, customer
            service, professional services, administrative teams, or project
            management. The engagement is shaped around the company.
          </p>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Corporate AI Workshops
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Full-day or two-day
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Starting at $15,000
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              The primary engagement is a full-day or two-day corporate
              workshop for leadership, departments, and employees. Custom
              curriculum, hands-on exercises, and private delivery. Final scope
              depends on company size, number of teams, format, customization,
              location, and follow-up needs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Preparation
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Before we walk
              <br />
              into the room
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              The work starts before the training day. We talk with leadership,
              learn who will be in the room, and choose the workflows that will
              make the session useful. We gather enough to make the workshop
              specific. A deeper review can be scoped separately if you need it.
            </p>
            <ul className="mt-8 space-y-2 text-base text-[var(--foreground)] md:text-lg">
              {BEFORE_THE_ROOM.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              During the workshop
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Teach, show, then do the work.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              The day mixes practical teaching, demonstrations, discussion, and
              hands-on work.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {WORKSHOP_STEPS.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6 md:p-8"
              >
                <h3 className="text-xl leading-none md:text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 pn-section md:grid-cols-2 md:px-10">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Full-day
            </p>
            <h3 className="mt-4 text-3xl leading-none">
              A focused company or team session
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              A full-day engagement works well when the organization wants one
              concentrated session. The actual agenda is customized. A typical
              day can include:
            </p>
            <ul className="mt-6 space-y-2 text-base text-[var(--foreground)] md:text-lg">
              {FULL_DAY_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] border border-white/8 bg-black p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Two-day
            </p>
            <h3 className="mt-4 text-3xl leading-none">
              More room for departments
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              A two-day engagement creates more room for multiple departments
              and deeper hands-on work. The structure stays flexible. A common
              shape looks like this.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Day one
            </p>
            <ul className="mt-3 space-y-2 text-base text-[var(--foreground)] md:text-lg">
              {TWO_DAY_ONE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Day two
            </p>
            <ul className="mt-3 space-y-2 text-base text-[var(--foreground)] md:text-lg">
              {TWO_DAY_TWO.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              After the session
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              What the company
              <br />
              leaves with
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Depending on scope, the engagement can include:
            </p>
            <ul className="mt-8 space-y-2 text-base text-[var(--foreground)] md:text-lg">
              {LEAVES_WITH.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Responsible use
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Practical judgment
              <br />
              in the room
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              We treat sensitive information, customer data, and internal
              policies as part of the training. People stay responsible for
              what they send, what they share, and what they accept as true.
            </p>
            <ul className="mt-8 space-y-2 text-base text-[var(--foreground)] md:text-lg">
              {RESPONSIBLE_USE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Fit
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Who this
              <br />
              is for
            </h2>
          </div>
          <div className="max-w-xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Corporate AI Workshops help teams become more capable with AI in
              their work.
            </p>
            <ul className="space-y-2 text-base text-[var(--foreground)] md:text-lg">
              {AUDIENCES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="workshop-inquiry"
        className="scroll-mt-24 border-t border-white/8"
      >
        <div className="mx-auto w-full max-w-4xl px-6 pn-section md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Workshop inquiry
          </p>
          <h2 className="mt-4 text-4xl leading-none md:text-6xl">
            Discuss a workshop
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            We&apos;ll start with a short conversation about your team, goals,
            and what would make the workshop useful.
          </p>
          <div className="mt-4 rounded-[28px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <CorporateWorkshopInquiryForm />
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.training} />
      <Footer />
    </main>
  );
}

import CinematicPageHero from "../../components/CinematicPageHero";
import { CorporateWorkshopInquiryForm } from "../../components/ContactForms";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Corporate AI Workshops | Pixel Narratives",
  description:
    "Corporate AI workshops from $7,500 for one department. Larger teams and multi-day engagements are scoped from there. Private training built around the work people already do.",
  path: "/training",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Team training cinematic visual for Pixel Narratives",
});

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
  {
    title: "Marketing",
    body: "Campaign briefs and creative review. Audience and competitor research. Drafting ads, social posts, and content. Turning performance notes into the next version. Organizing messages and assets. Repeatable content workflows the team can keep using.",
  },
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
              "Corporate AI workshops from $7,500 for one department. Full-team and multi-day engagements are scoped for larger groups. Private training built around the work people already do.",
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
        title="Your Team Has ChatGPT. Now What?"
        subtitle="Training"
      >
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="#workshop-inquiry"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Discuss Team Training
          </a>
          <a
            href="/contact?need=training"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-white/20 hover:bg-white/5"
          >
            Start a Conversation
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
              Built around your teams
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              The value of AI is Different for Each Team.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              We shape workshops around the needs of your team.
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
            Workshops can also be built around other roles, we focus on the
            specific needs of your organization.
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
              One team, or the whole company.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Practical training built around the work the team already does.
              People should leave with something they can use the next morning.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-start">
            <article className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <h3 className="text-2xl leading-none">Single Department</h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                $7,500
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                One full day. One team.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Preparation with leadership before the day</li>
                <li>Examples built from the team&apos;s actual work</li>
                <li>A day of practical AI use cases</li>
                <li>Workflows people can use the next morning</li>
              </ul>
              <div className="mt-8">
                <a
                  href="#workshop-inquiry"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Discuss Team Training
                </a>
              </div>
            </article>
            <article className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <h3 className="text-2xl leading-none">Full Team</h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                $15,000 to $20,000
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                About 20 people, across more than one department.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Deeper preparation</li>
                <li>Department-specific examples and sessions</li>
                <li>A follow-up call with leadership</li>
                <li>Price follows headcount, preparation, and customization</li>
              </ul>
              <div className="mt-8">
                <a
                  href="#workshop-inquiry"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Discuss Team Training
                </a>
              </div>
            </article>
            <article className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <h3 className="text-2xl leading-none">Multi-Day Engagement</h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                Starting at $25,000
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                Two or three days for a larger team, several departments, or
                more than one location.
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Hands-on training across the days</li>
                <li>Executive follow-up</li>
                <li>Recommendations for what to implement next</li>
              </ul>
              <div className="mt-8">
                <a
                  href="#workshop-inquiry"
                  className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  Discuss Team Training
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Testimonial
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Practical.
              <br />
              Hands-on.
            </h2>
          </div>
          <blockquote className="max-w-xl">
            <p className="text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
              &ldquo;Pixel Narratives made AI practical for our team. The
              workshop was hands-on, easy to follow, and focused on things we
              could actually use in our work. We left with a much better
              understanding of what these tools can do and, more importantly,
              how to use them.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base text-[var(--foreground)]">Jason Thomas</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                EVP of Sales, BadgePass
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-5xl px-6 pn-section md:px-10">
          <div className="space-y-12">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Before We Walk Into the Room
              </p>
              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Your workshop starts before training day.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                We talk with leadership, learn who&apos;s attending, understand
                the tools and workflows your team uses, and identify where AI
                could be genuinely useful.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                That preparation lets us build the session around{" "}
                <strong className="font-medium text-[var(--foreground)]">
                  your team and your work
                </strong>
                , not a generic presentation about AI.
              </p>
            </div>

            <div className="border-t border-white/8 pt-12">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                During the Workshop
              </p>
              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                Teach it. Show it. Use it.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                We combine practical teaching with demonstrations, discussion,
                and hands-on work using situations your team recognizes.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <h3 className="text-xl leading-none">Build the foundation</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                    Understand what today&apos;s AI tools can do, where they
                    fall short, and how to use them responsibly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl leading-none">Make it relevant</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                    Explore examples and opportunities specific to the teams in
                    the room.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl leading-none">Put it to work</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                    Use AI on realistic tasks and begin developing workflows
                    people can repeat when they&apos;re back at their desks.
                  </p>
                </div>
              </div>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                We also cover the judgment that comes with using AI at work,
                including sensitive information, accuracy, human review, and
                your organization&apos;s existing policies.
              </p>
            </div>

            <div className="border-t border-white/8 pt-12">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                What You Leave With
              </p>
              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                The workshop should keep paying off after we leave.
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Your team leaves with a stronger understanding of AI, practical
                ways to use it in their work, workshop materials they can
                reference later, and clear next steps for opportunities worth
                pursuing.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Depending on the engagement, we can also provide a workshop
                summary, working guide, and follow-up session with leadership.
              </p>
            </div>
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

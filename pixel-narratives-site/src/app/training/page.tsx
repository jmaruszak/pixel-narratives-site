import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { JsonLd, buildServicePageSchema, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "AI Team Training and Workshops | Pixel Narratives",
  description:
    "Standalone AI training for ChatGPT, Claude, Microsoft Copilot, AI video, research, creative work, and productivity.",
  path: "/training",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Team training cinematic visual for Pixel Narratives",
});

const TEAM_SESSIONS = [
  {
    title: "Leadership",
    body: "Research, decision-making, and strategy.",
  },
  {
    title: "Sales",
    body: "Prospect research, proposals, and follow-up.",
  },
  {
    title: "Operations",
    body: "Documentation, reporting, and workflows.",
  },
  {
    title: "HR + People",
    body: "Onboarding, internal communication, and training.",
  },
  {
    title: "Marketing",
    body: "Campaign development, content, and AI video.",
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
            name: "AI Team Training and Workshops",
            description:
              "Standalone, tailored training for ChatGPT, Claude, Microsoft Copilot, AI video, creative work, research, analysis, and everyday productivity.",
            serviceType: "AI Team Training and Workshops",
          }),
          buildWebPage({
            path: "/training",
            name: "AI Team Training and Workshops | Pixel Narratives",
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
        title="Get Your Team Up to Speed on AI."
        subtitle="Training"
      >
        <p className="hero-entrance hero-entrance-delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          We help your people get the skills and confidence to use AI in their
          everyday work.
        </p>
        <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-wrap gap-4">
          <a
            href="/contact?need=training"
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
              Standalone Training
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Built for your team.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              We tailor each workshop to your team&apos;s experience, goals,
              and the AI tools most relevant to their jobs.
            </p>
            <p>
              Training can cover ChatGPT, Claude, Microsoft Copilot, AI
              video, creative production, research, analysis, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-2 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The Outcome
            </p>
            <h2 className="mt-4 text-5xl leading-none md:text-7xl">
              Learn it. Use it. Keep using it.
            </h2>
          </div>
          <div className="flex max-w-xl items-end">
            <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              <p>
                Your team gets hands-on experience using AI to tackle real
                tasks, solve problems, and explore new possibilities. The
                goal is to leave with skills and confidence they can put to
                work immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Training Across Your Organization
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-6xl">
              Different teams. Different opportunities.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              We tailor workshops to the people in the room and how they use
              AI in their day-to-day work.
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

      <PageBottomCta {...DESTINATION_CTAS.training} />
      <Footer />
    </main>
  );
}

import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { DESTINATION_CTAS } from "../../lib/destinationCtas";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "AI Training for Teams | Pixel Narratives",
  description:
    "Help your team use AI in the work they already do. Workshops, role-specific training, playbooks, and practical workplace use from Pixel Narratives.",
  path: "/training",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Team training cinematic visual for Pixel Narratives",
});

const FORMATS = [
  {
    title: "Team workshops",
    body: "Hands-on sessions built around the work your people already do, not generic tool tours.",
  },
  {
    title: "Role-specific training",
    body: "Sales, operations, marketing, and leadership each get examples that match their day.",
  },
  {
    title: "Company playbooks",
    body: "Simple rules for what to use, what not to share, and how to get useful output faster.",
  },
  {
    title: "Ongoing training",
    body: "Follow-up sessions so the first workshop does not fade after a week.",
  },
] as const;

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <CinematicPageHero
        contentScrim
        imageSrc="/images/training-hero.png"
        imageAlt="Team workshop with a presenter at a whiteboard"
        title="Help Your Team Use AI Better"
        subtitle="Training"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-white/70 md:text-xl">
          <p>
            Teams are equipped with the knowledge and best practices on how
            to use AI in the work they do.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10">
          <a
            href="/contact?need=training"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Discuss Team Training
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            What we cover
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-4xl">
            Practical workplace use
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {FORMATS.map((item) => (
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
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/8 bg-black p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                Also included
              </p>
              <ul className="mt-6 space-y-3 text-base text-[var(--foreground)] md:text-lg">
                <li>Departmental and executive sessions</li>
                <li>Prompt development for real tasks</li>
                <li>Safe and effective use of AI tools</li>
                <li>Workflow training tied to implementation work</li>
              </ul>
            </div>
            <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                How it connects
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Training often sits next to automation work. If we build a
                system, we also teach the people who will run it. If you only
                need the workshop, we can start there.
              </p>
              <a
                href="/automation"
                className="mt-6 inline-block text-sm text-[var(--foreground)] transition hover:opacity-80"
              >
                See Automation + Implementation
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta {...DESTINATION_CTAS.training} />
      <Footer />
    </main>
  );
}

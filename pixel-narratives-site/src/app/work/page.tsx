import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import { WORK_PROJECTS } from "../../lib/siteContent";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Work | Pixel Narratives",
  description:
    "Selected implementation work from Pixel Narratives: assessments, custom CRMs, dashboards, and internal tools built around how a business already operates.",
  path: "/work",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Implementation work from Pixel Narratives",
});

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <CinematicPageHero
        imageSrc="/images/work-hero.png"
        imageAlt="Hand selecting a glowing digital checkmark"
        title="Selected Work"
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 max-w-2xl space-y-5 text-lg text-white/70 md:text-xl">
          <p>
            Systems and tools we have built for businesses: assessments, CRMs,
            dashboards, and internal apps.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10">
          <a
            href="/contact?need=automation"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Discuss a Project
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Built projects
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl leading-none md:text-4xl">
            Selected implementation work
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {WORK_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-8"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {project.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl leading-none md:text-3xl">
                  {project.title}
                </h3>
                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Problem
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Solution
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Result
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                      {project.result}
                    </p>
                  </div>
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    className="mt-8 inline-flex items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
                  >
                    {project.hrefLabel ?? "Learn more"}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageBottomCta
        eyebrow="Next Step"
        headline="Have a project in mind?"
        body="Tell us what you are trying to improve. We will talk through the right starting point."
        primaryAction={{ href: "/contact?need=automation", label: "Discuss a Project" }}
      />
      <Footer />
    </main>
  );
}

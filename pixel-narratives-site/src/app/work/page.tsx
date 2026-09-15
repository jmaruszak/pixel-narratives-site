import CinematicPageHero from "../../components/CinematicPageHero";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import PageBottomCta from "../../components/PageBottomCta";
import ProofPiece from "../../components/editorial/ProofPiece";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { WORK_PROJECTS } from "../../lib/siteContent";
import { buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Work | Pixel Narratives",
  description:
    "Selected work from Pixel Narratives: an Implementation Assessment, a social media agency dashboard, and opening video and original music for the Risky Business podcast.",
  path: "/work",
  image: "/images/int-cinematic.jpg",
  imageAlt: "Selected work from Pixel Narratives",
});

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/work",
            name: "Work | Pixel Narratives",
            description:
              "Selected work from Pixel Narratives: an Implementation Assessment, a social media agency dashboard, and opening video and original music for the Risky Business podcast.",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />

      <CinematicPageHero
        imageSrc="/images/work-hero.png"
        imageAlt="Hand selecting a glowing digital checkmark"
        title="We actually make things."
      >
        <div className="hero-entrance hero-entrance-delay-1 mt-8 max-w-2xl space-y-5 text-lg text-white/70 md:text-xl">
          <p>
            Systems, tools, and campaign work we have built: assessments,
            dashboards, and original video and music. The problem, what we
            built, and what changed.
          </p>
        </div>
        <div className="hero-entrance hero-entrance-delay-2 mt-10">
          <a
            href="/contact?need=automation"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            Start a Conversation
          </a>
        </div>
      </CinematicPageHero>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <p className="pn-kicker">Selected work</p>
          <h2 className="pn-display mt-6 max-w-4xl">Problem. Built. Changed.</h2>
          <div className="mt-4">
            {WORK_PROJECTS.map((project) => (
              <ProofPiece
                key={project.slug}
                eyebrow={project.eyebrow}
                title={project.title}
                problem={project.problem}
                built={project.solution}
                changed={project.result}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                href={project.href}
                hrefLabel={project.hrefLabel}
              />
            ))}
          </div>
        </div>
      </section>

      <PageBottomCta
        eyebrow="Next Step"
        headline="What's slowing you down?"
        body="Tell us what you are trying to improve. We will talk through the right starting point."
        primaryAction={{ href: "/contact", label: "Start a Conversation" }}
      />
      <Footer />
    </main>
  );
}

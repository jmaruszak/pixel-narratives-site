import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";

const PAGE_DESCRIPTION =
  "See what an AI assessment looks like. This sample shows the recommendations, priorities, and implementation planning you can expect from an Implementation Assessment.";

export const metadata = {
  ...buildPageMetadata({
    title: "Sample Implementation Assessment | Pixel Narratives",
    description: PAGE_DESCRIPTION,
    path: "/sample-implementation-assessment",
    image: "/images/int-cinematic.jpg",
    imageAlt: "Cinematic visual for Pixel Narratives Implementation Assessment",
  }),
  keywords: [
    "Implementation Assessment",
    "sample assessment",
    "quick wins",
    "implementation planning",
  ],
};

const INSIDE = [
  {
    title: "Your Business Today",
    body: "We review your existing processes, tools, and goals to understand how your business operates and where opportunities exist.",
  },
  {
    title: "Quick Wins",
    body: "Practical improvements you can make without committing to a larger implementation project.",
  },
  {
    title: "Implementation Opportunities",
    body: "Recommendations for tools, systems, workflows, and custom solutions that could benefit your business.",
  },
  {
    title: "A Plan for Moving Forward",
    body: "Prioritized next steps that help you decide what to pursue now, what can wait, and where additional investment makes sense.",
  },
] as const;

export default function SampleImplementationAssessmentPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/sample-implementation-assessment",
            name: "Sample Implementation Assessment | Pixel Narratives",
            description: PAGE_DESCRIPTION,
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            {
              name: "Sample Implementation Assessment",
              path: "/sample-implementation-assessment",
            },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <h1 className="pn-page-title">Sample Implementation Assessment</h1>
          <h2 className="mt-6 max-w-2xl text-2xl leading-snug md:text-3xl">
            See what an AI assessment looks like.
          </h2>
          <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Every business is different. Our Implementation Assessment helps
              you understand where AI could create value in your business,
              which opportunities are worth pursuing, and how to move forward.
            </p>
            <p>
              This sample provides a look at the recommendations, priorities,
              and implementation planning you can expect from an assessment.
            </p>
          </div>
        </div>

        <div className="mt-16 w-full max-w-[960px]">
          <p className="text-sm font-medium text-[var(--foreground)]">
            View Sample Assessment
          </p>
          <iframe
            src="https://gamma.app/embed/1l93c1jf76mhrw3"
            className="pn-gamma-embed mt-4 h-[640px] w-full border-0"
            allow="fullscreen"
            title="Sample Implementation Assessment"
          />
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="pn-kicker text-[var(--muted)]">What&apos;s Inside</p>
          <h2 className="pn-display mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
            From opportunities to a plan.
          </h2>
          <ul className="mt-16 grid max-w-5xl gap-12 md:grid-cols-2">
            {INSIDE.map((item) => (
              <li key={item.title}>
                <h3 className="text-3xl leading-none md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="pn-kicker text-[var(--muted)]">Next Step</p>
          <h2 className="pn-display mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
            Let&apos;s see what&apos;s possible for your business.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            An Implementation Assessment is a practical starting point for
            identifying opportunities and deciding where to invest your time
            and resources.
          </p>
          <p className="mt-10">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Call
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

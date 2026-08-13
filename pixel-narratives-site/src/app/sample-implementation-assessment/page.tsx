import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Sample Implementation Assessment | Pixel Narratives",
  description:
    "Sample Implementation Assessment preview: business analysis, quick wins, workflow improvements, and scoped projects. Full client reports include tools and implementation recommendations.",
  keywords: [
    "Implementation Assessment",
    "sample assessment",
    "business analysis",
    "workflow improvements",
    "scoped projects",
    "automation",
  ],
  alternates: { canonical: "/sample-implementation-assessment" },
  openGraph: {
    title: "Sample Implementation Assessment | Pixel Narratives",
    description:
      "Sample Implementation Assessment preview: business analysis, quick wins, workflow improvements, and scoped projects. Full client reports include tools and implementation recommendations.",
    url: "/sample-implementation-assessment",
    siteName: "Pixel Narratives",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/int-cinematic.jpg",
        width: 2867,
        height: 1600,
        alt: "Cinematic visual for Pixel Narratives Implementation Assessment.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sample Implementation Assessment | Pixel Narratives",
    description:
      "Sample Implementation Assessment preview: business analysis, quick wins, workflow improvements, and scoped projects. Full client reports include tools and implementation recommendations.",
    images: ["/images/int-cinematic.jpg"],
  },
};

const sampleCards = [
  {
    title: "Business Snapshot",
    body: "A plain-English view of what is happening inside the business before recommending tools or projects.",
  },
  {
    title: "Quick Wins",
    body: "In client assessments, Quick Wins include tools, services, process changes, and simple improvements that can usually be completed in under two hours.",
  },
  {
    title: "Scoped Project Examples",
    body: "Larger implementation opportunities that may involve automation, workflow design, dashboards, client portals, intake systems, or internal operating tools.",
  },
  {
    title: "Next Steps",
    body: "A practical path from discovery to assessment, quick wins, scoped projects, implementation, and ongoing improvement.",
  },
] as const;

export default function SampleImplementationAssessmentPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          Optional diagnostic
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl leading-none sm:text-4xl md:text-5xl">
          Sample Implementation Assessment
        </h1>
        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          <p>
            Before we recommend tools, automations, or scoped builds, we look at
            how the business runs.
          </p>
          <p>
            This sample shows the structure and style of thinking behind our
            Implementation Assessment: where revenue may be leaking, where
            follow-up is inconsistent, where workflows are scattered, and where
            better systems could create capacity.
          </p>
          <p>
            This sample does not include the full tool-specific detail of a
            client assessment. Actual client reports include tools, services,
            process changes, automation ideas, and scoped implementation
            recommendations specific to your business.
          </p>
          <p className="text-[var(--foreground)]">
            This sample shows how we think. A real assessment shows what we
            would do for your specific business.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/sample/sample-intelligence-layer-blueprint.pdf"
            target="_blank"
            rel="noreferrer"
            className="cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
          >
            View the Sample Assessment
          </a>
          <a
            href="/contact?need=automation"
            className="cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
          >
            Discuss a Project
          </a>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="max-w-3xl text-3xl leading-none md:text-4xl">
            What the Sample Shows
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sampleCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8"
              >
                <h3 className="text-lg font-medium text-[var(--foreground)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="max-w-3xl text-3xl leading-none md:text-4xl">
            Why the First Step Is Often Data Cleanup
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            <p>
              A lot of businesses want to jump straight into AI. But if the
              business information is scattered across inboxes, spreadsheets,
              text threads, forms, notes, and memory, new tools usually make the
              mess louder instead of making the business better.
            </p>
            <p>
              That is why we often start with data organization and
              centralization. Clean intake, clearer workflows, better handoffs,
              and one place to track the important details create the foundation
              for systems that are useful.
            </p>
            <p>
              Automation works better when the business has a cleaner operating
              layer underneath it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <h2 className="max-w-3xl text-3xl leading-none md:text-4xl">
              Want one built around your business?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Discuss a project if you already know where work is getting stuck.
              The AI + Automation Assessment is optional if you want a clearer
              picture first.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="/contact?need=automation"
                className="cta-pulse-filled inline-flex items-center justify-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
              >
                Discuss a Project
              </a>
              <a
                href="/ai-readiness-assessment"
                className="cta-pulse-outline inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
              >
                Take the assessment
              </a>
              <a
                href="/automation"
                className="text-sm text-[var(--foreground)] transition hover:opacity-80 sm:px-2"
              >
                Back to Automation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

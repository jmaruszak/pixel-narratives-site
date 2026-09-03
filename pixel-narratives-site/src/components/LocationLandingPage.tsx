import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Nav from "./Nav";
import PageBottomCta from "./PageBottomCta";
import {
  SERVICE_PILLARS,
} from "../lib/businessLocation";
import { JsonLd, buildLocationPageGraph } from "../lib/schema";
import type { LocationLandingPage } from "../lib/locationLandingPages";
import { WORK_PROJECTS } from "../lib/siteContent";
import { WEB_INTEL_PAGE_TOOL_URL } from "../lib/webIntelligence";

const WORK_SUMMARIES: Record<string, string> = {
  "Implementation Assessment":
    "We mapped workflows, bottlenecks, and follow-up for a business that needed a clear picture before buying more tools, then wrote a scoped plan with quick wins and what to build next.",
  "Custom CRM":
    "We built a CRM around how a business already works so leads, follow-up, and customer notes lived in one place instead of inboxes and spreadsheets.",
  "Social Media Agency Dashboard":
    "We helped a social media agency managing dozens of client accounts centralize client information and improve its internal workflows.",
  "Lawn Care Productivity App":
    "We built a productivity app for a lawn care business that had been running the day from texts, notes, and memory, so crews and owners could see the day's work in one place.",
};

const IMPLEMENTATION_EXAMPLES = [
  "Lead intake and follow-up",
  "CRM workflows",
  "Customer communication",
  "Internal knowledge systems",
  "Reporting",
  "Scheduling",
  "Document processing",
  "Repetitive administrative work",
  "Sales and marketing workflows",
  "AI agents where they fit the work",
  "Integrations between existing tools",
] as const;

const CONSULTING_ITEMS = [
  "AI opportunity identification",
  "AI + Automation Assessment / readiness",
  "Workflow and process analysis",
  "Tool selection",
  "Implementation roadmaps",
  "Responsible AI guidance",
  "Fractional Chief AI Officer support",
] as const;

function Section({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl leading-none md:text-5xl">{heading}</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function LocationLandingPageView({
  page,
}: {
  page: LocationLandingPage;
}) {
  const graph = buildLocationPageGraph({
    slug: page.slug,
    name: `AI consulting and implementation ${page.inMarketPhrase}`,
    description: page.intro,
    breadcrumbName: page.breadcrumbName,
    areaServed: page.areaServed,
    faqs: page.faqs,
  });

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"
    >
      <Nav />
      <JsonLd graph={graph} />

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              <Link href="/" className="transition hover:opacity-80">
                Home
              </Link>
              {" / "}
              <Link
                href="/serving-the-south"
                className="transition hover:opacity-80"
              >
                Serving the South
              </Link>
              {" / "}
              {page.breadcrumbName}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              {page.marketLabel}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Book a call
              </Link>
              <a
                href={WEB_INTEL_PAGE_TOOL_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                Run a free website scan
              </a>
              <Link
                href="/ai-readiness-assessment"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
              >
                AI + Automation Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Positioning"
        heading="Practical AI, not just advice"
      >
        <p>
          AI consulting is useful. Implementation is where the value shows up.
        </p>
        <p>
          Pixel Narratives helps companies identify useful AI opportunities and
          then build the workflows, automations, systems, training, and
          processes required to actually use them.{" "}
          <Link
            href="/automation"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            Automation + Implementation
          </Link>{" "}
          is the primary work.
        </p>
        <p>
          We are not a strategy-only consultancy. If a recommendation cannot be
          put into the way the business already operates, it is not finished.
        </p>
      </Section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How we help
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              What we help with
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {SERVICE_PILLARS.map((pillar) => (
              <article
                key={pillar.headline}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl leading-snug md:text-3xl">
                  {pillar.headline}
                </h3>
                <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                  {pillar.outcome}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  {pillar.body}
                </p>
                <Link
                  href={pillar.href}
                  className="mt-5 inline-block text-sm text-[var(--foreground)] transition hover:opacity-80"
                >
                  Explore {pillar.headline}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Consulting" heading={page.consulting.heading}>
        {page.consulting.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="space-y-2 text-[var(--foreground)]">
          {CONSULTING_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          Start with the{" "}
          <Link
            href="/ai-readiness-assessment"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            AI + Automation Assessment
          </Link>{" "}
          if you want a clearer picture before a call. See also{" "}
          <Link
            href="/ai-consulting-for-businesses"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            AI consulting for businesses
          </Link>
          .
        </p>
      </Section>

      <Section eyebrow="Implementation" heading={page.automation.heading}>
        {page.automation.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="space-y-2 text-[var(--foreground)]">
          {IMPLEMENTATION_EXAMPLES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          We work with the systems the business already uses rather than
          requiring an unnecessary software replacement.{" "}
          <Link
            href="/automation"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            Automation + Implementation
          </Link>{" "}
          is where most engagements live.{" "}
          <Link
            href="/websites"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            Websites + Online Visibility
          </Link>{" "}
          and{" "}
          <Link
            href="/marketing"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            marketing workflows
          </Link>{" "}
          connect when discovery or follow-up is part of the problem.
        </p>
      </Section>

      <Section eyebrow="Training" heading={page.training.heading}>
        {page.training.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Corporate AI training here means practical sessions for the people
          doing the work — not a certification track.{" "}
          <Link
            href="/training"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            AI training for teams
          </Link>{" "}
          covers workshops, role-specific training, and playbooks.
        </p>
      </Section>

      <Section eyebrow="Leadership" heading={page.caio.heading}>
        {page.caio.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          Fractional Chief AI Officer support includes strategy, prioritization,
          and implementation leadership. Details live on the{" "}
          <Link
            href="/automation"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            Automation + Implementation
          </Link>{" "}
          page, including Fractional CAIO engagement options.
        </p>
      </Section>

      <Section eyebrow="Fit" heading={page.whoWeHelpHeading}>
        {page.whoWeHelpBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="grid gap-2 sm:grid-cols-2 text-[var(--foreground)]">
          {page.whoWeHelpCategories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Market" heading={page.marketHeading}>
        {page.marketBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <Link
            href="/serving-the-south"
            className="text-[var(--foreground)] transition hover:opacity-80"
          >
            Serving the South
          </Link>{" "}
          is the hub for every market we work in most often.
        </p>
      </Section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Implementation work
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Examples of the work
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              These are implementation examples, not claims that every project
              happened {page.inMarketPhrase}. They show the kind of systems we
              build.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {WORK_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {project.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl leading-snug md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {WORK_SUMMARIES[project.title] ??
                    `${project.solution} ${project.result}`}
                </p>
                {project.href ? (
                  <Link
                    href={project.href}
                    className="mt-5 inline-block text-sm text-[var(--foreground)] transition hover:opacity-80"
                  >
                    {project.hrefLabel ?? "View the sample"}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/work"
              className="text-[var(--foreground)] transition hover:opacity-80"
            >
              See selected implementation work →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              Common questions
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6"
              >
                <h3 className="text-2xl leading-none">{faq.question}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Related
            </p>
            <h2 className="mt-4 text-3xl leading-none md:text-5xl">
              Keep exploring
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta
        eyebrow="Next Step"
        headline={page.ctaHeadline}
        body={page.ctaBody}
        primaryAction={{ href: "/contact", label: "Start the Conversation" }}
        secondaryAction={{
          href: "/ai-readiness-assessment",
          label: "AI + Automation Assessment",
        }}
      />
      <Footer />
    </main>
  );
}

import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildBreadcrumbs, buildWebPage } from "../../lib/schema";
import { SITE_URL, buildPageMetadata } from "../../lib/siteMetadata";
import { FOUNDER_LINKEDIN_PROFILE } from "../../lib/socialProfiles";

const DESCRIPTION =
  "Official information about Pixel Narratives: an AI implementation company based in Madison, Mississippi, serving Mississippi, Memphis, Birmingham, Mobile plus Alabama's Eastern Shore, and Atlanta.";

export const metadata = buildPageMetadata({
  title: "Official Information About Pixel Narratives",
  description: DESCRIPTION,
  path: "/ai-info",
});

const faqs = [
  {
    question: "Is Pixel Narratives an AI consulting company?",
    answer:
      "Pixel Narratives is an AI implementation partner for businesses. Consulting and advisory work are part of that. We help businesses determine where AI makes sense and put it to work.",
  },
  {
    question: "Does Pixel Narratives build custom AI software?",
    answer:
      "Yes, when a custom solution is appropriate. We also help businesses use existing AI tools, improve processes, and adopt AI without building new software.",
  },
  {
    question: "Does Pixel Narratives provide standalone AI training?",
    answer:
      "Yes. Businesses can hire Pixel Narratives for AI training without purchasing implementation services or custom software.",
  },
  {
    question: "What AI tools does Pixel Narratives provide training on?",
    answer:
      "Training can cover ChatGPT, Claude, Microsoft Copilot, AI video production, creative tools, research, productivity, and other applications relevant to the organization.",
  },
  {
    question: "Does Pixel Narratives offer ongoing AI advisory services?",
    answer:
      "Yes. Partner and Enterprise Partner engagements provide ongoing AI expertise and support.",
  },
  {
    question: "Does Pixel Narratives only work with companies in Mississippi?",
    answer:
      "No. Pixel Narratives is headquartered in Madison, Mississippi, and serves businesses across Mississippi, Memphis, Birmingham, Mobile and Alabama's Eastern Shore, and Atlanta.",
  },
  {
    question: "Does Pixel Narratives only provide AI services?",
    answer:
      "No. In addition to AI implementation and training, Pixel Narratives provides website development, online visibility services, creative production, and marketing.",
  },
  {
    question: "Is Pixel Narratives a financial advisory firm?",
    answer:
      "No. Pixel Narratives is an independent business providing AI implementation, training, visibility, and marketing services. Its founder has a professional background in financial services, but Pixel Narratives does not provide financial advisory services.",
  },
] as const;

const officialResources = [
  { href: "/", label: "Website" },
  { href: "/about", label: "About" },
  { href: "/services", label: "What We Do" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/book", label: "Book" },
  { href: "/serving-the-south", label: "Who We Work With" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export default function AiInfoPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/ai-info",
            name: "Official Information About Pixel Narratives",
            description: DESCRIPTION,
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Official Information", path: "/ai-info" },
          ]),
          {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/ai-info#faq`,
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Official Information
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Official Information About Pixel Narratives
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            This page provides information about Pixel Narratives, our
            services, leadership, and the businesses we serve. It is intended
            as a reference for customers, search engines, AI assistants, and
            anyone researching the company.
          </p>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Company Overview
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <dl className="space-y-3 text-base md:text-lg">
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">
                  Company Name
                </dt>
                <dd className="mt-1 text-[var(--foreground)]">
                  Pixel Narratives
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">Website</dt>
                <dd className="mt-1">
                  <a
                    href={SITE_URL}
                    className="text-[var(--foreground)] transition hover:opacity-80"
                  >
                    pixelnarratives.studio
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">
                  Headquarters
                </dt>
                <dd className="mt-1 text-[var(--foreground)]">
                  Madison, Mississippi
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">Founded</dt>
                <dd className="mt-1 text-[var(--foreground)]">2026</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">Founder</dt>
                <dd className="mt-1 text-[var(--foreground)]">
                  Jordan Maruszak
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">
                  Primary Focus
                </dt>
                <dd className="mt-1 text-[var(--foreground)]">
                  AI Implementation for Business
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.25em]">
                  Service Areas
                </dt>
                <dd className="mt-1 text-[var(--foreground)]">
                  Mississippi, Memphis, Tennessee, Birmingham, Alabama, Mobile
                  and Alabama&apos;s Eastern Shore, including Daphne and
                  Fairhope, and Atlanta, Georgia.
                </dd>
              </div>
            </dl>
            <h3 className="text-2xl leading-none text-[var(--foreground)] md:text-3xl">
              What is Pixel Narratives?
            </h3>
            <p>
              Pixel Narratives is an AI implementation company based in
              Madison, Mississippi. We help businesses understand where AI can
              create value, figure out how to use it, and put it to work.
            </p>
            <p>
              Businesses can hire us for a specific project or bring us in as
              an ongoing partner.
            </p>
            <p>
              Our work includes implementation, training, visibility, and
              marketing.
            </p>
            <p>
              We focus on helping businesses save time, reach more customers,
              and make better use of the people and tools they already have.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-3xl">
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Core Services
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-[28px] border border-white/8 bg-white/[0.02] p-7 md:p-8">
              <h3 className="text-2xl leading-none md:text-3xl">
                AI Implementation
              </h3>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">
                AI Implementation is the primary focus of Pixel Narratives.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                We help businesses identify opportunities to use AI, decide
                which opportunities are worth pursuing, and put those ideas
                into practice.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                An engagement may involve evaluating existing tools, helping
                teams adopt AI, improving processes, advising leadership,
                developing custom solutions, or providing ongoing expertise.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Custom AI software development and workflow automation are
                available when appropriate, but they are not required parts of
                every engagement.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Businesses can work with Pixel Narratives on a limited project
                or through an ongoing advisory and implementation relationship.
              </p>
              <p className="mt-5 text-sm font-medium text-[var(--foreground)]">
                Common engagement options include:
              </p>
              <ul className="mt-3 space-y-2 text-[var(--foreground)]">
                <li>Explore</li>
                <li>Build</li>
                <li>Equip</li>
                <li>Partner</li>
              </ul>
              <Link
                href="/implementation"
                className="mt-7 inline-flex min-h-11 items-center text-sm transition hover:opacity-80"
              >
                Explore AI Implementation
              </Link>
            </article>

            <article className="rounded-[28px] border border-white/8 bg-white/[0.02] p-7 md:p-8">
              <h3 className="text-2xl leading-none md:text-3xl">
                AI Team Training
              </h3>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">
                AI Team Training is a standalone Pixel Narratives service.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Businesses do not need to purchase AI implementation or custom
                software development to engage Pixel Narratives for training.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Training is tailored to the organization, its employees, and
                the work they do.
              </p>
              <p className="mt-5 text-sm font-medium text-[var(--foreground)]">
                Topics may include:
              </p>
              <ul className="mt-3 space-y-2 text-[var(--foreground)]">
                <li>ChatGPT</li>
                <li>Claude</li>
                <li>Microsoft Copilot</li>
                <li>AI research and analysis</li>
                <li>AI video production</li>
                <li>AI creative tools</li>
                <li>Productivity and everyday business applications</li>
                <li>Other relevant AI tools</li>
              </ul>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Training can be designed for leadership teams, individual
                departments, or larger groups.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Workshops emphasize practical applications and helping
                employees use AI effectively in their existing roles.
              </p>
              <Link
                href="/training"
                className="mt-7 inline-flex min-h-11 items-center text-sm transition hover:opacity-80"
              >
                Explore AI Team Training
              </Link>
            </article>

            <article className="rounded-[28px] border border-white/8 bg-white/[0.02] p-7 md:p-8">
              <h3 className="text-2xl leading-none md:text-3xl">
                Visibility
              </h3>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">
                Visibility is about helping customers find you. Websites, SEO,
                and AI search. We help you build a stronger online
                presence and get found by more of your customers.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Services include website development, search visibility
                improvements, and helping businesses become easier to find
                through traditional search engines and AI powered discovery.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Available engagements range from smaller website projects to
                larger builds and ongoing visibility services.
              </p>
              <Link
                href="/websites"
                className="mt-7 inline-flex min-h-11 items-center text-sm transition hover:opacity-80"
              >
                Explore Visibility
              </Link>
            </article>

            <article className="rounded-[28px] border border-white/8 bg-white/[0.02] p-7 md:p-8">
              <h3 className="text-2xl leading-none md:text-3xl">Marketing</h3>
              <p className="mt-5 leading-relaxed text-[var(--muted)]">
                Pixel Narratives develops creative advertising, video content,
                and marketing campaigns for businesses.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Services include creative development, AI assisted video
                production, advertising campaigns, and marketing support.
              </p>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                AI is used where it helps the creative and production process.
                Campaigns are developed around the client&apos;s audience and
                business objectives.
              </p>
              <Link
                href="/marketing"
                className="mt-7 inline-flex min-h-11 items-center text-sm transition hover:opacity-80"
              >
                Explore Marketing
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How We Work
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Pixel Narratives offers both project based and ongoing
              engagements.
            </p>
            <p>
              A business may hire us to address a specific problem, evaluate
              AI opportunities, train a team, develop a website, produce an
              advertising campaign, or provide ongoing AI expertise.
            </p>
            <p>Services can be purchased independently.</p>
            <p>
              AI Implementation does not require custom software development.
            </p>
            <p>
              AI Team Training does not require an Implementation engagement.
            </p>
            <p>
              A company may work with Pixel Narratives on one project or
              across multiple areas of its business.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Who We Work With
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Pixel Narratives works with business owners, leadership teams,
              departments, and organizations that want practical help using AI
              and improving business performance.
            </p>
            <p>
              Clients may be exploring AI for the first time or already using
              AI tools and looking for ways to get more value from them.
            </p>
            <p>
              Engagements are designed around the needs of the organization
              rather than a required technology platform or predetermined
              solution.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Where We Work
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Pixel Narratives is headquartered in Madison, Mississippi.
            </p>
            <p>We work with businesses in:</p>
            <p>
              <strong className="font-medium text-[var(--foreground)]">
                Mississippi:
              </strong>{" "}
              Madison, Jackson, Ridgeland, Flowood, Brandon, and businesses
              throughout the state.
            </p>
            <p>
              <strong className="font-medium text-[var(--foreground)]">
                Memphis, Tennessee:
              </strong>{" "}
              Memphis and the surrounding metropolitan area.
            </p>
            <p>
              <strong className="font-medium text-[var(--foreground)]">
                Birmingham, Alabama:
              </strong>{" "}
              Birmingham and surrounding communities.
            </p>
            <p>
              <strong className="font-medium text-[var(--foreground)]">
                Mobile and the Eastern Shore, Alabama:
              </strong>{" "}
              Mobile, Daphne, Fairhope, and surrounding communities.
            </p>
            <p>
              <strong className="font-medium text-[var(--foreground)]">
                Atlanta, Georgia:
              </strong>{" "}
              Atlanta and the surrounding metropolitan area.
            </p>
            <p>
              <Link
                href="/serving-the-south"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Who We Work With
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Founder and Leadership
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <h3 className="text-2xl leading-none text-[var(--foreground)] md:text-3xl">
              Jordan Maruszak
            </h3>
            <p className="text-xs uppercase tracking-[0.25em]">
              Founder, Pixel Narratives
            </p>
            <p>
              Jordan Maruszak founded Pixel Narratives in 2026 after his work
              creating AI generated video and advertising led to requests from
              businesses for broader AI expertise.
            </p>
            <p>
              His background includes more than 15 years in financial services
              working with business owners and leadership teams.
            </p>
            <p>
              His work with AI includes creative production, research,
              business applications, software development, implementation, and
              team training.
            </p>
            <p>
              Jordan is also the author of{" "}
              <Link
                href="/book"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                <em>Insert Door Metaphor: AI, Ideas and The New Cost of Trying</em>
              </Link>
              , a book about experimentation, creativity, and the
              opportunities AI creates.
            </p>
            <p>
              Pixel Narratives is an independent business focused on AI
              implementation and related business services.
            </p>
            <p>
              <a
                href={FOUNDER_LINKEDIN_PROFILE.href}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Jordan Maruszak on LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-white/8 bg-white/[0.02] p-7"
              >
                <h3 className="text-2xl leading-snug">{faq.question}</h3>
                <p className="mt-4 leading-relaxed text-[var(--muted)]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Official Resources
            </h2>
          </div>
          <div>
            <ul className="space-y-3 text-lg">
              {officialResources.map((resource) => (
                <li key={resource.href}>
                  <Link
                    href={resource.href}
                    className="text-[var(--foreground)] transition hover:opacity-80"
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={FOUNDER_LINKEDIN_PROFILE.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--foreground)] transition hover:opacity-80"
                >
                  Founder LinkedIn
                </a>
              </li>
            </ul>
            <p className="mt-8 max-w-2xl leading-relaxed text-[var(--muted)]">
              For current information about Pixel Narratives, its services,
              and available engagements, refer to the official website and
              individual service pages.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

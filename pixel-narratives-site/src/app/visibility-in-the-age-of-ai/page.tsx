import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { WEB_INTEL_PAGE_TOOL_URL } from "../../lib/webIntelligence";

const DESCRIPTION =
  "Learn how search, SEO, AI visibility, E-E-A-T, and YouTube now shape how customers discover and trust businesses online.";

const baseMetadata = buildPageMetadata({
  title: "Visibility in the Age of AI | Pixel Narratives",
  description: DESCRIPTION,
  path: "/visibility-in-the-age-of-ai",
  image: "/images/web-cinematic.jpg",
  imageAlt: "Visibility in the Age of AI guide from Pixel Narratives",
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Visibility in the Age of AI",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Visibility in the Age of AI",
  },
};

function GuideSection({
  title,
  children,
  fullWidth = false,
}: {
  title: string;
  children: ReactNode;
  fullWidth?: boolean;
}) {
  if (fullWidth) {
    return (
      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="text-4xl leading-none md:text-5xl">{title}</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-white/8">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
        <div>
          <h2 className="text-4xl leading-none md:text-5xl">{title}</h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-medium text-[var(--foreground)] md:text-2xl">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function VisibilityInTheAgeOfAiPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/visibility-in-the-age-of-ai",
            name: "Visibility in the Age of AI | Pixel Narratives",
            description: DESCRIPTION,
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Visibility in the Age of AI", path: "/visibility-in-the-age-of-ai" },
          ]),
        ]}
      />

      <article>
        <section className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Visibility
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
            Visibility in the Age of AI
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>For nearly two decades, digital visibility meant one thing:</p>
            <p className="text-[var(--foreground)]">Rank higher on Google.</p>
            <p>
              Businesses invested in SEO, optimized websites, built backlinks,
              and competed for positions on search engine results pages.
            </p>
            <p>Those fundamentals still matter.</p>
            <p>What has changed is how people discover information.</p>
            <p>
              Today, customers increasingly receive answers directly from AI
              systems. Instead of scrolling through search results, they ask
              questions and receive recommendations, summaries, and suggested
              businesses instantly.
            </p>
            <p>The question is no longer:</p>
            <p className="text-[var(--foreground)]">
              &ldquo;Do I rank on Google?&rdquo;
            </p>
            <p>The question is:</p>
            <p className="text-[var(--foreground)]">
              &ldquo;Can customers find me wherever they search?&rdquo;
            </p>
            <p>
              That includes traditional search engines, AI assistants, video
              platforms, business directories, review sites, and emerging
              AI-powered experiences.
            </p>
            <p className="text-[var(--foreground)]">
              Visibility has become much broader than SEO.
            </p>
          </div>
        </section>

        <GuideSection title="Why Search Has Changed">
          <p>
            Search used to be a list of links. Now it is increasingly an answer.
          </p>
          <p>
            Google still matters. So do Bing, Apple, maps, reviews, and the open
            web. But AI assistants have added a new discovery layer on top of
            traditional search.
          </p>
          <p>
            Customers ask broader questions, compare options faster, and expect
            businesses to show up with clear proof of expertise and trust.
          </p>
          <p>
            That shift does not make SEO obsolete. It makes visibility harder to
            ignore and more expensive to get wrong.
          </p>
        </GuideSection>

        <GuideSection title="The New Visibility Stack" fullWidth>
          <p>
            Modern visibility consists of four connected layers:
          </p>

          <Subsection title="Search Visibility">
            <p>Can customers find your business through search engines?</p>
            <p>Traditional search visibility includes:</p>
            <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
              <li>Technical SEO</li>
              <li>Website performance</li>
              <li>Mobile optimization</li>
              <li>Local SEO</li>
              <li>Google Business Profile</li>
              <li>Content strategy</li>
              <li>Backlinks</li>
              <li>Reviews</li>
            </ul>
            <p>
              These remain foundational. Search engines continue to influence how
              information is discovered and how AI systems evaluate websites.
            </p>
            <p>Search visibility is still important.</p>
            <p>It is simply no longer the entire picture.</p>
          </Subsection>

          <Subsection title="AI Visibility">
            <p>Can AI systems understand, trust, and recommend your business?</p>
            <p>
              Millions of users now turn to AI assistants for recommendations,
              research, and decision-making.
            </p>
            <p>Examples include:</p>
            <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
              <li>ChatGPT</li>
              <li>Claude</li>
              <li>Perplexity</li>
              <li>Gemini</li>
              <li>Microsoft Copilot</li>
            </ul>
            <p>Customers increasingly ask questions like:</p>
            <p className="text-[var(--foreground)]">
              &ldquo;Who are the best accountants in Birmingham?&rdquo;
            </p>
            <p className="text-[var(--foreground)]">
              &ldquo;What marketing agency specializes in AI?&rdquo;
            </p>
            <p className="text-[var(--foreground)]">
              &ldquo;What restaurant should I try in Jacksonville?&rdquo;
            </p>
            <p>
              Instead of browsing ten websites, they often receive a curated
              answer.
            </p>
            <p>
              To appear in those answers, businesses must create signals that AI
              systems can understand and trust.
            </p>
            <p>This includes:</p>
            <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
              <li>Clear website structure</li>
              <li>Consistent business information</li>
              <li>Strong authority signals</li>
              <li>Helpful content</li>
              <li>Industry expertise</li>
              <li>Reviews and reputation</li>
              <li>Demonstrated experience</li>
            </ul>
            <p>
              AI visibility is quickly becoming one of the most important
              competitive advantages for local businesses.
            </p>
          </Subsection>

          <Subsection title="Authority Visibility">
            <p>Can people and AI trust your business?</p>
            <p>Your website is only one signal.</p>
            <p>
              Modern search and AI systems evaluate your broader digital
              footprint.
            </p>
            <p>Authority signals include:</p>
            <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
              <li>Customer reviews</li>
              <li>Business directories</li>
              <li>Industry associations</li>
              <li>News coverage</li>
              <li>Podcast appearances</li>
              <li>Case studies</li>
              <li>Social media presence</li>
              <li>Educational content</li>
              <li>Speaking engagements</li>
              <li>Published expertise</li>
            </ul>
            <p>
              The stronger your authority footprint, the easier it becomes for
              search engines and AI systems to understand who you are and what
              makes your business credible.
            </p>
          </Subsection>

          <Subsection title="Knowledge Visibility">
            <p>Have you documented your expertise?</p>
            <p>Most businesses possess valuable knowledge.</p>
            <p>Very few publish it.</p>
            <p>This creates an opportunity.</p>
            <p>Every question your customers ask can become content.</p>
            <p>Every process you follow can become documentation.</p>
            <p>Every success story can become a case study.</p>
            <p>
              Businesses that consistently publish useful information create an
              advantage that compounds over time.
            </p>
            <p>
              AI systems cannot reference expertise that has never been shared.
            </p>
          </Subsection>
        </GuideSection>

        <GuideSection title="Understanding E-E-A-T" fullWidth>
          <p>
            One of the most important concepts in modern visibility is E-E-A-T.
          </p>
          <p>
            Google uses E-E-A-T as a framework for evaluating the quality and
            trustworthiness of content.
          </p>
          <p>E-E-A-T stands for:</p>

          <Subsection title="Experience">
            <p>Have you done the thing you&apos;re talking about?</p>
            <p>
              A restaurant owner discussing restaurant operations demonstrates
              experience.
            </p>
            <p>
              A contractor discussing construction projects demonstrates
              experience.
            </p>
            <p>First-hand knowledge matters.</p>
          </Subsection>

          <Subsection title="Expertise">
            <p>Do you know your subject?</p>
            <p>
              Expertise is demonstrated through knowledge, education, training,
              and the quality of information you provide.
            </p>
            <p>
              Businesses that consistently share useful insights build expertise
              signals over time.
            </p>
          </Subsection>

          <Subsection title="Authoritativeness">
            <p>Do others recognize your expertise?</p>
            <p>Authority is often built through:</p>
            <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
              <li>Mentions</li>
              <li>Reviews</li>
              <li>Citations</li>
              <li>Industry recognition</li>
              <li>Backlinks</li>
              <li>Partnerships</li>
              <li>Media coverage</li>
            </ul>
            <p>Authority is reputation at scale.</p>
          </Subsection>

          <Subsection title="Trustworthiness">
            <p>Can people trust your business?</p>
            <p>Trust is often the most important factor.</p>
            <p>Trust signals include:</p>
            <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
              <li>Accurate information</li>
              <li>Clear contact details</li>
              <li>Secure websites</li>
              <li>Positive reviews</li>
              <li>Consistent branding</li>
              <li>Transparent business practices</li>
            </ul>
            <p>
              Trust influences both human decision-making and AI
              recommendations.
            </p>
          </Subsection>
        </GuideSection>

        <GuideSection title="Why YouTube Matters More Than Ever" fullWidth>
          <p>
            Most businesses still think of YouTube as a social media platform.
          </p>
          <p>That is a mistake.</p>
          <p>
            YouTube has become one of the most powerful visibility channels
            available.
          </p>
          <p>A single video can:</p>
          <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
            <li>Demonstrate expertise</li>
            <li>Answer customer questions</li>
            <li>Showcase projects</li>
            <li>Build trust</li>
            <li>Rank in search results</li>
            <li>Generate leads</li>
            <li>Improve AI visibility</li>
          </ul>
          <p>
            Unlike social posts that disappear within days, YouTube content often
            continues generating visibility for years.
          </p>

          <Subsection title="Why AI Systems Value Video">
            <p>Video contains signals that AI systems increasingly value:</p>
            <ul className="list-disc space-y-2 pl-5 text-[var(--foreground)]">
              <li>Original content</li>
              <li>Demonstrated expertise</li>
              <li>Tutorials</li>
              <li>Explanations</li>
              <li>Customer stories</li>
              <li>Case studies</li>
              <li>Thought leadership</li>
            </ul>
            <p>
              Video helps both humans and AI understand what your business
              does.
            </p>
            <p>
              Many businesses invest heavily in social media while ignoring
              YouTube entirely.
            </p>
            <p>
              That creates an opportunity for those willing to publish useful
              content consistently.
            </p>
          </Subsection>
        </GuideSection>

        <GuideSection title="The Visibility Opportunity">
          <p>
            Most businesses are still competing using strategies designed for a
            different internet.
          </p>
          <p>They focus exclusively on rankings.</p>
          <p>They ignore AI visibility.</p>
          <p>They rarely publish educational content.</p>
          <p>They overlook YouTube.</p>
          <p>They fail to document their expertise.</p>
          <p>Meanwhile, customer behavior continues to evolve.</p>
          <p>
            The businesses that win over the next decade will focus on
            visibility as a whole.
          </p>
          <p>Not just search visibility.</p>
          <p>Not just social visibility.</p>
          <p>Not just AI visibility.</p>
          <p>All of it.</p>
        </GuideSection>

        <GuideSection title="How Pixel Narratives Measures Visibility" fullWidth>
          <p>
            Our{" "}
            <Link
              href="/websites"
              className="text-[var(--foreground)] transition hover:opacity-80"
            >
              Websites + Online Visibility
            </Link>{" "}
            work includes a live-site scan.{" "}
            <a
              href={WEB_INTEL_PAGE_TOOL_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--foreground)] transition hover:opacity-80"
            >
              Run a free scan
            </a>{" "}
            on your live site to see search visibility, AI visibility, and
            authority signals.
          </p>

          <Subsection title="Search Visibility">
            <p>Can customers find you?</p>
          </Subsection>

          <Subsection title="AI Visibility">
            <p>Can AI systems understand and recommend you?</p>
          </Subsection>

          <Subsection title="Authority Signals">
            <p>
              Have you established the trust, expertise, and credibility
              required to compete in modern search and AI environments?
            </p>
          </Subsection>

          <p>The goal is not simply rankings.</p>
          <p>The goal is visibility wherever your customers are looking.</p>
          <p>
            Because in today&apos;s market, being the best business is not
            enough.
          </p>
          <p>You have to be discoverable too.</p>
        </GuideSection>

        <section className="border-t border-white/8">
          <div className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-24">
            <h2 className="text-4xl leading-none md:text-5xl">
              Visibility is only the first path
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>
                Visibility works best when paired with{" "}
                <Link
                  href="/marketing"
                  className="text-[var(--foreground)] transition hover:opacity-80"
                >
                  Marketing
                </Link>
                , because being found matters more when people remember you.
              </p>
              <p>
                The next step is often{" "}
                <Link
                  href="/automation"
                  className="text-[var(--foreground)] transition hover:opacity-80"
                >
                  Automation + Implementation
                </Link>
                , turning visibility and attention into practical systems.
              </p>
            </div>
          </div>
        </section>

        <section className="next-step-section border-t border-white/8">
          <div className="next-step-bg" aria-hidden />
          <div className="next-step-fade" aria-hidden />
          <div className="next-step-content mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl leading-none md:text-6xl">
                Want to know how visible your business is?
              </h2>
              <p className="pn-body mt-6">
                Run a free website scan to see how your website
                performs across search visibility, AI visibility, authority
                signals, and conversion opportunities.
              </p>
              <div className="mt-8">
                <a
                  href={WEB_INTEL_PAGE_TOOL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                >
                  Run a Free Website Scan
                </a>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}

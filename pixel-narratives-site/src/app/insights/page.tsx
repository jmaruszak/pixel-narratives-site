import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { JsonLd, buildBreadcrumbs, buildWebPage } from "../../lib/schema";
import { SITE_URL, buildPageMetadata } from "../../lib/siteMetadata";

export const metadata = buildPageMetadata({
  title: "Insights | Pixel Narratives",
  description:
    "Practical guides from Pixel Narratives about AI implementation, workflow automation, online visibility, websites, and marketing.",
  path: "/insights",
});

type InsightGroup = {
  title: string;
  description: string;
  items: Array<{ href: string; title: string; body: string }>;
};

const insightGroups: InsightGroup[] = [
  {
    title: "AI & Automation",
    description: "Practical ways to choose, implement, and improve AI-supported work.",
    items: [
      {
        href: "/how-to-use-ai-in-your-business",
        title: "How to Use AI in Your Business",
        body: "A practical starting point for using AI without wasting time or buying tools before the work is clear.",
      },
      {
        href: "/how-to-implement-ai-in-your-business",
        title: "How to Implement AI in Your Business",
        body: "A straightforward implementation roadmap covering workflows, governance, tools, training, and measurement.",
      },
      {
        href: "/ai-workflow-automation",
        title: "AI Workflow Automation",
        body: "Where automation creates value, why it fails, and what a durable workflow needs.",
      },
      {
        href: "/ai-crm-automation",
        title: "AI CRM Automation",
        body: "How sales teams can reduce manual updates and improve lead handling without giving up human review.",
      },
      {
        href: "/ai-consulting-for-businesses",
        title: "AI Implementation for Businesses",
        body: "What practical AI support should include when the goal is working systems rather than recommendations alone.",
      },
    ],
  },
  {
    title: "Websites & Visibility",
    description: "How customers and answer engines find, understand, and trust a business.",
    items: [
      {
        href: "/visibility-in-the-age-of-ai",
        title: "Visibility in the Age of AI",
        body: "A guide to search visibility, AI visibility, authority signals, and the work that helps customers find you.",
      },
      {
        href: "/sample-implementation-assessment",
        title: "Sample Implementation Assessment",
        body: "See how we document workflow problems, quick wins, and larger implementation opportunities.",
      },
    ],
  },
  {
    title: "Marketing",
    description: "Clear guidance for building creative around an objective and an audience.",
    items: [
      {
        href: "/how-to-create-ads-people-actually-watch",
        title: "How to Create Ads People Actually Watch",
        body: "A simple framework for earning attention before asking an audience to act.",
      },
      {
        href: "/cost-of-ai-video-production",
        title: "Cost of AI Video Production",
        body: "What affects the cost of concept-driven video and when AI-assisted production makes sense.",
      },
      {
        href: "/ai-commercial-production-company",
        title: "AI Commercial Production",
        body: "How strategy, concept development, editing, and AI-assisted production fit together.",
      },
      {
        href: "/ai-video-ad-agency",
        title: "AI Video Advertising",
        body: "What separates useful campaign creative from a collection of disconnected assets.",
      },
    ],
  },
];

const allInsights = insightGroups.flatMap((group) => group.items);

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />
      <JsonLd
        graph={[
          buildWebPage({
            path: "/insights",
            name: "Pixel Narratives Insights",
            description:
              "Practical guides about AI implementation, workflow automation, online visibility, websites, and marketing.",
            additionalType: "CollectionPage",
            mainEntity: { "@id": `${SITE_URL}/insights#list` },
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
          ]),
          {
            "@type": "ItemList",
            "@id": `${SITE_URL}/insights#list`,
            name: "Pixel Narratives guides and insights",
            numberOfItems: allInsights.length,
            itemListElement: allInsights.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.title,
              url: `${SITE_URL}${item.href}`,
            })),
          },
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Insights
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            Practical guidance for better work.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            Clear explanations of AI implementation, visibility, and marketing
            for owners and teams deciding what is worth doing next.
          </p>
        </div>
      </section>

      {insightGroups.map((group) => (
        <section key={group.title} className="border-t border-white/8">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-4xl leading-none md:text-5xl">{group.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
                {group.description}
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {group.items.map((item) => (
                <article
                  key={item.href}
                  className="flex flex-col rounded-[24px] border border-white/8 bg-white/[0.02] p-7"
                >
                  <h3 className="text-2xl leading-snug md:text-3xl">
                    <Link
                      href={item.href}
                      className="transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed text-[var(--muted)]">
                    {item.body}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex min-h-11 items-center self-start text-sm transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50"
                  >
                    Read the guide
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="text-3xl leading-none md:text-4xl">Company news</h2>
            <p className="mt-4 text-[var(--muted)]">
              Press releases and independent coverage live in the News section.
            </p>
          </div>
          <Link
            href="/news"
            className="inline-flex min-h-11 items-center self-start rounded-full border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 md:self-auto"
          >
            View News &amp; Media
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

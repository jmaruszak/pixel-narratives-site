import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { buildOrganizationSchema } from "../../lib/businessLocation";
import { NEWS_ITEMS, newsPath } from "../../lib/news";
import { SERVICES } from "../../lib/services";
import { MARKETING_TO_WEB_INTEL_URL } from "../../lib/webIntelligence";

export const metadata: Metadata = {
  title: "About Pixel Narratives",
  description:
    "Pixel Narratives is an execution company based in Madison, Mississippi. We help businesses save time, win more customers, and get more done through automation, training, websites, and marketing.",
  alternates: { canonical: "/about" },
};

const founder = {
  name: "Jordan Maruszak",
  title: "Co-Founder, Head of Narrative & Strategy",
  image: "/images/about-jordan.jpg",
  body: [
    "Jordan brings over 15 years of experience working alongside business owners and leadership teams to navigate complex decisions, align strategy, and drive long-term outcomes.",
    "At Pixel Narratives, he leads narrative and strategic direction by helping companies cut through noise, clarify what matters, and turn ideas into work that moves the needle.",
    "His focus is simple: every project should have a clear purpose, a strong point of view, and a measurable impact.",
  ],
} as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationSchema()),
        }}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            About
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            About Pixel Narratives
          </h1>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              About Pixel Narratives
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Pixel Narratives is headquartered in Madison, Mississippi. We work
              with business owners who want to save time, win more customers,
              and get more done.
            </p>
            <p>
              We are based in Madison and work with teams across Mississippi and
              the broader South.{" "}
              <Link
                href="/serving-the-south"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                See where we work most often
              </Link>
              .
            </p>
            <p>
              We started with creative work, building high-impact ads designed
              to capture attention.
            </p>
            <p>
              That work made something clear: a campaign only helps if the
              business can be found, follow up, and deliver.
            </p>
            <p>Businesses need better systems.</p>
            <p>They need teams who know how to use the tools they already have.</p>
            <p>They need to be found online, and they need marketing that gets acted on.</p>
            <p>
              That is why everything we do is built around four services:
            </p>
            <p className="text-[var(--foreground)]">
              Automation + Implementation. Training. Websites + Online
              Visibility. Marketing.
            </p>
            <p>
              Some clients start with repetitive work that is eating the week.
              Others need website visibility, a campaign, or team training. AI
              is how a lot of the work gets done. You are buying the outcome.
            </p>
            <p>
              Whether we are improving a company&apos;s online presence,
              creating a campaign, training a team, or building better systems,
              the goal is the same: helping businesses grow.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Why We’re Different
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Our leadership brings over 15 years of experience working alongside
              business owners and leadership teams in high-stakes environments.
            </p>
            <p>That experience shapes everything we do.</p>
            <p>We don’t chase trends or sell tools.</p>
            <p>
              We focus on outcomes, because we’ve spent our careers helping
              people make decisions where the stakes are real.
            </p>
            <p>
              Now we bring that same discipline to AI, creative, and growth.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Founder
          </p>
          <article className="mt-10 max-w-4xl rounded-[28px] border border-white/8 bg-white/[0.02] p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:items-start">
              <div className="overflow-hidden rounded-[20px] border border-white/8 bg-black">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={1200}
                  height={1500}
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl leading-none md:text-4xl">
                  {founder.name}
                </h2>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {founder.title}
                </p>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {founder.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
          <div className="mt-10 max-w-3xl rounded-[24px] border border-white/8 bg-white/[0.02] p-6 md:p-8">
            <p className="text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Pixel Narratives was co-founded by a multidisciplinary team
              spanning storytelling, creative production, operations, and business
              strategy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              Our team combines creative thinking, technical execution, and
              practical business experience to help brands tell stories people
              want to watch.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              What We Do
            </p>
          </div>
          <div className="min-w-0">
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              We help clients save time, use AI better, get found, and reach
              more customers.
            </p>
            <div className="mt-8 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] p-6"
                >
                  <h2 className="text-balance break-words text-2xl leading-snug lg:text-3xl">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                    {service.body}
                  </p>
                  {service.id === "websites" ? (
                    <p className="mt-5 text-base">
                      <a
                        href={MARKETING_TO_WEB_INTEL_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--foreground)] transition hover:opacity-80"
                      >
                        Check My Online Visibility
                      </a>
                    </p>
                  ) : (
                    <p className="mt-5 text-base">
                      <Link
                        href={service.href}
                        className="text-[var(--foreground)] transition hover:opacity-80"
                      >
                        {service.ctaLabel}
                      </Link>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              In the News
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Pixel Narratives has been featured for its work helping Mississippi
              and Southeast businesses turn artificial intelligence into
              practical business systems.
            </p>
            <div className="mt-8 space-y-6">
              {NEWS_ITEMS.map((item) => (
                <article key={item.slug}>
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    {item.source}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                    {item.typeLabel}
                  </p>
                  <h2 className="mt-2 text-2xl leading-snug md:text-3xl">
                    <Link
                      href={newsPath(item)}
                      className="transition hover:opacity-80"
                    >
                      {item.title}
                    </Link>
                  </h2>
                  <time
                    dateTime={item.datePublished}
                    className="mt-2 block text-sm text-[var(--muted)]"
                  >
                    {item.dateLabel}
                  </time>
                </article>
              ))}
            </div>
            <p className="mt-8">
              <Link
                href="/news"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                View all news →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The Bottom Line
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>We’re not here to impress you with AI.</p>
            <p>
              We’re here to help you use it
              <br />
              to grow your business.
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
              Ready to talk about what to improve?
            </h2>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

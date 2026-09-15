import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { NEWS_ITEMS, newsPath } from "../../lib/news";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { SERVICE_LINE_SUMMARY, SERVICES } from "../../lib/services";
import { MARKETING_TO_WEB_INTEL_URL } from "../../lib/webIntelligence";

export const metadata: Metadata = {
  title: "About Pixel Narratives",
  description:
    "Pixel Narratives is a business implementation company based in Madison, Mississippi. We help businesses save time, win more customers, and get more done.",
  alternates: { canonical: "/about" },
};

const founder = {
  name: "Jordan Maruszak",
  title: "Founder, Chief AI Officer and Head of Strategy",
  image: "/images/about-jordan.jpg",
  body: [
    "Jordan has spent more than 15 years working with business owners and leadership teams on decisions that affect how the company actually runs.",
    "At Pixel Narratives he leads implementation: automation, training, websites, and marketing. The point is not more technology. It is a better week for the people doing the work.",
    "Every project should have a clear purpose, a practical next step, and a result the owner can see in the business.",
  ],
} as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <JsonLd
        graph={[
          buildWebPage({
            path: "/about",
            name: "About Pixel Narratives",
            description:
              "Pixel Narratives is a business implementation company based in Madison, Mississippi. We help businesses save time, win more customers, and get more done.",
            additionalType: "AboutPage",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            About
          </p>
          <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
            There&apos;s Probably a Better Way.
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
            <p>Businesses grow. Things get messy.</p>
            <p>
              Work gets repeated. Software gets piled on top of software. Good
              leads get buried in an inbox. The website gets ignored for six
              months.
            </p>
            <p className="text-[var(--foreground)]">We build the better way.</p>
            <p>
              Pixel Narratives is a business implementation company based in
              Madison, Mississippi. We help businesses save time, win more
              customers, and get more done.
            </p>
            <p>
              Madison is home base.{" "}
              <Link
                href="/serving-the-south"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                See where we work most often
              </Link>
              .
            </p>
            <p className="text-[var(--foreground)]">{SERVICE_LINE_SUMMARY}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              AI Is a Tool
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              We use AI and automation where they make sense. Other times, the
              answer might be a better workflow, a new internal tool, a website
              that does a better job, or marketing people notice.
            </p>
            <p>
              We don&apos;t start with the technology. We start with what
              isn&apos;t working and figure out how to make it better.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              We Actually Build Things
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Our leadership brings more than 15 years of experience working
              alongside business owners and leadership teams. That matters
              because good ideas aren&apos;t worth much if they don&apos;t work
              in the real world.
            </p>
            <p>We care about what gets used and what gets results.</p>
            <p>No giant stack of tools and a good-luck email.</p>
            <p className="text-[var(--foreground)]">
              Just better ways to get things done.
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
                  {service.id === "automation" ? (
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                      AI + Automation + Business Systems
                    </p>
                  ) : null}
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
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

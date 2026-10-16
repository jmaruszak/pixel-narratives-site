import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import SocialProfileLink from "../../components/SocialProfileLink";
import { NEWS_ITEMS, newsPath } from "../../lib/news";
import { JsonLd, buildWebPage, buildBreadcrumbs } from "../../lib/schema";
import { buildPageMetadata } from "../../lib/siteMetadata";
import { FOUNDER_LINKEDIN_PROFILE } from "../../lib/socialProfiles";

export const metadata = buildPageMetadata({
  title: "About Pixel Narratives",
  description:
    "Pixel Narratives is an AI implementation company based in Madison, Mississippi, serving businesses across Mississippi, Alabama, the Memphis area, and Atlanta.",
  path: "/about",
  image: "/images/about-jordan.jpg",
  imageAlt: "Jordan Maruszak, founder of Pixel Narratives",
});

const FOUNDER_BOOK_PARAGRAPH =
  "I've spent a lot of time experimenting with what these tools can do, from building software and business systems to creating videos, music, and marketing campaigns. I even wrote a book about the opportunities AI creates when people are willing to try something new.";

const founder = {
  name: "Jordan Maruszak",
  title: "Founder, Pixel Narratives",
  image: "/images/about-jordan.jpg",
  body: [
    "Pixel Narratives started with a camera. Sort of.",
    "In 2025, I started experimenting with AI video, creating cinematic commercials, ridiculous characters, and ads that probably would have required a much bigger budget a few years earlier.",
    "People started asking how I was making them.",
    "Then the questions changed.",
    "Could AI help with research? What tools should our team be using? Could we train our employees? Where should we implement AI? When does it make sense to build something custom?",
    "Those conversations became the foundation for Pixel Narratives.",
    "Before starting the company, I spent more than 15 years in financial services, working closely with business owners and leadership teams. That experience taught me something I've carried into this business.",
    "People are usually pretty good at the thing they do every day. Asking them to learn an entirely new technology on top of everything else isn't always realistic.",
    "It also taught me the value of listening, understanding what someone wants to accomplish, and helping them work through the decisions that get them there.",
    "That's how I approach AI.",
    FOUNDER_BOOK_PARAGRAPH,
    "But the point of all that experimenting isn't to collect more tools.",
    "It's to figure out what's possible, what works, and how to put it to use for somebody else.",
    "That's what we do at Pixel Narratives.",
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
              "Pixel Narratives is an AI implementation company based in Madison, Mississippi, serving businesses across Mississippi, Alabama, the Memphis area, and Atlanta.",
            additionalType: "AboutPage",
          }),
          buildBreadcrumbs([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <section className="mx-auto w-full max-w-7xl px-6 pt-20 md:px-10 md:pt-28">
        <div className="max-w-3xl">
          <p className="pn-kicker text-[var(--muted)]">About</p>
          <h1 className="pn-page-title mt-5">About Pixel Narratives</h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        <article className="grid gap-12 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:items-start md:gap-12 lg:gap-20">
          <div className="overflow-hidden rounded-[28px] bg-black">
            <Image
              src={founder.image}
              alt={founder.name}
              width={1200}
              height={1500}
              priority
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Founder
            </p>
            <h2 className="mt-4 text-4xl leading-none md:text-5xl">
              {founder.name}
            </h2>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              {founder.title}
            </p>
            <div className="mt-5">
              <SocialProfileLink
                profile={FOUNDER_LINKEDIN_PROFILE}
                showLabel
              />
            </div>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {founder.body.map((paragraph) => (
                <p key={paragraph}>
                  {paragraph === FOUNDER_BOOK_PARAGRAPH ? (
                    <>
                      I&apos;ve spent a lot of time experimenting with what
                      these tools can do, from building software and
                      business systems to creating videos, music, and
                      marketing campaigns. I even wrote{" "}
                      <Link
                        href="/book"
                        className="text-[var(--foreground)] transition hover:opacity-80"
                      >
                        a book about the opportunities AI creates when
                        people are willing to try something new
                      </Link>
                      .
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              About Pixel Narratives
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Pixel Narratives is an AI implementation company based in
              Madison, Mississippi. We help businesses figure out where AI
              makes sense, how to put it to work, and how to get value from it.
            </p>
            <p>
              We work with businesses across Mississippi, Alabama, the
              Memphis area, and Atlanta.{" "}
              <Link
                href="/serving-the-south"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Who we work with
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              AI Is a Tool
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              There&apos;s a lot of attention on what AI can do. We think the
              more important question is what it can do for your business.
            </p>
            <p>
              That starts with understanding your people, how work gets done,
              what your customers need, and what you&apos;re trying to
              accomplish.
            </p>
            <p>
              Sometimes the answer is a tool your team already has. Sometimes
              it&apos;s training, a better process, or something custom.
            </p>
            <p className="text-[var(--foreground)]">
              The technology is only useful if it helps you get somewhere.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How We Work
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Most business owners and their teams are already good at what
              they do. They don&apos;t necessarily have time to keep up with
              every new AI tool, figure out which ones matter, and learn how to
              use them well.
            </p>
            <p>That&apos;s where we come in.</p>
            <p>
              We listen. We learn how your business works. We help you identify
              opportunities worth pursuing and put them into practice.
            </p>
            <p>That could mean a single project or an ongoing partnership.</p>
            <p className="text-[var(--foreground)]">
              The goal is simple. Help your business save time, reach more
              customers, and take advantage of what AI makes possible.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
          <div className="overflow-hidden rounded-[28px]">
            <Image
              src="/images/home-hero.png"
              alt="Silhouettes in a glass office looking out over a city, overlaid with a network of connections"
              width={1024}
              height={438}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="aspect-[1024/438] h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              In the News
            </h2>
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
                  <h3 className="mt-2 text-2xl leading-snug md:text-3xl">
                    <Link
                      href={newsPath(item)}
                      className="transition hover:opacity-80"
                    >
                      {item.title}
                    </Link>
                  </h3>
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
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pn-section md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The Bottom Line
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>We&apos;re not here to impress you with AI.</p>
            <p>
              We&apos;re here to help you use it
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
              Let&apos;s put AI to work for your business.
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

      <p className="mx-auto w-full max-w-7xl px-6 pb-8 text-sm text-[var(--muted)] md:px-10">
        <Link href="/ai-info" className="transition hover:text-[var(--foreground)]">
          Official information
        </Link>{" "}
        for search and AI assistants.
      </p>
      <Footer />
    </main>
  );
}

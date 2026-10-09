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
    "Pixel Narratives is an AI implementation company based in Madison, Mississippi, serving businesses across Mississippi, Alabama, and the Memphis area.",
  path: "/about",
  image: "/images/about-jordan.jpg",
  imageAlt: "Jordan Maruszak, founder of Pixel Narratives",
});

const founder = {
  name: "Jordan Maruszak",
  title: "Founder, Chief AI Officer and Head of Strategy",
  image: "/images/about-jordan.jpg",
  body: [
    "Pixel Narratives started with a camera. Sort of.",
    "In 2025, I started experimenting with AI video, creating cinematic commercials, ridiculous characters, and ads that probably would have required a Hollywood budget a few years earlier.",
    "People started asking how I was making them.",
    "Then the questions changed.",
    "Could AI help with research? What tools should our team be using? Could we train our employees? Where should we implement AI? When does it make sense to build something custom?",
    "Those conversations became the foundation for Pixel Narratives.",
    "Before starting the company, I spent more than 15 years in financial services, working closely with business owners and leadership teams. That experience taught me something I’ve carried into this business.",
    "People are usually pretty good at the thing they do every day. Asking them to learn an entirely new technology on top of everything else isn’t always realistic.",
    "It also taught me the value of listening, understanding what someone wants to accomplish, and helping them work through the decisions that get them there.",
    "That’s how I approach AI.",
    "I’ve spent a lot of time experimenting with what these tools can do, from building software and business systems to creating videos, music, and marketing campaigns. I even wrote a book about the opportunities AI creates when people are willing to try something new, Try the D*mn Door.",
    "But the point of all that experimenting isn’t to collect more tools.",
    "It’s to figure out what’s possible, what works, and how to put it to use for somebody else.",
    "That’s what we’re building at Pixel Narratives.",
  ],
} as const;

const aboutServices = [
  {
    name: "Implementation",
    body: "Bring us in to help figure out where AI fits in your business and how to put it to work. We can help with a specific project, guide your team through adoption, build custom solutions, or serve as an ongoing AI partner.",
    href: "/automation",
    label: "Explore Implementation",
  },
  {
    name: "Training",
    body: "Get your team up to speed on the AI tools that matter to their work. From ChatGPT, Claude, and Microsoft Copilot to AI video, research, and creative production. Training is built around your people and what they need to accomplish.",
    href: "/training",
    label: "Explore Training",
  },
  {
    name: "Websites + Online Visibility",
    body: "We build websites that look good, work well, and help customers find you. We also help businesses improve their visibility in traditional and AI powered search.",
    href: "/websites",
    label: "Explore Websites + Visibility",
  },
  {
    name: "Marketing",
    body: "We create advertising, video, and campaigns designed to get attention and bring in business. AI gives us new ways to produce creative work, but the idea still has to be good.",
    href: "/marketing",
    label: "Explore Marketing",
  },
] as const;

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
              "Pixel Narratives is an AI implementation company based in Madison, Mississippi, serving businesses across Mississippi, Alabama, and the Memphis area.",
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
            About Pixel Narratives
          </h1>
        </div>
        <div className="mt-12 overflow-hidden rounded-[28px]">
          <Image
            src="/images/home-hero.png"
            alt="Silhouettes in a glass office looking out over a city, overlaid with a network of connections"
            width={1024}
            height={438}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="aspect-[1024/438] h-auto w-full object-cover"
          />
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
            <p className="text-[var(--foreground)]">We build a better way.</p>
            <p>
              Pixel Narratives is an AI implementation company based in
              Madison, Mississippi. We help businesses figure out where AI
              makes sense, how to put it to work, and how to get value from it.
            </p>
            <p>
              Pixel Narratives is based in Madison, Mississippi. We work with
              businesses across Mississippi, Alabama, and the Memphis area,
              helping them put AI to work in ways that make sense for their
              people and their business.{" "}
              <Link
                href="/serving-the-south"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                See where we work
              </Link>
              .
            </p>
            <p className="text-[var(--foreground)]">
              Implementation. Training. Websites + Online Visibility.
              Marketing.
            </p>
            <p>
              For official company facts, services, and service areas, see{" "}
              <Link
                href="/ai-info"
                className="text-[var(--foreground)] transition hover:opacity-80"
              >
                Official Information About Pixel Narratives
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
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
              Sometimes the answer is an AI tool your team already has.
              Sometimes it&apos;s training, a better process, or something
              custom that needs to be built.
            </p>
            <p className="text-[var(--foreground)]">
              The technology is only useful if it helps you get somewhere.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              How We Work
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Most business owners and their teams are already good at what
              they do. They don&apos;t necessarily have the time to keep up
              with every new AI tool, figure out which ones matter, and learn
              how to use them well.
            </p>
            <p>That&apos;s where we come in.</p>
            <p>
              We listen. We learn how your business works. We help you identify
              opportunities worth pursuing and figure out how to put them into
              practice.
            </p>
            <p>
              That might be a single project with a defined finish line or an
              ongoing relationship where we help you navigate AI as your
              business grows.
            </p>
            <p className="text-[var(--foreground)]">
              Either way, the goal is the same. Save time, find more customers,
              and make the business work better.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
          <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Founder
          </h2>
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
                <h3 className="text-3xl leading-none md:text-4xl">
                  {founder.name}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {founder.title}
                </p>
                <div className="mt-5">
                  <SocialProfileLink
                    profile={FOUNDER_LINKEDIN_PROFILE}
                    showLabel
                  />
                </div>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {founder.body.map((paragraph) => (
                    <p key={paragraph}>
                      {paragraph ===
                      "I’ve spent a lot of time experimenting with what these tools can do, from building software and business systems to creating videos, music, and marketing campaigns. I even wrote a book about the opportunities AI creates when people are willing to try something new, Try the D*mn Door." ? (
                        <>
                          I&apos;ve spent a lot of time experimenting with what
                          these tools can do, from building software and
                          business systems to creating videos, music, and
                          marketing campaigns. I even wrote a book about the
                          opportunities AI creates when people are willing to
                          try something new, <em>Try the D*mn Door</em>.
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              What We Do
            </h2>
          </div>
          <div className="min-w-0">
            <div className="mt-8 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2">
              {aboutServices.map((service) => (
                <div
                  key={service.name}
                  className="flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] p-6"
                >
                  <h3 className="text-balance break-words text-2xl leading-snug lg:text-3xl">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                    {service.body}
                  </p>
                  <p className="mt-5 text-base">
                    <Link
                      href={service.href}
                      className="text-[var(--foreground)] transition hover:opacity-80"
                    >
                      {service.label}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
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
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              The Bottom Line
            </h2>
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

import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { MARKETING_TO_WEB_INTEL_URL } from "../../lib/webIntelligence";

export const metadata: Metadata = {
  title: "About Pixel Narratives | AI Creative Studio & AI Consulting",
  description:
    "Meet Pixel Narratives, an AI-native creative and implementation studio headquartered in Mississippi, with roots in the South and partnerships across the country.",
  alternates: { canonical: "/about" },
};

const founder = {
  name: "Jordan Maruszak",
  title: "Co-Founder, Head of Narrative & Strategy",
  image: "/images/about-jordan.jpg",
  body: [
    "Jordan brings 16 years of experience working alongside business owners and leadership teams to navigate complex decisions, align strategy, and drive long-term outcomes.",
    "At Pixel Narratives, he leads narrative and strategic direction by helping companies cut through noise, clarify what matters, and turn ideas into work that actually moves the needle.",
    "His focus is simple: every project should have a clear purpose, a strong point of view, and a measurable impact.",
  ],
} as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

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
              Pixel Narratives is headquartered in Mississippi, with roots in
              the South and partnerships across the country. We work with
              business owners who want to use AI and creative strategy to move
              faster, operate more efficiently, and stand out in competitive
              markets.
            </p>
            <p>
              We started with creative work, building high-impact ads designed
              to capture attention.
            </p>
            <p>
              That work made something clear: attention is only part of the
              equation.
            </p>
            <p>Today, we operate in three lanes:</p>
            <ol className="mt-2 list-decimal space-y-3 pl-6 marker:text-[var(--muted)]">
              <li>We build high-impact creative for brands.</li>
              <li>
                We help companies implement AI and train their teams so they can
                grow faster and operate more efficiently.
              </li>
              <li>
                We help businesses better incorporate SEO and AI visibility into
                their websites.
              </li>
            </ol>
            <p>
              Some clients engage us for one.
              <br />
              Others engage us for all three.
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
              actually want to watch.
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
              We help clients in three primary ways: high-impact advertising, AI
              adoption with team enablement, and website visibility and design.
            </p>
            <div className="mt-8 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="min-w-0 overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
                <h2 className="text-balance break-words text-2xl leading-snug lg:text-3xl">
                  Narrative Intelligence
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  High-impact, AI-driven creative designed to capture attention
                  and actually move people.
                </p>
              </div>
              <div className="min-w-0 overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
                <h2 className="text-balance break-words text-2xl leading-snug lg:text-3xl">
                  Business Intelligence
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  Helping companies implement AI in a way that drives real
                  operational results not just experimentation.
                </p>
              </div>
              <div className="flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
                <h2 className="text-balance break-words text-2xl leading-snug lg:text-3xl">
                  Web Intelligence
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  A practical read on your website for SEO, AI visibility, and
                  improvement priorities.
                </p>
                <p className="mt-5 text-base">
                  <a
                    href={MARKETING_TO_WEB_INTEL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--foreground)] transition hover:opacity-80"
                  >
                    Open Web Intelligence
                  </a>
                </p>
              </div>
            </div>
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
              Ready to see what AI can actually do for your business?
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

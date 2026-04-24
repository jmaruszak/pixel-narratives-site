import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "About Pixel Narratives | AI Creative Studio & AI Consulting",
  description:
    "Meet Pixel Narratives, an AI-native creative and implementation studio headquartered in Mississippi, with roots in the South and partnerships across the country.",
  alternates: { canonical: "/about" },
};

const team = [
  {
    name: "Jordan Maruszak",
    title: "Co-Founder, Head of Narrative & Strategy",
    image: "/images/about-jordan.jpg",
    body: [
      "Jordan brings 16 years of experience working alongside business owners and leadership teams to navigate complex decisions, align strategy, and drive long-term outcomes.",
      "At Pixel Narratives, he leads narrative and strategic direction by helping companies cut through noise, clarify what matters, and turn ideas into work that actually moves the needle.",
      "His focus is simple: every project should have a clear purpose, a strong point of view, and a measurable impact.",
    ],
  },
  {
    name: "Lindsey Gresham",
    title: "Co-Founder, Head of Strategic Relationships",
    image: "/images/about-lindsey-placeholder.jpg",
    body: [
      "Lindsey brings 16 years of experience building trusted relationships and guiding clients through important decisions with clarity and confidence.",
      "At Pixel Narratives, she leads strategic relationships and partnerships ensuring every engagement is aligned, intentional, and built for long-term value.",
      "She is the steady hand across the table keeping communication clear, expectations grounded, and clients confident in both the process and the outcome.",
    ],
  },
  {
    name: "Amber Rogers",
    title: "Co-Founder, Chief Momentum Officer",
    image: "/images/about-amber-placeholder.jpg",
    body: [
      "Amber brings over 15 years of experience in operations, planning, and execution turning complex ideas into organized, actionable work.",
      "At Pixel Narratives, she drives momentum across every project ensuring timelines hold, details are handled, and nothing falls through the cracks.",
      "She is the force behind delivery making sure strategy doesn’t stall and great ideas get finished.",
    ],
  },
];

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
              Most businesses aren’t struggling with access to AI.
              <br />
              They’re struggling with how to actually use it.
            </p>
            <p>
              There are more tools than ever,
              <br />
              but not a lot of clarity on what to do with them.
            </p>
            <p>That’s where things break down.</p>
            <p>That’s what we fix.</p>
            <p>
              We help businesses turn AI into something real with clear
              direction, better operations, and creative that actually performs.
            </p>
            <p>
              We started with creative work, building high-impact ads designed
              to capture attention.
            </p>
            <p>
              That work made something clear: attention is only part of the
              equation.
            </p>
            <p>Today, we operate in two lanes:</p>
            <p>
              We build high-impact creative for brands.
              <br />
              We help companies implement AI-driven systems to grow faster and
              operate more efficiently.
            </p>
            <p>
              Some clients engage us for one.
              <br />
              Others engage us for both.
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
              We bring over 15 years of experience each working alongside
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
            The Team
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[28px] border border-white/8 bg-white/[0.02] p-6"
              >
                <div className="overflow-hidden rounded-[20px] border border-white/8 bg-black">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={1200}
                    height={1500}
                    className="aspect-[4/5] h-auto w-full object-cover"
                  />
                </div>
                <h2 className="mt-6 text-3xl leading-none md:text-4xl">
                  {member.name}
                </h2>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                  {member.title}
                </p>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--muted)] md:text-base">
                  {member.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
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
          <div>
            <p className="text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              We operate across two core areas:
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
                <h2 className="text-3xl leading-none">
                  Creative (Ads Built to Be Shared)
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  High-impact, AI-driven creative designed to capture attention
                  and actually move people.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
                <h2 className="text-3xl leading-none">
                  Intelligence Layer (AI for Business)
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                  Helping companies implement AI in a way that drives real
                  operational results not just experimentation.
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

import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "How to Use AI in Your Business | Pixel Narratives",
  description:
    "A practical guide for business owners on using AI without wasting money, starting with outcomes, workflows, education, and measurable results.",
  alternates: { canonical: "/how-to-use-ai-in-your-business" },
};

export default function HowToUseAiInYourBusinessPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <article>
        <section className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-24">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Intelligence Layer
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
            How to Use AI in Your Business (Without Wasting Money)
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Working with business owners, I see the same thing over and over
              with AI.
            </p>
            <p>
              They sign up for a handful of tools, experiment for a few weeks,
              and end up with more complexity, not less. No real time saved. No
              meaningful change in how the business runs.
            </p>
            <p>
              The problem isn’t the technology, but the approach.
              <br />
              We need to change how we think about AI.
            </p>
          </div>
        </section>

        <section className="border-t border-white/8">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
            <div>
              <h2 className="text-4xl leading-none md:text-5xl">
                Where Most AI Efforts Go Wrong
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>Most businesses jump straight to tools.</p>
              <p>But tools aren’t the starting point, outcomes are.</p>
              <p>
                What are you actually trying to accomplish?
                <br />
                Save time? Improve speed? Increase output? Reduce errors?
              </p>
              <p>
                That answer often looks different across teams, which is why AI
                usually isn’t one big rollout, it’s a series of focused projects.
              </p>
              <p>There are a few other friction points that show up almost every time:</p>
              <ul className="space-y-2 text-[var(--foreground)]">
                <li>Layering AI on top of broken processes</li>
                <li>No clear use case or success metric</li>
                <li>Not bringing the team along (education matters more than people think)</li>
                <li>Expecting results without changing how work gets done</li>
              </ul>
              <p>AI doesn’t fix bad workflows. It amplifies them.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
            <div>
              <h2 className="text-4xl leading-none md:text-5xl">
                Where AI Actually Works
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>
                Where we’ve seen the most success is in repeatable, operational
                work:
              </p>
              <ul className="space-y-2 text-[var(--foreground)]">
                <li>Email triage and prioritization</li>
                <li>CRM updates and data entry</li>
                <li>Proposal drafting</li>
                <li>Reporting and summaries</li>
                <li>Customer support workflows</li>
                <li>Content production systems</li>
                <li>Research and analysis</li>
                <li>Marketing and Advertising workflows</li>
              </ul>
              <p>But the goal isn’t to “use AI.”</p>
              <p>
                The goal is to remove friction so your team can move faster and
                focus on higher-value work.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
            <div>
              <h2 className="text-4xl leading-none md:text-5xl">
                A Better Way to Approach AI
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>Start small and be intentional.</p>
              <p>Pick one problem:</p>
              <ul className="space-y-2 text-[var(--foreground)]">
                <li>Time-consuming</li>
                <li>Repeatable</li>
                <li>A clear bottleneck</li>
              </ul>
              <p>Build a simple workflow around it.</p>
              <p>Then measure what actually changed:</p>
              <ul className="space-y-2 text-[var(--foreground)]">
                <li>Time saved</li>
                <li>Speed improved</li>
                <li>Output quality</li>
              </ul>
              <p>From there, expand, team by team, use case by use case.</p>
              <p>At the same time, two things matter more than most people expect:</p>
              <ul className="space-y-2 text-[var(--foreground)]">
                <li>Education — getting your team comfortable with the tools</li>
                <li>Behavior — changing how work actually gets done</li>
              </ul>
              <p>That’s where most implementations stall.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
            <div>
              <h2 className="text-4xl leading-none md:text-5xl">
                A Shift That’s Happening Right Now
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>One thing that’s changed quickly:</p>
              <p>
                The cost and complexity of building tools has dropped
                dramatically.
              </p>
              <p>
                A year ago, software was something you committed to long-term.
              </p>
              <p>
                Now, you can build something for a specific use case, use it once
                a month, once a year, or even one time, and move on.
              </p>
              <p>That changes how you think about building.</p>
              <p>
                Not everything has to be permanent.
                <br />
                Some solutions are disposable and that’s okay.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/8">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10">
            <div>
              <h2 className="text-4xl leading-none md:text-5xl">
                Where Pixel Narratives Fits
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
              <p>
                We help businesses identify where AI can actually create
                leverage, then build the workflows and systems to make it real.
              </p>
              <p>
                Not theory. Not experimentation.
                <br />
                Clear outcomes, built into how your business actually operates.
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
                Want to see where AI could actually work in your business?
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
      </article>

      <Footer />
    </main>
  );
}

import StatementBand from "../editorial/StatementBand";
import HomeCapabilities from "./HomeCapabilities";
import HomeEngagements from "./HomeEngagements";
import HomeHero from "./HomeHero";
import HomeProof from "./HomeProof";

export default function HomeMotionExperience() {
  return (
    <>
      <HomeHero />
      <section className="home-scene">
        <div className="mx-auto flex min-h-[78vh] w-full max-w-7xl flex-col justify-center px-6 py-28 md:px-10 lg:min-h-[88vh]">
          <h2 className="home-scene-enter pn-display max-w-5xl text-[clamp(3.25rem,9vw,8rem)]">
            You know your business. We know AI.
          </h2>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            You don&apos;t need to keep up with every new tool or figure
            everything out on your own. We bring the expertise to help you
            identify opportunities and turn them into practical results.
          </p>
        </div>
      </section>
      <section className="home-scene">
        <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-28 md:px-10 md:py-36 lg:min-h-[78vh]">
          <p className="home-scene-enter pn-kicker text-[var(--muted)]">
            The Opportunity
          </p>
          <h2 className="pn-display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)]">
            There&apos;s probably a better way to do this.
          </h2>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            <p>
              Every business has things that could work better. Processes that
              take too long. Opportunities that haven&apos;t been explored.
              Ideas that never quite make it off the ground.
            </p>
            <p>
              AI is changing what&apos;s possible. But figuring out where to
              start, what makes sense, and how to make it work is another
              matter.
            </p>
            <p>That&apos;s where we come in.</p>
          </div>
        </div>
      </section>
      <HomeCapabilities />
      <HomeProof />
      <HomeEngagements />
      <StatementBand
        tone="light"
        headline="Let's put AI to work for your business."
        lede="Whether you have a specific project in mind or you're exploring what's possible, we'd love to hear from you."
        action={{ href: "/contact", label: "Start a Conversation" }}
      />
    </>
  );
}

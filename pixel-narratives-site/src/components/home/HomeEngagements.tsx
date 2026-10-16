import Link from "next/link";

const WAYS = [
  {
    name: "Project-Based",
    body: "Assessments, implementation, websites, campaigns, and training.",
  },
  {
    name: "Ongoing Partnership",
    body: "Strategic guidance and hands-on execution as your business evolves.",
  },
] as const;

export default function HomeEngagements() {
  return (
    <section className="home-scene">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-6 py-28 md:px-10 md:py-36">
        <p className="home-scene-enter pn-kicker text-[var(--muted)]">
          Work With Us
        </p>
        <h2 className="pn-display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,6.5rem)]">
          Start with a project. Build a partnership.
        </h2>
        <div className="mt-10 max-w-2xl space-y-6 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          <p>
            Some businesses come to us with a specific challenge. Others want
            an ongoing partner to help them figure out what&apos;s next.
          </p>
          <p>We work both ways.</p>
        </div>
        <ul className="mt-16 grid max-w-4xl gap-12 md:grid-cols-2">
          {WAYS.map((way) => (
            <li key={way.name}>
              <h3 className="text-3xl leading-none md:text-4xl">{way.name}</h3>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-[var(--muted)] md:text-lg">
                {way.body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-12">
          <Link
            href="/work-with-us"
            className="inline-flex min-h-11 items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
          >
            Explore How We Work Together
          </Link>
        </p>
      </div>
    </section>
  );
}

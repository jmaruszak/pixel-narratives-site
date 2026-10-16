import Link from "next/link";
import { ENGAGEMENTS } from "../lib/engagements";

export default function WorkWithUsBand({
  heading = "How to start",
  intro = "Choose how you'd like to work with us.",
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Work With Us
          </p>
          <h2 className="mt-4 text-4xl leading-none md:text-6xl">{heading}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {intro}
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {ENGAGEMENTS.map((engagement) => (
            <li key={engagement.id}>
              <Link
                href={`/work-with-us#${engagement.id}`}
                className="block h-full rounded-[24px] border border-white/8 bg-white/[0.02] p-7 transition hover:border-white/16 hover:bg-white/[0.04] md:p-8"
              >
                <h3 className="text-2xl leading-none md:text-3xl">
                  {engagement.name}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  {engagement.price}
                </p>
                {"lede" in engagement && engagement.lede ? (
                  <p className="mt-5 text-base leading-relaxed text-[var(--foreground)]">
                    {engagement.lede}
                  </p>
                ) : null}
                <p className="mt-5 text-base leading-relaxed text-[var(--muted)]">
                  {engagement.body}
                </p>
                {"note" in engagement && engagement.note ? (
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {engagement.note}
                  </p>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/work-with-us"
            className="inline-flex min-h-11 items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
          >
            See how we work together
          </Link>
        </p>
      </div>
    </section>
  );
}

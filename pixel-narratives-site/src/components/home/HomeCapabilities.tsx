import Link from "next/link";
import { SERVICES } from "../../lib/services";

export default function HomeCapabilities() {
  return (
    <section className="home-scene">
      <div className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <p className="home-scene-enter pn-kicker text-[var(--muted)]">What We Do</p>
        <ul className="mt-10 divide-y divide-white/8 border-y border-white/8">
          {SERVICES.map((service) => (
            <li key={service.id}>
              <Link
                href={service.href}
                className="group grid gap-3 py-8 transition md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-baseline md:gap-12 md:py-10"
              >
                <h3 className="text-3xl leading-none md:text-4xl">
                  {service.name}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {service.outcome}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
          >
            What We Do
          </Link>
        </p>
      </div>
    </section>
  );
}

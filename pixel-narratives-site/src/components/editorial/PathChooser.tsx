import { SERVICES } from "../../lib/services";

export default function PathChooser({
  heading = "What are you trying to improve?",
}: {
  heading?: string;
}) {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        <h2 className="pn-display max-w-4xl">{heading}</h2>
        <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((service) => (
            <li key={service.id}>
              <a
                href={service.href}
                className="group grid gap-3 py-8 transition md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-baseline md:gap-10 md:py-10"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)] group-hover:text-[var(--foreground)]">
                  {service.problem}
                </p>
                <div>
                  <p className="text-3xl leading-none md:text-5xl">
                    {service.name}
                  </p>
                  {service.id === "automation" ? (
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                      AI + Automation + Business Systems
                    </p>
                  ) : null}
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    {service.outcome}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function CarePricing({
  level = "starter",
  context = "general",
}: {
  level?: "starter" | "custom";
  context?: "general" | "implementation";
}) {
  return (
    <section className="border-t border-white/8">
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        {level === "starter" ? (
          <>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                After Launch
              </p>
              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                We&apos;ll keep it working.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Some projects need ongoing hosting, maintenance, or support
                after they go live. When they do, we keep that simple too.
              </p>
            </div>
            <article className="mt-12 max-w-3xl rounded-[24px] border border-white/12 bg-white/[0.02] p-8 md:p-10">
              <h3 className="text-2xl leading-none md:text-3xl">
                Hosting + Care
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                $175/month
              </p>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                For websites, internal tools, and other projects that need us
                to stay involved after launch.
              </p>
              <ul className="mt-8 space-y-2 text-sm text-[var(--foreground)] md:text-base">
                <li>Hosting and infrastructure</li>
                <li>Monitoring and backups</li>
                <li>Routine maintenance</li>
                <li>Small updates and changes</li>
                <li>Help when something needs attention</li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                New features, larger changes, and additional projects are
                scoped separately.
              </p>
              <p className="mt-6 text-base font-medium leading-relaxed text-[var(--foreground)]">
                Creative Quick Wins don&apos;t require an ongoing plan.
              </p>
            </article>
          </>
        ) : context === "implementation" ? (
          <>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                After Launch
              </p>
              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                We stay involved where it makes sense.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Larger websites, internal tools, dashboards, and implementation
                projects often need ongoing hosting, maintenance, monitoring,
                or support.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Ongoing care typically runs{" "}
                <strong className="font-medium text-[var(--foreground)]">
                  $250–$400/month
                </strong>
                , depending on what we&apos;re responsible for and how much
                ongoing support is needed.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                That keeps what we built working. New features, larger changes,
                and new projects are scoped separately.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                After Launch
              </p>
              <h2 className="mt-4 text-3xl leading-none md:text-4xl">
                We can keep taking care of it.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Your website doesn&apos;t have to become another thing on your
                list.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                Ongoing hosting and care typically runs{" "}
                <strong className="font-medium text-[var(--foreground)]">
                  $250–$400/month
                </strong>
                , depending on the size of the site and the level of ongoing
                support you need.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                That can include hosting, monitoring, backups, routine
                maintenance, and small updates along the way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                New pages, features, campaigns, or larger changes are scoped
                separately.
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

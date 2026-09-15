export default function ProofPiece({
  eyebrow,
  title,
  problem,
  built,
  changed,
  imageSrc,
  imageAlt,
  href,
  hrefLabel,
}: {
  eyebrow: string;
  title: string;
  problem: string;
  built: string;
  changed: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <article className="grid items-start gap-8 border-t border-white/8 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
      <div>
        {imageSrc ? (
          <div className="relative mb-8 min-h-[14rem] overflow-hidden rounded-[24px] md:min-h-[22rem]">
            <img
              src={imageSrc}
              alt={imageAlt ?? ""}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="mb-8 flex min-h-[14rem] items-end rounded-[24px] border border-dashed border-white/15 bg-[var(--surface)] p-6 text-sm text-[var(--muted)] md:min-h-[18rem]">
            Screenshot coming soon
          </div>
        )}
        <p className="pn-kicker">{eyebrow}</p>
        <h3 className="mt-4 text-3xl leading-none md:text-5xl">{title}</h3>
      </div>
      <div className="space-y-8">
        <div>
          <p className="pn-kicker">The problem</p>
          <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {problem}
          </p>
        </div>
        <div>
          <p className="pn-kicker">What we built</p>
          <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {built}
          </p>
        </div>
        <div>
          <p className="pn-kicker">What changed</p>
          <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            {changed}
          </p>
        </div>
        {href ? (
          <a
            href={href}
            className="inline-flex items-center text-sm text-[var(--foreground)] transition hover:opacity-80"
          >
            {hrefLabel ?? "Learn more"}
          </a>
        ) : null}
      </div>
    </article>
  );
}

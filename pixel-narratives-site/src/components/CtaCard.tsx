import type { CtaAction } from "../lib/destinationCtas";

export type CtaCardProps = {
  eyebrow: string;
  headline: string;
  body: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
  compact?: boolean;
};

function CtaLink({
  action,
  variant,
}: {
  action: CtaAction;
  variant: "filled" | "outline";
}) {
  const className =
    variant === "filled"
      ? "cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
      : "cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5";

  return (
    <a
      href={action.href}
      className={className}
      {...(action.external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {action.label}
    </a>
  );
}

export default function CtaCard({
  eyebrow,
  headline,
  body,
  primaryAction,
  secondaryAction,
  compact = false,
}: CtaCardProps) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-white/[0.02] p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 leading-none ${compact ? "text-2xl md:text-3xl" : "max-w-3xl text-3xl md:text-5xl"}`}
      >
        {headline}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
        {body}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <CtaLink action={primaryAction} variant="filled" />
        {secondaryAction ? (
          <CtaLink action={secondaryAction} variant="outline" />
        ) : null}
      </div>
    </div>
  );
}

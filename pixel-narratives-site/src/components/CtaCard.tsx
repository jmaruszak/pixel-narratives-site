import type { CtaAction } from "../lib/destinationCtas";

export type CtaCardProps = {
  eyebrow: string;
  headline: string;
  outcome?: string;
  body: string;
  primaryAction: CtaAction;
  secondaryAction?: CtaAction;
  compact?: boolean;
  equalHeight?: boolean;
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40";

function CtaLink({
  action,
  variant,
}: {
  action: CtaAction;
  variant: "filled" | "outline";
}) {
  const className =
    variant === "filled"
      ? `cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90 ${focusRing}`
      : `cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5 ${focusRing}`;

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
  outcome,
  body,
  primaryAction,
  secondaryAction,
  compact = false,
  equalHeight = compact,
}: CtaCardProps) {
  return (
    <div
      className={`pn-card p-8 md:p-10 ${equalHeight ? "flex h-full flex-col" : ""}`}
    >
      <p className="pn-eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 leading-none ${compact ? "text-2xl md:text-3xl" : "max-w-3xl text-3xl md:text-5xl"}`}
      >
        {headline}
      </h2>
      {outcome ? (
        <p className="mt-3 text-base text-[var(--foreground)] md:text-lg">
          {outcome}
        </p>
      ) : null}
      <p className="pn-body mt-6 max-w-2xl">{body}</p>
      <div
        className={`flex flex-wrap gap-4 ${equalHeight ? "mt-auto pt-8" : "mt-8"}`}
      >
        <CtaLink action={primaryAction} variant="filled" />
        {secondaryAction ? (
          <CtaLink action={secondaryAction} variant="outline" />
        ) : null}
      </div>
    </div>
  );
}

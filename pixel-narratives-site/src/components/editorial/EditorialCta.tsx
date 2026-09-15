import type { CtaAction } from "../../lib/destinationCtas";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40";

export default function EditorialCta({
  action,
  variant = "filled",
  light = false,
}: {
  action: CtaAction;
  variant?: "filled" | "outline";
  light?: boolean;
}) {
  const filled = light
    ? `inline-flex items-center rounded-full border border-black/15 bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--surface-light)] transition hover:opacity-90 ${focusRing}`
    : `cta-pulse-filled inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90 ${focusRing}`;
  const outline = light
    ? `inline-flex items-center rounded-full border border-black/20 px-5 py-2.5 text-sm text-[var(--ink)] transition hover:bg-black/5 ${focusRing}`
    : `cta-pulse-outline inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5 ${focusRing}`;

  return (
    <a
      href={action.href}
      className={variant === "filled" ? filled : outline}
      {...(action.external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {action.label}
    </a>
  );
}

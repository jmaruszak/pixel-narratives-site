import type { ReactNode } from "react";
import type { CtaAction } from "../../lib/destinationCtas";
import EditorialCta from "./EditorialCta";

export default function StatementBand({
  tone = "dark",
  kicker,
  headline,
  lede,
  action,
  children,
}: {
  tone?: "dark" | "light";
  kicker?: string;
  headline: ReactNode;
  lede?: string;
  action?: CtaAction;
  children?: ReactNode;
}) {
  const light = tone === "light";

  return (
    <section
      className={`border-t ${light ? "pn-band-light border-black/8" : "border-white/8"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 pn-section md:px-10">
        {kicker ? <p className="pn-kicker pn-muted">{kicker}</p> : null}
        <h2 className={`pn-display max-w-5xl ${kicker ? "mt-6" : ""}`}>
          {headline}
        </h2>
        {lede ? <p className="pn-lede mt-8">{lede}</p> : null}
        {children}
        {action ? (
          <div className="mt-10">
            <EditorialCta action={action} light={light} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

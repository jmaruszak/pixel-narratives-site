import type { ReactNode } from "react";
import type { CtaAction } from "../../lib/destinationCtas";
import EditorialCta from "./EditorialCta";

export default function SplitMedia({
  tone = "dark",
  kicker,
  headline,
  body,
  media,
  mediaAlt,
  mediaFirst = false,
  action,
  children,
}: {
  tone?: "dark" | "light";
  kicker?: string;
  headline: ReactNode;
  body?: string;
  media: string;
  mediaAlt: string;
  mediaFirst?: boolean;
  action?: CtaAction;
  children?: ReactNode;
}) {
  const light = tone === "light";

  return (
    <section
      className={`border-t ${light ? "pn-band-light border-black/8" : "border-white/8"}`}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pn-section md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:px-10">
        <div className={mediaFirst ? "md:order-2" : ""}>
          {kicker ? <p className="pn-kicker">{kicker}</p> : null}
          <h2 className={`max-w-xl text-4xl leading-none md:text-6xl ${kicker ? "mt-5" : ""}`}>
            {headline}
          </h2>
          {body ? <p className="pn-lede mt-6">{body}</p> : null}
          {children}
          {action ? (
            <div className="mt-8">
              <EditorialCta action={action} light={light} />
            </div>
          ) : null}
        </div>
        <div className={`relative min-h-[16rem] overflow-hidden rounded-[28px] md:min-h-[24rem] ${mediaFirst ? "md:order-1" : ""}`}>
          <img src={media} alt={mediaAlt} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

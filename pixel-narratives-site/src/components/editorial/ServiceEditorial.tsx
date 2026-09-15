import type { ReactNode } from "react";
import type { CtaAction } from "../../lib/destinationCtas";
import EditorialCta from "./EditorialCta";

export default function ServiceEditorial({
  tone = "dark",
  personalityHeadline,
  serviceName,
  supportLine,
  explanation,
  examples,
  media,
  mediaAlt,
  cta,
  reverse = false,
  children,
}: {
  tone?: "dark" | "light";
  personalityHeadline: ReactNode;
  serviceName: string;
  supportLine?: string;
  explanation: string;
  examples?: readonly string[];
  media?: string;
  mediaAlt?: string;
  cta: CtaAction;
  reverse?: boolean;
  children?: ReactNode;
}) {
  const light = tone === "light";

  return (
    <section
      className={`border-t ${light ? "pn-band-light border-black/8" : "border-white/8"}`}
    >
      <div
        className={`mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pn-section md:px-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div>
          <h2 className="pn-display max-w-xl">{personalityHeadline}</h2>
          <p className="pn-kicker mt-8">{serviceName}</p>
          {supportLine ? (
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
              {supportLine}
            </p>
          ) : null}
          <p className="pn-lede mt-5">{explanation}</p>
          {examples && examples.length > 0 ? (
            <ul className="mt-8 space-y-2 text-base md:text-lg">
              {examples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {children}
          <div className="mt-10">
            <EditorialCta action={cta} light={light} />
          </div>
        </div>
        {media ? (
          <div className="relative min-h-[18rem] overflow-hidden rounded-[28px] lg:min-h-[28rem]">
            <img
              src={media}
              alt={mediaAlt ?? ""}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

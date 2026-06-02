import type { ReactNode } from "react";

type NextStepSectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  showGridAccent?: boolean;
};

export default function NextStepSection({
  children,
  className = "",
  contentClassName = "",
  showGridAccent = false,
}: NextStepSectionProps) {
  return (
    <section
      className={`next-step-section border-t border-white/8 ${className}`.trim()}
    >
      <div className="next-step-bg" aria-hidden />
      <div className="next-step-fade" aria-hidden />
      {showGridAccent ? (
        <div className="pn-grid-accent pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      ) : null}
      <div
        className={`next-step-content mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20 ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}

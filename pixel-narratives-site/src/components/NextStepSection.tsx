import type { ReactNode } from "react";

type NextStepSectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export default function NextStepSection({
  children,
  className = "",
  contentClassName = "",
}: NextStepSectionProps) {
  return (
    <section
      className={`next-step-section border-t border-white/8 ${className}`.trim()}
    >
      <div className="next-step-bg" aria-hidden />
      <div className="next-step-fade" aria-hidden />
      <div
        className={`next-step-content mx-auto w-full max-w-7xl px-6 py-16 md:px-10 md:py-20 ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}

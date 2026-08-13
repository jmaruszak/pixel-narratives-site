import type { ReactNode } from "react";

type CinematicPageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  contentScrim?: boolean;
  children?: ReactNode;
};

export default function CinematicPageHero({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  contentScrim = false,
  children,
}: CinematicPageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="hero-ambient-gradient pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-16 md:px-10 md:py-20">
        <div className="relative max-w-3xl">
          {contentScrim ? (
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-10 bg-[radial-gradient(ellipse_at_left_center,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.45)_45%,transparent_75%)] md:-inset-x-10 md:-inset-y-14"
              aria-hidden
            />
          ) : null}
          <div className="relative z-[1]">
            <h1 className="hero-entrance leading-none text-white font-semibold">
              <span className="block text-6xl md:text-8xl">{title}</span>
              {subtitle ? (
                <span className="block text-3xl text-white/80 md:text-4xl">
                  {subtitle}
                </span>
              ) : null}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

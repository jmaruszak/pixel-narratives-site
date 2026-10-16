import Image from "next/image";
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
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="hero-ambient-gradient pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 py-16 md:px-10 md:py-20">
        <div className="relative max-w-5xl">
          {contentScrim ? (
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-10 bg-[radial-gradient(ellipse_at_left_center,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.45)_45%,transparent_75%)] md:-inset-x-10 md:-inset-y-14"
              aria-hidden
            />
          ) : null}
          <div className="relative z-[1]">
            <div className="hero-entrance">
              <h1 className="leading-none text-white">
                <span className="block pn-display">{title}</span>
              </h1>
              {subtitle ? (
                <p className="mt-4 text-2xl text-white/80 md:text-4xl">
                  {subtitle}
                </p>
              ) : null}
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

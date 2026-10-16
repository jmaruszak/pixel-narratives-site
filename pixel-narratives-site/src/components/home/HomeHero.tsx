"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SERVICE_LINE_SUMMARY } from "../../lib/services";

const HERO_POSTER = "/images/pixel-video-header-poster.jpg";
const HERO_VIDEO = "/videos/pixel-video-header.mp4";

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );

    const saveData = Boolean(
      "connection" in navigator &&
        (navigator as Navigator & { connection?: { saveData?: boolean } })
          .connection?.saveData,
    );

    const tryPlay = () => {
      if (motionQuery.matches && !saveData) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    tryPlay();
    motionQuery.addEventListener("change", tryPlay);
    return () => motionQuery.removeEventListener("change", tryPlay);
  }, []);

  return (
    <section className="overflow-x-clip bg-black">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-16 md:px-10 md:py-20 lg:min-h-[88vh] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch lg:gap-8 lg:py-0">
        <div className="flex min-w-0 flex-col justify-center lg:py-24">
          <p className="hero-entrance pn-kicker text-[var(--muted)]">
            Pixel Narratives
          </p>
          <h1 className="hero-entrance hero-entrance-delay-1 pn-display-hero mt-5 max-w-xl">
            Put AI to work in your business.
          </h1>
          <p className="hero-entrance hero-entrance-delay-2 mt-8 max-w-lg text-sm uppercase tracking-[0.12em] text-[var(--foreground)] md:text-base md:tracking-[0.22em]">
            {SERVICE_LINE_SUMMARY}
          </p>
          <div className="hero-entrance hero-entrance-delay-2 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="cta-pulse-filled inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90 sm:w-auto"
            >
              Start a Conversation
            </a>
            <a
              href="/services"
              className="inline-flex min-h-11 items-center text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              What We Do
            </a>
          </div>
        </div>

        <figure className="home-bleed-right relative min-w-0 overflow-hidden rounded-[24px] border border-white/10 bg-black md:rounded-[28px] lg:my-8 lg:min-h-[80vh] lg:rounded-l-[32px] lg:rounded-r-none lg:border-y-0 lg:border-r-0">
          <div className="home-hero-frame relative aspect-[16/9] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
            <div className="home-hero-scale absolute inset-0">
              <Image
                src={HERO_POSTER}
                alt="The Pixel Narratives studio, with the company mark on a wood-paneled wall"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 58vw"
                className="object-cover object-[72%_center]"
              />
              <video
                ref={videoRef}
                className="home-hero-video pointer-events-none absolute inset-0 h-full w-full object-cover object-[72%_center]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={HERO_POSTER}
                aria-hidden
              >
                <source src={HERO_VIDEO} type="video/mp4" />
              </video>
              <div
                className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/25 via-transparent to-transparent lg:block"
                aria-hidden
              />
              <div
                className="home-stage-grain pointer-events-none absolute inset-0"
                aria-hidden
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

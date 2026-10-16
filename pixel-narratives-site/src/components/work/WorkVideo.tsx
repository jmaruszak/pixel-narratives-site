"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function WorkVideo({
  title,
  videoSrc,
  posterSrc,
}: {
  title: string;
  videoSrc: string;
  posterSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function startPlayback() {
    setStarted(true);
    requestAnimationFrame(() => {
      void videoRef.current?.play().catch(() => undefined);
    });
  }

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-[24px] border border-white/8 bg-black">
        {started ? (
          <video
            ref={videoRef}
            className="block h-full w-full object-contain"
            controls
            playsInline
            preload="metadata"
            poster={posterSrc}
            src={videoSrc}
            aria-label={title}
          >
            Your browser does not support embedded video.
          </video>
        ) : (
          <button
            type="button"
            onClick={startPlayback}
            className="group relative block h-full w-full"
            aria-label={`Play ${title}`}
          >
            {posterSrc ? (
              <Image
                src={posterSrc}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : null}
            <span className="absolute inset-0 bg-black/35 transition group-hover:bg-black/20" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white">
              <span className="ml-1 block h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 text-2xl leading-none md:text-3xl">
        {title}
      </figcaption>
    </figure>
  );
}

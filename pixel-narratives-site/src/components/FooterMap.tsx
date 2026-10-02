"use client";

import { useState } from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Pixel%20Narratives%20Madison%20Mississippi&output=embed";

export default function FooterMap() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="relative h-44 overflow-hidden rounded-[20px] border border-white/8 bg-white/[0.02] md:h-36">
      {showMap ? (
        <iframe
          title="Pixel Narratives on Google Maps"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_68%)] p-6 text-center">
          <button
            type="button"
            onClick={() => setShowMap(true)}
            className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-white/5"
          >
            Show Map
          </button>
        </div>
      )}
    </div>
  );
}

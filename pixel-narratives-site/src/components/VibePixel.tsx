"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const VIBE_PIXEL_ID = "4pf9Kd";

let lastTrackedPath: string | null = null;

export default function VibePixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    if (lastTrackedPath === null) {
      lastTrackedPath = pathname;
      return;
    }

    if (lastTrackedPath === pathname) return;

    lastTrackedPath = pathname;
    window.vbpx?.("event", "page_view");
  }, [pathname]);

  return (
    <Script id="vibe-ctv-pixel" strategy="afterInteractive">
      {`
        !function(v,i,b,e,c,o){if(!v[c]){var s=v[c]=function(){s.process?s.process.apply(s,arguments):s.queue.push(arguments)};s.queue=[],s.b=1*new Date;var t=i.createElement(b);t.async=!0,t.src=e;var n=i.getElementsByTagName(b)[0];n.parentNode.insertBefore(t,n)}}(window,document,"script","https://s.vibe.co/vbpx.js","vbpx");
        vbpx('init','${VIBE_PIXEL_ID}');
        vbpx('event', 'page_view');
      `}
    </Script>
  );
}

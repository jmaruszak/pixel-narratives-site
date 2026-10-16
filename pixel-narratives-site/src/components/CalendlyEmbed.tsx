"use client";

import { useEffect, useRef } from "react";

const CALENDLY_WIDGET_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

function loadCalendlyScript() {
  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_WIDGET_SRC}"]`,
  );
  if (existing) {
    return existing;
  }

  const script = document.createElement("script");
  script.src = CALENDLY_WIDGET_SRC;
  script.async = true;
  document.body.appendChild(script);
  return script;
}

export default function CalendlyEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function mountWidget() {
      if (!el) return;
      el.replaceChildren();
      window.Calendly?.initInlineWidget({
        url,
        parentElement: el,
      });
    }

    if (window.Calendly) {
      mountWidget();
      return;
    }

    const script = loadCalendlyScript();
    if (window.Calendly || script.dataset.loaded === "true") {
      mountWidget();
      return;
    }

    function handleLoad() {
      script.dataset.loaded = "true";
      mountWidget();
    }

    script.addEventListener("load", handleLoad);
    return () => {
      script.removeEventListener("load", handleLoad);
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget mt-6 w-full overflow-hidden rounded-[20px]"
      data-url={url}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SERVICE_NAV_LINKS } from "../lib/navLinks";

export default function ServicesNavMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isServiceActive = SERVICE_NAV_LINKS.some((link) => pathname === link.href);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => setOpen((current) => !current)}
        className={`inline-flex items-center gap-1.5 text-sm transition hover:text-[var(--foreground)] ${
          isServiceActive
            ? "text-[var(--foreground)]"
            : "text-[var(--muted)]"
        }`}
      >
        Services
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          className="absolute left-0 top-[calc(100%+0.75rem)] z-50 min-w-[14rem] rounded-2xl border border-white/10 bg-[var(--background)] p-2 shadow-2xl"
        >
          {SERVICE_NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-4 py-2.5 text-sm transition hover:bg-white/5 ${
                pathname === link.href
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

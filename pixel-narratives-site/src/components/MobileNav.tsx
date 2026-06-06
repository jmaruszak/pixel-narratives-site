"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  CALENDLY_URL,
  PRIMARY_NAV_LINKS,
  SERVICE_NAV_LINKS,
} from "../lib/navLinks";

function MobileNavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`block rounded-xl px-3 py-3 text-base transition hover:bg-white/5 ${
        isActive
          ? "text-[var(--foreground)]"
          : "text-[var(--muted)] hover:text-[var(--foreground)]"
      }`}
    >
      {label}
    </Link>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = () => setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const menuOverlay =
    open && mounted ? (
      <div className="fixed inset-0 z-[110] isolation-isolate">
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0 bg-[#0b0c0f]"
          onClick={close}
        />
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Primary navigation"
          className="absolute right-0 top-0 z-10 flex h-full w-[min(100%,20rem)] flex-col overscroll-contain border-l border-white/10 bg-[#0b0c0f] p-6 pt-[max(1.5rem,env(safe-area-inset-top))] shadow-[-8px_0_32px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
              Menu
            </p>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)] transition hover:bg-white/5"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav
            className="mt-6 flex flex-col gap-1"
            aria-label="Mobile primary navigation"
          >
            {PRIMARY_NAV_LINKS.map((link, index) => (
              <span key={link.href} className="contents">
                <MobileNavLink
                  href={link.href}
                  label={link.label}
                  onNavigate={close}
                />
                {index === 0 ? (
                  <div className="mt-4 mb-1 px-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      Services
                    </p>
                    <div className="mt-2 flex flex-col gap-1">
                      {SERVICE_NAV_LINKS.map((service) => (
                        <MobileNavLink
                          key={service.href}
                          href={service.href}
                          label={service.label}
                          onNavigate={close}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
              </span>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)] transition hover:bg-white/5"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {menuOverlay && mounted
        ? createPortal(menuOverlay, document.body)
        : null}
    </div>
  );
}

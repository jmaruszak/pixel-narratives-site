"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PRIMARY_NAV_LINKS, SERVICE_NAV_LINKS } from "../lib/navLinks";

function MobileNavLink({
  href,
  label,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  onNavigate: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`block rounded-xl px-3 py-3 text-base transition hover:bg-white/5 ${
        isActive
          ? "text-[var(--foreground)]"
          : "text-[var(--muted)] hover:text-[var(--foreground)]"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = () => {
    setOpen(false);
    window.requestAnimationFrame(() => buttonRef.current?.focus());
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
    );
    window.requestAnimationFrame(() => focusable[0]?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key === "Tab" && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const menuOverlay =
    open ? (
      <div className="fixed inset-0 z-[110] isolation-isolate">
        <button
          type="button"
          aria-label="Close menu overlay"
          tabIndex={-1}
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
            <div className="mb-1 px-3">
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
                    className={
                      service.href === "/starting-small"
                        ? "mb-1 border-b border-white/8"
                        : ""
                    }
                  />
                ))}
              </div>
            </div>
            {PRIMARY_NAV_LINKS.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onNavigate={close}
              />
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <Link
              href="/contact"
              onClick={close}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Start a Conversation
            </Link>
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

      {menuOverlay && typeof document !== "undefined"
        ? createPortal(menuOverlay, document.body)
        : null}
    </div>
  );
}

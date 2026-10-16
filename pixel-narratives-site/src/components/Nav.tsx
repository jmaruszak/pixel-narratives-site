import Image from "next/image";
import Link from "next/link";
import { PRIMARY_NAV_LINKS } from "../lib/navLinks";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/90 pt-[env(safe-area-inset-top)] md:bg-black/55 md:backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo-mark.png"
            alt="Pixel Narratives logo"
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
          />
          <span className="hidden text-sm uppercase tracking-[0.25em] text-[var(--foreground)] sm:block">
            Pixel Narratives
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary navigation"
          >
            {PRIMARY_NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <a
            href="/contact"
            className="hidden items-center rounded-full border border-white/10 bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90 lg:inline-flex"
          >
            Start a Conversation
          </a>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

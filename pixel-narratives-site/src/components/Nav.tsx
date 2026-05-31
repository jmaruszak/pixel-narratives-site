import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL, PRIMARY_NAV_LINKS } from "../lib/navLinks";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import ServicesNavMenu from "./ServicesNavMenu";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/40 pt-[env(safe-area-inset-top)] backdrop-blur-md">
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
            className="hidden items-center gap-5 md:flex lg:gap-6"
            aria-label="Primary navigation"
          >
            {PRIMARY_NAV_LINKS.map((link, index) => (
              <span key={link.href} className="contents">
                <NavLink href={link.href} label={link.label} />
                {index === 0 ? <ServicesNavMenu /> : null}
              </span>
            ))}
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Book a discovery call (opens Calendly in a new tab)"
            className="hidden items-center rounded-full border border-white/10 bg-[var(--foreground)] px-4 py-2 text-xs font-medium text-black transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm md:inline-flex"
          >
            Book a Call
          </a>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

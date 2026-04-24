import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
        <a href="/" className="flex items-center gap-3">
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
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/projects"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              Projects
            </a>
            <a
              href="/about"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              About
            </a>
            <a
              href="/intelligence-layer"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              Intelligence Layer
            </a>
            <a
              href="/contact"
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              Contact
            </a>
          </nav>

          <a
            href="https://calendly.com/pixelnarratives"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-4 py-2 text-xs font-medium text-black transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
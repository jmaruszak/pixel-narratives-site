const studioLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/intelligence-layer", label: "Intelligence Layer" },
  { href: "/contact", label: "Contact" },
];

const adLinks = [
  { href: "/ai-commercial-production-company", label: "AI Commercial Production" },
  { href: "/ai-video-ad-agency", label: "AI Video Ad Agency" },
  { href: "/cost-of-ai-video-production", label: "AI Video Production Cost" },
  {
    href: "/how-to-create-ads-people-actually-watch",
    label: "Ads People Actually Watch",
  },
];

const intelligenceLinks = [
  { href: "/ai-consulting-for-businesses", label: "Fractional AI Officer" },
  { href: "/ai-workflow-automation", label: "AI Workflow Automation" },
  {
    href: "/how-to-implement-ai-in-your-business",
    label: "Implement AI in Your Business",
  },
  {
    href: "/how-to-use-ai-in-your-business",
    label: "How to Use AI in Your Business",
  },
  { href: "/ai-crm-automation", label: "AI CRM Automation" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-[1.2fr_auto_auto_auto] md:px-10">
        <div className="max-w-sm">
          <p>© {new Date().getFullYear()} Pixel Narratives</p>
          <p className="mt-3 max-w-xs leading-relaxed">
            AI-powered ads and practical AI systems for brands ready to move.
          </p>
          <a
            href="mailto:hello@pixelnarratives.studio"
            className="mt-3 inline-block transition hover:text-[var(--foreground)]"
          >
            hello@pixelnarratives.studio
          </a>
          <div className="mt-5">
            <a
              href="https://calendly.com/pixelnarratives"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs text-[var(--foreground)] transition hover:bg-white/5"
            >
              Book a Call
            </a>
          </div>
        </div>

        <nav aria-label="Studio footer links">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]">
            Studio
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {studioLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <nav aria-label="AI Ads footer links">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]">
            AI Ads
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {adLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <nav aria-label="Intelligence Layer footer links">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]">
            Intelligence Layer
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {intelligenceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}

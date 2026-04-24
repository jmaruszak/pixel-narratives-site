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
  { href: "/ai-consulting-for-businesses", label: "AI Consulting for Businesses" },
  { href: "/ai-workflow-automation", label: "AI Workflow Automation" },
  {
    href: "/how-to-implement-ai-in-your-business",
    label: "Implement AI in Your Business",
  },
  { href: "/ai-crm-automation", label: "AI CRM Automation" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-10 text-sm text-[var(--muted)] md:grid-cols-[1fr_auto_auto] md:px-10">
        <div>
          <p>© {new Date().getFullYear()} Pixel Narratives</p>
          <a
            href="mailto:hello@pixelnarratives.studio"
            className="mt-3 inline-block transition hover:text-[var(--foreground)]"
          >
            hello@pixelnarratives.studio
          </a>
        </div>

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

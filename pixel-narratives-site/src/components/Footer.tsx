import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from "../lib/businessLocation";
import {
  GUIDES_FOOTER_LINKS,
  MORE_FOOTER_LINKS,
  SERVICES_FOOTER_LINKS,
  STUDIO_FOOTER_LINKS,
  type FooterLink,
} from "../lib/footerLinks";

type FooterNavColumnProps = {
  ariaLabel: string;
  heading: string;
  links: FooterLink[];
};

function FooterNavColumn({ ariaLabel, heading, links }: FooterNavColumnProps) {
  return (
    <nav aria-label={ariaLabel} className="max-w-[11rem]">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]">
        {heading}
      </p>
      <div className="mt-4 flex flex-col gap-y-2.5">
        {links.map((link) => (
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
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-6 py-10 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-[minmax(0,1.25fr)_repeat(4,minmax(0,10.5rem))] md:px-10">
        <div className="max-w-sm sm:col-span-2 lg:col-span-1">
          <p>© {new Date().getFullYear()} Pixel Narratives</p>
          <p className="mt-3 max-w-xs leading-relaxed">
            Pixel Narratives helps businesses save time, win more customers, and
            get more done through automation, implementation, training, online
            visibility, and marketing.
          </p>
          <p className="mt-3 max-w-xs leading-relaxed">
            Madison, Mississippi.{" "}
            <a
              href="/serving-the-south"
              className="transition hover:text-[var(--foreground)]"
            >
              Serving the South
            </a>
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 inline-block transition hover:text-[var(--foreground)]"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="mt-2 block transition hover:text-[var(--foreground)]"
          >
            {CONTACT_PHONE}
          </a>
          <a
            href="/privacy"
            className="mt-3 inline-block transition hover:text-[var(--foreground)]"
          >
            Privacy Policy
          </a>
          <div className="mt-5">
            <a
              href="https://calendly.com/pixelnarratives"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs text-[var(--foreground)] transition hover:bg-white/5"
            >
              Book a Zoom Call
            </a>
          </div>
        </div>

        <FooterNavColumn
          ariaLabel="Services footer links"
          heading="Services"
          links={SERVICES_FOOTER_LINKS}
        />
        <FooterNavColumn
          ariaLabel="Studio footer links"
          heading="Studio"
          links={STUDIO_FOOTER_LINKS}
        />
        <FooterNavColumn
          ariaLabel="More footer links"
          heading="More"
          links={MORE_FOOTER_LINKS}
        />
        <FooterNavColumn
          ariaLabel="Guides footer links"
          heading="Guides"
          links={GUIDES_FOOTER_LINKS}
        />
      </div>
    </footer>
  );
}

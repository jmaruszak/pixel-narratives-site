import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  GOOGLE_BUSINESS_PROFILE_URL,
} from "../lib/businessLocation";
import {
  SERVICES_FOOTER_LINKS,
  STUDIO_FOOTER_LINKS,
  type FooterLink,
} from "../lib/footerLinks";
import { ORGANIZATION_SOCIAL_PROFILES } from "../lib/socialProfiles";
import FooterMap from "./FooterMap";
import SocialProfileLink from "./SocialProfileLink";

type FooterNavColumnProps = {
  ariaLabel: string;
  heading: string;
  links: FooterLink[];
};

function FooterNavColumn({ ariaLabel, heading, links }: FooterNavColumnProps) {
  return (
    <nav aria-label={ariaLabel}>
      <h2 className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]">
        {heading}
      </h2>
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
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-6 py-10 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_repeat(2,minmax(0,12rem))] md:px-10">
        <div className="max-w-sm sm:col-span-2 lg:col-span-1">
          <p>© {new Date().getFullYear()} Pixel Narratives</p>
          <p className="mt-3 max-w-xs leading-relaxed">
            Pixel Narratives helps you put AI to work.
            <br />
            Implementation. Training. Visibility. Marketing.
          </p>
          <p className="mt-3 max-w-xs leading-relaxed">Madison, Mississippi.</p>
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
          <nav
            aria-label="Pixel Narratives social profiles"
            className="mt-4 flex flex-wrap gap-2"
          >
            {ORGANIZATION_SOCIAL_PROFILES.map((profile) => (
              <SocialProfileLink key={profile.href} profile={profile} />
            ))}
          </nav>
          <div className="mt-5">
            <a
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 px-4 py-2 text-xs text-[var(--foreground)] transition hover:bg-white/5"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        <FooterNavColumn
          ariaLabel="What We Do footer links"
          heading="What We Do"
          links={SERVICES_FOOTER_LINKS}
        />
        <FooterNavColumn
          ariaLabel="Studio footer links"
          heading="Studio"
          links={STUDIO_FOOTER_LINKS}
        />
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-6 border-t border-white/8 px-6 py-8 text-sm text-[var(--muted)] lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-center md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--foreground)]">
            Pixel Narratives
          </p>
          <p className="mt-2">Madison, Mississippi</p>
          <a
            href={GOOGLE_BUSINESS_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center text-[var(--foreground)] transition hover:opacity-80"
          >
            View on Google
          </a>
        </div>
        <FooterMap />
      </div>
    </footer>
  );
}

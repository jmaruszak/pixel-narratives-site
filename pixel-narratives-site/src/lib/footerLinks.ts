export type FooterLink = {
  href: string;
  label: string;
};

export const STUDIO_FOOTER_LINKS: FooterLink[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book" },
  { href: "/insights", label: "Insights" },
  { href: "/news", label: "News" },
  { href: "/privacy", label: "Privacy Policy" },
];

export const SERVICES_FOOTER_LINKS: FooterLink[] = [
  { href: "/implementation", label: "Implementation" },
  { href: "/training", label: "Training" },
  { href: "/websites", label: "Visibility" },
  { href: "/marketing", label: "Marketing" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/serving-the-south", label: "Who We Work With" },
];

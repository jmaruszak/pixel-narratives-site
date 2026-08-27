import { SERVICES } from "./services";

export const PRIMARY_NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_NAV_LINKS = SERVICES.map((service) => ({
  href: service.href,
  label: service.navLabel,
}));

export const CALENDLY_URL = "https://calendly.com/pixelnarratives";

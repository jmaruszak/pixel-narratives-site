"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm transition hover:text-[var(--foreground)] ${
        isActive ? "text-[var(--foreground)]" : "text-[var(--muted)]"
      }`}
    >
      {label}
    </Link>
  );
}

import type { SocialNetwork, SocialProfile } from "../lib/socialProfiles";

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "instagram") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (network === "facebook") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M13.7 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5H17V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.4Z" />
      </svg>
    );
  }

  if (network === "youtube") {
    return (
      <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M21 8.1a3 3 0 0 0-2.1-2.1C17 5.5 12 5.5 12 5.5S7 5.5 5.1 6A3 3 0 0 0 3 8.1 31 31 0 0 0 2.5 12 31 31 0 0 0 3 15.9 3 3 0 0 0 5.1 18c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.9 31 31 0 0 0-.5-3.9Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M6.5 8.2H3.4V21h3.1V8.2ZM5 3a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 5 3ZM21 13.6c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2V8.2H9.5V21h3.1v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H21v-7.4Z" />
    </svg>
  );
}

export default function SocialProfileLink({
  profile,
  showLabel = false,
}: {
  profile: SocialProfile;
  showLabel?: boolean;
}) {
  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noreferrer"
      aria-label={profile.label}
      title={profile.label}
      className={`inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/5 ${
        showLabel ? "gap-2 px-4 text-sm" : "w-11"
      }`}
    >
      <SocialIcon network={profile.network} />
      {showLabel ? <span>{profile.shortLabel}</span> : null}
    </a>
  );
}

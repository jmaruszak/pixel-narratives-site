export type SocialNetwork = "instagram" | "facebook" | "youtube" | "linkedin";

export type SocialProfile = {
  network: SocialNetwork;
  label: string;
  shortLabel: string;
  href: string;
};

export const ORGANIZATION_SOCIAL_PROFILES: SocialProfile[] = [
  {
    network: "instagram",
    label: "Pixel Narratives on Instagram",
    shortLabel: "Instagram",
    href: "https://www.instagram.com/pixelnarratives.studio/",
  },
  {
    network: "facebook",
    label: "Pixel Narratives on Facebook",
    shortLabel: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589823687666",
  },
  {
    network: "youtube",
    label: "Pixel Narratives on YouTube",
    shortLabel: "YouTube",
    href: "https://youtube.com/@pixelnarrativesstudio",
  },
  {
    network: "linkedin",
    label: "Pixel Narratives on LinkedIn",
    shortLabel: "LinkedIn",
    href: "https://www.linkedin.com/company/pixel-narratives",
  },
];

export const FOUNDER_LINKEDIN_PROFILE: SocialProfile = {
  network: "linkedin",
  label: "Jordan Maruszak on LinkedIn",
  shortLabel: "LinkedIn",
  href: "https://www.linkedin.com/in/jordanmaruszak/",
};

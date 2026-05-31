export type CaseStudy = {
  eyebrow: string;
  title: string;
  overview: string;
  deliverables: string[];
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
};

export const FEATURED_CAMPAIGN = {
  eyebrow: "Featured Campaign",
  client: "Fizz Soda",
  title: "The Homie",
  description:
    "A spec campaign created for Fizz Soda as our entry into the Runway Big Ad Contest, built to show how much energy, personality, and cinematic style a brand spot can carry.",
  videoSrc: "/videos/the-last-fizz.mp4",
  posterSrc: "/images/runway-still.jpg",
  posterAlt: "The Homie campaign still for Fizz Soda",
  deliverables: [
    "Spec campaign",
    "Creative direction",
    "Concept development",
    "AI-native production",
  ],
} as const;

export const CASE_STUDIES: CaseStudy[] = [
  {
    eyebrow: "Studio Launch",
    title: "Pixel Narratives Launch Commercial",
    overview:
      "Built as the first flagship campaign for the studio, this piece introduces the tone, ambition, and cinematic standard behind Pixel Narratives.",
    deliverables: ["Launch commercial", "Creative direction", "Concept development"],
    videoSrc: "/videos/pixel-narratives-launch.mp4",
    posterSrc: "/images/studio-launch-still.jpg",
    posterAlt: "Pixel Narratives Studio Launch still",
  },
  {
    eyebrow: "Brand Campaign",
    title: "Cinder Wealth Brand Spot",
    overview:
      "A polished brand-led concept demonstrating how cinematic storytelling can elevate financial services beyond generic category advertising.",
    deliverables: ["Brand commercial", "Concept development", "Visual direction"],
    videoSrc: "/videos/cinder-wealth-ad.mp4",
    posterSrc: "/images/cinder-wealth-still.jpg",
    posterAlt: "Cinder Wealth brand spot still",
  },
];

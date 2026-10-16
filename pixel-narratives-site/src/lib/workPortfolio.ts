export const WORK_PAGE = {
  eyebrow: "Our Work",
  headline: "A little of what we've been working on.",
  lede: "A selection of projects across AI implementation, training, and creative production.",
} as const;

export const CHAD_CAMPAIGN = {
  category: "Original Campaign / AI-Native Advertising",
  title: "Chad G.P.T.",
  origin: "Original campaign",
  body: [
    "An original advertising character created for Pixel Narratives and brought to life through AI-native video production.",
    "Two commercials ran on connected TV during college football and the NFL in Mississippi.",
  ],
  note: "This work is here to show concept, story, and production.",
  period: "August 29 through September 15, 2026",
  commercials: [
    {
      title: "Chad GPT: Introduction",
      videoSrc: "/videos/pixel-narratives-chadgpt-ad.mp4",
      posterSrc: "/images/home-hero-poster.jpg",
    },
    {
      title: "The Interception",
      videoSrc: "/videos/pixel-narratives-football-ad.mp4",
      posterSrc: "/images/hero-cinematic.jpg",
    },
  ],
  metrics: [
    { value: "4,695", label: "Impressions" },
    { value: "3,196", label: "Unique households" },
    { value: "98.2%", label: "Video completion" },
  ],
} as const;

export const AGENCY_DASHBOARD = {
  category: "Custom Software / AI Implementation",
  title: "Social Media Agency Dashboard",
  origin: "Client work",
  body: "A custom workspace designed to bring client projects, team assignments, approvals, and day-to-day operations into one place.",
  imageSrc: "/images/agency-dashboard-mockup.png",
  imageAlt:
    "Laptop showing a social media agency dashboard with an overview, work queue, and client activity.",
} as const;

export const BADGEPASS_WORKSHOP = {
  category: "Team Training",
  title: "BadgePass AI Video Production Workshop",
  origin: "Client work",
  body: "A customized, hands-on AI video production workshop for the BadgePass team, built around tools they could use in their work.",
  quote:
    "Pixel Narratives made AI practical for our team. The workshop was hands-on, easy to follow, and focused on things we could actually use in our work. We left with a much better understanding of what these tools can do and, more importantly, how to use them.",
  attribution: "Jason Thomas",
  role: "EVP of Sales, BadgePass",
} as const;

export const TEAM_P = {
  category: "Original Brand Film / AI-Native Production",
  title: "Team P",
  origin: "Original film",
  body: "A cinematic, comedy-driven brand film for Pixel Narratives team training. Concept, characters, AI-native production, original music, and a longer story.",
  youtubeId: "mA0Ab5zmeD0",
  youtubeTitle: "Team P, a Pixel Narratives brand film",
} as const;

export const RISKY_BUSINESS = {
  category: "Video Production / Original Music",
  title: "Risky Business Podcast",
  origin: "Client work",
  body: "An opening video and original music created for the Risky Business podcast.",
  imageSrc: "/images/risky-business-podcast.png",
  imageAlt: "Risky Business with Brett podcast logo",
} as const;

export const RESTAURANT_ASSESSMENT = {
  category: "AI Strategy & Website Intelligence",
  title: "Restaurant Group",
  origin: "Paid assessment",
  body: [
    "A comprehensive assessment for a multi-location restaurant business, identifying opportunities across operations, customer experience, AI adoption, and online visibility. We delivered a prioritized implementation roadmap alongside a detailed website audit covering performance, search visibility, and customer conversion.",
    "The reports include concrete recommendations for immediate improvements, medium-term projects, and longer-term opportunities.",
  ],
  imageSrc: "/images/restaurant-group-assessment.jpg",
  imageAlt:
    "Conceptual reconstruction of Pixel Narratives assessment materials for a restaurant group, including a printed report, a website audit, and a tablet of near-term opportunities.",
  imageNote:
    "Conceptual reconstruction of the assessment materials. The actual reports stay confidential.",
  sampleHref: "/sample-implementation-assessment",
  sampleLabel: "See a sample of the format",
} as const;

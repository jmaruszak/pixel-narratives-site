export type CaseStudy = {
  eyebrow: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  result: string;
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
  problem:
    "Category ads for drinks often look interchangeable. The brand needed a spot people would watch.",
  solution:
    "We built a concept-driven campaign around character and payoff, then produced it as a finished commercial piece.",
  result:
    "A shareable spec spot that shows how campaign work can feel bigger than a generic product demo.",
  videoSrc: "/videos/the-last-fizz.mp4",
  posterSrc: "/images/runway-still.jpg",
  posterAlt: "The Homie campaign still for Fizz Soda",
  deliverables: [
    "Spec campaign",
    "Creative direction",
    "Concept development",
    "Campaign production",
  ],
} as const;

export type WorkProject = {
  eyebrow: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  href?: string;
  hrefLabel?: string;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    eyebrow: "Diagnostic",
    title: "Implementation Assessment",
    problem:
      "A business wanted a clear picture of where work was getting stuck before buying more tools.",
    solution:
      "We mapped workflows, bottlenecks, and follow-up, then wrote a scoped plan with quick wins and what to build next.",
    result:
      "A written assessment the owner can use to decide what to implement first. See a sample of the format.",
    href: "/sample-implementation-assessment",
    hrefLabel: "View the sample",
  },
  {
    eyebrow: "Custom build",
    title: "Custom CRM",
    problem:
      "Leads, follow-up, and customer notes lived in inboxes, spreadsheets, and memory.",
    solution:
      "We built a CRM around how the business already works, not a generic pipeline the team would ignore.",
    result:
      "One place to track customers, follow-up, and the next step.",
  },
  {
    eyebrow: "Custom build",
    title: "Social Media Agency Dashboard",
    problem:
      "A social media agency was pulling client status from scattered reports and tools.",
    solution:
      "We built a dashboard that puts client work in one view so the team can see what is moving and what is stuck.",
    result:
      "A single operating view for client work instead of hunting across reports.",
  },
  {
    eyebrow: "Custom build",
    title: "Lawn Care Productivity App",
    problem:
      "A lawn care business was running the day from texts, notes, and memory.",
    solution:
      "We built a productivity app for scheduling and day-to-day work in one tool.",
    result:
      "Crews and owners can see the day's work without rebuilding the plan from scratch each morning.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    eyebrow: "Studio Launch",
    title: "Pixel Narratives Launch Commercial",
    overview:
      "The first flagship campaign for the company, built to introduce tone, ambition, and a cinematic standard.",
    problem:
      "A new company needed a clear first impression, not a generic explainer.",
    solution:
      "We wrote and produced a launch commercial around a strong concept, then used it as the flagship piece.",
    result:
      "A finished campaign asset that still represents how Pixel Narratives approaches marketing work.",
    deliverables: ["Launch commercial", "Creative direction", "Concept development"],
    videoSrc: "/videos/pixel-narratives-launch.mp4",
    posterSrc: "/images/studio-launch-still.jpg",
    posterAlt: "Pixel Narratives Studio Launch still",
  },
  {
    eyebrow: "Brand Campaign",
    title: "Cinder Wealth Brand Spot",
    overview:
      "A brand-led concept for financial services that needed to feel more distinct than typical category advertising.",
    problem:
      "Financial services ads often blend together. The brand needed a clearer, more memorable presence.",
    solution:
      "We developed a polished brand spot around story and visual direction rather than a feature list.",
    result:
      "A campaign piece that elevates the brand beyond generic category advertising.",
    deliverables: ["Brand commercial", "Concept development", "Visual direction"],
    videoSrc: "/videos/cinder-wealth-ad.mp4",
    posterSrc: "/images/cinder-wealth-still.jpg",
    posterAlt: "Cinder Wealth brand spot still",
  },
];

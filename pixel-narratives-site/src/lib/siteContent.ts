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
  title: "Attention",
  description: "Our own campaign, running in Mississippi now.",
  commercials: [
    {
      title: "Chad G.P.T. — Introduction",
      videoSrc: "/videos/pixel-narratives-chadgpt-ad.mp4",
    },
    {
      title: "The Interception",
      videoSrc: "/videos/pixel-narratives-football-ad.mp4",
    },
  ],
  details: [
    { label: "Status", value: "Running Now" },
    { label: "Market", value: "Mississippi" },
    { label: "Goal", value: "Awareness" },
    { label: "Focus", value: "Live Sports. College Football + NFL." },
    { label: "Measuring", value: "Website Visits" },
  ],
  targets: ["10K to 20K Impressions", "Approximately 2K Households"],
  actualResults: "TBD",
  resultsNote: "We'll update this when the campaign wraps.",
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
    eyebrow: "Spec Campaign",
    title: "The Homie",
    overview:
      "A spec campaign created for Fizz Soda as our entry into the Runway Big Ad Contest, built to show how much energy, personality, and cinematic style a brand spot can carry.",
    problem:
      "Category ads for drinks often look interchangeable. The brand needed a spot people would watch.",
    solution:
      "We built a concept-driven campaign around character and payoff, then produced it as a finished commercial piece.",
    result:
      "A shareable spec spot that shows how campaign work can feel bigger than a generic product demo.",
    deliverables: [
      "Spec campaign",
      "Creative direction",
      "Concept development",
      "Campaign production",
    ],
    videoSrc: "/videos/the-last-fizz.mp4",
    posterSrc: "/images/runway-still.jpg",
    posterAlt: "The Homie campaign still for Fizz Soda",
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

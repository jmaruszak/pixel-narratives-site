import type { ServiceAreaPlace } from "./businessLocation";
import {
  SERVICE_AREA_HUB_MENTIONS,
  SERVICE_AREA_PRIMARY,
} from "./businessLocation";

export type LocationLandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  marketLabel: string;
  areaServed: ServiceAreaPlace[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedLinks: Array<{
    href: string;
    label: string;
  }>;
};

const sharedRelatedLinks = [
  { href: "/serving-the-south", label: "Serving the South" },
  { href: "/contact", label: "Book a call" },
  { href: "/automation", label: "Automation + Implementation" },
  { href: "/training", label: "Training" },
  { href: "/websites", label: "Websites + Online Visibility" },
  { href: "/marketing", label: "Marketing" },
];

export const locationLandingPages: Record<string, LocationLandingPage> = {
  "mississippi-ai-studio": {
    slug: "mississippi-ai-studio",
    title: "Automation, Websites, and Marketing for Mississippi | Pixel Narratives",
    description:
      "Pixel Narratives helps Mississippi businesses save time, win more customers, and get more done. Based in Madison, serving business owners statewide including Oxford and Gulfport.",
    h1: "Save Time, Win Customers, and Get More Done for Mississippi Businesses",
    marketLabel: "Mississippi",
    intro:
      "Pixel Narratives is headquartered in Madison, Mississippi. We help business owners across the state with automation, training, websites, online visibility, and marketing. Most work starts with a Zoom call, then we deliver from our office.",
    areaServed: [{ type: "State", name: "Mississippi" }],
    sections: [
      {
        heading: "How we work with Mississippi teams",
        body: [
          "We work with Mississippi businesses over Zoom and from our Madison office.",
          "That model works well for owners who want clear priorities and help turning automation, websites, and marketing into real business results.",
        ],
      },
      {
        heading: "Oxford",
        body: [
          "We also work with teams in Oxford, from professional services firms to growing local businesses tied to the university community.",
          "Common needs include clearer website messaging, stronger local visibility, and practical AI support for teams that are busy serving clients every day.",
        ],
      },
      {
        heading: "Gulfport and the Mississippi Gulf Coast",
        body: [
          "Along the Mississippi Gulf Coast, we work with hospitality, retail, and regional service businesses that need to be found online and communicate clearly.",
          "Website visibility, campaign direction, and AI implementation can all help coastal businesses compete beyond word of mouth alone.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you work with Mississippi businesses?",
        answer:
          "Our headquarters is in Madison, Mississippi. We serve business owners across the state over Zoom and from our office.",
      },
      {
        question: "What do you help with?",
        answer:
          "We help with automation and implementation, team training, websites and online visibility, and marketing. Many clients start with one path and expand from there.",
      },
      {
        question: "Where should a Mississippi business start?",
        answer:
          "If you are unsure, start with a free website scan or a call. The AI + Automation Assessment is optional if you want a clearer picture first.",
      },
    ],
    relatedLinks: sharedRelatedLinks,
  },
  "birmingham-ai-studio": {
    slug: "birmingham-ai-studio",
    title: "Automation, Websites, and Marketing for Birmingham, AL | Pixel Narratives",
    description:
      "Automation, websites, and marketing for Birmingham businesses. Pixel Narratives works with Alabama business owners on operations, online visibility, and campaigns.",
    h1: "Save Time, Win Customers, and Get More Done for Birmingham Businesses",
    marketLabel: "Birmingham, Alabama",
    intro:
      "Pixel Narratives works with Birmingham area businesses that want to save time, get found online, and reach more customers. We are based in Madison, Mississippi, and serve the region over Zoom and from our office.",
    areaServed: [{ type: "City", name: "Birmingham", region: "AL" }],
    sections: [
      {
        heading: "How we work with Birmingham teams",
        body: [
          "Most engagements start with a Zoom call to understand your goals, then we handle automation, website work, training, and campaigns from our office.",
          "That approach fits growing businesses that want senior-level thinking without adding a full in-house team.",
        ],
      },
      {
        heading: "What Birmingham businesses often need",
        body: [
          "Many teams know they need better website visibility and a clearer story, but they are not sure where to start with AI.",
          "We help you prioritize: what will save time, what will help you get found, what will help your team use AI better, and what will help you reach more customers.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you work with Birmingham businesses?",
        answer:
          "Our headquarters is in Madison, Mississippi. We work with Birmingham business owners over Zoom and from our office.",
      },
      {
        question: "What do you help with?",
        answer:
          "Automation and implementation, team training, websites and online visibility, and marketing. We keep all four in view so you are not solving one problem while ignoring the others.",
      },
      {
        question: "Is this only for large Birmingham companies?",
        answer:
          "No. We work with business owners and leadership teams that want practical help, clear priorities, and results they can explain to their team.",
      },
    ],
    relatedLinks: sharedRelatedLinks,
  },
  "gulf-coast-ai-studio": {
    slug: "gulf-coast-ai-studio",
    title: "Automation, Websites, and Marketing for Mobile, AL and the Florida Panhandle | Pixel Narratives",
    description:
      "Automation, websites, and marketing for Mobile, Alabama and Florida Panhandle businesses. Pixel Narratives helps Gulf Coast owners save time and win more customers.",
    h1: "Save Time, Win Customers, and Get More Done for the Gulf Coast",
    marketLabel: "Mobile, Alabama and the Florida Panhandle",
    intro:
      "Pixel Narratives works with businesses along the Gulf Coast corridor, including Mobile, Alabama and communities across the Florida Panhandle. We help with automation, training, websites, online visibility, and marketing from our Madison, Mississippi office.",
    areaServed: [
      { type: "City", name: "Mobile", region: "AL" },
      { type: "AdministrativeArea", name: "Florida Panhandle", region: "FL" },
    ],
    sections: [
      {
        heading: "How we work with Gulf Coast teams",
        body: [
          "We work with Gulf Coast business owners over Zoom and deliver from our office in Madison, Mississippi.",
          "That works well for owners who want a partner who understands the Gulf Coast market without requiring local travel for every conversation.",
        ],
      },
      {
        heading: "Who we help along the corridor",
        body: [
          "We work with hospitality, professional services, retail, and regional operators in Mobile, Pensacola, Fort Walton Beach, Panama City, and nearby markets.",
          "Common priorities include being found online, sharpening campaign messaging, and putting AI to work in ways the whole team can use.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you work with Gulf Coast businesses?",
        answer:
          "Our headquarters is in Madison, Mississippi. We work with business owners in Mobile, the Florida Panhandle, and along the corridor over Zoom and from our office.",
      },
      {
        question: "What do you help with?",
        answer:
          "We help with automation and implementation, team training, websites and online visibility, and marketing. You can start with one area or work across all four.",
      },
      {
        question: "Does the Gulf Coast page cover my specific city?",
        answer:
          "We work with business owners across the Gulf Coast corridor and nationwide when the engagement is a good fit.",
      },
    ],
    relatedLinks: sharedRelatedLinks,
  },
  "jacksonville-ai-studio": {
    slug: "jacksonville-ai-studio",
    title: "Automation, Websites, and Marketing for Jacksonville, FL | Pixel Narratives",
    description:
      "Automation, websites, and marketing for Jacksonville businesses. Pixel Narratives helps Florida business owners save time, get found, and reach more customers.",
    h1: "Save Time, Win Customers, and Get More Done for Jacksonville Businesses",
    marketLabel: "Jacksonville, Florida",
    intro:
      "Pixel Narratives works with Jacksonville area businesses on automation, training, websites, and marketing. We are headquartered in Madison, Mississippi, and serve Florida business owners over Zoom and from our office.",
    areaServed: [{ type: "City", name: "Jacksonville", region: "FL" }],
    sections: [
      {
        heading: "How we work with Jacksonville teams",
        body: [
          "Most work starts with a Zoom call, then we help with automation, website visibility, training, and campaigns from our office.",
          "Business owners use us when they want a clear plan and a partner who can help execute, not just recommend tools.",
        ],
      },
      {
        heading: "What Jacksonville businesses often need",
        body: [
          "Competitive markets reward businesses that are easy to find, easy to understand, and operationally sharp.",
          "We help you see visibility gaps on your website, sharpen the story behind your campaigns, and implement AI in ways that support real workflows.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you work with Jacksonville businesses?",
        answer:
          "Our headquarters is in Madison, Mississippi. We work with Jacksonville business owners over Zoom and from our office.",
      },
      {
        question: "What do you help with?",
        answer:
          "Automation and implementation, team training, websites and online visibility, and marketing. We help you choose the right starting point based on your goals.",
      },
      {
        question: "Can we start without a big project?",
        answer:
          "Yes. Many teams start with a free website scan or a discovery call to clarify priorities before committing to a larger engagement. The AI + Automation Assessment is optional.",
      },
    ],
    relatedLinks: sharedRelatedLinks,
  },
  "memphis-ai-studio": {
    slug: "memphis-ai-studio",
    title: "Automation, Websites, and Marketing for Memphis, TN | Pixel Narratives",
    description:
      "Automation, websites, and marketing for Memphis businesses. Pixel Narratives helps Tennessee business owners save time, get found, and reach more customers.",
    h1: "Save Time, Win Customers, and Get More Done for Memphis Businesses",
    marketLabel: "Memphis, Tennessee",
    intro:
      "Pixel Narratives works with Memphis area businesses that want to save time, get found online, and reach more customers. We are based in Madison, Mississippi, and serve the region over Zoom and from our office.",
    areaServed: [{ type: "City", name: "Memphis", region: "TN" }],
    sections: [
      {
        heading: "How we work with Memphis teams",
        body: [
          "We work with Memphis business owners over Zoom and deliver automation, website, training, and campaign work from our office.",
          "That model fits owners who want experienced help without building a full internal marketing or operations team.",
        ],
      },
      {
        heading: "What Memphis businesses often need",
        body: [
          "Many Memphis teams are strong operationally but need help being found online, standing out in crowded categories, and using AI with discipline.",
          "We help you connect automation, training, websites, and marketing so each step supports the next.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you work with Memphis businesses?",
        answer:
          "Our headquarters is in Madison, Mississippi. We work with Memphis business owners over Zoom and from our office.",
      },
      {
        question: "What do you help with?",
        answer:
          "We help with automation and implementation, team training, websites and online visibility, and marketing.",
      },
      {
        question: "Why work with a team based in Mississippi?",
        answer:
          "We are close to the region, understand Southern markets, and work with Memphis businesses regularly over Zoom. Location matters for context. Delivery happens from our office.",
      },
    ],
    relatedLinks: sharedRelatedLinks,
  },
};

export const locationLandingSlugs = Object.keys(locationLandingPages);

export const hubMarketCards = [
  {
    slug: "mississippi-ai-studio",
    label: "Mississippi",
    description: "Home market. Madison headquarters, statewide support, Oxford and Gulfport.",
  },
  {
    slug: "birmingham-ai-studio",
    label: "Birmingham, Alabama",
    description: "Automation, websites, and marketing for Birmingham area businesses.",
  },
  {
    slug: "gulf-coast-ai-studio",
    label: "Gulf Coast",
    description: "Mobile, Alabama and the Florida Panhandle corridor.",
  },
  {
    slug: "jacksonville-ai-studio",
    label: "Jacksonville, Florida",
    description: "Automation, websites, and marketing for Jacksonville business owners.",
  },
  {
    slug: "memphis-ai-studio",
    label: "Memphis, Tennessee",
    description: "Automation, websites, and marketing for Memphis businesses.",
  },
] as const;

export const hubSecondaryMentions = SERVICE_AREA_HUB_MENTIONS.filter(
  (place) => place.name === "Nashville" || place.name === "New Orleans",
);

export { SERVICE_AREA_PRIMARY };

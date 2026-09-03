import type { ServiceAreaPlace } from "./businessLocation";
import {
  SERVICE_AREA_HUB_MENTIONS,
  SERVICE_AREA_PRIMARY,
} from "./businessLocation";

export type LocationSection = {
  heading: string;
  intro: string[];
};

export type LocationLandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  marketLabel: string;
  inMarketPhrase: string;
  breadcrumbName: string;
  areaServed: ServiceAreaPlace[];
  consulting: LocationSection;
  automation: LocationSection;
  training: LocationSection;
  caio: LocationSection;
  whoWeHelpHeading: string;
  whoWeHelpBody: string[];
  whoWeHelpCategories: string[];
  marketHeading: string;
  marketBody: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  ctaHeadline: string;
  ctaBody: string;
  relatedLinks: Array<{
    href: string;
    label: string;
  }>;
};

const sharedRelatedLinks = [
  { href: "/serving-the-south", label: "AI consulting across the South" },
  { href: "/automation", label: "Automation + Implementation" },
  { href: "/training", label: "AI training for teams" },
  { href: "/websites", label: "Websites + Online Visibility" },
  { href: "/work", label: "Selected implementation work" },
  { href: "/ai-readiness-assessment", label: "AI + Automation Assessment" },
  { href: "/contact", label: "Talk with Pixel Narratives" },
];

export const locationLandingPages: Record<string, LocationLandingPage> = {
  "mississippi-ai-studio": {
    slug: "mississippi-ai-studio",
    title: "AI Consulting & Implementation in Mississippi | Pixel Narratives",
    description:
      "Pixel Narratives is based in Madison, Mississippi and helps small and midsize businesses with AI consulting, automation, implementation, and employee training.",
    h1: "AI Consulting & Implementation for Mississippi Businesses",
    marketLabel: "Mississippi",
    inMarketPhrase: "in Mississippi",
    breadcrumbName: "Mississippi",
    intro:
      "Pixel Narratives is based in Madison, Mississippi. We help small and midsize businesses across the state use AI, automation, and better systems to save time, improve productivity, streamline operations, and win more customers.",
    areaServed: [
      { type: "State", name: "Mississippi" },
      { type: "City", name: "Madison", region: "MS" },
      { type: "City", name: "Jackson", region: "MS" },
    ],
    consulting: {
      heading: "AI consulting for Mississippi businesses",
      intro: [
        "Most Mississippi companies do not need a 90-page strategy deck. They need someone to look at how the business actually runs, name the few places AI would help, and then do the work.",
        "That is the consulting we offer: opportunity identification, a clear read on readiness, workflow analysis, tool selection, and an implementation roadmap the owner can act on. If the business wants ongoing judgment without a full-time hire, Fractional Chief AI Officer support is available.",
      ],
    },
    automation: {
      heading: "AI automation and implementation in Mississippi",
      intro: [
        "Implementation is the center of the work. We build around the tools Mississippi teams already use — CRM, email, scheduling, documents, and the spreadsheets that still run half the week — instead of forcing a software replacement.",
        "Typical projects include lead intake and follow-up, customer communication, reporting, scheduling, document processing, and the repetitive admin that keeps owners in the office after hours.",
      ],
    },
    training: {
      heading: "AI training for Mississippi teams",
      intro: [
        "A system that nobody on the team can use does not save time. We train owners, managers, and staff on the work they already do, including practical ChatGPT and workplace AI use, not a generic software tour.",
        "Role-specific sessions and simple playbooks help people draft, organize, follow up, and decide where AI belongs — and where it does not.",
      ],
    },
    caio: {
      heading: "Fractional Chief AI Officer support in Mississippi",
      intro: [
        "Some Mississippi companies want someone responsible for AI adoption without creating a full-time executive seat. Fractional Chief AI Officer, or Fractional CAIO, support covers prioritization, implementation oversight, and the next round of work as the business changes.",
      ],
    },
    whoWeHelpHeading: "Who we help in Mississippi",
    whoWeHelpBody: [
      "We work with small and midsize, often owner-led companies. That includes professional services, financial services, restaurants and hospitality, marketing agencies, real estate, home services, construction, health and wellness, and multi-location operators.",
      "The common thread is not industry. It is a team that is busy running the business and needs AI put to work in real workflows, not a lab project.",
    ],
    whoWeHelpCategories: [
      "Professional services",
      "Financial services",
      "Restaurants and hospitality",
      "Marketing agencies",
      "Real estate",
      "Home services",
      "Construction",
      "Health and wellness",
      "Multi-location businesses",
    ],
    marketHeading: "Working with businesses across Mississippi",
    marketBody: [
      "Central Mississippi is the home market: Jackson, Madison, Ridgeland, Flowood, and Brandon. Those companies tend to be close enough for a conversation and busy enough that follow-up, reporting, and handoffs still live in inboxes.",
      "We also work with firms in Hattiesburg, Tupelo, Oxford, and other regional cities where a small team serves a wide area. University-adjacent and professional-services businesses in Oxford often need clearer online visibility and practical AI use for client work, not another tool to ignore.",
      "Along the coast, hospitality and service businesses in Gulfport and Biloxi have the same operational problems as inland companies, plus seasonality and the need to be found by visitors and locals.",
    ],
    faqs: [
      {
        question: "What does an AI consultant actually do?",
        answer:
          "We look at how the business operates today, identify where AI and automation would save time or improve follow-up, and then help implement the workflows, tools, and training required to use them. Consulting without implementation is not the product.",
      },
      {
        question: "How can AI help a small business in Mississippi?",
        answer:
          "Most often by shortening repetitive work: lead response, CRM updates, scheduling, reporting, document handling, and customer communication. For a Madison or Jackson company, that usually means getting hours back in the week and answering customers faster.",
      },
      {
        question: "What business processes can AI automate?",
        answer:
          "Lead intake, follow-up, CRM workflows, internal knowledge lookup, reporting, scheduling, document processing, sales and marketing workflows, and other administrative work that repeats every week. We start with the process, then choose the tools.",
      },
      {
        question: "How much does AI consulting cost?",
        answer:
          "Work is scoped to the job. Guided implementation starts at $1,500/month with a three-month minimum. Fractional Chief AI Officer support starts at $5,000/month. We will tell you what the work involves before you commit.",
      },
      {
        question: "Does Pixel Narratives implement the systems it recommends?",
        answer:
          "Yes. Pixel Narratives is an implementation company. We help choose the path, then build the workflows, automations, and training so the recommendation actually shows up in the business.",
      },
      {
        question: "Can you train our employees to use AI?",
        answer:
          "Yes. Employee AI training is part of the work, including practical ChatGPT and workplace AI sessions tied to real roles rather than a generic overview.",
      },
      {
        question: "Do you work with companies outside Jackson and Madison?",
        answer:
          "Yes. We are based in Madison and work statewide, including Oxford, Hattiesburg, Tupelo, and the Mississippi Gulf Coast, plus other Southern markets. See Serving the South.",
      },
    ],
    ctaHeadline: "Not sure where AI fits in your Mississippi business?",
    ctaBody:
      "Start with the AI + Automation Assessment, or talk with Pixel Narratives about the workflows, bottlenecks, and opportunities inside the company.",
    relatedLinks: [
      ...sharedRelatedLinks,
      { href: "/gulf-coast-ai-studio", label: "AI consulting on the Gulf Coast" },
    ],
  },
  "birmingham-ai-studio": {
    slug: "birmingham-ai-studio",
    title:
      "AI Consulting & Implementation in Birmingham, AL | Pixel Narratives",
    description:
      "Pixel Narratives works with Birmingham and Central Alabama businesses on AI consulting, automation, implementation, and employee training. Based in Madison, Mississippi.",
    h1: "AI Consulting & Implementation in Birmingham",
    marketLabel: "Birmingham, Alabama",
    inMarketPhrase: "in Birmingham",
    breadcrumbName: "Birmingham",
    intro:
      "Pixel Narratives works with businesses across Birmingham and Central Alabama. We help companies use AI, automation, and better systems to save time, improve productivity, streamline operations, and win more customers. We do not have a Birmingham office; we work with Birmingham teams remotely from Madison, Mississippi.",
    areaServed: [{ type: "City", name: "Birmingham", region: "AL" }],
    consulting: {
      heading: "AI consulting in Birmingham",
      intro: [
        "Birmingham companies often already have capable people and a pile of software. What they lack is a clear order of work: what to automate, what to leave alone, and who will own the change.",
        "We start with operations, not a tool list. That includes opportunity identification, readiness, process analysis, tool selection, a practical roadmap, and responsible guidance on what the team should and should not put into AI systems. Fractional Chief AI Officer support is available when the company wants that ownership over time.",
      ],
    },
    automation: {
      heading: "AI automation and implementation in Birmingham",
      intro: [
        "Professional services, construction, finance, and agency teams in Birmingham usually need faster follow-up and fewer manual handoffs, not a new platform for its own sake.",
        "We implement lead intake, CRM workflows, customer communication, reporting, scheduling, document processing, and the connections between tools the team already uses.",
      ],
    },
    training: {
      heading: "AI training for Birmingham businesses",
      intro: [
        "Employee AI training in Birmingham is most useful when it is tied to proposals, client communication, estimating, reporting, and the other work people already do.",
        "We run practical, role-specific sessions — including ChatGPT and workplace AI — so leadership and staff leave knowing what to try on Monday.",
      ],
    },
    caio: {
      heading: "Fractional Chief AI Officer support in Birmingham",
      intro: [
        "A Fractional Chief AI Officer, or Fractional CAIO, is a fit for Birmingham companies that want ongoing AI leadership without hiring a full-time executive. We help prioritize, implement, and keep the systems aligned as the work changes.",
      ],
    },
    whoWeHelpHeading: "Who we help in Birmingham",
    whoWeHelpBody: [
      "Birmingham’s mix of professional services, healthcare-related businesses, construction, finance, manufacturing, and agencies is a strong fit for practical AI implementation. We also work with real estate, home services, and other small and midsize companies.",
      "We are not an enterprise AI consultancy. The work is built for owners and leadership teams who still touch operations themselves.",
    ],
    whoWeHelpCategories: [
      "Professional services",
      "Healthcare-related businesses",
      "Construction",
      "Finance",
      "Manufacturing",
      "Agencies",
      "Real estate",
      "Home services",
      "Small and midsize companies",
    ],
    marketHeading: "Birmingham and Central Alabama",
    marketBody: [
      "Birmingham businesses tend to compete on relationships and delivery. The gap we see is rarely a lack of effort. It is slow follow-up, disconnected tools, and work that still depends on a few people remembering the next step.",
      "Professional services and finance firms often need cleaner intake and document handling. Construction and home services need scheduling, estimating, and customer communication that does not live in texts. Agencies need internal systems that keep client work visible.",
      "We work with companies in Birmingham, Homewood, Mountain Brook, Hoover, and nearby communities. Engagements start on Zoom. Delivery happens from Madison, Mississippi.",
    ],
    faqs: [
      {
        question: "What does an AI consultant actually do?",
        answer:
          "An AI consultant should inspect how the company already operates, identify a short list of useful AI and automation opportunities, and help put those changes into daily work. Pixel Narratives does that consulting and the implementation that follows.",
      },
      {
        question: "How can AI help a small business in Birmingham?",
        answer:
          "By reducing repetitive work and speeding up response to customers and jobs. For a Birmingham firm, that often means faster lead handling, cleaner CRM updates, better reporting, and less time spent on documents and admin.",
      },
      {
        question: "What business processes can AI automate?",
        answer:
          "Lead intake and follow-up, CRM workflows, customer communication, internal knowledge systems, reporting, scheduling, document processing, sales workflows, marketing workflows, and other work that repeats every week.",
      },
      {
        question: "How much does AI consulting cost?",
        answer:
          "It depends on scope. Guided implementation starts at $1,500/month with a three-month minimum. Fractional Chief AI Officer support starts at $5,000/month. We scope the work before you start.",
      },
      {
        question: "Does Pixel Narratives implement the systems it recommends?",
        answer:
          "Yes. We do not stop at a recommendation. Automation + Implementation is the core of the work.",
      },
      {
        question: "Can you train our employees to use AI?",
        answer:
          "Yes. We provide practical employee AI training and ChatGPT-oriented workplace sessions matched to real roles.",
      },
      {
        question: "Do you work with companies outside Birmingham?",
        answer:
          "Yes. We work across Central Alabama and other Southern markets from our Madison, Mississippi base. We do not operate a Birmingham office.",
      },
    ],
    ctaHeadline: "Not sure where AI fits in your Birmingham business?",
    ctaBody:
      "Start with the AI + Automation Assessment, or talk with Pixel Narratives about the workflows and bottlenecks inside the company.",
    relatedLinks: sharedRelatedLinks,
  },
  "gulf-coast-ai-studio": {
    slug: "gulf-coast-ai-studio",
    title: "AI Consulting & Implementation on the Gulf Coast | Pixel Narratives",
    description:
      "AI consulting, automation, and implementation for Mississippi Gulf Coast, Mobile, and Florida Panhandle businesses. Pixel Narratives is based in Madison, Mississippi.",
    h1: "AI Consulting & Implementation on the Mississippi Gulf Coast",
    marketLabel: "Gulf Coast",
    inMarketPhrase: "on the Gulf Coast",
    breadcrumbName: "Gulf Coast",
    intro:
      "Pixel Narratives works with businesses throughout the Mississippi Gulf Coast — including Gulfport, Biloxi, Ocean Springs, and Pascagoula — as well as Mobile, Alabama and the Florida Panhandle. We help companies use AI, automation, and better systems to save time, improve productivity, streamline operations, and win more customers. Delivery is from Madison, Mississippi; we do not claim a coastal office.",
    areaServed: [
      { type: "City", name: "Gulfport", region: "MS" },
      { type: "City", name: "Biloxi", region: "MS" },
      { type: "City", name: "Mobile", region: "AL" },
      { type: "AdministrativeArea", name: "Florida Panhandle", region: "FL" },
    ],
    consulting: {
      heading: "AI consulting for Gulf Coast businesses",
      intro: [
        "Coastal operators often run hospitality, service, or multi-location work that changes with the season. Consulting has to respect that: identify where AI helps intake, staffing communication, follow-up, and visibility without adding another system nobody will open in July.",
        "We cover opportunity identification, readiness, workflow analysis, tool selection, implementation roadmaps, and Fractional Chief AI Officer support when a company wants ongoing ownership of AI adoption.",
      ],
    },
    automation: {
      heading: "AI automation and implementation on the Gulf Coast",
      intro: [
        "Restaurants, hotels, real estate teams, contractors, and professional services along the coast still lose time to the same work: missed inquiries, slow follow-up, scattered schedules, and reports assembled by hand.",
        "We implement around the tools already in use — including lead handling, CRM, customer communication, scheduling, documents, and marketing follow-up — and connect those tools instead of replacing them without cause.",
      ],
    },
    training: {
      heading: "AI training for Gulf Coast teams",
      intro: [
        "Hospitality and service teams need training that fits a busy floor or a small office, not a full-day seminar that never gets used. We teach practical employee AI skills, including ChatGPT for writing, organizing, and follow-up, matched to the job.",
        "Owners and managers get a clearer view of where AI belongs in guest communication, listings, estimates, and admin.",
      ],
    },
    caio: {
      heading: "Fractional Chief AI Officer support on the Gulf Coast",
      intro: [
        "Fractional Chief AI Officer, or Fractional CAIO, support is for coastal companies that want someone responsible for AI adoption across locations or a busy season without hiring a full-time executive.",
      ],
    },
    whoWeHelpHeading: "Who we help on the Gulf Coast",
    whoWeHelpBody: [
      "The corridor is heavy on hospitality, restaurants, tourism-related businesses, real estate, professional services, construction, home services, and operators who run more than one location.",
      "Those businesses feel missed leads and slow follow-up immediately. The work is built for small and midsize companies, not enterprise AI programs.",
    ],
    whoWeHelpCategories: [
      "Hospitality and tourism",
      "Restaurants",
      "Real estate",
      "Professional services",
      "Construction",
      "Home services",
      "Multi-location operations",
      "Retail and regional services",
    ],
    marketHeading: "Mississippi Gulf Coast, Mobile, and the Florida Panhandle",
    marketBody: [
      "On the Mississippi Gulf Coast, we work with businesses in Gulfport, Biloxi, Ocean Springs, Pascagoula, and nearby communities. Seasonality, visitor traffic, and local-service demand make follow-up and online visibility operational issues, not marketing extras.",
      "Mobile and the Florida Panhandle — including Pensacola, Fort Walton Beach, and Panama City — have a similar mix of hospitality, professional services, and trades. We work with those teams the same way: look at how the week actually runs, then implement.",
      "Pixel Narratives is based in Madison. Coastal work happens over Zoom and from that office. If you are inland in Mississippi, the statewide page is the better starting point.",
    ],
    faqs: [
      {
        question: "What does an AI consultant actually do?",
        answer:
          "We review how the business currently takes inquiries, follows up, schedules work, and reports results, then identify useful AI opportunities and implement the workflows to match. Advice without a build is not the engagement.",
      },
      {
        question: "How can AI help a small business on the Mississippi Gulf Coast?",
        answer:
          "By catching leads faster, reducing repetitive guest or customer communication, tightening scheduling, and making it easier for visitors and locals to find the business online. That applies in Gulfport, Biloxi, and neighboring cities as much as it does inland.",
      },
      {
        question: "What business processes can AI automate?",
        answer:
          "Lead intake, follow-up, CRM updates, customer communication, scheduling, document processing, reporting, sales and marketing workflows, and other repeating administrative work.",
      },
      {
        question: "How much does AI consulting cost?",
        answer:
          "Scope drives the number. Guided implementation starts at $1,500/month with a three-month minimum. Fractional Chief AI Officer support starts at $5,000/month.",
      },
      {
        question: "Does Pixel Narratives implement the systems it recommends?",
        answer:
          "Yes. Implementation is the point of the work, including automations, internal tools, and training.",
      },
      {
        question: "Can you train our employees to use AI?",
        answer:
          "Yes. We train employees and managers on practical workplace AI, including ChatGPT, in the context of hospitality, service, and office roles.",
      },
      {
        question: "Do you work with companies outside Gulfport and Biloxi?",
        answer:
          "Yes. This page covers the Mississippi Gulf Coast, Mobile, and the Florida Panhandle. We also work statewide in Mississippi and in other Southern markets. We do not have a coastal office.",
      },
    ],
    ctaHeadline: "Not sure where AI fits on the Gulf Coast?",
    ctaBody:
      "Start with the AI + Automation Assessment, or talk with Pixel Narratives about the bottlenecks inside the business — from missed inquiries to slow follow-up.",
    relatedLinks: [
      ...sharedRelatedLinks,
      {
        href: "/mississippi-ai-studio",
        label: "AI consulting for Mississippi businesses",
      },
    ],
  },
  "jacksonville-ai-studio": {
    slug: "jacksonville-ai-studio",
    title:
      "AI Consulting & Implementation in Jacksonville, FL | Pixel Narratives",
    description:
      "Pixel Narratives works with Jacksonville, Florida businesses on AI consulting, automation, implementation, and employee training. Based in Madison, Mississippi.",
    h1: "AI Consulting & Implementation in Jacksonville, Florida",
    marketLabel: "Jacksonville, Florida",
    inMarketPhrase: "in Jacksonville",
    breadcrumbName: "Jacksonville",
    intro:
      "Pixel Narratives works with companies in Jacksonville, Florida and the surrounding area. We help businesses use AI, automation, and better systems to save time, improve productivity, streamline operations, and win more customers. We are based in Madison, Mississippi, and we do not have a Jacksonville office.",
    areaServed: [{ type: "City", name: "Jacksonville", region: "FL" }],
    consulting: {
      heading: "AI consulting in Jacksonville",
      intro: [
        "Jacksonville is a large, spread-out market. Companies often have demand; they lose time in intake, dispatch, follow-up, and the distance between tools. Consulting should name those leaks and set an order of work.",
        "We identify AI opportunities, assess readiness, map workflows, help choose tools, and write an implementation roadmap. Fractional Chief AI Officer support is there for companies that want ongoing leadership.",
      ],
    },
    automation: {
      heading: "AI automation and implementation in Jacksonville",
      intro: [
        "Logistics, professional services, financial services, trades, and agencies in Jacksonville usually need better movement of information, not another dashboard to ignore.",
        "We implement lead handling, CRM workflows, customer communication, reporting, scheduling, document processing, and integrations between systems the team already pays for.",
      ],
    },
    training: {
      heading: "AI training for Jacksonville businesses",
      intro: [
        "Employee AI training is useful in Jacksonville when it is specific: how a coordinator, salesperson, or technician uses AI in the work they already have, including practical ChatGPT use.",
        "Leadership sessions cover what to implement first and how the team should use AI in the work they already have.",
      ],
    },
    caio: {
      heading: "Fractional Chief AI Officer support in Jacksonville",
      intro: [
        "A Fractional Chief AI Officer, or Fractional CAIO, gives Jacksonville companies AI strategy and implementation leadership without a full-time executive hire. We stay with the work after the first project.",
      ],
    },
    whoWeHelpHeading: "Who we help in Jacksonville",
    whoWeHelpBody: [
      "We work with professional services, logistics, financial services, real estate, healthcare businesses, construction and home services, agencies, and other growing small and midsize companies in the Jacksonville area.",
      "The fit is an owner or leadership team that wants implementation help, not an enterprise transformation program.",
    ],
    whoWeHelpCategories: [
      "Professional services",
      "Logistics",
      "Financial services",
      "Real estate",
      "Healthcare businesses",
      "Construction and home services",
      "Agencies",
      "Small and midsize companies",
    ],
    marketHeading: "Jacksonville and Northeast Florida",
    marketBody: [
      "Jacksonville businesses often serve a wide geography — from the beaches to the Westside to the First Coast towns around the city. That makes follow-up, routing, and a clear online presence part of operations, not a separate marketing hobby.",
      "Logistics and distribution teams feel reporting and handoff problems first. Professional services and finance feel intake and document load. Trades and home services feel missed calls and slow estimates.",
      "We work with Jacksonville companies remotely from Madison, Mississippi. If you are on the Florida Panhandle, the Gulf Coast page is the closer fit.",
    ],
    faqs: [
      {
        question: "What does an AI consultant actually do?",
        answer:
          "We inspect current operations, identify where AI and automation would help, recommend a practical path, and implement the workflows and training. Pixel Narratives is hired to put AI to work, not to produce a slide deck.",
      },
      {
        question: "How can AI help a small business in Jacksonville?",
        answer:
          "Most Jacksonville SMBs benefit first from faster lead response, cleaner CRM and dispatch information, less manual reporting, and better handling of documents and customer communication.",
      },
      {
        question: "What business processes can AI automate?",
        answer:
          "Lead intake and follow-up, CRM workflows, customer communication, internal knowledge systems, reporting, scheduling, document processing, sales workflows, marketing workflows, and other repeating admin.",
      },
      {
        question: "How much does AI consulting cost?",
        answer:
          "Guided implementation starts at $1,500/month with a three-month minimum. Fractional Chief AI Officer support starts at $5,000/month. Projects are scoped before work begins.",
      },
      {
        question: "Does Pixel Narratives implement the systems it recommends?",
        answer:
          "Yes. Automation + Implementation is the primary service. Consulting exists to choose the right build, not to replace it.",
      },
      {
        question: "Can you train our employees to use AI?",
        answer:
          "Yes. We offer practical employee AI training and ChatGPT-oriented workplace training for staff and leadership.",
      },
      {
        question: "Do you work with companies outside Jacksonville?",
        answer:
          "Yes. We work across Northeast Florida and other Southern markets from Madison, Mississippi. We do not have a Jacksonville office.",
      },
    ],
    ctaHeadline: "Not sure where AI fits in your Jacksonville business?",
    ctaBody:
      "Start with the AI + Automation Assessment, or talk with Pixel Narratives about the workflows and bottlenecks inside the company.",
    relatedLinks: [
      ...sharedRelatedLinks,
      {
        href: "/gulf-coast-ai-studio",
        label: "AI consulting on the Gulf Coast",
      },
    ],
  },
  "memphis-ai-studio": {
    slug: "memphis-ai-studio",
    title: "AI Consulting & Implementation in Memphis, TN | Pixel Narratives",
    description:
      "Pixel Narratives works with Memphis businesses on AI consulting, automation, implementation, and employee training. Based in Madison, Mississippi.",
    h1: "AI Consulting & Implementation for Memphis Businesses",
    marketLabel: "Memphis, Tennessee",
    inMarketPhrase: "in Memphis",
    breadcrumbName: "Memphis",
    intro:
      "Pixel Narratives works with businesses throughout Memphis and the Mid-South. We help companies use AI, automation, and better systems to save time, improve productivity, streamline operations, and win more customers. We are based in Madison, Mississippi, and we do not have a Memphis office.",
    areaServed: [{ type: "City", name: "Memphis", region: "TN" }],
    consulting: {
      heading: "AI consulting in Memphis",
      intro: [
        "Memphis companies in logistics, distribution, professional services, and trades often know the operation well and still lose time in coordination: who has the lead, what got promised, and what the report actually says.",
        "Our consulting work is a clear-eyed look at those workflows, a readiness read, tool selection, and a roadmap that can be implemented. Fractional Chief AI Officer support is available when the company wants that function on an ongoing basis.",
      ],
    },
    automation: {
      heading: "AI automation and implementation in Memphis",
      intro: [
        "Distribution, hospitality, healthcare-related businesses, and home services in Memphis feel missed follow-up and manual reporting quickly. Implementation should attach to the systems already in the building.",
        "We build lead intake, CRM workflows, customer communication, scheduling, document processing, reporting, and the connections between those tools.",
      ],
    },
    training: {
      heading: "AI training for Memphis businesses",
      intro: [
        "Training in Memphis is most useful when warehouse, office, sales, and leadership roles each get a version that matches their day. That includes practical ChatGPT and workplace AI use, not a generic lecture.",
        "People leave knowing how to draft, summarize, follow up, and keep customer information in the right place.",
      ],
    },
    caio: {
      heading: "Fractional Chief AI Officer support in Memphis",
      intro: [
        "Fractional Chief AI Officer, or Fractional CAIO, support is for Memphis companies that need someone to own AI priorities and implementation without creating a full-time executive role.",
      ],
    },
    whoWeHelpHeading: "Who we help in Memphis",
    whoWeHelpBody: [
      "Memphis has a distinct mix of logistics, distribution, professional services, healthcare, hospitality, real estate, and home services. We work with those SMBs and with other owner-led companies that need implementation help.",
      "We do not position this work as enterprise AI consulting. It is built for teams that still run the business day to day.",
    ],
    whoWeHelpCategories: [
      "Logistics and distribution",
      "Professional services",
      "Healthcare businesses",
      "Hospitality",
      "Real estate",
      "Home services",
      "Construction",
      "Small and midsize companies",
    ],
    marketHeading: "Memphis and the Mid-South",
    marketBody: [
      "Logistics and distribution set a lot of the rhythm in Memphis. Those businesses live on handoffs, appointments, and information that has to be right the first time. AI and automation help when they attach to that reality — status updates, follow-up, reporting — rather than sitting beside it.",
      "Hospitality, healthcare-related practices, real estate, and home services have a different pressure: customers expect a fast reply, and the team is already on the job. Implementation here is usually intake, communication, and scheduling.",
      "We work with Memphis-area companies from Madison, Mississippi. The distance is small enough for context and the work is remote-first.",
    ],
    faqs: [
      {
        question: "What does an AI consultant actually do?",
        answer:
          "We examine how work moves through the company, identify where AI would help, and implement the automations, systems, and training to match. Pixel Narratives is an implementation partner, not a slide-only advisor.",
      },
      {
        question: "How can AI help a small business in Memphis?",
        answer:
          "By speeding follow-up, reducing repetitive admin, tightening reporting, and connecting tools so logistics, service, or office teams are not rebuilding the same information all day.",
      },
      {
        question: "What business processes can AI automate?",
        answer:
          "Lead intake and follow-up, CRM workflows, customer communication, internal knowledge systems, reporting, scheduling, document processing, sales and marketing workflows, and other repeating administrative work.",
      },
      {
        question: "How much does AI consulting cost?",
        answer:
          "Guided implementation starts at $1,500/month with a three-month minimum. Fractional Chief AI Officer support starts at $5,000/month. We scope the engagement first.",
      },
      {
        question: "Does Pixel Narratives implement the systems it recommends?",
        answer:
          "Yes. If we recommend a workflow, we are prepared to help build it, train the team, and keep it usable.",
      },
      {
        question: "Can you train our employees to use AI?",
        answer:
          "Yes. Employee AI training and practical ChatGPT-oriented workplace training are part of how implementation holds.",
      },
      {
        question: "Do you work with companies outside Memphis?",
        answer:
          "Yes. We work across the Mid-South and other Southern markets from Madison, Mississippi. We do not have a Memphis office.",
      },
    ],
    ctaHeadline: "Not sure where AI fits in your Memphis business?",
    ctaBody:
      "Start with the AI + Automation Assessment, or talk with Pixel Narratives about the workflows, bottlenecks, and opportunities inside the company.",
    relatedLinks: sharedRelatedLinks,
  },
};

export const locationLandingSlugs = Object.keys(locationLandingPages);

export const hubMarketCards = [
  {
    slug: "mississippi-ai-studio",
    label: "Mississippi",
    description:
      "Pixel Narratives is based in Madison and works with businesses across Jackson, Central Mississippi, and the rest of the state. The work is AI consulting, automation, implementation, and training for owner-led companies.",
    hrefLabel: "AI consulting and implementation for Mississippi businesses →",
  },
  {
    slug: "birmingham-ai-studio",
    label: "Birmingham, Alabama",
    description:
      "We work with Birmingham and Central Alabama companies in professional services, construction, finance, agencies, and other SMBs. Engagements run remotely from Madison. There is no Birmingham office.",
    hrefLabel: "AI consulting and implementation in Birmingham →",
  },
  {
    slug: "gulf-coast-ai-studio",
    label: "Gulf Coast",
    description:
      "Coverage includes Gulfport, Biloxi, Ocean Springs, Pascagoula, Mobile, and the Florida Panhandle. Hospitality, trades, real estate, and multi-location operators are a common fit.",
    hrefLabel: "AI consulting and implementation on the Gulf Coast →",
  },
  {
    slug: "jacksonville-ai-studio",
    label: "Jacksonville, Florida",
    description:
      "We work with Jacksonville-area professional services, logistics, financial services, trades, and agencies that need implementation, not another software recommendation. Delivery is from Madison, Mississippi.",
    hrefLabel: "AI consulting and implementation in Jacksonville →",
  },
  {
    slug: "memphis-ai-studio",
    label: "Memphis, Tennessee",
    description:
      "Memphis work often sits at the intersection of logistics, distribution, professional services, hospitality, and home services. We help those SMBs put AI into follow-up, reporting, and daily operations.",
    hrefLabel: "AI consulting and implementation in Memphis →",
  },
] as const;

export const hubSecondaryMentions = SERVICE_AREA_HUB_MENTIONS.filter(
  (place) => place.name === "Nashville" || place.name === "New Orleans",
);

export { SERVICE_AREA_PRIMARY };

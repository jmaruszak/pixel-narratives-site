import type { ServiceAreaPlace } from "./businessLocation";

export type LocationServiceId =
  | "automation"
  | "training"
  | "websites"
  | "marketing";

export type LocationLandingPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  marketLabel: string;
  breadcrumbName: string;
  intro: string;
  areaServed: ServiceAreaPlace[];
  marketHeading: string;
  marketBody: string[];
  serviceNotes: Record<LocationServiceId, string>;
  engagementHeading: string;
  engagementBody: string[];
  faqs: Array<{ question: string; answer: string }>;
  ctaHeadline: string;
  ctaBody: string;
};

export const locationLandingPages: Record<string, LocationLandingPage> = {
  mississippi: {
    slug: "locations/mississippi",
    title: "AI Implementation and Training in Mississippi | Pixel Narratives",
    description:
      "Madison-based Pixel Narratives helps Mississippi businesses with AI implementation, standalone team training, visibility, and marketing.",
    h1: "Put AI to work in your Mississippi business.",
    marketLabel: "Mississippi",
    breadcrumbName: "Mississippi",
    intro:
      "Mississippi is home. Pixel Narratives is based in Madison and works with businesses in the Jackson Metro and across the state to identify useful AI opportunities and put them into practice.",
    areaServed: [
      { type: "State", name: "Mississippi" },
      { type: "City", name: "Madison", region: "MS" },
      { type: "AdministrativeArea", name: "Jackson Metro", region: "MS" },
    ],
    marketHeading: "Built in Mississippi for the way local businesses work",
    marketBody: [
      "Owners and leadership teams do not need another pile of software. They need a clear view of where time is being lost, which opportunities matter, and what their people can use.",
      "We work with businesses in Madison, Ridgeland, Jackson, Flowood, Brandon, Gluckstadt, and communities throughout Mississippi. A project can begin with one contained problem or grow into an ongoing Partner relationship.",
      "The work is shaped around the business. Existing commercial tools may be enough. Other situations call for a better process, hands-on implementation, or a custom solution.",
    ],
    serviceNotes: {
      automation:
        "Identify worthwhile opportunities, improve adoption, connect useful tools, and implement a practical solution. Start with one project or bring us in as an ongoing AI partner.",
      training:
        "Give your team practical, standalone training on ChatGPT, Claude, Microsoft Copilot, AI video, research, creative work, and everyday productivity.",
      websites:
        "Build a useful website and strengthen the signals that help customers find and understand your business in traditional and AI powered search.",
      marketing:
        "Create advertising, video, and campaigns that earn attention and give interested customers a clear next step.",
    },
    engagementHeading: "Start with the problem in front of you",
    engagementBody: [
      "Some Mississippi businesses begin with an assessment. Others already know the workflow, team, website, or campaign that needs attention.",
      "We will help you choose a sensible starting point, define the work, and decide what a useful result should look like before anything begins.",
    ],
    faqs: [
      {
        question: "Where is Pixel Narratives based?",
        answer:
          "Pixel Narratives is based in Madison, Mississippi and serves businesses throughout the state.",
      },
      {
        question: "Can we hire Pixel Narratives for one project?",
        answer:
          "Yes. You can start with a contained project, an assessment, a team workshop, a website, or a campaign. Ongoing support is available when the need is broader.",
      },
      {
        question: "Does AI training require custom software?",
        answer:
          "No. Training is a standalone service built around your team, its work, and useful tools such as ChatGPT, Claude, and Microsoft Copilot.",
      },
    ],
    ctaHeadline: "Let's put AI to work for your business.",
    ctaBody:
      "Whether you have a specific project in mind or you're exploring what's possible, we'd love to hear from you.",
  },
  memphis: {
    slug: "locations/memphis",
    title: "AI Implementation and Training in Memphis | Pixel Narratives",
    description:
      "Pixel Narratives helps Memphis businesses put AI to work through practical implementation, team training, visibility, and marketing.",
    h1: "Practical AI help for Memphis businesses.",
    marketLabel: "Memphis, Tennessee",
    breadcrumbName: "Memphis",
    intro:
      "Pixel Narratives works with businesses throughout Memphis and the surrounding Mid-South. We help owners and teams understand where AI fits, choose a useful path, and carry the work into day-to-day operations.",
    areaServed: [{ type: "City", name: "Memphis", region: "TN" }],
    marketHeading: "AI support that fits the way the business runs",
    marketBody: [
      "Memphis businesses often manage a lot of coordination across customers, teams, vendors, schedules, and information. Small delays in follow-up or handoffs can create a much larger problem by the end of the week.",
      "We begin by learning how the work moves now. From there, we can help a team use tools it already has, improve a process, implement a focused solution, or provide ongoing guidance as priorities change.",
      "That approach works for owner-led companies and established teams that want practical progress without turning AI into a separate department.",
    ],
    serviceNotes: {
      automation:
        "Find where AI can reduce friction, improve follow-up, support better decisions, or make recurring work easier to manage.",
      training:
        "Build your team’s confidence with standalone workshops for the AI tools and tasks that matter to their roles.",
      websites:
        "Improve the website, search foundation, and business information that help Memphis customers find you and know what to do next.",
      marketing:
        "Develop campaigns, advertising, and creative work around a clear objective instead of producing disconnected assets.",
    },
    engagementHeading: "A project or an ongoing relationship",
    engagementBody: [
      "Bring us a specific workflow, a team that needs training, a website that is underperforming, or a campaign that needs a stronger idea.",
      "If the need crosses departments or will change over time, Partner and Enterprise Partner engagements provide ongoing help with implementation, training, and AI decisions.",
    ],
    faqs: [
      {
        question: "What AI services are available to Memphis businesses?",
        answer:
          "Pixel Narratives offers AI implementation, standalone team training, visibility, marketing, and ongoing Partner support.",
      },
      {
        question: "Can you train our team on the tools we already use?",
        answer:
          "Yes. Workshops are tailored to the organization, the participants, the tools they use, and what they need to accomplish.",
      },
      {
        question: "Do you only build custom AI software?",
        answer:
          "No. Custom development is one option. Many engagements focus on existing tools, adoption, workflow improvement, training, or practical guidance.",
      },
    ],
    ctaHeadline: "Ready to put AI to work in Memphis?",
    ctaBody:
      "Whether you have a specific project in mind or you're exploring what's possible, we'd love to hear from you.",
  },
  birmingham: {
    slug: "locations/birmingham",
    title: "AI Implementation and Training in Birmingham | Pixel Narratives",
    description:
      "Pixel Narratives helps Birmingham businesses with AI implementation, standalone team training, visibility, and marketing.",
    h1: "Put practical AI to work in Birmingham.",
    marketLabel: "Birmingham, Alabama",
    breadcrumbName: "Birmingham",
    intro:
      "We work with Birmingham business owners and leadership teams that want a clear way to evaluate AI opportunities and turn the right ones into useful work.",
    areaServed: [{ type: "City", name: "Birmingham", region: "AL" }],
    marketHeading: "Move from interest to useful implementation",
    marketBody: [
      "A leadership team may know AI matters without knowing which opportunities deserve attention first. Employees may already be experimenting with tools while the business still lacks a shared approach.",
      "We help bring order to that work. The engagement can focus on priorities, adoption, training, a business process, or a defined solution with a finish line.",
      "For organizations that need continued support, Partner and Enterprise Partner engagements provide ongoing help with decisions and implementation.",
    ],
    serviceNotes: {
      automation:
        "Evaluate opportunities, guide tool choices, improve adoption, and put practical solutions into the way your business already works.",
      training:
        "Train leadership, departments, or a broader team on ChatGPT, Claude, Microsoft Copilot, AI video, research, creative work, and productivity.",
      websites:
        "Create a clearer website and stronger online presence so customers and search systems can understand the business.",
      marketing:
        "Plan and produce advertising, campaigns, video, and creative work designed to earn attention and generate opportunity.",
    },
    engagementHeading: "Choose a clear first step",
    engagementBody: [
      "An assessment can help leadership prioritize. A workshop can help a team use AI well. A focused implementation can solve one expensive problem.",
      "We define the purpose, scope, and expected result before work begins, then stay close enough to make sure the idea becomes useful.",
    ],
    faqs: [
      {
        question: "How can Pixel Narratives help a Birmingham business?",
        answer:
          "We help identify AI opportunities, improve adoption, train teams, implement practical solutions, strengthen online visibility, and create marketing campaigns.",
      },
      {
        question: "Can you work with our existing software?",
        answer:
          "Yes. We begin with the tools and processes already in the business and recommend change only when it supports a clear result.",
      },
      {
        question: "Can we work with you on an ongoing basis?",
        answer:
          "Yes. Partner and Enterprise Partner engagements are available when you need continued help with implementation, training, and AI decisions.",
      },
    ],
    ctaHeadline: "Let's put AI to work in Birmingham.",
    ctaBody:
      "Whether you have a specific project in mind or you're exploring what's possible, we'd love to hear from you.",
  },
  "mobile-eastern-shore": {
    slug: "locations/mobile-eastern-shore",
    title:
      "AI Implementation in Mobile and the Eastern Shore | Pixel Narratives",
    description:
      "Pixel Narratives serves businesses in Mobile, Daphne, Fairhope, and Alabama's Eastern Shore with AI implementation, team training, visibility, and marketing.",
    h1: "AI implementation for Mobile and the Eastern Shore.",
    marketLabel: "Mobile + Alabama’s Eastern Shore",
    breadcrumbName: "Mobile + Eastern Shore",
    intro:
      "Pixel Narratives works with businesses throughout Mobile and Alabama’s Eastern Shore, including Daphne, Fairhope, and surrounding communities. We help owners and teams decide where AI makes sense and put it to work.",
    areaServed: [
      { type: "City", name: "Mobile", region: "AL" },
      {
        type: "AdministrativeArea",
        name: "Alabama Eastern Shore",
        region: "AL",
      },
      { type: "City", name: "Daphne", region: "AL" },
      { type: "City", name: "Fairhope", region: "AL" },
    ],
    marketHeading: "Practical help for Mobile and the Eastern Shore",
    marketBody: [
      "Businesses in Mobile, Daphne, Fairhope, and nearby communities can engage Pixel Narratives for the same services available throughout the region, from a contained first project to an ongoing Partner relationship.",
      "The starting point is a practical business need. We learn how the work gets done, identify options worth considering, and help carry the right one into practice.",
    ],
    serviceNotes: {
      automation:
        "Identify where AI can help, improve how existing tools are used, guide adoption, and implement a focused solution when the opportunity is clear.",
      training:
        "Give leadership and teams practical training on tools such as ChatGPT, Claude, Microsoft Copilot, AI video, research, and creative production.",
      websites:
        "Build or improve a website and strengthen online visibility for customers searching across Mobile and the Eastern Shore.",
      marketing:
        "Create advertising, video, and campaigns that help a business earn attention and turn it into a useful next step.",
    },
    engagementHeading: "Serve the need in front of the business",
    engagementBody: [
      "A company may need a team workshop, a clearer website, help with one workflow, or an experienced partner to guide AI decisions over time.",
      "We keep the engagement grounded in what the business wants to accomplish and what its people can use.",
    ],
    faqs: [
      {
        question: "Which Mobile area communities do you serve?",
        answer:
          "Pixel Narratives works with businesses throughout Mobile and Alabama’s Eastern Shore, including Daphne, Fairhope, and surrounding communities.",
      },
      {
        question: "What services are available in Mobile and the Eastern Shore?",
        answer:
          "AI implementation, standalone team training, visibility, marketing, and ongoing Partner support are available.",
      },
      {
        question: "Can we begin with a contained project?",
        answer:
          "Yes. Build engagements can start as a contained project with one useful outcome and a defined finish line.",
      },
    ],
    ctaHeadline: "Let's put AI to work for your business.",
    ctaBody:
      "Whether you have a specific project in mind or you're exploring what's possible, we'd love to hear from you.",
  },
};

export const locationLandingSlugs = Object.keys(locationLandingPages);

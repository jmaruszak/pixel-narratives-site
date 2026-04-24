export type SeoLandingPage = {
  slug: string;
  title: string;
  description: string;
  offer: "ads" | "intelligence";
  h1: string;
  intro: string;
  cta: string;
  sections: Array<{
    heading: string;
    answer?: string;
    body?: string[];
    bullets?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
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

export const seoLandingPages: Record<string, SeoLandingPage> = {
  "ai-commercial-production-company": {
    slug: "ai-commercial-production-company",
    title: "AI Commercial Production Company | Pixel Narratives",
    description:
      "AI commercial production for brands that need cinematic, concept-driven ads built to earn attention and drive action.",
    offer: "ads",
    h1: "AI Commercial Production Company for Shareable Brand Ads",
    intro:
      "Pixel Narratives creates cinematic, AI-powered commercials built around strategy, story, and distribution reality. We help brands move from generic content to ads people actually watch.",
    cta: "Request a concept",
    sections: [
      {
        heading: "What is an AI commercial production company?",
        answer:
          "An AI commercial production company uses AI-assisted ideation, visual development, editing, and production workflows to create brand commercials faster and more efficiently without losing narrative quality.",
      },
      {
        heading: "Why brands use AI commercial production",
        answer:
          "The advantage is not just speed. It is faster concept testing, more visual range, and a production model that lets a strong idea become a polished campaign asset with less friction.",
        bullets: [
          "Wyzowl reports that 91% of businesses use video as a marketing tool.",
          "96% of video marketers say video has increased brand awareness.",
          "84% of video marketers say video directly increased sales.",
        ],
      },
      {
        heading: "What Pixel Narratives builds",
        bullets: [
          "Brand commercials and social-first campaign spots.",
          "Spec ads, launch videos, and product/service promotions.",
          "AI-assisted cinematic ads with a clear setup, turn, and payoff.",
        ],
      },
      {
        heading: "AI commercial production vs. traditional production",
        table: {
          headers: ["Factor", "Traditional production", "AI-powered production"],
          rows: [
            ["Concept testing", "Slower and more expensive", "Faster visual exploration"],
            ["Iteration speed", "Often limited by shoot logistics", "More flexible revisions"],
            ["Creative range", "Depends on locations and crew", "Wider visual development options"],
            ["Quality driver", "Crew and execution", "Concept, direction, editing, and polish"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "What is AI commercial production?",
        answer:
          "AI commercial production uses AI tools to support concepting, visual development, editing, and delivery of commercial video ads.",
      },
      {
        question: "Is AI video good enough for brand advertising?",
        answer:
          "Yes, when it is directed by a strong concept, edited cinematically, and built for a specific audience.",
      },
      {
        question: "What types of commercials can Pixel Narratives create?",
        answer:
          "Pixel Narratives creates brand spots, product ads, launch videos, spec campaigns, social ads, and narrative-first promotional content.",
      },
      {
        question: "How long does AI commercial production take?",
        answer:
          "Timelines vary by scope, but AI-assisted production can shorten concepting and iteration compared with traditional workflows.",
      },
      {
        question: "Does AI replace creative direction?",
        answer:
          "No. AI accelerates production; creative direction determines whether the ad is memorable.",
      },
      {
        question: "Who is AI commercial production best for?",
        answer:
          "It is best for brands that need high-impact ad creative without a bloated production model.",
      },
    ],
    relatedLinks: [
      { href: "/ai-video-ad-agency", label: "AI video ad agency" },
      { href: "/cost-of-ai-video-production", label: "cost of AI video production" },
      {
        href: "/how-to-create-ads-people-actually-watch",
        label: "how to create ads people actually watch",
      },
    ],
  },
  "ai-video-ad-agency": {
    slug: "ai-video-ad-agency",
    title: "AI Video Ad Agency | Pixel Narratives",
    description:
      "AI video ad agency creating cinematic, concept-driven ads for brands that need attention, clarity, and shareability.",
    offer: "ads",
    h1: "AI Video Ad Agency for Concept-Driven Campaigns",
    intro:
      "Pixel Narratives is an AI video ad agency for brands that want commercials with a narrative spine, not generic content. We build ads around a concept before we build the asset.",
    cta: "See what we’d create for you",
    sections: [
      {
        heading: "What does an AI video ad agency do?",
        answer:
          "An AI video ad agency combines ad strategy, creative concepting, AI-assisted production, and campaign-ready editing to create video ads built for attention.",
      },
      {
        heading: "Why AI video ads work",
        answer:
          "AI video ads work when they pair faster production with stronger creative judgment. The tool creates options; the concept makes people care.",
      },
      {
        heading: "What we create",
        bullets: [
          "Commercial video ads for web, paid social, and launches.",
          "Brand awareness spots with a narrative hook.",
          "Product and service ads built around audience tension.",
          "AI-native campaign concepts that can be adapted across channels.",
        ],
      },
      {
        heading: "Best-fit brands",
        bullets: [
          "Service businesses with unclear messaging.",
          "Startups launching a new offer.",
          "Brands tired of generic social content.",
          "Teams that need campaign ideas, not just more assets.",
        ],
      },
    ],
    faqs: [
      {
        question: "What makes Pixel Narratives different from a standard video agency?",
        answer:
          "Pixel Narratives builds around narrative intelligence: setup, turn, payoff, and audience behavior.",
      },
      {
        question: "Do you use AI for every video?",
        answer:
          "We use AI where it improves speed, visual development, production flexibility, or iteration quality.",
      },
      {
        question: "Can AI video ads run on paid channels?",
        answer:
          "Yes. Final creative can be adapted for paid social, organic campaigns, landing pages, and launch assets.",
      },
      {
        question: "Are AI ads cheaper than traditional ads?",
        answer:
          "Often, but the real benefit is faster iteration and more creative range.",
      },
      {
        question: "What makes an ad shareable?",
        answer:
          "A shareable ad has a simple idea, emotional hook, visual contrast, and a payoff worth repeating.",
      },
      {
        question: "Can you help with the campaign idea?",
        answer:
          "Yes. Concept development is core to the Pixel Narratives ad offer.",
      },
    ],
    relatedLinks: [
      { href: "/ai-commercial-production-company", label: "AI commercial production company" },
      {
        href: "/how-to-create-ads-people-actually-watch",
        label: "create ads people actually watch",
      },
      { href: "/cost-of-ai-video-production", label: "AI video production cost guide" },
    ],
  },
  "cost-of-ai-video-production": {
    slug: "cost-of-ai-video-production",
    title: "Cost of AI Video Production | Pricing Guide",
    description:
      "Learn what AI video production costs, what affects pricing, and how to budget for cinematic AI-powered ads.",
    offer: "ads",
    h1: "Cost of AI Video Production",
    intro:
      "AI video production can reduce cost and increase creative flexibility, but pricing depends on concept complexity, runtime, revisions, sound, editing, and deliverables.",
    cta: "Request a production estimate",
    sections: [
      {
        heading: "How much does AI video production cost?",
        answer:
          "Most AI-assisted brand video projects range from focused concept tests to higher-end cinematic campaigns. The right budget depends on the creative goal, not just video length.",
      },
      {
        heading: "What affects cost?",
        table: {
          headers: ["Cost driver", "Why it matters"],
          rows: [
            ["Concept complexity", "More scenes and story beats require more development."],
            ["Runtime", "Longer ads need more editing and polish."],
            ["Visual style", "Cinematic looks require tighter direction."],
            ["Revisions", "Iteration increases production time."],
            ["Deliverables", "Multiple formats require additional edits."],
          ],
        },
      },
      {
        heading: "When AI video is cost-effective",
        answer:
          "AI video is strongest when a brand needs a polished concept, quick iteration, or campaign creative without a traditional shoot.",
      },
      {
        heading: "When traditional production still makes sense",
        answer:
          "Live-action shoots may be better for testimonials, complex product demos, physical locations, or talent-heavy scenes.",
      },
    ],
    faqs: [
      {
        question: "Is AI video production cheaper than traditional video?",
        answer:
          "It can be, especially for concept-driven ads and visual storytelling, but scope still determines cost.",
      },
      {
        question: "What is the biggest cost factor?",
        answer:
          "Creative complexity is usually the biggest factor. A simple product idea costs less than a multi-scene cinematic narrative.",
      },
      {
        question: "Can AI video look premium?",
        answer:
          "Yes, when art direction, editing, pacing, sound, and concept are handled professionally.",
      },
      {
        question: "Does pricing include strategy?",
        answer:
          "Pixel Narratives projects are strategy-first, so concept development is part of the value.",
      },
      {
        question: "Can I start with a small test?",
        answer:
          "Yes. A focused concept test is often the best first step.",
      },
      {
        question: "How do I get an accurate quote?",
        answer:
          "Share your offer, audience, goal, timeline, and where the ad will run.",
      },
    ],
    relatedLinks: [
      { href: "/ai-commercial-production-company", label: "AI commercial production" },
      { href: "/ai-video-ad-agency", label: "AI video ad agency" },
      {
        href: "/how-to-create-ads-people-actually-watch",
        label: "make ads people actually watch",
      },
    ],
  },
  "how-to-create-ads-people-actually-watch": {
    slug: "how-to-create-ads-people-actually-watch",
    title: "How to Create Ads People Actually Watch",
    description:
      "Learn how to create ads people watch, remember, and share using narrative strategy and AI-powered production.",
    offer: "ads",
    h1: "How to Create Ads People Actually Watch",
    intro:
      "People watch ads when the ad earns attention before asking for action. Start with the audience problem, build a concept, create a turn, and end with a memorable payoff.",
    cta: "Request a shareable ad concept",
    sections: [
      {
        heading: "Why do most ads get ignored?",
        answer:
          "Most ads fail because they open with the brand’s message instead of the viewer’s tension.",
      },
      {
        heading: "The 4-part watchable ad framework",
        bullets: [
          "Hook: create immediate curiosity.",
          "Setup: show a recognizable problem.",
          "Turn: introduce contrast, surprise, or escalation.",
          "Payoff: make the brand feel like the resolution.",
        ],
      },
      {
        heading: "What makes an ad shareable?",
        bullets: [
          "A simple idea people can repeat.",
          "A visual moment worth remembering.",
          "A payoff that feels earned.",
          "A tone that matches the audience.",
          "A clear brand connection.",
        ],
      },
      {
        heading: "The core creative principle",
        answer:
          "A strong ad does not explain why a brand matters. It creates a situation where the brand becomes obvious.",
      },
    ],
    faqs: [
      {
        question: "What is the first step to creating a watchable ad?",
        answer:
          "Start with the audience tension, not the product feature.",
      },
      {
        question: "How long should a video ad be?",
        answer:
          "Many effective video ads sit between 15 and 60 seconds, depending on the channel and objective.",
      },
      {
        question: "What makes people stop scrolling?",
        answer:
          "Curiosity, contrast, motion, tension, and a clear visual idea make people stop scrolling.",
      },
      {
        question: "Should every ad be funny?",
        answer:
          "No. The ad should be emotionally clear. Funny is one option, not the strategy.",
      },
      {
        question: "Can AI help create better ads?",
        answer:
          "Yes, AI can accelerate visual development and production, but the concept still matters most.",
      },
      {
        question: "What is a narrative-first ad?",
        answer:
          "A narrative-first ad is built around setup, tension, turn, and payoff instead of a list of selling points.",
      },
    ],
    relatedLinks: [
      { href: "/ai-video-ad-agency", label: "AI video ad agency" },
      { href: "/ai-commercial-production-company", label: "AI commercial production company" },
      { href: "/cost-of-ai-video-production", label: "AI video production cost" },
    ],
  },
  "ai-consulting-for-businesses": {
    slug: "ai-consulting-for-businesses",
    title: "AI Consulting for Businesses | Pixel Narratives",
    description:
      "AI consulting for businesses that need practical workflows, automation, governance, and measurable operating value.",
    offer: "intelligence",
    h1: "AI Consulting for Businesses That Need Practical Value",
    intro:
      "Pixel Narratives helps businesses move from scattered AI experimentation to structured workflows, automation, policy, and measurable business outcomes. Think of Intelligence Layer as a practical Fractional AI Officer for growing businesses.",
    cta: "Get an AI audit",
    sections: [
      {
        heading: "What is AI consulting for businesses?",
        answer:
          "AI consulting helps a business identify where AI can save time, improve workflows, reduce friction, or create new capacity. In practice, Intelligence Layer functions like a Fractional AI Officer: strategy, implementation, and accountability without adding a full-time executive role.",
      },
      {
        heading: "Why AI consulting matters now",
        answer:
          "McKinsey reports that 88% of organizations use AI in at least one function, but many have not scaled it into measurable value. The gap is not access to tools; it is workflow design.",
      },
      {
        heading: "What Intelligence Layer helps with",
        bullets: [
          "AI use case discovery and workflow mapping.",
          "Tool selection, prompt systems, and governance.",
          "CRM automation and internal process automation.",
          "Implementation support, adoption, and optimization.",
        ],
      },
      {
        heading: "AI consulting outcomes to measure",
        table: {
          headers: ["Outcome", "What to track"],
          rows: [
            ["Time saved", "Manual hours reduced per workflow."],
            ["Efficiency", "Cycle time, response time, and handoff speed."],
            ["Growth support", "Lead handling, follow-up, and pipeline quality."],
            ["Adoption", "Team usage and process consistency."],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "What does an AI consultant do?",
        answer:
          "An AI consultant identifies practical AI opportunities, recommends tools, designs workflows, and helps teams implement systems. A Fractional AI Officer also adds ongoing direction and accountability.",
      },
      {
        question: "What is a Fractional AI Officer?",
        answer:
          "A Fractional AI Officer is a part-time strategic AI leader who helps a business choose the right use cases, implement workflows, guide adoption, and measure results.",
      },
      {
        question: "Who needs AI consulting?",
        answer:
          "Businesses using AI informally but lacking process, governance, automation, or measurable outcomes need AI consulting.",
      },
      {
        question: "What is the first step?",
        answer:
          "The first step is an audit of current tools, workflows, bottlenecks, and business goals.",
      },
      {
        question: "Is AI consulting only for large companies?",
        answer:
          "No. Small and mid-sized businesses often benefit because workflow improvements compound quickly.",
      },
      {
        question: "What outcomes should we expect?",
        answer:
          "Common outcomes include saved time, clearer processes, faster response cycles, and better team adoption.",
      },
      {
        question: "Does Pixel Narratives implement systems too?",
        answer:
          "Yes. Intelligence Layer covers strategy, workflow design, implementation, and optimization.",
      },
    ],
    relatedLinks: [
      { href: "/how-to-implement-ai-in-your-business", label: "how to implement AI in your business" },
      { href: "/ai-workflow-automation", label: "AI workflow automation" },
      { href: "/ai-crm-automation", label: "AI CRM automation" },
    ],
  },
  "ai-workflow-automation": {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation for Businesses",
    description:
      "AI workflow automation that reduces manual work, connects tools, and turns scattered processes into measurable systems.",
    offer: "intelligence",
    h1: "AI Workflow Automation for Business Operations",
    intro:
      "AI workflow automation connects repetitive tasks, tools, data, and decision points so teams can move faster with less manual effort.",
    cta: "Book a workflow audit",
    sections: [
      {
        heading: "What is AI workflow automation?",
        answer:
          "AI workflow automation uses AI tools, triggers, prompts, integrations, and process rules to reduce repetitive work and improve execution.",
      },
      {
        heading: "Where AI automation creates value",
        table: {
          headers: ["Workflow", "Automation opportunity"],
          rows: [
            ["Lead intake", "Qualify, summarize, and route."],
            ["CRM updates", "Enrich, tag, and follow up."],
            ["Reporting", "Summarize performance and flag changes."],
            ["Operations", "Standardize recurring tasks."],
            ["Customer communication", "Draft, classify, and prioritize."],
          ],
        },
      },
      {
        heading: "Why automation fails",
        answer:
          "Most automation fails when teams automate a broken process instead of redesigning the workflow first.",
      },
      {
        heading: "What a strong automation system includes",
        bullets: [
          "A clear trigger, owner, and review point.",
          "Defined tools and permissions.",
          "Human approval where risk is high.",
          "Measurement tied to time saved or cycle-time reduction.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is an AI workflow?",
        answer:
          "An AI workflow is a repeatable business process supported by AI for decisions, drafts, routing, analysis, or automation.",
      },
      {
        question: "What tools can be automated?",
        answer:
          "CRMs, forms, email, spreadsheets, project management tools, and internal documentation systems can often be automated.",
      },
      {
        question: "Is automation risky?",
        answer:
          "It can be if there is no governance. Strong automation includes access control, review points, and clear ownership.",
      },
      {
        question: "How do you choose what to automate first?",
        answer:
          "Start with repetitive, high-frequency tasks that create delays or unnecessary manual effort.",
      },
      {
        question: "Can AI automation help sales teams?",
        answer:
          "Yes. It can support lead routing, CRM cleanup, follow-ups, call summaries, and proposal workflows.",
      },
      {
        question: "What is the best first step?",
        answer:
          "Map the workflow before choosing tools.",
      },
    ],
    relatedLinks: [
      { href: "/ai-consulting-for-businesses", label: "AI consulting for businesses" },
      { href: "/ai-crm-automation", label: "AI CRM automation" },
      { href: "/how-to-implement-ai-in-your-business", label: "AI implementation roadmap" },
    ],
  },
  "how-to-implement-ai-in-your-business": {
    slug: "how-to-implement-ai-in-your-business",
    title: "How to Implement AI in Your Business",
    description:
      "A practical guide to implementing AI in your business with workflows, governance, tools, and measurable outcomes.",
    offer: "intelligence",
    h1: "How to Implement AI in Your Business",
    intro:
      "Implement AI by defining outcomes, auditing workflows, choosing tools, building policies, piloting high-value use cases, training the team, and measuring results.",
    cta: "Book an AI implementation audit",
    sections: [
      {
        heading: "The practical AI implementation roadmap",
        bullets: [
          "Define the outcome before choosing tools.",
          "Audit workflows and identify bottlenecks.",
          "Choose tools and write usage policies.",
          "Pilot one high-value workflow.",
          "Train the team, measure impact, and improve.",
        ],
      },
      {
        heading: "What to avoid",
        bullets: [
          "Buying tools before mapping workflows.",
          "Letting every team use AI differently.",
          "Skipping access and data policies.",
          "Measuring activity instead of business value.",
        ],
      },
      {
        heading: "Best first AI use cases",
        table: {
          headers: ["Use case", "Why it works"],
          rows: [
            ["Internal knowledge search", "Saves time."],
            ["CRM hygiene", "Improves sales data."],
            ["Lead intake", "Speeds response."],
            ["Reporting summaries", "Reduces manual analysis."],
            ["SOP drafting", "Improves consistency."],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "What is the first step to implementing AI?",
        answer:
          "Define the business outcome before choosing tools.",
      },
      {
        question: "How long does AI implementation take?",
        answer:
          "A focused workflow can often be scoped quickly, but organization-wide adoption takes structured rollout and iteration.",
      },
      {
        question: "Do we need custom software?",
        answer:
          "Not always. Many businesses can start with existing tools, integrations, and structured workflows.",
      },
      {
        question: "What AI policy do we need?",
        answer:
          "At minimum: approved tools, data rules, review requirements, access control, and ownership.",
      },
      {
        question: "How do we measure AI success?",
        answer:
          "Track time saved, cycle time, quality improvements, revenue impact, or reduced manual work.",
      },
      {
        question: "Why do AI pilots fail?",
        answer:
          "They fail when they are not tied to workflows, ownership, training, and measurable outcomes.",
      },
    ],
    relatedLinks: [
      { href: "/ai-consulting-for-businesses", label: "AI consulting for businesses" },
      { href: "/ai-workflow-automation", label: "AI workflow automation" },
      { href: "/ai-crm-automation", label: "AI CRM automation" },
    ],
  },
  "ai-crm-automation": {
    slug: "ai-crm-automation",
    title: "AI CRM Automation for Sales Teams",
    description:
      "AI CRM automation for cleaner data, faster follow-up, lead routing, sales summaries, and measurable workflow improvements.",
    offer: "intelligence",
    h1: "AI CRM Automation for Cleaner Sales Workflows",
    intro:
      "AI CRM automation helps teams reduce manual updates, improve lead follow-up, summarize activity, and keep sales data useful.",
    cta: "Book a CRM workflow audit",
    sections: [
      {
        heading: "What is AI CRM automation?",
        answer:
          "AI CRM automation uses AI and workflow rules to manage lead intake, contact enrichment, task creation, follow-up drafts, pipeline updates, and reporting.",
      },
      {
        heading: "High-value CRM automations",
        bullets: [
          "Lead qualification summaries.",
          "Contact enrichment and tagging.",
          "Call and note summaries.",
          "Follow-up draft generation.",
          "Pipeline hygiene alerts.",
          "Deal risk summaries and sales handoffs.",
        ],
      },
      {
        heading: "Why CRM automation matters",
        answer:
          "A CRM only creates value when the data is current, structured, and actually used. AI can reduce the manual work that causes CRM decay.",
      },
    ],
    faqs: [
      {
        question: "What can AI automate in a CRM?",
        answer:
          "AI can automate summaries, routing, enrichment, task creation, follow-up drafts, and pipeline insights.",
      },
      {
        question: "Will AI replace sales reps?",
        answer:
          "No. It removes low-value admin work so reps can focus on conversations and closing.",
      },
      {
        question: "Which CRMs can use AI automation?",
        answer:
          "Most modern CRMs can support automation through native AI, integrations, APIs, or connected workflow tools.",
      },
      {
        question: "Is CRM automation safe?",
        answer:
          "It is safest when permissions, review steps, and data rules are clearly defined.",
      },
      {
        question: "What is the best CRM workflow to automate first?",
        answer:
          "Lead intake and follow-up are often the best first targets because speed directly affects conversion.",
      },
      {
        question: "Can Pixel Narratives build this?",
        answer:
          "Yes. Intelligence Layer can audit, design, implement, and optimize CRM automation workflows.",
      },
    ],
    relatedLinks: [
      { href: "/ai-workflow-automation", label: "AI workflow automation" },
      { href: "/ai-consulting-for-businesses", label: "AI consulting for businesses" },
      { href: "/how-to-implement-ai-in-your-business", label: "how to implement AI in your business" },
    ],
  },
};

export const landingPageSlugs = Object.keys(seoLandingPages);

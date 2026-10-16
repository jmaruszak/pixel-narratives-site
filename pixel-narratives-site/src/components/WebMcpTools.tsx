"use client";

import { useEffect } from "react";

import {
  CALENDLY_EVENT_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HEADQUARTERS,
} from "../lib/businessLocation";
import { ENGAGEMENTS } from "../lib/engagements";
import { SITE_URL } from "../lib/siteMetadata";
const WEB_INTEL_URL = "https://intel.pixelnarratives.studio/";

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext?.registerTool) return;

    modelContext.registerTool({
      name: "getServiceInfo",
      description:
        "Return structured information about Pixel Narratives: What We Do, Work With Us (Explore, Build, Equip, Partner, Enterprise Partner), implementation, training, visibility, marketing, and the optional AI Readiness Assessment.",
      inputSchema: { type: "object", properties: {} },
      execute: async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                studio: "Pixel Narratives",
                headquarters: `${HEADQUARTERS.locality}, ${HEADQUARTERS.region}`,
                serviceArea:
                  "Pixel Narratives is based in Madison, Mississippi. We work with businesses in Mississippi, Birmingham, Memphis, Mobile plus Alabama's Eastern Shore, and Atlanta.",
                site: SITE_URL,
                homepage: {
                  url: SITE_URL,
                  headline: "Put AI to work in your business.",
                  summary:
                    "You know your business. We know AI. The Opportunity: there's probably a better way to do this. Implementation. Training. Visibility. Marketing. Selected work lives on the homepage. Work With Us there is project-based or an ongoing partnership, without prices. Pricing lives on the Work With Us page.",
                },
                officialInformation: `${SITE_URL}/ai-info`,
                llmsTxt: `${SITE_URL}/llms.txt`,
                whatWeDo: `${SITE_URL}/services`,
                workWithUs: `${SITE_URL}/work-with-us`,
                book: `${SITE_URL}/book`,
                whoWeWorkWith: `${SITE_URL}/serving-the-south`,
                engagements: ENGAGEMENTS.map((engagement) => ({
                  name: engagement.name,
                  price: engagement.price,
                  summary: [
                    "lede" in engagement ? engagement.lede : undefined,
                    engagement.body,
                  ]
                    .filter(Boolean)
                    .join(" "),
                  note: "note" in engagement ? engagement.note : undefined,
                  url: `${SITE_URL}/work-with-us#${engagement.id}`,
                })),
                offers: {
                  automation: {
                    name: "Implementation",
                    summary:
                      "We help businesses identify where AI makes sense, prioritize opportunities, adopt existing tools, improve workflows, implement practical changes, and build custom solutions when appropriate.",
                    url: `${SITE_URL}/implementation`,
                  },
                  training: {
                    summary:
                      "Practical AI training tailored to your team, their work, and the tools they use.",
                    url: `${SITE_URL}/training`,
                  },
                  websites: {
                    name: "Visibility",
                    summary:
                      "Websites, SEO, and AI search. We help you build a stronger online presence and get found by more of your customers.",
                    url: `${SITE_URL}/websites`,
                    scanUrl: WEB_INTEL_URL,
                  },
                  marketing: {
                    summary:
                      "We help businesses reach more customers through creative strategy, social media, advertising, and original content. From everyday marketing to ambitious campaigns, we bring the ideas and production capabilities to make it happen.",
                    url: `${SITE_URL}/marketing`,
                  },
                  aiAutomationAssessment: {
                    name: "AI Readiness Assessment",
                    summary:
                      "Optional 10-question self-assessment with optional Deep Dive snapshot. Not the default next step.",
                    url: `${SITE_URL}/ai-readiness-assessment`,
                  },
                },
              },
              null,
              2,
            ),
          },
        ],
      }),
    });

    modelContext.registerTool({
      name: "bookDiscoveryCall",
      description:
        "Get the Calendly URL to schedule a Zoom discovery call with Pixel Narratives about implementation, training, visibility, or marketing.",
      inputSchema: {
        type: "object",
        properties: {
          context: {
            type: "string",
            description: "Optional goals or context to prepare for the call.",
          },
        },
      },
      execute: async (input) => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                action: "open_calendly",
                url: CALENDLY_EVENT_URL,
                instructions:
                  "Open this URL in the user's browser to schedule a discovery call. The user should confirm before booking.",
                context: typeof input.context === "string" ? input.context : undefined,
              },
              null,
              2,
            ),
          },
        ],
      }),
    });

    modelContext.registerTool({
      name: "getContactInfo",
      description:
        "Return Pixel Narratives contact channels: email, phone, contact page, and booking URL.",
      inputSchema: { type: "object", properties: {} },
      execute: async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                email: CONTACT_EMAIL,
                phone: CONTACT_PHONE,
                contactPage: `${SITE_URL}/contact`,
                bookCall: CALENDLY_EVENT_URL,
                responseTime: "1 to 2 business days for email",
              },
              null,
              2,
            ),
          },
        ],
      }),
    });
  }, []);

  return null;
}

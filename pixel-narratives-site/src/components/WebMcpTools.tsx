"use client";

import { useEffect } from "react";

import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HEADQUARTERS,
} from "../lib/businessLocation";
import { SITE_URL } from "../lib/siteMetadata";
const WEB_INTEL_URL = "https://intel.pixelnarratives.studio/";

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext?.registerTool) return;

    modelContext.registerTool({
      name: "getServiceInfo",
      description:
        "Return structured information about Pixel Narratives services: Starting Small, AI and automation implementation, training, websites and visibility, marketing, Fractional AI Leadership, and the optional AI Readiness Assessment.",
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
                  "Mississippi is the primary market. Pixel Narratives serves businesses throughout the South, with Atlanta as an actively served expansion market and no Atlanta office.",
                site: SITE_URL,
                offers: {
                  startingSmall: {
                    summary:
                      "Contained first projects: Implementation Quick Win ($2,500), Website Starter ($2,500), and Creative Quick Win ($1,500).",
                    url: `${SITE_URL}/starting-small`,
                  },
                  automation: {
                    name: "Implementation",
                    summary:
                      "We manage the process of implementing AI into existing business systems, and build new systems when the value can be measured.",
                    url: `${SITE_URL}/automation`,
                    tiers: [
                      {
                        name: "AI & Automation Assessment",
                        price: "Starting at $1,250",
                        description:
                          "Workflow review, bottleneck map, tool recommendations, quick wins, and a 30 to 60 day implementation plan.",
                      },
                      {
                        name: "Guided Implementation",
                        price: "Starting at $1,500/month (3-month minimum)",
                        description:
                          "You build. We guide. Two working sessions a month for prioritization, tools, architecture, and troubleshooting.",
                      },
                      {
                        name: "Implementation Projects",
                        price: "Starting at $5,000",
                        description:
                          "Pixel Narratives builds the automations, integrations, dashboards, internal tools, or AI workflows.",
                      },
                      {
                        name: "Fractional CAIO",
                        price:
                          "Generally $5,000 to $15,000/month, based on organizational needs",
                        description:
                          "Ongoing AI leadership, roadmap ownership, vendor decisions, responsible adoption, and hands-on implementation support.",
                      },
                    ],
                  },
                  training: {
                    summary:
                      "One department is $7,500. Full team is $15,000 to $20,000. Multi-day engagements start at $25,000. Practical workshops built around the work the team already does.",
                    url: `${SITE_URL}/training`,
                  },
                  websites: {
                    summary:
                      "Website Starter is $2,500. Website + Visibility Build starts at $7,500. Premium Build is $15,000 to $20,000. Visibility Sprint starts at $1,200/month with a 3-month minimum. Premium Visibility is $2,500/month.",
                    url: `${SITE_URL}/websites`,
                    scanUrl: WEB_INTEL_URL,
                  },
                  marketing: {
                    summary:
                      "Attention Pulse starting at $5,000 for one focused campaign. Attention Retainer starting at $2,250/month with a 3-month minimum for ongoing creative and advertising support. Full Brand Campaign starting at $15,000 for objectives that need multiple pieces working together.",
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
        "Get the Calendly URL to schedule a Zoom discovery call with Pixel Narratives about implementation, training, websites, or marketing.",
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
                url: CALENDLY_URL,
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
                bookCall: CALENDLY_URL,
                responseTime: "1–2 business days for email",
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

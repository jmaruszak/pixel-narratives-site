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
        "Return structured information about Pixel Narratives services: automation and implementation, training, websites and online visibility, marketing, and the optional AI + Automation Assessment.",
      inputSchema: { type: "object", properties: {} },
      execute: async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                studio: "Pixel Narratives",
                headquarters: `${HEADQUARTERS.locality}, ${HEADQUARTERS.region}`,
                site: SITE_URL,
                offers: {
                  automation: {
                    summary:
                      "Turn repetitive work into better systems: workflows, CRM, scheduling, reporting, and internal tools.",
                    url: `${SITE_URL}/automation`,
                    tiers: [
                      {
                        name: "Implementation Assessment",
                        price: "From $950",
                        description:
                          "Optional diagnostic: workflow audit, tool recommendations, quick wins, and implementation roadmap.",
                      },
                      {
                        name: "Guided Implementation",
                        price: "From $1,200/month (3-month minimum)",
                        description:
                          "Done With You: hands-on implementation, monthly working sessions, and team onboarding.",
                      },
                      {
                        name: "Fractional Chief AI Officer",
                        price: "From $5,000/month",
                        description:
                          "Done For You: we own the build and keep the systems running.",
                      },
                    ],
                  },
                  training: {
                    summary:
                      "Workshops, role-specific training, and playbooks so teams can use AI in the work they already do.",
                    url: `${SITE_URL}/training`,
                  },
                  websites: {
                    summary:
                      "Website improvement, SEO, local search, conversion, and a free live-site scan for online visibility.",
                    url: `${SITE_URL}/websites`,
                    scanUrl: WEB_INTEL_URL,
                  },
                  marketing: {
                    summary:
                      "Campaigns, ads, video, content, and lead generation. AI-assisted production is how work gets done.",
                    url: `${SITE_URL}/marketing`,
                  },
                  aiAutomationAssessment: {
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
        "Get the Calendly URL to schedule a Zoom discovery call with Pixel Narratives about automation, training, websites, or marketing.",
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

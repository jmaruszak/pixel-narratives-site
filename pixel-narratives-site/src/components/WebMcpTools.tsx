"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/pixelnarratives";
const CONTACT_EMAIL = "hello@pixelnarratives.studio";
const CONTACT_PHONE = "904-524-7269";
const SITE_URL = "https://pixelnarratives.studio";
const WEB_INTEL_URL = "https://intel.pixelnarratives.studio/";

export default function WebMcpTools() {
  useEffect(() => {
    const modelContext = navigator.modelContext;
    if (!modelContext?.registerTool) return;

    modelContext.registerTool({
      name: "getServiceInfo",
      description:
        "Return structured information about Pixel Narratives services: AI Ads, Intelligence Layer offerings, Web Intelligence, and the AI Readiness Assessment.",
      inputSchema: { type: "object", properties: {} },
      execute: async () => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                studio: "Pixel Narratives",
                site: SITE_URL,
                offers: {
                  aiAds: {
                    summary:
                      "Cinematic, concept-driven AI commercial production for brands.",
                    projectsUrl: `${SITE_URL}/projects`,
                  },
                  intelligenceLayer: {
                    summary:
                      "Operational AI consulting and implementation for growing businesses.",
                    url: `${SITE_URL}/intelligence-layer`,
                    tiers: [
                      {
                        name: "Intelligence Layer Blueprint",
                        price: "From $950",
                        description:
                          "Workflow audit, tool recommendations, quick wins, and implementation roadmap.",
                      },
                      {
                        name: "Guided Implementation",
                        price: "From $1,200/month (3-month minimum)",
                        description:
                          "Hands-on implementation, monthly working sessions, and team onboarding.",
                      },
                      {
                        name: "Fractional Chief AI Officer",
                        price: "From $5,000/month",
                        description:
                          "Executive AI strategy, operational redesign, and organization-wide oversight.",
                      },
                    ],
                  },
                  webIntelligence: {
                    summary:
                      "URL scan for SEO, AI visibility, friction points, and a pragmatic game plan.",
                    url: WEB_INTEL_URL,
                  },
                  aiReadinessAssessment: {
                    summary:
                      "10-question self-assessment with optional Deep Dive snapshot.",
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
        "Get the Calendly URL to schedule a Zoom discovery call with Pixel Narratives about campaigns or AI implementation.",
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

/** Public Corporate AI Workshop inquiry collected on /training. */
export type CorporateWorkshopInquiry = {
  company: string;
  website?: string;
  name: string;
  title: string;
  email: string;
  phone?: string;
  participantCount?: string;
  teamsInvolved?: string;
  format: "full-day" | "two-days" | "unsure";
  aiGoals: string;
  preferredTiming?: string;
  notes?: string;
  source: "training";
  product: "corporate-ai-workshop";
};

export const CORPORATE_WORKSHOP_INQUIRY_SOURCE = "training" as const;
export const CORPORATE_WORKSHOP_PRODUCT = "corporate-ai-workshop" as const;

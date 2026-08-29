/** Public Attention Pulse inquiry collected on /marketing. */
export type AttentionPulseInquiry = {
  businessName: string;
  website?: string;
  name: string;
  email: string;
  phone?: string;
  offer: string;
  advertiseWhere: string;
  desiredAction: string;
  startWindow?: string;
  notes?: string;
  source: "marketing";
  product: "attention-pulse";
};

/**
 * Future post-qualification onboarding brief.
 * Not collected on the public marketing page.
 */
export type AttentionOnboardingBrief = {
  business: string;
  website?: string;
  offer: string;
  customer: string;
  desiredAction: string;
  decisionMaker: string;
  citiesAndZipCodes: string;
  statewideOrMetroExpansion?: string;
  areasToExclude?: string;
  audienceGuidance?: string;
  targetingRestrictions?: string;
  onCameraPreference?: string;
  availableFootage?: string;
  liveSportsOrStreamingPreference?: string;
  approximateLength?: string;
  tone?: string;
  requiredMessaging?: string;
  requiredVisualElements?: string;
  brandAssets?: string;
  hardRestrictions?: string;
  startWindow?: string;
  additionalMediaBudget?: string;
  productionApprovals?: string;
};

export const ATTENTION_PULSE_INQUIRY_SOURCE = "marketing" as const;
export const ATTENTION_PULSE_PRODUCT = "attention-pulse" as const;

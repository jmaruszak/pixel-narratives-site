/**
 * Live website scan at https://intel.pixelnarratives.studio
 *
 * Use {@link MARKETING_TO_WEB_INTEL_URL} from pixelnarratives.studio CTAs so traffic is attributable.
 *
 * Expert handoff lives on the Intel app (“speak with an expert”). In the Replit/Vercel codebase,
 * point that CTA href to {@link EXPERT_CONTACT_URL_WITH_INTEL_UTM} so /contact receives utm_source=web-intelligence.
 */
export const MARKETING_TO_WEB_INTEL_URL =
  "https://intel.pixelnarratives.studio/?utm_source=pixelnarratives&utm_medium=intelligence-layer&utm_campaign=web-intelligence";

export const WEB_INTEL_PAGE_TOOL_URL =
  "https://intel.pixelnarratives.studio/?utm_source=pixelnarratives&utm_medium=web-intelligence-page&utm_campaign=web-intelligence";

export const WEB_INTEL_PAGE_URL = "/websites";

export const EXPERT_CONTACT_URL_WITH_INTEL_UTM =
  "https://pixelnarratives.studio/contact?utm_source=web-intelligence&utm_medium=app&utm_campaign=expert";

/**
 * Live website scan at https://intel.pixelnarratives.studio
 *
 * Use {@link MARKETING_TO_WEB_INTEL_URL} from pixelnarratives.studio CTAs so traffic is attributable.
 *
 * Expert handoff lives on the scan app (“speak with an expert”). In the scan app codebase,
 * point that CTA href to {@link EXPERT_CONTACT_URL_WITH_INTEL_UTM} so /contact receives utm_source=visibility-scan.
 */
export const MARKETING_TO_WEB_INTEL_URL =
  "https://intel.pixelnarratives.studio/?utm_source=pixelnarratives&utm_medium=website&utm_campaign=visibility-scan";

export const WEB_INTEL_PAGE_TOOL_URL =
  "https://intel.pixelnarratives.studio/?utm_source=pixelnarratives&utm_medium=website-page&utm_campaign=visibility-scan";

export const WEB_INTEL_PAGE_URL = "/websites";

export const EXPERT_CONTACT_URL_WITH_INTEL_UTM =
  "https://pixelnarratives.studio/contact?utm_source=visibility-scan&utm_medium=app&utm_campaign=expert";

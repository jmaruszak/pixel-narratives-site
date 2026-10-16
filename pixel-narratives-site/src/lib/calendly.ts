import { CALENDLY_EVENT_URL } from "./businessLocation";

export function calendlyNeedLabel(need?: string) {
  if (need === "automation") return "Implementation";
  if (need === "training") return "Training";
  if (need === "websites") return "Visibility";
  if (need === "marketing") return "Marketing";
  if (need === "not-sure") return "Not Sure";
  return undefined;
}

export function buildCalendlyEmbedUrl(need?: string) {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    background_color: "0b0c0f",
    text_color: "f5f1e8",
    primary_color: "f5f1e8",
    a1: "Pixel Narratives",
    utm_source: "website",
    utm_campaign: "contact",
  });
  const content = calendlyNeedLabel(need);
  if (content) params.set("utm_content", content);
  return `${CALENDLY_EVENT_URL}?${params.toString()}`;
}

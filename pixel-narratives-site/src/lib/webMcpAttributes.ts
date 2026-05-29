import { useEffect, type RefObject } from "react";

export type WebMcpFormAttrs = {
  toolname: string;
  tooldescription: string;
  toolautosubmit?: boolean;
};

export type WebMcpParamAttrs = {
  toolparamdescription?: string;
  toolparamtitle?: string;
};

/** Spread onto form elements; React 19 passes custom attrs when typed via webmcp.d.ts */
export function webMcpForm(attrs: WebMcpFormAttrs): WebMcpFormAttrs {
  return attrs;
}

export function webMcpParam(attrs: WebMcpParamAttrs): WebMcpParamAttrs {
  return attrs;
}

/** Ensures tool* attrs exist in the DOM after hydration (Lighthouse / agent discovery). */
export function useWebMcpForm(
  ref: RefObject<HTMLFormElement | null>,
  attrs: WebMcpFormAttrs,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.setAttribute("toolname", attrs.toolname);
    el.setAttribute("tooldescription", attrs.tooldescription);
    if (attrs.toolautosubmit) {
      el.setAttribute("toolautosubmit", "");
    }
  }, [ref, attrs.toolname, attrs.tooldescription, attrs.toolautosubmit]);
}

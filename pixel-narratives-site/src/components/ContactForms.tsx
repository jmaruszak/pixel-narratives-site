"use client";

import { FormEvent, useRef } from "react";
import { useWebMcpForm, webMcpForm, webMcpParam } from "../lib/webMcpAttributes";

const CALENDLY_URL = "https://calendly.com/pixelnarratives";
const CONTACT_EMAIL = "hello@pixelnarratives.studio";

export function BookDiscoveryCallForm() {
  const formRef = useRef<HTMLFormElement>(null);
  useWebMcpForm(
    formRef,
    webMcpForm({
      toolname: "book_discovery_call",
      tooldescription:
        "Schedule a Zoom discovery call with Pixel Narratives about campaigns or AI implementation",
    }),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label htmlFor="discovery-context" className="block text-sm text-[var(--muted)]">
        Optional context for your call
        <textarea
          id="discovery-context"
          name="context"
          rows={3}
          {...webMcpParam({
            toolparamdescription:
              "Optional goals or context to mention on the call (campaign, AI implementation, Web Intelligence findings)",
          })}
          className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-white/25"
          placeholder="What you want to discuss (optional)"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
      >
        Book a Zoom Call
      </button>
    </form>
  );
}

export function RequestCreativeConceptForm() {
  const formRef = useRef<HTMLFormElement>(null);
  useWebMcpForm(
    formRef,
    webMcpForm({
      toolname: "request_creative_concept",
      tooldescription:
        "Email a creative brief to Pixel Narratives for an AI commercial or campaign concept",
    }),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject =
      (data.get("subject") as string)?.trim() || "Request a Concept";
    const message = (data.get("message") as string)?.trim() || "";
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label htmlFor="brief-subject" className="block text-sm text-[var(--muted)]">
        Subject
        <input
          id="brief-subject"
          name="subject"
          type="text"
          defaultValue="Request a Concept"
          {...webMcpParam({
            toolparamdescription:
              "Brief subject line for the creative concept request",
          })}
          className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-white/25"
        />
      </label>
      <label htmlFor="brief-message" className="block text-sm text-[var(--muted)]">
        Brief
        <textarea
          id="brief-message"
          name="message"
          rows={4}
          required
          {...webMcpParam({
            toolparamdescription:
              "What you are promoting, audience, where the ad will run, and what you want people to remember",
          })}
          className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-white/25"
          placeholder="Tell us about the campaign, audience, and goals"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
      >
        Email the Brief
      </button>
    </form>
  );
}

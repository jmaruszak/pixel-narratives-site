"use client";

import { FormEvent, useRef } from "react";
import { useWebMcpForm, webMcpForm, webMcpParam } from "../lib/webMcpAttributes";

const CALENDLY_URL = "https://calendly.com/pixelnarratives";
const CONTACT_EMAIL = "hello@pixelnarratives.studio";

export function BookDiscoveryCallForm({ need }: { need?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  useWebMcpForm(
    formRef,
    webMcpForm({
      toolname: "book_discovery_call",
      tooldescription:
        "Schedule a Zoom discovery call with Pixel Narratives about automation, training, websites, or marketing",
    }),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  }

  const placeholder =
    need === "automation"
      ? "What repetitive work is slowing the team down?"
      : need === "training"
        ? "Who needs training, and what should they be able to do afterward?"
        : need === "websites"
          ? "What should your website help customers do?"
          : need === "marketing"
            ? "Who do you need to reach, and what should they do next?"
            : "What you want to discuss (optional)";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label htmlFor="discovery-context" className="block text-sm text-[var(--muted)]">
        Optional context for your call
        <textarea
          id="discovery-context"
          name="context"
          rows={3}
          defaultValue={need ? `Looking to improve: ${need}` : ""}
          {...webMcpParam({
            toolparamdescription:
              "Optional goals or context to mention on the call (automation, training, websites, marketing, or website scan findings)",
          })}
          className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-white/25"
          placeholder={placeholder}
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

export function AttentionPulseBriefForm() {
  const formRef = useRef<HTMLFormElement>(null);
  useWebMcpForm(
    formRef,
    webMcpForm({
      toolname: "request_attention_pulse",
      tooldescription:
        "Send an Attention Pulse campaign inquiry to Pixel Narratives",
    }),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => (data.get(name) as string | null)?.trim() || "";

    const businessName = field("businessName");
    const website = field("website");
    const name = field("name");
    const email = field("email");
    const phone = field("phone");
    const offer = field("offer");
    const advertiseWhere = field("advertiseWhere");
    const desiredAction = field("desiredAction");
    const startWindow = field("startWindow");
    const notes = field("notes");

    const subject = `Attention Pulse inquiry: ${businessName || name}`;
    const body = [
      "Attention Pulse inquiry",
      "Source: pixelnarratives.studio/marketing",
      "Need: marketing",
      "Product: attention-pulse",
      "",
      `Business name: ${businessName}`,
      `Website: ${website || "Not provided"}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `What they sell: ${offer}`,
      `Where they want to advertise: ${advertiseWhere}`,
      `Desired action after the ad: ${desiredAction}`,
      `Preferred start window: ${startWindow || "Not provided"}`,
      `Anything else: ${notes || "None"}`,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const fieldClassName =
    "mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-white/25";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label htmlFor="attention-business" className="block text-sm text-[var(--muted)]">
          Business name
          <input
            id="attention-business"
            name="businessName"
            type="text"
            required
            {...webMcpParam({ toolparamdescription: "Business or company name" })}
            className={fieldClassName}
          />
        </label>
        <label htmlFor="attention-website" className="block text-sm text-[var(--muted)]">
          Website
          <input
            id="attention-website"
            name="website"
            type="text"
            inputMode="url"
            placeholder="yourwebsite.com"
            {...webMcpParam({ toolparamdescription: "Business website URL" })}
            className={fieldClassName}
          />
        </label>
        <label htmlFor="attention-name" className="block text-sm text-[var(--muted)]">
          Name
          <input
            id="attention-name"
            name="name"
            type="text"
            required
            {...webMcpParam({ toolparamdescription: "Contact name" })}
            className={fieldClassName}
          />
        </label>
        <label htmlFor="attention-email" className="block text-sm text-[var(--muted)]">
          Email
          <input
            id="attention-email"
            name="email"
            type="email"
            required
            {...webMcpParam({ toolparamdescription: "Contact email" })}
            className={fieldClassName}
          />
        </label>
        <label htmlFor="attention-phone" className="block text-sm text-[var(--muted)]">
          Phone
          <input
            id="attention-phone"
            name="phone"
            type="tel"
            {...webMcpParam({ toolparamdescription: "Contact phone number" })}
            className={fieldClassName}
          />
        </label>
        <label htmlFor="attention-start" className="block text-sm text-[var(--muted)]">
          Preferred start window
          <input
            id="attention-start"
            name="startWindow"
            type="text"
            placeholder="This month, next quarter, a specific date"
            {...webMcpParam({
              toolparamdescription: "When the business wants the campaign to start",
            })}
            className={fieldClassName}
          />
        </label>
      </div>
      <label htmlFor="attention-offer" className="block text-sm text-[var(--muted)]">
        What do you sell?
        <textarea
          id="attention-offer"
          name="offer"
          rows={3}
          required
          {...webMcpParam({
            toolparamdescription: "What the business sells or offers",
          })}
          className={fieldClassName}
        />
      </label>
      <label htmlFor="attention-where" className="block text-sm text-[var(--muted)]">
        Where do you want to advertise?
        <textarea
          id="attention-where"
          name="advertiseWhere"
          rows={3}
          required
          placeholder="Cities, counties, or a region"
          {...webMcpParam({
            toolparamdescription: "Geographic area where the campaign should run",
          })}
          className={fieldClassName}
        />
      </label>
      <label htmlFor="attention-action" className="block text-sm text-[var(--muted)]">
        What should someone do after seeing the ad?
        <textarea
          id="attention-action"
          name="desiredAction"
          rows={3}
          required
          {...webMcpParam({
            toolparamdescription: "Desired action after someone sees the commercial",
          })}
          className={fieldClassName}
        />
      </label>
      <label htmlFor="attention-notes" className="block text-sm text-[var(--muted)]">
        Anything else we should know?
        <textarea
          id="attention-notes"
          name="notes"
          rows={3}
          {...webMcpParam({
            toolparamdescription: "Optional extra context for the Attention Pulse inquiry",
          })}
          className={fieldClassName}
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-white/10 bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
      >
        Request a Campaign Call
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
        "Email a campaign brief to Pixel Narratives",
    }),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject =
      (data.get("subject") as string)?.trim() || "Discuss a Campaign";
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
          defaultValue="Discuss a Campaign"
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

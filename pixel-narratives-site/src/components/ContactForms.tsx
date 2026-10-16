"use client";

import { FormEvent, useRef } from "react";
import { CONTACT_EMAIL } from "../lib/businessLocation";
import { useWebMcpForm, webMcpForm, webMcpParam } from "../lib/webMcpAttributes";

function emailSubjectForNeed(need?: string) {
  if (need === "automation") return "Discuss Implementation";
  if (need === "training") return "Discuss Team Training";
  if (need === "websites") return "Discuss Visibility";
  if (need === "marketing") return "Discuss Marketing";
  return "Start a Conversation";
}

export function ContactEmailForm({ need }: { need?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  useWebMcpForm(
    formRef,
    webMcpForm({
      toolname: "send_contact_email",
      tooldescription:
        "Email Pixel Narratives about implementation, training, visibility, or marketing",
    }),
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject =
      (data.get("subject") as string)?.trim() || emailSubjectForNeed(need);
    const message = (data.get("message") as string)?.trim() || "";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label htmlFor="contact-subject" className="block text-sm text-[var(--muted)]">
        Subject
        <input
          id="contact-subject"
          name="subject"
          type="text"
          defaultValue={emailSubjectForNeed(need)}
          {...webMcpParam({
            toolparamdescription: "Email subject line",
          })}
          className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-white/25"
        />
      </label>
      <label htmlFor="contact-message" className="block text-sm text-[var(--muted)]">
        Message
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          {...webMcpParam({
            toolparamdescription:
              "What you want to talk about: a project, training, a website, a campaign, or a question",
          })}
          className="mt-2 w-full rounded-[16px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-white/25"
          placeholder="Tell us what you'd like to talk about"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-[var(--foreground)] transition hover:bg-white/5"
      >
        Send Email
      </button>
    </form>
  );
}

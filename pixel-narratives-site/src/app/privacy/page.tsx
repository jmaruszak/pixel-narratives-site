import type { Metadata } from "next";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy | Pixel Narratives",
  description:
    "Privacy Policy for Pixel Narratives, including website inquiries, AI Readiness Assessment submissions, cookies, advertising measurement, CRM follow-up, and data rights requests.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you contact Pixel Narratives, book a call, or complete the AI Readiness Assessment, we may collect your name, email address, company name, optional phone number, assessment answers, assessment score, result category, and the message or details you choose to submit.",
      "We also use cookies, pixels, analytics technologies, and similar tools. These may collect information such as IP address, device and browser information, pages viewed, referral information, timestamps, and interaction data, such as whether a page was viewed or a form was completed.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use submitted information to generate assessment results, respond to inquiries, follow up about AI strategy, workflows, creative services, and related Pixel Narratives offerings, improve our website, and operate our business.",
      "We use cookies, pixels, and similar tools to understand website usage, measure advertising effectiveness, perform attribution, and improve marketing.",
      "Assessment responses help us understand where a business may need clarity, governance, workflow design, or implementation support.",
    ],
  },
  {
    title: "Cookies, Pixels, and Advertising Measurement",
    body: [
      "This website uses cookies, pixels, and similar technologies. Some support basic site operation and security. Others help us see how the site is used and whether advertising, including connected TV advertising, led someone to visit or take a next step.",
      "Vibe is an advertising and connected TV attribution provider we use for this measurement. The Vibe pixel loads when you visit the site and records page views. If you successfully submit the AI Readiness Deep Dive contact form, we send Vibe a Lead event so we can measure that conversion. That Lead event does not include your name, email address, company name, phone number, or other form answers.",
      "Information you type into forms is sent to Pixel Narratives and the service providers that help us run the business. It is handled separately from advertising pixel events.",
    ],
  },
  {
    title: "CRM and Service Providers",
    body: [
      "Assessment and contact information may be sent to Pixel Narratives’ CRM and trusted service providers that help us manage leads, communication, scheduling, hosting, and business operations.",
      "Third-party analytics and advertising partners, including Vibe, may process technical information described above on Pixel Narratives’ behalf or for advertising measurement and attribution.",
      "We do not sell personal information for money. Limited technical information may be shared with advertising and attribution partners so we can measure campaign results. Form-submitted details such as your name and email are not sent to Vibe.",
    ],
  },
  {
    title: "Email and Phone Follow-Up",
    body: [
      "If you submit your information, we may follow up by email about your assessment, inquiry, or related services. You can ask us to stop marketing follow-up at any time.",
      "If you provide a phone number, it may be used for direct follow-up related to your inquiry or assessment. We do not use optional phone numbers for SMS marketing without separate consent.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "This site does not use a cookie pop-up. Advertising and analytics tools, including the Vibe pixel, load when you use the site.",
      "You can ask us not to use advertising or analytics tracking for your browser, or request access, correction, or deletion of information you submitted, by emailing hello@pixelnarratives.studio. If you write about advertising measurement, include that you want to opt out of pixel tracking.",
      "Your browser may also let you block or delete cookies. Blocking cookies can affect how some site features work.",
    ],
  },
  {
    title: "Data Retention and Deletion Requests",
    body: [
      "We retain lead, inquiry, and assessment information for as long as it is useful for legitimate business purposes, unless deletion is requested or a longer retention period is required by law.",
      "To request access, correction, or deletion of your information, email hello@pixelnarratives.studio.",
    ],
  },
  {
    title: "Assessment Disclaimer",
    body: [
      "The AI Readiness Assessment is informational. It does not guarantee business results, compliance outcomes, return on investment, or AI implementation success.",
      "Any recommendations should be reviewed in the context of your business goals, operations, budget, team readiness, and risk requirements.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions or data requests, contact Pixel Narratives at hello@pixelnarratives.studio.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Nav />

      <section className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-24">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
          Privacy
        </p>
        <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          This policy explains how Pixel Narratives collects and uses
          information from this website, including contact forms, the AI
          Readiness Assessment, and technologies that help us understand site
          use and measure advertising.
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Last updated: August 28, 2026
        </p>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 md:px-10">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[28px] border border-white/8 bg-white/[0.02] p-8"
            >
              <h2 className="text-3xl leading-none md:text-4xl">
                {section.title}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

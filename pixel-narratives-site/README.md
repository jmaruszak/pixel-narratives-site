This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## AI Readiness Assessment Leads

The AI Readiness Assessment submits lead details and calculated results to `POST /api/assessment-lead`. That route validates the basic lead fields, builds the CRM note summary, and forwards the lead to the configured CRM endpoint.

Required environment variables:

```bash
CRM_ASSESSMENT_ENDPOINT=
CRM_ASSESSMENT_API_KEY=

# Deep Dive AI (optional — see docs/deployment.md)
OPENAI_API_KEY=
OPENAI_MODEL=
```

Use [`.env.example`](.env.example) as a template.

**Operational behavior** (Deep Dive AI fallbacks, in-memory rate limits, staging smoke tests): **[docs/deployment.md](docs/deployment.md)**.

CRM request failures and timeouts are logged server-side with the `[assessment-lead]` prefix.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

/**
 * In-memory rate limits for POST /api/deep-dive-report.
 *
 * TODO: Replace with durable storage (Upstash Redis, Vercel KV, or your CRM/DB) for
 * production under multiple instances—in-memory resets on redeploy/cold starts and
 * is not shared across workers. See docs/deployment.md for operator-facing notes.
 *
 * Assumptions: Best-effort cost/abuse mitigation; IPs from headers can be spoofed
 * unless your edge verifies them (e.g., Vercel, Cloudflare).
 */

type TimedBucket = {
  hour: number[];
  day: number[];
};

const ipBuckets = new Map<string, TimedBucket>();
const emailLastRequest = new Map<string, number>();
const emailCompanyLastRequest = new Map<string, number>();

const MS_HOUR = 60 * 60 * 1000;
const MS_DAY = 24 * MS_HOUR;

const MAX_PER_IP_HOUR = 2;
const MAX_PER_IP_DAY = 5;

function now() {
  return Date.now();
}

function pruneTimestamps(ts: number[], windowMs: number, t = now()) {
  return ts.filter((x) => t - x < windowMs);
}

function getOrCreateIpBucket(ip: string): TimedBucket {
  let b = ipBuckets.get(ip);
  if (!b) {
    b = { hour: [], day: [] };
    ipBuckets.set(ip, b);
  }
  const t = now();
  b.hour = pruneTimestamps(b.hour, MS_HOUR, t);
  b.day = pruneTimestamps(b.day, MS_DAY, t);
  return b;
}

export type RateLimitFailReason = "ip_hour" | "ip_day" | "email_day" | "email_company_duplicate";

export type RateLimitResult = { ok: true } | { ok: false; reason: RateLimitFailReason };

/**
 * Call only after syntactic/schema validation succeeds so invalid traffic is not counted.
 */
export function consumeDeepDiveReportRateLimits(input: {
  ip: string;
  emailNormalized?: string;
  companyNormalized?: string;
}): RateLimitResult {
  /* Collapse missing proxy IP into a synthetic bucket — local dev lacks x-forwarded-for. */
  const ip = input.ip.trim() || "anonymous";

  const bucket = getOrCreateIpBucket(ip);
  const t = now();

  if (bucket.hour.length >= MAX_PER_IP_HOUR) {
    return { ok: false, reason: "ip_hour" };
  }
  if (bucket.day.length >= MAX_PER_IP_DAY) {
    return { ok: false, reason: "ip_day" };
  }

  if (input.emailNormalized) {
    const last = emailLastRequest.get(input.emailNormalized);
    if (last != null && t - last < MS_DAY) {
      return { ok: false, reason: "email_day" };
    }
  }

  if (input.emailNormalized && input.companyNormalized && input.companyNormalized.length > 0) {
    const pairKey = `${input.emailNormalized}::${input.companyNormalized}`;
    const lastPair = emailCompanyLastRequest.get(pairKey);
    if (lastPair != null && t - lastPair < MS_DAY) {
      return { ok: false, reason: "email_company_duplicate" };
    }
  }

  bucket.hour.push(t);
  bucket.day.push(t);

  if (input.emailNormalized) {
    emailLastRequest.set(input.emailNormalized, t);
  }
  if (input.emailNormalized && input.companyNormalized && input.companyNormalized.length > 0) {
    emailCompanyLastRequest.set(`${input.emailNormalized}::${input.companyNormalized}`, t);
  }

  return { ok: true };
}

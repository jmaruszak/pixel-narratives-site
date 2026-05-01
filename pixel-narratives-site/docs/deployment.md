# Deployment and operations — AI readiness & Deep Dive

This document summarizes environment variables and **runtime behaviors** operators should understand before staging or production.

## Environment variables

| Variable | Used by | Required? | Notes |
|----------|---------|-------------|--------|
| `CRM_ASSESSMENT_ENDPOINT` | `POST /api/assessment-lead` | Yes (for CRM forward) | Webhook URL. |
| `CRM_ASSESSMENT_API_KEY` | same | Yes | `Authorization: Bearer` value. |
| `OPENAI_API_KEY` | `POST /api/deep-dive-report` | Optional | If unset, responses use `fallback: true` with `errorCode: openai_disabled` (HTTP **200**) and the UI keeps the deterministic report. |
| `OPENAI_MODEL` | same | Optional | Defaults to `gpt-4o-mini`. |

See [`.env.example`](../.env.example) for a copy-ready template.

## Deep Dive OpenAI semantics (HTTP vs `errorCode`)

For `POST /api/deep-dive-report`, **`errorCode` is authoritative** — not HTTP status alone.

- **Missing key:** HTTP **200**, `ok: false`, `errorCode: "openai_disabled"`, `fallback: true` — avoids masking as a generic transport error in the UI.
- **Rate limit (app):** HTTP **429**, `errorCode: "rate_limit"`, `fallback: true`.
- **Timeouts / OpenAI failures / malformed model output:** typically HTTP **200** with `fallback: true` and a specific `errorCode` (`timeout`, `openai_error`, etc.).

Log prefix: **`[deep-dive-report]`**.

## Rate limiting (`POST /api/deep-dive-report`)

- Limits live **in-memory** in [`src/lib/deepDiveReportRateLimit.ts`](../src/lib/deepDiveReportRateLimit.ts): they reset on redeploy/cold starts and **are not shared** across horizontally scaled instances.
- IPs without forwarding headers collapse to an **`anonymous` bucket** (local/dev friendly; noisy if proxies strip headers unintentionally).
- With `email` on the payload, consumed limits enforce **roughly one successful generation per normalized email per 24 hours** (see implementation for exact coupling with IP limits).

For strict, cross-instance abuse mitigation, migrate counters to **durable storage** (e.g. Upstash Redis, Vercel KV, or your own store) and replace the in-memory maps — no extra packages are required for the current site build; that step is an operational upgrade.

## Assessment lead route

- Log prefix: **`[assessment-lead]`**.
- CRM forward timeout: **5s** (see route).
- `POST /api/assessment-lead` rejects oversized bodies — see **`MAX_ASSESSMENT_LEAD_BODY_BYTES`** in the route handler.

### CRM discriminator

The forwarded CRM JSON may omit top-level **`leadType`**. Prefer detecting Deep Dive completions via **`deepDiveGeneratedReport`**, **`source`**, or markers inside **`notes`**.

---

## Staging smoke checklist

1. **`OPENAI_API_KEY` unset:** Complete Deep Dive → expect deterministic snapshot in UI + CRM; optional banner / meta reflecting `openai_disabled`.
2. **`OPENAI_API_KEY` set:** Complete Deep Dive → expect `generationSource: "openai"` in forwarded payload when AI succeeds.
3. **CRM misconfiguration or failure:** UI should still show snapshot; amber notice client-side; server logs **`[assessment-lead]`** errors.
4. **Rate limiting:** Repeated requests until limits trigger → **`rate_limit`** and deterministic UX (HTTP **429** on deep-dive route).

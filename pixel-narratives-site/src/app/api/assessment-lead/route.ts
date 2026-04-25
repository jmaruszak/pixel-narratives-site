import { NextResponse } from "next/server";

import { buildAssessmentLeadNotes } from "@/lib/aiReadinessAssessment";

const LOG_PREFIX = "[assessment-lead]";

type AssessmentLeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  score?: number;
  category?: string;
  answers?: unknown;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const crmEndpoint = process.env.CRM_ASSESSMENT_ENDPOINT?.trim() ?? "";
  const apiKey = process.env.CRM_ASSESSMENT_API_KEY?.trim() ?? "";
  const hasCrmEndpoint = crmEndpoint.length > 0;
  const hasCrmApiKey = apiKey.length > 0;

  console.info(`${LOG_PREFIX} env check`, {
    hasCrmAssessmentEndpoint: hasCrmEndpoint,
    hasCrmAssessmentApiKey: hasCrmApiKey,
  });

  if (!hasCrmEndpoint || !hasCrmApiKey) {
    console.error(`${LOG_PREFIX} missing configuration`, {
      hasCrmAssessmentEndpoint: hasCrmEndpoint,
      hasCrmAssessmentApiKey: hasCrmApiKey,
    });
    return NextResponse.json(
      {
        success: false,
        error:
          "Server configuration is incomplete. Set CRM_ASSESSMENT_ENDPOINT and CRM_ASSESSMENT_API_KEY for this deployment.",
      },
      { status: 500 }
    );
  }

  let payload: AssessmentLeadPayload;

  try {
    payload = (await request.json()) as AssessmentLeadPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const email = payload.email?.trim();
  const name = payload.name?.trim();
  const company = payload.company?.trim();
  const phone = payload.phone?.trim();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { success: false, error: "A valid email is required." },
      { status: 400 }
    );
  }

  if (typeof payload.score !== "number" || !payload.category) {
    return NextResponse.json(
      { success: false, error: "Score and category are required." },
      { status: 400 }
    );
  }

  const notes = buildAssessmentLeadNotes(
    payload.answers,
    payload.score,
    payload.category
  );

  const crmPayload = {
    name: name || "",
    email,
    company: company || "",
    phone: phone || "",
    score: payload.score,
    category: payload.category,
    source: payload.source || "pixelnarratives.studio",
    notes,
    /**
     * Some CRMs only render the lead note from `answers` (or fall back to a
     * default template when it is empty). This is the same human summary as
     * `notes`—not a full response dump. Prefer this or top-level `notes` in
     * the CRM so the multi-line plan output appears in the UI.
     */
    answers: { notes },
  };

  try {
    const response = await fetch(crmEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(crmPayload),
    });

    const data = (await response.json().catch(() => null)) as unknown;

    if (!response.ok) {
      console.error(`${LOG_PREFIX} CRM HTTP error`, {
        status: response.status,
        statusText: response.statusText,
      });
      return NextResponse.json(
        {
          success: false,
          error: "CRM submission failed.",
          details: data,
        },
        { status: response.status }
      );
    }

    console.info(`${LOG_PREFIX} CRM accepted submission`, {
      status: response.status,
      notesLength: notes.length,
    });
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown error";
    console.error(`${LOG_PREFIX} CRM request failed`, { errorMessage: message });
    return NextResponse.json(
      { success: false, error: "CRM submission failed." },
      { status: 500 }
    );
  }
}

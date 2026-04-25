import { NextResponse } from "next/server";

const crmEndpoint =
  "https://crm.pixelnarratives.studio/api/public/assessment-lead";

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
  const apiKey = process.env.ASSESSMENT_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Assessment API key is not configured." },
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

  const crmPayload = {
    name: name || "",
    email,
    company: company || "",
    phone: phone || "",
    score: payload.score,
    category: payload.category,
    answers: payload.answers,
    source: payload.source || "pixelnarratives.studio",
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
      return NextResponse.json(
        {
          success: false,
          error: "CRM submission failed.",
          details: data,
        },
        { status: response.status }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: "CRM submission failed." },
      { status: 500 }
    );
  }
}

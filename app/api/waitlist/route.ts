import { NextResponse } from "next/server";
import { isWaitlistEnabled } from "@/lib/constants";
import { createWaitlistSignup, validateWaitlistPayload, type WaitlistPayload } from "@/lib/waitlist";

export const runtime = "nodejs";

type InsertSignup = (data: WaitlistPayload) => Promise<{ duplicate: boolean }>;

export async function handleWaitlistPost(
  request: Request,
  insertSignup: InsertSignup = createWaitlistSignup,
  enabled = isWaitlistEnabled(),
) {
  if (!enabled) {
    return NextResponse.json({ error: "Waitlist is temporarily unavailable." }, { status: 503 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 8_192) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validated = validateWaitlistPayload(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  try {
    const { duplicate } = await insertSignup({ ...validated.data, source: "coefficient.work" });
    return NextResponse.json(
      {
        ok: true,
        duplicate,
        message: duplicate
          ? "You're already on the MCP Doctor waitlist."
          : "You're on the MCP Doctor waitlist. Thanks — we'll only email about early access.",
      },
      { status: duplicate ? 200 : 201 },
    );
  } catch (error) {
    console.error("Waitlist insert failed", error instanceof Error ? error.name : "UnknownError");
    return NextResponse.json(
      { error: "We couldn't save that right now. Please try again later." },
      { status: 503 },
    );
  }
}

export async function POST(request: Request) {
  return handleWaitlistPost(request);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}

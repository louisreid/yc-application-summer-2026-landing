import { neon } from "@neondatabase/serverless";

export type WaitlistPayload = {
  email: string;
  name?: string;
  company?: string;
  role?: string;
  interest?: string;
  consent: boolean;
  website?: string;
  source?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function optionalText(value: unknown, maxLength: number): string | undefined {
  if (value == null || value === "") return undefined;
  return String(value).trim().slice(0, maxLength) || undefined;
}

export function validateWaitlistPayload(body: unknown): {
  ok: true;
  data: WaitlistPayload;
} | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }

  const b = body as Record<string, unknown>;

  if (b.website && String(b.website).length > 0) {
    return { ok: false, error: "Rejected" };
  }

  const email = String(b.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, error: "Valid email required" };
  }

  if (!b.consent) {
    return { ok: false, error: "Consent required" };
  }

  return {
    ok: true,
    data: {
      email,
      name: optionalText(b.name, 100),
      company: optionalText(b.company, 120),
      role: optionalText(b.role, 80),
      interest: optionalText(b.interest, 80) ?? "product-hunt",
      consent: true,
      source: optionalText(b.source, 80) ?? "coefficient.work",
    },
  };
}

export async function createWaitlistSignup(
  data: WaitlistPayload,
  connectionString = process.env.DATABASE_URL,
): Promise<{ duplicate: boolean }> {
  if (!connectionString) throw new Error("Waitlist database is not configured");
  const sql = neon(connectionString);
  const inserted = await sql`
    INSERT INTO waitlist_signups (
      email, name, company, role, interest, source, consented_at, privacy_version
    ) VALUES (
      ${data.email}, ${data.name ?? null}, ${data.company ?? null}, ${data.role ?? null},
      ${data.interest ?? "product-hunt"}, ${data.source ?? "coefficient.work"}, NOW(), '2026-08-24'
    )
    ON CONFLICT (email) DO NOTHING
    RETURNING email
  `;
  return { duplicate: inserted.length === 0 };
}

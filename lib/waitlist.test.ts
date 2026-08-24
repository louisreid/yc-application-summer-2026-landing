import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateWaitlistPayload } from "./waitlist.js";

describe("validateWaitlistPayload", () => {
  it("normalizes a consented email signup", () => {
    const result = validateWaitlistPayload({ email: " Louis@Example.COM ", consent: true });
    assert.equal(result.ok, true);
    if (result.ok) assert.equal(result.data.email, "louis@example.com");
  });

  it("rejects invalid email and missing consent", () => {
    assert.deepEqual(validateWaitlistPayload({ email: "not-an-email", consent: true }), {
      ok: false,
      error: "Valid email required",
    });
    assert.deepEqual(validateWaitlistPayload({ email: "test@example.com", consent: false }), {
      ok: false,
      error: "Consent required",
    });
  });

  it("rejects the honeypot", () => {
    assert.deepEqual(
      validateWaitlistPayload({ email: "test@example.com", consent: true, website: "spam" }),
      { ok: false, error: "Rejected" },
    );
  });
});

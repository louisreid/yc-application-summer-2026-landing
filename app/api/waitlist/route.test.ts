import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { handleWaitlistPost } from "./route.js";

function request(body: unknown) {
  return new Request("https://coefficient.work/api/waitlist", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("waitlist API", () => {
  it("creates a valid signup", async () => {
    const response = await handleWaitlistPost(
      request({ email: "new@example.com", consent: true }),
      async () => ({ duplicate: false }),
      true,
    );
    assert.equal(response.status, 201);
    assert.equal((await response.json()).duplicate, false);
  });

  it("returns a stable success for duplicate signups", async () => {
    const response = await handleWaitlistPost(
      request({ email: "existing@example.com", consent: true }),
      async () => ({ duplicate: true }),
      true,
    );
    assert.equal(response.status, 200);
    assert.equal((await response.json()).duplicate, true);
  });

  it("rejects invalid email without touching the database", async () => {
    let called = false;
    const response = await handleWaitlistPost(
      request({ email: "bad", consent: true }),
      async () => { called = true; return { duplicate: false }; },
      true,
    );
    assert.equal(response.status, 400);
    assert.equal(called, false);
  });

  it("returns 503 without leaking database errors", async () => {
    const originalError = console.error;
    console.error = () => undefined;
    try {
      const response = await handleWaitlistPost(
        request({ email: "error@example.com", consent: true }),
        async () => { throw new Error("secret database detail"); },
        true,
      );
      assert.equal(response.status, 503);
      assert.equal(JSON.stringify(await response.json()).includes("secret database detail"), false);
    } finally {
      console.error = originalError;
    }
  });
});

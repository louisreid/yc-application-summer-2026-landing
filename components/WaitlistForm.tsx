"use client";

import { FormEvent, useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setMessage("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, consent, website }),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "Signup failed");
      setStatus("success");
      setMessage(result.message ?? "You're on the waitlist.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Signup failed");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-line bg-white p-5 text-sm" role="status">
        <p className="font-medium text-ink">{message}</p>
        <p className="mt-2 text-muted">No newsletter, telemetry, or account was created.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-lg border border-line bg-white p-5 text-sm">
      <div>
        <label htmlFor="waitlist-email" className="font-medium text-ink">Early access email</label>
        <input
          id="waitlist-email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full rounded-md border border-line px-3 py-2 text-ink"
          placeholder="you@example.com"
        />
      </div>
      <label className="flex items-start gap-2 text-muted">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1"
        />
        <span>I agree to receive occasional MCP Doctor early-access email. Unsubscribe anytime.</span>
      </label>
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
        aria-hidden="true"
      />
      <button
        type="submit"
        disabled={status === "saving"}
        className="rounded-md bg-ink px-4 py-2 font-medium text-paper disabled:opacity-60"
      >
        {status === "saving" ? "Joining…" : "Join waitlist"}
      </button>
      {status === "error" && <p role="alert" className="text-red-700">{message}</p>}
      <p className="text-xs text-muted">Stored only for MCP Doctor early access. See Privacy.</p>
    </form>
  );
}

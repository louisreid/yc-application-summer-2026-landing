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
      <div className="border border-ink bg-paper p-6 text-sm shadow-[6px_6px_0_#d7dbd4]" role="status">
        <p className="font-mono text-xs uppercase tracking-wider text-signal">Saved</p>
        <p className="mt-3 font-medium text-ink">{message}</p>
        <p className="mt-2 text-muted">No newsletter, telemetry, or account was created.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5 border border-ink bg-paper p-6 text-sm shadow-[8px_8px_0_#d7dbd4] sm:p-8">
      <div className="border-b border-line pb-5">
        <p className="eyebrow">Hosted CI early access</p>
        <p className="mt-2 leading-6 text-muted">One email when there is something concrete to test. No account is created.</p>
      </div>
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
          className="mt-2 w-full border border-line bg-white px-3 py-2.5 text-ink outline-none transition focus:border-ink"
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
        className="bg-ink px-5 py-3 font-medium text-paper transition hover:bg-signal hover:text-ink disabled:opacity-60"
      >
        {status === "saving" ? "Joining…" : "Join waitlist"}
      </button>
      {status === "error" && <p role="alert" className="text-red-700">{message}</p>}
      <p className="text-xs text-muted">Stored only for MCP Doctor early access. See Privacy.</p>
    </form>
  );
}

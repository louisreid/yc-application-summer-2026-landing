import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Data flow",
  description: "What MCP Doctor sends, keeps local, and does not collect.",
  alternates: { canonical: `${SITE_URL}/data-flow` },
};

export default function DataFlowPage() {
  return (
    <main className="mx-auto max-w-[760px] space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Data flow</h1>
      <p>Only flows that exist today are listed.</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Local inspect</h2>
        <p>
          <code className="font-mono text-sm">inspect</code> connects from your
          machine to the MCP server you name, scores the schema, and can write
          <code className="font-mono text-sm"> report.md</code> next to you. Nothing
          is uploaded off your machine.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Eval</h2>
        <p>
          Optional. Uses a model key you provide. Credential values stay on your
          machine; the task, tool schemas, calls, and results are sent to the
          selected provider. MCP Doctor does not store them.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Website</h2>
        <p>
          Pages are hosted on Vercel. Product analytics and install-copy tracking
          are disabled for this launch.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Not enabled</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>CLI telemetry ingestion</li>
          <li>Stripe checkout</li>
          <li>Accounts</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Optional waitlist</h2>
        <p>
          With your explicit consent, the website sends your email to its Vercel
          API route and stores it in a connected Neon Postgres database. Duplicate
          addresses are treated as an existing signup. No MCP data is collected.
        </p>
      </section>

      <p className="text-sm text-muted">
        Questions:{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </main>
  );
}

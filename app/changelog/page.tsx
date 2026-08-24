import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Public changes to MCP Doctor.",
  alternates: { canonical: `${SITE_URL}/changelog` },
};

const ENTRIES = [
  {
    date: "2026-08-24",
    title: "CLI v0.4.7 launch candidate",
    body: "Pinned public commands to the scoped 0.4.7 package, documented OpenRouter and direct-provider evals, clarified execution-proof semantics, removed product analytics, and opened the consented early-access waitlist.",
  },
  {
    date: "2026-08-19",
    title: "Product name is MCP Doctor",
    body: "Dropped parent-brand labelling from header, titles, and metadata. Replaced the three-color readiness tile with a monotone medical plus. Waitlist, telemetry ingestion, and checkout stay off.",
  },
  {
    date: "2026-08-17",
    title: "Public identity: MCP Doctor",
    body: "Landing copy, mark, and metadata now match the product brand. Waitlist collection is off. GitHub/npm links use coefficient-work.",
  },
  {
    date: "2026-07-16",
    title: "CLI v0.4.1",
    body: "inspect, benchmark, and BYOK eval are available in the open-source CLI. Benchmark observations are dated 2026-07-10.",
  },
] as const;

export default function ChangelogPage() {
  return (
    <main className="mx-auto max-w-[760px] space-y-8 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Changelog</h1>
      <ol className="space-y-8">
        {ENTRIES.map((entry) => (
          <li key={entry.date} className="space-y-2">
            <p className="font-mono text-sm text-muted">{entry.date}</p>
            <h2 className="text-xl font-semibold">{entry.title}</h2>
            <p className="text-muted">{entry.body}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}

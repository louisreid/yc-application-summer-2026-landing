import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Public changes to MCP Doctor.",
  alternates: { canonical: `${SITE_URL}/changelog` },
};

const ENTRIES = [
  {
    date: "2026-08-24",
    title: "CLI v0.4.7 published",
    body: "Published the scoped 0.4.7 package, documented OpenRouter and direct-provider evals, clarified execution-proof semantics, removed product analytics, and opened the consented early-access waitlist.",
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
    <main className="prose-frame py-16 sm:py-20">
      <PageIntro eyebrow="Product record" title="Changelog" intro="Dated changes to the public CLI and website, without rewriting the past." />
      <ol className="mt-12 border-t border-ink">
        {ENTRIES.map((entry) => (
          <li key={entry.date} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[120px_1fr]">
            <p className="font-mono text-xs text-muted">{entry.date}</p>
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.025em]">{entry.title}</h2>
              <p className="mt-2 leading-7 text-muted">{entry.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}

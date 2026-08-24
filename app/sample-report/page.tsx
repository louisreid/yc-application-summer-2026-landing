import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sample report",
  description: "A real MCP Doctor 0.4.7 inspect report and three-model execution matrix.",
  alternates: { canonical: `${SITE_URL}/sample-report` },
};

const models = [
  ["OpenAI", "openrouter/openai/gpt-5.6-sol", "1,622"],
  ["Anthropic", "openrouter/anthropic/claude-sonnet-5", "4,772"],
  ["Google", "openrouter/google/gemini-3.7-flash", "1,717"],
] as const;

export default function SampleReportPage() {
  return (
    <main className="site-frame py-14 sm:py-20">
      <PageIntro
        eyebrow="Published package evidence"
        title="A report you can interrogate, not just a score you have to trust."
        intro="This evidence came from a clean, isolated run of the live npm 0.4.7 package against RelayForge, a synthetic incident-routing MCP fixture."
      />

      <section className="grid gap-10 py-12 lg:grid-cols-[.7fr_1.3fr]">
        <aside>
          <p className="eyebrow">Provenance</p>
          <dl className="mt-5 border-t border-ink text-sm">
            <Fact label="Package" value="@coefficient-work/mcp-doctor@0.4.7" />
            <Fact label="Observed" value="24 August 2026" />
            <Fact label="Fixture" value="RelayForge v0.1.0" />
            <Fact label="Transport" value="stdio" />
            <Fact label="Environment" value="Fresh temporary directory" />
          </dl>
          <p className="mt-6 text-sm leading-6 text-muted">
            RelayForge is synthetic and contains no customer or production data. Credential values and machine-local paths are excluded.
          </p>
        </aside>

        <div className="border border-ink bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink px-5 py-4">
            <span className="font-mono text-xs">live inspection / relayforge</span>
            <span className="font-mono text-xs text-signal">connected · 52ms</span>
          </div>
          <div className="grid md:grid-cols-[180px_1fr]">
            <div className="border-b border-line p-6 md:border-b-0 md:border-r">
              <p className="eyebrow">Readiness</p>
              <p className="mt-4 text-6xl font-semibold tracking-[-0.07em]">84<span className="text-lg text-muted">/100</span></p>
              <p className="mt-2 font-mono text-sm text-signal">Grade B</p>
              <p className="mt-5 text-xs leading-5 text-muted">10 tools · 1,113 estimated definition tokens</p>
            </div>
            <div className="divide-y divide-line p-6">
              <Check status="ok" title="Input contracts" body="Object schemas use valid required semantics and documented properties." />
              <Check status="ok" title="Sensitive inputs" body="No credential-like values are requested from the model." />
              <Check status="ok" title="Destructive clarity" body="The destructive operation includes an explicit warning." />
              <Check status="info" title="Output contracts" body="All ten tools still lack optional output schemas, so the result stays below A." />
            </div>
          </div>
          <div className="border-t border-line px-5 py-4 text-sm">
            <a href="/reports/relayforge-inspect-0.4.7.md" download className="font-medium underline underline-offset-4">
              Download raw inspect Markdown ↓
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-ink py-12">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Execution matrix</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">One task. Three model families. Inspectable evidence.</h2>
            <p className="mt-5 leading-7 text-muted">
              Each selected model called the named read-only tool once and received one non-error result. Displayed call counts match the replay.
            </p>
          </div>
          <div className="overflow-x-auto border border-ink bg-ink text-paper">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                <tr className="border-b border-white/20">
                  <th className="px-5 py-4 font-normal">Family</th>
                  <th className="px-5 py-4 font-normal">Model</th>
                  <th className="px-5 py-4 font-normal">Evidence</th>
                  <th className="px-5 py-4 text-right font-normal">Calls / results</th>
                  <th className="px-5 py-4 text-right font-normal">Tokens</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {models.map(([family, model, tokens]) => (
                  <tr key={family}>
                    <td className="px-5 py-4 text-white/60">{family}</td>
                    <td className="px-5 py-4 font-mono text-xs">{model}</td>
                    <td className="px-5 py-4 font-mono text-xs text-signal">proven</td>
                    <td className="px-5 py-4 text-right font-mono">1 / 1</td>
                    <td className="px-5 py-4 text-right font-mono text-white/60">{tokens}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t border-white/20 px-5 py-4">
              <a href="/reports/relayforge-eval-0.4.7.md" download className="text-sm font-medium underline underline-offset-4">
                Download raw eval Markdown ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink bg-white px-6 py-10 sm:px-10">
        <div className="grid gap-8 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Replay excerpt</p>
            <p className="mt-4 text-sm leading-6 text-muted">The report keeps the call and result in order so the operator can judge the run.</p>
          </div>
          <ol className="space-y-4 font-mono text-xs leading-6">
            <li><span className="mr-3 text-signal">→</span>call get_incident {`{"incident_id":"inc_demo_001"}`}</li>
            <li><span className="mr-3 text-signal">←</span>result: Checkout latency above SLO · checkout-api · high · open</li>
          </ol>
        </div>
      </section>

      <section className="grid gap-8 py-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow">What this proves</p>
          <p className="mt-4 text-lg leading-8">A real, non-error MCP result occurred for every selected model.</p>
        </div>
        <div>
          <p className="eyebrow">What this does not prove</p>
          <p className="mt-4 text-lg leading-8 text-muted">Universal task correctness, security, load readiness, or compatibility with every MCP client.</p>
        </div>
      </section>

      <Link href="/#how-it-works" className="inline-flex border-b border-ink pb-1 text-sm font-medium">See how to run it on your MCP →</Link>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return <div className="grid grid-cols-[90px_1fr] gap-4 border-b border-line py-3"><dt className="text-muted">{label}</dt><dd className="break-words font-mono text-xs">{value}</dd></div>;
}

function Check({ status, title, body }: { status: "ok" | "info"; title: string; body: string }) {
  return <div className="grid grid-cols-[24px_1fr] gap-3 py-4 first:pt-0 last:pb-0"><span className={`font-mono text-xs ${status === "ok" ? "text-signal" : "text-muted"}`}>{status === "ok" ? "+" : "i"}</span><div><p className="text-sm font-medium">{title}</p><p className="mt-1 text-sm leading-6 text-muted">{body}</p></div></div>;
}

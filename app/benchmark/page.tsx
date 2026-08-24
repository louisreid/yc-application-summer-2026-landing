import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_BENCHMARK } from "@/lib/benchmark";
import { BENCHMARK_CMD, BENCHMARK_REPO_URL } from "@/lib/constants";
import InstallPill from "@/components/InstallPill";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: CURRENT_BENCHMARK.title,
  description: CURRENT_BENCHMARK.methodology,
  alternates: { canonical: "https://coefficient.work/benchmark" },
};

export default function BenchmarkPage() {
  const data = CURRENT_BENCHMARK;

  return (
    <main className="site-frame py-14 sm:py-20">
      <PageIntro eyebrow="Dated public observation" title={data.title} intro={data.methodology} />
      <div className="space-y-12 pt-10">
        <div>
          <p className="font-mono text-xs text-muted">
            {data.version} · observed {data.observedAt} · CLI {data.cliVersion} · commit{" "}
            {data.commit} · {data.connectedCount}/{data.catalogSize} connected
          </p>
        </div>

        <div className="overflow-x-auto border border-ink bg-white">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink font-mono text-[10px] uppercase tracking-wider text-muted">
                <th className="px-4 py-4 font-normal">Rank</th>
                <th className="px-4 py-4 font-normal">Server</th>
                <th className="px-4 py-4 font-normal">Grade</th>
                <th className="px-4 py-4 font-normal">Score</th>
                <th className="px-4 py-4 font-normal">Tools</th>
                <th className="px-4 py-4 font-normal">Tokens</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, i) => (
                  <tr key={row.server} className="border-b border-line transition-colors last:border-0 hover:bg-paper">
                  <td className="px-4 py-3 text-muted">{i + 1}</td>
                  <td className="px-4 py-3">{row.server}</td>
                  <td className="px-4 py-3 font-mono">{row.grade}</td>
                  <td className="px-4 py-3">{row.score}</td>
                  <td className="px-4 py-3">{row.tools}</td>
                  <td className="px-4 py-3">{row.tokens.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
        <section className="border-t border-ink pt-6 text-muted">
          <p className="eyebrow">Awards · {data.version}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">Observed standouts</h2>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {data.awards.map((award) => (
              <li key={award.label}>
                {award.label}: {award.value}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-ink pt-6 text-muted">
          <p className="eyebrow">Connection failures · {data.version}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">What could not be scored</h2>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {data.connectionFailures.map((row) => (
              <li key={row.server}>
                {row.server}: {row.reason}
              </li>
            ))}
          </ul>
        </section>
        </div>

        <section className="border-l-2 border-warn pl-5 text-sm leading-6 text-muted">
          {data.notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </section>

        <section className="border-t border-ink pt-8">
          <p className="eyebrow">Reproduce the observation</p>
          <h2 className="mt-3 text-2xl font-semibold">Run the dated catalog yourself</h2>
          <div className="mt-6">
          <InstallPill command={BENCHMARK_CMD} />
          </div>
          <p className="text-sm text-muted">
            Source report on{" "}
            <a
              href={BENCHMARK_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-ink"
            >
              GitHub
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}

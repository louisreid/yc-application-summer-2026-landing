import Link from "next/link";
import InstallPill from "@/components/InstallPill";
import TerminalCard from "@/components/TerminalCard";
import WaitlistForm from "@/components/WaitlistForm";
import BrandMark from "@/components/icons/BrandMark";
import { CURRENT_BENCHMARK } from "@/lib/benchmark";
import {
  COMPARISON_ROWS,
  CONTACT_EMAIL,
  DOCS_URL,
  FAQ,
  GITHUB_REPO,
  HERO_HEADLINE,
  HERO_SUBHEAD,
  INSTALL_CMD,
  LICENSE_URL,
  NAMESPACE_NOTE,
  NPM_PACKAGE,
} from "@/lib/constants";

export default function HomePage() {
  return (
    <main>
      <section className="section-gap px-6 pt-10 text-center">
        <div className="mx-auto max-w-[760px] space-y-6">
          <div className="flex justify-center">
            <BrandMark className="h-12 w-12" title="MCP Doctor" surface="paper" />
          </div>
          <h1 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[42px]">
            {HERO_HEADLINE}
          </h1>
          <p className="text-lg text-muted">{HERO_SUBHEAD}</p>
          <InstallPill command={INSTALL_CMD} className="mx-auto" />
          <p className="text-sm text-muted">
            Local inspect. MIT license.{" "}
            <a href={DOCS_URL} className="underline hover:text-ink">
              Read the docs
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-gap border-t border-line px-6">
        <div className="mx-auto grid max-w-[760px] gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-semibold">What the CLI does</h2>
            <ul className="list-inside list-disc space-y-2 text-muted">
              <li>Inspect schemas, tools, and token cost without an API key</li>
              <li>Run optional task evals across OpenAI, Anthropic, and Google models</li>
              <li>Write a markdown readiness report you keep locally</li>
            </ul>
            <Link href="/benchmark" className="text-sm font-medium underline">
              See dated benchmark observations
            </Link>
          </div>
          <TerminalCard
            lines={[
              { text: `$ npx --yes --package ${NPM_PACKAGE}@0.4.7 mcp-doctor inspect puppeteer -o report.md` },
              { text: "" },
              { text: "Grade: B | Tools: 7 | Tokens: 612", tone: "success" },
              { text: "" },
              { text: "Recommended improvements", tone: "muted" },
              { text: "  navigate: description too short" },
              { text: "  screenshot: missing output schema" },
            ]}
          />
        </div>
      </section>

      <section className="section-gap px-6" id="trust">
        <div className="mx-auto max-w-[760px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">Trust evidence</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <TrustCard
              title="Inspect stays local"
              body="inspect writes markdown on your machine. It does not upload MCP names, URLs, or reports."
              href="/data-flow"
            />
            <TrustCard
              title="MIT license"
              body="The CLI is open source. Read the code before you run it."
              href={LICENSE_URL}
              external
            />
            <TrustCard
              title="Dated benchmarks"
              body={`${CURRENT_BENCHMARK.title} ${CURRENT_BENCHMARK.version}, observed ${CURRENT_BENCHMARK.observedAt}, CLI ${CURRENT_BENCHMARK.cliVersion}.`}
              href="/benchmark"
            />
            <TrustCard
              title="Security contact"
              body={`${CONTACT_EMAIL} — a mailbox, not a claimed security program.`}
              href="/security"
            />
          </div>
          <p className="text-sm text-muted">
            See the{" "}
            <Link href="/data-flow" className="underline hover:text-ink">
              data-flow
            </Link>{" "}
            and{" "}
            <Link href="/changelog" className="underline hover:text-ink">
              changelog
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="section-gap border-t border-line px-6" id="early-access">
        <div className="mx-auto max-w-[760px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">Start local</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold">Free CLI</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>inspect and benchmark — no API key</li>
                <li>list reads your Cursor mcp.json</li>
                <li>markdown reports you own</li>
              </ul>
            </div>
            <div className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-display text-lg font-semibold">Hosted CI later</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>eval via OpenRouter or a direct provider key</li>
                <li>GitHub Action scorecard is not shipping yet</li>
                <li>Execution proof means a real non-error MCP result</li>
              </ul>
              <div className="mt-6">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap px-6">
        <div className="mx-auto max-w-[760px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">{CURRENT_BENCHMARK.title}</h2>
          <p className="text-sm text-muted">
            Observed {CURRENT_BENCHMARK.observedAt} · CLI {CURRENT_BENCHMARK.cliVersion} · commit{" "}
            <span className="font-mono">{CURRENT_BENCHMARK.commit}</span>
          </p>
          <div className="overflow-x-auto rounded-lg border border-line bg-white">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-muted">
                  <th className="px-4 py-3 font-medium">Server</th>
                  <th className="px-4 py-3 font-medium">Grade</th>
                  <th className="px-4 py-3 font-medium">Tools</th>
                  <th className="px-4 py-3 font-medium">Tokens</th>
                </tr>
              </thead>
              <tbody>
                {CURRENT_BENCHMARK.rows.map((row) => (
                  <tr key={row.server} className="border-b border-line last:border-0">
                    <td className="px-4 py-3">{row.server}</td>
                    <td className="px-4 py-3 font-mono">{row.grade}</td>
                    <td className="px-4 py-3">{row.tools}</td>
                    <td className="px-4 py-3">{row.tokens.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/benchmark" className="text-sm font-medium underline">
            Methodology and failures
          </Link>
        </div>
      </section>

      <section className="section-gap border-t border-line px-6">
        <div className="mx-auto max-w-[760px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">Where MCP Doctor fits</h2>
          <div className="overflow-x-auto rounded-lg border border-line bg-white">
            <table className="w-full text-left text-sm">
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.need} className="border-b border-line last:border-0">
                    <td className="px-4 py-3 text-muted">{row.need}</td>
                    <td
                      className={`px-4 py-3 ${"highlight" in row && row.highlight ? "font-semibold text-ink" : ""}`}
                    >
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-gap px-6">
        <div className="mx-auto max-w-[760px]">
          <h2 className="mb-6 font-display text-2xl font-semibold">FAQ</h2>
          <dl className="divide-y divide-line">
            {FAQ.map((item) => (
              <div key={item.q} className="py-4">
                <dt className="font-medium text-ink">{item.q}</dt>
                <dd className="mt-2 text-muted">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-gap border-t border-line px-6 pb-20 text-center">
        <div className="mx-auto max-w-[760px] space-y-6">
          <h2 className="font-display text-2xl font-semibold">Run it locally</h2>
          <InstallPill command={INSTALL_CMD} className="mx-auto" />
          <p className="text-xs text-muted">{NAMESPACE_NOTE}</p>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium underline"
          >
            Source on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

function TrustCard({
  title,
  body,
  href,
  external,
}: {
  title: string;
  body: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "block rounded-lg border border-line bg-white p-5 text-left hover:border-ink";
  const inner = (
    <>
      <h3 className="font-display text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{body}</p>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}

import Link from "next/link";
import DiagnosticDemo from "@/components/DiagnosticDemo";
import InstallPill from "@/components/InstallPill";
import WaitlistForm from "@/components/WaitlistForm";
import { CURRENT_BENCHMARK } from "@/lib/benchmark";
import {
  COMPARISON_ROWS,
  DOCS_URL,
  FAQ,
  GITHUB_REPO,
  HERO_HEADLINE,
  HERO_SUBHEAD,
  INSPECT_CMD,
  INSTALL_CMD,
  NAMESPACE_NOTE,
} from "@/lib/constants";

const failureChecks = [
  {
    number: "01",
    title: "Contracts agents receive",
    body: "Catch omitted schemas, vague names, credential-shaped arguments, unclear destructive actions, and missing output contracts on the live wire surface.",
  },
  {
    number: "02",
    title: "Real tool execution",
    body: "Run one task through selected models. A pass requires a real, non-error MCP result—not persuasive prose or provider finish metadata.",
  },
  {
    number: "03",
    title: "Evidence you can review",
    body: "Keep the ordered calls, results, friction, token use, and named fixes in a local Markdown report that can travel with a release.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="site-frame grid min-w-0 grid-cols-[minmax(0,1fr)] gap-14 pb-20 pt-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] lg:items-center lg:pb-28 lg:pt-24">
        <div className="min-w-0">
          <p className="eyebrow">Open-source MCP readiness check</p>
          <h1 className="mt-5 max-w-[12ch] text-[46px] font-semibold leading-[0.98] tracking-[-0.06em] sm:text-[64px] lg:text-[72px]">
            {HERO_HEADLINE}
          </h1>
          <p className="mt-7 max-w-[59ch] text-lg leading-8 text-muted sm:text-xl">
            {HERO_SUBHEAD}
          </p>
          <div className="mt-9 min-w-0 max-w-2xl">
            <InstallPill command={INSTALL_CMD} label="Copy CLI" />
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <Link href="/sample-report" className="font-medium underline decoration-line underline-offset-4 hover:decoration-ink">
                Read a real sample report ↗
              </Link>
              <a href={GITHUB_REPO} className="text-muted hover:text-ink">
                MIT licensed · source on GitHub
              </a>
            </div>
          </div>
          <p className="mt-8 max-w-xl border-l-2 border-signal pl-4 text-sm leading-6 text-muted">
            <strong className="font-medium text-ink">Inspect stays local and needs no model key.</strong>{" "}
            Optional evals are BYOK and send the task, schemas, calls, and results to the provider you select.
          </p>
        </div>
        <DiagnosticDemo />
      </section>

      <section className="border-y border-ink bg-white" aria-label="Product summary">
        <div className="site-frame grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          <SummaryStat label="Surface" value="Live MCP" />
          <SummaryStat label="Artifact" value="Local Markdown" />
          <SummaryStat label="Model route" value="BYOK · explicit" />
        </div>
      </section>

      <section className="section-gap site-frame" id="how-it-works">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Connection is the start</p>
            <h2 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Test the part your users actually depend on.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              Protocol success tells you a server answered. MCP Doctor examines whether the resulting tool surface gives agents a fair chance of succeeding.
            </p>
          </div>
          <div className="border-t border-ink">
            {failureChecks.map((item) => (
              <article key={item.number} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[52px_1fr]">
                <span className="font-mono text-xs text-signal">{item.number}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-2 max-w-[62ch] leading-7 text-muted">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-rule bg-white" id="proof">
        <div className="site-frame grid gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">One release workflow</p>
            <h2 className="mt-4 max-w-[11ch] text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-5xl">
              Discover. Inspect. Exercise. Review.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              Start with the server configuration you already use. Add model traffic only when you want execution evidence.
            </p>
            <Link href="/sample-report" className="mt-7 inline-flex border-b border-ink pb-1 text-sm font-medium">
              Open the complete sample report →
            </Link>
          </div>

          <ol className="border-t border-ink">
            <WorkflowStep number="01" title="Find the configured server" note="No model key">
              <code>{INSTALL_CMD}</code>
            </WorkflowStep>
            <WorkflowStep number="02" title="Inspect the live contracts" note="Local report">
              <code>{INSPECT_CMD}</code>
            </WorkflowStep>
            <WorkflowStep number="03" title="Exercise a named task" note="Optional · BYOK">
              Run the same task across explicit OpenRouter or direct-provider model selections.
            </WorkflowStep>
            <WorkflowStep number="04" title="Make the release decision" note="Human review">
              Read named fixes and the ordered replay. Commit the Markdown artifact if it belongs in your review process.
            </WorkflowStep>
          </ol>
        </div>
      </section>

      <section className="section-gap site-frame">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">A deliberately narrow claim</p>
            <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[1.04] tracking-[-0.045em]">
              Evidence for a decision. Not a certification badge.
            </h2>
          </div>
          <div className="grid gap-px border border-ink bg-line sm:grid-cols-2">
            <Boundary label="MCP execution proven" value="At least one real, non-error tool result was observed." positive />
            <Boundary label="Not proven" value="Universal semantic correctness, security, load readiness, or every client." />
            <Boundary label="Grade measures" value="Observable schema and agent-readiness signals." positive />
            <Boundary label="Grade does not measure" value="Whether your whole product is safe or production-ready." />
          </div>
        </div>
      </section>

      <section className="section-rule bg-ink text-paper">
        <div className="site-frame grid gap-12 py-20 lg:grid-cols-[.76fr_1.24fr] lg:py-28">
          <div>
            <p className="eyebrow !text-white/45">Fits after your build path</p>
            <h2 className="mt-4 max-w-[13ch] text-4xl font-semibold leading-[1.04] tracking-[-0.045em]">
              Generated, framework-based, or hand-written.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-white/60">
              MCP Doctor does not replace the tool you build or debug with. It examines the live surface after those choices have been made.
            </p>
          </div>
          <div className="border-t border-white/30">
            {COMPARISON_ROWS.map((row) => (
              <div key={row.need} className="grid gap-2 border-b border-white/15 py-5 sm:grid-cols-[1fr_1fr]">
                <span className="text-white/55">{row.need}</span>
                <span className={"highlight" in row && row.highlight ? "font-medium text-signal" : "text-paper"}>{row.use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap site-frame">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Trust follows the data</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">Know where every byte goes.</h2>
            <div className="mt-8 border-t border-ink">
              <TrustRow title="Inspect" body="Connects from your machine and writes locally. Nothing is sent to Coefficient." />
              <TrustRow title="Eval" body="Uses your credential. Task, schemas, calls, and results go to your selected model provider." />
              <TrustRow title="Telemetry" body="There is none in the CLI. The website has no product analytics or advertising pixels." />
            </div>
            <Link href="/data-flow" className="mt-6 inline-flex text-sm font-medium underline underline-offset-4">
              Read the complete data flow →
            </Link>
          </div>

          <div className="border border-ink bg-white p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-line pb-6">
              <div>
                <p className="eyebrow">Dated public benchmark</p>
                <h3 className="mt-2 text-2xl font-semibold">{CURRENT_BENCHMARK.title}</h3>
              </div>
              <span className="font-mono text-xs text-muted">{CURRENT_BENCHMARK.version}</span>
            </div>
            <dl className="grid grid-cols-2 gap-px bg-line">
              <BenchmarkFact label="Observed" value={CURRENT_BENCHMARK.observedAt} />
              <BenchmarkFact label="CLI" value={CURRENT_BENCHMARK.cliVersion} />
              <BenchmarkFact label="Connected" value={`${CURRENT_BENCHMARK.connectedCount}/${CURRENT_BENCHMARK.catalogSize}`} />
              <BenchmarkFact label="Rows scored" value={String(CURRENT_BENCHMARK.rows.length)} />
            </dl>
            <p className="mt-6 text-sm leading-6 text-muted">
              A reproducible methodology snapshot—not a claim that this catalog represents the entire MCP ecosystem.
            </p>
            <Link href="/benchmark" className="mt-5 inline-flex text-sm font-medium underline underline-offset-4">
              Review results and failures →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-rule bg-white" id="early-access">
        <div className="site-frame grid gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-28">
          <div>
            <p className="eyebrow">Current product / future product</p>
            <h2 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[1.04] tracking-[-0.045em]">The CLI is ready now. Hosted CI is not.</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted">
              Use the free MIT-licensed CLI today. Join only if recurring private evaluation and regression checks would be useful to your team.
            </p>
            <a href={DOCS_URL} className="mt-6 inline-flex text-sm font-medium underline underline-offset-4">Read the CLI documentation →</a>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <section className="section-gap prose-frame">
        <p className="eyebrow">Questions before you run it</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em]">Plain answers.</h2>
        <dl className="mt-10 border-t border-ink">
          {FAQ.map((item) => (
            <div key={item.q} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[.8fr_1.2fr]">
              <dt className="font-medium text-ink">{item.q}</dt>
              <dd className="leading-7 text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-ink bg-signal text-ink">
        <div className="site-frame py-16 sm:py-20">
          <p className="eyebrow !text-ink/60">Start with the live surface</p>
          <div className="mt-4 grid min-w-0 grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] lg:items-end">
            <h2 className="max-w-[11ch] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">See what your agents will see.</h2>
            <div className="min-w-0">
              <InstallPill command={INSTALL_CMD} className="!shadow-[4px_4px_0_rgba(11,15,20,.35)]" label="Copy CLI" />
              <p className="mt-4 text-xs leading-5 text-ink/65">{NAMESPACE_NOTE}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-5 sm:px-8 md:block md:py-7">
      <p className="eyebrow">{label}</p>
      <p className="font-mono text-sm md:mt-2">{value}</p>
    </div>
  );
}

function WorkflowStep({ number, title, note, children }: { number: string; title: string; note: string; children: React.ReactNode }) {
  return (
    <li className="grid gap-4 border-b border-line py-7 sm:grid-cols-[50px_1fr_auto]">
      <span className="font-mono text-xs text-signal">{number}</span>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-2 break-words font-mono text-sm leading-6 text-muted [&_code]:font-inherit">{children}</div>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted sm:text-right">{note}</span>
    </li>
  );
}

function Boundary({ label, value, positive = false }: { label: string; value: string; positive?: boolean }) {
  return (
    <div className="bg-white p-5 sm:p-6">
      <p className={`font-mono text-[10px] uppercase tracking-wider ${positive ? "text-signal" : "text-muted"}`}>{positive ? "+ " : "— "}{label}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}

function TrustRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[100px_1fr]">
      <p className="font-mono text-xs text-ink">{title}</p>
      <p className="text-sm leading-6 text-muted">{body}</p>
    </div>
  );
}

function BenchmarkFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white py-5 pr-5 even:pl-5">
      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-2 text-lg font-medium">{value}</dd>
    </div>
  );
}

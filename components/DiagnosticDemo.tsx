const models = [
  ["OpenAI", "gpt-5.6-sol"],
  ["Anthropic", "claude-sonnet-5"],
  ["Google", "gemini-3.7-flash"],
] as const;

export default function DiagnosticDemo() {
  return (
    <div
      className="diagnostic-grid min-w-0 max-w-full overflow-hidden border border-ink bg-ink text-paper shadow-[12px_12px_0_#d7dbd4]"
      aria-label="Published MCP Doctor 0.4.7 evidence from the synthetic RelayForge fixture"
    >
      <div className="flex items-center justify-between border-b border-white/15 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
        <span>Live evidence / 0.4.7</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
          connected
        </span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="evidence-reveal border-b border-white/15 pb-5">
          <p className="font-mono text-[11px] text-white/45">$ mcp-doctor list</p>
          <div className="mt-3 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-sm">relayforge</p>
              <p className="mt-1 text-xs text-white/55">stdio · 10 live tools · 52ms</p>
            </div>
            <span className="border border-signal/60 px-2 py-1 font-mono text-[10px] uppercase text-signal">
              found
            </span>
          </div>
        </div>

        <div className="evidence-reveal grid gap-4 border-b border-white/15 py-5 sm:grid-cols-[92px_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-white/45">Readiness</p>
            <p className="mt-2 text-4xl font-semibold tracking-[-0.06em]">84<span className="text-base text-white/45">/100</span></p>
            <p className="mt-1 font-mono text-xs text-signal">Grade B</p>
          </div>
          <div className="space-y-3 border-l border-white/15 pl-4 text-sm">
            <EvidenceLine label="Input contracts" value="valid" tone="success" />
            <EvidenceLine label="Credential-shaped args" value="none" tone="success" />
            <EvidenceLine label="Output schemas" value="10 missing" tone="warn" />
          </div>
        </div>

        <div className="evidence-reveal pt-5">
          <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-white/45">
            <span>Same task / three model families</span>
            <span>calls · results</span>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/15">
            {models.map(([provider, model]) => (
              <div key={provider} className="grid grid-cols-[86px_1fr_auto] items-center gap-3 py-3 text-xs">
                <span className="text-white/55">{provider}</span>
                <span className="min-w-0 truncate font-mono">{model}</span>
                <span className="font-mono text-signal">proven · 1/1</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="evidence-reveal flex items-center justify-between border-t border-white/15 bg-white/[0.035] px-4 py-3 text-[11px] text-white/50 sm:px-6">
        <span>Real non-error MCP result observed</span>
        <span className="font-mono text-signal">execution proven</span>
      </div>
    </div>
  );
}

function EvidenceLine({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "success" | "warn";
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-white/60">{label}</span>
      <span className={tone === "success" ? "font-mono text-signal" : "font-mono text-warn"}>
        {tone === "success" ? "+" : "!"} {value}
      </span>
    </div>
  );
}

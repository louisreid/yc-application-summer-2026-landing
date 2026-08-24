export const SITE_URL = "https://coefficient.work";
export const PRODUCT_NAME = "MCP Doctor";
/** Quiet footer credit only — not used in header, titles, or metadata. */
export const PARENT_BRAND = "Coefficient";
export const PRODUCT_CREDIT = `A project by ${PARENT_BRAND}`;
export const CONTACT_EMAIL = "hello@coefficient.work";

export const OPERATOR_LEGAL_NAME = "Roundtable Design Ltd";
export const OPERATOR_TRADING_AS = "Roundtable Studio";
export const OPERATOR_COMPANY_NO = "11924746";
export const OPERATOR_VAT = "GB346997830";
export const OPERATOR_OFFICE = "86-90 Paul Street, London EC2A 4NE";

export const GITHUB_ORG = "coefficient-work";
export const GITHUB_REPO = "https://github.com/coefficient-work/mcp-doctor";
export const GITHUB_SITE_REPO = "https://github.com/coefficient-work/mcp-doctor-site";
export const NPM_PACKAGE = "@coefficient-work/mcp-doctor";
export const DOCS_URL = `${GITHUB_REPO}#readme`;
export const LICENSE_URL = `${GITHUB_REPO}/blob/main/LICENSE`;
export const BENCHMARK_REPO_URL = `${GITHUB_REPO}/blob/main/examples/reports/STATE-OF-MCP-2026.md`;

export const INSTALL_CMD =
  "npx --yes --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor list";
export const INSPECT_CMD =
  "npx --yes --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor inspect <name> -o report.md";
export const BENCHMARK_CMD =
  "npx --yes --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor benchmark -o ./reports";

export function isWaitlistEnabled() {
  return process.env.WAITLIST_ENABLED === "true";
}

export const NAMESPACE_NOTE =
  "Public GitHub and npm identity is coefficient-work. Install @coefficient-work/mcp-doctor; do not install the unrelated unscoped mcp-doctor package.";

export const HERO_HEADLINE =
  "Your MCP can connect — and still fail in a real agent run.";
export const HERO_SUBHEAD =
  "Inspect the tool contracts models actually receive, find agent-facing defects, and record real execution evidence across selected model families.";

export const FAQ = [
  {
    q: "What does a passing eval prove?",
    a: "It proves that the selected model produced at least one real, non-error result from your MCP. It does not formally prove that every part of an arbitrary natural-language task was semantically correct.",
  },
  {
    q: "Do I need an API key?",
    a: "No for inspect and benchmark. Eval uses your own OpenRouter, OpenAI, Anthropic, AI Gateway, or Ollama credential. Credential values stay local; tasks, tool schemas, calls, and results go to the selected provider.",
  },
  {
    q: "Does it work with Stainless or Speakeasy output?",
    a: "Yes. MCP Doctor connects to the live MCP surface, whether it was generated, framework-based, or hand-written.",
  },
  {
    q: "Is it open source?",
    a: "Yes. The CLI is MIT-licensed. Hosted CI is not available yet.",
  },
  {
    q: "Who operates this?",
    a: "Roundtable Design Ltd (England and Wales, company no. 11924746), trading as Roundtable Studio. The optional waitlist stores your email and consent; product telemetry is off.",
  },
  {
    q: "Pricing?",
    a: "The CLI is free. There is no checkout. Paid hosted CI is not offered until that product exists.",
  },
] as const;

export const COMPARISON_ROWS = [
  { need: "Generate an MCP from an API", use: "A generator or framework" },
  { need: "Interactively debug a connection", use: "An inspector or playground" },
  { need: "Verify protocol conformance", use: "A conformance suite" },
  { need: "Review what agents receive and execute", use: "MCP Doctor", highlight: true },
] as const;

# MCP Doctor — Product Hunt launch copy

## Listing

**Tagline**

Know whether agents can use your MCP before you ship

**Short description**

MCP Doctor is an open-source CLI that inspects a live Model Context Protocol server for schema and agent-readiness gaps, then runs bring-your-own-key task evaluations across OpenAI, Anthropic, and Google model families. It produces reviewable reports and replay evidence without sending your MCP definitions to Coefficient.

**Links**

- Website: https://coefficient.work
- Install: `npx --yes --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor`
- GitHub: https://github.com/Coefficient-work/mcp-doctor
- Benchmark methodology and dated results: https://coefficient.work/benchmark
- Privacy: https://coefficient.work/privacy

## Maker comment

Hi Product Hunt — I built MCP Doctor after repeatedly seeing MCP servers that technically connected but were hard for agents to use reliably.

The CLI connects to the real server, inspects the schemas agents actually receive, and calls out concrete trust gaps: missing schemas, vague names, credential-shaped arguments, ambiguous destructive actions, and weak output contracts. Its eval command can then run the same task across OpenAI, Anthropic, and Google models through OpenRouter or direct provider keys.

For the launch release, I tightened one claim in particular: an eval pass means MCP Doctor observed at least one real, non-error MCP tool result. It does not claim to formally prove that an arbitrary natural-language task was semantically completed. Replay evidence and call counts are included so you can judge the run yourself.

Inspection is local and requires no MCP Doctor account. Model evaluation is BYOK; prompts and tool traffic go to the provider you select. I would especially value feedback from MCP authors on which readiness checks are useful, noisy, or missing.

## First comment

The fastest way to try it on a configured MCP is:

```bash
npx --yes --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor list
npx --yes --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor inspect <name>
```

For a model-backed task eval, add your own provider key and select a model explicitly. OpenRouter is convenient for comparing provider families through one funded account, but it is not required.

The current public benchmark is a dated methodology snapshot, not a claim that ten servers represent the ecosystem. Please send us difficult or unusual MCPs to test next.

## FAQ

### What does a passing eval prove?

It proves that the run produced at least one real, non-error result from the target MCP. It does not formally verify the full semantic correctness of an arbitrary natural-language task. The report includes the ordered replay so a human can inspect what happened.

### Does a Grade A prove my MCP is bug-free?

No. The grade measures observable schema and agent-readiness signals. It is not a security audit, a correctness proof, or production certification. Live trust defects cap the grade below A.

### Do I need an API key?

Not for `list`, `inspect`, or report generation. Model-backed `eval` uses your own OpenRouter, OpenAI, Anthropic, Google, AI Gateway, or compatible local-provider credentials.

### Why OpenRouter?

It provides one optional routing and billing layer for comparing several model families. MCP Doctor keeps model selection explicit and supports direct providers too; OpenRouter is not a lock-in requirement.

### What data does Coefficient receive?

The CLI has no telemetry in this release. Inspection stays local. If you run an eval, prompts and MCP tool traffic are sent to the model provider you selected under that provider's terms. The website waitlist stores only the email and consent metadata submitted through the form.

### Does it work with private or local MCPs?

Yes, provided the machine running the CLI can start or reach the configured server. Connection errors distinguish missing runtimes/installations, network failures, and server failures where the underlying signal permits it.

### What transports are supported?

Use the transports documented in the repository and CLI help. If an MCP depends on a custom runtime, network, or authentication setup, that dependency must be available on the evaluation machine.

### What are the main limitations?

Behavioral correctness still requires domain-specific assertions and human review; model outputs can vary; provider availability can vary; and the published benchmark is deliberately small and dated. MCP Doctor is evidence for a release decision, not a substitute for integration, security, or load testing.

## Feedback-oriented social posts

### Launch post

We made MCP Doctor: an open-source CLI for finding the gap between “my MCP connects” and “agents can actually use it.”

It inspects the live schemas agents receive and can replay the same task across OpenAI, Anthropic, and Google model families. A pass means a real non-error MCP result — not a hand-wavy claim of semantic perfection.

Try it:
`npx --yes --package @coefficient-work/mcp-doctor@0.4.7 mcp-doctor`

I would love examples of MCPs it judges incorrectly or checks you think are missing.

### Builder-focused post

MCP builders: what do you test after `tools/list` succeeds?

MCP Doctor now checks live schema quality, credential-shaped inputs, destructive-operation clarity, output contracts, and real tool execution. We also made its reports explicit about the boundary: execution evidence is not universal task-correctness proof.

Send us the awkward MCPs. Those are the useful test cases.

### Multi-model post

One MCP, one task, three model families: OpenAI, Anthropic, and Google through OpenRouter, with the call timeline and non-error result evidence preserved for each run.

MCP Doctor is provider-agnostic and BYOK; OpenRouter is simply the convenient matrix route. Which other provider/model pair should be in the next reproducible matrix?

## Screenshot provenance

The three launch images in this directory use evidence from the isolated RouteSentry blind run of the packed `0.4.7` candidate:

- `01-install-flow.png` — scoped, pinned clean-terminal install flow.
- `02-inspect-report.png` — the post-repair 84/B schema-readiness result; it remains below A because the output-schema defect remains.
- `03-three-provider-matrix.png` — all three explicit OpenRouter model families returned one real, successful MCP tool result and the displayed/replay call counts matched.

Do not describe these images as evidence from the live npm package until the registry reports `0.4.7` and the fresh live-package matrix has reproduced the result.

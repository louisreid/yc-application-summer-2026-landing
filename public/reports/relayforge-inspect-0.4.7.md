# MCP Doctor - live inspection: relayforge

| Metric | Value |
|--------|-------|
| Transport | stdio |
| Server | relayforge v0.1.0 |
| Tools (live) | 10 |
| Resources | 0 |
| Prompts | 0 |
| Connect time | 52ms |

## Tools discovered

- `list_incidents` - List RelayForge incidents, optionally filtering the in-memory fixture.
- `get_incident` - Get one incident by its stable RelayForge incident ID. This is read-only.
- `acknowledge_incident` - Mark an open incident as acknowledged when an operator has taken ownership.
- `route_alert` - Route an existing incident to an HTTPS endpoint when normal backends are unsuitable.
- `configure_backends` - Update routing backends, including removing failed backends from active rotation.
- `vacuum_history` - Reclaim storage by permanently purging old alert deliveries and zeroing their payload bodies. This...
- `executive_summary` - Create an Executive summary for a known incident when a concise leadership update is needed.
- `execute_runbook` - Execute the named operational runbook for an incident.
- `forecast_capacity` - Forecast routing capacity bands for an operations planning review.
- `legacy_snapshot` - Read the fixed legacy incident-count snapshot for compatibility checks.

---

# MCP Agent Readiness: relayforge

**Score: 84/100 (Grade B)**

| Metric | Value |
|--------|-------|
| Tools | 10 |
| Est. tokens | 1,113 |
| Checks | 13 |
| Source | live MCP |

## Checks

- [ok] **tool-count** - 10 tools - reasonable surface area
- [ok] **token-footprint** - ~1,113 tokens in tool definitions
- [ok] **duplicate-names** - No duplicate tool names
- [ok] **descriptions** - Tool descriptions look adequate for agents
- [ok] **property-descriptions** - Input properties include descriptions
- [i] **unconstrained-strings** - 4 free-form string(s) have no enum, format, or pattern
  - list_incidents.service, acknowledge_incident.note, forecast_capacity.timezone, forecast_capacity.planning_note
- [ok] **missing-required** - Object input schemas have valid required semantics
- [i] **output-schema** - 10 tool(s) lack an output schema (optional on live MCP)
  - list_incidents, get_incident, acknowledge_incident, route_alert, configure_backends, vacuum_history, executive_summary, execute_runbook (+2 more)
- [ok] **destructive-warnings** - 1 destructive tool(s) marked appropriately
- [ok] **schema-complexity** - Input schemas are reasonably sized
- [ok] **pagination** - List/search tools appear to support pagination
- [ok] **credential-in-args** - No credential-like arguments in tool input schemas
- [ok] **security-smells** - No obvious security smells in tool definitions

---
_Live MCP inspect scorecard. Reports stay on this machine._

**Next:** `mcp-doctor eval <server> --task "..."` for a BYOK agent run, or `mcp-doctor list` to see config names.

## Recommended Improvements

No high-priority fixes suggested.

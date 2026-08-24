# MCP Doctor

Public site for [coefficient.work](https://coefficient.work).

MCP Doctor is an early-stage open-source CLI that inspects MCP servers and writes a local readiness report.

## Identity

- Product: **MCP Doctor**
- GitHub/npm namespace: **coefficient-work**
- Contact: hello@coefficient.work
- Operator (legal): Roundtable Design Ltd — details on Privacy and Terms
- Optional consented waitlist is **on**; telemetry ingestion and checkout are **off**

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
bash scripts/check-brand-leaks.sh
npx tsc --noEmit
npm run build
```

## Deploy

Production is the `main` branch of this repo on the Vercel project `coefficient-landing`.
The waitlist uses the connected Neon resource and `WAITLIST_ENABLED=true`.
Keep Stripe and telemetry ingestion off.

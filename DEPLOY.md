# Deploy

The live identity of coefficient.work is this Next.js app.

Do not deploy production from this branch unless the GitHub org, Vercel GitHub connection, and operator gates have been confirmed.

Preview deploys from a draft PR are fine.

Staging is `https://staging.coefficient.work` (git branch `codex/mcp-doctor-rebrand` on the `coefficient-landing` Vercel project). HTTP Basic Auth in `middleware.ts` gates that hostname and `*.vercel.app` URLs for this project (`STAGING_USER` / `STAGING_PASSWORD`). Do not enable Vercel SSO or Advanced Deployment Protection on that project, or visitors without a Vercel login cannot use the shareable password. Production `coefficient.work` stays on the separate `coefficient` project until an explicit cutover.

## After the coefficient-work org exists

1. Transfer this repository and rename it to `mcp-doctor-site`.
2. Reconnect the Vercel GitHub integration if it breaks.
3. Keep Vercel Web Analytics and other product telemetry disabled for launch.
4. Keep Stripe off. The consented waitlist uses the connected Neon database.

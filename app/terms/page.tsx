import type { Metadata } from "next";
import {
  CONTACT_EMAIL,
  OPERATOR_COMPANY_NO,
  OPERATOR_LEGAL_NAME,
  OPERATOR_OFFICE,
  OPERATOR_TRADING_AS,
  OPERATOR_VAT,
  PRODUCT_NAME,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for the MCP Doctor website and open-source CLI.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[760px] space-y-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
      <p className="text-sm text-muted">Last updated: 24 Aug 2026</p>
      <p>
        These terms cover the public website at coefficient.work and the
        open-source MCP Doctor CLI. They do not invent accounts, paid plans, or a
        hosted product that does not exist.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What this is</h2>
        <p>
          {PRODUCT_NAME} is an early-stage open-source CLI and this informational
          website. There is no public claim of team size, customers, uptime, or
          certifications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. CLI license</h2>
        <p>
          The CLI is offered under the MIT license in its repository. That license
          governs the software. This page governs the website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Website</h2>
        <p>
          The site is provided as-is. There are no user accounts or checkout. The
          optional waitlist records an email address only after explicit consent.
          You may copy the install command and read the documentation without joining.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Outputs</h2>
        <p>
          Scorecards, evals, and benchmarks can be wrong or incomplete. Do not
          treat them as the sole authority for security or production readiness.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Acceptable use</h2>
        <p>
          Do not use the site or CLI for unlawful access, abuse, or to submit
          malware or submit another person&apos;s email without permission.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. No warranty</h2>
        <p className="uppercase text-muted">
          The website and CLI are provided &quot;as is&quot; without warranties
          to the maximum extent permitted by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Operator and law</h2>
        <p>
          The operator is {OPERATOR_LEGAL_NAME} (England and Wales, company no.{" "}
          {OPERATOR_COMPANY_NO}), trading as {OPERATOR_TRADING_AS}. Registered
          office: {OPERATOR_OFFICE}. VAT: {OPERATOR_VAT}. These terms are governed
          by the laws of England and Wales.
        </p>
        <p>
          Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}

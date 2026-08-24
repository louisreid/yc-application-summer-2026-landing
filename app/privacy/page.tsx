import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import {
  CONTACT_EMAIL,
  GITHUB_REPO,
  OPERATOR_COMPANY_NO,
  OPERATOR_LEGAL_NAME,
  OPERATOR_OFFICE,
  OPERATOR_TRADING_AS,
  OPERATOR_VAT,
  PRODUCT_NAME,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What MCP Doctor actually collects today.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="prose-frame py-16 sm:py-20">
      <PageIntro eyebrow="Public privacy notice" title="Privacy" intro="What the MCP Doctor website and CLI actually collect today—not a description of a future product." />
      <div className="article-copy mt-10">
      <p className="font-mono text-xs text-muted">Last updated: 24 Aug 2026</p>
      <p>
        This page describes the data flows that exist now for the MCP Doctor
        website and CLI. It does not describe a future product.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Operator</h2>
        <p>
          {PRODUCT_NAME} is operated by {OPERATOR_LEGAL_NAME} (England and Wales,
          company no. {OPERATOR_COMPANY_NO}), trading as {OPERATOR_TRADING_AS}.
          Registered office: {OPERATOR_OFFICE}. VAT: {OPERATOR_VAT}.
        </p>
        <p>
          Contact:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>The optional waitlist is open. Product telemetry remains off.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Website</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Hosting: Vercel serves this site. Vercel may process standard request
            logs as a processor.
          </li>
          <li>No product analytics, tracking cookies, or advertising pixels.</li>
          <li>
            Waitlist form: if you opt in, we store your normalized email address,
            consent time, privacy-notice version, and signup source in a Neon
            Postgres database connected to Vercel. Duplicate submissions do not
            create another record.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">CLI</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code className="font-mono text-sm">inspect</code> and{" "}
            <code className="font-mono text-sm">benchmark</code> run on your
            machine and write local files. They do not upload MCP names, URLs,
            filesystem paths, prompts, or reports.
          </li>
          <li>
            <code className="font-mono text-sm">eval</code> uses a model key you
            supply. Credential values stay on your machine; the task, tool schemas,
            calls, and results are sent to the selected provider.
          </li>
          <li>
            MCP Doctor does not ingest CLI telemetry.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Email you send us</h2>
        <p>
          If you write to {CONTACT_EMAIL}, we receive whatever you include in that
          message. Waitlist email is used only for MCP Doctor early access and can
          be removed by writing to us.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">More detail</h2>
        <p>
          <Link href="/data-flow" className="underline">
            Data flow
          </Link>{" "}
          ·{" "}
          <a href={GITHUB_REPO} className="underline">
            Source
          </a>
        </p>
      </section>
      </div>
    </main>
  );
}

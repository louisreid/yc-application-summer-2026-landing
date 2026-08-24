import type { Metadata } from "next";
import { CONTACT_EMAIL, GITHUB_REPO, SITE_URL } from "@/lib/constants";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Security",
  description: "How to report a vulnerability in MCP Doctor.",
  alternates: { canonical: `${SITE_URL}/security` },
};

export default function SecurityPage() {
  return (
    <main className="prose-frame py-16 sm:py-20">
      <PageIntro eyebrow="Responsible contact" title="Security" intro="A direct route for reporting a reproducible vulnerability in the website or CLI." />
      <div className="article-copy mt-10">
      <p className="border-l-2 border-warn pl-4">
        This is a contact path, not a formal security program, bug bounty, or SLA.
      </p>
      <p>
        If you believe you found a vulnerability in the website or CLI, email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
          {CONTACT_EMAIL}
        </a>{" "}
        with enough detail to reproduce. Do not include secrets you do not control.
      </p>
      <p>
        Source:{" "}
        <a href={GITHUB_REPO} className="underline">
          {GITHUB_REPO}
        </a>
      </p>
      </div>
    </main>
  );
}

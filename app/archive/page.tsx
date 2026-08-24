import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Archive",
  robots: { index: false, follow: false },
};

export default function ArchivePage() {
  return (
    <main className="prose-frame py-16 sm:py-20">
      <PageIntro eyebrow="Historical route" title="Archived" intro="This page is retained only to explain an earlier use of the domain." />
      <p className="mt-10 text-lg leading-8 text-muted">
        This domain previously described a field-work copilot concept. The public
        product identity is now{" "}
        <Link href="/" className="underline hover:text-ink">
          MCP Doctor
        </Link>
        .
      </p>
    </main>
  );
}

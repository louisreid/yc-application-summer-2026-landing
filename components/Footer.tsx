import Link from "next/link";
import {
  CONTACT_EMAIL,
  GITHUB_REPO,
  NAMESPACE_NOTE,
  PRODUCT_CREDIT,
  PRODUCT_NAME,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-paper py-12">
      <div className="site-frame grid gap-10 text-sm text-muted md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-md">
          <p className="text-base font-semibold text-ink">{PRODUCT_NAME}</p>
          <p className="mt-2">Open-source evidence for MCP release decisions.</p>
          <p className="mt-1 text-xs">{PRODUCT_CREDIT} · An early-stage project.</p>
          <p className="mt-5">
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-ink">
            {CONTACT_EMAIL}
          </a>
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-8 gap-y-2 md:text-right" aria-label="Footer navigation">
          <Link href="/privacy" className="hover:text-ink hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-ink hover:underline">
            Terms
          </Link>
          <Link href="/security" className="hover:text-ink hover:underline">
            Security
          </Link>
          <Link href="/changelog" className="hover:text-ink hover:underline">
            Changelog
          </Link>
          <Link href="/data-flow" className="hover:text-ink hover:underline">
            Data flow
          </Link>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline"
          >
            GitHub
          </a>
        </nav>
        <p className="border-t border-line pt-6 text-xs leading-relaxed md:col-span-2">{NAMESPACE_NOTE}</p>
      </div>
    </footer>
  );
}

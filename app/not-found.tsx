import Link from "next/link";
import BrandMark from "@/components/icons/BrandMark";
import { INSTALL_CMD, PRODUCT_NAME } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="prose-frame py-24 text-center sm:py-32">
      <div className="flex justify-center">
        <BrandMark className="h-12 w-12" title={PRODUCT_NAME} surface="paper" />
      </div>
      <p className="eyebrow mt-8">404 / no matching route</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Page not found</h1>
      <p className="mt-3 text-muted">That URL is not part of MCP Doctor.</p>
      <p className="mt-6">
        <Link href="/" className="underline">
          Back to the homepage
        </Link>
      </p>
      <p className="mt-10 break-all border-y border-line py-5 font-mono text-sm text-muted">{INSTALL_CMD}</p>
    </main>
  );
}

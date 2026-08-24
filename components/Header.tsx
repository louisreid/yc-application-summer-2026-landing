"use client";

import Link from "next/link";
import { useRef } from "react";
import BrandMark from "./icons/BrandMark";
import { DOCS_URL, GITHUB_REPO, PRODUCT_NAME } from "@/lib/constants";

export default function Header() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    if (mobileMenu.current) mobileMenu.current.open = false;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="site-frame flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <BrandMark className="h-7 w-7" title={PRODUCT_NAME} surface="paper" />
          <span className="font-display text-base font-semibold tracking-tight">
            {PRODUCT_NAME}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex" aria-label="Primary navigation">
          <Link href="/#how-it-works" className="hover:underline">
            How it works
          </Link>
          <Link href="/sample-report" className="hover:underline">
            Sample report
          </Link>
          <Link href="/benchmark" className="hover:underline">
            Benchmark
          </Link>
          <Link href="/data-flow" className="hidden hover:underline sm:inline">
            Data flow
          </Link>
          <a href={DOCS_URL} className="hover:underline">
            Docs
          </a>
          <a href={GITHUB_REPO} className="border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper">
            GitHub ↗
          </a>
        </nav>
        <details ref={mobileMenu} className="relative md:hidden">
          <summary className="cursor-pointer list-none border border-ink px-3 py-1.5 font-mono text-xs uppercase tracking-wider">
            Menu
          </summary>
          <nav onClick={closeMobileMenu} className="absolute right-0 top-11 grid min-w-52 border border-ink bg-paper p-2 text-sm shadow-[6px_6px_0_#d7dbd4]" aria-label="Mobile navigation">
            <Link href="/#how-it-works" className="px-3 py-2 hover:bg-white">How it works</Link>
            <Link href="/sample-report" className="px-3 py-2 hover:bg-white">Sample report</Link>
            <Link href="/benchmark" className="px-3 py-2 hover:bg-white">Benchmark</Link>
            <a href={DOCS_URL} className="px-3 py-2 hover:bg-white">Docs</a>
            <a href={GITHUB_REPO} className="px-3 py-2 hover:bg-white">GitHub ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

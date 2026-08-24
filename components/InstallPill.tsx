"use client";

import { useState } from "react";

type Props = {
  command: string;
  className?: string;
  label?: string;
};

export default function InstallPill({ command, className = "", label = "Copy" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className={`flex w-full min-w-0 max-w-3xl items-center gap-2 overflow-hidden border border-ink bg-white px-4 py-3.5 shadow-[4px_4px_0_#d7dbd4] ${className}`}>
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-xs text-ink sm:text-[15px]">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 border-l border-line px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-muted transition hover:text-ink"
        aria-label="Copy command"
      >
        {copied ? "Copied" : label}
      </button>
    </div>
  );
}

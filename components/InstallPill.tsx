"use client";

import { useState } from "react";

type Props = {
  command: string;
  className?: string;
};

export default function InstallPill({ command, className = "" }: Props) {
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
    <div
      className={`flex w-full max-w-3xl items-center gap-2 rounded-lg border border-line bg-white px-4 py-3 ${className}`}
    >
      <code className="min-w-0 flex-1 break-all font-mono text-sm text-ink sm:text-[15px]">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-md px-3 py-1.5 text-sm font-medium text-muted transition hover:bg-paper hover:text-ink"
        aria-label="Copy command"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

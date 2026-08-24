import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  back?: boolean;
};

export default function PageIntro({ eyebrow, title, intro, back = true }: Props) {
  return (
    <header className="border-b border-line pb-10">
      {back && (
        <Link href="/" className="mb-8 inline-flex text-sm text-muted hover:text-ink">
          ← MCP Doctor
        </Link>
      )}
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-[18ch] text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[52px]">
        {title}
      </h1>
      {intro && <p className="mt-5 max-w-[62ch] text-lg leading-8 text-muted">{intro}</p>}
    </header>
  );
}

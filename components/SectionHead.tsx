import type { ReactNode } from "react";

export function SectionHead({
  num,
  title,
  count,
  as: Tag = "h2",
}: {
  num: string;
  title: ReactNode;
  count?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3 md:gap-5">
      <span className="text-xs font-semibold text-accent-dim">{num}</span>
      <Tag className="font-serif text-2xl font-normal tracking-tight text-ink md:text-[28px]">
        {title}
      </Tag>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
      {count ? <span className="text-[11px] text-ink-low">{count}</span> : null}
    </div>
  );
}

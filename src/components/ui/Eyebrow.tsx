import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  centered?: boolean;
  className?: string;
};

export function Eyebrow({ children, centered = false, className = "" }: Props) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)] ${
        centered ? "justify-center" : ""
      } ${className}`}
    >
      <span className="inline-block size-[6px] rounded-full bg-[var(--color-bronze)]" />
      {children}
    </div>
  );
}

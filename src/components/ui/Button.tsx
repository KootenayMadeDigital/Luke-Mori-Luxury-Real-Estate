import type { ReactNode } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

type Props = {
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  full?: boolean;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
};

const base =
  "luxury-button group inline-flex items-center justify-center rounded-full font-semibold uppercase transition-[background,color,border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] active:scale-[0.985]";

const sizes: Record<Size, string> = {
  md: "gap-3 px-6 py-3 text-[10px] tracking-[0.2em] sm:px-7 sm:py-3.5",
  lg: "gap-3.5 px-7 py-4 text-[11px] tracking-[0.22em] sm:px-9 sm:py-5",
};

const variants: Record<Variant, string> = {
  primary:
    "border border-[var(--color-bronze)] bg-[var(--color-bronze)] !text-[#18120c] shadow-[0_18px_46px_-28px_rgba(212,184,150,0.9)] hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]",
  ghost:
    "border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.025)] text-[var(--color-text)] hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.08)] hover:text-[var(--color-bronze-light)]",
};

function ArrowIcon() {
  return (
    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[rgba(10,11,13,0.12)] text-current transition-[transform,background,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:bg-[rgba(10,11,13,0.2)]">
      <svg viewBox="0 0 16 16" aria-hidden className="size-[14px]">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  full = false,
  arrow = false,
  children,
  className = "",
}: Props) {
  const ghostClass = variant === "ghost" ? "ghost-button" : "";
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${ghostClass} ${full ? "w-full" : ""} ${className}`;
  const labelClass = variant === "primary" ? "!text-[#18120c]" : undefined;

  if (href) {
    return (
      <a href={href} className={cls}>
        <span className={labelClass}>{children}</span>
        {arrow && <ArrowIcon />}
      </a>
    );
  }
  return (
    <button type={type} className={cls}>
      <span className={labelClass}>{children}</span>
      {arrow && <ArrowIcon />}
    </button>
  );
}

export { ArrowIcon };

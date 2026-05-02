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
  "group inline-flex items-center justify-center gap-3 rounded-[1px] font-medium uppercase transition-[background,color,border-color,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

const sizes: Record<Size, string> = {
  md: "px-8 py-[18px] text-[11px] tracking-[0.22em]",
  lg: "px-10 py-[22px] text-[12px] tracking-[0.22em]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-bronze)] text-[var(--color-bg)] border border-[var(--color-bronze)] hover:bg-[var(--color-bronze-light)] hover:border-[var(--color-bronze-light)]",
  ghost:
    "bg-transparent text-[var(--color-text)] border border-[var(--color-line-strong)] hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]",
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className="size-[14px] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px]"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${full ? "w-full" : ""} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        <span>{children}</span>
        {arrow && <ArrowIcon />}
      </a>
    );
  }
  return (
    <button type={type} className={cls}>
      <span>{children}</span>
      {arrow && <ArrowIcon />}
    </button>
  );
}

export { ArrowIcon };

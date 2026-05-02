type Props = {
  className?: string;
};

export function BrandMark({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <path
        d="M3 25 L12 11 L18 18 L22 14 L29 25 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type WordmarkProps = {
  href?: string;
  className?: string;
};

export function Brand({ href = "#top", className = "" }: WordmarkProps) {
  return (
    <a
      href={href}
      aria-label="Luke Mori Luxury home"
      className={`inline-flex shrink-0 items-center gap-3.5 text-[var(--color-text)] ${className}`}
    >
      <BrandMark className="size-[30px] text-[var(--color-bronze)]" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[22px] font-normal tracking-[0.03em]">Luke Mori</span>
        <span className="mt-1 font-sans text-[9px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
          Luxury
        </span>
      </span>
    </a>
  );
}

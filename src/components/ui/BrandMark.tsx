type Props = {
  className?: string;
};

export function BrandMark({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 36 36" aria-hidden className={className}>
      <path
        d="M4.5 24.5 L12.2 15.6 L17.1 21.1 L21.8 16.7 L31.5 24.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 27.2 C12.7 25.5 17.8 25.5 23.1 27.2 C25.7 28 28 28 30.8 27.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M18 8.2 V22.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.42"
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

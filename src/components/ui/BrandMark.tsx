type Props = {
  className?: string;
};

export function BrandMark({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      <circle
        cx="32"
        cy="32"
        r="27.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        opacity="0.9"
      />
      <path
        d="M16.5 17.5v23h15.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M21.2 17.5v18.2h6.2V22.8l8.8 10.4 8.9-10.4v17.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M40.9 17.7h6.2v22.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        opacity="0.92"
      />
      <path
        d="M11.5 47.2l9.4-3.7 4.6 2.1 8.2-7.4 9.3 8.5 4.2-3.3 5.7 4.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 51.2c8.2-1.9 18.3-2.3 25.5.2 3.1 1.1 3.2 2.6.3 3.3-3.5.8-7.5.4-10.8 1.4 5.9 1.3 13.2 1.3 24.9-.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.92"
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
      className={`group inline-flex shrink-0 items-center gap-3.5 text-[var(--color-text)] ${className}`}
    >
      <span className="relative grid size-12 shrink-0 place-items-center rounded-full border border-[rgba(212,184,150,0.34)] bg-[radial-gradient(circle_at_35%_25%,rgba(212,184,150,0.12),rgba(10,11,13,0.92)_62%)] shadow-[0_0_34px_-22px_rgba(212,184,150,0.95)] transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[1px] group-hover:border-[var(--color-bronze-light)] group-hover:shadow-[0_0_42px_-18px_rgba(212,184,150,0.95)]">
        <BrandMark className="size-8 text-[var(--color-bronze-light)] drop-shadow-[0_0_8px_rgba(212,184,150,0.18)]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[23px] font-normal tracking-[0.025em] text-[var(--color-text)]">
          Luke Mori
        </span>
        <span className="mt-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.36em] text-[var(--color-bronze-light)]">
          Luxury
        </span>
      </span>
    </a>
  );
}

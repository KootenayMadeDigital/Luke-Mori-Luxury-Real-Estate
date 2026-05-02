import Image from "next/image";

type Props = {
  className?: string;
};

export function BrandMark({ className = "" }: Props) {
  return (
    <Image
      src="/luke-mori-luxury-mark.webp"
      alt=""
      aria-hidden="true"
      width={900}
      height={900}
      draggable={false}
      className={`select-none object-contain ${className}`}
    />
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
      <span className="relative grid size-14 shrink-0 place-items-center rounded-full border border-[rgba(212,184,150,0.36)] bg-[#08090a] shadow-[0_0_34px_-18px_rgba(212,184,150,0.95)] ring-1 ring-black/60 transition-[border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[1px] group-hover:border-[var(--color-bronze-light)] group-hover:shadow-[0_0_46px_-14px_rgba(212,184,150,0.95)]">
        <BrandMark className="size-[50px] rounded-full" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[24px] font-normal tracking-[0.025em] text-[var(--color-text)] sm:text-[23px]">
          Luke Mori
        </span>
        <span className="mt-1.5 font-sans text-[9px] font-semibold uppercase tracking-[0.38em] text-[var(--color-bronze-light)]">
          Luxury
        </span>
      </span>
    </a>
  );
}

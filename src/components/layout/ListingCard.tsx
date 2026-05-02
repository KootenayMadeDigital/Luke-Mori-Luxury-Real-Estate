import Image from "next/image";
import Link from "next/link";
import type { Estate } from "@/lib/data";

type Props = {
  estate: Estate;
  index?: number;
  variant?: "default" | "compact";
};

/* Reusable luxury listing card. Used on listings index pages and within the
   home featured estates section. */

export function ListingCard({ estate, index, variant = "default" }: Props) {
  const compact = variant === "compact";
  return (
    <Link
      href={`/listings/${estate.slug}`}
      className="group flex flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[var(--color-line-strong)]"
    >
      <div className={`tone-dark relative overflow-hidden ${compact ? "aspect-[5/4]" : "aspect-[4/3]"}`}>
        <Image
          src={estate.hero}
          alt={estate.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.7)]" />
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-[1px] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.6)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)] backdrop-blur-sm">
          {estate.area}
        </div>
        {typeof index === "number" && (
          <div className="absolute right-5 top-5 font-serif text-[14px] italic text-[var(--color-bronze-light)]">
            No. {String(index + 1).padStart(2, "0")}
          </div>
        )}
      </div>
      <div className={`flex flex-1 flex-col ${compact ? "p-7" : "p-8"}`}>
        <h3 className="m-0 mb-2 font-serif font-normal leading-[1.15] tracking-[-0.005em] [font-size:clamp(22px,2.2vw,28px)]">
          {estate.title}
        </h3>
        <p className="m-0 mb-5 font-serif text-[15px] italic text-[var(--color-text-muted)]">
          {estate.shortTitle}
        </p>
        <ul className="mb-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--color-line)] pt-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
          {estate.specs.map((s) => (
            <li key={s.label} className="flex items-baseline gap-1.5">
              <span className="font-serif text-[15px] font-normal italic normal-case tracking-normal text-[var(--color-text)]">
                {s.value}
              </span>
              {s.label}
            </li>
          ))}
        </ul>
        <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
          View this estate
          <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-1">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

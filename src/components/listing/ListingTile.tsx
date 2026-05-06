import Image from "next/image";
import Link from "next/link";
import { type Listing, isLukesOwn, buildSpecs } from "@/lib/listings";

type Props = {
  listing: Listing;
  variant?: "default" | "compact";
  showAgent?: boolean;
};

/* Listing tile, used on the listings index, the luxury / waterfront indexes,
   and the related-properties strip on detail pages. */

export function ListingTile({ listing: l, variant = "default", showAgent = false }: Props) {
  const compact = variant === "compact";
  const specs = buildSpecs(l);
  const lukes = isLukesOwn(l);

  return (
    <Link
      href={`/listings/${l.slug}`}
      className="luxury-card group flex flex-col overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1.5 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-bg)]"
    >
      <div className={`tone-dark relative overflow-hidden ${compact ? "aspect-[5/4]" : "aspect-[4/3]"}`}>
        {l.heroPhoto ? (
          <Image
            src={l.heroPhoto}
            alt={l.address}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="luxury-media object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[var(--color-surface-2)] text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
            No photo
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.7)]" />

        {l.location && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-[1px] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.6)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze-light)] backdrop-blur-sm">
            {l.location}
          </div>
        )}

        {lukes && (
          <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)]">
            <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden>
              <circle cx="6" cy="6" r="5" fill="currentColor" />
            </svg>
            Listed by Luke
          </div>
        )}

        {l.price && (
          <div className="absolute bottom-4 left-4 font-serif italic text-[var(--color-text)] [font-size:clamp(20px,2vw,26px)]">
            {l.price}
          </div>
        )}
        {l.photoCount > 1 && (
          <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            <svg viewBox="0 0 16 16" aria-hidden className="size-3">
              <rect x="2.5" y="3" width="11" height="9" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="6" cy="6.5" r="1.2" fill="currentColor" />
              <path d="M3.5 11 L7 8 L9 10 L11 8 L12.5 9.5" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {l.photoCount}
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${compact ? "p-6" : "p-7"}`}>
        <h3 className="m-0 mb-1 font-serif font-normal leading-[1.15] tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(20px,1.9vw,24px)]">
          {l.address}
        </h3>
        {l.propertyType && (
          <p className="m-0 mb-5 font-serif text-[14px] italic text-[var(--color-text-muted)]">
            {l.propertyType}
          </p>
        )}

        {specs.length > 0 && (
          <ul className="mb-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[var(--color-line)] pt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
            {specs.map((s) => (
              <li key={s.label} className="flex items-baseline gap-1.5">
                <span className="font-serif text-[15px] font-normal italic normal-case tracking-normal text-[var(--color-text)]">
                  {s.value}
                </span>
                {s.label}
              </li>
            ))}
          </ul>
        )}

        {showAgent && l.listingAgent && (
          <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
            <span className="text-[var(--color-bronze)]">Listed by</span> {l.listingAgent}
            {l.listingBrokerage && <> · {l.listingBrokerage}</>}
          </p>
        )}

        <span className="mt-auto inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
          View this property
          <svg viewBox="0 0 16 16" aria-hidden className="luxury-arrow size-[14px]">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

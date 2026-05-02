"use client";

import { useEffect, useMemo, useState } from "react";
import { ListingTile } from "./ListingTile";
import type { Listing } from "@/lib/listings";

type Props = {
  listings: Listing[];
  initialFilter?: FilterKey;
  initialSort?: SortKey;
};

type FilterKey = "all" | "luxe" | "lukes" | "waterfront" | "vacant";
type SortKey = "price-desc" | "price-asc" | "photos" | "beds-desc";

const PAGE_SIZE = 24;

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "lukes", label: "Listed by Luke" },
  { key: "luxe", label: "$1M+" },
  { key: "waterfront", label: "Waterfront" },
  { key: "vacant", label: "Land & Acreage" },
];

const sorts: { key: SortKey; label: string }[] = [
  { key: "price-desc", label: "Price · High to Low" },
  { key: "price-asc", label: "Price · Low to High" },
  { key: "photos", label: "Most Photos" },
  { key: "beds-desc", label: "Most Bedrooms" },
];

const waterfrontKeywords =
  /(waterfront|lakefront|lake\s*front|riverfront|beach\s*front|on\s+the\s+lake|kootenay\s+lake|lake\s+access|river\s+frontage|dock|moorage)/i;

export function ListingsBrowser({
  listings,
  initialFilter = "all",
  initialSort = "price-desc",
}: Props) {
  const [filter, setFilter] = useState<FilterKey>(initialFilter);
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [debounced, setDebounced] = useState("");

  // Debounce search and reset to page 1 when the debounced query lands.
  useEffect(() => {
    const t = window.setTimeout(() => {
      setDebounced((prev) => {
        const next = query.trim().toLowerCase();
        if (next !== prev) setPage(1);
        return next;
      });
    }, 180);
    return () => window.clearTimeout(t);
  }, [query]);

  // Filter/sort changes happen via user clicks below, those reset page inline.

  const filtered = useMemo(() => {
    let arr = listings;
    if (filter === "lukes") arr = arr.filter((l) => /\bluke\s+mori\b/i.test(l.listingAgent));
    else if (filter === "luxe") arr = arr.filter((l) => (l.priceNumber ?? 0) >= 1_000_000);
    else if (filter === "waterfront")
      arr = arr.filter(
        (l) =>
          waterfrontKeywords.test(l.description) ||
          waterfrontKeywords.test(l.address) ||
          waterfrontKeywords.test(l.location)
      );
    else if (filter === "vacant")
      arr = arr.filter((l) => /vacant\s*land|raw\s*land|recreational/i.test(l.propertyType));

    if (debounced) {
      arr = arr.filter((l) => {
        const hay = [
          l.address,
          l.location,
          l.propertyType,
          l.listingAgent,
          l.listingBrokerage,
          l.description,
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(debounced);
      });
    }

    arr = [...arr];
    if (sort === "price-desc")
      arr.sort((a, b) => (b.priceNumber ?? -Infinity) - (a.priceNumber ?? -Infinity));
    else if (sort === "price-asc")
      arr.sort((a, b) => (a.priceNumber ?? Infinity) - (b.priceNumber ?? Infinity));
    else if (sort === "photos") arr.sort((a, b) => b.photoCount - a.photoCount);
    else if (sort === "beds-desc") arr.sort((a, b) => (b.beds ?? 0) - (a.beds ?? 0));

    return arr;
  }, [listings, filter, debounced, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      {/* CONTROLS */}
      <div className="tone-dark sticky top-[52px] z-[80] -mx-5 mb-12 border-y border-[var(--color-line)] bg-[rgba(10,11,13,0.92)] px-5 py-5 backdrop-blur-[14px] sm:-mx-8 sm:px-8 md:top-[64px] md:-mx-10 md:px-10 lg:-mx-12 lg:px-12 xl:-mx-14 xl:px-14">
        <div className="flex flex-wrap items-center gap-3 lg:flex-nowrap lg:gap-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => {
                  setFilter(f.key);
                  setPage(1);
                }}
                className={`rounded-[1px] border px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                  filter === f.key
                    ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-button-text)]"
                    : "border-[var(--color-line-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-bronze)] hover:text-[var(--color-text)]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="ml-auto flex flex-1 items-center gap-3 lg:max-w-[520px]">
            {/* Search */}
            <label className="relative flex-1">
              <span className="sr-only">Search listings</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search address, area, agent…"
                className="w-full rounded-[1px] border border-[var(--color-line-strong)] bg-transparent px-4 py-3 pl-10 font-sans text-[14px] font-light text-[var(--color-text)] outline-none transition-colors duration-200 placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-bronze)]"
              />
              <svg
                viewBox="0 0 16 16"
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-text-dim)]"
              >
                <circle cx="7" cy="7" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <path d="M10.5 10.5 L14 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </label>

            {/* Sort */}
            <label className="relative">
              <span className="sr-only">Sort</span>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as SortKey);
                  setPage(1);
                }}
                className="appearance-none rounded-[1px] border border-[var(--color-line-strong)] bg-transparent px-4 py-3 pr-10 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-bronze)]"
              >
                {sorts.map((s) => (
                  <option key={s.key} value={s.key} className="bg-[var(--color-bg)]">
                    {s.label}
                  </option>
                ))}
              </select>
              <svg
                viewBox="0 0 12 12"
                aria-hidden
                className="pointer-events-none absolute right-3 top-1/2 size-3 -translate-y-1/2 text-[var(--color-text-dim)]"
              >
                <path d="M2 4 L6 8 L10 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </label>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
          <span>
            <span className="text-[var(--color-bronze)]">{filtered.length.toLocaleString()}</span>{" "}
            properties
            {debounced && <> matching “<span className="text-[var(--color-text)]">{debounced}</span>”</>}
          </span>
          <span>
            Page {page} of {totalPages}
          </span>
        </div>
      </div>

      {/* GRID */}
      {paged.length === 0 ? (
        <div className="border border-[var(--color-line)] bg-[var(--color-surface)] p-16 text-center">
          <p className="m-0 mb-3 font-serif text-[24px] font-light text-[var(--color-text)]">
            No properties match this filter.
          </p>
          <p className="m-0 text-[14px] text-[var(--color-text-muted)]">
            Try clearing your search or selecting another filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {paged.map((l) => (
            <ListingTile key={l.slug} listing={l} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex size-10 items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] disabled:opacity-30"
            aria-label="Previous page"
          >
            <svg viewBox="0 0 16 16" aria-hidden className="size-3.5">
              <path d="M10 4 L6 8 L10 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>

          <PageNumbers page={page} totalPages={totalPages} onSelect={setPage} />

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="inline-flex size-10 items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] disabled:opacity-30"
            aria-label="Next page"
          >
            <svg viewBox="0 0 16 16" aria-hidden className="size-3.5">
              <path d="M6 4 L10 8 L6 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

function PageNumbers({
  page,
  totalPages,
  onSelect,
}: {
  page: number;
  totalPages: number;
  onSelect: (n: number) => void;
}) {
  const window: (number | "…")[] = [];
  const add = (n: number) => window.push(n);
  const span = 1;
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) add(i);
  } else {
    add(1);
    if (page - span > 2) window.push("…");
    for (let i = Math.max(2, page - span); i <= Math.min(totalPages - 1, page + span); i++) add(i);
    if (page + span < totalPages - 1) window.push("…");
    add(totalPages);
  }
  return (
    <div className="flex items-center gap-1">
      {window.map((n, i) =>
        n === "…" ? (
          <span key={`gap-${i}`} className="px-2 text-[var(--color-text-dim)]">
            …
          </span>
        ) : (
          <button
            key={n}
            type="button"
            onClick={() => onSelect(n)}
            className={`size-10 rounded-[1px] border text-[12px] font-medium transition-colors ${
              n === page
                ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-button-text)]"
                : "border-transparent text-[var(--color-text-muted)] hover:border-[var(--color-line-strong)] hover:text-[var(--color-text)]"
            }`}
          >
            {n}
          </button>
        )
      )}
    </div>
  );
}

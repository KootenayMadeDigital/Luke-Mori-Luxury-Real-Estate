"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ListingPreview = {
  slug: string;
  address: string;
  price: string;
  location: string;
  heroPhoto: string;
};

type Props = {
  currentSlug: string;
};

function readPreviewStore(key: string): ListingPreview[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem(key) || "[]") as ListingPreview[];
  } catch {
    return [];
  }
}

export function RecentlyViewedRail({ currentSlug }: Props) {
  const [recentSlugs] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const legacy = JSON.parse(window.localStorage.getItem("lml:recent-listings") || "[]") as string[];
      const rich = JSON.parse(window.localStorage.getItem("lml:recent-listings:v2") || "[]") as ListingPreview[];
      return rich.length > 0 ? rich.map((item) => item.slug) : legacy;
    } catch {
      return [];
    }
  });
  const [savedSlugs] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(window.localStorage.getItem("lml:saved-listings") || "[]") as string[];
    } catch {
      return [];
    }
  });

  const [recentPreviews] = useState<ListingPreview[]>(() => readPreviewStore("lml:recent-listings:v2"));
  const [savedPreviews] = useState<ListingPreview[]>(() => readPreviewStore("lml:saved-listings:v2"));
  const bySlug = new Map([...recentPreviews, ...savedPreviews].map((listing) => [listing.slug, listing]));
  const saved = savedSlugs.map((slug) => bySlug.get(slug)).filter(Boolean) as ListingPreview[];
  const recent = recentSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => bySlug.get(slug))
    .filter(Boolean) as ListingPreview[];
  const visible = [...saved, ...recent.filter((item) => !saved.some((savedItem) => savedItem.slug === item.slug))].slice(0, 4);

  if (visible.length === 0) return null;

  return (
    <div className="mt-14 border border-[var(--color-line)] bg-[var(--color-surface)] p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="m-0 text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--color-bronze)]">
            Saved / Recently Viewed
          </p>
          <p className="m-0 mt-1 text-[13px] text-[var(--color-text-muted)]">
            Keep the serious short list close.
          </p>
        </div>
        <Link href="/listings" className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
          Browse all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((listing) => (
          <Link
            key={listing.slug}
            href={`/listings/${listing.slug}`}
            className="group grid grid-cols-[86px_1fr] overflow-hidden border border-[var(--color-line)] bg-[var(--color-bg)] transition-colors hover:border-[var(--color-bronze)]"
          >
            <div className="relative min-h-[88px] bg-[var(--color-bg-2)]">
              {listing.heroPhoto && (
                <Image src={listing.heroPhoto} alt="" fill sizes="90px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              )}
            </div>
            <div className="p-3">
              <p className="m-0 line-clamp-2 font-serif text-[15px] leading-[1.2] text-[var(--color-text)]">
                {listing.address}
              </p>
              <p className="m-0 mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-dim)]">
                {listing.price || listing.location || "Private brief"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

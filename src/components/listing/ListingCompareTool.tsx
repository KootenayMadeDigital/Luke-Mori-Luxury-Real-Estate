"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatBaths, formatBeds, formatLot, formatSqft, formatYear, type Listing } from "@/lib/listings";

type Props = { listings: Listing[] };

const MAX = 3;

function labelFor(l: Listing) {
  return [l.address, l.location, l.propertyType, l.price].join(" ").toLowerCase();
}

function reviewNotes(l: Listing) {
  const text = `${l.title} ${l.description} ${l.propertyType} ${l.location}`.toLowerCase();
  const notes = [];
  if (/waterfront|lakefront|kootenay lake|dock|shoreline|riverfront/.test(text)) notes.push("Waterfront rights and insurance");
  if ((l.lotAcres ?? 0) >= 1 || /acreage|farm|barn|workshop|rural|septic|well/.test(text)) notes.push("Land, access, water, septic");
  if (/strata|shared|easement|right.of.way/.test(text)) notes.push("Shared use or title review");
  if (/view|slope|mountain|panoramic/.test(text)) notes.push("View, slope, sun, winter access");
  return notes.slice(0, 3);
}

export function ListingCompareTool({ listings }: Props) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>(listings.slice(0, 3).map((l) => l.slug));
  const selectedListings = useMemo(() => selected.map((slug) => listings.find((l) => l.slug === slug)).filter(Boolean) as Listing[], [selected, listings]);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q ? listings.filter((l) => labelFor(l).includes(q)) : listings;
    return base.slice(0, 12);
  }, [query, listings]);

  function toggle(slug: string) {
    setSelected((current) => {
      if (current.includes(slug)) return current.filter((item) => item !== slug);
      if (current.length >= MAX) return [...current.slice(1), slug];
      return [...current, slug];
    });
  }

  function removeSelected(slug: string) {
    setSelected((current) => current.filter((item) => item !== slug));
  }

  return (
    <section id="compare" className="tone-lake tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1540px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.82fr_1fr] md:items-end">
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">Compare Listings</p>
            <h2 className="m-0 mt-6 font-serif text-[42px] font-light leading-[1.05] tracking-[-0.015em] text-[var(--color-text)] md:text-[60px]">Compare the shortlist before the tour.</h2>
          </div>
          <p className="m-0 text-[17px] leading-[1.78] text-[var(--color-text-muted)]">Choose up to three listings. The table keeps price, area, property type, size, land, year, and review questions in one clean view so a buyer can ask Luke a sharper question.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
          <div className="border border-[var(--color-line-strong)] bg-[var(--color-bg)] p-5 sm:p-6 lg:sticky lg:top-32 lg:h-fit">
            <label className="block">
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Find a listing</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Address, area, property type" className="w-full border border-[var(--color-line-strong)] bg-transparent px-4 py-3 text-[14px] text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-bronze)]" />
            </label>
            <div className="mt-5 grid max-h-[620px] gap-2 overflow-y-auto pr-1">
              {results.map((l) => {
                const on = selected.includes(l.slug);
                return (
                  <button key={l.slug} type="button" onClick={() => toggle(l.slug)} className={`grid grid-cols-[72px_1fr] gap-3 border p-2 text-left transition-colors ${on ? "border-[var(--color-bronze)] bg-[rgba(212,184,150,0.12)]" : "border-[var(--color-line)] bg-[var(--color-surface)] hover:border-[var(--color-line-strong)]"}`}>
                    <span className="relative block aspect-[4/3] overflow-hidden bg-[var(--color-bg)]">
                      {l.heroPhoto && <Image src={l.heroPhoto} alt="" fill sizes="72px" className="object-cover" />}
                    </span>
                    <span>
                      <span className="block text-[13px] font-semibold leading-[1.3] text-[var(--color-text)]">{l.address}</span>
                      <span className="mt-1 block text-[11px] leading-[1.4] text-[var(--color-text-muted)]">{l.price} · {l.location || "Kootenays"}</span>
                      <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-bronze)]">{on ? "Remove" : selected.length >= MAX ? "Replace oldest" : "Add"}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)]">
            <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
              {selectedListings.map((l) => (
                <article key={l.slug} className="bg-[var(--color-bg)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                    {l.heroPhoto && <Image src={l.heroPhoto} alt={l.address} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />}
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,11,13,0.2)] via-transparent to-[rgba(10,11,13,0.72)]" />
                    <button
                      type="button"
                      onClick={() => removeSelected(l.slug)}
                      className="absolute right-3 top-3 rounded-full border border-[rgba(245,239,229,0.34)] bg-[rgba(10,11,13,0.56)] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[rgba(245,239,229,0.9)] backdrop-blur transition-colors hover:border-[var(--color-bronze-light)] hover:text-[var(--color-bronze-light)]"
                      aria-label={`Remove ${l.address} from compare`}
                    >
                      Remove
                    </button>
                    <p className="absolute bottom-4 left-4 m-0 font-serif text-[24px] italic text-[rgba(255,252,246,0.96)] drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)] [text-shadow:0_2px_14px_rgba(0,0,0,0.95)]">{l.price}</p>
                  </div>
                  <div className="p-6">
                    <h3 className="m-0 font-serif text-[28px] font-light leading-[1.08] text-[var(--color-text)]">{l.address}</h3>
                    <p className="m-0 mt-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-dim)]">{l.location || "Kootenays"}</p>
                    <Link href={`/listings/${l.slug}`} className="mt-5 inline-flex text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze)]">View property</Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-t border-[var(--color-line)] text-left text-[14px] text-[var(--color-text-muted)]">
                <tbody>
                  {[
                    ["Property type", (l: Listing) => l.propertyType || "Not listed"],
                    ["Beds / baths", (l: Listing) => `${formatBeds(l)} / ${formatBaths(l)}`],
                    ["Interior", (l: Listing) => `${formatSqft(l)} sq ft`],
                    ["Lot", (l: Listing) => formatLot(l)],
                    ["Year built", (l: Listing) => formatYear(l)],
                    ["Photos", (l: Listing) => `${l.photoCount}`],
                    ["Review questions", (l: Listing) => reviewNotes(l).join(" · ") || "Price, condition, timing"],
                  ].map(([label, fn]) => (
                    <tr key={label as string} className="border-b border-[var(--color-line)]">
                      <th className="w-[190px] bg-[var(--color-bg)] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze)]">{label as string}</th>
                      {selectedListings.map((l) => <td key={l.slug} className="px-5 py-4 align-top leading-[1.6]">{(fn as (l: Listing) => string)(l)}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 bg-[var(--color-bg)] p-6">
              <p className="m-0 max-w-[720px] text-[14px] leading-[1.7] text-[var(--color-text-muted)]">A compare table does not replace local judgment. It makes the first conversation sharper: why this home, why this area, why this price, and what should be checked before touring.</p>
              <Link href="/contact#consultation" className="rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] hover:bg-[var(--color-bronze-light)]">Ask Luke to compare</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

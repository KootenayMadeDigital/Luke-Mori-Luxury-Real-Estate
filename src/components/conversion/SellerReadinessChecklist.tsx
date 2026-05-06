"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const items = [
  { key: "timeline", label: "Timeline is clear", detail: "You know when you want to sell and what timing would create stress." },
  { key: "buyer", label: "Likely buyer is clear", detail: "Waterfront, acreage, Nelson, relocation, second-home, or legacy buyer." },
  { key: "documents", label: "Documents are gathered", detail: "Title, plans, permits, service history, water, septic, strata, or access notes." },
  { key: "prep", label: "Prep gaps are known", detail: "Repairs, cleanup, staging restraint, landscaping, and practical buyer objections." },
  { key: "media", label: "Story can be shown", detail: "Photos, film, rooms, approach, land, shoreline, views, and daily life." },
  { key: "privacy", label: "Privacy plan exists", detail: "What should be public, what waits for serious buyers, and how showings are controlled." },
  { key: "price", label: "Price can be defended", detail: "Recent sales, active competition, buyer depth, and the value argument." },
  { key: "questions", label: "Buyer questions are anticipated", detail: "Insurance, access, systems, title, zoning, winter use, or future plans." },
];

export function SellerReadinessChecklist() {
  const [checked, setChecked] = useState<string[]>(["timeline", "buyer", "media"]);
  const score = checked.length;
  const status = useMemo(() => {
    if (score >= 7) return { title: "Close to ready", body: "The plan is mostly in place. Luke can help sharpen pricing, presentation, and showing control before launch." };
    if (score >= 4) return { title: "Worth preparing now", body: "There is enough clarity to start. The next value is filling the gaps before the market sees the home." };
    return { title: "Start before listing", body: "The property may still sell, but the first impression could be stronger with more preparation." };
  }, [score]);

  function toggle(key: string) {
    setChecked((current) => current.includes(key) ? current.filter((item) => item !== key) : [...current, key]);
  }

  return (
    <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
          <div>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">Seller Readiness</p>
            <h2 className="m-0 mt-6 font-serif text-[42px] font-light leading-[1.05] tracking-[-0.015em] text-[var(--color-text)] md:text-[60px]">Is the property ready for market?</h2>
          </div>
          <p className="m-0 text-[17px] leading-[1.78] text-[var(--color-text-muted)]">A quick readiness check for waterfront, acreage, view, legacy, and important Nelson homes. The goal is not more tasks. The goal is knowing what protects value before the first buyer forms an opinion.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {items.map((item, index) => {
              const on = checked.includes(item.key);
              return (
                <button key={item.key} type="button" onClick={() => toggle(item.key)} className={`group border p-6 text-left transition-[border-color,background,transform] hover:-translate-y-0.5 ${on ? "border-[var(--color-bronze)] bg-[rgba(212,184,150,0.12)]" : "border-[var(--color-line)] bg-[var(--color-surface)] hover:border-[var(--color-line-strong)]"}`}>
                  <span className="mb-5 flex items-center gap-4">
                    <span className={`grid size-7 place-items-center rounded-full border text-[11px] font-semibold ${on ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-button-text)]" : "border-[var(--color-line-strong)] text-[var(--color-text-dim)]"}`}>{on ? "✓" : String(index + 1)}</span>
                    <span className="h-px flex-1 bg-[var(--color-line)]" />
                  </span>
                  <h3 className="m-0 font-serif text-[28px] font-light leading-[1.08] text-[var(--color-text)]">{item.label}</h3>
                  <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{item.detail}</p>
                </button>
              );
            })}
          </div>

          <aside className="h-fit border border-[var(--color-line-strong)] bg-[var(--color-bg)] p-7 lg:sticky lg:top-32">
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">Readiness Score</p>
            <div className="mt-6 flex items-end gap-3 border-b border-[var(--color-line)] pb-6">
              <span className="font-serif text-[72px] font-light leading-none text-[var(--color-text)]">{score}</span>
              <span className="pb-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-dim)]">of {items.length}</span>
            </div>
            <h3 className="m-0 mt-7 font-serif text-[34px] font-light leading-[1.08] text-[var(--color-text)]">{status.title}</h3>
            <p className="m-0 mt-5 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{status.body}</p>
            <Link href="/contact#consultation" className="mt-7 inline-flex rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] hover:bg-[var(--color-bronze-light)]">Review sale plan</Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

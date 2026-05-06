"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const concerns = [
  { key: "waterfront", label: "Waterfront", checks: ["Shoreline and access", "Dock or beach rights", "Insurance and flooding"] },
  { key: "acreage", label: "Acreage", checks: ["Usable land", "Water and septic", "Roads and winter care"] },
  { key: "price", label: "Price Fit", checks: ["Comparable sales", "Current competition", "Buyer depth"] },
  { key: "relocation", label: "Relocation", checks: ["Area fit", "Daily routine", "First scouting route"] },
  { key: "risk", label: "Risk Review", checks: ["Title and access", "Wildfire or flood", "Rules and future plans"] },
  { key: "seller", label: "Selling", checks: ["Likely buyer", "Prep gaps", "Showing plan"] },
];

export function PropertyReviewIntake() {
  const [selected, setSelected] = useState<string[]>(["waterfront", "price"]);
  const [address, setAddress] = useState("");

  const active = useMemo(() => concerns.filter((item) => selected.includes(item.key)), [selected]);
  const reviewLine = active.length > 0 ? active.map((item) => item.label).join(" + ") : "Property fit";

  function toggle(key: string) {
    setSelected((current) => {
      if (current.includes(key)) return current.filter((item) => item !== key);
      return [...current, key].slice(-4);
    });
  }

  return (
    <section className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1540px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-line)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[var(--color-bg)] p-7 sm:p-10 lg:p-12">
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">Property Review</p>
            <h2 className="m-0 mt-6 max-w-[12ch] font-serif text-[42px] font-light leading-[1.04] tracking-[-0.015em] text-[var(--color-text)] md:text-[62px]">
              Ask Luke about a real property.
            </h2>
            <p className="m-0 mt-7 max-w-[660px] text-[17px] leading-[1.78] text-[var(--color-text-muted)]">
              Paste the address or listing, choose the concerns, and turn a pretty listing into a useful question. Luke can review the fit, the risks, and the next move before you burn a showing on the wrong place.
            </p>
            <label className="mt-9 block">
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Address or listing link</span>
              <input
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Paste address, MLS link, or area"
                className="w-full border border-[var(--color-line-strong)] bg-transparent px-5 py-4 text-[16px] text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-bronze)]"
              />
            </label>
            <div className="mt-7 flex flex-wrap gap-2">
              {concerns.map((item) => {
                const on = selected.includes(item.key);
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggle(item.key)}
                    className={`rounded-full border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${on ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-button-text)]" : "border-[var(--color-line-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-bronze)] hover:text-[var(--color-text)]"}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-[var(--color-surface)] p-7 sm:p-10 lg:p-12">
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">Review Brief</p>
            <h3 className="m-0 mt-5 font-serif text-[34px] font-light leading-[1.08] text-[var(--color-text)] md:text-[48px]">
              {address.trim() || "Your property"}
            </h3>
            <p className="m-0 mt-4 text-[15px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)]">{reviewLine}</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {(active.length ? active : concerns.slice(0, 3)).map((item) => (
                <div key={item.key} className="border border-[var(--color-line)] bg-[var(--color-bg)] p-5">
                  <h4 className="m-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze)]">{item.label}</h4>
                  <ul className="m-0 mt-4 grid list-none gap-2 p-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                    {item.checks.map((check) => <li key={check}>• {check}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.08)] p-6">
              <p className="m-0 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
                This is not meant to replace legal, tax, insurance, inspection, or permit advice. It helps Luke focus the real estate question so the right professionals can verify the right things.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#consultation" className="rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] hover:bg-[var(--color-bronze-light)]">Send to Luke</Link>
              <Link href="/faq" className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] hover:border-[var(--color-bronze)]">Read quick answers</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

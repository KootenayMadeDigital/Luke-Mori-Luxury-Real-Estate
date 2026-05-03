"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type PathKey = "lakefront" | "walkable" | "privacy" | "acreage" | "ski" | "relocation" | "second" | "international";

type Option = {
  key: PathKey;
  label: string;
  body: string;
};

const options: Option[] = [
  { key: "lakefront", label: "Lakefront", body: "Water access, dock questions, exposure, shoreline due diligence, and legacy value." },
  { key: "walkable", label: "Walkable Nelson", body: "Baker Street rhythm, heritage homes, schools, culture, and daily convenience." },
  { key: "privacy", label: "North Shore", body: "Views, quiet roads, arrival, light, and neighbour distance." },
  { key: "acreage", label: "Acreage", body: "Land, workshops, gardens, animals, privacy, and road maintenance realities." },
  { key: "ski", label: "Ski Access", body: "Whitewater access, winter roads, storage, guests, and four-season use." },
  { key: "relocation", label: "Relocation", body: "Schools, healthcare, commute rhythm, community fit, and landing softly." },
  { key: "second", label: "Second Home", body: "Caretaker coverage, winterisation, security, lock-and-leave ownership, and guests." },
  { key: "international", label: "International", body: "Foreign-buyer questions, tax counsel, financing, currency, and remote purchase logistics." },
];

const recommendations: Record<PathKey, { title: string; body: string; href: string; cta: string; notes: string[] }> = {
  lakefront: {
    title: "Start with waterfront due diligence.",
    body: "The right brief should test shoreline rights, exposure, road access, docks, privacy, and how the property holds value beyond the photo angle.",
    href: "/listings/waterfront",
    cta: "View waterfront properties",
    notes: ["Shoreline and dock questions", "Sun, wind, road, and winter access", "Comparable scarcity around Kootenay Lake"],
  },
  walkable: {
    title: "Start with Nelson fit.",
    body: "Walkability is not just distance. It is grade, parking, school rhythm, heritage upkeep, noise, and the exact version of Nelson life you want.",
    href: "/nelson/nelson",
    cta: "Explore Nelson",
    notes: ["Baker Street lifestyle", "Heritage and renovation context", "Schools, parking, and daily routes"],
  },
  privacy: {
    title: "Start with a private-area map.",
    body: "North Shore and view properties need a clear brief: approach, sightlines, neighbours, road rhythm, lake orientation, and how visible the home really is.",
    href: "/nelson/north-shore",
    cta: "Explore North Shore",
    notes: ["Arrival and sightlines", "Lake and mountain exposure", "Private introductions where public inventory is thin"],
  },
  acreage: {
    title: "Start with land-use reality.",
    body: "Acreage buyers need the romance and the maintenance file: water, septic, snow, access, outbuildings, zoning, and daily labour.",
    href: "/listings",
    cta: "Browse acreage candidates",
    notes: ["Water, septic, and road access", "Outbuildings and land-use fit", "Maintenance appetite before offer strategy"],
  },
  ski: {
    title: "Start with the winter rhythm.",
    body: "A ski-oriented search should map Whitewater access, plowing, guest use, gear storage, rental appetite, and off-season lifestyle.",
    href: "/nelson",
    cta: "Review area guide",
    notes: ["Whitewater timing", "Winter road confidence", "Four-season ownership plan"],
  },
  relocation: {
    title: "Start with a landing plan.",
    body: "Relocation buyers need more than listings. Schools, healthcare, community fit, winter, work rhythm, and first scouting route come before the offer.",
    href: "/buyers/relocation",
    cta: "Plan relocation path",
    notes: ["First scouting route", "Schools, healthcare, and local services", "Neighbourhood fit before touring"],
  },
  second: {
    title: "Start with ownership systems.",
    body: "Second homes live or die by the support network. Caretakers, security, winterisation, access, guests, and maintenance need to be solved early.",
    href: "/buyers/relocation",
    cta: "Ask second-home questions",
    notes: ["Caretaker and security network", "Winterisation and lock-and-leave needs", "Guest and family use pattern"],
  },
  international: {
    title: "Start with the advisor bench.",
    body: "International buyers need the property brief plus tax, legal, financing, currency, and remote due diligence introductions before pressure enters the room.",
    href: "/buyers/international",
    cta: "Read international playbook",
    notes: ["Tax and legal counsel", "Currency and financing timing", "Remote diligence and local representation"],
  },
};

export function BuyerFitQuiz() {
  const [selected, setSelected] = useState<PathKey>("lakefront");
  const result = useMemo(() => recommendations[selected], [selected]);

  return (
    <div className="grid grid-cols-1 overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="p-6 sm:p-8 lg:p-10">
        <p className="m-0 mb-5 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
          Private Buyer Fit Quiz
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {options.map((option) => {
            const active = selected === option.key;
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => setSelected(option.key)}
                className={`min-h-[112px] border p-4 text-left transition-colors ${
                  active
                    ? "border-[var(--color-bronze)] bg-[rgba(212,184,150,0.12)]"
                    : "border-[var(--color-line)] bg-[var(--color-bg)] hover:border-[var(--color-bronze)]"
                }`}
              >
                <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-text)]">
                  {option.label}
                </span>
                <span className="mt-2 block text-[13px] leading-[1.55] text-[var(--color-text-muted)]">
                  {option.body}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] bg-[var(--color-bg-2)] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
        <p className="m-0 text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
          Recommended Route
        </p>
        <h3 className="m-0 mt-5 font-serif text-[34px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] sm:text-[42px]">
          {result.title}
        </h3>
        <p className="m-0 mt-5 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
          {result.body}
        </p>
        <ul className="my-7 space-y-3 border-y border-[var(--color-line)] py-6">
          {result.notes.map((note) => (
            <li key={note} className="flex gap-3 text-[12px] uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--color-bronze)]" />
              {note}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Link href={result.href} className="rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-colors hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]">
            {result.cta}
          </Link>
          <Link href="/contact" className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
            Open buyer brief
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type PathKey = "lakefront" | "walkable" | "privacy" | "acreage" | "ski" | "relocation" | "second" | "international";

type Option = {
  key: PathKey;
  label: string;
  short: string;
  body: string;
};

type Recommendation = {
  eyebrow: string;
  title: string;
  bestFor: string;
  firstMove: string;
  avoid: string;
  href: string;
  cta: string;
  notes: string[];
};

const options: Option[] = [
  { key: "lakefront", label: "Lakefront", short: "Water, dock, exposure", body: "You want the lake to be part of daily life, not just the view from the deck." },
  { key: "walkable", label: "Walkable Nelson", short: "Town, culture, schools", body: "You want Baker Street, restaurants, parks, and errands to feel close and natural." },
  { key: "privacy", label: "North Shore", short: "Views, quiet, arrival", body: "You want the lake close, Nelson nearby, and the property to feel properly tucked away." },
  { key: "acreage", label: "Acreage", short: "Land, shops, gardens", body: "You want space for projects, guests, dogs, storage, gardens, or a private family base." },
  { key: "ski", label: "Ski Access", short: "Whitewater, winter use", body: "You want winter ownership to feel easy, with gear, guests, roads, and timing solved." },
  { key: "relocation", label: "Relocation", short: "Schools, healthcare, landing", body: "You are deciding whether Nelson and Kootenay Lake can work as a real life move." },
  { key: "second", label: "Second Home", short: "Caretaker, guests, security", body: "You want a place that works when you are there, and is protected when you are not." },
  { key: "international", label: "International", short: "Remote, legal, financing", body: "You need local representation, clean logistics, and the right advisors before pressure starts." },
];

const recommendations: Record<PathKey, Recommendation> = {
  lakefront: {
    eyebrow: "Lakefront Search",
    title: "Start by proving the shoreline works.",
    bestFor: "Buyers comparing waterfront homes, private beaches, dock potential, sun exposure, and long-term scarcity around Kootenay Lake.",
    firstMove: "Luke should help you separate beautiful lake photos from practical shoreline value: access, grade, orientation, road noise, rights, winter use, and resale confidence.",
    avoid: "Paying a lakefront premium before knowing whether the water access, dock path, privacy, and seasonality actually support the life you want.",
    href: "/listings/waterfront",
    cta: "View waterfront properties",
    notes: ["Shoreline and dock questions", "Sun, wind, road, and winter access", "Scarcity around Kootenay Lake"],
  },
  walkable: {
    eyebrow: "Nelson Search",
    title: "Start with the version of town life you want.",
    bestFor: "Buyers who want culture, restaurants, schools, parks, Baker Street, and a home that feels connected to Nelson instead of isolated from it.",
    firstMove: "Compare Downtown, Uphill, Fairview, Rosemont, and Mountain Station before judging a single home. Each pocket changes grade, parking, sun, upkeep, and daily rhythm.",
    avoid: "Buying charm without checking winter parking, renovation appetite, street slope, heritage maintenance, noise, and whether walkability still feels good in February.",
    href: "/nelson/nelson",
    cta: "Explore Nelson pockets",
    notes: ["Baker Street rhythm", "Heritage and renovation context", "Schools, parking, and daily routes"],
  },
  privacy: {
    eyebrow: "North Shore Search",
    title: "Start with privacy you can actually feel.",
    bestFor: "Buyers who want lake views, quieter arrival, space from neighbours, and Nelson close enough for dinner, work, services, and guests.",
    firstMove: "Map the drive from the Big Orange Bridge east, then judge each address by approach, sightlines, road rhythm, lake orientation, and how exposed it feels from the highway.",
    avoid: "Mistaking distance for privacy. A home can look secluded online and still feel exposed from the road, the water, or neighbouring approaches.",
    href: "/nelson/north-shore",
    cta: "Explore North Shore",
    notes: ["Arrival and sightlines", "Lake and mountain exposure", "Road rhythm before showings"],
  },
  acreage: {
    eyebrow: "Acreage Search",
    title: "Start with the maintenance reality.",
    bestFor: "Buyers who want land, workshops, gardens, privacy, dogs, equipment, guests, or a family compound near Nelson without living in town.",
    firstMove: "Before touring, define how much land you will actually use and maintain. Then screen water, septic, road access, outbuildings, insurance, internet, and winter care.",
    avoid: "Falling for acreage as an idea before understanding the systems that make rural ownership either freeing or exhausting.",
    href: "/nelson/blewett",
    cta: "Study acreage near Nelson",
    notes: ["Water, septic, and road access", "Outbuildings and land-use fit", "Maintenance appetite before offer strategy"],
  },
  ski: {
    eyebrow: "Ski Lifestyle Search",
    title: "Start with the winter routine.",
    bestFor: "Buyers who want Whitewater access, guest-friendly winters, gear storage, four-season use, and a property that still works outside ski season.",
    firstMove: "Build the search around plowing, driveway grade, storage, guest flow, off-season use, and how often the home needs to serve family or visitors.",
    avoid: "Buying a ski fantasy that becomes awkward in shoulder season, expensive in winter, or inconvenient when guests arrive with gear and vehicles.",
    href: "/nelson",
    cta: "Review area guide",
    notes: ["Whitewater timing", "Winter road confidence", "Four-season ownership plan"],
  },
  relocation: {
    eyebrow: "Relocation Search",
    title: "Start with the landing plan.",
    bestFor: "Buyers deciding whether Nelson, Kootenay Lake, schools, healthcare, work rhythm, community fit, and winter life can support a real move.",
    firstMove: "Narrow the move to two or three likely areas before touring. Then build a scouting route that tests daily life, not just listings.",
    avoid: "Booking random showings before understanding schools, services, commute patterns, neighbourhood feel, and what the first six months would actually require.",
    href: "/buyers/relocation",
    cta: "Plan relocation path",
    notes: ["First scouting route", "Schools, healthcare, and local services", "Neighbourhood fit before touring"],
  },
  second: {
    eyebrow: "Second-Home Search",
    title: "Start with ownership systems.",
    bestFor: "Buyers who want a Kootenay Lake base for family, guests, summer stays, ski trips, or long weekends without creating a management burden.",
    firstMove: "Solve caretaker coverage, winterisation, security, guest access, maintenance, and emergency contacts before choosing the prettiest house.",
    avoid: "Buying a beautiful second home that depends on luck, neighbours, or last-minute trades every time weather or guests change the plan.",
    href: "/buyers/relocation",
    cta: "Ask second-home questions",
    notes: ["Caretaker and security network", "Winterisation and lock-and-leave needs", "Guest and family use pattern"],
  },
  international: {
    eyebrow: "International Search",
    title: "Start with the advisor bench.",
    bestFor: "International or out-of-province buyers who need clean local representation, remote diligence, tax timing, financing clarity, and trusted introductions.",
    firstMove: "Set up the brief before pressure starts: property criteria, legal and tax counsel, currency, financing, signing logistics, inspections, and remote decision support.",
    avoid: "Trying to solve tax, legal, financing, travel, and property diligence after the right home appears. The timeline gets expensive fast.",
    href: "/buyers/international",
    cta: "Read international playbook",
    notes: ["Tax and legal counsel", "Currency and financing timing", "Remote diligence and local representation"],
  },
};

export function BuyerFitQuiz() {
  const [selected, setSelected] = useState<PathKey>("lakefront");
  const result = useMemo(() => recommendations[selected], [selected]);

  return (
    <div className="overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_36px_110px_-72px_rgba(0,0,0,0.95)]">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-[var(--color-line)] bg-[rgba(10,11,13,0.42)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <div className="mb-7 flex flex-col gap-3 border-b border-[var(--color-line)] pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                Buyer Route Finder
              </p>
              <h3 className="m-0 mt-3 font-serif text-[28px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] sm:text-[34px]">
                Pick what has to feel right first.
              </h3>
            </div>
            <p className="m-0 max-w-[280px] text-[12px] font-semibold uppercase leading-[1.6] tracking-[0.14em] text-[var(--color-text-dim)]">
              One priority. One route. Better showings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {options.map((option, index) => {
              const active = selected === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setSelected(option.key)}
                  aria-pressed={active}
                  className={`group min-h-[134px] border p-4 text-left transition-[background,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 ${
                    active
                      ? "border-[var(--color-bronze)] bg-[rgba(212,184,150,0.15)] shadow-[0_18px_48px_-36px_rgba(212,184,150,0.7)]"
                      : "border-[var(--color-line)] bg-[rgba(7,8,10,0.52)] hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.06)]"
                  }`}
                >
                  <span className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={`h-px flex-1 ${active ? "bg-[var(--color-bronze)]" : "bg-[var(--color-line)]"}`} />
                  </span>
                  <span className="block text-[12px] font-semibold uppercase tracking-[0.17em] text-[var(--color-text)]">
                    {option.label}
                  </span>
                  <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-dim)]">
                    {option.short}
                  </span>
                  <span className="mt-3 block text-[13px] leading-[1.58] text-[var(--color-text-muted)]">
                    {option.body}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[var(--color-bg-2)] p-6 sm:p-8 lg:p-10 xl:p-12">
          <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
            {result.eyebrow}
          </p>
          <h3 className="m-0 mt-5 max-w-[12ch] font-serif text-[38px] font-light leading-[1.04] tracking-[-0.015em] text-[var(--color-text)] sm:text-[48px]">
            {result.title}
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-px bg-[var(--color-line)]">
            {[
              { label: "Best for", body: result.bestFor },
              { label: "Luke checks first", body: result.firstMove },
              { label: "Avoid", body: result.avoid },
            ].map((item) => (
              <div key={item.label} className="bg-[var(--color-bg)] p-5 sm:p-6">
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                  {item.label}
                </span>
                <p className="m-0 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <ul className="my-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {result.notes.map((note) => (
              <li key={note} className="border border-[var(--color-line)] bg-[rgba(255,255,255,0.025)] p-4 text-[11px] font-semibold uppercase leading-[1.6] tracking-[0.14em] text-[var(--color-text-dim)]">
                {note}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <Link href={result.href} className="rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-colors hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]">
              {result.cta}
            </Link>
            <Link href="/contact" className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">
              Send buyer brief
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

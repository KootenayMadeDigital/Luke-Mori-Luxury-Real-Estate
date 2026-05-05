"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type PathKey = "lakefront" | "walkable" | "privacy" | "acreage" | "ski" | "relocation" | "second" | "international";

type Option = {
  key: PathKey;
  label: string;
  intent: string;
  short: string;
};

type Recommendation = {
  eyebrow: string;
  title: string;
  summary: string;
  route: string;
  checks: string[];
  avoid: string;
  nextMove: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

const options: Option[] = [
  { key: "lakefront", label: "Lakefront", intent: "I want the lake to shape daily life.", short: "Water access, dock questions, exposure" },
  { key: "walkable", label: "Walkable Nelson", intent: "I want culture, errands, and dinner close.", short: "Baker Street, schools, heritage homes" },
  { key: "privacy", label: "North Shore", intent: "I want views, quiet, and town nearby.", short: "Arrival, sightlines, neighbour distance" },
  { key: "acreage", label: "Acreage", intent: "I want land, workshops, gardens, or dogs.", short: "Systems, access, upkeep, privacy" },
  { key: "ski", label: "Ski Access", intent: "I want Whitewater to fit the routine.", short: "Winter roads, storage, guests, seasonality" },
  { key: "relocation", label: "Relocation", intent: "I need to know if the move works.", short: "Schools, services, commute, community" },
  { key: "second", label: "Second Home", intent: "I want a base that works when I am away.", short: "Caretaker, security, winterisation" },
  { key: "international", label: "International", intent: "I need clean remote purchase logistics.", short: "Legal, tax, currency, financing" },
];

const recommendations: Record<PathKey, Recommendation> = {
  lakefront: {
    eyebrow: "Lakefront Buyer Path",
    title: "Prove the shoreline before you pay the premium.",
    summary: "Lakefront value is not only the view. The best fit depends on how you reach the water, how the property handles weather, and whether the shoreline supports the life you are buying.",
    route: "Waterfront homes on Kootenay Lake, the West Arm, Balfour, Procter, Harrop, and select private lake settings.",
    checks: ["Walkable water access and usable shoreline", "Dock, sun, road noise, and winter access", "Long-term demand and resale confidence"],
    avoid: "Paying for lakefront photography before the shoreline, privacy, grade, and seasonal use are understood.",
    nextMove: "Start with a waterfront brief, then shortlist only the homes where the land and shoreline match the lifestyle.",
    href: "/listings/waterfront",
    cta: "View waterfront homes",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc3e63cf060ba15246859_procter-lake-house-nelson-bc.webp",
    imageAlt: "Kootenay Lake waterfront home near Nelson",
  },
  walkable: {
    eyebrow: "Nelson Buyer Path",
    title: "Choose the version of town life first.",
    summary: "Walkable Nelson can mean different things: heritage character, easier school routes, Baker Street energy, quieter streets, or a hillside view. The right pocket matters before the right house.",
    route: "Downtown, Uphill, Fairview, Rosemont, Mountain Station, and nearby Nelson pockets with different grades, parking, sun, and rhythm.",
    checks: ["Parking, slope, snow, and daily errands", "Heritage condition and renovation appetite", "Noise, schools, parks, and walkability in winter"],
    avoid: "Buying charm online, then discovering the street, parking, maintenance, or winter routine does not fit.",
    nextMove: "Compare Nelson pockets first, then tour homes that match the daily rhythm you actually want.",
    href: "/nelson/nelson",
    cta: "Explore Nelson pockets",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbe517afaca9df83bb128_baker-street-nelson-bc.jpg",
    imageAlt: "Baker Street in Nelson BC",
  },
  privacy: {
    eyebrow: "North Shore Buyer Path",
    title: "Find privacy that holds up in person.",
    summary: "North Shore buyers usually want lake views, quiet arrival, and Nelson within reach. The key is knowing which homes feel private, not just which ones look private online.",
    route: "North Shore properties east of the bridge, lake-view homes, quieter rural-residential pockets, and addresses with better arrival and sightlines.",
    checks: ["Approach, driveway, and road rhythm", "Sightlines from neighbours, road, and water", "Sun, lake orientation, and guest access"],
    avoid: "Mistaking distance for privacy. Some homes are farther out but still feel exposed from the highway, water, or neighbouring approaches.",
    nextMove: "Map the drive and privacy conditions before spending tour time on homes that only look secluded in photos.",
    href: "/nelson/north-shore",
    cta: "Explore North Shore",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbd01452436a306385f19_west-arm-kootenay-lake.webp",
    imageAlt: "West Arm of Kootenay Lake on the North Shore",
  },
  acreage: {
    eyebrow: "Acreage Buyer Path",
    title: "Match the land to the life you will actually live.",
    summary: "Acreage can be freedom, privacy, and room for the whole family. It can also be systems, maintenance, snow, insurance, and trades. The right search starts with appetite for ownership reality.",
    route: "Blewett, rural Nelson, Slocan Valley, and select acreages with land, workshops, gardens, guest capacity, or family-compound potential.",
    checks: ["Water, septic, access, internet, and insurance", "Outbuildings, equipment, and maintenance load", "Winter care, trades, privacy, and usable land"],
    avoid: "Falling for acreage as an idea before knowing whether the systems and maintenance fit your time, budget, and tolerance.",
    nextMove: "Set the land-use brief first, then screen only the acreages whose systems support that plan.",
    href: "/nelson/blewett",
    cta: "Study acreage near Nelson",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c49ba6e6e26c70b04aa56_morning-mountain-biking-blewett.jpeg",
    imageAlt: "Wooded mountain trail near Blewett BC",
  },
  ski: {
    eyebrow: "Ski Lifestyle Path",
    title: "Build the search around the winter routine.",
    summary: "A ski-oriented home should make winter easier, not just look good in January. The right fit handles guests, gear, roads, storage, and four-season value.",
    route: "Nelson, Mountain Station, rural pockets with better Whitewater access, and homes that still make sense outside ski season.",
    checks: ["Driveway grade, plowing, and winter road confidence", "Gear storage, guest flow, and vehicle space", "Shoulder-season use and four-season resale"],
    avoid: "Buying a ski fantasy that becomes awkward with guests, expensive in winter, or underused outside peak season.",
    nextMove: "Define the winter routine first, then shortlist homes that work when roads, guests, and gear complicate the day.",
    href: "/nelson",
    cta: "Review area guide",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/644c985ba7eb5cd68b85251e_skiiing-whitewater-powder.webp",
    imageAlt: "Powder skiing at Whitewater near Nelson",
  },
  relocation: {
    eyebrow: "Relocation Buyer Path",
    title: "Test the life before chasing the listing.",
    summary: "Relocation buyers are not only buying a home. They are testing schools, healthcare access, work rhythm, climate, community fit, and the first six months of life in Nelson or Kootenay Lake.",
    route: "A scouting path across Nelson, North Shore, Balfour, Blewett, Slocan Valley, and select lake or acreage options based on how you actually live.",
    checks: ["Schools, services, healthcare, and commute reality", "Neighbourhood rhythm, weather, and winter routines", "First-week and first-six-month fit"],
    avoid: "Booking random showings before knowing which areas could actually support the move.",
    nextMove: "Build a one-day or two-day scouting route that tests daily life before narrowing to homes.",
    href: "/buyers/relocation",
    cta: "Plan relocation path",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc5bb50e2b484db46c921_nelson-bc-looking-north.webp",
    imageAlt: "Nelson BC and Kootenay Lake",
  },
  second: {
    eyebrow: "Second-Home Buyer Path",
    title: "Solve ownership before falling for the view.",
    summary: "A second home has to work when you are there and stay protected when you are not. The best property is the one with the right local support around it.",
    route: "Kootenay Lake bases, lock-and-leave homes, waterfront retreats, ski-weekend properties, and family gathering places with manageable systems.",
    checks: ["Caretaker coverage, security, and emergency contacts", "Winterisation, access, utilities, and maintenance", "Guest use, family rhythm, and local support"],
    avoid: "Depending on luck, neighbours, or last-minute trades every time weather, guests, or repairs change the plan.",
    nextMove: "Define the ownership system first, then choose homes that can be confidently managed from afar.",
    href: "/buyers/relocation",
    cta: "Ask second-home questions",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbf4350d03715e52475f0_balfour-kootenay-lake.webp",
    imageAlt: "Balfour and Kootenay Lake",
  },
  international: {
    eyebrow: "International Buyer Path",
    title: "Put the purchase team in place early.",
    summary: "International and out-of-province buyers need clean representation, remote diligence, legal and tax timing, currency planning, financing clarity, and calm local execution.",
    route: "A remote-ready purchase plan for serious buyers comparing Nelson, Kootenay Lake, waterfront, acreage, second-home, or relocation options.",
    checks: ["Legal, tax, currency, and financing timing", "Remote inspections, signing, and decision support", "Local representation before the right home appears"],
    avoid: "Trying to solve tax, legal, financing, travel, and property diligence after the right home is already moving.",
    nextMove: "Send the buyer brief first so Luke can line up the right local steps before pressure starts.",
    href: "/buyers/international",
    cta: "Read international guide",
    image: "https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc5047afaca9df841c013_procter-lake-house-living-room.webp",
    imageAlt: "Luxury lake house living room near Nelson",
  },
};

export function BuyerFitQuiz() {
  const [selected, setSelected] = useState<PathKey>("lakefront");
  const result = useMemo(() => recommendations[selected], [selected]);

  return (
    <div className="overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_36px_110px_-72px_rgba(0,0,0,0.95)]">
      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="border-b border-[var(--color-line)] bg-[rgba(10,11,13,0.42)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <div className="mb-7 border-b border-[var(--color-line)] pb-6">
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
              Step 1: Pick the closest starting point
            </p>
            <h3 className="m-0 mt-3 max-w-[560px] font-serif text-[30px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] sm:text-[38px]">
              What are you really trying to buy?
            </h3>
            <p className="m-0 mt-4 max-w-[560px] text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
              Choose the answer that feels closest. This turns a broad luxury search into a useful first route for Luke to qualify, protect, and tour.
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
                  className={`group min-h-[146px] border p-4 text-left transition-[background,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 ${
                    active
                      ? "border-[var(--color-bronze)] bg-[rgba(212,184,150,0.16)] shadow-[0_20px_56px_-38px_rgba(212,184,150,0.85)]"
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
                  <span className="mt-3 block text-[16px] leading-[1.35] text-[var(--color-text)]">
                    {option.intent}
                  </span>
                  <span className="mt-3 block text-[11px] font-semibold uppercase leading-[1.55] tracking-[0.12em] text-[var(--color-text-dim)]">
                    {option.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[var(--color-bg-2)] p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="relative mb-9 aspect-[16/9] overflow-hidden border border-[var(--color-line)] bg-[var(--color-bg)] shadow-[0_28px_90px_-60px_rgba(0,0,0,0.9)]">
            <Image
              key={selected}
              src={result.image}
              alt={result.imageAlt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover opacity-90 saturate-[1.08] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.02),rgba(10,11,13,0.52))]" aria-hidden />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
                {result.eyebrow}
              </span>
              <span className="hidden text-right text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] sm:block">
                Visual fit first
              </span>
            </div>
          </div>

          <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">
            Step 2: Use the right route
          </p>
          <p className="m-0 mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-dim)]">
            {result.eyebrow}
          </p>
          <h3 className="m-0 mt-5 max-w-[14ch] font-serif text-[36px] font-light leading-[1.04] tracking-[-0.015em] text-[var(--color-text)] sm:text-[48px]">
            {result.title}
          </h3>
          <p className="m-0 mt-6 max-w-[680px] text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
            {result.summary}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-px bg-[var(--color-line)]">
            <div className="bg-[var(--color-bg)] p-5 sm:p-6">
              <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                Where this search usually leads
              </span>
              <p className="m-0 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">
                {result.route}
              </p>
            </div>
            <div className="bg-[var(--color-bg)] p-5 sm:p-6">
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                Luke checks before touring
              </span>
              <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-3">
                {result.checks.map((check) => (
                  <li key={check} className="border border-[var(--color-line)] bg-[rgba(255,255,255,0.025)] p-4 text-[12px] font-semibold uppercase leading-[1.55] tracking-[0.12em] text-[var(--color-text-dim)]">
                    {check}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2">
              <div className="bg-[var(--color-bg)] p-5 sm:p-6">
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                  Avoid
                </span>
                <p className="m-0 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">
                  {result.avoid}
                </p>
              </div>
              <div className="bg-[var(--color-bg)] p-5 sm:p-6">
                <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                  Best next step
                </span>
                <p className="m-0 text-[15px] leading-[1.72] text-[var(--color-text-muted)]">
                  {result.nextMove}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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

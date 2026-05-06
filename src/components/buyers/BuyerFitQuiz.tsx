"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type AreaKey = "nelson" | "north-shore" | "balfour" | "blewett" | "slocan-valley" | "kaslo";
type Option = { label: string; note: string; scores: Partial<Record<AreaKey, number>> };
type Question = { eyebrow: string; title: string; helper: string; options: Option[] };
type Area = {
  key: AreaKey;
  name: string;
  fit: string;
  plainAnswer: string;
  bestFor: string[];
  watch: string[];
  nextStep: string;
  href: string;
  cta: string;
};

const areas: Record<AreaKey, Area> = {
  nelson: {
    key: "nelson",
    name: "Nelson",
    fit: "Walkable town life with culture, schools, restaurants, parks, and daily convenience close by.",
    plainAnswer: "Nelson is the best fit when you want the Kootenay life without giving up town rhythm. The tradeoff is that slope, parking, noise, heritage condition, and winter streets matter more than they look online.",
    bestFor: ["Walkability", "Schools and services", "Restaurants and culture", "Lake access near town"],
    watch: ["Parking and slope", "Heritage maintenance", "Street noise", "Winter street rhythm"],
    nextStep: "Tour Fairview, Uphill, Rosemont, and downtown patterns before choosing listings.",
    href: "/nelson/nelson",
    cta: "Study Nelson",
  },
  "north-shore": {
    key: "north-shore",
    name: "North Shore",
    fit: "Lake views, privacy, quieter living, and Nelson close enough for ordinary life.",
    plainAnswer: "North Shore is the best fit when you want the lake and more breathing room, but still want town nearby. The details are driveway, highway sound, sightlines, winter access, and whether lake access is real or just visual.",
    bestFor: ["Lake views", "Privacy near town", "Quieter arrival", "Second-home appeal"],
    watch: ["Highway sound", "Driveway grade", "Shoreline rights", "Winter maintenance"],
    nextStep: "Drive the route at real-life times and compare privacy from road, water, and neighbours.",
    href: "/nelson/north-shore",
    cta: "Study North Shore",
  },
  balfour: {
    key: "balfour",
    name: "Balfour",
    fit: "Main-lake energy, marina and golf access, second-home rhythm, and a quieter pace east of Nelson.",
    plainAnswer: "Balfour fits buyers who want Kootenay Lake to feel bigger and quieter. It can be excellent for second homes and slower living, as long as distance from Nelson, wind, services, and lock-and-leave care are understood.",
    bestFor: ["Main-lake setting", "Second homes", "Golf and marina access", "Quieter pace"],
    watch: ["Distance to Nelson", "Wind and exposure", "Services and trades", "Care when away"],
    nextStep: "Compare Balfour with North Shore and Kaslo before deciding how quiet is right.",
    href: "/nelson/balfour",
    cta: "Study Balfour",
  },
  blewett: {
    key: "blewett",
    name: "Blewett",
    fit: "Acreage, privacy, gardens, dogs, shops, workshops, and land close enough to Nelson.",
    plainAnswer: "Blewett is the best fit when land is part of the dream. It gives more space without losing Nelson completely, but water, septic, internet, outbuildings, snow, and maintenance appetite have to be real checks.",
    bestFor: ["Acreage near town", "Workshops and gardens", "Dogs and privacy", "Family compound potential"],
    watch: ["Water and septic", "Internet", "Snow and roads", "Outbuilding condition"],
    nextStep: "Define how you want to use the land, then tour only properties whose systems support that plan.",
    href: "/nelson/blewett",
    cta: "Study Blewett",
  },
  "slocan-valley": {
    key: "slocan-valley",
    name: "Slocan Valley",
    fit: "More space, slower pace, river and mountain settings, creative retreat energy, and a quieter rural life.",
    plainAnswer: "Slocan Valley fits buyers who want the slower rhythm to be the point. It can offer more space and quiet, but distance, winter roads, services, trades, and social rhythm should be tested before falling in love with the setting.",
    bestFor: ["Retreat property", "Space and quiet", "River and mountain settings", "Creative rural life"],
    watch: ["Distance", "Winter roads", "Service access", "Trades and maintenance"],
    nextStep: "Spend a real day there, not a drive-through, and test the routine you would actually live.",
    href: "/nelson/slocan-valley",
    cta: "Study Slocan Valley",
  },
  kaslo: {
    key: "kaslo",
    name: "Kaslo",
    fit: "Small village life on Kootenay Lake with heritage charm, quiet, scenery, and a more removed pace.",
    plainAnswer: "Kaslo fits buyers who want quiet lake-and-mountain life more than fast access to Nelson. It is beautiful and calm, but the practical question is how often you need larger services, travel, trades, and winter flexibility.",
    bestFor: ["Quiet village life", "Lake and mountain setting", "Heritage character", "Retreat energy"],
    watch: ["Distance to larger services", "Winter travel", "Medical and trades access", "Resale buyer pool"],
    nextStep: "Compare Kaslo with Balfour and Slocan Valley if quiet living is high on the list.",
    href: "/guides/moving-to-kaslo-bc",
    cta: "Read Kaslo guide",
  },
};

const questions: Question[] = [
  {
    eyebrow: "Daily Rhythm",
    title: "How do you want an ordinary Tuesday to feel?",
    helper: "Pick the answer that sounds easiest to live with, not the one that sounds best on vacation.",
    options: [
      { label: "Walk to coffee, dinner, school, parks, and errands.", note: "Town convenience matters most.", scores: { nelson: 5, "north-shore": 1 } },
      { label: "Quiet at home, but Nelson still close enough.", note: "Privacy near town matters most.", scores: { "north-shore": 5, blewett: 2, nelson: 1 } },
      { label: "A slower rural day with more space and fewer neighbours.", note: "Quiet and land matter most.", scores: { blewett: 4, "slocan-valley": 4, kaslo: 2 } },
      { label: "Lake and retreat energy first, services second.", note: "Setting matters more than convenience.", scores: { balfour: 5, kaslo: 4, "north-shore": 2 } },
    ],
  },
  {
    eyebrow: "Water",
    title: "What role should the lake play?",
    helper: "Waterfront, lake access, and lake views are different buying decisions.",
    options: [
      { label: "I want the lake close to daily life, but I still want town.", note: "Lake plus services.", scores: { nelson: 3, "north-shore": 4 } },
      { label: "I want big lake energy and a quieter second-home feeling.", note: "Main-lake setting.", scores: { balfour: 5, kaslo: 4 } },
      { label: "A view is enough if the home and area fit.", note: "Setting without shoreline pressure.", scores: { nelson: 3, "north-shore": 3, blewett: 1 } },
      { label: "The lake is nice, but land and privacy matter more.", note: "Land over water.", scores: { blewett: 4, "slocan-valley": 4 } },
    ],
  },
  {
    eyebrow: "Space",
    title: "How much property do you actually want to manage?",
    helper: "More land can be freedom. It can also be equipment, systems, snow, and weekend work.",
    options: [
      { label: "A low-maintenance home close to services.", note: "Less upkeep.", scores: { nelson: 5, "north-shore": 1 } },
      { label: "Some privacy, garden space, or a larger lot is enough.", note: "Balanced space.", scores: { "north-shore": 4, nelson: 2, balfour: 2 } },
      { label: "I want acreage, dogs, gardens, shops, or room to build a life around land.", note: "Acreage appetite.", scores: { blewett: 5, "slocan-valley": 4 } },
      { label: "I want retreat space, but I need it to stay manageable from away.", note: "Second-home reality.", scores: { balfour: 4, kaslo: 3, "north-shore": 2 } },
    ],
  },
  {
    eyebrow: "Winter",
    title: "How much winter complexity are you willing to own?",
    helper: "Driveways, snow, shade, roads, and distance feel different in February.",
    options: [
      { label: "Keep winter simple. I want services and plowed streets close.", note: "Convenience wins.", scores: { nelson: 5 } },
      { label: "Some driveway and road care is fine if the setting is worth it.", note: "Balanced winter tolerance.", scores: { "north-shore": 4, balfour: 2, blewett: 2 } },
      { label: "I can handle rural systems if I get space and privacy.", note: "High winter tolerance.", scores: { blewett: 4, "slocan-valley": 4, kaslo: 2 } },
      { label: "I may be away often, so I need manageable winter care.", note: "Care plan matters.", scores: { balfour: 4, "north-shore": 3, nelson: 2 } },
    ],
  },
  {
    eyebrow: "Services",
    title: "How close do you want help, healthcare, trades, and errands?",
    helper: "Beautiful places are easier to love when the logistics fit your life.",
    options: [
      { label: "Close. I want the easiest possible daily logistics.", note: "Services first.", scores: { nelson: 5 } },
      { label: "Close enough. A short drive is fine.", note: "Near-town balance.", scores: { "north-shore": 4, blewett: 3, nelson: 2 } },
      { label: "I can trade convenience for quiet if the fit is right.", note: "Quiet over services.", scores: { balfour: 4, kaslo: 3, "slocan-valley": 3 } },
      { label: "I want fewer people around, even if planning takes more effort.", note: "Privacy first.", scores: { "slocan-valley": 5, kaslo: 4, blewett: 3 } },
    ],
  },
  {
    eyebrow: "People",
    title: "How much community do you want around you?",
    helper: "Some buyers want familiar faces nearby. Others want space first and social life when they choose it.",
    options: [
      { label: "I want to bump into people, know the town, and feel connected quickly.", note: "Community close by.", scores: { nelson: 5, kaslo: 2 } },
      { label: "I like neighbours, but I want home to feel quiet.", note: "Social when chosen.", scores: { "north-shore": 4, balfour: 3, blewett: 2 } },
      { label: "I want privacy most days, with community available when I want it.", note: "Privacy first.", scores: { blewett: 4, "slocan-valley": 4, kaslo: 2 } },
      { label: "I want a small-place feel, not a busy town feel.", note: "Village pace.", scores: { kaslo: 5, balfour: 3, "slocan-valley": 3 } },
    ],
  },
  {
    eyebrow: "Future Plans",
    title: "What might change in the next few years?",
    helper: "The best fit should handle the life you are planning, not just the life you have today.",
    options: [
      { label: "Schools, work, services, or aging parents may matter more over time.", note: "Future convenience.", scores: { nelson: 5, "north-shore": 2 } },
      { label: "I may want guests, a second-home setup, or easier lock-and-leave ownership.", note: "Flexible retreat use.", scores: { balfour: 4, "north-shore": 4, kaslo: 2 } },
      { label: "I may want gardens, animals, a shop, a studio, or room to expand.", note: "Room to grow.", scores: { blewett: 5, "slocan-valley": 4 } },
      { label: "I want something quieter and more permanent, even if it is less convenient.", note: "Long-term quiet.", scores: { kaslo: 4, "slocan-valley": 4, balfour: 2 } },
    ],
  },
  {
    eyebrow: "Gut Check",
    title: "Which sentence sounds most like you?",
    helper: "This last question catches the emotional fit after the practical answers.",
    options: [
      { label: "I want to feel part of Nelson life.", note: "Community and town rhythm.", scores: { nelson: 5 } },
      { label: "I want a beautiful private base near Nelson.", note: "Privacy with access.", scores: { "north-shore": 5, blewett: 2 } },
      { label: "I want lake life that feels like an escape.", note: "Retreat and water.", scores: { balfour: 5, kaslo: 4 } },
      { label: "I want space, quiet, and room to make something my own.", note: "Rural ownership.", scores: { blewett: 5, "slocan-valley": 5 } },
    ],
  },
];

function rankAreas(answers: number[]) {
  const totals = Object.keys(areas).reduce((acc, key) => ({ ...acc, [key]: 0 }), {} as Record<AreaKey, number>);
  answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex]?.options[optionIndex];
    if (!option) return;
    Object.entries(option.scores).forEach(([key, value]) => {
      totals[key as AreaKey] += value ?? 0;
    });
  });
  const max = Math.max(...Object.values(totals), 1);
  return (Object.keys(areas) as AreaKey[])
    .map((key) => ({ area: areas[key], score: totals[key], percent: Math.round((totals[key] / max) * 100) }))
    .sort((a, b) => b.score - a.score);
}

export function BuyerFitQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const complete = answers.every((answer) => answer >= 0);
  const answeredCount = answers.filter((answer) => answer >= 0).length;
  const current = questions[step];
  const ranked = useMemo(() => rankAreas(answers), [answers]);
  const top = ranked[0];
  const runnerUp = ranked[1];
  const progress = Math.round((answeredCount / questions.length) * 100);
  const topGap = top.score - (runnerUp?.score ?? 0);
  const confidence = complete ? (topGap >= 8 ? "Strong fit" : topGap >= 4 ? "Good fit" : "Close call") : "Still learning";
  const selectedSignals = answers
    .map((answer, index) => answer >= 0 ? questions[index]?.options[answer]?.note : undefined)
    .filter(Boolean)
    .slice(-5) as string[];

  function choose(optionIndex: number) {
    setAnswers((currentAnswers) => currentAnswers.map((answer, index) => (index === step ? optionIndex : answer)));
    if (step < questions.length - 1) window.setTimeout(() => setStep((currentStep) => Math.min(currentStep + 1, questions.length - 1)), 160);
  }

  return (
    <div className="overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_36px_110px_-72px_rgba(0,0,0,0.95)]">
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-[var(--color-line)] bg-[rgba(10,11,13,0.42)] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <div className="mb-7 border-b border-[var(--color-line)] pb-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">Area Fit Quiz</p>
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)]">{progress}% complete</p>
            </div>
            <div className="h-1 overflow-hidden bg-[var(--color-line)]" aria-hidden>
              <div className="h-full bg-[var(--color-bronze)] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {questions.map((question, index) => (
                <button
                  key={question.eyebrow}
                  type="button"
                  onClick={() => setStep(index)}
                  className={`size-9 rounded-full border text-[11px] font-semibold transition-colors ${step === index ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-button-text)]" : answers[index] >= 0 ? "border-[var(--color-bronze)] text-[var(--color-bronze-light)]" : "border-[var(--color-line-strong)] text-[var(--color-text-dim)]"}`}
                  aria-label={`Go to question ${index + 1}`}
                >
                  {answers[index] >= 0 ? "✓" : index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="transition-opacity duration-300" key={step}>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">{current.eyebrow}</p>
            <h3 className="m-0 mt-4 font-serif text-[34px] font-light leading-[1.06] tracking-[-0.015em] text-[var(--color-text)] sm:text-[46px]">{current.title}</h3>
            <p className="m-0 mt-5 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">{current.helper}</p>
            <div className="mt-8 grid gap-3">
              {current.options.map((option, index) => {
                const selected = answers[step] === index;
                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => choose(index)}
                    className={`luxury-card group border p-5 text-left transition-[border-color,background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 ${selected ? "border-[var(--color-bronze)] bg-[rgba(212,184,150,0.12)]" : "border-[var(--color-line)] bg-[var(--color-bg)] hover:border-[var(--color-line-strong)] hover:bg-[var(--color-surface)]"}`}
                  >
                    <span className="flex items-start gap-4">
                      <span className={`mt-1 grid size-7 shrink-0 place-items-center rounded-full border text-[11px] font-semibold ${selected ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-button-text)]" : "border-[var(--color-line-strong)] text-[var(--color-text-dim)]"}`}>{String.fromCharCode(65 + index)}</span>
                      <span>
                        <span className="block text-[16px] leading-[1.4] text-[var(--color-text)]">{option.label}</span>
                        <span className="mt-2 block text-[12px] font-semibold uppercase leading-[1.55] tracking-[0.12em] text-[var(--color-text-dim)]">{option.note}</span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-bg-2)] p-6 sm:p-8 lg:p-10 xl:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze)]">Best Match</p>
            <span className="rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)]">{confidence}</span>
          </div>
          <h3 className="m-0 mt-5 font-serif text-[44px] font-light leading-[1.02] tracking-[-0.015em] text-[var(--color-text)] sm:text-[68px]">{top.area.name}</h3>
          <p className="m-0 mt-5 max-w-[760px] text-[17px] leading-[1.78] text-[var(--color-text-muted)]">{complete ? top.area.plainAnswer : "Answer the lifestyle questions and the match will sharpen as you go. The result is directional, not a substitute for a local conversation."}</p>

          {selectedSignals.length > 0 && (
            <div className="mt-7 border border-[var(--color-line)] bg-[var(--color-bg)] p-5">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Signals you gave us</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedSignals.map((signal) => (
                  <span key={signal} className="rounded-full border border-[var(--color-line-strong)] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{signal}</span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 grid gap-3">
            {ranked.slice(0, 4).map((match, index) => (
              <div key={match.area.key} className="luxury-card group border border-[var(--color-line)] bg-[var(--color-bg)] p-5 transition-[background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)]">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Match {String(index + 1).padStart(2, "0")}</p>
                    <h4 className="m-0 mt-2 font-serif text-[28px] font-light leading-[1.08] text-[var(--color-text)]">{match.area.name}</h4>
                  </div>
                  <span className="font-serif text-[32px] font-light text-[var(--color-text)]">{match.percent}%</span>
                </div>
                <div className="h-1 bg-[var(--color-line)]" aria-hidden>
                  <div className="h-full bg-[var(--color-bronze)] transition-[width] duration-500" style={{ width: `${match.percent}%` }} />
                </div>
                <p className="m-0 mt-4 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">{match.area.fit}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2">
            <div className="luxury-card group bg-[var(--color-bg)] p-6 transition-[background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)]">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Best for</p>
              <ul className="m-0 mt-4 grid list-none gap-2 p-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                {top.area.bestFor.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="luxury-card group bg-[var(--color-bg)] p-6 transition-[background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-surface)]">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Watch for</p>
              <ul className="m-0 mt-4 grid list-none gap-2 p-0 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                {top.area.watch.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-8 border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.08)] p-6">
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">Next move</p>
            <p className="m-0 mt-3 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">{top.area.nextStep}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={top.area.href} className="rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-colors hover:bg-[var(--color-bronze-light)]">{top.area.cta}</Link>
            <Link href="/contact#consultation" className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]">Send result to Luke</Link>
            <button type="button" onClick={() => { setAnswers(Array(questions.length).fill(-1)); setStep(0); }} className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-text)]">Start over</button>
          </div>
        </div>
      </div>
    </div>
  );
}

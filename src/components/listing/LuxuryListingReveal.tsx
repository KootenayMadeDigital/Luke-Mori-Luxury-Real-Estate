"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { buildSpecs, type Listing } from "@/lib/listings";

type Props = {
  listing: Listing;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function LuxuryListingReveal({ listing }: Props) {
  const [progress, setProgress] = useState(0.18);
  const [isDragging, setIsDragging] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const specs = buildSpecs(listing);
  const displayProgress = isRevealed ? 1 : progress;
  const leftShift = displayProgress * 104;
  const rightShift = displayProgress * 104;

  const updateFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });

    if (isDragging) {
      const next = clamp(x / 100, 0.12, 1);
      setProgress(next);
      if (next > 0.76) setIsRevealed(true);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateFromPointer(event);
  };

  const finishDrag = () => {
    setIsDragging(false);
    setProgress((current) => {
      if (current > 0.42) {
        setIsRevealed(true);
        return 1;
      }
      return 0.18;
    });
  };

  return (
    <section className="tone-office tonal-section border-y border-[var(--color-line)] py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="mb-10 grid grid-cols-1 gap-7 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
Featured Estate Preview
            </span>
            <h2 className="m-0 mt-6 max-w-[620px] font-serif text-[clamp(38px,5vw,76px)] font-light leading-[0.94] tracking-[-0.035em] text-[var(--color-text)]">
              Preview the property
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">before the crowd does.</em>
            </h2>
          </div>
          <p className="m-0 max-w-[540px] text-[15px] leading-[1.85] text-[var(--color-text-muted)] md:ml-auto md:text-right">
A quieter way to study a significant property: reveal the home on your own terms, then open the full listing when the details are worth a closer look.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.42)] shadow-[0_34px_110px_-70px_rgba(0,0,0,0.95)] lg:grid-cols-[1.16fr_0.84fr]">
          <div
            className="group/reveal relative isolate min-h-[420px] cursor-grab overflow-hidden bg-[var(--color-bg)] active:cursor-grabbing md:min-h-[560px]"
            onPointerDown={handlePointerDown}
            onPointerMove={updateFromPointer}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            style={
              {
                "--reveal-x": `${pointer.x}%`,
                "--reveal-y": `${pointer.y}%`,
              } as CSSProperties
            }
          >
            {listing.heroPhoto ? (
              <Image
                src={listing.heroPhoto}
                alt={listing.address}
                fill
                priority={false}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover scale-[1.015] transition-transform duration-700 ease-[var(--ease-luxe)] group-hover/reveal:scale-[1.045] motion-reduce:scale-100 motion-reduce:transition-none"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[var(--color-surface-2)] text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                No photo
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--reveal-x)_var(--reveal-y),rgba(255,255,255,0.22),transparent_19%),linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.56))] opacity-80 transition-opacity duration-500" />

            <div
              className="absolute inset-y-0 left-0 z-20 w-[54%] border-r border-[rgba(224,192,154,0.28)] bg-[radial-gradient(circle_at_30%_28%,rgba(224,192,154,0.18),transparent_26%),linear-gradient(92deg,rgba(9,8,8,0.98),rgba(31,21,15,0.96)_48%,rgba(8,7,7,0.98))] shadow-[18px_0_50px_-32px_rgba(0,0,0,0.95)] transition-transform duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
              style={{ transform: `translateX(-${leftShift}%)` }}
              aria-hidden
            >
              <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(90deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_18px),radial-gradient(circle_at_28%_40%,rgba(255,255,255,0.12),transparent_18%)]" />
              <div className="absolute inset-y-0 right-0 w-10 bg-[linear-gradient(90deg,transparent,rgba(224,192,154,0.18),rgba(255,255,255,0.12),transparent)]" />
            </div>

            <div
              className="absolute inset-y-0 right-0 z-20 w-[54%] border-l border-[rgba(224,192,154,0.28)] bg-[radial-gradient(circle_at_72%_32%,rgba(224,192,154,0.16),transparent_27%),linear-gradient(88deg,rgba(8,7,7,0.98),rgba(34,23,16,0.96)_52%,rgba(10,8,7,0.98))] shadow-[-18px_0_50px_-32px_rgba(0,0,0,0.95)] transition-transform duration-700 ease-[var(--ease-luxe)] motion-reduce:hidden"
              style={{ transform: `translateX(${rightShift}%)` }}
              aria-hidden
            >
              <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(90deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_16px),radial-gradient(circle_at_76%_42%,rgba(255,255,255,0.1),transparent_18%)]" />
              <div className="absolute inset-y-0 left-0 w-10 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),rgba(224,192,154,0.18),transparent)]" />
            </div>

            {!isRevealed && (
              <div className="absolute inset-0 z-30 flex items-center justify-center p-6 motion-reduce:hidden">
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setIsRevealed(true);
                    setProgress(1);
                  }}
                  className="group/button max-w-[310px] border border-[rgba(224,192,154,0.42)] bg-[rgba(10,11,13,0.72)] px-6 py-5 text-center shadow-[0_22px_70px_-40px_rgba(0,0,0,0.95)] backdrop-blur-md transition-[transform,border-color,background] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-bronze-light)] hover:bg-[rgba(10,11,13,0.84)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bronze)]"
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-light)]">
                    Drag to reveal
                  </span>
                  <span className="mt-3 block font-serif text-[28px] font-light italic leading-none text-[var(--color-text)]">
                    {listing.price || "Private preview"}
                  </span>
                  <span className="mt-4 block text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] transition-colors group-hover/button:text-[var(--color-text)]">
                    Tap also works
                  </span>
                </button>
              </div>
            )}

            <div className="absolute bottom-5 left-5 z-10 max-w-[78%] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
              <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze-light)]">
                Featured Luxury Listing
              </p>
              <p className="m-0 mt-2 font-serif text-[clamp(24px,3.2vw,42px)] font-light leading-[1.02]">
                {listing.address}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between border-t border-[var(--color-line)] bg-[rgba(19,21,23,0.72)] p-7 md:p-9 lg:border-l lg:border-t-0 lg:p-10">
            <div>
              <div className="mb-7 flex flex-wrap gap-2">
                {listing.location && (
                  <span className="border border-[var(--color-line-strong)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-bronze-light)]">
                    {listing.location}
                  </span>
                )}
                {listing.propertyType && (
                  <span className="border border-[var(--color-line-strong)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                    {listing.propertyType}
                  </span>
                )}
              </div>

              <p className="m-0 font-serif text-[clamp(34px,4vw,56px)] font-light italic leading-none text-[var(--color-bronze-light)]">
                {listing.price || "Price on request"}
              </p>
              <h3 className="m-0 mt-6 font-serif text-[clamp(28px,3vw,44px)] font-light leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]">
A slower first look for homes buyers remember.
              </h3>
              <p className="m-0 mt-5 text-[15px] leading-[1.85] text-[var(--color-text-muted)]">
For select upper-market homes, the first impression should feel calm, deliberate, and worth the pause. The full property remains one click away.
              </p>

              {specs.length > 0 && (
                <ul className="mt-8 grid grid-cols-2 gap-px bg-[var(--color-line)]">
                  {specs.map((spec) => (
                    <li key={spec.label} className="bg-[var(--color-surface)] p-4">
                      <span className="block font-serif text-[24px] font-light italic text-[var(--color-text)]">
                        {spec.value}
                      </span>
                      <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                        {spec.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/listings/${listing.slug}`}
                className="inline-flex items-center justify-center rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-[transform,background,border-color] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]"
              >
                Open listing
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsRevealed(false);
                  setProgress(0.18);
                }}
                className="inline-flex items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-[transform,border-color,color] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] motion-reduce:hidden"
              >
                Reset reveal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

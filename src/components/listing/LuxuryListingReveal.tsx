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
  const [progress, setProgress] = useState(0.16);
  const [isDragging, setIsDragging] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const specs = buildSpecs(listing);
  const openPercent = clamp(progress, 0.04, 1);
  const revealLabel = openPercent > 0.68 ? "Draw shut" : "Draw open";
  const leftShift = openPercent * 104;
  const rightShift = openPercent * 104;
  const leftRotate = openPercent * -22;
  const rightRotate = openPercent * 22;
  const fabricDepth = 18 + openPercent * 34;
  const seamGlow = 0.18 + openPercent * 0.52;

  const updateFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });

    if (isDragging) {
      const distanceFromCenter = Math.abs(x - 50) / 50;
      setProgress(clamp(distanceFromCenter, 0.04, 1));
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateFromPointer(event);
  };

  const finishDrag = () => {
    setIsDragging(false);
  };

  const toggleReveal = () => {
    setProgress((current) => (current > 0.62 ? 0.12 : 0.86));
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
            A quieter way to study a significant property: drag the brass pull toward either edge to open the room, then bring it back to close the veil.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.42)] shadow-[0_34px_110px_-70px_rgba(0,0,0,0.95)] lg:grid-cols-[1.16fr_0.84fr]">
          <div
            className="group/reveal relative isolate min-h-[430px] cursor-grab touch-pan-y overflow-hidden bg-[var(--color-bg)] [perspective:1200px] active:cursor-grabbing md:min-h-[580px]"
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
            aria-label="Interactive listing reveal. Drag from the center toward either side to open or close the curtain."
          >
            {listing.heroPhoto ? (
              <Image
                src={listing.heroPhoto}
                alt={listing.address}
                fill
                priority={false}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover scale-[1.02] transition-transform duration-700 ease-[var(--ease-luxe)] group-hover/reveal:scale-[1.05] motion-reduce:scale-100 motion-reduce:transition-none"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[var(--color-surface-2)] text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                No photo
              </div>
            )}

            <div
              className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_var(--reveal-x)_var(--reveal-y),rgba(255,255,255,0.25),transparent_18%),linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.58))] transition-opacity duration-300"
              style={{ opacity: 0.34 + seamGlow * 0.28 }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[28%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(224,192,154,0.2),rgba(255,255,255,0.08)_18%,transparent_62%)] blur-xl transition-opacity duration-300 motion-reduce:hidden"
              style={{ opacity: seamGlow }}
              aria-hidden
            />

            <div
              className="absolute inset-y-0 left-0 z-30 w-[54%] origin-right overflow-hidden border-r border-[rgba(224,192,154,0.38)] bg-[radial-gradient(circle_at_26%_28%,rgba(224,192,154,0.19),transparent_24%),linear-gradient(94deg,rgba(8,7,7,0.99),rgba(27,17,12,0.97)_34%,rgba(66,43,28,0.87)_50%,rgba(18,12,9,0.98)_68%,rgba(5,5,5,0.99))] shadow-[28px_0_74px_-34px_rgba(0,0,0,0.98)] will-change-transform motion-reduce:hidden"
              style={{
                transform: `translateX(-${leftShift}%) rotateY(${leftRotate}deg) translateZ(${fabricDepth}px)`,
                transition: isDragging ? "none" : "transform 560ms var(--ease-luxe)",
              }}
              aria-hidden
            >
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(255,255,255,0.075)_0_1px,transparent_1px_14px),linear-gradient(90deg,rgba(0,0,0,0.42)_0_9px,transparent_9px_28px),radial-gradient(circle_at_36%_45%,rgba(255,255,255,0.12),transparent_20%)]" />
              <div className="absolute inset-0 animate-[curtain-breathe_5.8s_ease-in-out_infinite] opacity-45 [background-image:linear-gradient(112deg,transparent_0%,rgba(255,255,255,0.13)_32%,transparent_46%,rgba(224,192,154,0.11)_62%,transparent_78%)] motion-reduce:animate-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.55),rgba(255,255,255,0.2),rgba(224,192,154,0.22),rgba(0,0,0,0.8))]" />
              <div className="absolute inset-y-0 right-4 w-3 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.24),rgba(39,25,17,0.9),rgba(0,0,0,0.98))] blur-[1px]" />
            </div>

            <div
              className="absolute inset-y-0 right-0 z-30 w-[54%] origin-left overflow-hidden border-l border-[rgba(224,192,154,0.38)] bg-[radial-gradient(circle_at_76%_32%,rgba(224,192,154,0.17),transparent_25%),linear-gradient(86deg,rgba(5,5,5,0.99),rgba(18,12,9,0.98)_30%,rgba(66,43,28,0.87)_50%,rgba(27,17,12,0.97)_66%,rgba(8,7,7,0.99))] shadow-[-28px_0_74px_-34px_rgba(0,0,0,0.98)] will-change-transform motion-reduce:hidden"
              style={{
                transform: `translateX(${rightShift}%) rotateY(${rightRotate}deg) translateZ(${fabricDepth}px)`,
                transition: isDragging ? "none" : "transform 560ms var(--ease-luxe)",
              }}
              aria-hidden
            >
              <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_14px),linear-gradient(90deg,rgba(0,0,0,0.42)_0_10px,transparent_10px_30px),radial-gradient(circle_at_70%_44%,rgba(255,255,255,0.11),transparent_20%)]" />
              <div className="absolute inset-0 animate-[curtain-breathe_6.4s_ease-in-out_infinite_reverse] opacity-45 [background-image:linear-gradient(68deg,transparent_0%,rgba(224,192,154,0.11)_28%,transparent_43%,rgba(255,255,255,0.12)_63%,transparent_80%)] motion-reduce:animate-none" />
              <div className="absolute inset-y-0 left-0 w-16 bg-[linear-gradient(90deg,rgba(0,0,0,0.8),rgba(224,192,154,0.22),rgba(255,255,255,0.2),rgba(0,0,0,0.55),transparent)]" />
              <div className="absolute inset-y-0 left-4 w-3 rounded-full bg-[linear-gradient(90deg,rgba(0,0,0,0.98),rgba(39,25,17,0.9),rgba(255,255,255,0.24))] blur-[1px]" />
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                toggleReveal();
              }}
              className="absolute left-1/2 top-1/2 z-40 flex w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center border border-[rgba(224,192,154,0.52)] bg-[rgba(10,11,13,0.76)] px-5 py-4 text-center shadow-[0_24px_80px_-38px_rgba(0,0,0,0.98)] backdrop-blur-md transition-[transform,border-color,background,opacity] duration-300 ease-[var(--ease-luxe)] hover:-translate-x-1/2 hover:-translate-y-[54%] hover:border-[var(--color-bronze-light)] hover:bg-[rgba(10,11,13,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bronze)]"
              style={{ opacity: openPercent > 0.76 ? 0.28 : 1 }}
              aria-label={`${revealLabel} the listing reveal`}
            >
              <span className="mb-3 h-px w-16 bg-[linear-gradient(90deg,transparent,var(--color-bronze-light),transparent)]" />
              <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-bronze-light)]">
                {revealLabel}
              </span>
              <span className="mt-2 block font-serif text-[27px] font-light italic leading-none text-[var(--color-text)]">
                {listing.price || "Private preview"}
              </span>
              <span className="mt-3 block text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Drag live from center
              </span>
            </button>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(10,11,13,0.76))]" />
            <div className="absolute bottom-5 left-5 z-40 max-w-[78%] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.9)]">
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
                onClick={toggleReveal}
                className="inline-flex items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-[transform,border-color,color] duration-300 ease-[var(--ease-luxe)] hover:-translate-y-0.5 hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] motion-reduce:hidden"
              >
                {revealLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

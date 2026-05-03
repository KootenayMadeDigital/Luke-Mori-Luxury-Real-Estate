"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = {
  photos: string[];
  alt: string;
};

/* Editorial photo gallery with full-screen lightbox.
   - First image is hero (16/9), then a magazine-style mosaic.
   - Click any tile to open the lightbox.
   - Keyboard: ← → to navigate, Esc to close. Image counter pinned bottom-left. */

export function PhotoGallery({ photos, alt }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const total = photos.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % total)),
    [total]
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + total) % total)),
    [total]
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  if (total === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
        {photos.map((src, i) => {
          const span =
            i === 0
              ? "md:col-span-4 md:aspect-[16/9]"
              : i % 7 === 1 || i % 7 === 4
              ? "md:col-span-2 md:aspect-[4/3]"
              : "md:col-span-1 md:aspect-[4/5]";
          return (
            <button
              key={src + i}
              type="button"
              onClick={() => setOpenIndex(i)}
              className={`luxury-card group relative aspect-[4/3] overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] ${span}`}
              aria-label={`View photo ${i + 1} of ${total}`}
            >
              <Image
                src={src}
                alt={`${alt}, frame ${i + 1}`}
                fill
                preload={i === 0}
                sizes={i === 0 ? "(min-width: 1280px) 1180px, 100vw" : "(min-width: 1280px) 290px, (min-width: 768px) 50vw, 100vw"}
                className="luxury-media object-cover"
              />
              {i === 0 && (
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(10,11,13,0.5)]" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-[rgba(10,11,13,0)] transition-colors duration-300 group-hover:bg-[rgba(10,11,13,0.15)]" />
              <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-[1px] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.6)] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-bronze-light)] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <svg viewBox="0 0 16 16" aria-hidden className="size-3">
                  <path
                    d="M2 6 V2 H6 M14 6 V2 H10 M2 10 V14 H6 M14 10 V14 H10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                Expand
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${openIndex + 1} of ${total}`}
          className="fixed inset-0 z-[300] flex flex-col bg-[rgba(7,8,10,0.96)] backdrop-blur-sm"
          onClick={close}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4 sm:px-8">
            <span className="font-serif text-[14px] italic tracking-[0.05em] text-[var(--color-bronze-light)]">
              {String(openIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.72)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text)] shadow-[0_18px_50px_-32px_rgba(0,0,0,0.95)] backdrop-blur-md transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
              aria-label="Close gallery"
            >
              Close
              <svg viewBox="0 0 16 16" aria-hidden className="size-3">
                <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Close gallery"
            className="absolute right-4 top-20 z-[320] inline-flex size-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.78)] text-[var(--color-text)] shadow-[0_18px_54px_-30px_rgba(0,0,0,0.95)] backdrop-blur-md transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] sm:right-6 sm:top-24"
          >
            <svg viewBox="0 0 16 16" aria-hidden className="size-4">
              <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Image */}
          <div className="relative flex-1 cursor-zoom-out" aria-label="Close gallery background">
            <div
              className="absolute left-1/2 top-1/2 h-[calc(100%-1.5rem)] w-[min(92vw,1220px)] -translate-x-1/2 -translate-y-1/2 cursor-default sm:h-[calc(100%-3rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[openIndex]}
                alt={`${alt}, frame ${openIndex + 1}`}
                fill
                sizes="(min-width: 1280px) 1220px, 92vw"
                className="object-contain"
              />
            </div>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="group absolute left-4 top-1/2 z-[310] -translate-y-1/2 inline-flex size-12 items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.58)] text-[var(--color-text)] backdrop-blur-md transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
            >
              <svg viewBox="0 0 16 16" aria-hidden className="size-4 transition-transform group-hover:-translate-x-0.5">
                <path d="M13 8 H3 M7 4 L3 8 L7 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="group absolute right-4 top-1/2 z-[310] -translate-y-1/2 inline-flex size-12 items-center justify-center rounded-[1px] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.58)] text-[var(--color-text)] backdrop-blur-md transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
            >
              <svg viewBox="0 0 16 16" aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5">
                <path d="M3 8 H13 M9 4 L13 8 L9 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="border-t border-[var(--color-line)] px-5 py-4 text-center text-[10px] uppercase tracking-[0.28em] text-[var(--color-text-dim)] sm:px-8">
            {alt}
          </div>
        </div>
      )}
    </>
  );
}

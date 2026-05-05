"use client";

import Image from "next/image";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { LuxuryShaderSurface } from "@/components/effects/LuxuryShaderSurface";

type SoldProof = {
  image: string;
  imageAlt: string;
  status: string;
  address: string;
  area: string;
  type: string;
  offered: string;
};

type Props = {
  lead: SoldProof;
  note: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function FrostedSoldProof({ lead, note }: Props) {
  const [pointer, setPointer] = useState({ x: 36, y: 31 });
  const [revealed, setRevealed] = useState(false);

  const updatePointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });
  };

  const focusStyle = {
    "--lens-x": `${pointer.x}%`,
    "--lens-y": `${pointer.y}%`,
    "--tilt-x": `${(pointer.x - 50) * 0.055}deg`,
    "--tilt-y": `${(50 - pointer.y) * 0.045}deg`,
  } as CSSProperties;

  return (
    <article
      className="luxury-card group relative min-h-[540px] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_34px_100px_-64px_rgba(0,0,0,0.82)]"
      onPointerMove={updatePointer}
      onPointerDown={updatePointer}
      onClick={() => setRevealed((current) => !current)}
      style={focusStyle}
      aria-label={`${lead.address}, sold proof. Public result shown, private details protected.`}
    >
      <Image
        src={lead.image}
        alt={lead.imageAlt}
        fill
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="luxury-media object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        priority
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.10),rgba(10,11,13,0.06)_30%,rgba(10,11,13,0.68)_64%,rgba(10,11,13,0.96))]" />

      <div
        className="pointer-events-none absolute z-30 hidden h-[264px] w-[352px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2px] border border-[rgba(255,255,255,0.44)] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.035)_38%,rgba(224,192,154,0.08)_70%,rgba(255,255,255,0.16))] shadow-[0_30px_90px_-52px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.34)] transition-[opacity,transform] duration-300 ease-[var(--ease-luxe)] [backdrop-filter:blur(7px)_saturate(1.08)_brightness(1.04)] motion-reduce:hidden md:block"
        style={{
          left: "var(--lens-x)",
          top: "var(--lens-y)",
          opacity: revealed ? 0 : 0.92,
          transform: "translate(-50%, -50%) rotateX(var(--tilt-y)) rotateY(var(--tilt-x))",
        }}
        aria-hidden
      >
        <span className="absolute inset-0 rounded-[2px] bg-[linear-gradient(112deg,rgba(255,255,255,0.34),transparent_22%,transparent_64%,rgba(255,255,255,0.18))] opacity-70" />
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.20),transparent_26%),linear-gradient(180deg,rgba(244,236,222,0.10),rgba(10,11,13,0.08))]" />
        <span className="absolute left-5 right-5 top-4 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)]" />
        <span className="absolute inset-x-8 bottom-5 h-px bg-[linear-gradient(90deg,transparent,rgba(224,192,154,0.44),transparent)]" />
      </div>

      <LuxuryShaderSurface effect="proof" pointer={pointer} intensity={0.62} revealed={revealed} className="z-30" />

      <div className="absolute left-6 top-6 z-40 rounded-[1px] border border-[rgba(255,255,255,0.34)] bg-[rgba(10,11,13,0.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_34px_-18px_rgba(0,0,0,0.95)] backdrop-blur-sm">
        {lead.status}
      </div>

      <button
        type="button"
        className="absolute right-5 top-5 z-40 rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(10,11,13,0.74)] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_14px_40px_-28px_rgba(0,0,0,0.95)] transition-[background,border-color,color] duration-300 hover:border-[var(--color-bronze-light)] hover:text-[var(--color-bronze-light)] md:hidden"
        onClick={(event) => {
          event.stopPropagation();
          setRevealed((current) => !current);
        }}
      >
        {revealed ? "Frost" : "Reveal"}
      </button>

      <div className="absolute inset-x-0 bottom-0 z-40 p-7 sm:p-9">
        <div className="mb-6 font-serif text-[62px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,239,229,0.96)] drop-shadow-[0_4px_28px_rgba(0,0,0,0.92)] sm:text-[88px]">
          Sold
        </div>
        <div className="grid grid-cols-1 gap-5 border-t border-[rgba(245,239,229,0.22)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="m-0 mb-3 inline-flex border border-[rgba(255,255,255,0.22)] bg-[rgba(10,11,13,0.54)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.88)] backdrop-blur-[2px]">
              Public result. Private details protected.
            </p>
            <h2 className="m-0 inline-flex bg-[rgba(10,11,13,0.38)] px-3 py-2 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-[2px] sm:text-[44px]">
              {lead.address}
            </h2>
            <p className="m-0 mt-3 inline-flex bg-[rgba(10,11,13,0.34)] px-3 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] backdrop-blur-[2px]">
              {lead.area} · {lead.type}
            </p>
            <p className="m-0 mt-3 max-w-[620px] bg-[rgba(10,11,13,0.34)] px-3 py-2 text-[14px] leading-[1.65] text-white/90 backdrop-blur-[2px]">
              {note}
            </p>
          </div>
          <div className="justify-self-start bg-[rgba(10,11,13,0.34)] px-4 py-2 font-serif text-[30px] italic text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-[2px] sm:justify-self-end">
            {lead.offered}
          </div>
        </div>
      </div>
    </article>
  );
}

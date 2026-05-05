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
  const [pointer, setPointer] = useState({ x: 50, y: 44 });
  const [revealed, setRevealed] = useState(false);

  const updatePointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100);
    const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100);
    setPointer({ x, y });
  };

  const lensStyle = {
    "--lens-x": `${pointer.x}%`,
    "--lens-y": `${pointer.y}%`,
  } as CSSProperties;

  return (
    <article
      className="luxury-card group relative min-h-[540px] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_34px_100px_-64px_rgba(0,0,0,0.82)]"
      onPointerMove={updatePointer}
      onPointerDown={updatePointer}
      onClick={() => setRevealed((current) => !current)}
      style={lensStyle}
      aria-label={`${lead.address}, sold proof. Public result shown, private details protected.`}
    >
      <Image
        src={lead.image}
        alt={lead.imageAlt}
        fill
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="luxury-media object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.16),rgba(10,11,13,0.1)_28%,rgba(10,11,13,0.72)_62%,rgba(10,11,13,0.96))]" />

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-[var(--ease-luxe)] motion-reduce:hidden"
        style={{ opacity: revealed ? 0 : 1 }}
        aria-hidden
      >
        <Image
          src={lead.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-cover blur-[12px] saturate-[0.76] brightness-[0.72] scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_var(--lens-x)_var(--lens-y),transparent_0_118px,rgba(236,228,214,0.18)_156px,rgba(236,228,214,0.48)_100%),linear-gradient(180deg,rgba(236,228,214,0.18),rgba(10,11,13,0.6))]"
          style={{
            WebkitMaskImage: "radial-gradient(circle at var(--lens-x) var(--lens-y), transparent 0 132px, black 182px)",
            maskImage: "radial-gradient(circle at var(--lens-x) var(--lens-y), transparent 0 132px, black 182px)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:44px_44px] opacity-35" />
      </div>

      <div
        className="pointer-events-none absolute z-30 hidden size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,0.58)] shadow-[0_0_0_1px_rgba(10,11,13,0.2),0_20px_60px_-34px_rgba(0,0,0,0.95),inset_0_0_34px_rgba(255,255,255,0.08)] transition-opacity duration-300 motion-reduce:hidden md:block"
        style={{ left: `var(--lens-x)`, top: `var(--lens-y)`, opacity: revealed ? 0 : 0.86 }}
        aria-hidden
      >
        <span className="absolute inset-3 rounded-full border border-[rgba(224,192,154,0.42)]" />
        <span className="absolute left-1/2 top-1/2 h-px w-10 -translate-x-1/2 bg-[rgba(255,255,255,0.52)]" />
        <span className="absolute left-1/2 top-1/2 h-10 w-px -translate-y-1/2 bg-[rgba(255,255,255,0.52)]" />
      </div>

      <LuxuryShaderSurface effect="proof" pointer={pointer} intensity={0.92} revealed={revealed} className="z-30" />

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

      <div className="absolute inset-x-0 bottom-0 z-30 p-7 sm:p-9">
        <div className="mb-6 font-serif text-[62px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,239,229,0.96)] drop-shadow-[0_4px_28px_rgba(0,0,0,0.92)] sm:text-[88px]">
          Sold
        </div>
        <div className="grid grid-cols-1 gap-5 border-t border-[rgba(245,239,229,0.22)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="m-0 mb-3 inline-flex border border-[rgba(255,255,255,0.22)] bg-[rgba(10,11,13,0.44)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze-light)] backdrop-blur-[2px]">
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties, type PointerEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";

const sealStyle = (x: number, y: number, pressure: number, opened: boolean) =>
  ({
    "--seal-x": `${x}%`,
    "--seal-y": `${y}%`,
    "--seal-pressure": pressure,
    "--seal-open": opened ? 1 : 0,
  }) as CSSProperties;

export function PrivateAccess() {
  const [opened, setOpened] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 48, pressure: 0 });

  const moveSeal = (event: PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
    const dx = Math.abs(x - 50) / 50;
    const dy = Math.abs(y - 50) / 50;
    setPointer({ x, y, pressure: Math.max(0.1, 1 - Math.min(1, Math.hypot(dx, dy))) });
  };

  const releaseSeal = () => {
    setOpened(true);
    setPointer((current) => ({ ...current, pressure: 0 }));
  };

  const resetSeal = () => {
    setOpened(false);
    setPointer({ x: 50, y: 48, pressure: 0 });
  };

  return (
    <section
      id="private"
      className="tone-dark tonal-section border-b border-[var(--color-line)] py-28 md:py-36 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src="/generated/dark-lake-atmosphere.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-75 saturate-[0.9] brightness-[1.08]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_54%_46%_at_50%_48%,rgba(10,11,13,0.22)_0%,rgba(10,11,13,0.52)_58%,rgba(10,11,13,0.92)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(10,11,13,0.88)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(10,11,13,0.94)] to-transparent" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mx-auto mb-14 max-w-[820px] text-center">
          <Eyebrow centered>Private Access</Eyebrow>
          <SectionHeading centered className="mt-7">
            Some homes should not
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              start in public.
            </em>
          </SectionHeading>
          <SectionLede align="center" className="mb-0">
            Tell Luke what you are looking for, or what you may sell. If a quieter path makes sense, he can tell you before the market gets involved.
          </SectionLede>
        </Reveal>

        <Reveal delay={120} className="mx-auto max-w-[1080px]">
          <div className="rounded-[2rem] border border-[rgba(224,192,154,0.18)] bg-[rgba(255,255,255,0.045)] p-1.5 shadow-[0_40px_120px_-78px_rgba(0,0,0,0.98)]">
            <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] border border-[rgba(224,192,154,0.14)] bg-[linear-gradient(135deg,rgba(13,12,11,0.96),rgba(30,21,15,0.92)_48%,rgba(9,9,10,0.98))] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(224,192,154,0.16),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(132,162,166,0.08),transparent_28%)]" />
                <div className="absolute inset-x-8 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(224,192,154,0.42),transparent)]" />
              </div>

              <div className="grid min-h-[640px] grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative flex min-h-[430px] items-center justify-center p-8 sm:p-10 lg:min-h-full">
                  <div
                    className="absolute inset-0 transition-opacity duration-700 ease-[var(--ease-luxe)]"
                    style={{ opacity: opened ? 0.34 : 0.18 }}
                    aria-hidden
                  >
                    <Image
                      src="/luke-mori-luxury-horizontal.svg"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-contain p-12 opacity-[0.05] invert"
                      unoptimized
                    />
                  </div>

                  <button
                    type="button"
                    onPointerMove={moveSeal}
                    onPointerDown={moveSeal}
                    onPointerUp={releaseSeal}
                    onPointerCancel={() => setPointer((current) => ({ ...current, pressure: 0 }))}
                    onMouseLeave={() => setPointer((current) => ({ ...current, pressure: 0 }))}
                    onClick={() => setOpened(true)}
                    className="group relative z-20 flex aspect-square w-[min(78vw,360px)] items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bronze-light)] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080706]"
                    style={sealStyle(pointer.x, pointer.y, pointer.pressure, opened)}
                    aria-label={opened ? "Private access opened" : "Open private access seal"}
                    aria-pressed={opened}
                  >
                    <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_var(--seal-x)_var(--seal-y),rgba(255,232,188,0.42),transparent_18%),radial-gradient(circle_at_50%_42%,rgba(82,53,30,0.96),rgba(20,13,9,0.98)_62%,rgba(5,4,4,1)_100%)] shadow-[0_34px_90px_-48px_rgba(0,0,0,1),inset_0_2px_7px_rgba(255,226,174,0.22),inset_0_-18px_30px_rgba(0,0,0,0.5)] transition-[transform,opacity,filter] duration-700 ease-[var(--ease-luxe)] group-hover:scale-[1.015] motion-reduce:transition-none" />
                    <span
                      className="absolute inset-0 rounded-full border border-[rgba(255,224,170,0.52)] transition-transform duration-500 ease-[var(--ease-luxe)] motion-reduce:transition-none"
                      style={{ transform: `scale(${1 - pointer.pressure * 0.025})` }}
                      aria-hidden
                    />
                    <span className="absolute inset-[9%] rounded-full border border-[rgba(255,224,170,0.28)]" aria-hidden />
                    <span className="absolute inset-[17%] rounded-full border border-[rgba(255,224,170,0.18)]" aria-hidden />

                    <span
                      className="absolute inset-0 overflow-hidden rounded-full transition-[transform,opacity] duration-700 ease-[var(--ease-luxe)] motion-reduce:transition-none"
                      style={{
                        clipPath: "polygon(0 0, 52% 0, 48% 100%, 0 100%)",
                        transform: opened ? "translateX(-26%) rotate(-12deg) scale(0.96)" : "translateX(0) rotate(0deg)",
                        opacity: opened ? 0.18 : 1,
                      }}
                      aria-hidden
                    >
                      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_var(--seal-x)_var(--seal-y),rgba(255,235,191,0.34),transparent_21%),linear-gradient(135deg,rgba(119,76,40,0.82),rgba(18,11,8,0.96))]" />
                    </span>
                    <span
                      className="absolute inset-0 overflow-hidden rounded-full transition-[transform,opacity] duration-700 ease-[var(--ease-luxe)] motion-reduce:transition-none"
                      style={{
                        clipPath: "polygon(48% 0, 100% 0, 100% 100%, 52% 100%)",
                        transform: opened ? "translateX(26%) rotate(12deg) scale(0.96)" : "translateX(0) rotate(0deg)",
                        opacity: opened ? 0.18 : 1,
                      }}
                      aria-hidden
                    >
                      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_var(--seal-x)_var(--seal-y),rgba(255,235,191,0.30),transparent_20%),linear-gradient(225deg,rgba(120,78,42,0.82),rgba(18,11,8,0.96))]" />
                    </span>

                    <svg
                      viewBox="0 0 220 220"
                      className="absolute inset-[8%] z-10 size-auto text-[rgba(255,224,170,0.7)] transition-[opacity,transform] duration-700 ease-[var(--ease-luxe)] motion-reduce:transition-none"
                      style={{ opacity: opened ? 0.24 : 0.96, transform: opened ? "scale(1.06)" : `scale(${1 - pointer.pressure * 0.018})` }}
                      aria-hidden
                    >
                      <circle cx="110" cy="110" r="86" fill="none" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="110" cy="110" r="61" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.55" />
                      <path d="M71 116c13-31 25-47 39-47s26 16 39 47" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M76 139h68" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <text x="110" y="159" textAnchor="middle" fontSize="10" letterSpacing="4" fill="currentColor">
                        PRIVATE
                      </text>
                    </svg>

                    <svg
                      viewBox="0 0 220 220"
                      className="absolute inset-[8%] z-20 text-[rgba(255,240,205,0.72)] transition-opacity duration-500 motion-reduce:hidden"
                      style={{ opacity: opened ? 0.76 : pointer.pressure * 0.55 }}
                      aria-hidden
                    >
                      <path d="M108 26l-7 38 12 31-18 33 15 25-9 41" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M113 88l23-16M98 126l-27 14M110 152l31 20" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
                    </svg>

                    <span className="relative z-30 flex flex-col items-center text-center transition-[opacity,transform] duration-700 ease-[var(--ease-luxe)] motion-reduce:transition-none" style={{ opacity: opened ? 0 : 1, transform: opened ? "translateY(8px) scale(0.94)" : undefined }}>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-light)]">Press Seal</span>
                      <span className="mt-3 max-w-[13ch] font-serif text-[34px] font-light italic leading-none text-[var(--color-text)] sm:text-[42px]">
                        Private access
                      </span>
                    </span>
                  </button>

                  <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)] sm:text-[10px]" aria-hidden>
                    <span>{opened ? "Seal opened" : "Press"}</span>
                    <span className="h-px w-10 bg-[var(--color-line-strong)]" />
                    <span>{opened ? "Private path revealed" : "A quieter path"}</span>
                  </div>
                </div>

                <div className="relative flex items-center p-6 sm:p-9 lg:p-12">
                  <div className="w-full rounded-[1.55rem] border border-[rgba(224,192,154,0.18)] bg-[rgba(10,10,10,0.48)] p-1.5 shadow-[0_30px_90px_-64px_rgba(0,0,0,0.96)]">
                    <div className="rounded-[calc(1.55rem-0.375rem)] bg-[linear-gradient(180deg,rgba(19,21,23,0.88),rgba(12,11,10,0.94))] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] sm:p-9">
                      <div className="mb-7 flex flex-wrap gap-2">
                        {[
                          "Quiet Sale",
                          "Private Buyers",
                          "Qualified Interest",
                        ].map((item) => (
                          <span key={item} className="border border-[var(--color-line-strong)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-bronze-light)]">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="overflow-hidden">
                        <div className="transition-[transform,opacity,filter] duration-700 ease-[var(--ease-luxe)] motion-reduce:transition-none" style={{ opacity: opened ? 1 : 0.58, transform: opened ? "translateY(0)" : "translateY(16px)", filter: opened ? "blur(0)" : "blur(2px)" }}>
                          <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                            Confidential by default
                          </p>
                          <h3 className="m-0 mt-5 font-serif text-[clamp(34px,4vw,58px)] font-light leading-[0.98] tracking-[-0.03em] text-[var(--color-text)]">
                            The right buyer does not always come from the public feed.
                          </h3>
                          <p className="m-0 mt-6 max-w-[620px] text-[15px] leading-[1.85] text-[var(--color-text-muted)]">
                            Some sellers need privacy before exposure. Some buyers need access before the right home is public. Luke can help decide whether the conversation should stay quiet, launch publicly, or move in stages.
                          </p>
                        </div>
                      </div>

                      <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <Link
                          href="#consult"
                          className="luxury-button inline-flex items-center justify-center rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-6 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] shadow-[0_18px_46px_-28px_rgba(212,184,150,0.9)] transition-[background,border-color,transform] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-[2px] hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]"
                        >
                          Request Private Access
                        </Link>
                        <Link
                          href="/sellers"
                          className="luxury-button ghost-button inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.025)] px-6 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text)] transition-[background,border-color,color,transform] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-[2px] hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.08)] hover:text-[var(--color-bronze-light)]"
                        >
                          Discuss a Quiet Sale
                        </Link>
                      </div>

                      <button
                        type="button"
                        onClick={resetSeal}
                        className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-dim)] transition-colors duration-300 hover:text-[var(--color-bronze-light)] motion-reduce:hidden"
                      >
                        Reset seal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

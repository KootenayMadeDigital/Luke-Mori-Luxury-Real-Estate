import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages, brandImages, lukeBio } from "@/lib/data";

export function MoriStandard() {
  return (
    <section
      id="standard"
      className="tone-ivory tonal-section py-32 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <svg className="size-full" preserveAspectRatio="none" viewBox="0 0 1600 1000">
          <line x1="0" y1="900" x2="1600" y2="100" stroke="#b08a5b" strokeWidth="0.5" />
          <line x1="0" y1="700" x2="1600" y2="-100" stroke="#b08a5b" strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal>
            <div className="luxury-card group rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.05)] p-1.5 transition-[transform,border-color,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-bronze)]">
              <div className="tone-dark relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[var(--color-surface)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
                <Image
                  src={siteImages.lukePortrait}
                  alt="Luke Mori"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="luxury-media object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,11,13,0.88)] via-[rgba(10,11,13,0.1)] to-transparent" />
                <div className="pointer-events-none absolute inset-4 rounded-[1.45rem] border border-[rgba(212,184,150,0.2)]" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-bronze-light)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)]">
                      Realtor
                    </div>
                    <div className="mt-2 font-serif text-[26px] font-light text-[var(--color-text)]">
                      Luke Mori
                    </div>
                  </div>
                  <div className="text-right text-[11px] font-bold uppercase tracking-[0.18em] text-[rgba(239,234,226,0.86)] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                    Nelson, B.C.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>The Mori Standard</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="m-0 mb-8 mt-7 font-serif font-light leading-[1.02] tracking-[-0.015em] [font-size:clamp(38px,5vw,68px)]">
                Local knowledge,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  used where it counts.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={240}>
              <p className="m-0 mb-10 max-w-[620px] text-[18px] font-medium leading-[1.75] text-[var(--color-text-muted)]">
                {lukeBio.short} Sellers and buyers get direct advice, strong marketing, and practical local guidance from the first conversation.
              </p>
            </Reveal>

            <ul className="space-y-7">
              {lukeBio.pillars.map((item, i) => (
                <Reveal
                  key={item.k}
                  delay={300 + i * 100}
                  as="li"
                  className="luxury-card group grid grid-cols-[40px_1fr] gap-6 border-t border-[var(--color-line)] px-4 pb-5 pt-7 transition-[background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[rgba(212,184,150,0.045)]"
                >
                  <span className="font-serif text-[18px] italic text-[var(--color-bronze)]">
                    {item.k}
                  </span>
                  <div>
                    <h3 className="m-0 mb-2 font-serif text-[22px] font-light leading-[1.25] tracking-[-0.005em] text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="m-0 max-w-[540px] text-[16px] font-medium leading-[1.7] text-[var(--color-text-muted)]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={620} className="luxury-card group mt-12 border-t border-[var(--color-line)] px-4 pb-4 pt-8 transition-[background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[rgba(212,184,150,0.045)]">
              <div className="flex flex-col gap-5 rounded-2xl border border-[var(--color-line)] bg-[rgba(255,247,235,0.42)] p-5 shadow-[0_18px_50px_rgba(63,46,31,0.08)] sm:flex-row sm:items-center sm:gap-6">
                <div className="relative h-14 w-52 shrink-0">
                  <Image
                    src={brandImages.signature}
                    alt="Luke Mori signature"
                    fill
                    sizes="210px"
                    className="object-contain object-left"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(14%) sepia(18%) saturate(1068%) hue-rotate(347deg) brightness(92%) contrast(94%)",
                    }}
                  />
                </div>
                <span className="text-microcopy font-sans uppercase text-[var(--color-text-muted)]">
                  Luke Mori, Nelson and Kootenay Lake
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

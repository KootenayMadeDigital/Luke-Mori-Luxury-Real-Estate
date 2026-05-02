import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { brandImages, lukeBio } from "@/lib/data";

/* The principal section — Luke's real portrait, signature, and the three
   working principles that define the practice. */

export function MoriStandard() {
  return (
    <section
      id="standard"
      className="relative overflow-hidden bg-[var(--color-bg)] py-32 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <svg className="size-full" preserveAspectRatio="none" viewBox="0 0 1600 1000">
          <line x1="0" y1="900" x2="1600" y2="100" stroke="#b08a5b" strokeWidth="0.5" />
          <line x1="0" y1="700" x2="1600" y2="-100" stroke="#b08a5b" strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Real portrait of Luke, framed editorially */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)]">
              <Image
                src={brandImages.lukePortrait}
                alt="Luke Mori, Principal"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,11,13,0.85)] via-[rgba(10,11,13,0.1)] to-transparent" />
              {/* Inset frame line */}
              <div className="pointer-events-none absolute inset-3 border border-[rgba(212,184,150,0.2)]" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                    Principal
                  </div>
                  <div className="mt-2 font-serif text-[24px] font-light text-[var(--color-text)]">
                    Luke Mori
                  </div>
                </div>
                <div className="text-right text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                  Nelson, B.C.
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>The Mori Standard</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="m-0 mb-8 mt-7 font-serif font-light leading-[1.05] tracking-[-0.01em] [font-size:clamp(36px,5vw,64px)]">
                A different kind of
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  local expert.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={240}>
              <p className="m-0 mb-10 max-w-[600px] text-[17px] leading-[1.7] text-[var(--color-text-muted)]">
                {lukeBio.short} The work is built on three principles that the rest of the local
                market still hasn&apos;t caught up to.
              </p>
            </Reveal>

            <ul className="space-y-7">
              {lukeBio.pillars.map((item, i) => (
                <Reveal
                  key={item.k}
                  delay={300 + i * 100}
                  as="li"
                  className="grid grid-cols-[40px_1fr] gap-6 border-t border-[var(--color-line)] pt-7"
                >
                  <span className="font-serif text-[18px] italic text-[var(--color-bronze)]">
                    {item.k}
                  </span>
                  <div>
                    <h4 className="m-0 mb-2 font-serif text-[22px] font-normal leading-[1.25] tracking-[-0.005em] text-[var(--color-text)]">
                      {item.title}
                    </h4>
                    <p className="m-0 max-w-[540px] text-[15px] leading-[1.65] text-[var(--color-text-muted)]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={620} className="mt-12 border-t border-[var(--color-line)] pt-8">
              <div className="flex items-center gap-6">
                <div className="relative h-12 w-44">
                  <Image
                    src={brandImages.signature}
                    alt="Luke Mori signature"
                    fill
                    sizes="180px"
                    className="object-contain object-left"
                    style={{
                      filter: "brightness(0) saturate(100%) invert(85%) sepia(15%) saturate(450%) hue-rotate(8deg) brightness(95%)",
                    }}
                  />
                </div>
                <span className="font-serif text-[14px] italic text-[var(--color-text-dim)]">
                  Luke Mori — Principal, Luxury Division
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

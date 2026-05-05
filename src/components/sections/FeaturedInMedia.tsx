import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pressLogos } from "@/lib/data";

const logoScale: Record<string, string> = {
  "Ryan Serhant": "scale-[0.96] sm:scale-[1.04] lg:scale-[1.16] xl:scale-[1.2]",
  "BC Luxury Homes": "scale-[1.02] sm:scale-[1.12] lg:scale-[1.24] xl:scale-[1.28]",
  "NYC Journal": "scale-[0.94] sm:scale-[1.08] lg:scale-[1.28] xl:scale-[1.3]",
  "Truly Classy Luxury": "scale-[0.98] sm:scale-[1.16] lg:scale-[1.24] xl:scale-[1.28]",
  "Metropolitan Design": "scale-[0.96] sm:scale-[1.08] lg:scale-[1.2] xl:scale-[1.22]",
  "Lifestyle News": "scale-[1] sm:scale-[1.08] lg:scale-[1.22] xl:scale-[1.26]",
  Deluxshionist: "scale-[1.04] sm:scale-[1.16] lg:scale-[1.3] xl:scale-[1.34]",
  "Design Tellers": "scale-[1] sm:scale-[1.12] lg:scale-[1.26] xl:scale-[1.3]",
  Narcity: "scale-[1] sm:scale-[1.1] lg:scale-[1.24] xl:scale-[1.3]",
};

export function FeaturedInMedia() {
  return (
    <section id="featured-in" className="tone-ivory tonal-section relative overflow-hidden border-y border-[var(--color-line)] py-24 md:py-32 xl:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute left-[-14%] top-[-24%] h-[520px] w-[520px] rounded-full bg-[rgba(212,184,150,0.08)] blur-[150px]" />
        <div className="absolute bottom-[-28%] right-[-16%] h-[560px] w-[560px] rounded-full bg-[rgba(255,255,255,0.04)] blur-[160px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mx-auto mb-14 max-w-[820px] text-center">
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--color-bronze)]">
            Featured In
          </div>
          <h2 className="m-0 font-serif text-[clamp(42px,5.8vw,86px)] font-light leading-[0.96] tracking-[-0.02em] text-[var(--color-text)]">
            Featured across
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              luxury media.
            </em>
          </h2>
          <p className="mx-auto mt-7 max-w-[650px] text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
            Media coverage gives sellers and buyers one more reason to trust the name before they call.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative left-1/2 w-[calc(100vw-1.5rem)] max-w-[1760px] -translate-x-1/2 sm:w-[calc(100vw-3rem)] lg:w-[calc(100vw-5rem)] 2xl:w-[calc(100vw-7rem)]">
          <div className="rounded-[2rem] border border-[rgba(70,54,34,0.18)] bg-[rgba(255,255,255,0.18)] p-1.5 shadow-[0_42px_130px_-82px_rgba(0,0,0,0.95)] sm:rounded-[2.5rem] sm:p-2 lg:rounded-[3rem] lg:p-2.5">
            <div className="rounded-[calc(2rem-0.375rem)] bg-[linear-gradient(135deg,rgba(10,11,13,0.96),rgba(24,23,20,0.9)_48%,rgba(12,11,10,0.94))] px-3 py-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-28px_80px_rgba(212,184,150,0.045)] sm:rounded-[calc(2.5rem-0.5rem)] sm:px-5 sm:py-7 md:px-7 lg:rounded-[calc(3rem-0.625rem)] lg:px-8 lg:py-10 xl:px-10 xl:py-12 2xl:px-12">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5 2xl:gap-6">
                {pressLogos.map((logo, i) => (
                  <Reveal key={logo.name} delay={i * 45}>
                    <div className="group flex h-28 items-center justify-center overflow-hidden rounded-[1.35rem] border border-[rgba(245,239,229,0.12)] bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.026))] px-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.075)] transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(212,184,150,0.38)] hover:bg-[rgba(212,184,150,0.075)] sm:h-32 sm:px-6 md:h-[136px] lg:h-36 lg:px-7 xl:h-[156px] xl:px-8 2xl:h-[168px]" title={logo.name}>
                      <div className={`relative h-20 w-full opacity-100 transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [filter:brightness(0)_invert(1)] group-hover:[filter:none] sm:h-24 lg:h-28 xl:h-32 2xl:h-36 ${logoScale[logo.name] ?? "scale-[1.18] lg:scale-[1.26] xl:scale-[1.3]"}`}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="(min-width: 1536px) 16vw, (min-width: 1280px) 18vw, (min-width: 1024px) 28vw, (min-width: 640px) 44vw, 82vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

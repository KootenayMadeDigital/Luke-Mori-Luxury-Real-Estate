import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pressLogos } from "@/lib/data";

const logoScale: Record<string, string> = {
  "Ryan Serhant": "scale-[0.96] lg:scale-[1.02]",
  "BC Luxury Homes": "scale-[1.08] lg:scale-[1.08]",
  "NYC Journal": "scale-[1.12] lg:scale-[1.08]",
  "Truly Classy Luxury": "scale-[0.86] sm:scale-[0.94] lg:scale-[1]",
  "Metropolitan Design": "scale-[0.72] sm:scale-[0.82] lg:scale-[0.9]",
  "Lifestyle News": "scale-[1.02] lg:scale-[1.02]",
  Deluxshionist: "scale-[1.2] lg:scale-[1.08]",
  "Design Tellers": "scale-[1.12] lg:scale-[1.06]",
  Narcity: "scale-[1.04] lg:scale-[1.02]",
};

export function FeaturedInMedia() {
  return (
    <section id="featured-in" className="tone-dark tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
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
            Recognition across real estate, luxury, design, lifestyle, and regional publications adds another layer of trust before the first private conversation.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2.5rem] border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] p-2 shadow-[0_34px_110px_-70px_rgba(0,0,0,0.95)]">
            <div className="rounded-[calc(2.5rem-0.5rem)] bg-[linear-gradient(135deg,rgba(10,11,13,0.92),rgba(24,24,22,0.82))] px-5 py-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.065)] sm:px-8 md:px-10 md:py-12">
              <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
                {pressLogos.map((logo, i) => (
                  <Reveal
                    key={logo.name}
                    delay={i * 45}
                    className="w-full sm:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1.2rem)]"
                  >
                    <div className="group flex h-28 items-center justify-center overflow-hidden rounded-[1.4rem] border border-[rgba(245,239,229,0.12)] bg-[rgba(255,255,255,0.04)] px-8 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(212,184,150,0.36)] hover:bg-[rgba(212,184,150,0.07)] sm:h-30 sm:px-6" title={logo.name}>
                      <div className={`relative h-20 w-full opacity-100 transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [filter:brightness(0)_invert(1)] group-hover:[filter:none] lg:h-16 ${logoScale[logo.name] ?? "scale-[1.22] lg:scale-[1.06]"}`}>
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          fill
                          sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 50vw"
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

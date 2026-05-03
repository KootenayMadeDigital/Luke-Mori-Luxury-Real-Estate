import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pressLogos } from "@/lib/data";

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
            Media proof belongs
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              on the wall.
            </em>
          </h2>
          <p className="mx-auto mt-7 max-w-[650px] text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
            Press visibility supports the private advisory frame: Luke already has the public recognition. The site should make that recognition impossible to miss.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2.5rem] border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] p-2 shadow-[0_34px_110px_-70px_rgba(0,0,0,0.95)]">
            <div className="rounded-[calc(2.5rem-0.5rem)] bg-[linear-gradient(135deg,rgba(10,11,13,0.92),rgba(24,24,22,0.82))] px-5 py-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.065)] sm:px-8 md:px-10 md:py-12">
              <div className="grid grid-cols-2 items-center gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
                {pressLogos.map((logo, i) => (
                  <Reveal key={logo.name} delay={i * 45}>
                    <div className="group flex h-28 items-center justify-center rounded-[1.4rem] border border-[rgba(245,239,229,0.08)] bg-[rgba(255,255,255,0.025)] px-6 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[rgba(212,184,150,0.34)] hover:bg-[rgba(212,184,150,0.055)]" title={logo.name}>
                      <div className="relative h-14 w-full opacity-[0.92] grayscale transition-[opacity,filter,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035] group-hover:opacity-100 group-hover:grayscale-0">
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

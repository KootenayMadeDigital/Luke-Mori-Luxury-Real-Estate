import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { pressLogos } from "@/lib/data";

export function PressStrip() {
  return (
    <section className="tone-walnut tonal-section border-y border-[var(--color-line)] py-20 md:py-28">
      <div className="mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.26fr_1fr] lg:items-center lg:gap-16 xl:gap-20">
          <Reveal>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Luxury Media
              </span>
              <p className="m-0 mt-5 max-w-[420px] font-serif text-[34px] font-light leading-[1.02] tracking-[-0.015em] text-[var(--color-text)] md:text-[46px] lg:text-[52px]">
                I have been featured in real estate, luxury, design, and lifestyle media.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
            {pressLogos.slice(0, 6).map((logo, i) => (
              <Reveal key={logo.name} delay={i * 60}>
                <div
                  className="luxury-card group rounded-[1.75rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.035)] p-1.5 transition-[border-color,background,transform,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.065)]"
                  title={logo.name}
                >
                  <div className="relative h-32 rounded-[calc(1.75rem-0.375rem)] bg-[rgba(10,11,13,0.48)] opacity-[0.72] grayscale transition-[opacity,filter,transform] duration-700 ease-[var(--ease-luxe)] group-hover:opacity-100 group-hover:grayscale-0 sm:h-36 lg:h-40 xl:h-44 2xl:h-48">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="(min-width: 1536px) 15vw, (min-width: 1280px) 16vw, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-1.5 sm:p-2"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

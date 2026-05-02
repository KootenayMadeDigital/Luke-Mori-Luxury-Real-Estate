import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { pressLogos } from "@/lib/data";

export function PressStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[#07080a] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.36fr_1fr] lg:items-center lg:gap-12">
          <Reveal>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                Luxury Media
              </span>
              <p className="m-0 mt-3 max-w-[310px] font-serif text-[26px] font-light leading-[1.08] text-[var(--color-text)]">
                Press signals that support the private advisory frame.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
            {pressLogos.slice(0, 6).map((logo, i) => (
              <Reveal key={logo.name} delay={i * 60}>
                <div
                  className="group rounded-[1.25rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.025)] p-1 transition-[border-color,background,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.055)]"
                  title={logo.name}
                >
                  <div className="relative h-16 rounded-[calc(1.25rem-0.25rem)] bg-[rgba(10,11,13,0.56)] opacity-[0.62] grayscale transition-[opacity,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:grayscale-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      sizes="(min-width: 1280px) 160px, (min-width: 640px) 33vw, 50vw"
                      className="object-contain p-4"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

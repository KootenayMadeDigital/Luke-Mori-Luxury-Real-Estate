import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { pressLogos } from "@/lib/data";

/* "As featured in" — uses Luke's actual press logos rendered through
   next/image. Continuous marquee with subtle gradient masks at the edges. */

export function PressStrip() {
  // Duplicate so the marquee loops continuously.
  const items = [...pressLogos, ...pressLogos];

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-14">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)] md:border-r md:border-[var(--color-line)] md:pr-8">
            Featured In
          </span>
          <div className="no-scrollbar relative w-full overflow-hidden">
            <div
              className="flex w-max items-center gap-16 whitespace-nowrap"
              style={{ animation: "marquee 50s linear infinite" }}
            >
              {items.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="relative flex h-10 w-32 items-center justify-center opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-12 md:w-40"
                  title={logo.name}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { credentials } from "@/lib/data";

/* A discreet credentials hairline placed directly under the hero.
   Uses Luke Mori's real public proof signals as the concept's headline ledger. */

export function CredentialsStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-bg)] py-10 md:py-12">
      <Container>
        <div className="grid grid-cols-2 items-center gap-y-8 md:grid-cols-[auto_1fr] md:gap-x-12">
          <Reveal className="col-span-2 flex items-center gap-4 md:col-span-1">
            <span className="block h-px w-10 bg-[var(--color-bronze)]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
              On the Record
            </span>
          </Reveal>

          <ul className="col-span-2 grid grid-cols-2 gap-y-6 md:col-span-1 md:grid-cols-4 md:gap-x-8">
            {credentials.map((c, i) => (
              <Reveal
                key={c.label}
                as="li"
                delay={i * 80}
                className="flex flex-col gap-1.5 border-l border-[var(--color-line)] pl-5 md:pl-6"
              >
                <span className="font-serif text-[24px] font-light leading-none tracking-[-0.005em] text-[var(--color-text)] md:text-[28px]">
                  {c.value}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  {c.label}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

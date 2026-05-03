import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { credentials } from "@/lib/data";

export function PublicReceipts() {
  return (
    <section className="tone-walnut tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute left-[-10%] top-[-25%] h-[420px] w-[420px] rounded-full bg-[rgba(212,184,150,0.1)] blur-[130px]" />
        <div className="absolute bottom-[-30%] right-[-12%] h-[520px] w-[520px] rounded-full bg-[rgba(132,162,166,0.07)] blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="max-w-[900px]">
          <Eyebrow>Proven Results</Eyebrow>
          <h2 className="m-0 mt-7 max-w-[13ch] font-serif text-[clamp(40px,5.4vw,74px)] font-light leading-[0.96] tracking-[-0.018em] text-[var(--color-text)]">
            Experience
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              you can verify.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.56)] shadow-[0_34px_90px_-62px_rgba(0,0,0,0.95)]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {credentials.map((c) => (
              <div key={c.label} className="border-b border-r border-[var(--color-line)] p-6 last:border-r-0 md:border-b-0 md:p-8">
                <span className="block font-serif text-[32px] font-light leading-none tracking-[-0.01em] text-[var(--color-bronze-light)] md:text-[42px]">
                  {c.value}
                </span>
                <span className="mt-4 block max-w-[14ch] text-[11px] font-semibold uppercase leading-[1.55] tracking-[0.22em] text-[var(--color-text-muted)]">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { credentials } from "@/lib/data";

type Props = {
  firstPerson?: boolean;
};

export function CredentialsStrip({ firstPerson = false }: Props) {
  return (
    <section className="tone-office tonal-section py-12 md:py-14">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[rgba(212,184,150,0.045)] p-1.5">
            <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[var(--color-bg)] md:grid-cols-[0.72fr_1.28fr]">
              <div className="flex flex-col justify-between border-b border-[var(--color-line)] p-6 md:border-b-0 md:border-r md:p-8">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                    At a Glance
                  </span>
                  <h2 className="m-0 mt-4 max-w-[14ch] font-serif text-[31px] font-light leading-[1.02] tracking-[-0.01em] text-[var(--color-text)] md:text-[38px]">
                    {firstPerson ? "My record before the first call." : "Confidence before the first call."}
                  </h2>
                </div>
                <p className="m-0 mt-7 max-w-[380px] text-[13px] leading-[1.75] text-[var(--color-text-muted)]">
                  {firstPerson
                    ? "Before you share an address or book a tour, you can see the sales record, awards, press, and local experience behind my guidance."
                    : "Before you share an address or book a tour, you can see the sales record, awards, press, and local experience behind the guidance."}
                </p>
              </div>

              <ul className="grid grid-cols-2 md:grid-cols-4">
                {credentials.map((c, i) => (
                  <li
                    key={c.label}
                    className="border-b border-r border-[var(--color-line)] p-5 last:border-r-0 md:border-b-0 md:p-7"
                  >
                    <Reveal delay={i * 70}>
                      <span className="block font-serif text-[30px] font-light leading-none tracking-[-0.01em] text-[var(--color-bronze-light)] md:text-[36px]">
                        {c.value}
                      </span>
                      <span className="mt-4 block max-w-[12ch] text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        {c.label}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

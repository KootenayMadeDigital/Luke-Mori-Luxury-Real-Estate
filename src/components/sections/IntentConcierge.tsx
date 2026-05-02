import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { visitorIntents } from "@/lib/data";

function ConciergeArrow() {
  return (
    <span className="ml-auto inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[rgba(212,184,150,0.1)] text-[var(--color-bronze-light)] transition-[transform,background,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:bg-[var(--color-bronze)] group-hover:text-[var(--color-bg)]">
      <svg viewBox="0 0 16 16" aria-hidden className="size-3.5">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.15"
        />
      </svg>
    </span>
  );
}

export function IntentConcierge() {
  return (
    <section
      id="concierge"
      aria-labelledby="concierge-title"
      className="relative z-20 bg-[var(--color-bg)] pb-20 md:pb-28"
    >
      <Container>
        <Reveal className="-mt-12 md:-mt-16">
          <div className="rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.055)] p-1.5 shadow-[0_32px_90px_-52px_rgba(176,138,91,0.75)]">
            <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[linear-gradient(135deg,rgba(19,21,23,0.98),rgba(10,11,13,0.96)_55%,rgba(27,24,19,0.94))] p-5 sm:p-7 lg:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.16]"
                style={{
                  background:
                    "radial-gradient(circle at 12% 10%, rgba(212,184,150,0.28), transparent 30%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08), transparent 26%)",
                }}
              />

              <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
                <div className="flex flex-col justify-between rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(10,11,13,0.48)] p-6 sm:p-8">
                  <div>
                    <div className="mb-5 inline-flex rounded-full border border-[var(--color-line-strong)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                      Private Concierge
                    </div>
                    <h2
                      id="concierge-title"
                      className="m-0 max-w-[11ch] font-serif text-[clamp(34px,5vw,58px)] font-light leading-[0.98] tracking-[-0.015em] text-[var(--color-text)]"
                    >
                      Choose the door that matches your intent.
                    </h2>
                  </div>
                  <p className="mt-8 max-w-[360px] text-[14px] leading-[1.75] text-[var(--color-text-muted)]">
                    Luxury real estate is not one funnel. Sellers, private buyers, relocators, and brokerages need different rooms, different language, and different proof.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {visitorIntents.map((intent, index) => {
                    const external = intent.href.startsWith("http");
                    return (
                      <a
                        key={intent.eyebrow}
                        href={intent.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="group rounded-[1.45rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.035)] p-1 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(255,255,255,0.055)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-bronze-light)]"
                      >
                        <div className="flex h-full flex-col rounded-[calc(1.45rem-0.25rem)] bg-[rgba(10,11,13,0.54)] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.055)] sm:p-6">
                          <div className="mb-6 flex items-center justify-between gap-4">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                              {intent.eyebrow}
                            </span>
                            <span className="font-serif text-[18px] italic text-[var(--color-text-dim)]">
                              0{index + 1}
                            </span>
                          </div>
                          <h3 className="m-0 max-w-[15ch] font-serif text-[25px] font-light leading-[1.05] tracking-[-0.01em] text-[var(--color-text)]">
                            {intent.title}
                          </h3>
                          <p className="mt-5 grow text-[13px] leading-[1.7] text-[var(--color-text-muted)]">
                            {intent.body}
                          </p>
                          <p className="mt-5 border-t border-[var(--color-line)] pt-4 text-[11px] leading-[1.6] uppercase tracking-[0.16em] text-[var(--color-text-dim)]">
                            {intent.note}
                          </p>
                          <span className="mt-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bronze-light)]">
                            {intent.cta}
                            <ConciergeArrow />
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

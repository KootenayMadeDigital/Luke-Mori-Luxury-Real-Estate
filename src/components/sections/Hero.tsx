import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { contact, heroProofSignals } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-start overflow-hidden pb-5 pt-[clamp(128px,15svh,146px)] sm:items-center sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-0 z-0 bg-[var(--color-bg)]" aria-hidden>
        <HeroVideo />
        <div className="absolute inset-0 bg-[rgba(10,11,13,0.05)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,184,150,0.11),transparent_27%),radial-gradient(circle_at_82%_36%,rgba(255,255,255,0.05),transparent_24%),linear-gradient(90deg,rgba(10,11,13,0.78)_0%,rgba(10,11,13,0.25)_44%,rgba(10,11,13,0.66)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.36)_0%,rgba(10,11,13,0)_42%,rgba(10,11,13,0.68)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] translate-y-[clamp(54px,7svh,76px)] grid-cols-1 items-start gap-10 px-5 sm:translate-y-0 sm:px-8 md:px-10 lg:grid-cols-[1.02fr_0.74fr] lg:gap-18 lg:px-12 xl:px-14">
        <div>
          <Reveal>
            <h1 className="m-0 max-w-[12.5ch] font-serif font-light leading-[0.93] tracking-[-0.025em] text-[var(--color-text)] drop-shadow-[0_8px_34px_rgba(0,0,0,0.92)] [font-size:clamp(50px,8.6vw,132px)]">
              Move with a clear plan,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                in the Kootenays.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="m-0 mt-6 max-w-[650px] font-light leading-[1.68] text-[rgba(245,239,229,0.84)] drop-shadow-[0_4px_22px_rgba(0,0,0,0.9)] [font-size:clamp(15px,1.45vw,20px)] sm:mt-7">
              Buy or sell lakefront homes, view properties, acreage, and second homes across Nelson and Kootenay Lake with clear local guidance from the start.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-7 grid max-w-[620px] grid-cols-3 gap-2 border-y border-[var(--color-line)] py-4 lg:hidden">
              {heroProofSignals.map((signal) => (
                <li key={signal.label} className="min-w-0">
                  <span className="block font-serif text-[20px] font-light leading-none text-[var(--color-bronze-light)]">
                    {signal.value}
                  </span>
                  <span className="mt-2 block text-[9px] font-semibold uppercase leading-[1.3] tracking-[0.08em] text-[rgba(245,239,229,0.72)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                    {signal.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-5 hidden flex-col gap-3 sm:mt-8 sm:flex sm:flex-row sm:flex-wrap">
              <Button href="#sellers" variant="primary" size="lg" arrow>
                Plan a Sale
              </Button>
              <Button href="/listings/luxury" variant="ghost" size="lg" arrow>
                Find the Right Property
              </Button>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-4 hidden flex-wrap items-center gap-x-5 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)] sm:mt-7 sm:flex sm:gap-x-6 sm:text-[11px] sm:tracking-[0.2em]">
              <a href="/buyers/relocation" className="transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[var(--color-bronze-light)]">
                Relocation Guide
              </a>
              <span className="h-px w-8 bg-[var(--color-line-strong)]" aria-hidden />
              <a href="#consult" className="transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[var(--color-bronze-light)]">
                Talk to Luke
              </a>
              <span className="h-px w-8 bg-[var(--color-line-strong)]" aria-hidden />
              <span>Nelson · North Shore · Balfour · Kaslo</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <aside className="hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(212,184,150,0.055)] p-1.5 shadow-[0_34px_90px_-54px_rgba(0,0,0,0.95)] lg:block lg:translate-y-2 xl:translate-y-4">
            <div className="rounded-[calc(2rem-0.375rem)] bg-[rgba(10,11,13,0.76)] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.07)] sm:p-6 lg:p-7">
              <div className="flex items-start justify-between gap-6 border-b border-[var(--color-line)] pb-6">
                <div>
                  <p className="m-0 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-bronze)]">
                    Why Clients Trust Luke
                  </p>
                  <h2 className="m-0 mt-3 max-w-[13ch] font-serif text-[34px] font-light leading-[1] tracking-[-0.01em] text-[var(--color-text)] sm:text-[40px]">
                    Know the area before you move.
                  </h2>
                </div>
                <div className="hidden rounded-full border border-[var(--color-line)] px-3 py-2 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)] sm:block">
                  Local
                  <br />
                  Guidance
                </div>
              </div>

              <ul className="divide-y divide-[var(--color-line)]">
                {heroProofSignals.map((signal) => (
                  <li key={signal.label} className="grid grid-cols-[0.46fr_1fr] gap-5 py-5">
                    <span className="font-serif text-[28px] font-light leading-none tracking-[-0.01em] text-[var(--color-bronze-light)]">
                      {signal.value}
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text)]">
                        {signal.label}
                      </span>
                      <span className="mt-2 block text-[12px] leading-[1.6] text-[var(--color-text-muted)]">
                        {signal.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 grid grid-cols-1 gap-3 border-t border-[var(--color-line)] pt-5 sm:grid-cols-2">
                <a
                  href={contact.phoneHref}
                  className="rounded-full border border-[var(--color-line)] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-[border-color,color,background] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.07)] hover:text-[var(--color-bronze-light)]"
                >
                  {contact.phone}
                </a>
                <a
                  href={contact.emailHref}
                  className="rounded-full border border-[var(--color-line)] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-[border-color,color,background] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[var(--color-bronze)] hover:bg-[rgba(212,184,150,0.07)] hover:text-[var(--color-bronze-light)]"
                >
                  Direct email
                </a>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>

      <div className="absolute inset-x-5 bottom-8 z-20 flex flex-col gap-3 sm:hidden">
        <Button href="#sellers" variant="primary" size="lg" arrow full>
          Plan a Sale
        </Button>
        <Button href="/listings/luxury" variant="ghost" size="lg" arrow full>
          Find the Right Property
        </Button>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--color-text-dim)] sm:flex"
        aria-hidden
      >
        <span>Scroll</span>
        <span className="relative block h-14 w-px overflow-hidden bg-gradient-to-b from-[var(--color-bronze)] to-transparent">
          <span
            className="absolute left-0 top-0 block h-full w-px bg-gradient-to-b from-transparent to-[var(--color-bronze)]"
            style={{ animation: "scrollLineMove 2.4s cubic-bezier(0.16,1,0.3,1) infinite" }}
          />
        </span>
      </div>
    </section>
  );
}

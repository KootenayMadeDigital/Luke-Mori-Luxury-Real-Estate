import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/* The principal / "about" treatment — establishes the human authority behind
   the brand without dropping into "meet your realtor" cliché. */

export function MoriStandard() {
  return (
    <section
      id="standard"
      className="relative overflow-hidden bg-[var(--color-bg)] py-32 md:py-36"
    >
      {/* Decorative diagonal hairline */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <svg className="size-full" preserveAspectRatio="none" viewBox="0 0 1600 1000">
          <line x1="0" y1="900" x2="1600" y2="100" stroke="#b08a5b" strokeWidth="0.5" />
          <line x1="0" y1="700" x2="1600" y2="-100" stroke="#b08a5b" strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Portrait placeholder — editorial frame, not a stock smile */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)]">
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="size-full" aria-hidden>
                <defs>
                  <linearGradient id="portrait-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a1610" />
                    <stop offset="100%" stopColor="#08090b" />
                  </linearGradient>
                  <radialGradient id="portrait-light" cx="50%" cy="38%" r="40%">
                    <stop offset="0%" stopColor="#d4b896" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#d4b896" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="400" height="500" fill="url(#portrait-bg)" />
                <rect width="400" height="500" fill="url(#portrait-light)" />
                {/* Stylised portrait silhouette */}
                <ellipse cx="200" cy="200" rx="58" ry="72" fill="#0c0a07" opacity="0.85" />
                <path
                  d="M100 480 Q100 340 200 320 Q300 340 300 480 Z"
                  fill="#0c0a07"
                  opacity="0.85"
                />
                {/* Frame inset */}
                <rect x="16" y="16" width="368" height="468" fill="none" stroke="#b08a5b" strokeOpacity="0.18" strokeWidth="1" />
              </svg>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,11,13,0.7)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                    Principal
                  </div>
                  <div className="mt-2 font-serif text-[22px] font-light text-[var(--color-text)]">
                    Luke Mori
                  </div>
                </div>
                <div className="text-right text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                  Nelson, B.C.
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>The Mori Standard</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="m-0 mb-8 mt-7 font-serif font-light leading-[1.05] tracking-[-0.01em] [font-size:clamp(36px,5vw,64px)]">
                A different kind of
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  local expert.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={240}>
              <p className="m-0 mb-10 max-w-[600px] text-[17px] leading-[1.7] text-[var(--color-text-muted)]">
                Luke represents Nelson and Kootenay Lake&apos;s most considered properties — from
                lakefront estates on Johnstone Road to architectural view homes above Fairview.
                His work is built on three principles that the rest of the local market still
                hasn&apos;t caught up to.
              </p>
            </Reveal>

            <ul className="space-y-7">
              {[
                {
                  k: "I.",
                  title: "Local intelligence over generic luxury.",
                  body: "Knowing every architect, every lot, every owner who hasn't listed yet — and what each property is actually worth to the right buyer.",
                },
                {
                  k: "II.",
                  title: "Discretion as a default, not a request.",
                  body: "Quiet representation, controlled exposure, and qualified showings. Your home doesn't need an audience. It needs the right buyer.",
                },
                {
                  k: "III.",
                  title: "Editorial marketing, not realtor marketing.",
                  body: "Cinematic film, considered photography, and writing that respects what your property actually is. Launched, not uploaded.",
                },
              ].map((item, i) => (
                <Reveal key={item.k} delay={300 + i * 100} as="li" className="grid grid-cols-[40px_1fr] gap-6 border-t border-[var(--color-line)] pt-7">
                  <span className="font-serif text-[18px] italic text-[var(--color-bronze)]">
                    {item.k}
                  </span>
                  <div>
                    <h4 className="m-0 mb-2 font-serif text-[22px] font-normal leading-[1.25] tracking-[-0.005em] text-[var(--color-text)]">
                      {item.title}
                    </h4>
                    <p className="m-0 max-w-[540px] text-[15px] leading-[1.65] text-[var(--color-text-muted)]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={620} className="mt-12 border-t border-[var(--color-line)] pt-8">
              <div className="flex items-center gap-6">
                <svg viewBox="0 0 200 50" className="h-10 w-auto text-[var(--color-bronze-light)]" aria-hidden>
                  <path
                    d="M10 35 Q20 10 35 30 Q42 38 55 22 Q70 10 80 30 Q92 42 105 25 Q120 10 135 30 Q150 42 165 25 Q180 12 195 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-serif text-[14px] italic text-[var(--color-text-dim)]">
                  Luke Mori — Principal, Luxury Division
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

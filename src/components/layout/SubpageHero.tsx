import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  emphasis?: string;
  lede?: string;
  image?: string;
  crumbs?: Crumb[];
  meta?: { label: string; value: string }[];
  imageTreatment?: "standard" | "showcase";
  imageClassName?: string;
};

/* The standard subpage hero, eyebrow, large serif title (with optional
   italic emphasis line), short lede, optional background image with
   readable contrast, optional breadcrumbs, optional meta hairline. */

export function SubpageHero({ eyebrow, title, emphasis, lede, image, crumbs, meta, imageTreatment = "standard", imageClassName = "" }: Props) {
  const showcase = imageTreatment === "showcase";
  return (
    <section className="tone-dark tonal-section overflow-hidden border-b border-[var(--color-line)] pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
      {image && (
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            preload
            sizes="100vw"
            className={`object-cover ${showcase ? "opacity-[0.82] saturate-[1.24] contrast-[1.1] brightness-[1.12]" : "opacity-[0.74] saturate-[1.18] contrast-[1.08] brightness-[1.08]"} ${imageClassName}`}
          />
          <div className={showcase ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,13,0.78)_0%,rgba(10,11,13,0.48)_42%,rgba(10,11,13,0.22)_100%)]" : "absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,13,0.78)_0%,rgba(10,11,13,0.5)_44%,rgba(10,11,13,0.28)_100%)]"} />
          <div className={showcase ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.48)_0%,rgba(10,11,13,0.18)_38%,rgba(10,11,13,0.7)_100%)]" : "absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.48)_0%,rgba(10,11,13,0.22)_36%,rgba(10,11,13,0.72)_100%)]"} />
          {showcase && (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_34%,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_48%_72%,rgba(212,184,150,0.11),transparent_34%)]" />
          )}
        </div>
      )}

      {/* Decorative diagonal hairlines */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]" aria-hidden>
        <svg className="size-full" preserveAspectRatio="none" viewBox="0 0 1600 600">
          <line x1="0" y1="500" x2="1600" y2="0" stroke="#b08a5b" strokeWidth="0.5" />
        </svg>
      </div>

      <Container className="relative z-10">
        {crumbs && crumbs.length > 0 && (
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(239,234,226,0.76)] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]" aria-label="Breadcrumb">
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2.5">
                  {c.href ? (
                    <a href={c.href} className="transition-colors hover:text-[var(--color-bronze-light)]">
                      {c.label}
                    </a>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span className="text-[var(--color-line-strong)]">/</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <Reveal delay={80}>
          <div className="mb-7 flex items-center gap-[18px] text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-bronze-light)] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] sm:mb-8">
            <span className="inline-block h-px w-12 bg-[var(--color-bronze)]" />
            {eyebrow}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <h1 className="m-0 max-w-[20ch] font-serif font-light leading-[1.03] tracking-[-0.015em] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] [font-size:clamp(38px,7vw,96px)] sm:leading-[1.05]">
            {title}
            {emphasis && (
              <>
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  {emphasis}
                </em>
              </>
            )}
          </h1>
        </Reveal>

        {lede && (
          <Reveal delay={320}>
            <p className="m-0 mt-8 max-w-[640px] font-medium leading-[1.6] text-[rgba(245,239,229,0.84)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.92)] [font-size:clamp(15.5px,1.3vw,18px)] sm:mt-9 sm:leading-[1.65]">
              {lede}
            </p>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <Reveal delay={460}>
            <ul className="mt-11 grid grid-cols-2 gap-x-7 gap-y-6 rounded-[1.25rem] border border-[rgba(245,239,229,0.14)] bg-[rgba(8,9,10,0.2)] p-5 backdrop-blur-[2px] sm:mt-12 sm:grid-cols-4 sm:gap-x-10 sm:rounded-none sm:border-x-0 sm:border-b-0 sm:bg-transparent sm:p-0 sm:pt-8 sm:backdrop-blur-none">
              {meta.map((m) => (
                <li key={m.label} className="flex flex-col gap-1.5">
                  <span className="font-serif text-[24px] font-light leading-none tracking-[-0.005em] text-[var(--color-text)] drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)] md:text-[28px]">
                    {m.value}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[rgba(245,239,229,0.78)] drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)]">
                    {m.label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

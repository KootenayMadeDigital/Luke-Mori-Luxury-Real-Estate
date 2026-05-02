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
};

/* The standard subpage hero, eyebrow, large serif title (with optional
   italic emphasis line), short lede, optional background image with
   heavy darken, optional breadcrumbs, optional meta hairline. */

export function SubpageHero({ eyebrow, title, emphasis, lede, image, crumbs, meta }: Props) {
  return (
    <section className="tone-dark tonal-section border-b border-[var(--color-line)] pb-20 pt-32 md:pb-28 md:pt-40">
      {image && (
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image src={image} alt="" fill preload sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/40 via-[var(--color-bg)]/70 to-[var(--color-bg)]" />
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
            <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-dim)]" aria-label="Breadcrumb">
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
          <div className="mb-8 flex items-center gap-[18px] text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
            <span className="inline-block h-px w-12 bg-[var(--color-bronze)]" />
            {eyebrow}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <h1 className="m-0 max-w-[20ch] font-serif font-light leading-[1.05] tracking-[-0.015em] [font-size:clamp(40px,7vw,96px)]">
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
            <p className="m-0 mt-9 max-w-[640px] font-light leading-[1.65] text-[var(--color-text-muted)] [font-size:clamp(16px,1.3vw,18px)]">
              {lede}
            </p>
          </Reveal>
        )}

        {meta && meta.length > 0 && (
          <Reveal delay={460}>
            <ul className="mt-12 grid grid-cols-2 gap-y-6 border-t border-[var(--color-line)] pt-8 sm:grid-cols-4 sm:gap-x-10">
              {meta.map((m) => (
                <li key={m.label} className="flex flex-col gap-1.5">
                  <span className="font-serif text-[24px] font-light leading-none tracking-[-0.005em] text-[var(--color-text)] md:text-[28px]">
                    {m.value}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
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

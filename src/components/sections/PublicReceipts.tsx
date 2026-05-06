import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { credentials, facebookReviews, facebookReviewsUrl } from "@/lib/data";

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

        <Reveal delay={120} className="luxury-card group mt-12 overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.56)] shadow-[0_34px_90px_-62px_rgba(0,0,0,0.95)] transition-[transform,border-color,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-bronze)] hover:bg-[rgba(18,18,17,0.72)]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {credentials.map((c) => (
              <div key={c.label} className="border-b border-r border-[var(--color-line)] p-6 transition-[background,transform] duration-700 ease-[var(--ease-luxe)] last:border-r-0 hover:-translate-y-1 hover:bg-[rgba(212,184,150,0.055)] md:border-b-0 md:p-8">
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

        <Reveal delay={220} className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[1fr_1fr_auto] md:items-stretch">
          {facebookReviews.slice(5, 7).map((review) => (
            <article key={review.quote} className="luxury-card group border border-[var(--color-line)] bg-[rgba(255,255,255,0.045)] p-6 transition-[transform,border-color,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.06)]">
              <p className="m-0 mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                Facebook Review
              </p>
              <blockquote className="m-0 text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
            </article>
          ))}
          <a
            href={facebookReviewsUrl}
            className="luxury-button flex items-center justify-center rounded-[1.1rem] border border-[var(--color-bronze)] px-6 py-5 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze-light)] transition-[transform,background,color,border-color,box-shadow] duration-500 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:bg-[var(--color-bronze)] hover:text-[#18120c] hover:shadow-[0_24px_70px_-48px_rgba(212,184,150,0.9)]"
          >
            Read More Reviews
          </a>
        </Reveal>

      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { contact, homeTourVideos } from "@/lib/data";

export function HomeTourVideos() {
  return (
    <section id="home-tours" className="tone-office tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-75" aria-hidden>
        <div className="absolute left-[-12%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[rgba(212,184,150,0.08)] blur-[130px]" />
        <div className="absolute right-[-14%] top-[20%] h-[520px] w-[520px] rounded-full bg-[rgba(255,255,255,0.035)] blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <Reveal className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <Eyebrow>Property Film</Eyebrow>
            <SectionHeading className="mt-7">
              Luke Mori Realtor
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                on YouTube.
              </em>
            </SectionHeading>
          </div>
          <div className="lg:ml-auto lg:max-w-[620px] lg:text-right">
            <SectionLede align="right">
              More than 100 property videos and over 200,000 views. Sellers get a stronger first impression. Buyers waste fewer tours. Everyone starts with better information.
            </SectionLede>
            <a
              href={contact.social.youtube}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze)] transition-colors hover:text-[var(--color-bronze-light)]"
            >
              Visit Luke on YouTube
              <svg viewBox="0 0 16 16" aria-hidden className="size-[14px]">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {homeTourVideos.map((video, i) => (
            <Reveal key={video.href} delay={i * 90}>
              <a
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.035)] p-1 transition-[transform,border-color,background] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[rgba(212,184,150,0.06)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(1.5rem-0.25rem)]">
                  <Image
                    src={video.image}
                    alt={video.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-82 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.18),rgba(10,11,13,0.34)_46%,rgba(10,11,13,0.82))]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center gap-3 rounded-full border border-[rgba(245,239,229,0.32)] bg-[rgba(10,11,13,0.62)] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text)] shadow-[0_18px_60px_-36px_rgba(0,0,0,0.95)] backdrop-blur-md transition-[background,border-color] duration-500 group-hover:border-[var(--color-bronze)] group-hover:bg-[rgba(10,11,13,0.78)]">
                      <svg viewBox="0 0 20 20" aria-hidden className="size-4 text-[var(--color-bronze-light)]">
                        <path d="M7.5 5.8v8.4L14 10 7.5 5.8Z" fill="currentColor" />
                        <circle cx="10" cy="10" r="8.25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45" />
                      </svg>
                      Watch home tour
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bronze-light)]">
                      {video.title}
                    </div>
                    <div className="mt-1.5 font-serif text-[22px] font-light leading-[1.15] text-[var(--color-text)]">
                      {video.meta}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

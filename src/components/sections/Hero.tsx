import Image from "next/image";
import { MountainScene } from "@/components/ui/MountainScene";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { brandImages } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-36"
    >
      {/* Real Nelson landscape behind the SVG scene, heavily darkened */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src={brandImages.nelsonLandscape}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[var(--color-bg)]/60" />
      </div>

      <MountainScene />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <Reveal>
          <div className="mb-9 flex items-center gap-[18px] text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
            <span className="inline-block h-px w-14 bg-[var(--color-bronze)]" />
            <span>Nelson &amp; Kootenay Lake</span>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="m-0 mb-9 max-w-[18ch] font-serif font-light leading-[1.0] tracking-[-0.015em] [font-size:clamp(48px,8vw,128px)]">
            Private mountain homes,
            <br />
            <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
              quietly represented.
            </em>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="m-0 mb-12 max-w-[560px] font-light leading-[1.65] text-[var(--color-text-muted)] [font-size:clamp(16px,1.4vw,19px)]">
            Lakefront estates, architectural view homes, and rare Kootenay properties — represented
            with the discretion, taste, and local intelligence the Nelson market has been waiting for.
          </p>
        </Reveal>

        <Reveal delay={460}>
          <div className="mb-20 flex flex-wrap gap-4">
            <Button href="#consult" variant="primary">Request Private Consultation</Button>
            <Button href="/listings" variant="ghost" arrow>View Active Listings</Button>
          </div>
        </Reveal>

        <Reveal delay={620}>
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
            <div className="flex items-center gap-2.5">
              <span>50.273° N</span>
              <span>/</span>
              <span>117.288° W</span>
            </div>
            <span className="hidden h-px w-9 bg-[var(--color-line-strong)] sm:inline-block" />
            <div>Nelson · Balfour · Kaslo · Slocan Valley</div>
          </div>
        </Reveal>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3.5 text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-text-dim)] sm:flex"
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

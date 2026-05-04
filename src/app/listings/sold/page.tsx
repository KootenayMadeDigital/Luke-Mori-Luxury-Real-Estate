import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { recentlyConcluded, soldArchive, brandImages } from "@/lib/data";

const soldProofNotes = [
  "Acreage privacy, upper-market pricing, and a buyer who needed to understand the land as much as the house.",
  "North Shore lakefront, where shoreline, access, and privacy are the story behind the price.",
  "A rare lakefront estate that needed scarcity to read clearly before the showing.",
  "An architectural Nelson view home where presentation had to make the setting easy to trust.",
  "Walk-to-water living, sold on lifestyle clarity as much as the address itself.",
];

export const metadata = buildPageMetadata({
  title: "Recently Sold · Nelson Real Estate",
  description:
    "Recently sold real estate in Nelson and the Kootenays: lakefront homes, view homes, walk-to-water residences, and acreage.",
  path: "/listings/sold",
  image: "/og/listings-sold.png",
});

export default function SoldPage() {
  const total = recentlyConcluded.reduce((acc, c) => {
    const num = parseInt(c.offered.replace(/[^0-9]/g, ""), 10);
    return acc + (Number.isFinite(num) ? num : 0);
  }, 0);
  const totalFmt = `$${(total / 1_000_000).toFixed(1)}M+`;
  const lead = recentlyConcluded[0];
  const support = recentlyConcluded.slice(1);
  const rightSupport = support.slice(0, 3);
  const leftSupport = support[3];

  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Recently Placed"
        title="Recently sold,"
        emphasis="handled with care."
        lede="A selection of recent sales across Nelson and the Kootenays. Public details are shown. Client details stay private."
        image={brandImages.orangeBridge}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: "Recently Sold" },
        ]}
        meta={[
          { value: `${recentlyConcluded.length + soldArchive.length}`, label: "Sales Shown" },
          { value: totalFmt, label: "Combined Volume" },
          { value: "Sold", label: "Status" },
          { value: "Private", label: "Discretion" },
        ]}
      />

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
            <div>
              <Eyebrow>Sold Proof</Eyebrow>
              <SectionHeading className="mt-7">
                Recent properties,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  shown properly.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              These are not just rows in a record. They are the kind of homes, land, lakefront, and view properties Luke has already handled across the Nelson market.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid grid-cols-1 gap-6">
              <Reveal>
                <article className="luxury-card group relative min-h-[540px] overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[0_34px_100px_-64px_rgba(0,0,0,0.82)]">
                  <Image
                    src={lead.image}
                    alt={lead.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="luxury-media object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.16),rgba(10,11,13,0.1)_28%,rgba(10,11,13,0.72)_62%,rgba(10,11,13,0.96))]" />
                  <div className="absolute left-6 top-6 rounded-[1px] border border-[rgba(255,255,255,0.34)] bg-[rgba(10,11,13,0.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_34px_-18px_rgba(0,0,0,0.95)] backdrop-blur-sm">
                    {lead.status}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                    <div className="mb-6 font-serif text-[62px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,239,229,0.96)] drop-shadow-[0_4px_28px_rgba(0,0,0,0.92)] sm:text-[88px]">
                      Sold
                    </div>
                    <div className="grid grid-cols-1 gap-5 border-t border-[rgba(245,239,229,0.22)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                      <div>
                        <h2 className="m-0 inline-flex bg-[rgba(10,11,13,0.64)] px-3 py-2 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-sm sm:text-[44px]">
                          {lead.address}
                        </h2>
                        <p className="m-0 mt-3 inline-flex bg-[rgba(10,11,13,0.64)] px-3 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] backdrop-blur-sm">
                          {lead.area} · {lead.type}
                        </p>
                        <p className="m-0 mt-3 max-w-[620px] bg-[rgba(10,11,13,0.64)] px-3 py-2 text-[14px] leading-[1.65] text-white/90 backdrop-blur-sm">
                          {soldProofNotes[0]}
                        </p>
                      </div>
                      <div className="justify-self-start bg-[rgba(10,11,13,0.64)] px-4 py-2 font-serif text-[30px] italic text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-sm sm:justify-self-end">
                        {lead.offered}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>

              {leftSupport && (
                <Reveal delay={280}>
                  <article className="luxury-card group grid overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)] sm:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative min-h-[230px] overflow-hidden bg-[var(--color-bg)]">
                      <Image
                        src={leftSupport.image}
                        alt={leftSupport.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                        className="luxury-media object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.14),rgba(10,11,13,0.08)_38%,rgba(10,11,13,0.7))]" />
                      <span className="absolute left-4 top-4 rounded-[1px] border border-[rgba(255,255,255,0.3)] bg-[rgba(10,11,13,0.9)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-16px_rgba(0,0,0,0.95)] backdrop-blur-sm">
                        05
                      </span>
                    </div>
                    <div className="flex flex-col justify-between p-6 sm:p-7">
                      <div>
                        <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                          {leftSupport.status}
                        </div>
                        <h3 className="m-0 font-serif text-[26px] font-light leading-[1.1] tracking-[-0.01em] text-[var(--color-text)]">
                          {leftSupport.address}
                        </h3>
                        <p className="m-0 mt-3 text-[12px] leading-[1.65] text-[var(--color-text-muted)]">
                          {leftSupport.area} · {leftSupport.type}
                        </p>
                        <p className="m-0 mt-4 border-l border-[var(--color-bronze)] pl-4 text-[13px] leading-[1.65] text-[var(--color-text-dim)]">
                          {soldProofNotes[4]}
                        </p>
                      </div>
                      <div className="mt-6 border-t border-[var(--color-line)] pt-5 font-serif text-[22px] italic text-[var(--color-bronze-light)]">
                        {leftSupport.offered}
                      </div>
                    </div>
                  </article>
                </Reveal>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {rightSupport.map((c, i) => (
                <Reveal key={c.address} delay={i * 70}>
                  <article className="luxury-card group grid h-full grid-cols-[0.9fr_1.1fr] overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)] sm:grid-cols-1 lg:grid-cols-[0.88fr_1.12fr]">
                    <div className="relative min-h-[210px] overflow-hidden bg-[var(--color-bg)]">
                      <Image
                        src={c.image}
                        alt={c.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 44vw"
                        className="luxury-media object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.14),rgba(10,11,13,0.08)_38%,rgba(10,11,13,0.7))]" />
                      <span className="absolute left-4 top-4 rounded-[1px] border border-[rgba(255,255,255,0.3)] bg-[rgba(10,11,13,0.9)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-16px_rgba(0,0,0,0.95)] backdrop-blur-sm">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-col justify-between p-6">
                      <div>
                        <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                          {c.status}
                        </div>
                        <h3 className="m-0 font-serif text-[24px] font-light leading-[1.1] tracking-[-0.01em] text-[var(--color-text)]">
                          {c.address}
                        </h3>
                        <p className="m-0 mt-3 text-[12px] leading-[1.65] text-[var(--color-text-muted)]">
                          {c.area} · {c.type}
                        </p>
                        <p className="m-0 mt-4 border-l border-[var(--color-bronze)] pl-4 text-[13px] leading-[1.65] text-[var(--color-text-dim)]">
                          {soldProofNotes[i + 1]}
                        </p>
                      </div>
                      <div className="mt-6 border-t border-[var(--color-line)] pt-5 font-serif text-[22px] italic text-[var(--color-bronze-light)]">
                        {c.offered}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <p className="mt-12 text-[12px] italic text-[var(--color-text-dim)]">
            Offered prices reflect public list pricing at the time of representation.
            Final transaction prices and terms are held in confidence.
          </p>
        </Container>
      </section>

      <section className="tone-lake tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
            <div>
              <Eyebrow>Sold Archive</Eyebrow>
              <SectionHeading className="mt-7">
                More homes
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  Luke has helped move.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A broader look at Luke&apos;s public sold record, kept compact so the page shows depth without burying the strongest proof.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {soldArchive.map((item, index) => (
              <Reveal key={`${item.address}-${index}`} delay={(index % 6) * 35}>
                <article className="luxury-card group flex h-full overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)]">
                  <div className="relative w-[42%] min-w-[130px] overflow-hidden bg-[var(--color-bg)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 14vw, (min-width: 640px) 22vw, 42vw"
                      className="luxury-media object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.04),rgba(10,11,13,0.54))]" />
                    <span className="absolute left-3 top-3 rounded-[1px] bg-[rgba(10,11,13,0.76)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                      Sold
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="m-0 font-serif text-[21px] font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)]">
                      {item.address}
                    </h3>
                    <p className="m-0 mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-dim)]">
                      {item.area}
                    </p>
                    <div className="mt-auto pt-5">
                      <div className="mb-3 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-dim)]">
                        {item.beds && <span>{item.beds} Bed</span>}
                        {item.baths && <span>{item.baths} Bath</span>}
                      </div>
                      <div className="border-t border-[var(--color-line)] pt-4 font-serif text-[20px] italic text-[var(--color-bronze-light)]">
                        {item.offered}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-[12px] italic text-[var(--color-text-dim)]">
            Archive reflects public sold-property information from Luke&apos;s existing website. Final terms remain private.
          </p>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Considering Selling"
        title="Protect the result with"
        emphasis="a stronger plan."
        body="Strong photography, clear copy, a controlled launch, and a real buyer network help protect the result before the sign goes up."
      />
    </PageLayout>
  );
}

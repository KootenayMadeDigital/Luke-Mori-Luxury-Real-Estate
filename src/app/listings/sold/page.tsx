import Image from "next/image";
import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { FrostedSoldProof } from "@/components/listing/FrostedSoldProof";
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
  const archiveFeatured = soldArchive.slice(0, 3);
  const archiveRest = soldArchive.slice(3);
  const archiveVolume = soldArchive.reduce((acc, item) => {
    const num = parseInt(item.offered.replace(/[^0-9]/g, ""), 10);
    return acc + (Number.isFinite(num) ? num : 0);
  }, 0);
  const archiveVolumeFmt = `$${(archiveVolume / 1_000_000).toFixed(1)}M+`;

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
                <FrostedSoldProof lead={lead} note={soldProofNotes[0]} />
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
                Thirty more sales
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  behind the headline.
                </em>
              </SectionHeading>
            </div>
            <SectionLede align="right">
              A broader look at Luke&apos;s public sold record, shown with enough depth to prove range without burying the strongest proof.
            </SectionLede>
          </Reveal>

          <div className="mb-10 grid grid-cols-2 gap-px bg-[var(--color-line)] md:grid-cols-4">
            {[
              { value: soldArchive.length.toString(), label: "Archive Sales" },
              { value: archiveVolumeFmt, label: "Archive Volume" },
              { value: "3", label: "Main Areas" },
              { value: "$2.24M", label: "Highest Shown" },
            ].map((stat) => (
              <Reveal key={stat.label} className="bg-[var(--color-bg)] p-6 text-center md:p-7">
                <div className="font-serif text-[30px] font-light leading-none tracking-[-0.01em] text-[var(--color-text)] md:text-[38px]">
                  {stat.value}
                </div>
                <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mb-7 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {archiveFeatured.map((item, index) => (
              <Reveal key={`${item.address}-featured`} delay={index * 70}>
                <article className="luxury-card group overflow-hidden border border-[var(--color-line-strong)] bg-[var(--color-surface)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-bronze)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg)]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="luxury-media object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.06),rgba(10,11,13,0.18)_44%,rgba(10,11,13,0.76))]" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="mb-4 inline-flex rounded-[1px] bg-[rgba(10,11,13,0.78)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        Archive Sold {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="m-0 font-serif text-[28px] font-light leading-[1.05] tracking-[-0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)]">
                        {item.address}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
                      {item.area}
                    </p>
                    <div className="mt-5 flex items-end justify-between gap-5 border-t border-[var(--color-line)] pt-5">
                      <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-dim)]">
                        {item.beds && <span>{item.beds} Bed</span>}
                        {item.baths && <span>{item.baths} Bath</span>}
                      </div>
                      <div className="font-serif text-[22px] italic text-[var(--color-bronze-light)]">
                        {item.offered}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {archiveRest.map((item, index) => (
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

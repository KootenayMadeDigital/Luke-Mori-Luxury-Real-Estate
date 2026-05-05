import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { PhotoGallery } from "@/components/listing/PhotoGallery";
import { ListingTile } from "@/components/listing/ListingTile";
import { ListingActionPanel } from "@/components/listing/ListingActionPanel";
import { RecentlyViewedRail } from "@/components/listing/RecentlyViewedRail";
import {
  allListings,
  getListingBySlug,
  buildDetailRows,
  isLukesOwn,
  formatBeds,
  formatBaths,
  formatSqft,
  formatLot,
  type Listing,
} from "@/lib/listings";
import { contact } from "@/lib/data";
import { buildListingJsonLd, buildPageMetadata } from "@/lib/seo";

type Params = { slug: string };
type EditorialFact = { label: string; value: string };

export function generateStaticParams() {
  return allListings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getListingBySlug(slug);
  if (!l) return { title: "Listing Not Found" };
  const priceTitle = l.price ? `${l.price} · ` : "";
  const shareDetails = [l.price, l.location, l.propertyType].filter(Boolean).join(" | ");
  const sourceDesc = l.description.length > 180 ? l.description.slice(0, 177).trimEnd() + "..." : l.description;
  const desc = [shareDetails, sourceDesc].filter(Boolean).join(". ").slice(0, 300);
  return buildPageMetadata({
    title: `${l.address} · ${priceTitle}${l.location || "Nelson Real Estate"}`,
    description: desc,
    path: `/listings/${l.slug}`,
    image: l.heroPhoto || undefined,
  });
}

function hasDisplayValue(value: string): boolean {
  const v = value.trim();
  return Boolean(v && v !== "Not listed");
}

function buildEditorialFacts(l: Listing): EditorialFact[] {
  const facts: EditorialFact[] = [];
  const push = (label: string, value: string) => {
    if (hasDisplayValue(value)) facts.push({ label, value });
  };

  push("Price", l.price);
  push("Area", l.location);
  push("Property type", l.propertyType);
  if (l.beds && l.beds > 0) push("Bedrooms", String(l.beds));
  if (l.baths && l.baths > 0) push("Bathrooms", formatBaths(l));
  if (l.sqft && l.sqft > 0) push("Interior", `${l.sqft.toLocaleString("en-US")} sq ft`);
  push("Lot", formatLot(l));
  if (l.yearBuilt && l.yearBuilt > 1700) push("Built", String(l.yearBuilt));
  if (l.photoCount > 0) push("Gallery", `${l.photoCount} real listing photos`);
  push("MLS®", l.listingId || "");

  return facts.slice(0, 8);
}

function splitStorySentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z(])/g)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function buildStorySegments(l: Listing): string[] {
  const source = l.descriptionParagraphs.length > 0 ? l.descriptionParagraphs : [l.description].filter(Boolean);
  return source.flatMap(splitStorySentences);
}


const BIRCHGROVE_TESTER_SLUG = "26-birchgrove-bend";

const birchgroveHighlights = [
  { label: "Architecture", value: "Custom Hamill Creek timber frame" },
  { label: "Waterfront", value: "Access to 20 acres of shared community waterfront land" },
  { label: "Outdoor living", value: "38 x 13 ft wrap-around deck with hot tub" },
  { label: "Comfort", value: "In-floor heating and gas fireplace" },
  { label: "Guest space", value: "4 bedrooms, including bunk-room configuration" },
  { label: "Utility", value: "Double garage, workshop, and boat carport" },
];

const birchgroveShowingPrompts = [
  "Wing Creek waterfront access and ownership structure",
  "Seasonal access, maintenance, and winter living",
  "Comparable Kaslo and Kootenay Lake sales",
];

export default async function ListingDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = getListingBySlug(slug);
  if (!l) return notFound();

  const lukes = isLukesOwn(l);
  const detailRows = buildDetailRows(l);
  const editorialFacts = buildEditorialFacts(l);

  const sameLocation = allListings
    .filter((x) => x.slug !== l.slug && x.location === l.location)
    .slice(0, 3);
  const fallback = allListings.filter((x) => x.slug !== l.slug).slice(0, 3);
  const related = (sameLocation.length >= 3 ? sameLocation : fallback).slice(0, 3);
  const inquiryHref = `/contact?listing=${encodeURIComponent(l.address)}&intent=showing`;
  const isBirchgrove = l.slug === BIRCHGROVE_TESTER_SLUG;

  return (
    <PageLayout>
      <JsonLd data={buildListingJsonLd(l)} />

      <section className="tone-dark relative h-[88vh] min-h-[600px] overflow-hidden bg-[var(--color-bg)]">
        {l.heroPhoto && (
          <>
            <Image
              src={l.heroPhoto}
              alt={l.address}
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,11,13,0.55)] via-[rgba(10,11,13,0.05)] to-[rgba(10,11,13,0.95)]" />
          </>
        )}

        <Container className="relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
            >
              <Link href="/" className="bg-[rgba(10,11,13,0.28)] px-2 py-1 transition-colors hover:text-[var(--color-bronze-light)]">Home</Link>
              <span className="text-white/72">/</span>
              <Link href="/listings" className="bg-[rgba(10,11,13,0.28)] px-2 py-1 transition-colors hover:text-[var(--color-bronze-light)]">Listings</Link>
              {l.location && (
                <>
                  <span className="text-white/72">/</span>
                  <span className="bg-[rgba(10,11,13,0.28)] px-2 py-1 text-white">{l.location}</span>
                </>
              )}
              <span className="text-white/72">/</span>
              <span aria-current="page" className="truncate bg-[rgba(10,11,13,0.28)] px-2 py-1 text-white/92">{l.address}</span>
            </nav>
          </Reveal>

          {lukes && (
            <Reveal delay={80}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-button-text)]">
                <svg viewBox="0 0 12 12" className="size-2.5" aria-hidden>
                  <circle cx="6" cy="6" r="5" fill="currentColor" />
                </svg>
                Listed by Luke Mori
              </div>
            </Reveal>
          )}

          <Reveal delay={120}>
            <div className="mb-5 inline-flex items-center gap-3.5 bg-[rgba(10,11,13,0.32)] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.32em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              <span className="inline-block h-px w-12 bg-white/88" />
              {l.location || l.propertyType || "Active Listing"}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <h1 className="m-0 max-w-[24ch] font-serif font-light leading-[1.05] tracking-[-0.015em] text-[var(--color-text)] [font-size:clamp(36px,6vw,80px)]">
              {l.address}
            </h1>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.92)]">
              {l.price && (
                <span className="font-serif italic text-white [font-size:clamp(24px,3vw,38px)]">
                  {l.price}
                </span>
              )}
              {l.propertyType && (
                <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-white">
                  {l.propertyType}
                </span>
              )}
              {l.yearBuilt && l.yearBuilt > 1700 && (
                <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-white">
                  Built {l.yearBuilt}
                </span>
              )}
            </div>
          </Reveal>
        </Container>

        <div className="absolute inset-x-5 bottom-8 z-10 flex flex-wrap items-center justify-between gap-3 sm:inset-x-8">
          {isBirchgrove && (
            <a
              href={inquiryHref}
              className="inline-flex items-center rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#fff7eb] shadow-[0_18px_44px_-28px_rgba(212,184,150,0.9)] transition-colors hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]"
            >
              Request Showing
            </a>
          )}
          {l.photoCount > 0 && (
            <a
              href="#gallery"
              className="ml-auto inline-flex items-center gap-2 rounded-[1px] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.6)] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text)] backdrop-blur-sm transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
            >
              View {l.photoCount} photos
              <svg viewBox="0 0 16 16" aria-hidden className="size-3">
                <path d="M3 5 L8 10 L13 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
          )}
        </div>
      </section>

      <section className="tone-office tonal-section border-b border-[var(--color-line)] py-9 md:py-11">
        <Container>
          <ul className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 sm:gap-x-10">
            {[
              { v: formatBeds(l), k: "Bed" },
              { v: formatBaths(l), k: "Bath" },
              { v: formatSqft(l), k: "Sq Ft" },
              { v: formatLot(l), k: "Lot" },
            ].map((s, i) => (
              <li
                key={s.k}
                className={`flex flex-col gap-1.5 sm:border-l sm:border-[var(--color-line)] sm:pl-6 ${
                  i === 0 ? "sm:border-l-0 sm:pl-0" : ""
                }`}
              >
                <span className="font-serif text-[28px] font-light leading-none tracking-[-0.005em] text-[var(--color-text)] md:text-[36px]">
                  {s.v}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  {s.k}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="tone-ivory tonal-section py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.34fr_0.86fr] lg:gap-20">
            <div className="min-w-0">
              <Reveal>
                <Eyebrow>Arrival / Overview</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading className="mt-7">
                  The public facts,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    clearly explained.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={220}>
                <SectionLede className="mt-7 max-w-[760px]">
                  Review the known facts, compare the fit, share it with the people who help you decide, and ask the questions that matter before touring.
                </SectionLede>
              </Reveal>

              {isBirchgrove && (
                <Reveal delay={280}>
                  <div className="mt-10 grid grid-cols-1 gap-px bg-[var(--color-line)] sm:grid-cols-2 xl:grid-cols-3">
                    {birchgroveHighlights.map((item) => (
                      <div key={item.label} className="bg-[var(--color-bg)] p-5 sm:p-6">
                        <p className="m-0 text-[9px] font-bold uppercase tracking-[0.24em] text-[var(--color-bronze)]">{item.label}</p>
                        <p className="m-0 mt-3 font-serif text-[21px] font-light leading-[1.2] text-[var(--color-text)]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}

              {editorialFacts.length > 0 && (
                <Reveal delay={300}>
                  <dl className="mt-10 grid grid-cols-2 gap-px bg-[var(--color-line)] sm:grid-cols-4">
                    {editorialFacts.map((fact) => (
                      <div key={fact.label} className="bg-[var(--color-surface)] p-5 sm:p-6">
                        <dt className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-[var(--color-bronze)]">
                          {fact.label}
                        </dt>
                        <dd className="m-0 font-serif text-[20px] font-light leading-[1.2] text-[var(--color-text)] sm:text-[22px]">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              )}


              <Reveal delay={460}>
                <div className="mt-16 border-t border-[var(--color-line)] pt-14">
                  <Eyebrow>The Property Story</Eyebrow>
                  <h2 className="m-0 mt-6 max-w-[720px] font-serif font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] [font-size:clamp(32px,4vw,54px)]">
                    Read the home before you tour it.
                  </h2>
                  {buildStorySegments(l).length > 0 && (
                    <div className="mt-9 rounded-[2rem] border border-[var(--color-line)] bg-[rgba(255,255,255,0.34)] p-2 shadow-[0_30px_90px_-75px_rgba(0,0,0,0.55)] lg:w-[calc(100vw-4rem)] lg:max-w-[1180px] xl:w-[calc(100vw-7rem)]">
                      <div className="rounded-[calc(2rem-0.5rem)] bg-[var(--color-surface)] p-6 sm:p-8 lg:p-10">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                          {buildStorySegments(l).map((sentence, i) => (
                            <p
                              key={`${sentence}-${i}`}
                              className={`m-0 border-b border-[var(--color-line)] pb-5 text-[15px] leading-[1.75] text-[var(--color-text-muted)] last:border-b-0 last:pb-0 lg:border-b lg:pb-6 ${
                                i === 0
                                  ? "md:col-span-2 xl:col-span-3 font-serif text-[24px] font-light leading-[1.45] tracking-[-0.005em] text-[var(--color-text)] sm:text-[28px]"
                                  : ""
                              }`}
                            >
                              {sentence}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="mt-10 border-t border-[var(--color-line)] pt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                    <span className="text-[var(--color-bronze)]">Listed by</span>{" "}
                    {l.listingAgent || "Not listed"}
                    {l.listingBrokerage && (
                      <>
                        {" "}
                        <span className="text-[var(--color-text-dim)]">at</span>{" "}
                        {l.listingBrokerage}
                      </>
                    )}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <aside className="sticky top-32 border border-[var(--color-line)] bg-[var(--color-surface)] p-7 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.9)] sm:p-8">
                {l.price && (
                  <div className="mb-6 border-b border-[var(--color-line)] pb-6">
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                      Offered at
                    </span>
                    <div className="mt-2 font-serif font-light leading-none tracking-[-0.005em] text-[var(--color-text)] [font-size:clamp(34px,3.6vw,44px)]">
                      {l.price}
                    </div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                      CAD · MLS®
                    </div>
                  </div>
                )}

                <h3 className="m-0 mb-3 font-serif text-[25px] font-light leading-[1.15] tracking-[-0.005em]">
                  Inquire with intent.
                </h3>
                <p className="m-0 mb-6 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                  {isBirchgrove
                    ? "Ask Luke about the showing, waterfront access, seasonal fit, and the details worth confirming before you plan a trip."
                    : "Ask Luke about the showing, property details, fit, and what to know before you spend a day on the road."}
                </p>

                <ul className="mb-7 space-y-3 border-y border-[var(--color-line)] py-6 text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  {(isBirchgrove
                    ? birchgroveShowingPrompts
                    : ["Confirm fit and timing", "Request showing windows", "Review source facts first"]
                  ).map((prompt) => (
                    <li key={prompt} className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-[var(--color-bronze)]" />
                      {prompt}
                    </li>
                  ))}
                </ul>

                <div className="mb-6 space-y-3 text-[13px]">
                  <a
                    href={contact.phoneHref}
                    className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]"
                  >
                    <span className="mr-2 text-[var(--color-bronze)]">P</span>
                    {contact.phone}
                  </a>
                  <a
                    href={contact.emailHref}
                    className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]"
                  >
                    <span className="mr-2 text-[var(--color-bronze)]">E</span>
                    {contact.email}
                  </a>
                </div>
                <Button href={inquiryHref} variant="primary" full>
                  Request Private Showing
                </Button>

                <div className="mt-4">
                  <ListingActionPanel
                    slug={l.slug}
                    address={l.address}
                    price={l.price}
                    location={l.location}
                    propertyType={l.propertyType}
                    heroPhoto={l.heroPhoto}
                    inquiryHref={inquiryHref}
                  />
                </div>

              </aside>
            </Reveal>
          </div>

          <RecentlyViewedRail currentSlug={l.slug} />
        </Container>
      </section>

      {l.photoCount > 0 && (
        <section
          id="gallery"
          className="tone-office tonal-section scroll-mt-24 border-y border-[var(--color-line)] py-24 md:py-28"
        >
          <Container>
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-8">
              <div>
                <Eyebrow>Gallery</Eyebrow>
                <SectionHeading className="mt-6">
                  The listing,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    frame by frame.
                  </em>
                </SectionHeading>
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                {l.photoCount} real listing photos · Click to expand
              </span>
            </Reveal>
            <PhotoGallery photos={l.photos} alt={l.address} />
          </Container>
        </section>
      )}

      {detailRows.length > 4 && (
        <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
          <Container>
            <Reveal className="mb-12 max-w-[760px]">
              <Eyebrow>Property Details</Eyebrow>
              <SectionHeading className="mt-7">
                Every detail,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  on the record.
                </em>
              </SectionHeading>
            </Reveal>
            <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-2">
              {detailRows.map((row, i) => (
                <Reveal
                  key={row.label + i}
                  delay={(i % 6) * 40}
                  className="grid grid-cols-[140px_1fr] items-baseline gap-4 bg-[var(--color-bg)] px-6 py-5 transition-colors hover:bg-[var(--color-surface)] sm:grid-cols-[180px_1fr] sm:px-8 sm:py-6"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-bronze)]">
                    {row.label}
                  </span>
                  <span className="text-[14px] leading-[1.6] text-[var(--color-text)] sm:text-[15px]">
                    {row.value}
                  </span>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {l.rooms && l.rooms.length > 0 && (
        <section className="tone-lake tonal-section py-24 md:py-28">
          <Container>
            <Reveal className="mb-14 max-w-[760px]">
              <Eyebrow>Room Dimensions</Eyebrow>
              <SectionHeading className="mt-7">
                Floor by floor,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  inch by inch.
                </em>
              </SectionHeading>
            </Reveal>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {l.rooms.map((level) => (
                <Reveal key={level.level} as="div">
                  <h3 className="mb-6 border-b border-[var(--color-line)] pb-4 font-serif text-[20px] font-normal uppercase tracking-[0.18em] text-[var(--color-bronze)]">
                    {level.level}
                  </h3>
                  <ul>
                    {level.rooms.map((r, i) => (
                      <li
                        key={r.name + i}
                        className="flex items-baseline justify-between gap-6 border-b border-[var(--color-line)] py-4 last:border-b-0"
                      >
                        <span className="font-serif text-[18px] font-light text-[var(--color-text)]">
                          {r.name}
                        </span>
                        <span className="font-serif italic text-[var(--color-bronze-light)] [font-size:clamp(15px,1.5vw,18px)]">
                          {r.dim}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}


      <div className="fixed inset-x-3 bottom-3 z-[120] md:hidden">
        <div className="grid grid-cols-2 gap-2 rounded-full border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.88)] p-1.5 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          <a href={inquiryHref} className="rounded-full bg-[var(--color-bronze)] px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fff7eb]">
            Showing
          </a>
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="rounded-full border border-[var(--color-line-strong)] px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text)]">
            Call Luke
          </a>
        </div>
      </div>

      <InquiryCTA
        eyebrow="Private Showing"
        title="Some properties are best"
        emphasis="experienced in person."
        body="Showings are scheduled directly with Luke or his team. Tell us when you are in town, and we will arrange the visit and the conversation."
      />

      {related.length > 0 && (
        <section className="tone-lake tonal-section py-24 md:py-28">
          <Container>
            <Reveal className="mb-12">
              <Eyebrow>{sameLocation.length >= 3 ? `Also in ${l.location}` : "Also Worth Considering"}</Eyebrow>
              <SectionHeading className="mt-6">
                More properties,
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  same standard.
                </em>
              </SectionHeading>
            </Reveal>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 80}>
                  <ListingTile listing={r} variant="compact" />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </PageLayout>
  );
}

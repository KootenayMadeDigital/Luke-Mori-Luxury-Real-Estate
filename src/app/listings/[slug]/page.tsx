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
type ContextPanel = { label: string; title: string; body: string };

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

function joinHumanList(items: string[]): string {
  if (items.length <= 1) return items[0] || "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
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

function buildEditorialSummary(l: Listing): string[] {
  const summary: string[] = [];
  const opening = [
    l.propertyType || "Active listing",
    l.location ? `in ${l.location}` : "",
    l.price ? `offered at ${l.price}` : "",
  ].filter(Boolean);

  if (opening.length > 0) summary.push(`${opening.join(", ")}.`);

  const physicalFacts = [
    l.beds && l.beds > 0 ? `${l.beds} bedrooms` : "",
    l.baths && l.baths > 0 ? `${formatBaths(l)} bathrooms` : "",
    l.sqft && l.sqft > 0 ? `${l.sqft.toLocaleString("en-US")} sq ft of interior space` : "",
    hasDisplayValue(formatLot(l)) ? `${formatLot(l)} lot` : "",
    l.yearBuilt && l.yearBuilt > 1700 ? `built in ${l.yearBuilt}` : "",
  ].filter(Boolean);

  if (physicalFacts.length > 0) {
    summary.push(`Published facts note ${joinHumanList(physicalFacts)}.`);
  }

  const sourceFacts = [
    l.listingAgent ? `listed by ${l.listingAgent}` : "",
    l.listingBrokerage ? `with ${l.listingBrokerage}` : "",
    l.listingId ? `MLS® ${l.listingId}` : "",
  ].filter(Boolean);

  if (sourceFacts.length > 0) summary.push(`Source record: ${sourceFacts.join(", ")}.`);
  if (l.photoCount > 0) {
    summary.push(`The public gallery includes ${l.photoCount} real listing ${l.photoCount === 1 ? "photo" : "photos"}.`);
  }

  return summary.slice(0, 4);
}

function buildContextPanels(l: Listing): ContextPanel[] {
  const lot = formatLot(l);
  const scaleFacts = [
    l.propertyType,
    l.sqft && l.sqft > 0 ? `${l.sqft.toLocaleString("en-US")} sq ft` : "",
    hasDisplayValue(lot) ? lot : "",
  ].filter(Boolean);

  return [
    {
      label: "01",
      title: "Area and arrival",
      body: l.location
        ? `The source listing identifies the area as ${l.location}. A private showing should test approach, privacy, light, sound, and everyday fit.`
        : "The public record does not name a precise area. A private showing should test approach, privacy, light, sound, and everyday fit.",
    },
    {
      label: "02",
      title: "Lifestyle fit",
      body: scaleFacts.length > 0
        ? `The known property facts are ${joinHumanList(scaleFacts)}. Use the visit to decide how that scale actually lives, not just how it reads online.`
        : "Use the visit to decide how the property actually lives, not just how it reads online.",
    },
    {
      label: "03",
      title: "Private due diligence",
      body: "Serious buyers should review the public facts first, then use Luke's local context for comparables, timing, access, and offer discipline.",
    },
  ];
}

export default async function ListingDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = getListingBySlug(slug);
  if (!l) return notFound();

  const lukes = isLukesOwn(l);
  const detailRows = buildDetailRows(l);
  const editorialFacts = buildEditorialFacts(l);
  const editorialSummary = buildEditorialSummary(l);
  const contextPanels = buildContextPanels(l);

  const sameLocation = allListings
    .filter((x) => x.slug !== l.slug && x.location === l.location)
    .slice(0, 3);
  const fallback = allListings.filter((x) => x.slug !== l.slug).slice(0, 3);
  const related = (sameLocation.length >= 3 ? sameLocation : fallback).slice(0, 3);
  const inquiryHref = `/contact?listing=${encodeURIComponent(l.address)}&intent=showing`;

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
              className="mb-6 flex flex-wrap items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
            >
              <Link href="/" className="transition-colors hover:text-[var(--color-bronze-light)]">Home</Link>
              <span className="text-[var(--color-line-strong)]">/</span>
              <Link href="/listings" className="transition-colors hover:text-[var(--color-bronze-light)]">Listings</Link>
              {l.location && (
                <>
                  <span className="text-[var(--color-line-strong)]">/</span>
                  <span className="text-[var(--color-text-muted)]">{l.location}</span>
                </>
              )}
              <span className="text-[var(--color-line-strong)]">/</span>
              <span aria-current="page" className="truncate text-[var(--color-text-dim)]">{l.address}</span>
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
            <div className="mb-5 flex items-center gap-3.5 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
              <span className="inline-block h-px w-12 bg-[var(--color-bronze)]" />
              {l.location || l.propertyType || "Active Listing"}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <h1 className="m-0 max-w-[24ch] font-serif font-light leading-[1.05] tracking-[-0.015em] text-[var(--color-text)] [font-size:clamp(36px,6vw,80px)]">
              {l.address}
            </h1>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 text-[var(--color-text-muted)]">
              {l.price && (
                <span className="font-serif italic text-[var(--color-bronze-light)] [font-size:clamp(24px,3vw,38px)]">
                  {l.price}
                </span>
              )}
              {l.propertyType && (
                <span className="text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  {l.propertyType}
                </span>
              )}
              {l.yearBuilt && l.yearBuilt > 1700 && (
                <span className="text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  Built {l.yearBuilt}
                </span>
              )}
            </div>
          </Reveal>
        </Container>

        {l.photoCount > 0 && (
          <a
            href="#gallery"
            className="absolute bottom-8 right-5 z-10 inline-flex items-center gap-2 rounded-[1px] border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.6)] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text)] backdrop-blur-sm transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)] sm:right-8"
          >
            View {l.photoCount} photos
            <svg viewBox="0 0 16 16" aria-hidden className="size-3">
              <path d="M3 5 L8 10 L13 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        )}
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
            <div>
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
                  Review the known facts, compare the fit, share it with the people who help you decide, and ask the right questions before touring.
                </SectionLede>
              </Reveal>

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

              {editorialSummary.length > 0 && (
                <Reveal delay={380}>
                  <div className="mt-10 border border-[var(--color-line)] bg-[var(--color-surface)] p-7 sm:p-8">
                    <p className="m-0 mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-bronze)]">
                      Editorial Summary
                    </p>
                    <div className="space-y-4 text-[15px] leading-[1.75] text-[var(--color-text-muted)]">
                      {editorialSummary.map((sentence) => (
                        <p key={sentence} className="m-0">
                          {sentence}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              <Reveal delay={460}>
                <div className="mt-16 border-t border-[var(--color-line)] pt-14">
                  <Eyebrow>The Property Story</Eyebrow>
                  <h2 className="m-0 mt-6 max-w-[720px] font-serif font-light leading-[1.08] tracking-[-0.01em] text-[var(--color-text)] [font-size:clamp(32px,4vw,54px)]">
                    Read the home before you tour it.
                  </h2>
                  <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-[var(--color-text-muted)]">
                    {l.descriptionParagraphs.length > 0
                      ? l.descriptionParagraphs.map((p, i) => <p key={i}>{p}</p>)
                      : l.description && <p>{l.description}</p>}
                  </div>

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
                  Direct line to Luke or his private team. Ask for the showing, the source context, or preferred seller terms before you spend a day on the road.
                </p>

                <ul className="mb-7 space-y-3 border-y border-[var(--color-line)] py-6 text-[12px] uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-[var(--color-bronze)]" />
                    Confirm fit and timing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-[var(--color-bronze)]" />
                    Request showing windows
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-[var(--color-bronze)]" />
                    Review source facts first
                  </li>
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

                {l.url && (
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 block text-center text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-bronze)]"
                  >
                    View source listing
                  </a>
                )}
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

      <section className="tone-ivory tonal-section border-y border-[var(--color-line)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1fr] md:items-end md:gap-16">
            <div>
              <Eyebrow>Location / Lifestyle Context</Eyebrow>
              <SectionHeading className="mt-7">
                The address is only
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  the first filter.
                </em>
              </SectionHeading>
            </div>
            <SectionLede>
              Public listing data can tell you the area, scale, and source facts. A private advisory call should clarify the lived reality: arrival, privacy, light, access, timing, and fit.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 border border-[var(--color-line)] md:grid-cols-3">
            {contextPanels.map((panel, i) => (
              <Reveal
                key={panel.title}
                delay={i * 90}
                className={`p-7 sm:p-8 ${i > 0 ? "border-t border-[var(--color-line)] md:border-l md:border-t-0" : ""}`}
              >
                <span className="mb-8 inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] font-serif text-[14px] italic text-[var(--color-bronze-light)]">
                  {panel.label}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[24px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {panel.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.75] text-[var(--color-text-muted)]">
                  {panel.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="tone-office tonal-section border-y border-[var(--color-line)] py-20 md:py-24">
        <Container>
          <Reveal className="mb-10 max-w-[780px]">
            <Eyebrow>Buyer Intelligence</Eyebrow>
            <SectionHeading className="mt-7">
              Turn interest
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                into a private brief.
              </em>
            </SectionHeading>
            <SectionLede>
              Shared listings reveal who needs to be in the decision. Saved listings reveal what the buyer actually values. The next step is a disciplined private brief, not another scroll session.
            </SectionLede>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
            {[
              { title: "Share with the circle", body: "Send the listing to a spouse, advisor, lender, inspector, or family member before booking a day on the road." },
              { title: "Save the shortlist", body: "Keep the properties that survive first review close, then compare fit by lifestyle, privacy, access, and timing." },
              { title: "Ask better questions", body: "Use Luke for the local context the listing cannot answer: roads, light, neighbours, value, terms, and seller motivation." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80} className="bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-5 block font-serif text-[20px] italic text-[var(--color-bronze)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[26px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {item.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <div className="fixed inset-x-3 bottom-3 z-[120] md:hidden">
        <div className="grid grid-cols-2 gap-2 rounded-full border border-[var(--color-line-strong)] bg-[rgba(10,11,13,0.88)] p-1.5 shadow-[0_20px_70px_-35px_rgba(0,0,0,0.95)] backdrop-blur-xl">
          <a href={inquiryHref} className="rounded-full bg-[var(--color-bronze)] px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-button-text)]">
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
        body="Showings are scheduled directly with Luke or his private team. Tell us when you are in town, and we will arrange the visit, the context, and the conversation."
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

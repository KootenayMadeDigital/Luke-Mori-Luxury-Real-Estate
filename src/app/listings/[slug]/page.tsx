import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PhotoGallery } from "@/components/listing/PhotoGallery";
import { ListingTile } from "@/components/listing/ListingTile";
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

type Params = { slug: string };

export function generateStaticParams() {
  return allListings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getListingBySlug(slug);
  if (!l) return { title: "Listing Not Found" };
  const priceTitle = l.price ? `${l.price} · ` : "";
  const desc =
    l.description.length > 200
      ? l.description.slice(0, 197).trimEnd() + "…"
      : l.description;
  return {
    title: `${l.address} · ${priceTitle}${l.location || "Nelson Real Estate"}`,
    description: desc,
    alternates: { canonical: `/listings/${l.slug}` },
    openGraph: {
      title: `${l.address}${l.price ? ` · ${l.price}` : ""}`,
      description: desc,
      images: l.heroPhoto ? [l.heroPhoto] : [],
      type: "website",
    },
  };
}

function buildJsonLd(l: Listing) {
  const specs = [];
  if (l.beds) specs.push({ "@type": "QuantitativeValue", name: "Bedrooms", value: l.beds });
  if (l.baths) specs.push({ "@type": "QuantitativeValue", name: "Bathrooms", value: l.baths });
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: l.address,
    description: l.description?.slice(0, 500),
    image: l.photos.slice(0, 5),
    additionalProperty: specs,
    brand: { "@type": "RealEstateAgent", name: l.listingAgent || "Luke Mori" },
    offers: l.priceNumber
      ? {
          "@type": "Offer",
          price: l.priceNumber,
          priceCurrency: "CAD",
          availability: "https://schema.org/InStock",
          seller: { "@type": "RealEstateAgent", name: l.listingAgent || "Luke Mori" },
        }
      : undefined,
  };
}

export default async function ListingDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = getListingBySlug(slug);
  if (!l) return notFound();

  const lukes = isLukesOwn(l);
  const detailRows = buildDetailRows(l);

  // Three "more like this", same location preferred, fall back to top luxury.
  const sameLocation = allListings
    .filter((x) => x.slug !== l.slug && x.location === l.location)
    .slice(0, 3);
  const fallback = allListings.filter((x) => x.slug !== l.slug).slice(0, 3);
  const related = (sameLocation.length >= 3 ? sameLocation : fallback).slice(0, 3);

  return (
    <PageLayout>
      {/* Schema.org structured data for SEO and AI search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(l)) }}
      />

      {/* CINEMATIC HERO */}
      <section className="relative h-[88vh] min-h-[600px] overflow-hidden bg-[var(--color-bg)]">
        {l.heroPhoto && (
          <>
            <Image
              src={l.heroPhoto}
              alt={l.address}
              fill
              priority
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
              <span className="truncate text-[var(--color-text-dim)]">{l.address}</span>
            </nav>
          </Reveal>

          {lukes && (
            <Reveal delay={80}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-bg)]">
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

        {/* Photo count chip */}
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

      {/* SPEC HAIRLINE */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-9 md:py-11">
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

      {/* DESCRIPTION + STICKY INQUIRY */}
      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>The Property</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading className="mt-7">
                  About this
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    home.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-[var(--color-text-muted)]">
                  {l.descriptionParagraphs.length > 0
                    ? l.descriptionParagraphs.map((p, i) => <p key={i}>{p}</p>)
                    : l.description && <p>{l.description}</p>}
                </div>
              </Reveal>

              {/* Listing source */}
              <Reveal delay={360}>
                <p className="mt-10 border-t border-[var(--color-line)] pt-6 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                  <span className="text-[var(--color-bronze)]">Listed by</span>{" "}
                  {l.listingAgent || ","}
                  {l.listingBrokerage && (
                    <>
                      {" "}
                      <span className="text-[var(--color-text-dim)]">at</span>{" "}
                      {l.listingBrokerage}
                    </>
                  )}
                </p>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <aside className="sticky top-32 border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
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

                <h3 className="m-0 mb-3 font-serif text-[22px] font-light leading-[1.2] tracking-[-0.005em]">
                  Inquire privately
                </h3>
                <p className="m-0 mb-6 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                  Direct line to Luke or his private team, replies are personal, within one business day. Showings arranged with discretion.
                </p>

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
                <Button href="/contact" variant="primary" full>
                  Request Private Showing
                </Button>

                {l.url && (
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 block text-center text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-bronze)]"
                  >
                    View source listing →
                  </a>
                )}
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* DETAIL TABLE */}
      {detailRows.length > 4 && (
        <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
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
                  className="grid grid-cols-[140px_1fr] items-baseline gap-4 bg-[var(--color-bg-2)] px-6 py-5 transition-colors hover:bg-[var(--color-surface)] sm:grid-cols-[180px_1fr] sm:px-8 sm:py-6"
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

      {/* ROOM DIMENSIONS */}
      {l.rooms && l.rooms.length > 0 && (
        <section className="bg-[var(--color-bg)] py-24 md:py-28">
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

      {/* GALLERY */}
      {l.photoCount > 0 && (
        <section
          id="gallery"
          className="scroll-mt-24 border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28"
        >
          <Container>
            <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-8">
              <div>
                <Eyebrow>Gallery</Eyebrow>
                <SectionHeading className="mt-6">
                  {l.photoCount} frames.
                </SectionHeading>
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                Click any photo to expand · Esc to close
              </span>
            </Reveal>
            <PhotoGallery photos={l.photos} alt={l.address} />
          </Container>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-[var(--color-bg)] py-24 md:py-28">
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

      <InquiryCTA
        eyebrow="Private Showing"
        title="Some properties are best"
        emphasis="experienced in person."
        body="Showings are scheduled directly with Luke or his private team. Tell us when you're in town, we'll arrange the visit, the context, and the conversation."
      />
    </PageLayout>
  );
}

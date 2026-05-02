import type { Metadata } from "next";
import { brandImages, contact } from "@/lib/data";
import type { Listing } from "@/lib/listings";

export const siteUrl = "https://luke-mori-luxury-real-estate.vercel.app";
export const siteName = "Luke Mori Luxury (Concept)";
export const defaultOgImage = brandImages.nelsonLandscape;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  path?: string;
};

function cleanUndefined<T extends Record<string, unknown>>(value: T): T {
  Object.keys(value).forEach((key) => {
    if (value[key] === undefined || value[key] === null || value[key] === "") {
      delete value[key];
    }
  });
  return value;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString();
}

export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: PageMetadataInput): Metadata {
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName,
      locale: "en_CA",
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": "https://kootenaymade.ca/#organization",
    name: "Kootenay Made Digital",
    url: "https://kootenaymade.ca/",
  };
}

export function buildAgentJsonLd() {
  return {
    "@type": "RealEstateAgent",
    "@id": absoluteUrl("/#agent"),
    name: "Luke Mori",
    url: "https://www.lukemori.com/",
    telephone: contact.phone,
    email: contact.email,
    image: absoluteUrl(brandImages.lukePortrait),
    address: {
      "@type": "PostalAddress",
      streetAddress: "191 Baker Street",
      addressLocality: "Nelson",
      addressRegion: "BC",
      postalCode: "V1L 4H1",
      addressCountry: "CA",
    },
    parentOrganization: {
      "@type": "RealEstateAgent",
      name: contact.brokerage,
    },
    sameAs: [contact.social.instagram, contact.social.youtube, contact.social.facebook],
    areaServed: [
      "Nelson, British Columbia",
      "Kootenay Lake",
      "North Shore",
      "Balfour",
      "Slocan Valley",
    ],
    knowsAbout: [
      "Nelson luxury real estate",
      "Kootenay Lake waterfront property",
      "Relocation buyers",
      "Second-home ownership",
      "Private seller representation",
    ],
    award: [
      "Best Luxury Real Estate Broker in British Columbia, Luxury Lifestyle Awards, 2021",
      "Best Luxury Real Estate Broker in British Columbia, Luxury Lifestyle Awards, 2024",
    ],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteName,
    url: absoluteUrl("/"),
    inLanguage: "en-CA",
    publisher: { "@id": "https://kootenaymade.ca/#organization" },
    about: { "@id": absoluteUrl("/#agent") },
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[], path: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) =>
      cleanUndefined({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.path ? absoluteUrl(item.path) : undefined,
      })
    ),
  };
}

export function buildWebPageJsonLd({
  path,
  title,
  description,
  image = defaultOgImage,
  breadcrumbs,
}: PageMetadataInput & { breadcrumbs?: BreadcrumbItem[] }) {
  return cleanUndefined({
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: "en-CA",
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#agent") },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(image),
    },
    breadcrumb: breadcrumbs ? { "@id": `${absoluteUrl(path)}#breadcrumb` } : undefined,
  });
}

export function buildBaseJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationJsonLd(), buildAgentJsonLd(), buildWebsiteJsonLd()],
  };
}

export function buildPageGraphJsonLd({
  path,
  title,
  description,
  image = defaultOgImage,
  breadcrumbs,
}: PageMetadataInput & { breadcrumbs: BreadcrumbItem[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageJsonLd({ path, title, description, image, breadcrumbs }),
      buildBreadcrumbJsonLd(breadcrumbs, path),
    ],
  };
}

function formatListingBaths(l: Listing): string {
  if (!l.baths || l.baths === 0) return "Not listed";
  return Number.isInteger(l.baths) ? String(l.baths) : l.baths.toFixed(1);
}

function formatListingSqft(l: Listing): string {
  return l.sqft && l.sqft > 0 ? l.sqft.toLocaleString("en-US") : "Not listed";
}

function formatListingLot(l: Listing): string {
  if (l.lotAcres && l.lotAcres > 0) {
    if (l.lotAcres >= 1) return `${l.lotAcres.toLocaleString("en-US")} ac`;
    return `${l.lotAcres} ac`;
  }
  return l.lotSize || "Not listed";
}

function buildAdditionalProperties(l: Listing) {
  const lot = formatListingLot(l);

  return [
    l.listingId ? { "@type": "PropertyValue", name: "MLS number", value: l.listingId } : undefined,
    l.propertyType ? { "@type": "PropertyValue", name: "Property type", value: l.propertyType } : undefined,
    l.beds ? { "@type": "PropertyValue", name: "Bedrooms", value: l.beds } : undefined,
    l.baths ? { "@type": "PropertyValue", name: "Bathrooms", value: formatListingBaths(l) } : undefined,
    l.sqft ? { "@type": "PropertyValue", name: "Interior size", value: `${formatListingSqft(l)} sq ft` } : undefined,
    lot !== "Not listed" ? { "@type": "PropertyValue", name: "Lot", value: lot } : undefined,
    l.yearBuilt ? { "@type": "PropertyValue", name: "Year built", value: l.yearBuilt } : undefined,
    l.listingAgent ? { "@type": "PropertyValue", name: "Listing agent", value: l.listingAgent } : undefined,
    l.listingBrokerage ? { "@type": "PropertyValue", name: "Brokerage", value: l.listingBrokerage } : undefined,
  ].filter(Boolean);
}

export function buildListingJsonLd(l: Listing) {
  const path = `/listings/${l.slug}`;
  const description = l.description?.slice(0, 500);
  const images = l.photos.slice(0, 8).map(absoluteUrl);
  const sellerName = l.listingAgent || "Luke Mori";

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageJsonLd({
        path,
        title: l.address,
        description,
        image: l.heroPhoto || defaultOgImage,
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Listings", path: "/listings" },
          { name: l.address, path },
        ],
      }),
      buildBreadcrumbJsonLd(
        [
          { name: "Home", path: "/" },
          { name: "Listings", path: "/listings" },
          { name: l.address, path },
        ],
        path
      ),
      cleanUndefined({
        "@type": ["Product", "Residence"],
        "@id": `${absoluteUrl(path)}#listing`,
        name: l.address,
        url: absoluteUrl(path),
        description,
        image: images,
        category: l.propertyType || undefined,
        sku: l.listingId || undefined,
        address: cleanUndefined({
          "@type": "PostalAddress",
          streetAddress: l.address,
          addressLocality: l.location || undefined,
          addressRegion: "BC",
          addressCountry: "CA",
        }),
        numberOfBedrooms: l.beds || undefined,
        numberOfBathroomsTotal: l.baths || undefined,
        floorSize: l.sqft
          ? {
              "@type": "QuantitativeValue",
              value: l.sqft,
              unitText: "SQFT",
            }
          : undefined,
        additionalProperty: buildAdditionalProperties(l),
        brand: { "@id": absoluteUrl("/#agent") },
        seller: {
          "@type": "RealEstateAgent",
          name: sellerName,
          parentOrganization: l.listingBrokerage
            ? { "@type": "Organization", name: l.listingBrokerage }
            : undefined,
        },
        offers: l.priceNumber
          ? {
              "@type": "Offer",
              url: absoluteUrl(path),
              price: l.priceNumber,
              priceCurrency: "CAD",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "RealEstateAgent",
                name: sellerName,
              },
            }
          : undefined,
      }),
    ],
  };
}

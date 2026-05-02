/* ============================================================
   Real listing data wrapper.
   Reads the scraped lukemori.com MLS catalog (listings.json) and
   surfaces helpers used across the site.
   ============================================================ */

import raw from "./listings.json" with { type: "json" };

export type Room = { name: string; dim: string };
export type RoomLevel = { level: string; rooms: Room[] };

export type Listing = {
  slug: string;
  url: string;
  address: string;
  title: string;

  beds: number | null;
  baths: number | null;
  sqft: number | null;
  lotSize: string;
  lotAcres: number | null;
  yearBuilt: number | null;
  location: string;

  propertyType: string;
  ownership: string;
  parking: string;
  construction: string;
  foundation: string;
  exterior: string;
  flooring: string;
  appliances: string;
  water: string;
  basement: string;
  roof: string;
  heating: string;

  price: string;
  priceNumber: number | null;

  listingAgent: string;
  listingBrokerage: string;

  description: string;
  descriptionParagraphs: string[];
  rooms: RoomLevel[];

  photos: string[];
  photoCount: number;
  listingId: string | null;
  heroPhoto: string;
};

type Catalog = {
  generated: string;
  count: number;
  listings: Listing[];
};

const catalog = raw as Catalog;

/* ---------------- All listings & lookup ---------------- */

export const allListings: Listing[] = catalog.listings;
export const catalogGenerated: string = catalog.generated;
export const catalogCount: number = catalog.count;

const bySlug = new Map<string, Listing>();
for (const l of allListings) bySlug.set(l.slug, l);

export function getListingBySlug(slug: string): Listing | undefined {
  return bySlug.get(slug);
}

/* ---------------- Filters ---------------- */

export const lukesOwnListings: Listing[] = allListings.filter((l) =>
  /\bluke\s+mori\b/i.test(l.listingAgent)
);

export function isLukesOwn(l: Listing): boolean {
  return /\bluke\s+mori\b/i.test(l.listingAgent);
}

/* Luxury tier, properties at $1M+ with full residential data. */
export const luxuryListings: Listing[] = allListings.filter(
  (l) => (l.priceNumber ?? 0) >= 1_000_000
);

/* Waterfront, pull from neighbourhood / description / property type. */
const waterfrontKeywords =
  /(waterfront|lakefront|lake\s*front|riverfront|beach\s*front|on\s+the\s+lake|kootenay\s+lake|lake\s+access|river\s+frontage|dock|moorage)/i;

export const waterfrontListings: Listing[] = allListings.filter(
  (l) =>
    waterfrontKeywords.test(l.description) ||
    waterfrontKeywords.test(l.address) ||
    waterfrontKeywords.test(l.location)
);

/* ---------------- Sorting ---------------- */

export function sortByPriceDesc(list: Listing[]): Listing[] {
  return [...list].sort(
    (a, b) =>
      (b.priceNumber ?? -Infinity) - (a.priceNumber ?? -Infinity) ||
      b.photoCount - a.photoCount
  );
}

export function sortByPriceAsc(list: Listing[]): Listing[] {
  return [...list].sort(
    (a, b) =>
      (a.priceNumber ?? Infinity) - (b.priceNumber ?? Infinity) ||
      b.photoCount - a.photoCount
  );
}

export function sortByPhotosDesc(list: Listing[]): Listing[] {
  return [...list].sort((a, b) => b.photoCount - a.photoCount);
}

/* ---------------- Featured selection ---------------- */

/* Curated featured-estates pulled from Luke's own active listings,
   sorted by price desc, the top three become the home-page features. */
export const featuredListings: Listing[] = sortByPriceDesc(lukesOwnListings).slice(0, 3);

/* ---------------- Helpers for display ---------------- */

export function formatBeds(l: Listing): string {
  return l.beds && l.beds > 0 ? String(l.beds) : "Not listed";
}
export function formatBaths(l: Listing): string {
  if (!l.baths || l.baths === 0) return "Not listed";
  return Number.isInteger(l.baths) ? String(l.baths) : l.baths.toFixed(1);
}
export function formatSqft(l: Listing): string {
  return l.sqft && l.sqft > 0 ? l.sqft.toLocaleString("en-US") : "Not listed";
}
export function formatLot(l: Listing): string {
  if (l.lotAcres && l.lotAcres > 0) {
    if (l.lotAcres >= 1) return `${l.lotAcres.toLocaleString("en-US")} ac`;
    return `${l.lotAcres} ac`;
  }
  return l.lotSize || "Not listed";
}
export function formatYear(l: Listing): string {
  return l.yearBuilt && l.yearBuilt > 1700 ? String(l.yearBuilt) : "Not listed";
}

/* ---------------- Spec list helper ---------------- */

export type Spec = { label: string; value: string };

export function buildSpecs(l: Listing): Spec[] {
  const specs: Spec[] = [];
  if (l.beds && l.beds > 0) specs.push({ label: "Bed", value: String(l.beds) });
  if (l.baths && l.baths > 0) specs.push({ label: "Bath", value: formatBaths(l) });
  if (l.sqft && l.sqft > 0) specs.push({ label: "Sq Ft", value: l.sqft.toLocaleString("en-US") });
  if (l.lotAcres && l.lotAcres > 0)
    specs.push({ label: "Acres", value: l.lotAcres.toLocaleString("en-US") });
  else if (l.lotSize) specs.push({ label: "Lot", value: l.lotSize });
  if (l.yearBuilt && l.yearBuilt > 1700) specs.push({ label: "Built", value: String(l.yearBuilt) });
  if (specs.length < 4 && l.propertyType) specs.push({ label: "Type", value: l.propertyType });
  return specs.slice(0, 4);
}

/* ---------------- Rich detail panel ---------------- */

export function buildDetailRows(l: Listing): { label: string; value: string }[] {
  const rows: { label: string; value: string }[] = [];
  const push = (label: string, value: string) => {
    if (value && value.trim()) rows.push({ label, value: value.trim() });
  };
  push("Property Type", l.propertyType);
  push("Ownership", l.ownership);
  push("Year Built", formatYear(l));
  push("Bedrooms", formatBeds(l));
  push("Bathrooms", formatBaths(l));
  push("Home Size", l.sqft ? `${l.sqft.toLocaleString("en-US")} sq ft` : "");
  push("Lot Size", l.lotSize ? `${l.lotSize} acres` : "");
  push("Parking", l.parking);
  push("Construction", l.construction);
  push("Foundation", l.foundation);
  push("Exterior", l.exterior);
  push("Roof", l.roof);
  push("Flooring", l.flooring);
  push("Heating", l.heating);
  push("Water", l.water);
  push("Basement", l.basement);
  push("Appliances", l.appliances);
  return rows;
}

/* ---------------- Search ---------------- */

export function searchListings(query: string, list: Listing[] = allListings): Listing[] {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter((l) => {
    const hay = [
      l.address,
      l.location,
      l.propertyType,
      l.description,
      l.listingAgent,
      l.listingBrokerage,
      String(l.priceNumber ?? ""),
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

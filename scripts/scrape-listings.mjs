/**
 * Scraper for lukemori.com MLS listings.
 *
 * Reads the sitemap, fetches each /mls-listings/<slug> page, extracts the
 * structured listing data and all photo URLs, and writes a single JSON file
 * to src/lib/listings.json.
 *
 * Run: node scripts/scrape-listings.mjs
 *
 * Webflow renders deterministic markup; we lean on stable class names
 * (`listing_stat-key`, `text-size-large`, `numberwithCommas`, etc.) instead
 * of fuzzy text-near-label heuristics.
 */

import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const SITEMAP = "https://lukemori.com/sitemap.xml";
const OUT = fileURLToPath(new URL("../src/lib/listings.json", import.meta.url));
const CONCURRENCY = 8;

// ----- helpers -----

function decodeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x2F;/g, "/")
    .replace(/&#?\w+;/g, " ")
    .trim();
}

function stripTags(str) {
  return decodeHtml(String(str || "").replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

function parseNumeric(value) {
  if (value === null || value === undefined) return null;
  const m = String(value).replace(/,/g, "").match(/[\d.]+/);
  return m ? parseFloat(m[0]) : null;
}

async function fetchText(url, attempts = 3) {
  for (let i = 0; i < attempts; i++) {
    try {
      const r = await fetch(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (KMD-LukeMoriConcept/1.0; +https://luke-mori-luxury-real-estate.vercel.app/) ScraperBot",
          accept: "text/html,application/xhtml+xml",
        },
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.text();
    } catch (e) {
      if (i === attempts - 1) throw e;
      await new Promise((res) => setTimeout(res, 400 * (i + 1)));
    }
  }
}

// ----- sitemap -----

async function loadListingUrls() {
  const xml = await fetchText(SITEMAP);
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => u.includes("/mls-listings/"));
  return Array.from(new Set(urls));
}

// ----- HTML extraction -----

function extractMeta(html, prop) {
  const re = new RegExp(
    `<meta[^>]+(?:property|name)="${prop}"[^>]+content="([^"]*)"`,
    "i"
  );
  const m = html.match(re);
  return m ? decodeHtml(m[1]) : "";
}

function extractAllImageUrls(html) {
  const urls = new Set();
  for (const m of html.matchAll(/(?:src|data-src)="([^"]+)"/g)) {
    urls.add(m[1]);
  }
  for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of m[1].split(",")) {
      const u = part.trim().split(" ")[0];
      if (u) urls.add(u);
    }
  }
  const og = extractMeta(html, "og:image");
  if (og) urls.add(og);

  return [...urls].filter(
    (u) =>
      /^https?:\/\//.test(u) &&
      u.includes("63f2f1893f4efb1d4755a829") &&
      /\.(?:jpe?g|png|webp)/i.test(u)
  );
}

function groupByListingId(urls) {
  const groups = new Map();
  for (const u of urls) {
    const m = u.match(/_(\d{6,})_/);
    if (!m) continue;
    const id = m[1];
    if (!groups.has(id)) groups.set(id, []);
    groups.get(id).push(u);
  }
  for (const arr of groups.values()) {
    arr.sort((a, b) => {
      const an = parseInt((a.match(/_(\d+)\.[a-z]+$/i) || [])[1] || "0", 10);
      const bn = parseInt((b.match(/_(\d+)\.[a-z]+$/i) || [])[1] || "0", 10);
      return an - bn;
    });
  }
  return groups;
}

function pickPrimaryListingId(groups, html) {
  let best = null;
  let bestPos = Infinity;
  for (const [id, arr] of groups) {
    if (!arr.length) continue;
    const pos = html.indexOf(arr[0]);
    if (pos >= 0 && pos < bestPos) {
      best = id;
      bestPos = pos;
    }
  }
  return best;
}

/**
 * Each listing renders top-line stats as:
 *   <h3 ...>Bedrooms</h3>...<div ...text-size-large...>3</div>
 *
 * Or the trailing detail-stats as:
 *   <h3 class="listing_stat-key">Property Type:</h3><div ...>Single Family</div>
 *
 * We capture every label/value pair, then surface the canonical fields.
 */
function extractStatPairs(html) {
  const pairs = {};

  // Pattern A — top-line stats: <h3 ...>Label</h3>...<div ...text-size-large...>VALUE</div>
  const reA = /<h3[^>]*>([^<]+?)<\/h3>[\s\S]{0,200}?<div[^>]*text-size-large[^>]*>([^<]+?)<\/div>/g;
  for (const m of html.matchAll(reA)) {
    const k = stripTags(m[1]).replace(/:$/, "").trim();
    const v = stripTags(m[2]);
    if (k && v && !(k in pairs)) pairs[k] = v;
  }

  // Pattern B — detail stat key/value with `:` suffix
  //   <h3 class="listing_stat-key">Built:</h3><div class="text-weight-medium ...">2010</div>
  const reB = /<h3[^>]*listing_stat-key[^>]*>([^<]+?)<\/h3>[\s\S]{0,200}?<div[^>]*text-weight-medium[^>]*>([^<]+?)<\/div>/g;
  for (const m of html.matchAll(reB)) {
    const k = stripTags(m[1]).replace(/:$/, "").trim();
    const v = stripTags(m[2]);
    if (k && v && !(k in pairs)) pairs[k] = v;
  }

  return pairs;
}

function extractDescription(html) {
  // The page renders <h2>Property Description</h2>...<div ...w-richtext>CONTENT</div>.
  // Capture the rich-text block by finding the opening tag, then walking forward
  // until we hit a balanced closing div (rich text bodies can contain nested
  // <p>, <a>, etc., but the wrapper itself is a single div).
  const reHeader = /<h2[^>]*>\s*(?:Property\s+)?Description\s*<\/h2>/i;
  const headerMatch = html.match(reHeader);
  if (!headerMatch) {
    return decodeHtml(extractMeta(html, "og:description") || extractMeta(html, "description") || "");
  }
  const after = html.slice(headerMatch.index + headerMatch[0].length);
  const richOpen = after.match(/<div[^>]*w-richtext[^>]*>/);
  if (!richOpen) return "";
  let i = richOpen.index + richOpen[0].length;
  let depth = 1;
  const len = after.length;
  while (i < len && depth > 0) {
    const nextOpen = after.indexOf("<div", i);
    const nextClose = after.indexOf("</div>", i);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      i = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        const body = after.slice(richOpen.index + richOpen[0].length, nextClose);
        const withBreaks = body
          .replace(/<\/p\s*>/gi, "\n\n")
          .replace(/<br\s*\/?\s*>/gi, "\n");
        return stripTags(withBreaks).replace(/\n{3,}/g, "\n\n");
      }
      i = nextClose + 6;
    }
  }
  return "";
}

function extractDescriptionParagraphs(html) {
  const desc = extractDescription(html);
  if (!desc) return [];
  return desc
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
}

function extractPriceFromCommas(html) {
  // numberwithCommas('649000')
  const m = html.match(/numberwithCommas\('(\d+)'\)/);
  if (m) {
    const n = parseInt(m[1], 10);
    return { number: n, formatted: `$${n.toLocaleString("en-US")}` };
  }
  // Fallback: explicit dollar string
  const m2 = html.match(/\$\s?(\d{1,3}(?:,\d{3}){1,3})(?:\.00)?/);
  if (m2) {
    const n = parseInt(m2[1].replace(/,/g, ""), 10);
    return { number: n, formatted: `$${n.toLocaleString("en-US")}` };
  }
  return { number: null, formatted: "" };
}

function extractListingAgent(html) {
  // Walk the listings_agent-broker-wrap div with depth-counting so we capture
  // the full body (Agent / "at" / Brokerage) rather than a partial match.
  const open = html.match(/<div[^>]*listings_agent-broker-wrap[^>]*>/);
  if (!open) return { agent: "", brokerage: "" };
  const start = open.index + open[0].length;
  let i = start;
  let depth = 1;
  while (i < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", i);
    const nextClose = html.indexOf("</div>", i);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      i = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        const body = html.slice(start, nextClose);
        const parts = [...body.matchAll(/<div[^>]*>([^<]*)<\/div>/g)]
          .map((x) => stripTags(x[1]))
          .filter((s) => s);
        const agent = parts[0] || "";
        let brokerage = "";
        for (let j = parts.length - 1; j >= 0; j--) {
          if (parts[j].toLowerCase() !== "at" && parts[j] !== agent) {
            brokerage = parts[j];
            break;
          }
        }
        return { agent, brokerage };
      }
      i = nextClose + 6;
    }
  }
  return { agent: "", brokerage: "" };
}

function extractRoomDimensions(html) {
  // Each level: <h3>LEVEL NAME</h3><div class="listing_rich-text-dimensions ...">
  //   <p>Room name <strong>dim</strong></p> ...
  // </div>
  const out = [];
  const reLevel = /<h3[^>]*>([A-Z][A-Z ]{3,40})<\/h3>\s*<div[^>]*listing_rich-text-dimensions[^>]*>([\s\S]*?)<\/div>/g;
  for (const m of html.matchAll(reLevel)) {
    const level = stripTags(m[1]).trim();
    const block = m[2];
    const rooms = [];
    const reRoom = /<p[^>]*>([\s\S]*?)<strong[^>]*>([^<]+)<\/strong>[\s\S]*?<\/p>/g;
    for (const r of block.matchAll(reRoom)) {
      const name = stripTags(r[1]).replace(/[:,]\s*$/, "").trim();
      const dim = stripTags(r[2]).replace(/\s+/g, " ");
      if (name && dim) rooms.push({ name, dim });
    }
    if (rooms.length) out.push({ level, rooms });
  }
  return out;
}

function deriveSlug(url) {
  const m = url.match(/\/mls-listings\/([^/?#]+)/);
  return m ? m[1] : url;
}

function deriveAddressFromSlug(slug) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b(\w)/g, (c) => c.toUpperCase())
    .replace(/\bUnit\b/g, "Unit")
    .replace(/\bLot\b/g, "Lot")
    .replace(/\bDl\b/g, "DL")
    .replace(/\bPcl\b/g, "Pcl")
    .replace(/\bN\b/g, "N")
    .replace(/\bS\b/g, "S")
    .replace(/\bE\b/g, "E")
    .replace(/\bW\b/g, "W");
}

function cleanAddress(title, slug) {
  if (!title) return deriveAddressFromSlug(slug);
  return title
    .replace(/\s*[-—|]\s*Luke Mori.*$/i, "")
    .replace(/\s*[-—|]\s*MLS®?.*$/i, "")
    .trim();
}

// Coerce values like "1,540" or "1540 sqft" → number; pass through cleanly.
function num(v) {
  return parseNumeric(v);
}

// ----- per-URL parser -----

async function scrapeListing(url) {
  const html = await fetchText(url);

  const slug = deriveSlug(url);
  const ogTitle = extractMeta(html, "og:title");
  const address = cleanAddress(ogTitle, slug);

  const allImages = extractAllImageUrls(html);
  const groups = groupByListingId(allImages);
  const primaryId = pickPrimaryListingId(groups, html);
  const photos = primaryId ? groups.get(primaryId) || [] : [];

  const stats = extractStatPairs(html);
  const description = extractDescription(html);
  const descriptionParagraphs = extractDescriptionParagraphs(html);
  const price = extractPriceFromCommas(html);
  const listing = extractListingAgent(html);
  const rooms = extractRoomDimensions(html);

  // Canonical surfaced fields (with normalization)
  const beds = num(stats["Bedrooms"]);
  const baths = num(stats["Bathrooms"]);
  const sqft = num(stats["Home Size"]);
  const lotSize = stats["Lot Size"] || "";
  const lotAcres = num(lotSize);
  const yearBuilt = num(stats["Built"]);
  const propertyType = stats["Property Type"] || "";
  const ownership = stats["Ownership"] || "";
  const location = stats["Location"] || "";
  const parking = stats["Parking"] || "";

  const construction = stats["CONSTRUCTION"] || stats["Construction"] || "";
  const foundation = stats["FOUNDATION"] || stats["Foundation"] || "";
  const exterior = stats["EXTERIOR FINISH"] || "";
  const flooring = stats["FLOORING"] || stats["Flooring"] || "";
  const appliances = stats["APPLIANCES"] || stats["Appliances"] || "";
  const water = stats["WATER"] || stats["Water"] || "";
  const basement = stats["BASEMENT"] || stats["Basement"] || "";
  const roof = stats["ROOF"] || stats["Roof"] || "";
  const heating = stats["HEATING TYPES"] || stats["Heating Types"] || "";

  return {
    slug,
    url,
    address,
    title: address,

    // Top stats
    beds,
    baths,
    sqft,
    lotSize,
    lotAcres,
    yearBuilt,
    location,

    // Property details
    propertyType,
    ownership,
    parking,
    construction,
    foundation,
    exterior,
    flooring,
    appliances,
    water,
    basement,
    roof,
    heating,

    // Pricing
    price: price.formatted,
    priceNumber: price.number,

    // Listing agent
    listingAgent: listing.agent,
    listingBrokerage: listing.brokerage,

    // Long-form
    description,
    descriptionParagraphs,
    rooms,

    // Photos
    photos,
    photoCount: photos.length,
    listingId: primaryId,
    heroPhoto: photos[0] || "",

    // Raw stat dump for transparency
    rawStats: stats,
  };
}

// ----- runner -----

async function pool(items, n, fn) {
  const results = new Array(items.length);
  let cursor = 0;
  let completed = 0;
  const total = items.length;
  async function worker() {
    while (cursor < items.length) {
      const i = cursor++;
      try {
        results[i] = await fn(items[i], i);
      } catch (e) {
        results[i] = { error: e.message, url: items[i] };
      }
      completed++;
      if (completed % 50 === 0 || completed === total) {
        process.stdout.write(`  ${completed}/${total}\n`);
      }
    }
  }
  await Promise.all(Array.from({ length: n }, worker));
  return results;
}

async function main() {
  console.log("Loading sitemap…");
  const urls = await loadListingUrls();
  console.log(`  ${urls.length} listing URLs found`);

  console.log(`\nScraping (concurrency=${CONCURRENCY})…`);
  const t0 = Date.now();
  const raw = await pool(urls, CONCURRENCY, scrapeListing);
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`  done in ${elapsed}s`);

  const ok = raw.filter((r) => r && !r.error);
  const failed = raw.filter((r) => r && r.error);

  // Quality stats
  const withPhotos = ok.filter((l) => l.photoCount > 0);
  const withPrice = ok.filter((l) => l.priceNumber);
  const withBeds = ok.filter((l) => l.beds);
  const withSqft = ok.filter((l) => l.sqft);
  const withDesc = ok.filter((l) => l.description && l.description.length > 100);
  const withAgent = ok.filter((l) => l.listingAgent);
  const withYear = ok.filter((l) => l.yearBuilt);
  const withRooms = ok.filter((l) => l.rooms && l.rooms.length);

  console.log(`\nOK: ${ok.length}  Failed: ${failed.length}`);
  console.log(`  with photos:      ${withPhotos.length}`);
  console.log(`  with price:       ${withPrice.length}`);
  console.log(`  with beds:        ${withBeds.length}`);
  console.log(`  with sqft:        ${withSqft.length}`);
  console.log(`  with description: ${withDesc.length}`);
  console.log(`  with agent:       ${withAgent.length}`);
  console.log(`  with year built:  ${withYear.length}`);
  console.log(`  with room dims:   ${withRooms.length}`);

  // Sort: price desc, then photo count desc.
  ok.sort((a, b) => (b.priceNumber || 0) - (a.priceNumber || 0) || (b.photoCount || 0) - (a.photoCount || 0));

  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(
    OUT,
    JSON.stringify({ generated: new Date().toISOString(), count: ok.length, listings: ok }, null, 2),
    "utf8"
  );
  console.log(`\nWrote ${ok.length} listings to ${OUT}`);

  if (failed.length) {
    console.log("\nFailed URLs:");
    for (const f of failed.slice(0, 10)) console.log(`  ${f.url} — ${f.error}`);
    if (failed.length > 10) console.log(`  …and ${failed.length - 10} more`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

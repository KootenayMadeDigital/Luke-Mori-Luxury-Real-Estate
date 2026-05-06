import type { MetadataRoute } from "next";
import { nelsonAreas } from "@/lib/data";
import { buyerGuides } from "@/lib/guides";
import { allListings, isLukesOwn } from "@/lib/listings";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/buyers",
  "/buyers/relocation",
  "/buyers/international",
  "/contact",
  "/faq",
  "/guides",
  "/listings",
  "/listings/luxury",
  "/listings/waterfront",
  "/listings/acreage",
  "/listings/sold",
  "/kootenay-lake-waterfront-real-estate",
  "/nelson",
  "/nelson-bc-realtor",
  "/sellers",
  "/testimonials",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: path === "" || path === "/listings" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path.startsWith("/listings") ? 0.9 : 0.8,
    } as const)),
    ...nelsonAreas.map((area) => ({
      url: `${siteUrl}/nelson/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    } as const)),
    ...buyerGuides.map((guide) => ({
      url: `${siteUrl}/guides/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: guide.slug.includes("nelson") || guide.slug.includes("kootenay-lake") ? 0.84 : 0.78,
    } as const)),
    ...allListings.map((listing) => ({
      url: `${siteUrl}/listings/${listing.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: isLukesOwn(listing) ? 0.72 : 0.58,
    } as const)),
  ];

  return routes;
}

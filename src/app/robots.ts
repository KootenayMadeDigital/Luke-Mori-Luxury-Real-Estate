import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://luke-mori-luxury-real-estate.vercel.app/sitemap.xml",
  };
}

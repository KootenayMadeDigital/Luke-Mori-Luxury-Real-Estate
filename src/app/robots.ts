import type { MetadataRoute } from "next";

/* This concept stays noindex through metadata, but crawlers may read it and follow its internal route map. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}

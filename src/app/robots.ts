import type { MetadataRoute } from "next";

/* This is a speculative concept and should not be indexed. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}

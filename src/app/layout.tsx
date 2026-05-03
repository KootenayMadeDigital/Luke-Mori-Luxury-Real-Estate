import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { buildBaseJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luke-mori-luxury-real-estate.vercel.app"),
  title: {
    default: "Luke Mori Luxury · Nelson & Kootenay Lake Real Estate",
    template: "%s · Luke Mori Luxury",
  },
  description:
    "Nelson and Kootenay Lake real estate for sellers, lakefront buyers, view properties, acreage, relocation, and second-home ownership.",
  applicationName: "Luke Mori Luxury",
  authors: [{ name: "Luke Mori Luxury" }],
  creator: "Luke Mori Luxury",
  publisher: "Luke Mori Luxury",
  robots: { index: false, follow: true, nocache: true },
  openGraph: {
    type: "website",
    title: "Luke Mori Luxury · Nelson & Kootenay Lake Real Estate",
    description:
      "Nelson and Kootenay Lake real estate for sellers, lakefront buyers, view properties, acreage, relocation, and second-home ownership.",
    siteName: "Luke Mori Luxury",
    url: "/",
    locale: "en_CA",
    images: [{ url: "/luke-mori-luxury-logo-full.webp", alt: "Luke Mori Luxury mark" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Mori Luxury · Nelson & Kootenay Lake Real Estate",
    description:
      "Nelson and Kootenay Lake real estate for sellers, lakefront buyers, view properties, acreage, relocation, and second-home ownership.",
    images: ["/luke-mori-luxury-logo-full.webp"],
  },
  icons: {
    icon: [{ url: "/luke-mori-luxury-mark.webp", type: "image/webp" }],
    shortcut: [{ url: "/luke-mori-luxury-mark.webp", type: "image/webp" }],
    apple: [{ url: "/luke-mori-luxury-mark.webp", type: "image/webp" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=gambetta@300,400,500,600&f[]=satoshi@300,400,500,600,700&display=swap"
        />
      </head>
      <body>
        <JsonLd data={buildBaseJsonLd()} />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

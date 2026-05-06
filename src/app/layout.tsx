import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { buildBaseJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luke-mori-luxury-real-estate.vercel.app"),
  title: {
    default: "Luke Mori Real Estate · Nelson & Kootenay Lake",
    template: "%s · Luke Mori",
  },
  description:
    "Nelson and Kootenay Lake real estate for sellers, lakefront buyers, view properties, acreage, relocation, and second-home ownership.",
  applicationName: "Luke Mori Real Estate",
  authors: [{ name: "Luke Mori Real Estate" }],
  creator: "Luke Mori Real Estate",
  publisher: "Luke Mori Real Estate",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Luke Mori Real Estate · Nelson & Kootenay Lake",
    description:
      "Nelson and Kootenay Lake real estate for sellers, lakefront buyers, view properties, acreage, relocation, and second-home ownership.",
    siteName: "Luke Mori Real Estate",
    url: "/",
    locale: "en_CA",
    images: [{ url: "/og/home.png", alt: "Luke Mori Real Estate Nelson and Kootenay Lake real estate", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Mori Real Estate · Nelson & Kootenay Lake",
    description:
      "Nelson and Kootenay Lake real estate for sellers, lakefront buyers, view properties, acreage, relocation, and second-home ownership.",
    images: ["/og/home.png"],
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
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://cdn.fontshare.com/wf/54LXI2OCUZKIGXGLIPZLVAKCWLEVCWJ5/SMBRL4FXBYZFKSDA2XRPY55FMWX246T3/XV7ESZCVQJEU7XKHJW4AOX3XECHBBT2B.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://cdn.fontshare.com/wf/TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
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

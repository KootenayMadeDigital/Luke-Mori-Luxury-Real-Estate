import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luke-mori-luxury.kootenaymade.example"),
  title: {
    default: "Luke Mori Luxury Concept · Nelson & Kootenay Lake Real Estate",
    template: "%s · Luke Mori Luxury Concept",
  },
  description:
    "A premium concept homepage for Nelson and Kootenay Lake luxury real estate, designed by Kootenay Made Digital to show how private mountain properties can be marketed with world-class taste.",
  applicationName: "Luke Mori Luxury (Concept)",
  authors: [{ name: "Kootenay Made Digital" }],
  creator: "Kootenay Made Digital",
  publisher: "Kootenay Made Digital",
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    type: "website",
    title: "Luke Mori Luxury Concept · Nelson & Kootenay Lake Real Estate",
    description:
      "A premium concept homepage for Nelson and Kootenay Lake luxury real estate, designed by Kootenay Made Digital.",
    siteName: "Luke Mori Luxury (Concept)",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luke Mori Luxury Concept · Nelson & Kootenay Lake Real Estate",
    description:
      "A premium concept homepage for Nelson and Kootenay Lake luxury real estate, designed by Kootenay Made Digital.",
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%230a0b0d'/%3E%3Cpath d='M3 25 L12 11 L18 18 L22 14 L29 25 Z' fill='none' stroke='%23b08a5b' stroke-width='1.2' stroke-linejoin='round'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

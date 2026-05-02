import type { Metadata } from "next";
import { LoadingReveal } from "@/components/ui/LoadingReveal";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { IntentConcierge } from "@/components/sections/IntentConcierge";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { AuthorityStrip } from "@/components/sections/AuthorityStrip";
import { PressStrip } from "@/components/sections/PressStrip";
import { SignatureAreas } from "@/components/sections/SignatureAreas";
import { FeaturedEstates } from "@/components/sections/FeaturedEstates";
import { MoriStandard } from "@/components/sections/MoriStandard";
import { SellerSection } from "@/components/sections/SellerSection";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PrivateAccess } from "@/components/sections/PrivateAccess";
import { RecentlyConcluded } from "@/components/sections/RecentlyConcluded";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { ConceptFooter } from "@/components/sections/ConceptFooter";

export const metadata: Metadata = {
  title: "Nelson & Kootenay Lake Luxury Real Estate · Concept",
  description:
    "Luke Mori Luxury, a concept by Kootenay Made Digital. Lakefront estates, architectural view homes, and rare Kootenay properties, represented with discretion and taste.",
  alternates: { canonical: "/concepts/luke-mori-luxury" },
};

export default function LukeMoriLuxuryConcept() {
  return (
    <>
      <LoadingReveal />
      <a
        href="#main"
        className="sr-only z-[300] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-[1px] focus:bg-[var(--color-bronze)] focus:px-5 focus:py-3 focus:text-[12px] focus:font-medium focus:uppercase focus:tracking-[0.2em] focus:text-[var(--color-bg)]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <IntentConcierge />
        <CredentialsStrip />
        <PressStrip />
        <AuthorityStrip />
        <MoriStandard />
        <SignatureAreas />
        <FeaturedEstates />
        <SellerSection />
        <LifestyleSection />
        <Testimonials />
        <PrivateAccess />
        <RecentlyConcluded />
        <LeadMagnet />
      </main>
      <ConceptFooter />
    </>
  );
}

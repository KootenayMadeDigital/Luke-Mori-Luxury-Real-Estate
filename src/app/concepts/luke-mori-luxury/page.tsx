import { LoadingReveal } from "@/components/ui/LoadingReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { IntentConcierge } from "@/components/sections/IntentConcierge";
import { PublicReceipts } from "@/components/sections/PublicReceipts";
import { FeaturedInMedia } from "@/components/sections/FeaturedInMedia";
import { SignatureAreas } from "@/components/sections/SignatureAreas";
import { FeaturedEstates } from "@/components/sections/FeaturedEstates";
import { HomeTourVideos } from "@/components/sections/HomeTourVideos";
import { MoriStandard } from "@/components/sections/MoriStandard";
import { SellerSection } from "@/components/sections/SellerSection";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PrivateAccess } from "@/components/sections/PrivateAccess";
import { PrivateInquiryPaths } from "@/components/sections/PrivateInquiryPaths";
import { SectionTransition } from "@/components/sections/SectionTransition";
import { RecentlyConcluded } from "@/components/sections/RecentlyConcluded";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { ConceptFooter } from "@/components/sections/ConceptFooter";
import { buildPageGraphJsonLd, buildPageMetadata } from "@/lib/seo";

const title = "Nelson & Kootenay Lake Luxury Real Estate · Concept";
const description =
  "Luke Mori Luxury, a concept by Kootenay Made Digital. Lakefront estates, architectural view homes, and rare Kootenay properties, represented with discretion and taste.";
const path = "/concepts/luke-mori-luxury";

export const metadata = buildPageMetadata({
  title,
  description,
  path,
  image: "/generated/kmd-real-estate-og-cover.webp",
});

export default function LukeMoriLuxuryConcept() {
  return (
    <>
      <LoadingReveal />
      <Nav />
      <JsonLd
        data={buildPageGraphJsonLd({
          title,
          description,
          path,
          image: "/generated/kmd-real-estate-og-cover.webp",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Luke Mori Luxury Concept", path },
          ],
        })}
      />
      <main id="main">
        <Hero />
        <SectionTransition eyebrow="Chapter 01" title="Begin with the mandate." tone="bronze" />
        <IntentConcierge />
        <PublicReceipts />
        <FeaturedInMedia />
        <SectionTransition eyebrow="Chapter 02" title="The principal, then the launch." align="right" tone="office" />
        <MoriStandard />
        <SellerSection />
        <FeaturedEstates />
        <HomeTourVideos />
        <RecentlyConcluded />
        <SectionTransition eyebrow="Chapter 03" title="The map becomes the market." align="left" tone="lake" />
        <SignatureAreas preview />
        <LifestyleSection />
        <Testimonials compact />
        <SectionTransition eyebrow="Chapter 04" title="Private access, private routing." tone="office" />
        <PrivateAccess />
        <PrivateInquiryPaths
          id="private-inquiry"
          eyebrow="Conversion Architecture"
          title="The next step depends"
          emphasis="on the mandate."
          body="The same page serves four serious audiences without flattening them into contact sludge: luxury sellers, private buyers, relocation and second-home clients, and agents or brokerages evaluating Kootenay Made Digital."
        />
        <LeadMagnet />
      </main>
      <ConceptFooter />
    </>
  );
}

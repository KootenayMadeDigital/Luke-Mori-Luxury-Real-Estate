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
import { PrivateAccess } from "@/components/sections/PrivateAccess";
import { RecentlyConcluded } from "@/components/sections/RecentlyConcluded";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { ConceptFooter } from "@/components/sections/ConceptFooter";
import { buildPageGraphJsonLd, buildPageMetadata } from "@/lib/seo";

const title = "Nelson & Kootenay Lake Luxury Real Estate";
const description =
  "Luke Mori Luxury. Nelson and Kootenay Lake real estate for lakefront homes, view properties, acreage, and second-home buyers.";
const path = "/";

export const metadata = buildPageMetadata({
  title,
  description,
  path,
  image: "/og/home.png",
});

export default function LukeMoriLuxuryExperience() {
  return (
    <>
      <Nav />
      <JsonLd
        data={buildPageGraphJsonLd({
          title,
          description,
          path,
          image: "/og/home.png",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Luke Mori Luxury", path },
          ],
        })}
      />
      <main id="main">
        <Hero />
        <IntentConcierge />
        <FeaturedInMedia />
        <PublicReceipts />
        <MoriStandard />
        <SellerSection />
        <FeaturedEstates />
        <HomeTourVideos />
        <RecentlyConcluded />
        <SignatureAreas preview />
        <PrivateAccess />
        <LeadMagnet />
      </main>
      <ConceptFooter />
    </>
  );
}

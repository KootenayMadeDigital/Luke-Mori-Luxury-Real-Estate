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
import { RecentlyConcluded } from "@/components/sections/RecentlyConcluded";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { ConceptFooter } from "@/components/sections/ConceptFooter";
import { LazyLuxuryListingReveal } from "@/components/listing/LazyLuxuryListingReveal";
import { getListingBySlug, luxuryListings, sortByPriceDesc } from "@/lib/listings";
import { buildPageGraphJsonLd, buildPageMetadata } from "@/lib/seo";

const title = "Nelson & Kootenay Lake Real Estate";
const description =
  "Luke Mori Real Estate. Nelson and Kootenay Lake guidance for lakefront homes, view properties, acreage, and second-home buyers.";
const path = "/";

export const metadata = buildPageMetadata({
  title,
  description,
  path,
  image: "/og/home.png",
});

export default function LukeMoriLuxuryExperience() {
  const launchPreview = getListingBySlug("6133-pippers-lane") ?? sortByPriceDesc(luxuryListings)[0];
  const launchReveal = launchPreview
    ? { ...launchPreview, heroPhoto: "/generated/luke-reveal-pippers-enhanced.webp" }
    : null;

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
            { name: "Luke Mori Real Estate", path },
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
        {launchReveal && (
          <LazyLuxuryListingReveal
            listing={launchReveal}
            variant="sellerLaunch"
            copy={{
              lede:
                "A serious home should not hit the market like another upload. For select properties, Luke builds the first impression around what matters: the lake, the setting, the shoreline, the film, and the reason a buyer remembers it.",
              panelBody:
                "This is the standard sellers are really buying: a first impression that protects value, slows the scroll, and makes the right buyer want the next conversation.",
            }}
          />
        )}
        <FeaturedEstates />
        <HomeTourVideos />
        <RecentlyConcluded />
        <SignatureAreas preview />
        <LeadMagnet />
      </main>
      <ConceptFooter />
    </>
  );
}

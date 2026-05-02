import { LoadingReveal } from "@/components/ui/LoadingReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { IntentConcierge } from "@/components/sections/IntentConcierge";
import { CredentialsStrip } from "@/components/sections/CredentialsStrip";
import { AuthorityStrip } from "@/components/sections/AuthorityStrip";
import { PressStrip } from "@/components/sections/PressStrip";
import { SignatureAreas } from "@/components/sections/SignatureAreas";
import { FeaturedEstates } from "@/components/sections/FeaturedEstates";
import { MoriStandard } from "@/components/sections/MoriStandard";
import { TrustLedger } from "@/components/sections/TrustLedger";
import { SellerSection } from "@/components/sections/SellerSection";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PrivateAccess } from "@/components/sections/PrivateAccess";
import { PrivateInquiryPaths } from "@/components/sections/PrivateInquiryPaths";
import { TemplateRouteLedger } from "@/components/sections/TemplateRouteLedger";
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
  image: "/luke-mori-luxury-logo-full.webp",
});

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
      <JsonLd
        data={buildPageGraphJsonLd({
          title,
          description,
          path,
          image: "/luke-mori-luxury-logo-full.webp",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Luke Mori Luxury Concept", path },
          ],
        })}
      />
      <main id="main">
        <Hero />
        <IntentConcierge />
        <CredentialsStrip />
        <PressStrip />
        <AuthorityStrip />
        <MoriStandard />
        <TrustLedger />
        <SignatureAreas />
        <FeaturedEstates />
        <SellerSection />
        <LifestyleSection />
        <Testimonials />
        <PrivateAccess />
        <PrivateInquiryPaths
          id="private-inquiry"
          eyebrow="Conversion Architecture"
          title="The next step depends"
          emphasis="on the mandate."
          body="The same page now serves four serious audiences without flattening them into contact sludge: luxury sellers, private buyers, relocation and second-home clients, and agents or brokerages evaluating Kootenay Made Digital."
        />
        <TemplateRouteLedger />
        <RecentlyConcluded />
        <LeadMagnet />
      </main>
      <ConceptFooter />
    </>
  );
}

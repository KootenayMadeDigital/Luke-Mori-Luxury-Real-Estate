import { buildPageMetadata } from "@/lib/seo";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { BuyerFitQuiz } from "@/components/buyers/BuyerFitQuiz";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { headerImages } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Nelson BC Area Fit Quiz · Kootenay Real Estate",
  description:
    "A simple Nelson BC and Kootenay Lake real estate quiz to compare waterfront, walkable Nelson, North Shore, acreage, relocation, ski, second-home, and international buyer paths.",
  path: "/buyers/area-fit-quiz",
  image: "/og/relocation.png",
});

export default function AreaFitQuizPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Area Fit Quiz"
        title="Find the Kootenay path"
        emphasis="that fits the life."
        lede="A quick way to sort waterfront, walkable Nelson, North Shore privacy, acreage, ski access, relocation, second-home, and international buyer paths before the search gets noisy."
        image={headerImages.nelsonLandscape}
        imageTreatment="showcase"
        crumbs={[{ label: "Home", href: "/" }, { label: "Buyers", href: "/buyers" }, { label: "Area Fit Quiz" }]}
        meta={[
          { value: "8", label: "Buyer Paths" },
          { value: "Local", label: "Area Fit" },
          { value: "Fast", label: "First Read" },
          { value: "Luke", label: "Next Step" },
        ]}
      />

      <section className="tone-office tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.82fr_1fr] md:items-end">
            <div>
              <Eyebrow>Buyer Path</Eyebrow>
              <SectionHeading className="mt-7">Choose the starting point,<br /><em className="font-light not-italic italic text-[var(--color-bronze-light)]">then test the fit.</em></SectionHeading>
            </div>
            <SectionLede align="right">The quiz does not replace a local conversation. It gives buyers a cleaner first route so Luke can help compare the right areas and avoid the wrong showings.</SectionLede>
          </Reveal>
          <BuyerFitQuiz />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Buyer Brief"
        title="Have a path in mind?"
        emphasis="Send it to Luke."
        body="Share the result, the property type, and what you want daily life to feel like. Luke can help turn that into a smarter first shortlist."
      />
    </PageLayout>
  );
}

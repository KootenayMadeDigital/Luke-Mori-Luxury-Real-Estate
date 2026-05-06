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
    "A simple Nelson BC and Kootenay Lake real estate quiz that matches lifestyle answers with Nelson, North Shore, Balfour, Blewett, Slocan Valley, or Kaslo.",
  path: "/buyers/area-fit-quiz",
  image: "/og/area-fit-quiz.png",
});

export default function AreaFitQuizPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Area Fit Quiz"
        title="Find the Kootenay path"
        emphasis="that fits the life."
        lede="Answer plain lifestyle questions about daily routine, water, space, winter, services, social pace, future plans, and quiet. Then see which Nelson-area community best fits the way you want to live."
        image={headerImages.nelsonLandscape}
        imageTreatment="showcase"
        crumbs={[{ label: "Home", href: "/" }, { label: "Buyers", href: "/buyers" }, { label: "Area Fit Quiz" }]}
        meta={[
          { value: "6", label: "Area Matches" },
          { value: "Local", label: "Area Fit" },
          { value: "8", label: "Questions" },
          { value: "Luke", label: "Next Step" },
        ]}
      />

      <section className="tone-office tonal-section py-24 md:py-28">
        <Container>
          <Reveal className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[0.82fr_1fr] md:items-end">
            <div>
              <Eyebrow>Lifestyle Match</Eyebrow>
              <SectionHeading className="mt-7">Answer the easy questions,<br /><em className="font-light not-italic italic text-[var(--color-bronze-light)]">then test the fit.</em></SectionHeading>
            </div>
            <SectionLede align="right">The quiz does not replace a local conversation. It gives buyers a sharper area match, explains why it fits, and shows what to watch before planning the first scouting route.</SectionLede>
          </Reveal>
          <BuyerFitQuiz />
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Buyer Brief"
        title="Have an area match?"
        emphasis="Send it to Luke."
        body="Share the result, the property type, and what you want daily life to feel like. Luke can help turn that into a smarter first shortlist."
      />
    </PageLayout>
  );
}

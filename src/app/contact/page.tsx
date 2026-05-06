import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { ConsultForm } from "@/components/forms/ConsultForm";
import { PrivateInquiryPaths } from "@/components/sections/PrivateInquiryPaths";
import { headerImages, contact } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Contact · Nelson BC Realtor",
  description:
    "Contact Luke Mori · Nelson BC Realtor for Nelson and Kootenay Lake real estate. Phone, email, office address, and a clear contact form.",
  path: "/contact",
  image: "/og/contact.png",
});

export default function ContactPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Private Contact"
        title="Start with where"
        emphasis="you want to go."
        lede="Whether you are buying, selling, relocating, or exploring a second home, share what matters most. Luke or his team will help you understand the best next step."
        image={headerImages.lukeContact}
        imageClassName="scale-[1.06] translate-y-8 object-[72%_50%] md:translate-y-12"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <PrivateInquiryPaths
        id="consultation"
        compact
        eyebrow="Inquiry Routing"
        title="Tell Luke what"
        emphasis="you are hoping for."
        body="Share what you are considering, what matters most, and what questions are still unanswered. You will get a thoughtful reply that helps you move forward with more confidence."
      />

      <section id="contact-form" className="tone-ivory tonal-section scroll-mt-28 py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <Reveal>
                <Eyebrow>Direct</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading className="mt-7">
                  Direct access,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    with a clear next step.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={240}>
                <SectionLede className="mb-10">
                  For anything urgent, call. For a property, buying question, selling question, or relocation plan, send a note here and Luke or his team will help you find the right next step.
                </SectionLede>
              </Reveal>

              <Reveal delay={360}>
                <ul className="space-y-7">
                  <li className="border-t border-[var(--color-line)] pt-7">
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                      Phone
                    </span>
                    <a
                      href={contact.phoneHref}
                      className="mt-3 block font-serif text-[36px] font-light leading-none tracking-[-0.005em] text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)] sm:text-[44px]"
                    >
                      {contact.phone}
                    </a>
                  </li>
                  <li className="border-t border-[var(--color-line)] pt-7">
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                      Email
                    </span>
                    <a
                      href={contact.emailHref}
                      className="mt-3 block font-serif text-[28px] font-light leading-tight tracking-[-0.005em] text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)] sm:text-[32px]"
                    >
                      {contact.email}
                    </a>
                  </li>
                  <li className="border-t border-[var(--color-line)] pt-7">
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                      Office
                    </span>
                    <p className="mt-3 font-serif text-[20px] font-light leading-[1.4] text-[var(--color-text)]">
                      {contact.office}
                    </p>
                    <p className="mt-2 text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
                      Brokerage · {contact.brokerage}
                    </p>
                  </li>
                  <li className="border-t border-[var(--color-line)] pt-7">
                    <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
                      Social
                    </span>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {[
                        { label: "YouTube", href: contact.social.youtube },
                        { label: "Instagram", href: contact.social.instagram },
                        { label: "Facebook", href: contact.social.facebook },
                        { label: "X", href: contact.social.twitter },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-[1px] border border-[var(--color-line-strong)] px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-text)] transition-colors hover:border-[var(--color-bronze)] hover:text-[var(--color-bronze-light)]"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <ConsultForm />
            </Reveal>
          </div>
        </Container>
      </section>

    </PageLayout>
  );
}

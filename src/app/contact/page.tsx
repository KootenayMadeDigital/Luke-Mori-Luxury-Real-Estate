import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { ConsultForm } from "@/components/forms/ConsultForm";
import { contact, brandImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact · Private Consultation",
  description:
    "Direct contact for Luke Mori — Nelson and Kootenay Lake luxury real estate. Phone, email, office address, and a private consultation form. Replies are personal, within one business day.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Contact"
        title="A direct line."
        emphasis="A personal reply."
        lede="Replies are personal, within one business day, by Luke or his private team. Phone, email, or the form below — pick whichever suits."
        image={brandImages.nelsonLandscape}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <Reveal>
                <Eyebrow>Direct</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading className="mt-7">
                  Three ways
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    to reach us.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={240}>
                <SectionLede className="mb-10">
                  For anything urgent, the phone is fastest. For showings and detailed inquiries,
                  email or the form to the right is best.
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
                        { label: "Instagram", href: contact.social.instagram },
                        { label: "YouTube", href: contact.social.youtube },
                        { label: "Facebook", href: contact.social.facebook },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
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

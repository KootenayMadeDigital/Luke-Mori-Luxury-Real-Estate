import { PageLayout } from "@/components/layout/PageLayout";
import { buildPageMetadata } from "@/lib/seo";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, SectionLede } from "@/components/ui/SectionHeading";
import { ConsultForm } from "@/components/forms/ConsultForm";
import { PrivateInquiryPaths } from "@/components/sections/PrivateInquiryPaths";
import { contact, brandImages, privateOfficeSteps } from "@/lib/data";

export const metadata = buildPageMetadata({
  title: "Contact · Private Consultation",
  description:
    "Direct contact for Luke Mori, Nelson and Kootenay Lake luxury real estate. Phone, email, office address, and a private consultation form. Replies are personal, within one business day.",
  path: "/contact",
  image: brandImages.nelsonLandscape,
});

export default function ContactPage() {
  return (
    <PageLayout>
      <SubpageHero
        eyebrow="Private Contact"
        title="Choose the file."
        emphasis="Keep it discreet."
        lede="Seller strategy, private buyer access, relocation, second-home ownership, or a concept review for Kootenay Made Digital. The first reply is personal, within one business day, by Luke or his private team."
        image={brandImages.nelsonLandscape}
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <PrivateInquiryPaths
        compact
        eyebrow="Inquiry Routing"
        title="Start with intent,"
        emphasis="not a blank form."
        body="The fastest path is the honest one. Tell us whether this is a seller file, buyer search, relocation or second-home question, or a concept review for an agent or brokerage. The next step changes accordingly."
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
                  Direct access,
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    no reception maze.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={240}>
                <SectionLede className="mb-10">
                  For anything urgent, call. For an address, private access request, relocation question,
                  or concept review, the form creates the cleanest brief.
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

      <section className="border-t border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-14 max-w-[760px]">
            <Eyebrow>What Happens Next</Eyebrow>
            <SectionHeading className="mt-7">
              A private reply,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                then a useful step.
              </em>
            </SectionHeading>
          </Reveal>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-line)] md:grid-cols-3">
            {privateOfficeSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80} className="bg-[var(--color-bg)] p-8 sm:p-9">
                <span className="mb-6 block font-serif text-[22px] italic tracking-[0.08em] text-[var(--color-bronze)]">
                  {step.num}
                </span>
                <h3 className="m-0 mb-4 font-serif text-[26px] font-light leading-[1.15] tracking-[-0.005em] text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="m-0 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

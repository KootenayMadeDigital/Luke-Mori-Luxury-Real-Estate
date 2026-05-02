import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { contact } from "@/lib/data";

type Props = {
  eyebrow?: string;
  title?: string;
  emphasis?: string;
  body?: string;
};

/* Reusable bottom-of-page inquiry block. Defaults are tuned for general
   subpages, pass props to customise per page. */

export function InquiryCTA({
  eyebrow = "Private Inquiry",
  title = "Ready when you are.",
  emphasis,
  body = "A private consultation is the start of every relationship, buyers, sellers, relocators. Replies are personal, within one business day, by Luke or his private team.",
}: Props) {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-28 md:py-32">
      <Container>
        <Reveal className="mx-auto max-w-[760px] text-center">
          <div className="mb-7 inline-flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
            <span className="inline-block size-[6px] rounded-full bg-[var(--color-bronze)]" />
            {eyebrow}
          </div>
          <h2 className="m-0 mb-7 font-serif font-light leading-[1.05] tracking-[-0.01em] [font-size:clamp(32px,4.6vw,56px)]">
            {title}
            {emphasis && (
              <>
                <br />
                <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                  {emphasis}
                </em>
              </>
            )}
          </h2>
          <p className="m-0 mx-auto mb-10 max-w-[540px] text-[16px] leading-[1.7] text-[var(--color-text-muted)]">
            {body}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Request Private Consultation
            </Button>
            <Button href={contact.phoneHref} variant="ghost" size="lg" arrow>
              Call {contact.phone}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { InquiryCTA } from "@/components/layout/InquiryCTA";
import { ListingCard } from "@/components/layout/ListingCard";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { featuredEstates, contact } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams() {
  return featuredEstates.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const e = featuredEstates.find((x) => x.slug === slug);
  if (!e) return { title: "Listing Not Found" };
  return {
    title: e.title,
    description: e.body,
    openGraph: { images: [e.hero] },
  };
}

export default async function EstatePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const estate = featuredEstates.find((e) => e.slug === slug);
  if (!estate) return notFound();

  const others = featuredEstates.filter((e) => e.slug !== slug);

  return (
    <PageLayout>
      {/* Cinematic property hero */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-[var(--color-bg)]">
        <Image
          src={estate.hero}
          alt={estate.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,11,13,0.4)] via-transparent to-[rgba(10,11,13,0.95)]" />

        <Container className="relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              <Link href="/" className="transition-colors hover:text-[var(--color-bronze-light)]">Home</Link>
              <span className="text-[var(--color-line-strong)]">/</span>
              <Link href="/listings" className="transition-colors hover:text-[var(--color-bronze-light)]">Listings</Link>
              <span className="text-[var(--color-line-strong)]">/</span>
              <span>{estate.title}</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mb-5 flex items-center gap-3.5 text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--color-bronze)]">
              <span className="inline-block h-px w-12 bg-[var(--color-bronze)]" />
              {estate.area}
            </div>
          </Reveal>
          <Reveal delay={240}>
            <h1 className="m-0 max-w-[20ch] font-serif font-light leading-[1.05] tracking-[-0.015em] text-[var(--color-text)] [font-size:clamp(40px,7vw,96px)]">
              {estate.title}
            </h1>
            <p className="m-0 mt-5 font-serif text-[24px] italic text-[var(--color-bronze-light)]">
              {estate.shortTitle}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Spec hairline */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-bg)] py-10 md:py-12">
        <Container>
          <ul className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
            {estate.specs.map((s) => (
              <li
                key={s.label}
                className="flex flex-col gap-1.5 border-l border-[var(--color-line)] pl-5 first:border-l-0 first:pl-0 sm:pl-6"
              >
                <span className="font-serif text-[28px] font-light leading-none tracking-[-0.005em] text-[var(--color-text)] md:text-[34px]">
                  {s.value}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Description + sticky inquiry */}
      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            <div>
              <Reveal>
                <Eyebrow>The Property</Eyebrow>
              </Reveal>
              <Reveal delay={120}>
                <SectionHeading className="mt-7">
                  Considered.
                  <br />
                  <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                    Crafted.
                  </em>
                </SectionHeading>
              </Reveal>
              <Reveal delay={240}>
                <p className="m-0 text-[17px] leading-[1.75] text-[var(--color-text-muted)]">
                  {estate.fullDescription}
                </p>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <aside className="sticky top-32 border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
                <div className="mb-7 border-b border-[var(--color-line)] pb-7">
                  <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[var(--color-bronze)]">
                    Private Inquiry
                  </span>
                  <h3 className="m-0 mt-3 font-serif text-[24px] font-light leading-[1.2] tracking-[-0.005em]">
                    Inquire about
                    <br />
                    {estate.shortTitle}.
                  </h3>
                </div>
                <p className="m-0 mb-7 text-[14px] leading-[1.65] text-[var(--color-text-muted)]">
                  Direct line to Luke or his private team — replies are personal, within one
                  business day. Showings arranged with discretion.
                </p>
                <div className="mb-6 space-y-3 text-[13px]">
                  <a
                    href={contact.phoneHref}
                    className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]"
                  >
                    <span className="mr-2 text-[var(--color-bronze)]">P</span>
                    {contact.phone}
                  </a>
                  <a
                    href={contact.emailHref}
                    className="block text-[var(--color-text)] transition-colors hover:text-[var(--color-bronze-light)]"
                  >
                    <span className="mr-2 text-[var(--color-bronze)]">E</span>
                    {contact.email}
                  </a>
                </div>
                <Button href="/contact" variant="primary" full>
                  Request Private Showing
                </Button>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bg-2)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-12 flex items-end justify-between gap-8">
            <div>
              <Eyebrow>Gallery</Eyebrow>
              <SectionHeading className="mt-6">
                {estate.gallery.length} frames.
              </SectionHeading>
            </div>
            <span className="hidden text-[12px] uppercase tracking-[0.22em] text-[var(--color-text-dim)] sm:block">
              Photography · Listing source
            </span>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {estate.gallery.map((src, i) => (
              <Reveal
                key={src + i}
                delay={(i % 4) * 60}
                className={`relative overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] ${
                  i === 0 ? "md:col-span-2 md:aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`${estate.title} — frame ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Other listings */}
      <section className="bg-[var(--color-bg)] py-24 md:py-28">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>Also Currently Represented</Eyebrow>
            <SectionHeading className="mt-6">
              Other estates,
              <br />
              <em className="font-light not-italic italic text-[var(--color-bronze-light)]">
                same standard.
              </em>
            </SectionHeading>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {others.map((e, i) => (
              <Reveal key={e.slug} delay={i * 80}>
                <ListingCard estate={e} variant="compact" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <InquiryCTA
        eyebrow="Private Showing"
        title="Some estates are best"
        emphasis="experienced in person."
        body="Showings are scheduled directly with Luke or his private team. Tell us when you're in town — we'll arrange the visit, the context, and the conversation."
      />
    </PageLayout>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { absoluteUrl } from "@/lib/seo";

type ListingPreview = { slug: string; address: string; price?: string; location?: string; heroPhoto?: string };

type Props = {
  slug: string;
  address: string;
  price?: string;
  location?: string;
  propertyType?: string;
  heroPhoto?: string;
  inquiryHref?: string;
};

function buildPreview(props: Props): ListingPreview {
  return {
    slug: props.slug,
    address: props.address,
    price: props.price,
    location: props.location,
    heroPhoto: props.heroPhoto,
  };
}

function buildShareText({ address, price, location, propertyType }: Props) {
  return [
    address,
    price,
    location,
    propertyType,
  ]
    .filter(Boolean)
    .join(" | ");
}

export function ListingActionPanel(props: Props) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const savedSlugs = JSON.parse(window.localStorage.getItem("lml:saved-listings") || "[]") as string[];
      return savedSlugs.includes(props.slug);
    } catch {
      return false;
    }
  });
  const url = useMemo(() => absoluteUrl(`/listings/${props.slug}`), [props.slug]);
  const shareText = useMemo(
    () => buildShareText({
      slug: props.slug,
      address: props.address,
      price: props.price,
      location: props.location,
      propertyType: props.propertyType,
    }),
    [props.slug, props.address, props.price, props.location, props.propertyType]
  );

  useEffect(() => {
    try {
      const recent = JSON.parse(window.localStorage.getItem("lml:recent-listings:v2") || "[]") as ListingPreview[];
      const preview = buildPreview({
        slug: props.slug,
        address: props.address,
        price: props.price,
        location: props.location,
        heroPhoto: props.heroPhoto,
      });
      const next = [preview, ...recent.filter((item) => item.slug !== props.slug)].slice(0, 8);
      window.localStorage.setItem("lml:recent-listings:v2", JSON.stringify(next));
    } catch {
      // Browser storage is optional. The listing still works without it.
    }
  }, [props.slug, props.address, props.price, props.location, props.heroPhoto]);

  async function copyLink() {
    try {
      await window.navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy listing link", url);
    }
  }

  async function shareListing() {
    if (navigator.share) {
      try {
        await navigator.share({ title: props.address, text: shareText, url });
        return;
      } catch {
        return;
      }
    }
    await copyLink();
  }

  function toggleSaved() {
    try {
      const savedSlugs = JSON.parse(window.localStorage.getItem("lml:saved-listings") || "[]") as string[];
      const savedPreviews = JSON.parse(window.localStorage.getItem("lml:saved-listings:v2") || "[]") as ListingPreview[];
      const isAlreadySaved = savedSlugs.includes(props.slug);
      const next = isAlreadySaved
        ? savedSlugs.filter((slug) => slug !== props.slug)
        : [props.slug, ...savedSlugs].slice(0, 20);
      const nextPreviews = isAlreadySaved
        ? savedPreviews.filter((item) => item.slug !== props.slug)
        : [buildPreview(props), ...savedPreviews.filter((item) => item.slug !== props.slug)].slice(0, 20);
      window.localStorage.setItem("lml:saved-listings", JSON.stringify(next));
      window.localStorage.setItem("lml:saved-listings:v2", JSON.stringify(nextPreviews));
      setSaved(next.includes(props.slug));
    } catch {
      setSaved((value) => !value);
    }
  }

  const partnerHref = `mailto:?subject=${encodeURIComponent(`Review this Nelson property: ${props.address}`)}&body=${encodeURIComponent(`${shareText}\n\n${url}\n\nReview this with Luke Mori if the property looks like a real fit.`)}`;

  return (
    <div className="rounded-[1.35rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 shadow-[0_24px_70px_-58px_rgba(0,0,0,0.9)] sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-4">
        <div>
          <p className="m-0 text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--color-bronze)]">
            Share Desk
          </p>
          <p className="m-0 mt-1 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
            Send the property to a partner, advisor, or family decision-maker.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <button type="button" onClick={shareListing} className="action-button">
          Share
        </button>
        <button type="button" onClick={copyLink} className="action-button">
          {copied ? "Copied" : "Copy Link"}
        </button>
        <button type="button" onClick={toggleSaved} className="action-button">
          {saved ? "Saved" : "Save Listing"}
        </button>
        <a href={partnerHref} className="action-button">
          Send to Partner
        </a>
      </div>

      <a
        href={props.inquiryHref || "/contact"}
        className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-button-text)] transition-colors hover:border-[var(--color-bronze-light)] hover:bg-[var(--color-bronze-light)]"
      >
        Ask Luke About This Property
      </a>

      <style jsx>{`
        .action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          border: 1px solid var(--color-line-strong);
          border-radius: 999px;
          padding: 0.75rem 0.9rem;
          color: var(--color-text);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: border-color 220ms ease, color 220ms ease, background 220ms ease;
        }
        .action-button:hover {
          border-color: var(--color-bronze);
          color: var(--color-bronze-light);
          background: rgba(212, 184, 150, 0.08);
        }
      `}</style>
    </div>
  );
}

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

  return (
    <div className="luxury-card group rounded-[1.35rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-4 shadow-[0_24px_70px_-58px_rgba(0,0,0,0.9)] transition-[transform,border-color,background,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-bg)] sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-4 border-b border-[var(--color-line)] pb-4">
        <div>
          <p className="m-0 text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--color-bronze)]">
            Share This Property
          </p>
          <p className="m-0 mt-1 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
            Send the property to a partner, family member, or someone helping with the decision.
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
      </div>
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
          transition: transform 500ms var(--ease-luxe), border-color 500ms var(--ease-luxe), color 500ms var(--ease-luxe), background 500ms var(--ease-luxe);
        }
        .action-button:hover {
          transform: translateY(-2px);
          border-color: var(--color-bronze);
          color: var(--color-bronze-light);
          background: rgba(212, 184, 150, 0.08);
        }
      `}</style>
    </div>
  );
}

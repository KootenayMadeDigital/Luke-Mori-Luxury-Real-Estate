import Image from "next/image";

type SoldProof = {
  image: string;
  imageAlt: string;
  status: string;
  address: string;
  area: string;
  type: string;
  offered: string;
};

type Props = {
  lead: SoldProof;
  note?: string;
};

export function FrostedSoldProof({ lead }: Props) {
  return (
    <article aria-label={`${lead.address}, recently sold`} className="luxury-card group relative min-h-[560px] overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[rgba(255,255,255,0.035)] p-1.5 shadow-[0_34px_100px_-62px_rgba(0,0,0,0.95)] transition-[transform,border-color,box-shadow] duration-700 ease-[var(--ease-luxe)] hover:-translate-y-1 hover:border-[var(--color-bronze)]">
      <div className="relative h-full min-h-[548px] overflow-hidden rounded-[calc(2rem-0.375rem)]">
        <Image
          src={lead.image}
          alt={lead.imageAlt}
          fill
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="luxury-media object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.1),rgba(10,11,13,0.18)_34%,rgba(10,11,13,0.94))]" />
        <div className="absolute left-6 top-6 rounded-full border border-[rgba(245,239,229,0.34)] bg-[rgba(10,11,13,0.58)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[rgba(255,252,246,0.96)] shadow-[0_18px_60px_-40px_rgba(0,0,0,0.95)]">
          {lead.status}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
          <div className="mb-5 font-serif text-[70px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,239,229,0.88)] sm:text-[92px]">
            Sold
          </div>
          <div className="grid grid-cols-1 gap-5 border-t border-[rgba(245,239,229,0.2)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <h2 className="m-0 font-serif text-[34px] font-light leading-[1.04] tracking-[-0.01em] text-[rgba(255,252,246,0.96)] drop-shadow-[0_3px_18px_rgba(0,0,0,0.95)] sm:text-[46px]">
                {lead.address}
              </h2>
              <p className="m-0 mt-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[rgba(255,252,246,0.86)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                {lead.area} · {lead.type}
              </p>
            </div>
            <div className="font-serif text-[30px] italic text-[rgba(255,252,246,0.94)] drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)]">
              {lead.offered}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

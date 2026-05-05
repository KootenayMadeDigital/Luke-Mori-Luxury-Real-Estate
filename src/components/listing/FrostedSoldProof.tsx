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
  note: string;
};

export function FrostedSoldProof({ lead, note }: Props) {
  return (
    <article aria-label={`${lead.address}, recently sold`} className="luxury-card group relative min-h-[540px] overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_34px_100px_-64px_rgba(0,0,0,0.82)] transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)]">
      <Image
        src={lead.image}
        alt={lead.imageAlt}
        fill
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="luxury-media object-cover transition-transform duration-700 ease-[var(--ease-luxe)] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        priority
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,13,0.08),rgba(10,11,13,0.1)_30%,rgba(10,11,13,0.58)_64%,rgba(10,11,13,0.94))]" />

      <div className="absolute left-6 top-6 z-10 rounded-[1px] border border-[rgba(255,255,255,0.3)] bg-[rgba(10,11,13,0.9)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_34px_-18px_rgba(0,0,0,0.95)] backdrop-blur-sm">
        {lead.status}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-9">
        <div className="mb-6 font-serif text-[62px] font-light uppercase leading-none tracking-[0.08em] text-[rgba(245,239,229,0.96)] drop-shadow-[0_4px_28px_rgba(0,0,0,0.92)] sm:text-[88px]">
          Sold
        </div>
        <div className="grid grid-cols-1 gap-5 border-t border-[rgba(245,239,229,0.22)] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="m-0 mb-3 inline-flex border border-[rgba(255,255,255,0.22)] bg-[rgba(10,11,13,0.54)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.88)] backdrop-blur-[2px]">
              Recently sold
            </p>
            <h2 className="m-0 inline-flex bg-[rgba(10,11,13,0.38)] px-3 py-2 font-serif text-[32px] font-light leading-[1.04] tracking-[-0.01em] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-[2px] sm:text-[44px]">
              {lead.address}
            </h2>
            <p className="m-0 mt-3 inline-flex bg-[rgba(10,11,13,0.34)] px-3 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] backdrop-blur-[2px]">
              {lead.area} · {lead.type}
            </p>
            <p className="m-0 mt-3 max-w-[620px] bg-[rgba(10,11,13,0.34)] px-3 py-2 text-[14px] leading-[1.65] text-white/90 backdrop-blur-[2px]">
              {note}
            </p>
          </div>
          <div className="justify-self-start bg-[rgba(10,11,13,0.34)] px-4 py-2 font-serif text-[30px] italic text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.92)] backdrop-blur-[2px] sm:justify-self-end">
            {lead.offered}
          </div>
        </div>
      </div>
    </article>
  );
}

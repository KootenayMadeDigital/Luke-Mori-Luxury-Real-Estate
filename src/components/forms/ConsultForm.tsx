"use client";

import { useState, type FormEvent } from "react";

/* Preview form. No external service is called, submitting reveals an
   inline confirmation. The structure is real so it can be wired up later. */

const roles = [
  { value: "seller", label: "Luxury Seller" },
  { value: "buyer", label: "Private Buyer" },
  { value: "relocation", label: "Relocation" },
  { value: "second-home", label: "Second Home" },
  ];

export function ConsultForm() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("buyer");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-[rgba(212,184,150,0.55)] bg-[linear-gradient(135deg,#f7efe2,#e3d1b8_58%,#b99162)] p-1.5 shadow-[0_34px_110px_-62px_rgba(212,184,150,0.72)]"
      noValidate
    >
      <div className="rounded-[calc(2rem-0.375rem)] border border-[rgba(255,255,255,0.42)] bg-[rgba(255,252,246,0.96)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] sm:p-10 lg:p-12">
        <div className="mb-9 border-b border-[rgba(78,55,34,0.18)] pb-7">
          <h3 className="m-0 mb-3 font-serif text-[30px] font-normal leading-[1.12] tracking-[-0.01em] text-[#22170f] sm:text-[34px]">
            Open a Private File
          </h3>
          <p className="m-0 text-[15px] font-medium leading-[1.65] text-[#5c4635]">
            Seller strategy, buyer access, relocation planning, or second-home ownership. Replies are personal, within one business day.
          </p>
        </div>

        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" optional />

        <fieldset className="mb-6 border-0 p-0">
          <legend className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a351d]">
            File type
          </legend>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => {
              const active = role === r.value;
              return (
                <label key={r.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={r.value}
                    checked={active}
                    onChange={() => setRole(r.value)}
                    className="peer sr-only"
                  />
                  <span
                    className={`inline-block rounded-[1px] border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-200 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#7b4a24] ${
                      active
                        ? "border-[#6e421f] bg-[#6e421f] text-[#fff8ed] shadow-[0_12px_30px_-22px_rgba(69,38,15,0.8)]"
                        : "border-[rgba(78,55,34,0.24)] bg-[rgba(255,255,255,0.52)] text-[#5c4635] hover:border-[#8a5a30] hover:text-[#2b1b10]"
                    }`}
                  >
                    {r.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="mb-6 block">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a351d]">
            What you&apos;re looking for{" "}
            <em className="ml-1.5 not-italic text-[12px] tracking-normal text-[#7b6654]">
              (optional)
            </em>
          </span>
          <textarea
            name="notes"
            rows={3}
            placeholder="Address, timeline, privacy needs, lakefront search, walk-to-Baker heritage, ski property near Whitewater, or second-home questions."
            className="w-full resize-y rounded-none border-0 border-b border-[rgba(78,55,34,0.28)] bg-transparent py-3 font-sans text-[17px] font-medium text-[#24170f] outline-none placeholder:text-[#8b7664] transition-colors duration-200 focus:border-[#7b4a24]"
          />
        </label>

        <button
          type="submit"
          disabled={submitted}
          className="group mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#2f1a0c] bg-[#2f1a0c] px-8 py-[18px] text-[11px] font-bold uppercase tracking-[0.22em] text-[#fff8ed] shadow-[0_18px_42px_-24px_rgba(47,26,12,0.86)] transition-[background,border-color,opacity,transform] duration-300 hover:-translate-y-[1px] hover:border-[#6e421f] hover:bg-[#6e421f] disabled:opacity-60"
        >
          {submitted ? "File Opened" : "Open Private File"}
          {!submitted && (
            <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-[3px]">
              <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <p className="mt-5 text-center text-[13px] font-medium leading-[1.6] text-[#6a5543]">
          Your inquiry is held in confidence. This private file is ready to route into Luke&apos;s office workflow.
        </p>

        {submitted && (
          <div
            role="status"
            className="mt-7 border border-[#9a6b3d] bg-[rgba(255,248,237,0.78)] p-6 text-[14px] font-medium leading-[1.65] text-[#2f1a0c]"
          >
            <strong className="mb-2 block font-serif text-[18px] font-normal text-[#6e421f]">
              Thank you.
            </strong>
            Your private file has been noted. A member of the private division would be in touch within one business day.
          </div>
        )}
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
};

function Field({ label, name, type = "text", autoComplete, required, optional }: FieldProps) {
  return (
    <label className="mb-6 block">
      <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a351d]">
        {label}
        {optional && (
          <em className="ml-1.5 not-italic text-[12px] tracking-normal text-[#7b6654]">
            (optional)
          </em>
        )}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-none border-0 border-b border-[rgba(78,55,34,0.28)] bg-transparent py-3 font-sans text-[17px] font-medium text-[#24170f] outline-none transition-colors duration-200 focus:border-[#7b4a24]"
      />
    </label>
  );
}

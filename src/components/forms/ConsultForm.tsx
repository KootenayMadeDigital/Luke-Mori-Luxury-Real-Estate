"use client";

import { useState, type FormEvent } from "react";

/* Concept-only form. No external service is called, submitting reveals an
   inline confirmation. The structure is real so it can be wired up later. */

const roles = [
  { value: "buyer", label: "Prospective Buyer" },
  { value: "seller", label: "Considering Selling" },
  { value: "relocating", label: "Relocating" },
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
      className="border border-[var(--color-line)] bg-[var(--color-surface)] p-8 sm:p-12"
      noValidate
    >
      <div className="mb-9 border-b border-[var(--color-line)] pb-7">
        <h3 className="m-0 mb-3 font-serif text-[26px] font-normal leading-[1.2] tracking-[-0.005em]">
          Request the Guide &amp; a Private Consultation
        </h3>
        <p className="m-0 text-[14px] leading-[1.6] text-[var(--color-text-muted)]">
          Replies are personal, within one business day, by Luke or his private team.
        </p>
      </div>

      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" optional />

      <fieldset className="mb-6 border-0 p-0">
        <legend className="mb-3 block text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          I am a
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
                  className="sr-only"
                />
                <span
                  className={`inline-block rounded-[1px] border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                    active
                      ? "border-[var(--color-bronze)] bg-[var(--color-bronze)] text-[var(--color-bg)]"
                      : "border-[var(--color-line-strong)] text-[var(--color-text-muted)] hover:border-[var(--color-bronze)] hover:text-[var(--color-text)]"
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
        <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
          What you&apos;re looking for{" "}
          <em className="ml-1.5 not-italic text-[11px] tracking-normal text-[var(--color-text-dim)]">
            (optional)
          </em>
        </span>
        <textarea
          name="notes"
          rows={3}
          placeholder="Lakefront on the North Shore, walk-to-Baker heritage, ski property near Whitewater…"
          className="w-full resize-y rounded-none border-0 border-b border-[var(--color-line-strong)] bg-transparent py-3 font-sans text-[16px] font-light text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-bronze)]"
        />
      </label>

      <button
        type="submit"
        disabled={submitted}
        className="group mt-3 inline-flex w-full items-center justify-center gap-3 rounded-[1px] border border-[var(--color-bronze)] bg-[var(--color-bronze)] px-8 py-[18px] text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-bg)] transition-[background,border-color,opacity] duration-300 hover:bg-[var(--color-bronze-light)] hover:border-[var(--color-bronze-light)] disabled:opacity-60"
      >
        {submitted ? "Sent" : "Request the Guide"}
        {!submitted && (
          <svg viewBox="0 0 16 16" aria-hidden className="size-[14px] transition-transform duration-300 group-hover:translate-x-[3px]">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <p className="mt-5 text-center text-[12px] leading-[1.6] text-[var(--color-text-dim)]">
        By requesting, you&apos;ll receive the guide and a personal follow-up.
        Your inquiry is held in confidence.
      </p>

      {submitted && (
        <div
          role="status"
          className="mt-7 border border-[var(--color-bronze-dim)] bg-[rgba(176,138,91,0.08)] p-6 text-[14px] leading-[1.65] text-[var(--color-text)]"
        >
          <strong className="mb-2 block font-serif text-[18px] font-normal text-[var(--color-bronze-light)]">
            Thank you.
          </strong>
          A member of the private division will be in touch within one business day.
          <em className="mt-3 block font-serif text-[12px] italic text-[var(--color-text-dim)]">
            (Concept demo, no information was sent.)
          </em>
        </div>
      )}
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
      <span className="mb-3 block text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
        {label}
        {optional && (
          <em className="ml-1.5 not-italic text-[11px] tracking-normal text-[var(--color-text-dim)]">
            (optional)
          </em>
        )}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-none border-0 border-b border-[var(--color-line-strong)] bg-transparent py-3 font-sans text-[16px] font-light text-[var(--color-text)] outline-none transition-colors duration-200 focus:border-[var(--color-bronze)]"
      />
    </label>
  );
}

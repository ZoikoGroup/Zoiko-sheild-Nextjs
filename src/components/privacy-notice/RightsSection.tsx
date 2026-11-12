"use client";

import React, { useState } from "react";

/**
 * Inbox that receives data-rights requests. No rights-request API exists yet, so
 * submitting opens the visitor's email client with the request pre-filled.
 * TODO: confirm the correct rights-request inbox with the privacy team, or swap
 * the mailto hand-off for an API call once a backend endpoint exists.
 */
const RIGHTS_REQUEST_EMAIL = "b2b.privacy@zoiko.com";

const RELATIONSHIPS = [
  "Customer / account user",
  "Website visitor",
  "Job applicant",
  "Event attendee / marketing contact",
  "Partner or vendor contact",
  "Other",
];

const RIGHTS = [
  "Access a copy of my data",
  "Correct inaccurate data",
  "Delete my data",
  "Restrict or object to processing",
  "Data portability",
  "Opt out of sale / sharing",
  "Withdraw consent",
];

const JURISDICTIONS = [
  "European Union / EEA",
  "United Kingdom",
  "California (CCPA/CPRA)",
  "Other US state",
  "Canada",
  "Other region",
];

type FormState = {
  name: string;
  email: string;
  relationship: string;
  right: string;
  jurisdiction: string;
  details: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const EMPTY: FormState = { name: "", email: "", relationship: "", right: "", jurisdiction: "", details: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your full legal name.";
  if (!f.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!f.relationship) e.relationship = "Select your relationship with Zoiko.";
  if (!f.right) e.right = "Select the right you wish to exercise.";
  if (!f.jurisdiction) e.jurisdiction = "Select your jurisdiction.";
  return e;
}

function UserCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c44242" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M16 11l2 2 4-4" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
      <path d="M2 3.5L5 6.5L8 3.5" stroke="#5b6670" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const fieldBase =
  "w-full bg-white border rounded-[6px] px-3 py-2 lg:py-2 font-manrope font-normal text-[13px] text-[#0a2029] placeholder:text-[#5b6670] outline-none focus:border-[#4e668a] focus:ring-2 focus:ring-[#4e668a]/20 transition-colors";

function fieldClass(error?: string) {
  return `${fieldBase} ${error ? "border-[#c44242]" : "border-[rgba(18,59,76,0.1)]"}`;
}

function Field({
  id,
  label,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-[6px] items-start w-full ${className}`}>
      <label htmlFor={id} className="font-manrope font-semibold text-[#0a2029] text-[12px]">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="font-manrope text-[#c44242] text-[11px] m-0">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  error,
  onChange,
}: {
  id: keyof FormState;
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  error?: string;
  onChange: (id: keyof FormState, v: string) => void;
}) {
  return (
    <Field id={`rights-${id}`} label={label} error={error}>
      <div className="relative w-full">
        <select
          id={`rights-${id}`}
          value={value}
          onChange={(e) => onChange(id, e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `rights-${id}-error` : undefined}
          className={`${fieldClass(error)} appearance-none pr-8 cursor-pointer ${value ? "" : "text-[#5b6670]"}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-[#0a2029]">
              {o}
            </option>
          ))}
        </select>
        <ChevronDownIcon />
      </div>
    </Field>
  );
}

export default function RightsSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      document.getElementById(`rights-${first}`)?.focus();
      return;
    }

    const subject = `Data Rights Request: ${form.right}`;
    const body = [
      "Data Rights Request (submitted via the Zoiko Shield Privacy Notice)",
      "",
      `Full legal name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Relationship with Zoiko: ${form.relationship}`,
      `Right requested: ${form.right}`,
      `Jurisdiction: ${form.jurisdiction}`,
      "",
      "Additional details:",
      form.details.trim() || "(none provided)",
    ].join("\n");

    window.location.href = `mailto:${RIGHTS_REQUEST_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-5 lg:gap-6 items-start p-5 lg:p-[24px] rounded-[12px] w-full">
      <div className="flex gap-3 items-center w-full">
        <UserCheckIcon />
        <p className="flex-1 font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
          Your Privacy Rights Desk
        </p>
      </div>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        Depending on your location, you may have the right to access,
        correct, delete, or restrict processing of your personal data.
        Use our direct request portal below to initiate verification:
      </p>

      <form
        noValidate
        onSubmit={handleSubmit}
        aria-labelledby="rights-form-title"
        className="bg-[#f0ede6] flex flex-col gap-4 items-start p-4 lg:p-[20px] rounded-[8px] w-full"
      >
        <p id="rights-form-title" className="font-hanken font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0">
          Submit a Data Rights Request
        </p>

        {submitted ? (
          <div role="status" className="bg-white border border-[#1f7a6c] rounded-[6px] p-4 w-full flex flex-col gap-2">
            <p className="font-manrope font-bold text-[#1f7a6c] text-[13px] m-0">
              Your email app should now be open with your request pre-filled.
            </p>
            <p className="font-manrope text-[#5b6670] text-[12px] m-0">
              Send that email to complete your request. If nothing opened, email{" "}
              <a href={`mailto:${RIGHTS_REQUEST_EMAIL}`} className="text-[#c44242] font-semibold underline">
                {RIGHTS_REQUEST_EMAIL}
              </a>{" "}
              directly with your request details.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="self-start font-manrope font-bold text-[#0a2029] text-[12px] underline mt-1"
            >
              Start a new request
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
              <Field id="rights-name" label="Full Legal Name" error={errors.name}>
                <input
                  id="rights-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Enter name..."
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "rights-name-error" : undefined}
                  className={fieldClass(errors.name)}
                />
              </Field>
              <Field id="rights-email" label="Email Address" error={errors.email}>
                <input
                  id="rights-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="jane.doe@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "rights-email-error" : undefined}
                  className={fieldClass(errors.email)}
                />
              </Field>
              <SelectField
                id="relationship"
                label="Your Relationship with Zoiko"
                placeholder="Select status..."
                options={RELATIONSHIPS}
                value={form.relationship}
                error={errors.relationship}
                onChange={update}
              />
              <SelectField
                id="right"
                label="Right you wish to execute"
                placeholder="Select right..."
                options={RIGHTS}
                value={form.right}
                error={errors.right}
                onChange={update}
              />
              <SelectField
                id="jurisdiction"
                label="Jurisdiction"
                placeholder="Select state or region..."
                options={JURISDICTIONS}
                value={form.jurisdiction}
                error={errors.jurisdiction}
                onChange={update}
              />
              <Field id="rights-details" label="Additional Details (optional)" className="lg:col-span-2">
                <textarea
                  id="rights-details"
                  rows={3}
                  value={form.details}
                  onChange={(e) => update("details", e.target.value)}
                  placeholder="Anything that helps us locate your data (e.g. account email, product used)..."
                  className={`${fieldClass()} resize-y`}
                />
              </Field>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:justify-between pt-2 w-full">
              <p className="font-manrope font-normal text-[#5b6670] text-[11px] lg:max-w-[400px] m-0">
                * We will perform proportionate verification checks to
                validate identity before processing any rights requests.
              </p>
              <button
                type="submit"
                className="w-full lg:w-auto flex items-center justify-center bg-[#c44242] hover:bg-[#b23636] transition-colors px-5 py-[10px] rounded-[6px] shrink-0"
              >
                <span className="font-manrope font-bold text-white text-[13px] whitespace-nowrap">
                  Submit Request
                </span>
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

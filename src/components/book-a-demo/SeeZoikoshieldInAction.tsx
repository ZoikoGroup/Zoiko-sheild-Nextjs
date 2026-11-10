"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Square, CheckCircle2 } from "lucide-react";

const features = [
  "Explore security detection and investigation.",
  "Review AI recommendations with human oversight.",
  "Understand controlled response workflows.",
  "See how evidence supports assurance and review.",
];

const COUNTRIES = ["United States", "United Kingdom", "Germany", "Canada", "India"];

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  details: string;
  updates: boolean;
};

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const INITIAL_FORM: FormFields = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  country: "",
  details: "",
  updates: false,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  "w-full bg-white text-[#111827] text-xs md:text-sm px-3.5 py-2.5 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#C53030] shadow-sm";

function validate(form: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.firstName.trim()) errors.firstName = "First name is required.";
  if (!form.lastName.trim()) errors.lastName = "Last name is required.";
  if (!form.email.trim()) errors.email = "Work email is required.";
  else if (!EMAIL_PATTERN.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (!form.company.trim()) errors.company = "Company is required.";
  if (!form.country) errors.country = "Select a country or region.";
  return errors;
}

export default function SeeZoikoshieldInAction() {
  const [form, setForm] = useState<FormFields>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showDetails, setShowDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO(backend): no demo-request API exists yet. POST `form` to it here once available.
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setShowDetails(false);
    setSubmitted(false);
  };

  const fieldClass = (key: keyof FormFields) =>
    `${inputBase} ${errors[key] ? "border-[#C53030]" : "border-[#D1D5DB]"}`;

  const errorText = (key: keyof FormFields) =>
    errors[key] ? (
      <p id={`demo-${key}-error`} className="mt-1 text-[11px] text-[#C53030]">
        {errors[key]}
      </p>
    ) : null;

  return (
    <div className="bg-[#FFFFFF] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info & Checklist */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
              ENTERPRISE CYBERSECURITY PLATFORM
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-4">
              See ZoikoShield in action.
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-[#111827] tracking-tight mb-4">
              From security signals to defensible decisions.
            </h2>
            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed">
              See how ZoikoShield brings threat detection, investigation,
              governed AI assistance, controlled response, and verifiable
              security evidence into one enterprise workflow.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 pb-4 border-b border-[#E5E7EB] last:border-b-0"
              >
                <div className="text-[#C53030] shrink-0">
                  <Square className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm font-medium text-[#111827]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Demo Form Card */}
        <div className="lg:col-span-6 bg-[#F2F6F7] rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#111827] tracking-tight mb-1">
              Request a tailored demo
            </h3>
            <p className="text-xs md:text-sm text-[#4B5563]">
              Tell us a little about your organization so we can focus on your
              security priorities.
            </p>
          </div>

          {submitted ? (
            <div role="status" className="bg-white rounded-xl border border-[#D1D5DB] p-6 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#2C6E63] mx-auto" />
              <h4 className="text-base font-bold text-[#111827]">Thanks, {form.firstName.trim()}.</h4>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                Your demo request has been received. Our team will contact you at{" "}
                <span className="font-semibold text-[#111827]">{form.email.trim()}</span> to
                arrange a time.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-bold text-[#C53030] hover:text-[#B91C1C] transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-firstName" className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                    First name
                  </label>
                  <input
                    id="demo-firstName"
                    type="text"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                    aria-invalid={Boolean(errors.firstName)}
                    aria-describedby={errors.firstName ? "demo-firstName-error" : undefined}
                    className={fieldClass("firstName")}
                  />
                  {errorText("firstName")}
                </div>
                <div>
                  <label htmlFor="demo-lastName" className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                    Last name
                  </label>
                  <input
                    id="demo-lastName"
                    type="text"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                    aria-invalid={Boolean(errors.lastName)}
                    aria-describedby={errors.lastName ? "demo-lastName-error" : undefined}
                    className={fieldClass("lastName")}
                  />
                  {errorText("lastName")}
                </div>
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="demo-email" className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                  Work email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "demo-email-error" : undefined}
                  className={fieldClass("email")}
                />
                {errorText("email")}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="demo-company" className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                  Company
                </label>
                <input
                  id="demo-company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={errors.company ? "demo-company-error" : undefined}
                  className={fieldClass("company")}
                />
                {errorText("company")}
              </div>

              {/* Country or Region */}
              <div>
                <label htmlFor="demo-country" className="block text-[11px] font-bold text-[#374151] uppercase tracking-wider mb-1">
                  Country or region
                </label>
                <select
                  id="demo-country"
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  aria-invalid={Boolean(errors.country)}
                  aria-describedby={errors.country ? "demo-country-error" : undefined}
                  className={fieldClass("country")}
                >
                  <option value="">Select a country or region</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errorText("country")}
              </div>

              {/* Add Details Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowDetails((v) => !v)}
                  aria-expanded={showDetails}
                  aria-controls="demo-details"
                  className="text-xs font-bold text-[#C53030] hover:text-[#B91C1C] transition-colors"
                >
                  {showDetails ? "− Hide details" : "+ Add details (optional)"}
                </button>
                {showDetails && (
                  <div className="mt-2">
                    <label htmlFor="demo-details" className="sr-only">
                      Additional details
                    </label>
                    <textarea
                      id="demo-details"
                      rows={4}
                      maxLength={1000}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      placeholder="Team size, tools you use today, or what you'd like the demo to focus on."
                      className={`${inputBase} border-[#D1D5DB] resize-y`}
                    />
                  </div>
                )}
              </div>

              {/* Warning Box */}
              <div className="bg-[#FEF9E7] border border-[#FDE68A] rounded-xl p-3.5 text-[11px] md:text-xs text-[#92400E] leading-relaxed">
                <span className="font-bold">Please do not include</span>{" "}
                passwords, access keys, personal records, or live incident details
                in this form.
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="updates"
                  checked={form.updates}
                  onChange={(e) => update("updates", e.target.checked)}
                  className="mt-0.5 rounded border-[#D1D5DB] text-[#C53030] focus:ring-[#C53030]"
                />
                <label
                  htmlFor="updates"
                  className="text-[11px] text-[#4B5563] leading-relaxed"
                >
                  Send me occasional ZoikoShield product updates. This is optional
                  and is not needed to process your request.
                </label>
              </div>

              {/* Privacy Disclaimer */}
              <p className="text-[10px] text-[#6B7280] leading-relaxed">
                We use the information you provide to respond to your demo
                request. See our{" "}
                <Link
                  href="/privacy-notice"
                  className="text-[#C53030] underline font-medium"
                >
                  Privacy Notice
                </Link>
                .
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#C53030] hover:bg-[#B91C1C] text-white text-xs md:text-sm font-bold py-3.5 rounded-xl transition-colors shadow-sm text-center"
              >
                Request My Demo
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

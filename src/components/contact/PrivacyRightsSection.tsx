"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eyebrow, Field, Select, SuccessNotice, inputClass, makeReference } from "./shared";

const AUTHORITIES = ["GDPR (EU Resident)", "UK GDPR", "CCPA / CPRA (California)", "Other Regional Mandate"];
const REQUEST_TYPES = [
  "Access / Know My Data",
  "Delete My Data",
  "Correct My Data",
  "Data Portability",
  "Opt Out of Processing",
];

const EMPTY_FORM = {
  authority: AUTHORITIES[0],
  requestType: REQUEST_TYPES[0],
  email: "",
  legalName: "",
  scope: "",
};

const SELF_SERVICE = [
  {
    title: "Self-Service Cookie Preferences",
    description: "Configure your cookies, trackers, and diagnostic reporting properties in real-time.",
    cta: "Launch Consent Manager",
    href: "/cookie-notice",
  },
  {
    title: "Enterprise DPA Execution",
    description: "Download the standard Data Processing Addendum signed cryptographically by our Privacy Officer.",
    cta: "Download DPA Framework",
    href: "/privacy-notice",
  },
];

export const PrivacyRightsSection: React.FC = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [reference, setReference] = useState<string | null>(null);

  const update = (key: keyof typeof EMPTY_FORM, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReference(makeReference("DSR"));
    setForm(EMPTY_FORM);
  };

  return (
    <section
      id="privacy-rights"
      className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-4">
          <Eyebrow>05 · PRIVACY &amp; DATA SUBJECT RIGHTS</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Exercise data privacy &amp; compliance options
          </h2>
          <p className="text-gray-500 text-base font-medium font-manrope">
            In accordance with GDPR, CCPA, and regional mandates, select your regulatory intent.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Form Card */}
          <div className="flex-1 w-full p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <h3 className="text-slate-900 text-xl font-extrabold font-hanken mb-6">Privacy Request Intake</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Applicable Authority" htmlFor="privacy-authority">
                  <Select
                    id="privacy-authority"
                    options={AUTHORITIES}
                    value={form.authority}
                    onChange={(e) => update("authority", e.target.value)}
                  />
                </Field>
                <Field label="Primary Request Type" htmlFor="privacy-type">
                  <Select
                    id="privacy-type"
                    options={REQUEST_TYPES}
                    value={form.requestType}
                    onChange={(e) => update("requestType", e.target.value)}
                  />
                </Field>
                <Field label="Requester Email" htmlFor="privacy-email">
                  <input
                    id="privacy-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="identity@domain.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Legal Name" htmlFor="privacy-name">
                  <input
                    id="privacy-name"
                    type="text"
                    required
                    value={form.legalName}
                    onChange={(e) => update("legalName", e.target.value)}
                    placeholder="Alex Rivera"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Specific Identity Scope Details" htmlFor="privacy-scope">
                <textarea
                  id="privacy-scope"
                  rows={2}
                  value={form.scope}
                  onChange={(e) => update("scope", e.target.value)}
                  placeholder="Confirm your organization tenant ID or associated handles to ensure accurate lookup..."
                  className={`${inputClass} resize-y`}
                />
              </Field>

              <button
                type="submit"
                className="px-7 py-3.5 bg-sky-950 hover:bg-sky-900 text-white text-sm font-bold font-manrope rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Submit Verified Privacy Request
              </button>

              {reference && (
                <SuccessNotice>
                  Privacy request received. A verification email will follow. Reference code: {reference}
                </SuccessNotice>
              )}
            </form>
          </div>

          {/* Self-service cards */}
          <div className="w-full lg:w-[340px] xl:w-[400px] shrink-0 flex flex-col gap-5">
            {SELF_SERVICE.map((item) => (
              <div key={item.title} className="p-6 bg-[#EFEBE3] rounded-xl flex flex-col items-start gap-3">
                <h3 className="text-slate-900 text-lg font-extrabold font-hanken">{item.title}</h3>
                <p className="text-gray-500 text-sm font-manrope leading-relaxed">{item.description}</p>
                <Link
                  href={item.href}
                  className="px-3.5 py-2 rounded-md outline outline-1 outline-offset-[-1px] outline-sky-950 hover:bg-sky-950 hover:text-white text-sky-950 text-sm font-bold font-manrope transition-colors"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

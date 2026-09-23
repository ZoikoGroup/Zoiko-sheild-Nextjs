"use client";

import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Eyebrow, Field, Select, SuccessNotice, inputClass, makeReference } from "./shared";

const SCOPES = ["EDR, MDM, or Both", "EDR Only", "MDM Only", "Identity Provider (IdP)", "SIEM / Log Pipeline"];
const STAGES = ["Proof of Concept", "Pilot Deployment", "Production Rollout", "Renewal / Expansion"];
const CATEGORIES = [
  "Data Isolation Questions",
  "Regional Hosting",
  "FedRAMP & Compliance",
  "Telemetry Cryptography",
  "API Permission Scoping",
];

const EMPTY_FORM = {
  domain: "",
  scope: SCOPES[0],
  stage: STAGES[0],
  category: CATEGORIES[0],
  description: "",
};

export const ArchitectureVettingSection: React.FC = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [reference, setReference] = useState<string | null>(null);

  const update = (key: keyof typeof EMPTY_FORM, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReference(makeReference("ARCH"));
    setForm(EMPTY_FORM);
  };

  return (
    <section
      id="architecture-vetting"
      className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start justify-between gap-10">
        {/* Form Card */}
        <div className="w-full lg:w-[56%] lg:max-w-[656px] shrink-0 p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          <h3 className="text-slate-900 text-xl font-extrabold font-hanken mb-6">Security Architecture Inquiry</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Your Identity Domain" htmlFor="arch-domain">
                <input
                  id="arch-domain"
                  type="text"
                  required
                  value={form.domain}
                  onChange={(e) => update("domain", e.target.value)}
                  placeholder="domain.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Integration Scope" htmlFor="arch-scope">
                <Select
                  id="arch-scope"
                  options={SCOPES}
                  value={form.scope}
                  onChange={(e) => update("scope", e.target.value)}
                />
              </Field>
              <Field label="Platform Deployment Stage" htmlFor="arch-stage">
                <Select
                  id="arch-stage"
                  options={STAGES}
                  value={form.stage}
                  onChange={(e) => update("stage", e.target.value)}
                />
              </Field>
              <Field label="Request Category" htmlFor="arch-category">
                <Select
                  id="arch-category"
                  options={CATEGORIES}
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                />
              </Field>
            </div>

            <Field label="Technical Description" htmlFor="arch-description">
              <textarea
                id="arch-description"
                rows={2}
                required
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Explain your posture configuration or network constraints..."
                className={`${inputClass} resize-y`}
              />
            </Field>

            <button
              type="submit"
              className="px-7 py-3.5 bg-sky-950 hover:bg-sky-900 text-white text-sm font-bold font-manrope rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Send to Security Architects
            </button>

            {reference && (
              <SuccessNotice>Inquiry routed to the architecture queue. Reference code: {reference}</SuccessNotice>
            )}
          </form>
        </div>

        {/* Right Column */}
        <div className="flex-1 max-w-[500px] flex flex-col items-start gap-6">
          <Eyebrow>02 · ARCHITECTURE &amp; SECURITY VETTING</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Verified security guidelines for modern enterprises
          </h2>
          <p className="text-gray-500 text-base font-normal font-manrope leading-6">
            Zoiko Shield operates in strictly isolated environments. Submit questions directly to our system
            architects regarding data tenant isolation, regional hosting, FedRAMP, and end-to-end telemetry
            cryptography.
          </p>
          <div className="w-full p-4 bg-[#F7F5F0] rounded-lg flex items-center gap-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
            <span className="text-teal-700 text-xs font-semibold font-manrope">
              Incidents or system disclosure requests are processed on a dedicated channel below.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

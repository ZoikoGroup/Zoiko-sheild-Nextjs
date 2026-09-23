"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { Eyebrow, Field, Select, SuccessNotice, inputClass, makeReference } from "./shared";

const TOPICS = [
  "Integrations or Corporate Questions",
  "Billing & Account Scope",
  "Vendor Onboarding",
  "Website Feedback",
  "Other",
];

const EMPTY_FORM = {
  email: "",
  name: "",
  topic: TOPICS[0],
  message: "",
  acknowledged: false,
};

export const FallbackInquirySection: React.FC = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [reference, setReference] = useState<string | null>(null);

  const update = <K extends keyof typeof EMPTY_FORM>(key: K, value: (typeof EMPTY_FORM)[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReference(makeReference("GEN"));
    setForm(EMPTY_FORM);
  };

  return (
    <section
      id="fallback-inquiry"
      className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="flex-1 max-w-[500px] flex flex-col items-start gap-6">
          <Eyebrow>10 · FALLBACK GENERAL INQUIRY</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Fallback communication pipeline
          </h2>
          <p className="text-gray-500 text-base font-normal font-manrope leading-6">
            Use this form only if your required inquiry type was not specified in the dispatcher matrix. Responses
            may require additional triage and routing times.
          </p>
          <div className="w-full p-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex items-start gap-2.5">
            <Info className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-px" />
            <span className="text-gray-600 text-xs font-jetbrains leading-relaxed">
              File attachments are strictly disabled on the fallback route to prevent unvalidated payloads.
            </span>
          </div>
        </div>

        <div className="w-full lg:w-[56%] lg:max-w-[656px] shrink-0 p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          <h3 className="text-slate-900 text-xl font-extrabold font-hanken mb-6">Fallback Intake</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Email" htmlFor="fallback-email">
                <input
                  id="fallback-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@domain.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Name" htmlFor="fallback-name">
                <input
                  id="fallback-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Alex Rivera"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Topic / Interest" htmlFor="fallback-topic">
              <Select
                id="fallback-topic"
                options={TOPICS}
                value={form.topic}
                onChange={(e) => update("topic", e.target.value)}
              />
            </Field>

            <Field label="Message Details" htmlFor="fallback-message">
              <textarea
                id="fallback-message"
                rows={2}
                required
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Explain your inquiry in detail..."
                className={`${inputClass} resize-y`}
              />
            </Field>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.acknowledged}
                onChange={(e) => update("acknowledged", e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-red-500 shrink-0 cursor-pointer"
              />
              <span className="text-gray-500 text-sm font-manrope leading-snug">
                I acknowledge that fallback submissions go through standard routing queues.
              </span>
            </label>

            <button
              type="submit"
              className="px-7 py-3.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold font-manrope rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Send General Inquiry
            </button>

            {reference && (
              <SuccessNotice>Inquiry queued for standard routing. Reference code: {reference}</SuccessNotice>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

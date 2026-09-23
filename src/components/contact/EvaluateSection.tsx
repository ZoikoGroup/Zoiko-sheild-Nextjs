"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Eyebrow, Field, Select, SuccessNotice, inputClass, makeReference } from "./shared";

const GOALS = [
  "Consolidate EDR & Identity state",
  "Continuous compliance evidence",
  "Board-level risk reporting",
  "Managed detection & response",
];

const TIMELINES = ["Within 30 Days", "30 – 90 Days", "This Quarter", "Researching / No Timeline"];

const EMPTY_FORM = {
  email: "",
  name: "",
  company: "",
  role: "",
  goal: GOALS[0],
  timeline: TIMELINES[0],
  notes: "",
  consent: false,
  marketing: false,
};

export const EvaluateSection: React.FC = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [reference, setReference] = useState<string | null>(null);

  const update = <K extends keyof typeof EMPTY_FORM>(key: K, value: (typeof EMPTY_FORM)[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReference(makeReference("SALES"));
    setForm(EMPTY_FORM);
  };

  return (
    <section
      id="evaluate"
      className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-16 xl:px-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Column */}
        <div className="flex-1 max-w-[500px] flex flex-col items-start gap-6">
          <Eyebrow>01 · EVALUATE ZOIKO SHIELD</Eyebrow>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-hanken leading-tight">
            Enterprise evaluation &amp; tailored platform demos
          </h2>
          <p className="text-gray-500 text-base font-normal font-manrope leading-6">
            Our Security Architects align direct telemetry evidence parameters with your internal compliance
            blueprints. Find the correct subscription scope, deployment timelines, and API permission
            strategies.
          </p>
          <div className="w-full p-4 bg-[#EFEBE3] rounded-lg flex items-center gap-2.5">
            <Clock className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="text-gray-500 text-xs font-semibold font-manrope">
              Sales response SLA: Under 4 business hours
            </span>
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full lg:w-[56%] lg:max-w-[656px] shrink-0 p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          <h3 className="text-slate-900 text-xl font-extrabold font-hanken mb-6">
            Request Platform Architecture Demo
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Work Email" htmlFor="eval-email">
                <input
                  id="eval-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Full Name" htmlFor="eval-name">
                <input
                  id="eval-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </Field>
              <Field label="Company" htmlFor="eval-company">
                <input
                  id="eval-company"
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Enterprise Inc."
                  className={inputClass}
                />
              </Field>
              <Field label="Role / Title" htmlFor="eval-role">
                <input
                  id="eval-role"
                  type="text"
                  value={form.role}
                  onChange={(e) => update("role", e.target.value)}
                  placeholder="Chief Information Security Officer"
                  className={inputClass}
                />
              </Field>
              <Field label="Primary Security Goal" htmlFor="eval-goal">
                <Select
                  id="eval-goal"
                  options={GOALS}
                  value={form.goal}
                  onChange={(e) => update("goal", e.target.value)}
                />
              </Field>
              <Field label="Estimated Deployment Timeline" htmlFor="eval-timeline">
                <Select
                  id="eval-timeline"
                  options={TIMELINES}
                  value={form.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                />
              </Field>
            </div>

            <Field label="Tell us about your compliance goals" htmlFor="eval-notes" optional>
              <textarea
                id="eval-notes"
                rows={2}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Describe your endpoint environments and directory count..."
                className={`${inputClass} resize-y`}
              />
            </Field>

            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => update("consent", e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-red-500 shrink-0 cursor-pointer"
                />
                <span className="text-gray-500 text-sm font-manrope leading-snug">
                  I agree to the secure processing of my details under the general Zoiko Shield{" "}
                  <Link href="/privacy-notice" className="underline hover:text-slate-900">
                    Privacy Notice
                  </Link>
                  .
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.marketing}
                  onChange={(e) => update("marketing", e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-red-500 shrink-0 cursor-pointer"
                />
                <span className="text-gray-500 text-sm font-manrope leading-snug">
                  Optional: Send me architectural blueprints and new product research (No spam policy strictly
                  verified).
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="px-7 py-3.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold font-manrope rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Confirm &amp; Dispatch to Sales Team
            </button>

            {reference && (
              <SuccessNotice>
                Request dispatched to the sales queue. Reference code: {reference}
              </SuccessNotice>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { Reveal, Section, SectionHeader, fieldClass } from "./shared";

const labelClass = "font-sans font-bold text-[14px] text-[#0a2029]";

export default function RequestReviewSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section tone="light" id="request-review">
      <SectionHeader
        eyebrow="Enterprise Intake"
        title="Request a Security Review"
        description="Need deeper vetting? Provide details below to dispatch architectural support."
      />

      <Reveal className="w-full bg-white border border-[rgba(18,59,76,0.1)] rounded-[16px] p-5 sm:p-10">
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Requester Email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="e.g., architect@enterprise.com"
                className={fieldClass}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClass}>NDA Status</span>
              <select name="nda" defaultValue="active" className={fieldClass}>
                <option value="active">Active NDA on File</option>
                <option value="pending">NDA Pending Signature</option>
                <option value="none">No NDA Yet</option>
              </select>
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Message / Scope Request</span>
            <textarea
              name="message"
              rows={2}
              required
              placeholder="Describe specific compliance systems or certifications needed for review..."
              className={`${fieldClass} resize-y min-h-[50px]`}
            />
          </label>

          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-sans text-[12px] text-[#5b6670] m-0">
              Expect review routing to security leads within 24 hours.
            </p>
            <button
              type="submit"
              className="px-6 py-3 rounded-[8px] bg-[#c44242] hover:bg-[#b23636] transition-colors font-manrope font-bold text-[15px] text-white"
            >
              Dispatch Review Request
            </button>
          </div>

          {submitted && (
            <p role="status" className="font-manrope text-[14px] text-[#5b6670] bg-[#f0ede6] rounded-[8px] px-4 py-3 m-0">
              This form isn&apos;t connected yet. Please email{" "}
              <a href="mailto:security@zoikoshield.com" className="text-[#c44242] underline">
                security@zoikoshield.com
              </a>{" "}
              or use the{" "}
              <a href="/contact" className="text-[#c44242] underline">
                contact page
              </a>{" "}
              to request a review.
            </p>
          )}
        </form>
      </Reveal>
    </Section>
  );
}

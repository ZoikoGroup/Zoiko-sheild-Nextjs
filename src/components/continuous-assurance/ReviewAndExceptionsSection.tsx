"use client";

import React from "react";
import SectionEyebrow from "./SectionEyebrow";
import BoundaryNotice from "./BoundaryNotice";

const REVIEW_RECORD = [
  "Question",
  "Reviewer / authority",
  "Basis",
  "Scope",
  "Conclusion",
  "Open questions",
  "Limitations",
  "Follow-up",
];

const EXCEPTION_GOVERNANCE = [
  "Reason",
  "Scope",
  "Owner",
  "Approval",
  "Compensating context",
  "Review / expiry",
];

export default function ReviewAndExceptionsSection() {
  return (
    <section className="bg-[#EEEBE7] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Review + exceptions" tone="teal" />

        <h2 className="mb-4 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-[#0B2530] sm:text-3xl lg:text-4xl">
          Every judgment has an accountable owner.
        </h2>

        <p className="mb-8 max-w-2xl font-manrope text-sm leading-relaxed text-[#6B7280] sm:text-base">
          Questions, assessments, decisions and unresolved items remain
          attributable from review through follow-up.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#0B2530]/10 bg-white p-5 sm:p-7">
            <h3 className="mb-4 font-hanken text-lg font-extrabold text-[#0B2530] sm:text-xl">
              Review record
            </h3>
            <ul>
              {REVIEW_RECORD.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 border-b border-[#0B2530]/10 py-3.5 last:border-b-0"
                >
                  <span className="font-manrope text-sm text-[#0B2530]">
                    {item}
                  </span>
                  <span className="shrink-0 font-jetbrains text-[10px] uppercase tracking-wide text-[#0F766E]">
                    Attributed
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#0F3B44] p-5 sm:p-7">
            <h3 className="mb-4 font-hanken text-lg font-extrabold text-white sm:text-xl">
              Exception governance
            </h3>
            <ul>
              {EXCEPTION_GOVERNANCE.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 border-b border-white/15 py-3.5 last:border-b-0"
                >
                  <span className="font-manrope text-sm text-white">
                    {item}
                  </span>
                  <span className="shrink-0 font-jetbrains text-[10px] uppercase tracking-wide text-[#E8A398]">
                    Required
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <BoundaryNotice>
          Assessments and exception decisions retain accountable human
          authority.
        </BoundaryNotice>
      </div>
    </section>
  );
}

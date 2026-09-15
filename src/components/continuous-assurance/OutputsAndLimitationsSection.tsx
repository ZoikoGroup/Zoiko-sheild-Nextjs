"use client";

import React from "react";
import SectionEyebrow from "./SectionEyebrow";
import BoundaryNotice from "./BoundaryNotice";

const DELIVERABLES = [
  "Evidence review summary",
  "Control context brief",
  "Assessment record",
  "Exception register",
  "Open-items tracker",
  "Executive assurance brief",
];

export default function OutputsAndLimitationsSection() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Outputs + limitations" tone="red" />

        <h2 className="mb-8 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-[#0B2530] sm:text-3xl lg:text-4xl">
          Approved deliverables. Clearly bounded claims.
        </h2>

        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h3 className="mb-4 font-hanken text-lg font-bold text-[#0B2530] sm:text-xl">
              Approved deliverable classes
            </h3>
            <ul className="space-y-3">
              {DELIVERABLES.map((item) => (
                <li
                  key={item}
                  className="flex flex-col gap-2 rounded-lg border border-[#0B2530]/10 bg-white px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-manrope text-sm font-semibold text-[#0B2530]">
                    {item}
                  </span>
                  <span className="shrink-0 font-jetbrains text-[10px] uppercase tracking-wide text-[#0F766E]">
                    Draft &rarr; Reviewed &rarr; Approved
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/continuous-assurance/assurance-review.webp"
                alt="Two assurance reviewers examining control and evidence dashboards on screen"
                width={460}
                height={430}
                loading="lazy"
                decoding="async"
                className="h-auto w-full max-w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <BoundaryNotice>
            Do not label outputs as &ldquo;audit report,&rdquo;
            &ldquo;attestation,&rdquo; &ldquo;certificate&rdquo; or
            &ldquo;opinion&rdquo; unless approved.
          </BoundaryNotice>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0B2530]/10 bg-white p-5 sm:p-6">
            <h3 className="mb-3 font-hanken text-base font-bold text-[#0B2530] sm:text-lg">
              Bounded AI assistance
            </h3>
            <p className="font-manrope text-sm leading-6 text-[#6B7280]">
              Retrieval, summarization and explanation only — never assurance
              authority.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0B2530]/10 bg-white p-5 sm:p-6">
            <h3 className="mb-3 font-hanken text-base font-bold text-[#0B2530] sm:text-lg">
              What varies
            </h3>
            <p className="font-manrope text-sm leading-6 text-[#6B7280]">
              Scope, cadence, framework coverage, evidence sources, review model
              and outputs are engagement-specific.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

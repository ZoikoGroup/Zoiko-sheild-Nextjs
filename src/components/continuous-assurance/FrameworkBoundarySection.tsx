"use client";

import React from "react";
import SectionEyebrow from "./SectionEyebrow";
import BoundaryNotice from "./BoundaryNotice";

export default function FrameworkBoundarySection() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Framework boundary" tone="red" />

        <h2 className="mb-8 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-[#0B2530] sm:text-3xl lg:text-4xl">
          Alignment is versioned — never implied.
        </h2>

        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0B2530]/10 bg-white p-5 sm:p-6">
            <h3 className="mb-3 font-hanken text-base font-bold text-[#0B2530] sm:text-lg">
              Conditional destination
            </h3>
            <p className="font-manrope text-sm leading-6 text-[#6B7280]">
              Framework Coverage is linked only when ready and separately
              governed.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0B2530]/10 bg-white p-5 sm:p-6">
            <h3 className="mb-3 font-hanken text-base font-bold text-[#0B2530] sm:text-lg">
              Text, not badges
            </h3>
            <p className="font-manrope text-sm leading-6 text-[#6B7280]">
              Program-alignment references are text-based and versioned — never
              represented as certification marks.
            </p>
          </div>
        </div>

        <BoundaryNotice>
          Framework alignment is separately gated, never certification by
          implication.
        </BoundaryNotice>
      </div>
    </section>
  );
}

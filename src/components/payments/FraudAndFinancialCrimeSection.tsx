"use client";

import React from "react";

export default function FraudAndFinancialCrimeSection() {
  return (
    <section className="w-full bg-[#EEEBE7] py-16 md:py-24 text-[#0F172A] font-sans overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              FRAUD, ABUSE AND FINANCIAL CRIME
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            A signal is not a finding. A priority is not guilt.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl">
            Security and fraud signals can support investigation. Consequential
            financial or customer decisions require separately authorized
            methods and people &mdash; and each rung below states where its
            authority stops.
          </p>
        </div>

        {/* Graphic Showcase Container */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="aspect-[16/9] relative">
            <img
              src="/images/payments/2.png"
              alt="Fraud, abuse and financial crime workflow graphic"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

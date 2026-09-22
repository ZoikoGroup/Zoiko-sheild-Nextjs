"use client";

import React from "react";

export const EvidentiaryAssuranceSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              EVIDENTIARY ASSURANCE
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Customer &amp; Telemetry Proof Policy
          </h2>
        </div>

        {/* Notice Card */}
        <div className="p-6 sm:p-7 bg-stone-200/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 flex flex-col md:flex-row items-start gap-4 shadow-xs">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] shrink-0 pt-0.5">
            [🔐 COMPLIANCE EXCLUSION NOTICE]
          </div>
          <div className="flex-1 text-slate-900 text-sm font-normal font-['Manrope'] leading-relaxed">
            To protect our users from targeted operations, Zoiko Tech strictly avoids publishing generic customer-logo walls, non-vetted vanity metrics, or anonymous case studies. Verifiable telemetry case reports are available under strict Non-Disclosure Agreements (NDA) via the talk to security portal.
          </div>
        </div>
      </div>
    </section>
  );
};

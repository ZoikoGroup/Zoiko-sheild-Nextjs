import React from "react";
import Image from "next/image";

const INCLUSIONS = [
  "Secure multi-region cloud tenant allocation",
  "Full continuous policy evaluation engine",
  "Diagnostic dashboard & read-only directory tracking",
  "Automated nightly evidence ledger integrity verification",
  "Initial tenant baseline & setup architecture review",
];

export const CoreInclusionsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f4ee] border-b border-stone-200/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
                  — CORE INCLUSIONS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
                Common Quote Components
              </h2>
              <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
                These base layers are typical in standard agreements, but cannot be guaranteed for complex multitenant isolated deployments.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {INCLUSIONS.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-xs sm:text-[13px] text-slate-800 font-['Manrope']">
                  <span className="text-teal-600 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Illustration Asset */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-900">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/how-pricing-works/Operations-Illustration.png"
                  alt="Operations and Infrastructure Inclusions"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

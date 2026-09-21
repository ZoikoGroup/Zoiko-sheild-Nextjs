import React from "react";

export const ComplianceNoticeSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f6f4ee] border-b border-stone-200/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — REGULATORY COMPLIANCE LEDGER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Cryptographic Assurance Verification
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Zoiko Shield compiles audit-ready evidence ledgers backed by mathematical proof. We verify that security policies map accurately to continuous host state without gaps.
          </p>
        </div>

        {/* Critical Compliance Notice Box */}
        <div className="bg-white rounded-xl p-5 sm:p-6 outline outline-1 outline-red-400 shadow-xs flex flex-col md:flex-row items-start gap-3 md:gap-6">
          <div className="text-red-500 font-['JetBrains_Mono'] text-xs font-bold uppercase tracking-wider shrink-0 pt-0.5">
            CRITICAL COMPLIANCE NOTICE
          </div>
          <p className="text-xs sm:text-[13px] text-slate-700 font-['Manrope'] leading-relaxed">
            * Zoiko Shield provides continuous technical verification mechanisms and immutable ledger storage. The use of Zoiko Shield does not constitute a certified SOC2 audit, HIPAA compliance guarantee, or regulatory certification. Independent third-party auditor evaluation remains necessary to confirm final compliance status.
          </p>
        </div>
      </div>
    </section>
  );
};

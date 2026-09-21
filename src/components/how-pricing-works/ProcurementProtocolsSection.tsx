import React from "react";

interface ProtocolItem {
  title: string;
  description: string;
}

const PROTOCOLS: ProtocolItem[] = [
  {
    title: "Billing Intervals",
    description:
      "Core platform fees are invoiced annually in advance. Prorated scope expansions are billed monthly in arrears.",
  },
  {
    title: "Purchase Orders & Terms",
    description:
      "Corporate Net 30 payment processing is supported subject to credit verification. Authorized PO required prior to tenant generation.",
  },
  {
    title: "Regional Compliance",
    description:
      "Tax calculation varies by local geographic authority. Isolated storage partitions comply natively with EU-GDPR or US-HIPAA guidelines.",
  },
];

export const ProcurementProtocolsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-stone-300/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — PROCUREMENT PROTOCOLS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Commercial Invoicing Parameters
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Standard guidelines governing corporate invoicing, payment processing, tax treatments, and custom currencies.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROTOCOLS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-start"
            >
              <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

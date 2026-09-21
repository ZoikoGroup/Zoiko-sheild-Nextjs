import React from "react";

interface SlaTier {
  title: string;
  description: string;
}

const TIERS: SlaTier[] = [
  {
    title: "Tier 1: Standard support",
    description:
      "Standard business-hour SLA coverage. Inbound ticket support, access to detailed architecture documentation, and platform upgrade streams.",
  },
  {
    title: "Tier 2: Premier Response",
    description:
      "24/7/365 critical-incident response SLA. Directly integrated webhook notifications and active engineering escalation channels.",
  },
  {
    title: "Tier 3: Named Architect",
    description:
      "Includes dedicated integration architect for custom directory schema correlation, onboarding, and monthly architecture risk audits.",
  },
];

export const ImplementationSlaSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-stone-300/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — IMPLEMENTATION &amp; SLA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Services, Onboarding &amp; Support SLAs
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Onboarding paths scale with architecture complexity. Choose the continuous operational tier required for your security operations center.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-start"
            >
              <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-3">
                {tier.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                {tier.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

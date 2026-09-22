import React from "react";

interface Step {
  step: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    title: "Target Definition",
    description: "Submit current active host and user data.",
  },
  {
    step: "02",
    title: "Arch Validation",
    description: "Verify directory schemas and connection pathways.",
  },
  {
    step: "03",
    title: "Policy Check",
    description: "Select read-only vs dual-party remediation options.",
  },
  {
    step: "04",
    title: "Certified Quote",
    description: "Our underwriters release an authoritative price proposal.",
  },
  {
    step: "05",
    title: "Active Deploy",
    description: "Tenant setup starts instantly upon proposal execution.",
  },
];

export const IntegrityPipelineSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-stone-200/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — COMMERCIAL INTEGRITY PIPELINE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            The Five Steps to Certified Scope Pricing
          </h2>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-start min-h-[160px]"
            >
              <div className="text-[11px] font-bold font-['JetBrains_Mono'] text-red-500 tracking-wider uppercase mb-2">
                {s.step}
              </div>
              <h3 className="text-base font-bold text-slate-900 font-['Hanken_Grotesk'] mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-slate-600 font-['Manrope'] leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

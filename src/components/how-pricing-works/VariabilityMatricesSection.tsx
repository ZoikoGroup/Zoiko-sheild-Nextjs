import React from "react";

interface MatrixItem {
  title: string;
  description: string;
}

const MATRICES: MatrixItem[] = [
  {
    title: "Scope Expansion",
    description:
      "Adding new EDR hosts or directories shifts active tier ceilings. These are prorated down to the calendar day.",
  },
  {
    title: "Remediation Activation",
    description:
      "Transitioning from purely passive compliance monitoring to active dual-party containment rules.",
  },
  {
    title: "Deployment Shifts",
    description:
      "Migrating from our shared public partition to dedicated isolated tenant environments or isolated infrastructure.",
  },
];

export const VariabilityMatricesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-stone-300/80 py-16 sm:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — VARIABILITY MATRICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            What Can Adjust Your Price
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            Commercial plans maintain predictability, but structural modifications to your technology landscape will impact scope boundaries.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MATRICES.map((mat) => (
            <div
              key={mat.title}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-start"
            >
              <h3 className="text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-3">
                {mat.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

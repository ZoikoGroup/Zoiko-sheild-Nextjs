"use client";

import React, { useState } from "react";

const INSTITUTIONS = [
  "Financial Services & FinTech (general)",
  "Retail / Commercial Banking",
  "Digital Banks / Neobanks",
  "Payments / Processors",
  "Lending / BNPL",
  "Wealth / Capital Markets",
  "FinTech Infrastructure / SaaS",
  "Digital Asset Infrastructure",
];

interface InstitutionSelectorProps {
  onSelect?: (institution: string) => void;
}

export const InstitutionSelectorSection: React.FC<InstitutionSelectorProps> = ({
  onSelect,
}) => {
  const [selected, setSelected] = useState(INSTITUTIONS[0]);

  const handleSelect = (inst: string) => {
    setSelected(inst);
    if (onSelect) onSelect(inst);
  };

  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-14 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Header */}
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <div className="w-5 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-widest">
              CHOOSE YOUR INSTITUTION TYPE
            </span>
          </div>

          <h2 className="text-slate-900 text-2xl sm:text-3xl font-bold font-['Hanken_Grotesk'] leading-tight">
            See risk examples and proof relevant to how you operate.
          </h2>
        </div>

        {/* Institution Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 max-w-5xl pt-2">
          {INSTITUTIONS.map((item) => {
            const isActive = selected === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleSelect(item)}
                className={`h-10 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold font-['Manrope'] transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-800 outline outline-1 outline-offset-[-1px] outline-cyan-950/15 hover:outline-cyan-950/30 hover:bg-stone-50"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

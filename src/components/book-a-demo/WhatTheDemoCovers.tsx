import React from "react";

const steps = [
  {
    step: "01",
    title: "Detect",
    description:
      "Surface meaningful security signals from connected environments.",
    youllSee: "An illustrative alerts and detection overview.",
  },
  {
    step: "02",
    title: "Investigate",
    description:
      "Connect signals to case context, timelines and relevant evidence.",
    youllSee: "A case workspace and analyst review.",
  },
  {
    step: "03",
    title: "Decide",
    description:
      "Examine governed AI guidance and human-controlled response decisions.",
    youllSee: "Reviewable AI proposals and controlled actions.",
  },
  {
    step: "04",
    title: "Prove",
    description:
      "Understand how security actions and evidence support defensible review.",
    youllSee: "Compliance controls and audit evidence.",
  },
];

export default function WhatTheDemoCovers() {
  return (
    <div className="bg-[#F2F6F7] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            WHAT THE DEMO COVERS
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] mb-3">
            Detect. Investigate. Decide. Prove.
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base max-w-xl leading-relaxed">
            One connected workflow, walked end to end — using illustrative,
            synthetic examples rather than live customer data.
          </p>
        </div>

        {/* 4-Step Grid Card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
            {steps.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number with Accent Bar */}
                  <div className="relative pt-3 mb-4">
                    <span className="absolute top-0 left-0 w-8 h-[2px] bg-[#C53030]"></span>
                    <span className="text-xs font-bold text-[#C53030] font-mono tracking-wider">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6 min-h-[48px]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-dashed border-[#E5E7EB]">
                  <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-1">
                    YOU'LL SEE
                  </p>
                  <p className="text-xs text-[#374151]">{item.youllSee}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

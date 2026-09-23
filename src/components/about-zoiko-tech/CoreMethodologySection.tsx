"use client";

import React from "react";

interface PrincipleCard {
  principle: string;
  title: string;
  description: string;
}

const PRINCIPLES: PrincipleCard[] = [
  {
    principle: "PRINCIPLE 01",
    title: "Evidence Before Assertion",
    description:
      "We do not present simulated compliant states. All dashboard health data is verified dynamically against active EDR and MDM direct syncs.",
  },
  {
    principle: "PRINCIPLE 02",
    title: "Human-Governed Intelligence",
    description:
      "Automation speeds telemetry collation, but any active remediation (e.g. node isolation) requires dual-party human consent.",
  },
  {
    principle: "PRINCIPLE 03",
    title: "Least Privilege by Design",
    description:
      "Zoiko Shield functions entirely with Read-Only credentials, collecting posture audit paths without posing access boundary overreach risks.",
  },
];

export const CoreMethodologySection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6]  border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              CORE METHODOLOGY
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Our Operating Principles
          </h2>

          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed">
            How we think, build, and operate Zoiko Shield. Every principle is directly bound to verifiable platform actions.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRINCIPLES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4 h-full"
            >
              <div className="space-y-3">
                <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono']">
                  {item.principle}
                </div>
                <h3 className="text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk'] leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm font-normal font-['Manrope'] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

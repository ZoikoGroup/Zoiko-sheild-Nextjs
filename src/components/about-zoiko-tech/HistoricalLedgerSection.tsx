"use client";

import React from "react";

interface Milestone {
  number: string;
  title: string;
  description: string;
  isCustomDesc?: boolean;
  status: string;
  statusClass: string;
}

const MILESTONES: Milestone[] = [
  {
    number: "01",
    title: "Corporate Registry",
    description:
      "Zoiko Tech Inc. officially registered. Establishment of global headquarters in Sacramento, California.",
    status: "[VERIFIED 2026]",
    statusClass: "text-teal-700",
  },
  {
    number: "02",
    title: "Product Launch",
    description:
      "Zoiko Shield architecture released. Deployment of continuous verification engines across key registry sectors.",
    status: "[VERIFIED 2026]",
    statusClass: "text-teal-700",
  },
  {
    number: "03",
    title: "Regulatory Milestones",
    description: "[🔒 Inactive: Vetting Audit Pending]",
    isCustomDesc: true,
    status: "[PENDING]",
    statusClass: "text-gray-500",
  },
];

export const HistoricalLedgerSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              HISTORICAL LEDGER
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Registry timeline
          </h2>
        </div>

        {/* 3 Milestone Rows */}
        <div className="space-y-3.5">
          {MILESTONES.map((item) => (
            <div
              key={item.number}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-5"
            >
              <div className="text-red-500 text-lg font-extrabold font-['JetBrains_Mono'] w-8 shrink-0">
                {item.number}
              </div>

              <div className="w-full md:w-52 text-slate-900 text-base font-extrabold font-['Hanken_Grotesk'] shrink-0">
                {item.title}
              </div>

              <div
                className={`flex-1 text-sm font-normal ${
                  item.isCustomDesc
                    ? "text-amber-700 font-['JetBrains_Mono'] text-xs font-bold"
                    : "text-gray-500 font-['Manrope']"
                }`}
              >
                {item.description}
              </div>

              <div
                className={`text-xs font-normal font-['JetBrains_Mono'] shrink-0 ${item.statusClass}`}
              >
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";

interface SummaryMetric {
  label: string;
  value: string;
  labelColor: string;
}

const metrics: SummaryMetric[] = [
  {
    label: "ACTIVE MAINTENANCE NOW",
    value: "1 In Progress",
    labelColor: "text-[#C44242]",
  },
  {
    label: "NEXT 7 DAYS",
    value: "2 Scheduled",
    labelColor: "text-[#0A2029]",
  },
  {
    label: "NEXT 30 DAYS",
    value: "4 Events Planned",
    labelColor: "text-[#5E6670]",
  },
  {
    label: "AFFECTED COMPONENTS",
    value: "Identity, Endpoint",
    labelColor: "text-[#4E668A]",
  },
  {
    label: "LAST REGISTRY SYNC",
    value: "10m ago (Verifiable)",
    labelColor: "text-[#1F7A6C]",
  },
];

export default function MaintenanceSummaryStrip() {
  return (
    <section className="w-full bg-[#F0EDE6] border-y border-[#123B4C]/10 py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-1.5 border-l-2 border-transparent pl-2 sm:pl-0"
            >
              <span
                className={`font-jetbrains text-[11px] sm:text-xs font-bold tracking-[0.0727em] uppercase ${item.labelColor}`}
              >
                {item.label}
              </span>
              <span className="font-hanken font-extrabold text-base sm:text-lg text-[#0A2029]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

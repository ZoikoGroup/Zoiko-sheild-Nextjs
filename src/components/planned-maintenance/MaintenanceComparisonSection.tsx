"use client";

import React from "react";
import Image from "next/image";

interface RuleCard {
  icon: string;
  title: string;
  description: string;
}

const rules: RuleCard[] = [
  {
    icon: "/images/planned-maintenance/alert-triangle.svg",
    title: "Strict Limit Overruns",
    description:
      "If an active maintenance window exceeds scheduled runtimes by more than 15 minutes, it is instantly escalated and converted to a tracked service incident.",
  },
  {
    icon: "/images/planned-maintenance/shield-alert.svg",
    title: "Automated Rollbacks",
    description:
      "Any migration task failing its pre-completion health checks for three consecutive attempts triggers automatic node rollbacks and logs the state.",
  },
  {
    icon: "/images/planned-maintenance/shield-check.svg",
    title: "Continuous Assurance Checks",
    description:
      "System status is constantly checked by off-site monitoring nodes. We expose unmanaged device posturing and active integration drift.",
  },
];

export default function MaintenanceComparisonSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 sm:py-20 lg:py-24 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C44242]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-[0.0833em] text-[#C44242] uppercase">
              DEFENSIBLE ASSURANCE RULES
            </span>
          </div>
          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029] tracking-tight">
            Planned Maintenance vs. Incidents
          </h2>
          <p className="font-manrope text-base sm:text-[17px] text-[#5E6670] leading-relaxed">
            Planned operational upgrades never hide ongoing incident reports.
            We uphold strict transparency thresholds for enterprise compliance
            verification.
          </p>
        </div>

        {/* 3 Rule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#123B4C]/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F0EDE6] flex items-center justify-center p-2.5">
                <Image
                  src={rule.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="w-5 h-5 object-contain"
                />
              </div>

              <h3 className="font-hanken font-extrabold text-lg sm:text-xl text-[#0A2029]">
                {rule.title}
              </h3>

              <p className="font-manrope text-sm text-[#5E6670] leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export const AcronymAliasRegistrySection: React.FC = () => {
  const registryRows = [
    {
      acronym: "EDR",
      resolution: "Endpoint Detection & Response",
      aliases: "MDR, XDR, Host Agent",
      status: "Resolved (Canonical)",
      statusType: "teal",
    },
    {
      acronym: "PIM / PAM",
      resolution: "Privileged Identity Management",
      aliases: "Privileged Access Management",
      status: "Overlap (Co-Mapped)",
      statusType: "amber",
    },
    {
      acronym: "SIEM",
      resolution: "Security Information & Event Mgmt",
      aliases: "SEM, SIM, Log Collector",
      status: "Resolved (Canonical)",
      statusType: "teal",
    },
    {
      acronym: "SOAR",
      resolution: "Security Orchestration, Automation & Response",
      aliases: "SecOps Automation, IR Playbooks",
      status: "Resolved (Canonical)",
      statusType: "teal",
    },
    {
      acronym: "IAM / CIAM",
      resolution: "Identity & Access Management",
      aliases: "Customer IAM, Directory Federation",
      status: "Overlap (Co-Mapped)",
      statusType: "amber",
    },
  ];

  const filtered = registryRows;

  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase">
            RESOLVING AMBIGUITY
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Acronym &amp; Alias Registry
          </h2>
        </div>

        {/* Card */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 shadow-xs flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-gray-500 text-base font-normal font-['Manrope'] max-w-5xl">
              In security compliance, acronyms often overlap. This utility
              displays how Zoiko Shield routes aliases to canonical definitions.
            </p>

            
          </div>

          {/* Table Container */}
          <div className="w-full bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-cyan-950/10 overflow-x-auto">
            <div className="min-w-[760px]">
              {/* Table Header */}
              <div className="px-6 py-3 bg-stone-200 flex items-center">
                <div className="w-44 shrink-0 text-slate-900 text-xs font-bold font-['JetBrains_Mono']">
                  Acronym
                </div>
                <div className="w-72 shrink-0 text-slate-900 text-xs font-bold font-['JetBrains_Mono']">
                  Primary Term Resolution
                </div>
                <div className="w-72 shrink-0 text-slate-900 text-xs font-bold font-['JetBrains_Mono']">
                  Alternative Aliases / Routing
                </div>
                <div className="flex-1 text-slate-900 text-xs font-bold font-['JetBrains_Mono']">
                  Ambiguity Status
                </div>
              </div>

              {/* Table Rows */}
              {filtered.map((row, idx) => (
                <div
                  key={idx}
                  className={`px-6 py-3.5 flex items-center transition-colors hover:bg-stone-50 ${
                    idx !== filtered.length - 1
                      ? "border-b border-cyan-950/10"
                      : ""
                  }`}
                >
                  <div className="w-44 shrink-0 text-slate-900 text-sm font-extrabold font-['Hanken_Grotesk']">
                    {row.acronym}
                  </div>
                  <div className="w-72 shrink-0 text-slate-900 text-sm font-normal font-['Manrope']">
                    {row.resolution}
                  </div>
                  <div className="w-72 shrink-0 text-gray-500 text-xs font-normal font-['Manrope']">
                    {row.aliases}
                  </div>
                  <div className="flex-1 flex items-center">
                    <div
                      className={`px-2 py-0.5 rounded-sm inline-flex items-center text-xs font-bold font-['JetBrains_Mono'] ${
                        row.statusType === "teal"
                          ? "bg-gray-200 text-teal-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {row.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

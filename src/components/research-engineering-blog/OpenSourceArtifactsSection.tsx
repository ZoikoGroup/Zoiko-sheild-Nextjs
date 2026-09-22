"use client";

import React from "react";

export const OpenSourceArtifactsSection: React.FC = () => {
  const tools = [
    {
      status: "ACTIVE BUILD",
      version: "V2.4.1",
      statusType: "active",
      name: "zoiko-kernel-scanner",
      description:
        "Low-overhead host utility to map kernel memory page tables and verify EDR communication sensor integrity.",
      license: "LICENSE: Apache 2.0",
      security: "SECURITY: Verified safe build",
    },
    {
      status: "ACTIVE BUILD",
      version: "V1.0.8",
      statusType: "active",
      name: "entra-pim-examiner",
      description:
        "Audit utility to gather standing access parameters and verify structural elevation windows across directories.",
      license: "LICENSE: MIT",
      security: "SECURITY: Verified safe build",
    },
    {
      status: "PLANNED",
      version: "SPEC-ONLY",
      statusType: "planned",
      name: "compliance-evidence-ledger",
      description:
        "Reference code model for structured evidence storage using isolated secure containers.",
      license: "LICENSE: Apache 2.0",
      security: "SECURITY: Under technical review",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              OPEN SOURCE &amp; ARTIFACTS
            </span>
          </div>
          <h2 className="text-slate-900 text-3xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Verifiable Code &amp; Research Tooling
          </h2>
        </div>

        {/* 3 Tool Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold font-['JetBrains_Mono'] ${
                      tool.statusType === "active"
                        ? "text-teal-700"
                        : "text-slate-400"
                    }`}
                  >
                    {tool.status}
                  </span>
                  <span className="text-slate-400 text-xs font-normal font-['JetBrains_Mono']">
                    {tool.version}
                  </span>
                </div>

                <h3 className="text-slate-900 text-lg font-extrabold font-['Hanken_Grotesk']">
                  {tool.name}
                </h3>

                <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="space-y-1 text-xs font-normal font-['JetBrains_Mono'] text-slate-400">
                <div>{tool.license}</div>
                <div>{tool.security}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

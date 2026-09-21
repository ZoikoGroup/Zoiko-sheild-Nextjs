"use client";

import React from "react";

export const PublishingTeamsSection: React.FC = () => {
  const teams = [
    {
      name: "Core Systems Architecture",
      description:
        "Responsible for low-overhead telemetry agents, event pipelines, and kernel space integrity scans.",
    },
    {
      name: "AI Research & Safety",
      description:
        "Evaluates cognitive injection vulnerabilities, multi-modal alignment schemas, and agentic loop limits.",
    },
    {
      name: "Compliance Engineering",
      description:
        "Designs cryptographic evidence schemas, write remediation controls, and immutable ledger APIs.",
    },
    {
      name: "Threat Operations Group",
      description:
        "Monitors active wild exploits, publishes CVE profiles, and tracks identity posture bypass patterns.",
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-slate-900 text-2xl font-extrabold font-['Hanken_Grotesk']">
          Publishing Core Teams
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((team, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs flex flex-col justify-start items-start gap-3 transition-all"
            >
              <h3 className="text-slate-900 text-base font-extrabold font-['Hanken_Grotesk'] leading-snug">
                {team.name}
              </h3>
              <p className="text-gray-500 text-xs font-normal font-['Manrope'] leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

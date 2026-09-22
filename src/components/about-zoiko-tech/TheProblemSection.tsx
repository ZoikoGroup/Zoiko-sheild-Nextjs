"use client";

import React from "react";
import { TriangleAlert, ShieldAlert, UserCheck } from "lucide-react";

export const TheProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <TriangleAlert className="w-5 h-5 text-red-500" />,
      title: "The Fragmentation Gap",
      description:
        "MDM states say compliant, yet local EDR sensors remain uncommunicative or inactive. Posture check passes, leaving critical systems vulnerable.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-red-500" />,
      title: "Source Authority Matters",
      description:
        "Security tools must run with verifiable, cryptographically-bound direct-from-source logs. No black-box interpolations or simulated compliance.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-red-500" />,
      title: "Accountable AI & Interop",
      description:
        "We deliver machine-assisted analysis strictly bound by human governance. No unmonitored AI decision paths or hard locked-in proprietary data schemes.",
    },
  ];

  return (
    <section className="w-full bg-[#F0EDE6] border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              THE PROBLEM
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Security decisions need evidence, not assumptions.
          </h2>

          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed">
            Enterprises operate on fragmented endpoint, identity, and SaaS tooling. This separation creates massive visibility blind spots, requiring analysts to manually stitch Okta logins to CrowdStrike telemetry, leaving space for human error and unmanaged drift. We built Zoiko Tech to serve as the unified operating layer that validates, matches, and proves state programmatically.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-cyan-950/10 hover:outline-cyan-950/25 shadow-xs hover:shadow-md transition-all flex flex-col justify-start items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center border border-red-100">
                {card.icon}
              </div>

              <h3 className="text-slate-900 text-xl font-extrabold font-['Hanken_Grotesk']">
                {card.title}
              </h3>

              <p className="text-gray-500 text-sm font-normal font-['Manrope'] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

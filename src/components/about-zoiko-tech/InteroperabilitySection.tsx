"use client";

import React from "react";
import Link from "next/link";

interface SystemCard {
  category: string;
  name: string;
}

const SYSTEMS: SystemCard[] = [
  {
    category: "EDR REGISTRY",
    name: "CrowdStrike / Defender",
  },
  {
    category: "IDENTITY PROVIDER",
    name: "Okta / Entra ID",
  },
  {
    category: "DEVICE MANAGEMENT",
    name: "Jamf / Intune",
  },
];

export const InteroperabilitySection: React.FC = () => {
  return (
    <section className="w-full bg-[#F0EDE6]  border-b border-cyan-950/10 py-16 sm:py-20 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
              INTEROPERABILITY
            </span>
          </div>

          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight">
            Built to work with the systems enterprises already operate.
          </h2>

          <p className="text-gray-500 text-base font-normal font-['Manrope'] leading-relaxed">
            Zoiko Tech strictly avoids vendor lock-in. We build open integrations directly linking endpoint registries and directory systems to respect original, verified source context.
          </p>
        </div>

        {/* 3 Systems Horizontal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SYSTEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-stone-200/90 rounded-xl outline outline-1 outline-cyan-950/10 flex flex-col justify-start items-start gap-2 shadow-xs"
            >
              <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono']">
                {item.category}
              </div>
              <div className="text-slate-900 text-base sm:text-lg font-extrabold font-['Hanken_Grotesk']">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/integration-catalog"
            className="px-6 py-3.5 bg-red-500 hover:bg-red-600 text-white text-sm font-bold font-['Manrope'] rounded-lg transition-colors shadow-xs cursor-pointer"
          >
            Explore Integration Ecosystem
          </Link>

          <Link
            href="/request-an-integration"
            className="px-6 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-900 hover:bg-black/5 text-slate-900 text-sm font-bold font-['Manrope'] transition-colors cursor-pointer"
          >
            View Partner-Assisted Deployment
          </Link>
        </div>
      </div>
    </section>
  );
};

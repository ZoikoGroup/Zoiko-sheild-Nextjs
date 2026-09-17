import React from "react";
import { Check } from "lucide-react";

const leftCardItems = [
  "Use case/action/output scope",
  "Class",
  "Eligible reviewer/approver",
  "Conditions + expiry",
  "Revalidation triggers",
  "Override/escalation",
  "History + evidence refs",
];

const rightCardsData = [
  {
    title: "USE CASE / PURPOSE",
    description: "Allowed purpose · actor/role · context/consequence",
  },
  {
    title: "TOOL / ACTION",
    description:
      "Read/write/external action · target + parameters · technical permission",
  },
  {
    title: "HUMAN AUTHORITY",
    description:
      "Reviewer/approver role · eligibility + delegation · separation of duties",
  },
];

const bottomCardsData = [
  {
    title: "RUNTIME CONTEXT",
    description:
      "Scope + policy · freshness/material change · availability/fallback",
  },
  {
    title: "OUTCOME / HISTORY",
    description:
      "Advisory, reviewed, approved, rejected, prohibited, expired/revoked, corrected, escalated",
  },
];

export default function PolicyAnatomy() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center">
      <div className="w-full max-w-6xl">
        {/* Header section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            POLICY ANATOMY
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            AI Decision Rights policy record model
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Attributable policy, authority, runtime context and history travel
            together.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Left Dark Card */}
          <div className="lg:col-span-5 bg-[#123B4C] text-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#E4F0EC] text-[#1F7A6C] text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase mb-6">
                DECISION-RIGHT POLICY
              </div>
              <p className="text-xs font-mono tracking-wider text-[#5FE3C5] mb-6">
                POL-ADR-0042 · VERSION 7.3
              </p>

              <ul className="space-y-4">
                {leftCardItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-sm text-[#E2E8F0]"
                  >
                    <span className="text-[#34D399] shrink-0">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {rightCardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]"
              >
                <h3 className="text-xs font-bold tracking-wider text-[#111827] uppercase mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bottomCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]"
            >
              <h3 className="text-xs font-bold tracking-wider text-[#111827] uppercase mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-xs text-[#6B7280] leading-relaxed  mx-auto">
            Exact mappings, roles and thresholds remain authority-gated.
            Material changes to purpose, target, action, data, policy, role,
            conditions, authoritative model/provider or provider state trigger
            re-evaluation.
          </p>
        </div>
      </div>
    </div>
  );
}

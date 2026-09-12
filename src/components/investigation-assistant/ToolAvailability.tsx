"use client";

import React from "react";

export default function ToolAvailability() {
  const steps = [
    {
      number: "01",
      title: "Propose",
      description:
        "Explain why the tool is relevant and what scope it would use.",
    },
    {
      number: "02",
      title: "Authorize",
      description:
        "Revalidate technical permission and the decision-right requirement.",
    },
    {
      number: "03",
      title: "Parameterize",
      description: "Inspectable scope where safe. No hidden broadening.",
    },
    {
      number: "04",
      title: "Execute",
      description:
        "Approved endpoint only. Server-side authorization is authoritative.",
    },
    {
      number: "05",
      title: "Receive",
      description: "Capture provenance and the result or failure state.",
    },
    {
      number: "06",
      title: "Interpret",
      description:
        "Explain the result without erasing the raw authoritative one.",
    },
    {
      number: "07",
      title: "Partial",
      description:
        "Label partial or unknown. No missing field completed by guess.",
    },
    {
      number: "08",
      title: "Retry / stop",
      description:
        "Approved idempotency rules only; stop behaviour respected and recorded.",
    },
    {
      number: "09",
      title: "History",
      description:
        "Request, approval, execution, result, correction and fallback preserved.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              TOOLS AND PERMISSIONS
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Tool availability is not permission.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-3xl leading-relaxed">
            And permission is not approval, and approval is not response
            authority. Every tool carries identity, purpose, input scope,
            technical class, permission requirements, decision-right
            requirement, result contract and failure behaviour.
          </p>
        </div>

        {/* 9 Steps Grid Card */}
        <div className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] overflow-hidden shadow-sm mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
            {steps.map((step, index) => (
              <div key={index} className="p-5 flex flex-col justify-start">
                <span className="text-[#DC2626] text-xs font-bold mb-2 block">
                  {step.number}
                </span>
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  {step.title}
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Card */}
        <div className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 md:p-8 shadow-sm relative overflow-hidden">
          {/* Left Red Accent Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#E0402F]" />
          <div className="pl-2">
            <h2 className="font-bold text-[#111827] text-sm md:text-[15px] mb-2">
              No automatic side effects
            </h2>
            <p className="text-xs md:text-[13px] text-[#4B5563] leading-relaxed max-w-5xl">
              Nothing is sent externally, no ticket is created, no configuration
              is changed and no response action runs unless that exact tool,
              that exact action and its decision-right path are approved. A tool
              result from an external provider inherits that provider&apos;s
              limitations &mdash; assistant prose cannot upgrade it into
              certainty. And a tool is never silently substituted for a more
              privileged one when the intended tool is unavailable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

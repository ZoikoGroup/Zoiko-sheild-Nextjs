import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface SecurityPolicy {
  title: string;
  description: string;
  pill: string;
}

const policies: SecurityPolicy[] = [
  {
    title: "1. Assistive Classification Only",
    description:
      "Our algorithms assist in mapping controls, summarizing dense framework versions, and sorting incoming logs. Humans remain the sole authority for final verification.",
    pill: "Human-In-The-Loop Enforced",
  },
  {
    title: "2. No Autonomous Decision-Making",
    description:
      "Zoiko will never automatically sign off on controls, accept risk waivers, or resolve discrepancies autonomously. The platform serves strictly as an immutable ledger.",
    pill: "Strict Isolation Guardrails",
  },
];

export default function ComplianceSecuritySection() {
  return (
    <section className="w-full bg-[#F7F5F0] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="COMPLIANCE SECURITY" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Audit-ready data isolation & strict AI policy guardrails
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            We protect your telemetry. Zoiko employs clear mathematical classification models, rejecting automated compliance decision loops.
          </p>
        </div>

        {/* 2 Column Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {policies.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between gap-4 rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="font-hanken text-[20px] font-extrabold text-[#0A2029]">
                  {item.title}
                </h3>
                <p className="font-manrope text-[14px] leading-relaxed text-[#5B6670]">
                  {item.description}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center rounded-full bg-[#E4F0EC] px-3 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] text-[#1F7A6C]">
                  {item.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

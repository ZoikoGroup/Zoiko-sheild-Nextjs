import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface FrameworkMapping {
  framework: string;
  requirement: string;
  pill: string;
}

const mappings: FrameworkMapping[] = [
  {
    framework: "SOC 2 Type II",
    requirement: "CC6.3 - Device Posture Standards",
    pill: "Direct Mapping",
  },
  {
    framework: "ISO/IEC 27001:2022",
    requirement: "A.8.20 - Network Security Configuration",
    pill: "Supporting mapping",
  },
  {
    framework: "NIST SP 800-53 r5",
    requirement: "SC-7 - Boundary Protection",
    pill: "Inherited (External)",
  },
];

export default function FrameworkReuseSection() {
  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="Obligation reuse" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Map once. Prove many. Never claim compliance.
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            A single operational control can satisfy SOC 2, ISO 27001, and custom GRC frameworks. Mapping indicates evidence lineage, not auditor certifications.
          </p>
        </div>

        {/* 3 Framework Mapping Rows */}
        <div className="flex flex-col gap-4">
          {mappings.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-5 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="w-full sm:w-[220px] shrink-0">
                <span className="font-jetbrains text-[16px] font-extrabold text-[#0A2029]">
                  {item.framework}
                </span>
              </div>

              <div className="flex-1">
                <span className="font-manrope text-[14px] text-[#5B6670]">
                  {item.requirement}
                </span>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center rounded-full bg-[#DDEAF9] px-3 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] text-[#4E668A]">
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

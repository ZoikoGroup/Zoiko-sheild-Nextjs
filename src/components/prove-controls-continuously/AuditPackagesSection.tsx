import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface AuditPackage {
  title: string;
  description: string;
  pill: string;
  pillColor: string;
  pillBg: string;
}

const packages: AuditPackage[] = [
  {
    title: "SOC 2 Q4 2025 Audit Package",
    description:
      "Includes all effective controls, mapped Okta system events, device compliance logs, and risk exceptions from Oct 1 to Dec 31.",
    pill: "Signed Manifest (14.2 MB)",
    pillColor: "text-[#1F7A6C]",
    pillBg: "bg-[#E4F0EC]",
  },
  {
    title: "ISO 27001 Re-certification Portal",
    description:
      "Read-only reviewer dashboard enabled. Auditor access logged directly to cryptographic activity ledger.",
    pill: "Auditor Session Active",
    pillColor: "text-[#4E668A]",
    pillBg: "bg-[#DDEAF9]",
  },
];

export default function AuditPackagesSection() {
  return (
    <section className="w-full bg-[#F7F5F0] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="DEFENSIBLE REVIEWS" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            On-demand audit packages & read-only reviewer portals
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Generate cryptographically signed, immutable zip packages or grant temporary, permission-controlled portal access directly to external GRC auditors.
          </p>
        </div>

        {/* 2 Column Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between gap-4 rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="font-hanken text-[20px] font-extrabold text-[#0A2029]">
                  {pkg.title}
                </h3>
                <p className="font-manrope text-[14px] leading-relaxed text-[#5B6670]">
                  {pkg.description}
                </p>
              </div>

              <div>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] ${pkg.pillBg} ${pkg.pillColor}`}
                >
                  {pkg.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

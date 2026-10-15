import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface RoleCard {
  role: string;
  tag: string;
  scope: string;
}

const roles: RoleCard[] = [
  {
    role: "Compliance / GRC Admin",
    tag: "Full GRC Read/Write",
    scope:
      "Direct control schema configuration, exception processing, and framework mappings.",
  },
  {
    role: "Control / Platform Owner",
    tag: "Scoped Control Owner",
    scope:
      "Assign test automation credentials, delegate task actions, resolve continuous posture drift.",
  },
  {
    role: "External Auditor / Reviewer",
    tag: "Audit Portal (Read-Only)",
    scope:
      "Review evidence packages, timeline manifests, and trace cryptographic provenance.",
  },
];

export default function OrganizationalAlignmentSection() {
  return (
    <section className="w-full bg-[#F7F5F0] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="ORGANIZATIONAL ALIGNMENT" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Role-specific dashboards & segregation of duties
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Unify GRC specialists, security leaders, platform teams, and external compliance auditors in one collaborative ledger workspace.
          </p>
        </div>

        {/* 3 Role Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {roles.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="font-hanken text-[20px] font-extrabold text-[#0A2029]">
                {item.role}
              </h3>
              <div>
                <span className="font-jetbrains text-[12px] font-medium text-[#C44242]">
                  {item.tag}
                </span>
              </div>
              <p className="font-manrope text-[14px] leading-relaxed text-[#5B6670]">
                {item.scope}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

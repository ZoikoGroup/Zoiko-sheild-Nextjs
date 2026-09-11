"use client";

import React from "react";

interface RoleRow {
  role: string;
  definition: string;
  doesNotImplyTitle: string;
  doesNotImplyBody: string;
}

const ROLES: RoleRow[] = [
  {
    role: "Customer incident commander",
    definition:
      "Holds command, directs the response and makes the consequential calls.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody: "That ZoikoShield assumes command by default.",
  },
  {
    role: "Customer approver",
    definition:
      "Approves defined containment, access and communication actions.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody:
      "Availability at any hour, or approval inferred from silence.",
  },
  {
    role: "Customer system owners",
    definition: "Own system change, business continuity and recovery effects.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody: "That we perform recovery engineering.",
  },
  {
    role: "Customer legal / privacy",
    definition:
      "Provide authority for privilege, reportability and regulatory obligations.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody: "That we determine any of those.",
  },
  {
    role: "ZoikoShield service owner",
    definition: "Service scope, operating model, escalation and corrections.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody: "Customer risk acceptance.",
  },
  {
    role: "ZoikoShield responder",
    definition:
      "Triage, investigate and prepare recommendations within scope and entitlement.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody:
      "Unbounded action authority, or specialist capability by default.",
  },
  {
    role: "Third-party providers",
    definition:
      "Cloud, SaaS, MSSP, insurer, counsel, PR and forensic specialists operate their own scope.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody:
      "That we control their cooperation, availability or evidence.",
  },
  {
    role: "Responder roster",
    definition: "Published as capability category and entitlement.",
    doesNotImplyTitle: "DOES NOT IMPLY",
    doesNotImplyBody:
      "Named individuals, or that a roster proves availability.",
  },
];

export default function AuthorityAndRolesTableSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              AUTHORITY AND ROLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Decided in advance, not during.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Every role below is worth naming while nobody is under pressure. The
            column on the right is the one that prevents an argument at 3am.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl border border-[#CBD5E1] shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <tbody>
              {ROLES.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    idx !== ROLES.length - 1 ? "border-b border-[#CBD5E1]" : ""
                  }
                >
                  {/* 1st Column */}
                  <td className="w-1/4 p-5 bg-[#EEEBE7] text-xs font-bold text-[#0F172A] align-top">
                    {row.role}
                  </td>

                  {/* 2nd Column */}
                  <td className="w-2/5 p-5 bg-white text-xs sm:text-sm text-[#475569] leading-relaxed align-top">
                    {row.definition}
                  </td>

                  {/* 3rd Column */}
                  <td className="w-7/24 p-5 bg-[#FCF9F4] text-xs align-top">
                    <span className="block font-mono font-bold text-[10px] tracking-widest text-[#7E5A22] uppercase mb-1">
                      {row.doesNotImplyTitle}
                    </span>
                    <span className="text-[#7E5A22] leading-relaxed block">
                      {row.doesNotImplyBody}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

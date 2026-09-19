"use client";

import React from "react";

const tocItems = [
  "At-a-Glance Summary",
  "Scope & Applicability",
  "Our Privacy Roles",
  "Personal Data Inventory",
  "Why We Process Data",
  "Security & Telemetry",
  "AI & Processing Registry",
  "Sharing & Subprocessors",
  "International Transfers",
  "Retention Criteria",
  "Privacy Rights Desk",
  "US State Disclosures",
  "Governance & Controls",
];

export default function TocSidebar() {
  return (
    <aside className="hidden lg:flex flex-col gap-6 items-start w-[280px] shrink-0 sticky top-6 self-start">
      <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[12px] w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">
          TABLE OF CONTENTS
        </p>
        {tocItems.map((item, i) => (
          <div
            key={item}
            className={`flex gap-2 items-center px-3 py-2 rounded-[6px] w-full ${
              i === 0 ? "bg-[#e9e5dc]" : ""
            }`}
          >
            {i === 0 && <div className="bg-[#c44242] h-4 w-[3px] shrink-0" />}
            <p
              className={`font-manrope text-[13px] m-0 truncate ${
                i === 0 ? "font-bold text-[#c44242]" : "font-medium text-[#5b6670]"
              }`}
            >
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[12px] w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[13px] m-0">
          JURISDICTIONAL CONTEXT
        </p>
        <div className="flex gap-2 items-center w-full">
          <div className="bg-[#1f7a6c] rounded-full size-2 shrink-0" />
          <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
            Rights Service Active
          </p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="bg-[#4e668a] rounded-full size-2 shrink-0" />
          <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
            EU-US DPF Status: Active
          </p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="bg-[#b45309] rounded-full size-2 shrink-0" />
          <p className="font-manrope font-normal text-[#5b6670] text-[12px] m-0">
            Locale: United States (EN)
          </p>
        </div>
      </div>
    </aside>
  );
}

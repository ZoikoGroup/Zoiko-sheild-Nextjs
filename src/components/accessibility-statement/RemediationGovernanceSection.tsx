"use client";

import React from "react";

const cards = [
  {
    title: "Shift-Left Design System",
    desc: "We maintain validated color ratios, semantic header components, and accessible keyboard targets directly inside our design primitives.",
  },
  {
    title: "Issue Severity Classifications",
    desc: "Accessibility issues are categorized into Critical, High, and Medium impact vectors based on automated testing heuristics.",
  },
  {
    title: "Pre-Release Automated QA",
    desc: "Every deploy pipeline executes Deque Axe Core unit-test suites to enforce continuous regression assurance.",
  },
];

export default function RemediationGovernanceSection() {
  return (
    <section className="hidden lg:block bg-[#f7f5f0] w-full">
      <div className="flex flex-col gap-10 mx-auto max-w-[1440px] px-[108px] py-[60px]">
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="flex gap-3 items-center w-full">
            <div className="bg-[#c44242] h-[2px] w-6 shrink-0" />
            <p className="font-jetbrains font-bold text-[13px] text-[#c44242] tracking-[1.5px] uppercase m-0">
              INTERNAL CONTROLS
            </p>
          </div>
          <h2 className="font-hanken font-extrabold text-[28px] text-[#0a2029] tracking-[-0.5px] m-0 w-full">
            Remediation Governance &amp; Issue Severity
          </h2>
          <p className="font-manrope font-medium leading-[23px] text-[15px] text-[#5b6670] m-0 w-full">
            Our design system primitives and regression QA ensure we
            capture bugs early in the release cycle.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 w-full">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 items-start p-6 rounded-[12px]"
            >
              <p className="font-hanken font-extrabold text-[#0a2029] text-[18px] m-0">{c.title}</p>
              <p className="font-manrope font-normal text-[#5b6670] text-[14.5px] m-0">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

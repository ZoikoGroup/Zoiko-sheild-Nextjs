"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const domains = [
  { domain: "Security Practices", owner: "Office of CISO", cadence: "Quarterly", framework: "SOC 2 Trust Services Criteria" },
  { domain: "Privacy & Data Protection", owner: "Data Protection Officer", cadence: "Continuous", framework: "GDPR / HIPAA Shielding" },
  { domain: "Responsible AI", owner: "AI Ethics Committee", cadence: "Semi-annual", framework: "ISO 42001 Standard Draft" },
];

const headers = ["Trust Domain", "Owner", "Review Cadence", "Primary Framework"];

export default function OwnershipSection() {
  return (
    <Section tone="light">
      <SectionHeader eyebrow="Control Policies" title="Assigned ownership and governance" />

      {/* Mobile: stacked cards */}
      <div className="flex flex-col gap-4 w-full md:hidden">
        {domains.map((d) => (
          <Reveal key={d.domain} className={`${cardClass} p-5 flex flex-col gap-3`}>
            <p className="font-sans font-bold text-[15px] text-[#0a2029] m-0">{d.domain}</p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 m-0 pt-3 border-t border-[rgba(18,59,76,0.1)]">
              {[
                ["Owner", d.owner],
                ["Cadence", d.cadence],
                ["Framework", d.framework],
              ].map(([k, v]) => (
                <React.Fragment key={k}>
                  <dt className="font-sans font-semibold text-[12px] text-[#5b6670] uppercase pt-px">{k}</dt>
                  <dd className="font-manrope text-[14px] text-[#0a2029] m-0">{v}</dd>
                </React.Fragment>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>

      {/* Tablet & desktop: table */}
      <Reveal className={`hidden md:block ${cardClass} overflow-hidden w-full`}>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f0ede6]">
              {headers.map((h) => (
                <th key={h} className="font-sans font-bold text-[13px] text-[#0a2029] text-left uppercase px-4 py-5">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {domains.map((d) => (
              <tr key={d.domain} className="border-t border-[rgba(18,59,76,0.1)]">
                <td className="px-4 py-4 font-sans font-bold text-[14px] text-[#0a2029]">{d.domain}</td>
                <td className="px-4 py-4 font-manrope text-[14px] text-[#5b6670]">{d.owner}</td>
                <td className="px-4 py-4 font-manrope text-[14px] text-[#5b6670]">{d.cadence}</td>
                <td className="px-4 py-4 font-manrope text-[14px] text-[#5b6670]">{d.framework}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}

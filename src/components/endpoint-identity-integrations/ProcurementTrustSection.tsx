"use client";

import React from "react";
import { Reveal, Section, SectionHeader, cardClass } from "./shared";

const items = [
  {
    q: "Is write access required?",
    a: "No. You can run completely Read-Only to collect compliance evidence. Write permissions are required only if you decide to govern remediation actions.",
  },
  {
    q: "How are users matched to devices?",
    a: "Zoiko Shield correlates hardware serials from your MDM with the user sessions active in your directories — matching with zero interpolation.",
  },
  {
    q: "Where is evidence data stored?",
    a: "All generated evidentiary records stay isolated in your designated region, complete with immutability guarantees.",
  },
];

export default function ProcurementTrustSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Procurement Trust"
        title="Built for strict enterprise guidelines"
        description="Answers to standard security architecture, directory privilege overreach, and data isolation parameters."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {items.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.06} className={`${cardClass} p-6 flex flex-col gap-3`}>
            <h3 className="font-hanken font-extrabold text-[17px] text-[#0a2029] m-0">{item.q}</h3>
            <p className="font-manrope text-[14px] leading-[21px] text-[#5b6670] m-0">{item.a}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

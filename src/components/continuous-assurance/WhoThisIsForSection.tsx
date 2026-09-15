"use client";

import React from "react";
import SectionEyebrow from "./SectionEyebrow";
import BoundaryNotice from "./BoundaryNotice";

const STAKEHOLDERS: { role: string; question: string }[] = [
  {
    role: "CISO / Security leadership",
    question:
      "What assurance work is in scope, what evidence supports it, and what remains a customer decision?",
  },
  {
    role: "GRC / Compliance leadership",
    question:
      "How can controls, tests, assessments, exceptions and evidence support an assurance engagement?",
  },
  {
    role: "Audit / Assurance stakeholders",
    question:
      "What can be inspected, and what does ZoikoShield not claim to certify or attest?",
  },
  {
    role: "Procurement / Risk",
    question:
      "What is the service boundary, responsibility model and proof posture?",
  },
  {
    role: "Security operations",
    question:
      "Does Continuous Assurance replace or depend on Managed Defense?",
  },
  {
    role: "Executive / Board",
    question:
      "How is assurance context connected to evidence and risk without hiding limitations?",
  },
];

export default function WhoThisIsForSection() {
  return (
    <section className="bg-[#EEEBE7] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow label="Who this is for" tone="teal" />

        <h2 className="mb-4 font-hanken text-2xl font-extrabold leading-tight tracking-tight text-[#0B2530] sm:text-3xl lg:text-4xl">
          Assurance questions, made explicit.
        </h2>

        <p className="mb-8 max-w-2xl font-manrope text-sm leading-relaxed text-[#6B7280] sm:text-base">
          Each stakeholder sees the boundaries, source records and decisions
          relevant to their role.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STAKEHOLDERS.map((item) => (
            <div
              key={item.role}
              className="rounded-2xl border border-[#0B2530]/10 bg-white p-5"
            >
              <p className="mb-3 font-jetbrains text-[11px] font-bold uppercase tracking-wide text-[#0F766E]">
                {item.role}
              </p>
              <p className="font-hanken text-base font-bold leading-6 text-[#0B2530]">
                {item.question}
              </p>
            </div>
          ))}
        </div>

        <BoundaryNotice>
          Continuous Assurance is an independent assurance-led starting path —
          not a substitute for customer judgment or Managed Defense.
        </BoundaryNotice>
      </div>
    </section>
  );
}

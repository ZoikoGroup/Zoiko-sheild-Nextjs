"use client";

import React from "react";
import { motion } from "framer-motion";

interface IncidentStep {
  step: string;
  title: string;
  description: string;
  evidence: string;
}

const incidentSteps: IncidentStep[] = [
  {
    step: "01.",
    title: "Detect",
    description: "Automated analysis models raise immediate flags on active system anomalies.",
    evidence: "Ledger Mapped",
  },
  {
    step: "02.",
    title: "Contain",
    description: "Enforce logical DB lockdowns or session termination instantly.",
    evidence: "Ledger Mapped",
  },
  {
    step: "03.",
    title: "Assess",
    description: "Security and Privacy teams evaluate actual data exposure scope within hours.",
    evidence: "Ledger Mapped",
  },
  {
    step: "04.",
    title: "Notify",
    description: "Formal communication pipelines deliver details to affected workspace owners.",
    evidence: "Ledger Mapped",
  },
];

export default function PrivacyIncidentSupportSection() {
  return (
    <section className="w-full bg-[#F7F5F0] text-[#0A2029] py-16 sm:py-20 px-6 sm:px-10 lg:px-20 flex justify-center border-b border-[#123B4C]/10">
      <div className="max-w-[1240px] w-full flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#C44242]" />
            <span className="text-xs sm:text-sm font-bold font-mono tracking-[0.12em] text-[#C44242] uppercase">
              CONTINGENCY PLANS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2029] tracking-[-0.02em] leading-tight">
            Incident & Breach Response
          </h2>
          <p className="text-[#5B6670] text-sm sm:text-base leading-relaxed font-medium">
            Prepared for the worst-case scenario. We maintain structured timelines, clear communication pathways, and evidence preservation guidelines.
          </p>
        </motion.div>

        {/* 4 Steps Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {incidentSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-[#123B4C]/10 rounded-lg p-5 flex flex-col justify-between gap-5 hover:border-[#123B4C]/25 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.02)]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-bold text-[#0A2029] tracking-tight flex items-baseline gap-1.5">
                  <span className="text-[#C44242] font-mono">{step.step}</span>
                  <span>{step.title}</span>
                </h3>
                <p className="text-[#5B6670] text-xs sm:text-[13px] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#123B4C]/5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A2440]/5 text-[#0A2029] text-[11px] font-mono font-medium">
                  <svg
                    className="w-3.5 h-3.5 text-[#1F7A6C]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>{step.evidence}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Caveat */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full bg-[#F0EDE6] border border-[#123B4C]/10 rounded-lg p-4 sm:p-5 flex items-start gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#C44242] mt-1.5 shrink-0" />
          <p className="text-[#5B6670] text-xs sm:text-[13px] leading-relaxed font-medium">
            * Note: We do not make absolute, unverifiable timeline promises like &quot;Guaranteed 12-hour notice for all scopes.&quot; Notification schedules are driven strictly by your specific contractual DPA clauses and local authority regulations (e.g., GDPR Article 33).
          </p>
        </motion.div>
      </div>
    </section>
  );
}

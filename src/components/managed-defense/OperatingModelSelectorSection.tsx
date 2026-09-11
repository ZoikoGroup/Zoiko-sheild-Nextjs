"use client";

import React, { useState } from "react";

interface OperatingModel {
  id: string;
  label: string;
  title: string;
  description: string;
  note: string;
  worthDiscussing: string;
}

const MODELS: OperatingModel[] = [
  {
    id: "no-security-team",
    label: "No security team",
    title:
      "Likely a full operating relationship \u2014 with your authority intact.",
    description:
      "Where there's no internal security function, the service typically covers monitoring, triage and investigation, and prepares recommendations. Someone on your side still has to hold approval authority for consequential actions, so identifying that person early matters more than anything technical.",
    note: "No coverage model is promised here. Hours are a qualification question, not a page claim.",
    worthDiscussing:
      "Who approves a containment action at 3am \u2014 which systems you can authorize connection to \u2014 what happens when your approver is unreachable.",
  },
  {
    id: "small-team",
    label: "Small team, no SOC",
    title:
      "Augmenting existing staff without replacing their operational context.",
    description:
      "For teams with generalists or sysadmins who handle security part-time, managed defense provides structured alerts, escalation playbooks, and triage assistance while leaving daily administrative control firmly in your hands.",
    note: "Tooling access requirements and notification paths must be pre-configured before any active escalation begins.",
    worthDiscussing:
      "How alerts are filtered to prevent alert fatigue \u2014 who handles out-of-hours triage when your primary admin is off-grid.",
  },
  {
    id: "mature-soc",
    label: "Mature SOC",
    title: "Specialized tier-3 escalation and specialized forensic support.",
    description:
      "When an internal SOC already handles level 1 and 2 monitoring, managed defense integrates as an extension for complex threat hunting, advanced artifact analysis, or specialized incident surge capacity.",
    note: "Clear demarcation of handoff criteria and severity definitions is required to avoid overlapping telemetry responses.",
    worthDiscussing:
      "SLA thresholds during simultaneous high-severity events \u2014 API and data ingestion boundaries between internal SIEM and external defense tools.",
  },
  {
    id: "co-managed",
    label: "Co-managed",
    title: "Shared responsibility workflows with explicit boundaries.",
    description:
      "A collaborative model where certain log sources or detection rules are managed jointly, while defined containment capabilities require dual authorization or strict notification triggers.",
    note: "Shared control panels require role-based access control (RBAC) alignment to maintain auditability of who executed what command.",
    worthDiscussing:
      "Incident ownership handoff protocols during active containment \u2014 handling conflicting remediation priorities between internal engineering and external responders.",
  },
  {
    id: "evidence-assurance",
    label: "Evidence & assurance need",
    title: "Chain-of-custody focused collection and attributable reporting.",
    description:
      "Tailored for organizations preparing for regulatory scrutiny, legal review, or formal assurance audits where every collected artifact, transfer log, and preservation request must be rigorously tracked.",
    note: "Attributable evidence records do not automatically guarantee legal admissibility or privilege status without counsel coordination.",
    worthDiscussing:
      "Retention schedules, regional residency mandates, and export protocols for sensitive telemetry data.",
  },
  {
    id: "existing-customer",
    label: "Existing customer",
    title:
      "Expanding or reviewing current entitlements against new operational risks.",
    description:
      "Designed for organizations already under contract who want to audit their active service scope, verify current coverage limits, or re-align their escalation pathways following architectural changes.",
    note: "Modifications to active entitlements require formal order form execution and service catalog verification.",
    worthDiscussing:
      "Unused annual credits, upcoming exercise cadences, and adjustments to geographical or multi-tenant coverage scopes.",
  },
];

export default function OperatingModelSelectorSection() {
  const [activeId, setActiveId] = useState<string>("no-security-team");

  const currentModel: OperatingModel = (MODELS.find((m) => m.id === activeId) ??
    MODELS[0]) as OperatingModel;

  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              IS MANAGED DEFENSE THE RIGHT PATH?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Tell us your operating model. We&apos;ll say what tends to fit.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            This selector is deterministic and uses only what you declare. It
            assigns no maturity score, no urgency score, no breach likelihood
            and no sales priority.
          </p>
        </div>

        {/* Selector Container */}
        <div className="bg-white rounded-3xl border border-[#CBD5E1] shadow-sm overflow-hidden">
          {/* Tabs Navigation Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-[#CBD5E1] bg-[#E1DDD8]">
            {MODELS.map((model) => {
              const isActive = model.id === activeId;
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveId(model.id)}
                  className={`px-3 py-4 text-xs font-medium text-center transition-all cursor-pointer relative ${
                    isActive
                      ? "bg-white text-[#0F172A] font-bold shadow-sm"
                      : "bg-[#E1DDD8] text-[#475569] hover:bg-[#d9d5d0]"
                  }`}
                  style={{
                    borderBottom: isActive
                      ? "3px solid #E0402F"
                      : "3px solid transparent",
                  }}
                >
                  {model.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area */}
          <div className="p-6 sm:p-10 bg-white grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left 2 Columns: Title, Description & Worth Discussing */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight">
                {currentModel.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {currentModel.description}
              </p>

              <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                <span className="block font-mono font-bold text-[10px] tracking-widest text-[#0F172A] uppercase">
                  WORTH DISCUSSING
                </span>
                <p className="text-xs sm:text-sm font-mono text-[#475569] leading-relaxed">
                  {currentModel.worthDiscussing}
                </p>
              </div>
            </div>

            {/* Right Column: Note Card */}
            <div className="bg-[#E1DDD8] rounded-2xl p-5 border border-[#CBD5E1]/60">
              <span className="block font-mono font-bold text-[10px] tracking-widest text-[#475569] uppercase mb-2">
                NOTE
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
                {currentModel.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

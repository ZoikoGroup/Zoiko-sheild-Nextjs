"use client";

import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

interface IndicativeEstimatorSectionProps {
  onOpenDemo?: () => void;
}

interface StepItem {
  id: string;
  title: string;
  subtitle: string;
  options: string[];
}

const CONFIG_STEPS: StepItem[] = [
  {
    id: "01",
    title: "Organization",
    subtitle: "Entities, users & compliance region",
    options: ["Not sure / Default", "Mid-Market (100-1,000)", "Enterprise (1,000-10,000)", "Global Multi-Entity"],
  },
  {
    id: "02",
    title: "Coverage",
    subtitle: "Endpoint and directory scope",
    options: ["Not sure / Default", "500 - 2,500 Units", "2,500 - 10,000 Units", "10,000+ Custom Ceiling"],
  },
  {
    id: "03",
    title: "Capabilities",
    subtitle: "Modules, write-back & dual-auth",
    options: ["Not sure / Default", "Read & Correlate Only", "Write-Back Remediation", "Dual-Party Quorum Gate"],
  },
  {
    id: "04",
    title: "Integrations",
    subtitle: "EDR, IdP & MDM registries",
    options: ["Not sure / Default", "1 - 5 Core Connectors", "5 - 15 Multi-Cloud/SaaS", "15+ Bespoke SIEM Relays"],
  },
  {
    id: "05",
    title: "Assurance",
    subtitle: "Evidence ledger & retention goals",
    options: ["Not sure / Default", "90-Day Active Telemetry", "1-Year Active Index", "7-Year Cryptographic Vault"],
  },
  {
    id: "06",
    title: "Deployment",
    subtitle: "Cloud, SaaS, or isolated tenant",
    options: ["Not sure / Default", "Multi-Tenant Standard", "Dedicated Tenant Partition", "Isolated PrivateLink Enclave"],
  },
  {
    id: "07",
    title: "Support",
    subtitle: "SLA Tier & named architect access",
    options: ["Not sure / Default", "Tier 1: Standard (8x5)", "Tier 2: Premier (24x7)", "Tier 3: Named Architect (15-min)"],
  },
  {
    id: "08",
    title: "Review",
    subtitle: "Generate non-price complexity draft",
    options: ["Not sure / Default", "Executive Briefing", "Technical Architecture Draft", "Comprehensive RFP Packet"],
  },
];

export const IndicativeEstimatorSection: React.FC<IndicativeEstimatorSectionProps> = ({
  onOpenDemo,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({
    "01": "Not sure | Default",
    "02": "Not sure | Default",
    "03": "Not sure | Default",
    "04": "Not sure | Default",
    "05": "Not sure | Default",
    "06": "Not sure | Default",
    "07": "Not sure | Default",
    "08": "Not sure | Default",
  });

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSelect = (id: string, opt: string) => {
    setSelectedOptions((prev) => ({ ...prev, [id]: opt }));
    setOpenDropdown(null);
  };

  return (
    <section className="w-full bg-[#F7F5F0] border-b border-stone-300/80 py-16 sm:py-20">
      <div className="max-w-6.5xl mx-auto px-4 sm:px-6 lg:px-17">
        {/* Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — INDICATIVE SCOPE ESTIMATOR
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Configure Indicative System Complexity
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-['Manrope'] leading-relaxed">
            This module generates an architectural complexity model. Because of strict enterprise cryptographic verification constraints, actual price calculations depend on approved tenant boundaries.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-8 lg:gap-10 items-start gap-7">
          {/* Left Column: 8 Rows */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="text-base font-bold text-slate-900 font-['Hanken_Grotesk'] mb-3">
              8-Step Structural Configuration
            </h3>

            {CONFIG_STEPS.map((step) => {
              const isOpen = openDropdown === step.id;
              const val = selectedOptions[step.id];

              return (
                <div
                  key={step.id}
                  className="bg-[#F0EDE6] backdrop-blur-sm rounded-xl p-3.5 sm:p-4 border border-stone-300/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative hover:border-slate-400 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-red-500 font-['JetBrains_Mono'] text-xs font-bold shrink-0">
                      {step.id}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-900 font-['Hanken_Grotesk'] leading-tight">
                        {step.title}
                      </div>
                      <div className="text-xs text-slate-500 font-['Manrope'] mt-0.5">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Selector Dropdown / Button */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : step.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 border border-stone-300/80 text-[11px] font-semibold text-slate-700 font-['JetBrains_Mono'] transition-colors"
                    >
                      <span>{val}</span>
                    </button>

                   
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dark Blueprint Panel */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#0c1f33] rounded-2xl p-7 text-white shadow-xl border border-cyan-900/40 space-y-6">
              {/* Eyebrow */}
              <div className="text-[11px] font-bold font-['JetBrains_Mono'] text-teal-400 uppercase tracking-wider">
                ESTIMATE STATUS: VERIFICATION LOCKED
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-['Hanken_Grotesk'] text-white">
                Architect Review Pending
              </h3>

              {/* Inner Gray Box */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-950 space-y-4">
                <p className="text-xs text-slate-300 font-['Manrope'] leading-relaxed">
                  To guarantee zero downstream cost overruns, our estimators explicitly prevent &apos;soft&apos; pricing placeholders. This guarantees commercial protection.
                </p>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-[10px] font-bold font-['JetBrains_Mono'] text-red-400 uppercase tracking-wider mb-1">
                    INDICATIVE STATUS:
                  </div>
                  <div className="text-sm font-bold text-white font-['Hanken_Grotesk']">
                    Awaiting Tenant Mapping
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm font-['Manrope'] shadow-lg shadow-red-900/30 transition-all hover:scale-[1.01]"
                >
                  Submit Scope for Validation
                </button>
                <p className="mt-3 text-[11px] text-center text-slate-400 font-['Manrope']">
                  This sends a scoped complexity configuration draft directly to an integration architect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

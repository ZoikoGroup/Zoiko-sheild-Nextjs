"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Minus, 
  Lock, 
  Key, 
  ShieldAlert, 
  Clock 
} from "lucide-react";

interface ServiceRow {
  domain: {
    title: string;
    description: string;
  };
  platformCapability: {
    status: "Yes" | "n/a";
    detail: string;
  };
  serviceOperated: {
    status: "Yes" | "Action by action" | "If entitled" | "Conditional";
    detail: string;
  };
  youOwn: {
    status: "Yes" | "Shared";
    detail: string;
  };
  entitlement: {
    type: "PER CONTRACT" | "HOURS GATED" | "AUTHORIZED ONLY" | "ENTITLEMENT" | "CONDITIONAL" | "CADENCE GATED";
  };
}

const serviceData: ServiceRow[] = [
  {
    domain: {
      title: "Telemetry onboarding",
      description: "Connect approved security and business-system telemetry."
    },
    platformCapability: {
      status: "Yes",
      detail: "Connector framework and validation."
    },
    serviceOperated: {
      status: "Yes",
      detail: "Design, validation and health review."
    },
    youOwn: {
      status: "Yes",
      detail: "Authorization, credentials, system access."
    },
    entitlement: { type: "PER CONTRACT" }
  },
  {
    domain: {
      title: "Detection monitoring",
      description: "Review eligible detections and correlated signals."
    },
    platformCapability: {
      status: "Yes",
      detail: "Correlation and prioritization."
    },
    serviceOperated: {
      status: "Yes",
      detail: "Within contracted hours and source scope."
    },
    youOwn: {
      status: "Shared",
      detail: "Source availability and scope decisions."
    },
    entitlement: { type: "HOURS GATED" }
  },
  {
    domain: {
      title: "Alert triage",
      description: "Validate signal quality, context and priority."
    },
    platformCapability: {
      status: "Yes",
      detail: "Queue and severity model."
    },
    serviceOperated: {
      status: "Yes",
      detail: "Analyst-performed, with rationale retained."
    },
    youOwn: {
      status: "Shared",
      detail: "Severity definitions and business context."
    },
    entitlement: { type: "PER CONTRACT" }
  },
  {
    domain: {
      title: "Investigation",
      description: "Build evidence-linked cases, hypotheses and findings."
    },
    platformCapability: {
      status: "Yes",
      detail: "Case and evidence model."
    },
    serviceOperated: {
      status: "Yes",
      detail: "Named analyst ownership within data boundary."
    },
    youOwn: {
      status: "Shared",
      detail: "Context, access approvals, system knowledge."
    },
    entitlement: { type: "PER CONTRACT" }
  },
  {
    domain: {
      title: "Response recommendation",
      description: "Prepare controlled next actions and consequences."
    },
    platformCapability: {
      status: "Yes",
      detail: "Action definitions and previews."
    },
    serviceOperated: {
      status: "Yes",
      detail: "Proposes with rationale. No side effect."
    },
    youOwn: {
      status: "Yes",
      detail: "Accept, modify or reject."
    },
    entitlement: { type: "PER CONTRACT" }
  },
  {
    domain: {
      title: "Response execution",
      description: "Execute contractually approved, technically governed actions."
    },
    platformCapability: {
      status: "Yes",
      detail: "Governed action framework."
    },
    serviceOperated: {
      status: "Action by action",
      detail: "Only the exact classes authorized."
    },
    youOwn: {
      status: "Yes",
      detail: "Authorization, approval, decision rights."
    },
    entitlement: { type: "AUTHORIZED ONLY" }
  },
  {
    domain: {
      title: "Evidence preservation",
      description: "Retain approved case, decision and action records."
    },
    platformCapability: {
      status: "Yes",
      detail: "Lineage and verification."
    },
    serviceOperated: {
      status: "Yes",
      detail: "Within retention and access state."
    },
    youOwn: {
      status: "Shared",
      detail: "Retention policy and legal hold."
    },
    entitlement: { type: "PER CONTRACT" }
  },
  {
    domain: {
      title: "Detection engineering",
      description: "Tune or propose rules and mappings."
    },
    platformCapability: {
      status: "Yes",
      detail: "Rule lifecycle and versioning."
    },
    serviceOperated: {
      status: "If entitled",
      detail: "Requires change approval."
    },
    youOwn: {
      status: "Yes",
      detail: "Approve changes and tuning boundaries."
    },
    entitlement: { type: "ENTITLEMENT" }
  },
  {
    domain: {
      title: "Threat hunting",
      description: "Hypothesis-led proactive review."
    },
    platformCapability: {
      status: "Yes",
      detail: "Analytics and replay."
    },
    serviceOperated: {
      status: "Conditional",
      detail: "Scope, cadence and hypothesis defined per engagement."
    },
    youOwn: {
      status: "Shared",
      detail: "Priorities and environment knowledge."
    },
    entitlement: { type: "CONDITIONAL" }
  },
  {
    domain: {
      title: "Service review",
      description: "Review trends, cases, coverage gaps and next decisions."
    },
    platformCapability: {
      status: "n/a",
      detail: "Not a platform function."
    },
    serviceOperated: {
      status: "Yes",
      detail: "Cadence and audience per engagement."
    },
    youOwn: {
      status: "Yes",
      detail: "Attend, decide, own follow-through."
    },
    entitlement: { type: "CADENCE GATED" }
  }
];

export default function ServiceScopeComponent() {
  return (
    <div className="min-h-screen bg-[#EEEBE7] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#E0402F]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#E0402F] uppercase">
              Service Scope
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Four different things, never one checkmark.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-2xl leading-relaxed">
            Platform capability, service-operated activity, your responsibility and contractual entitlement are separate questions for every domain. A capability existing in the product does not mean the service performs it for you.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto rounded-[6px] border border-[#D1CBD4] shadow-sm bg-[#101827]">
          <table className="w-full text-left border-collapse min-h-[500px]">
            {/* Table Header */}
            <thead>
              <tr className="border-b border-[#1E293B] text-[11px] font-bold tracking-[0.1em] text-[#9CA3AF] uppercase bg-[#101827]">
                <th className="py-4 px-6 w-[22%]">Service Domain</th>
                <th className="py-4 px-5 w-[20%]">Platform Capability</th>
                <th className="py-4 px-5 w-[22%]">Service-Operated</th>
                <th className="py-4 px-5 w-[20%]">You Own</th>
                <th className="py-4 px-5 w-[16%]">Entitlement</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-[#E5E7EB] text-xs bg-[#FFFFFF]">
              {serviceData.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  className="hover:bg-[#FAFAF9] transition-colors"
                >
                  {/* Service Domain */}
                  <td className="py-4 px-6 align-top">
                    <div className="font-semibold text-[#111827] text-[13px] mb-1">
                      {row.domain.title}
                    </div>
                    <div className="text-[#6B7280] text-[11px] leading-relaxed">
                      {row.domain.description}
                    </div>
                  </td>

                  {/* Platform Capability */}
                  <td className="py-4 px-5 align-top">
                    <div className="flex items-center space-x-1.5 font-semibold text-[#166534] text-[12px] mb-0.5">
                      {row.platformCapability.status === "Yes" ? (
                        <span>Yes</span>
                      ) : (
                        <span className="text-[#6B7280] font-normal">n/a</span>
                      )}
                    </div>
                    <div className="text-[#4B5563] text-[11px] leading-relaxed">
                      {row.platformCapability.detail}
                    </div>
                  </td>

                  {/* Service-Operated */}
                  <td className="py-4 px-5 align-top">
                    <div className={`font-semibold text-[12px] mb-0.5 ${
                      row.serviceOperated.status === "Yes" ? "text-[#166534]" : "text-[#B45309]"
                    }`}>
                      {row.serviceOperated.status}
                    </div>
                    <div className="text-[#4B5563] text-[11px] leading-relaxed">
                      {row.serviceOperated.detail}
                    </div>
                  </td>

                  {/* You Own */}
                  <td className="py-4 px-5 align-top">
                    <div className={`font-semibold text-[12px] mb-0.5 ${
                      row.youOwn.status === "Yes" ? "text-[#166534]" : "text-[#B45309]"
                    }`}>
                      {row.youOwn.status}
                    </div>
                    <div className="text-[#4B5563] text-[11px] leading-relaxed">
                      {row.youOwn.detail}
                    </div>
                  </td>

                  {/* Entitlement Badge (Transparent background with border) */}
                  <td className="py-4 px-5 align-middle bg-transparent">
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] border border-[#E5E7EB] bg-transparent text-[10px] font-bold tracking-[0.05em] text-[#4B5563] whitespace-nowrap shadow-2xs">
                      {row.entitlement.type === "AUTHORIZED ONLY" && (
                        <Lock className="w-3 h-3 text-[#B45309]" />
                      )}
                      {row.entitlement.type === "ENTITLEMENT" && (
                        <Key className="w-3 h-3 text-[#B45309]" />
                      )}
                      {row.entitlement.type === "CONDITIONAL" && (
                        <ShieldAlert className="w-3 h-3 text-[#B45309]" />
                      )}
                      {row.entitlement.type === "HOURS GATED" && (
                        <Clock className="w-3 h-3 text-[#6B7280]" />
                      )}
                      {row.entitlement.type === "CADENCE GATED" && (
                        <Clock className="w-3 h-3 text-[#6B7280]" />
                      )}
                      {row.entitlement.type === "PER CONTRACT" && (
                        <Minus className="w-3 h-3 text-[#6B7280]" />
                      )}
                      <span>{row.entitlement.type}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
"use client";

import React from "react";
import Image from "next/image";

interface StepItem {
  num: string;
  title: string;
  status: string;
  statusBg: string;
  statusText: string;
  description: string;
}

const pipelineSteps: StepItem[] = [
  {
    num: "01",
    title: "Maintenance Scheduled",
    status: "COMPLETED",
    statusBg: "bg-[#E4F0EC]",
    statusText: "text-[#1F7A6C]",
    description:
      "Target window registered in public ledger with automated client notifications dispatched.",
  },
  {
    num: "02",
    title: "AWS Gateway Isolation",
    status: "COMPLETED",
    statusBg: "bg-[#E4F0EC]",
    statusText: "text-[#1F7A6C]",
    description:
      "Load balancer gracefully drains active network traffic from target nodes without dropping active sessions.",
  },
  {
    num: "03",
    title: "TLS 1.3 Patch Execution",
    status: "IN PROGRESS",
    statusBg: "bg-[#FBEFEF]",
    statusText: "text-[#A43737]",
    description:
      "Ingress nodes executing localized secure firmware upgrade. Active monitoring sensor checks ongoing.",
  },
  {
    num: "04",
    title: "Cryptographic Heartbeat Validation",
    status: "PENDING VERIFICATION",
    statusBg: "bg-[#FEF3C7]",
    statusText: "text-[#B45309]",
    description:
      "Pre-completion telemetry health test. Verification is blocked until sensor hashes match strict golden schema.",
  },
];

const manifestItems = [
  { label: "EVENT ID", val: "ZS-MX-9942" },
  { label: "AFFECTED REGIONS", val: "US-East-1, EU-West-2" },
  { label: "TARGET COMPONENT", val: "Edge Ingress Relays" },
  { label: "MAINTENANCE REVISION", val: "Rev. 3 (No silent updates)" },
  { label: "LAST UPDATED", val: "March 20, 15:10 EST" },
  { label: "INCIDENT STATUS", val: "None. Planned operation." },
];

export default function MaintenanceDetailTimelineSection() {
  return (
    <section id="details" className="w-full bg-[#F0EDE6] py-16 sm:py-20 lg:py-24 border-b border-[#123B4C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 max-w-3xl mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#C44242]" />
            <span className="font-jetbrains text-xs sm:text-sm font-bold tracking-[0.0833em] text-[#C44242] uppercase">
              DEEP ARCHITECTURE VIEW
            </span>
          </div>
          <h2 className="font-hanken font-extrabold text-3xl sm:text-4xl text-[#0A2029] tracking-tight">
            Maintenance Detail &amp; Execution Timeline
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Timeline & Step Details */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#123B4C]/10 shadow-sm space-y-6">
            <div className="space-y-3">
              <h3 className="font-hanken font-extrabold text-xl sm:text-2xl text-[#0A2029]">
                ZS-MX-9942: Active Ingress Relay Host Patching
              </h3>
              <p className="font-manrope text-sm sm:text-base text-[#5E6670] leading-relaxed">
                Primary ingestion gateways are updated to support TLS 1.3
                protocol validation. During the maintenance window, active nodes
                are isolated and updated individually. Symmetrical clustering
                prevents session state drops.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#123B4C]/10" />

            {/* Pipeline Status */}
            <div className="space-y-6">
              <h4 className="font-jetbrains text-xs font-bold text-[#0A2029] uppercase tracking-wider">
                REAL-TIME INTEGRATION PIPELINE STATUS
              </h4>

              <div className="space-y-6">
                {pipelineSteps.map((step) => (
                  <div
                    key={step.num}
                    className="flex items-start gap-4 sm:gap-5"
                  >
                    {/* Number block */}
                    <div className="w-9 h-9 rounded-lg bg-[#0A2440] text-white font-jetbrains text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {step.num}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="font-hanken font-bold text-base sm:text-lg text-[#0A2029]">
                          {step.title}
                        </span>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-jetbrains font-bold ${step.statusBg} ${step.statusText}`}
                        >
                          {step.status}
                        </span>
                      </div>
                      <p className="font-manrope text-xs sm:text-sm text-[#5E6670] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Execution Manifest Rail */}
          <div className="lg:col-span-4 bg-[#0A2440] rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-md lg:sticky lg:top-28">
            <h3 className="font-hanken font-bold text-lg sm:text-xl text-white">
              Execution Manifest
            </h3>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="space-y-4">
              {manifestItems.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-jetbrains text-[10px] sm:text-[11px] font-bold text-[#8AA3C2] uppercase tracking-wider block">
                    {item.label}
                  </span>
                  <p className="font-jetbrains text-xs sm:text-sm text-white font-medium">
                    {item.val}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-xs sm:text-sm font-manrope font-semibold text-[#8AA3C2] hover:text-white transition-colors group cursor-pointer"
            >
              <Image
                src="/images/planned-maintenance/secops-chat.svg"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 opacity-80 group-hover:opacity-100"
              />
              <span>Need verification context? Talk to SecOps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

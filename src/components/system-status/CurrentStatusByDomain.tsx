import React from "react";

const domainCards = [
  {
    title: "Core Platform",
    items: [
      {
        name: "Event Processing Pipeline",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
      {
        name: "Telemetry Stream Ingestion",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
    ],
  },
  {
    title: "Detection & SecOps",
    items: [
      {
        name: "Alert Evaluation Engine",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
      {
        name: "Process Execution Mapping",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
    ],
  },
  {
    title: "Identity & Endpoint",
    items: [
      {
        name: "Okta Posture Sync",
        status: "LATENCY",
        statusClass: "bg-[#FEF3C7] text-[#B45309]",
      },
      {
        name: "Microsoft Entra ID Connector",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
    ],
  },
  {
    title: "Cloud & Integrations",
    items: [
      {
        name: "AWS Security Hub Sync",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
      {
        name: "GCP Chronicle Integrator",
        status: "UNKNOWN / STALE",
        statusClass: "bg-[#F3F4F6] text-[#4B5563]",
      },
    ],
  },
  {
    title: "APIs & Developer Services",
    items: [
      {
        name: "Evidence Ingestion Webhooks",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
      {
        name: "Query Status Endpoint",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
    ],
  },
  {
    title: "Governance & Evidence",
    items: [
      {
        name: "Cryptographic Ledger Storage",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
      {
        name: "Compliance Artifact Signing",
        status: "OPERATIONAL",
        statusClass: "bg-[#E6F4EA] text-[#137333]",
      },
    ],
  },
];

export default function CurrentStatusByDomain() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            Current Status by Domain
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base">
            Verifiable live checks across key functional segments.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domainCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-4">
                  {card.title}
                </h3>
                <div className="space-y-4">
                  {card.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-xs md:text-sm text-[#4B5563] font-medium">
                        {item.name}
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider shrink-0 ${item.statusClass}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

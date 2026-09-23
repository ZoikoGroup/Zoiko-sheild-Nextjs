import React from "react";
import { AlertTriangle, Shield, CheckCircle2 } from "lucide-react";

const diagnosticCards = [
  {
    title: "System Status",
    description:
      "All integration pipelines and identity registries are reporting fully operational state globally.",
    badge: "All Systems Nominal",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
    icon: CheckCircle2,
    iconClass: "text-[#137333]",
    hasIconInTitle: false,
  },
  {
    title: "Known Registry Drift",
    description:
      "Recent Okta group telemetry refresh experienced partial delays in AP-Southeast-1 regional clusters.",
    badge: "Known Regional Delay",
    badgeClass: "bg-[#FEF7E0] text-[#B06000]",
    icon: AlertTriangle,
    iconClass: "text-[#B06000]",
    hasIconInTitle: true,
  },
  {
    title: "Your Active Requests",
    description:
      'You currently have 1 unresolved technical ticket matching the "Intune Token Posture" criteria.',
    badge: "1 Pending Review",
    badgeClass: "bg-[#E8F0FE] text-[#1967D2]",
    icon: Shield,
    iconClass: "text-[#1967D2]",
    hasIconInTitle: true,
  },
];

export default function PreFlightDiagnostics() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-6">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            PRE-FLIGHT DIAGNOSTICS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Instant status verification before filing
          </h1>
          <p className="text-[#4B5563] text-base leading-relaxed">
            We run continuous baseline scans against known issue templates.
            Verify below if your issue matches active service events.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diagnosticCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-3 flex items-center gap-2">
                    {card.hasIconInTitle && (
                      <IconComponent
                        className={`w-5 h-5 shrink-0 ${card.iconClass}`}
                      />
                    )}
                    <span>{card.title}</span>
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div>
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${card.badgeClass}`}
                  >
                    {!card.hasIconInTitle && (
                      <IconComponent
                        className={`w-3.5 h-3.5 ${card.iconClass}`}
                      />
                    )}
                    <span>{card.badge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

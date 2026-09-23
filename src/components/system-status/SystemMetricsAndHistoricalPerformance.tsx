import React from "react";

const metrics = [
  {
    title: "CORE AVAILABILITY (30D)",
    value: "99.98%",
    subtitle: "Target SLA: 99.95%",
    badge: "STABLE",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    title: "API RESPONSE TIME",
    value: "124 ms",
    subtitle: "Global edge avg",
    badge: "NOMINAL",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    title: "EVENT LATENCY",
    value: "1.8 sec",
    subtitle: "Queue processing delay",
    badge: "STABLE",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    title: "INTEGRATION PROCESSING",
    value: "4.2 min",
    valueClass: "text-[#B45309]",
    subtitle: "Impacted by Okta rate limits",
    badge: "DELAYED STATE",
    badgeClass: "bg-[#FEF3C7] text-[#B45309]",
  },
];

export default function SystemMetricsAndHistoricalPerformance() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            System Metrics &amp; Historical Performance
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base">
            Real-time performance indicators compiled from verified
            infrastructure logs.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <p className="text-[10px] font-bold text-[#6B7280] uppercase tracking-wider mb-3">
                  {metric.title}
                </p>
                <div
                  className={`text-2xl md:text-[32px] font-bold tracking-tight mb-1 ${metric.valueClass || "text-[#111827]"}`}
                >
                  {metric.value}
                </div>
                <p className="text-xs text-[#6B7280] mb-6">{metric.subtitle}</p>
              </div>

              <div>
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${metric.badgeClass}`}
                >
                  {metric.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

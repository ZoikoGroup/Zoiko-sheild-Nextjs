import React from "react";

const timelineEvents = [
  {
    time: "15:45 UTC",
    date: "JAN 23",
    title: "Monitoring Applied Mitigation",
    description:
      "Remediation queues are processing stably. Directory sync queue backlog has decreased by 60%. Posture checks are resolving within acceptable latency bounds.",
  },
  {
    time: "14:50 UTC",
    date: "JAN 23",
    title: "Mitigation Identified",
    description:
      "Okta API client credential request thresholds have been adjusted upstream. Cache invalidation policies were reset to alleviate load.",
  },
  {
    time: "14:22 UTC",
    date: "JAN 23",
    title: "Investigating Sync Failures",
    description:
      "Our telemetry alerts triggered a warning indicating posture sync processing delays exceeding 5 minutes. Engineers are actively investigating upstream directory connection limits.",
  },
];

export default function CurrentIncidentLogAndTimeline() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            Current Incident Log &amp; Timeline
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base">
            Trace active operations progress step-by-step.
          </p>
        </div>

        {/* Main Incident Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          {/* Card Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5E7EB]">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#111827] tracking-tight mb-1">
                Okta Sync Latency and API Exhaustion
              </h2>
              <p className="text-xs md:text-sm text-[#6B7280]">
                Affected Regions: US-East-1, EU-West-2
              </p>
            </div>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#FEF3C7] text-[#B45309]">
                MONITORING
              </span>
            </div>
          </div>

          {/* Timeline List */}
          <div className="space-y-8 mb-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
              >
                <div className="w-24 shrink-0 font-mono">
                  <p className="text-xs font-bold text-[#111827]">
                    {event.time}
                  </p>
                  <p className="text-[10px] text-start font-bold text-[#6B7280] tracking-wider">
                    {event.date}
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111827] mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Card Footer */}
          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <p className="text-[#6B7280]">
              Postmortem Report will be published within 48 hours of complete
              resolution.
            </p>
            <a
              href="#track"
              className="font-bold text-[#C53030] hover:text-[#B91C1C] transition-colors whitespace-nowrap"
            >
              Track Incident Progress
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

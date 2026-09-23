import React from "react";

const channels = [
  {
    title: "Secure Support Portal",
    description:
      "Manage responses within our encrypted tenant communications panel.",
    badge: "Recommended",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    title: "Secure Email Dispatch",
    description:
      "Receive updates directly to your corporate authenticated inbox.",
    badge: "Available",
    badgeClass: "bg-[#E8F0FE] text-[#1967D2]",
  },
  {
    title: "Scheduled Architect Call",
    description:
      "Reserved for Premier Tier subscribers during active triage events.",
    badge: "Premier Tier Only",
    badgeClass: "bg-[#FEF7E0] text-[#B06000]",
  },
];

export default function SelectQualifiedEntitlementChannels() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            COMMUNICATION FLOWS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Select qualified entitlement channels
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Support preferences are triaged based on your active Service Level
            Agreement (SLA). Choose your preferred dispatch mode below.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#111827] tracking-tight mb-3">
                  {channel.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              <div>
                <div
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${channel.badgeClass}`}
                >
                  <span>{channel.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

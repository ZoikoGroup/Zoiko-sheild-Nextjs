import React from "react";

const permissionCards = [
  {
    title: "Read",
    description: "Inspect approved context.",
  },
  {
    title: "Suggest / write draft",
    description: "Prepare content without action authority.",
  },
  {
    title: "Request action",
    description: "Route a governed request.",
  },
  {
    title: "Separately authorized execution",
    description: "Execute only under distinct authority.",
  },
  {
    title: "Prohibited",
    description: "Do not perform under current policy.",
  },
];

const statusTags = [
  "PROPOSED",
  "RUN",
  "FAILED",
  "PARTIAL",
  "BLOCKED",
  "UNKNOWN",
];

export default function ToolsAndPermissions() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            TOOLS AND PERMISSIONS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Connectivity, permission and authority stay separate.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            The permission contract records tool or category and purpose;
            tenant, environment, object, data and action scope; authentication,
            integration, freshness and approval prerequisites; and audit
            history, revocation and failure.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {permissionCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Status Tags Pill Row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {statusTags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#E4F0EC] text-[#000000] text-xs font-mono font-bold px-4 py-2 rounded-full tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Disclaimer */}
        <div className="max-w-5xl">
          <p className="text-xs md:text-sm font-semibold text-[#111827] leading-relaxed">
            Technical connectivity is not action authority. AI tool access,
            integration permission, organizational decision rights and
            governed-response authorization are separate controls.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const topCards = [
  {
    title: "Offering and environment",
    description:
      "Offering type · tenant model · environment · provider-hosted/customer-hosted context · customer/data context",
  },
  {
    title: "Planes and ownership",
    description:
      "Admin plane · data plane · security-operation ownership · owner and authority",
  },
  {
    title: "Review record",
    description:
      "Reviewed date/version · evidence source · limitations · changes since review",
  },
];

const responsibilityRows = [
  {
    label: "Tenant identity",
    description: "Declared directory and federation context",
    status: "Reviewed",
    statusBg: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Isolation",
    description: "Architecture evidence; no blanket guarantee",
    status: "Conditional",
    statusBg: "bg-[#FEF7E0] text-[#B06000]",
  },
  {
    label: "Authorization",
    description: "Roles, grants and review authority",
    status: "Current",
    statusBg: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Admin plane",
    description: "Provider and customer responsibilities",
    status: "Partial",
    statusBg: "bg-[#FEF7E0] text-[#B06000]",
  },
  {
    label: "Data plane",
    description: "Region, flow and processing context",
    status: "Reviewed",
    statusBg: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Logs",
    description: "Sources, retention authority and known gaps",
    status: "Connected",
    statusBg: "bg-[#E6F4EA] text-[#137333]",
  },
  {
    label: "Recovery",
    description: "Validation owner and dependencies",
    status: "Unknown",
    statusBg: "bg-[#FEF7E0] text-[#B06000]",
  },
  {
    label: "Shared responsibility",
    description: "Customer / provider / ZoikoShield boundaries",
    status: "Current",
    statusBg: "bg-[#E6F4EA] text-[#137333]",
  },
];

export default function SaasTenantAndSharedResponsibility() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SAAS, TENANT AND SHARED RESPONSIBILITY
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight">
            Define the boundary before making a claim.
          </h1>
        </div>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {topCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom List / Table Container */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] divide-y divide-[#E5E7EB] overflow-hidden">
          {responsibilityRows.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 px-6 py-4 items-center gap-4"
            >
              <div className="md:col-span-3 text-sm font-bold text-[#111827]">
                {row.label}
              </div>
              <div className="md:col-span-7 text-xs md:text-sm text-[#4B5563]">
                {row.description}
              </div>
              <div className="md:col-span-2 flex justify-start md:justify-end">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${row.statusBg}`}
                >
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

const topCards = [
  {
    number: "01",
    title: "Source",
    description: "Approved telemetry and context",
    active: false,
  },
  {
    number: "02",
    title: "Detection",
    description: "Rule source/version · confidence",
    active: false,
  },
  {
    number: "03",
    title: "Case",
    description: "Timeline · evidence · hypotheses · gaps",
    active: false,
  },
  {
    number: "04",
    title: "Decision / action",
    description: "Human authority · permission · stop",
    active: true,
  },
  {
    number: "05",
    title: "Evidence",
    description: "Outcome verification · failed/partial",
    active: false,
  },
];

const tags = [
  { label: "Advisory", variant: "default" },
  { label: "Review-required", variant: "default" },
  { label: "Approval-required", variant: "default" },
  { label: "Pre-authorized delegated", variant: "yellow" },
  { label: "Emergency overlay", variant: "yellow" },
  { label: "Prohibited", variant: "red" },
  { label: "Rollback / forward-fix", variant: "yellow" },
];

export default function SecurityOperations() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SECURITY OPERATIONS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Connect security signals to governed decisions.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Severity, confidence, cloud privilege and response authority remain
            separate. Approved cloud, SaaS, identity, endpoint and workload
            context links to evidence—not to autonomous claims.
          </p>
        </div>

        {/* 5 Top Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {topCards.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border flex flex-col justify-between transition-colors ${
                card.active
                  ? "bg-[#123B4C] border-[#123B4C1F] text-white"
                  : "bg-white border-[#E5E7EB] text-[#111827]"
              }`}
            >
              <div>
                <span
                  className={`text-xs font-mono font-bold mb-3 block ${card.active ? "text-[#5FE3C5]" : "text-[#C53030]"}`}
                >
                  {card.number}
                </span>
                <h3 className="text-base font-bold tracking-tight mb-2">
                  {card.title}
                </h3>
                <p
                  className={`text-xs md:text-sm leading-relaxed ${card.active ? "text-[#9CA3AF]" : "text-[#4B5563]"}`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tags Row */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {tags.map((tag, index) => {
            let tagStyle = "border border-[#E5E7EB] text-[#4B5563]";
            if (tag.variant === "yellow") {
              tagStyle = "bg-[#FFF3D6] border border-[#FEEBC8] text-[#9B6B21]";
            } else if (tag.variant === "red") {
              tagStyle = "bg-[#FBEFEF] border border-[#F4DCDD] text-[#C44242]";
            }
            return (
              <span
                key={index}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${tagStyle}`}
              >
                {tag.label}
              </span>
            );
          })}
        </div>

        {/* 3 Bottom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Case decision record */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                Case decision record
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                Detection/rule source and version · case timeline · evidence and
                hypotheses · known gaps · human authority · outcome verification
                · failed/partial results
              </p>
            </div>
          </div>

          {/* Card 2: Incident readiness */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                Incident readiness
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                Contacts/roles · activation/entitlement · cloud/provider outage
                dependencies · SaaS disruption · AI/provider incidents ·
                recovery validation · communications authority
              </p>
            </div>
          </div>

          {/* Card 3: Customer routes */}
          <div className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                Customer routes
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-4">
                Existing customers use Support. Active incidents and service
                issues use Status—never Book a Demo.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold text-[#C53030]">
                <a href="#" className="hover:underline flex items-center gap-1">
                  Support
                </a>
                <span>·</span>
                <a href="#" className="hover:underline flex items-center gap-1">
                  Status <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Warning Disclaimer Banner */}
        <div className="">
          <p className="text-xs font-semibold text-[#C44242] leading-relaxed">
            No sector-page promise of 24/7 operations, complete detection,
            autonomous containment, instant response or guaranteed recovery.
          </p>
        </div>
      </div>
    </div>
  );
}

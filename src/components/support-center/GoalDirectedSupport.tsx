import React from "react";

const supportCards = [
  {
    title: "Set Up Zoiko Shield",
    description:
      "Registry guidelines, initial permissions, and first sync sequence.",
    route: "Execute Route →",
  },
  {
    title: "Fix Sign-In/Access",
    description:
      "Troubleshoot SSO, OIDC consent, and directory attribute mismatches.",
    route: "Execute Route →",
  },
  {
    title: "Troubleshoot Integration",
    description: "EDR agent telemetry gaps and credential verification.",
    route: "Execute Route →",
  },
  {
    title: "Investigate Finding",
    description: "Trace session actor, asset processes, and evidence trails.",
    route: "Execute Route →",
  },
  {
    title: "Resolve Cloud/Identity Issue",
    description: "Remediate posture drift and unmanaged active host alerts.",
    route: "Execute Route →",
  },
  {
    title: "Use API/Webhooks",
    description:
      "Custom connector routes, rate limits, and schema version mappings.",
    route: "Execute Route →",
  },
  {
    title: "Manage Evidence Ledger",
    description:
      "Validate cryptographic proof chains and export state archives.",
    route: "Execute Route →",
  },
  {
    title: "Manage Account/Plan",
    description:
      "Check entitlement states, policy tiers, and billing boundaries.",
    route: "Execute Route →",
  },
  {
    title: "Check Service Health",
    description: "Audit real-time system webhooks and historical maintenance.",
    route: "Execute Route →",
  },
  {
    title: "Contact an Expert",
    description:
      "Direct route to technical security architects and support desk.",
    route: "Execute Route →",
  },
];

export default function GoalDirectedSupport() {
  return (
    <div className="bg-[#F6F4EE] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            GOAL-DIRECTED SUPPORT
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            What are you attempting to resolve?
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Direct pathways mapping exact security operational intentions to
            authenticated remediation playbooks.
          </p>
        </div>

        {/* 10 Cards Grid (2 rows x 5 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-4">
                  {card.description}
                </p>
              </div>
              <p className="text-xs font-mono font-bold text-[#C53030]">
                {card.route}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

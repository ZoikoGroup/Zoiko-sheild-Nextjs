import React from "react";
import {
  Building2,
  ShieldAlert,
  UserCheck,
  Cloud,
  ClipboardCheck,
  Plug,
  CodeXml,
  ShieldCheck,
} from "lucide-react";

const supportDomainCards = [
  {
    title: "Platform & Account",
    count: "18 verified playbooks",
    icon: Building2,
  },
  {
    title: "Threat/Security Operations",
    count: "32 verified playbooks",
    icon: ShieldAlert,
  },
  {
    title: "Endpoint & Identity",
    count: "24 verified playbooks",
    icon: UserCheck,
  },
  {
    title: "Cloud Platform",
    count: "15 verified playbooks",
    icon: Cloud,
  },
  {
    title: "Governance & Compliance",
    count: "19 verified playbooks",
    icon: ClipboardCheck,
  },
  {
    title: "Integrations Registry",
    count: "41 verified playbooks",
    icon: Plug,
  },
  {
    title: "Developers & APIs",
    count: "28 verified playbooks",
    icon: CodeXml,
  },
  {
    title: "Trust & Security Center",
    count: "14 verified playbooks",
    icon: ShieldCheck,
  },
];

export default function SupportDomains() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SUPPORT DOMAINS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[32px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Browse by authenticated architecture layer
          </h1>
          <p className="text-[#4B5563] leading-relaxed">
            Identify verified articles, known-mismatches, and direct escalation
            parameters unique to each integration registry.
          </p>
        </div>

        {/* 8 Cards Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {supportDomainCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#C44242] mb-4">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#6B7280]">
                    {card.count}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

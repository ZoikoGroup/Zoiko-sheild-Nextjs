import React from "react";
import {
  Shield,
  ShieldCheck,
  Lock,
  Cpu,
  FileSearch,
  Network,
  FileText,
  MessageSquare,
} from "lucide-react";

const proofCards = [
  {
    title: "Security practices",
    link: "/trust/security →",
    icon: Shield,
    iconBg: "bg-[#FDF2F2]",
    iconColor: "text-[#C53030]",
  },
  {
    title: "Trust Center",
    link: "/trust →",
    icon: ShieldCheck,
    iconBg: "bg-[#E6F4EA]",
    iconColor: "text-[#137333]",
  },
  {
    title: "Privacy / DPA",
    link: "/legal/privacy →",
    icon: Lock,
    iconBg: "bg-[#F3F4F6]",
    iconColor: "text-[#4B5563]",
  },
  {
    title: "Responsible AI",
    link: "Only when approved →",
    icon: Cpu,
    iconBg: "bg-[#FDF2F2]",
    iconColor: "text-[#C53030]",
  },
  {
    title: "Evidence review",
    link: "Controlled request →",
    icon: FileSearch,
    iconBg: "bg-[#E6F4EA]",
    iconColor: "text-[#137333]",
  },
  {
    title: "Integration / architecture",
    link: "Sales engineering →",
    icon: Network,
    iconBg: "bg-[#F3F4F6]",
    iconColor: "text-[#4B5563]",
  },
  {
    title: "Questionnaire / RFP",
    link: "Owner-reviewed source →",
    icon: FileText,
    iconBg: "bg-[#F3F4F6]",
    iconColor: "text-[#4B5563]",
  },
  {
    title: "Sales engineering",
    link: "Broad context intake →",
    icon: MessageSquare,
    iconBg: "bg-[#E6F4EA]",
    iconColor: "text-[#137333]",
  },
];

export default function EnterpriseProofRoute() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            ENTERPRISE PROOF ROUTE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight">
            Give reviewers a clear, controlled route to proof.
          </h1>
        </div>

        {/* 8 Cards Grid (2 rows x 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {proofCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-4`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#C53030]">
                    {card.link}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Warning Disclaimer Banner */}
        <div className="bg-[#F8EBEB] border border-[#F4DCDD] rounded-2xl p-6 space-y-1">
          <p className="text-xs md:text-sm font-bold text-[#111827]">
            Public forms collect declared needs and broad context only.
          </p>
          <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
            Never submit credentials, customer names, tenant IDs,
            prompts/outputs, vulnerabilities, findings, reports, topology or
            sensitive architecture.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { UserCheck, Layers, Shield, Activity, FileCheck } from "lucide-react";

const pressureCards = [
  {
    title: "Customer trust",
    description:
      "Ownership · current controls/evidence · data handling · procurement review",
    icon: UserCheck,
    color:"bg-[#E4F0EC] text-[#1F7A6C]"
  },
  {
    title: "Cloud complexity",
    description:
      "Accounts, services, regions and identities · provider dependencies · configuration/status · shared responsibility",
    icon: Layers,
    color:"bg-[#F0EDE6] text-[#5B6670]"
  },
  {
    title: "AI governance",
    description:
      "Use cases · providers/data use · evaluations · decision rights · human oversight",
    icon: Shield,
    color:"bg-[#FBEFEF] text-[#C44242]" 
  },
  {
    title: "Security operations",
    description:
      "Telemetry · cases/ investigations · governed response · incident readiness",
    icon: Activity,
    color:"bg-[#F0EDE6] text-[#5B6670]"
  },
  {
    title: "Assurance",
    description:
      "Evidence freshness/ completeness · controls/ tests · customer review · audit-readiness boundaries",
    icon: FileCheck,
    color:"bg-[#E4F0EC] text-[#1F7A6C]"
  },
];

export default function BuyerPressures() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            BUYER PRESSURES
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Make enterprise review questions inspectable.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Five linked pressure areas keep ownership, scope and uncertainty
            visible—without trust scores, badges or unsupported readiness
            claims.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pressureCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
              >
                <div>
                  <div className={`w-9 h-9 rounded-xl ${card.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#111827] tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                    {card.description}
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

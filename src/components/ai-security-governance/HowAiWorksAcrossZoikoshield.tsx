import React from "react";
import Image from "next/image";
import {
  FileText,
  Target,
  Folder,
  Shield,
  BarChart2,
  CheckSquare,
} from "lucide-react";

const systemCards = [
  {
    number: "01",
    title: "Evidence Ledger & Verification",
    description:
      "Retrieve and summarize authorized evidence; cannot invent, certify completeness or override verification.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Detection & Response",
    description:
      "Add source-backed context; no causality, attribution or incident verdict.",
    icon: Target,
  },
  {
    number: "03",
    title: "Case Management",
    description: "Summarize history; cannot close a case or become case truth.",
    icon: Folder,
  },
  {
    number: "04",
    title: "Governed Response",
    description:
      "Propose and explain under policy; cannot replace authorization or self-approve.",
    icon: Shield,
  },
  {
    number: "05",
    title: "Risk Intelligence",
    description:
      "Explain evidence-linked records; no opaque score or risk-method authority.",
    icon: BarChart2,
  },
  {
    number: "06",
    title: "Compliance Control Plane",
    description:
      "Explain approved controls and mappings; no compliance status or legal sufficiency.",
    icon: CheckSquare,
  },
];

export default function HowAiWorksAcrossZoikoshield() {
  return (
    <div className="relative bg-[#071D26] text-white px-6 py-20 md:py-28 md:px-12 font-sans antialiased flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 -z-25 overflow-hidden">
        <Image
          src="/images/ai-security/4.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
      </div>

      {/* Enhanced Darkness / Dimming Overlay */}
      <div className="absolute inset-0 -z-20 bg-[#071D26]/95 backdrop-blur-xs" />

      <div className="w-full max-w-6xl relative z-10 flex flex-col gap-12">
        {/* Header Section */}
        <div className="space-y-3">
          <p className="text-[#5FE3C5] text-xs font-bold tracking-[0.15em] uppercase flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#5FE3C5]"></span>
            HOW AI WORKS ACROSS ZOIKOSHIELD
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight">
            Assistance inherits each system&apos;s authority boundary.
          </h1>
          <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
            Relationships stay evidence-linked and role-aware. Executive Risk
            Intelligence is not presented as a current Board-reporting
            capability.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF0D] border border-[#FFFFFF24] rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#5FE3C5]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5FE3C5]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#FFFFFFA8] leading-relaxed">
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

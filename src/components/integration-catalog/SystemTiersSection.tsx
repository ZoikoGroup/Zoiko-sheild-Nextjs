"use client";

import React from "react";
import { Shield, Cloud, Smartphone, Activity, MessageSquare, Database, Code, CircleX, ShieldXIcon, UserCheck } from "lucide-react";

interface SystemTiersSectionProps {
  selectedTier: string;
  setSelectedTier: (tier: string) => void;
}

export const SystemTiersSection: React.FC<SystemTiersSectionProps> = ({
  selectedTier,
  setSelectedTier,
}) => {
  const tiers = [
    {
      id: "microsoft",
      title: "Microsoft Ecosystem",
      count: 12,
      desc: "Sentinel, Defender, Azure AD & Active Directory integration",
      icon: CircleX,
    },
    {
      id: "cloud",
      title: "Cloud Platforms",
      count: 8,
      desc: "Native cloud telemetry, IAM & configuration logs",
      icon: Cloud,
    },
    {
      id: "endpoint",
      title: "Endpoint & Identity",
      count: 9,
      desc: "User lifecycle context & device threat vectors",
      icon: UserCheck,
    },
    {
      id: "siem",
      title: "SIEM & Observability",
      count: 6,
      desc: "Live event correlation & unified operations data",
      icon: Activity,
    },
    {
      id: "collaboration",
      title: "Collaboration & Tickets",
      count: 4,
      desc: "Slack notifications, Jira boards & incident escalations",
      icon: MessageSquare,
    },
    {
      id: "data",
      title: "Data & Evidence",
      count: 3,
      desc: "Immutable storage platforms & database audits",
      icon: Database,
    },
    {
      id: "developer",
      title: "Developer & API",
      count: 4,
      desc: "GitHub actions, pipeline integrity & SDK webhooks",
      icon: Code,
    },
  ];

  return (
    <section className="w-full bg-[#F5F2EB] py-12 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
          Browse by System Tier
        </h2>

        {/* Scrollable / Flexible Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {tiers.map((tier) => {
            const IconComp = tier.icon;
            const isSelected = selectedTier === tier.id || (selectedTier === "all" && tier.id === "microsoft");

            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-4 rounded-xl shadow-sm border transition-all text-left flex flex-col justify-between h-44 cursor-pointer ${
                  isSelected
                    ? "bg-cyan-950 text-white border-cyan-950 shadow-md"
                    : "bg-white text-slate-900 border-cyan-950/10 hover:border-cyan-950/30"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? "text-white" : "text-red-500"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-md text-xs font-bold font-mono ${
                      isSelected ? "bg-white/10 text-white" : "bg-stone-100 text-cyan-950"
                    }`}
                  >
                    {tier.count}
                  </span>
                </div>

                <div className="space-y-1 mt-2">
                  <h3
                    className={`text-sm font-extrabold font-sans leading-snug ${
                      isSelected ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {tier.title}
                  </h3>
                  <p
                    className={`text-[11px] leading-tight line-clamp-2 ${
                      isSelected ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {tier.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemTiersSection;

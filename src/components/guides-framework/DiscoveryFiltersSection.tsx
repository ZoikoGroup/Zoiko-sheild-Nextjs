"use client";

import React from "react";
import { Check, Sliders } from "lucide-react";

interface DiscoveryFiltersProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

const FILTER_OPTIONS = [
  { id: "all", label: "Type: All Mappings" },
  { id: "endpoint-identity", label: "Domain: Endpoint & Identity" },
  { id: "audit-assurance", label: "Goal: Audit Assurance" },
  { id: "security-architect", label: "Role: Security Architect" },
  { id: "hybrid-cloud", label: "Environment: Hybrid Cloud" },
  { id: "maturity-2-3", label: "Maturity: Level 2-3" },
  { id: "verified-official", label: "Provenance: Verified Official" },
];

export const DiscoveryFiltersSection: React.FC<DiscoveryFiltersProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <section className="py-5 bg-[#F5F2EB] border-b border-cyan-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 uppercase">
          <Sliders className="w-3.5 h-3.5 text-slate-800" />
          <span>DISCOVERY TAXONOMY FILTERS</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap max-w-6xl">
          {FILTER_OPTIONS.map((filter) => {
            const isSelected = selectedFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#A91D22] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-300/80 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <span>{filter.label}</span>
                {isSelected && <Check className="w-3 h-3 text-white" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

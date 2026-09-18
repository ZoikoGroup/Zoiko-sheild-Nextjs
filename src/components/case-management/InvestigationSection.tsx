"use client";

import React from "react";
import { HelpCircle, Eye, GitBranch, AlertCircle, FileCheck, History, Search, FileText, Lightbulb, GitCompare, Lock, Clock } from "lucide-react";

export const InvestigationSection: React.FC = () => {
  const cards = [
    {
      icon: Search,
      iconBg: "bg-[#E4F0EC] text-teal-700",
      title: "Current question under review",
      desc: "Explicitly a question, not a verdict. Source-backed observations and relationships sit beside attributable hypotheses — not beneath a finding label.",
      badge: "QUESTION · NOT VERDICT",
      badgeStyle: "bg-amber-100 text-amber-800 border-amber-300",
    },
    {
      icon: FileText,
      iconBg: "bg-[#E4F0EC] text-teal-700",
      title: "Source-backed observations",
      desc: "Relationships and observations attributable to approved sources. Source and scope remain visible. Unknown, stale and restricted references are labeled explicitly.",
      badge: "SOURCE · SCOPE VISIBLE",
      badgeStyle: "bg-teal-100 text-teal-800 border-teal-300",
    },
    {
      icon: Lightbulb,
      iconBg: "bg-[#F0EDE6] text-[#123B4C]",
      title: "Attributable hypotheses",
      desc: "Uncertainty and ownership are preserved. A hypothesis is labeled as such — not promoted to a conclusion without attributed, explicit review.",
      badge: "UNCERTAINTY PRESERVED",
      badgeStyle: "bg-stone-200 text-cyan-950 border-stone-300",
    },
    {
      icon: GitCompare,
      iconBg: "bg-red-100 text-red-600",
      title: "Supporting and contradicting context",
      desc: "Conflicts remain explicit. Contradictions are not suppressed. Stale, conflicting or restricted context is labeled — not silently omitted.",
      badge: "CONFLICTS EXPLICIT",
      badgeStyle: "bg-red-100 text-red-600 border-red-200",
    },
    {
      icon: Lock,
      iconBg: "bg-[#E4F0EC] text-teal-700",
      title: "Governed evidence references",
      desc: "Evidence access state, lineage, completeness and verification limitations. Restricted, missing and stale states remain visible — never hidden from the record.",
      badge: "ACCESS STATE VISIBLE",
      badgeStyle: "bg-teal-100 text-teal-800 border-teal-300",
    },
    {
      icon: Clock,
      iconBg: "bg-[#F0EDE6] text-[#123B4C]",
      title: "Reviewer activity and corrections",
      desc: "Who reviewed, what changed and when. Corrections preserve attributable prior context rather than rewriting history silently.",
      badge: "CORRECTIONS ATTRIBUTABLE",
      badgeStyle: "bg-stone-200 text-cyan-950 border-stone-300",
    },
  ];

  return (
    <section id="investigation" className="w-full bg-[#F5F2EB] py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#C53B3B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
              Investigation · #investigation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight">
            Questions remain questions until the source supports more.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed font-sans">
            Current review context keeps attribution, uncertainty and corrections visible. No question becomes a verdict without explicit, attributed review.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-cyan-950/10 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-[#151B28]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full border text-[10px] font-bold font-mono ${card.badgeStyle}`}
                  >
                    {card.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestigationSection;

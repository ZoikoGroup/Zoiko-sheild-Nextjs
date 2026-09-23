import React from "react";
import { ArrowRight } from "lucide-react";

const knowledgeCards = [
  {
    category: "Recommended for You",
    badge: "Current",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
    title: "Configuring Multi-Party Approval for Host Isolation Actions",
    updated: "Updated Jan 2026",
  },
  {
    category: "Common Setup Tasks",
    badge: "Review Due",
    badgeClass: "bg-[#FEF7E0] text-[#B06000]",
    title: "Establishing Permission-Scoped Client Credentials for CrowdStrike",
    updated: "Updated Dec 2025",
  },
  {
    category: "Trending Issues",
    badge: "Known Mismatch",
    badgeClass: "bg-[#FDF2F2] text-[#C53030]",
    title: "Okta Session Sync Failures due to Expired Directory Schema Scopes",
    updated: "Updated Jan 2026",
  },
  {
    category: "Recent Changes",
    badge: "Superseded",
    badgeClass: "bg-[#F3F4F6] text-[#4B5563]",
    title: "Deprecated Intune Compliance Ingestion API Endpoint v1.2",
    updated: "Updated Nov 2025",
  },
  {
    category: "Known Issues",
    badge: "Known Mismatch",
    badgeClass: "bg-[#FDF2F2] text-[#C53030]",
    title: "Jamf Pro Telemetry Ingestion Latency on High-Density Clusters",
    updated: "Updated Jan 2026",
  },
  {
    category: "Recently Updated",
    badge: "Current",
    badgeClass: "bg-[#E6F4EA] text-[#137333]",
    title: "Verifying Cryptographic Proof Signatures via Local CLI Tool",
    updated: "Updated Jan 2026",
  },
];

export default function CurrentKnowledgeAndVerifiedChanges() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            DIRECT FROM SOURCE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Current knowledge &amp; verified changes
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Audit-ready operational directives mapped to verified state changes.
            No synthetic AI summaries allowed.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#C53030] uppercase tracking-wider">
                    {card.category}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${card.badgeClass}`}
                  >
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#111827] tracking-tight mb-6 leading-snug">
                  {card.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#F3F4F6]">
                <span className="text-xs text-[#6B7280]">{card.updated}</span>
                <div className="text-[#C53030]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

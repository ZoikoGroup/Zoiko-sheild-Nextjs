"use client";

import React, { useState } from "react";
import { ArrowRight, Search, ChevronDown } from "lucide-react";

interface CrosswalkRow {
  sourceControl: string;
  targetControl: string;
  mappingType: "Exact Match" | "Partial" | "Unmapped";
  confidence: string;
  confidenceColor: string;
  rationale: string;
  isUnmappedAlert?: boolean;
}

const MAPPINGS_DATA: CrosswalkRow[] = [
  {
    sourceControl: "ZTA Section 3.1.1",
    targetControl: "CIS Safeguard 1.1",
    mappingType: "Exact Match",
    confidence: "High (98%)",
    confidenceColor: "text-teal-700",
    rationale:
      "Both mandate continuous asset inventory matching the authenticated user profile.",
  },
  {
    sourceControl: "ZTA Section 3.1.5",
    targetControl: "CIS Safeguard 6.2",
    mappingType: "Partial",
    confidence: "Medium (75%)",
    confidenceColor: "text-[#A91D22]",
    rationale:
      "CIS 6.2 focuses strictly on access lists; SP 800-207 requires live device posture check at auth.",
  },
  {
    sourceControl: "ZTA Section 3.4.2",
    targetControl: "N/A",
    mappingType: "Unmapped",
    confidence: "No Mapping",
    confidenceColor: "text-slate-400",
    rationale:
      "No validated mapping found. We do not generate false equivalences where source structures differ.",
    isUnmappedAlert: true,
  },
];

export const CrosswalkExplorerSection: React.FC = () => {
  const [searchControl, setSearchControl] = useState("");
  const sourceFramework = "NIST SP 800-207 Zero Trust";
  const targetFramework = "CIS Controls v8.1 Safeguards";

  const filteredMappings = MAPPINGS_DATA.filter(
    (row) =>
      row.sourceControl.toLowerCase().includes(searchControl.toLowerCase()) ||
      row.targetControl.toLowerCase().includes(searchControl.toLowerCase()) ||
      row.rationale.toLowerCase().includes(searchControl.toLowerCase())
  );

  return (
    <section id="crosswalk-explorer" className="py-14 md:py-20 bg-[#E6E4DD] border-b border-cyan-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B26] font-sans">
            Crosswalk &amp; Mapping Explorer
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Compare controls across different standards. We never synthesize
            missing mappings or create false equivalences.
          </p>
        </div>

        {/* Explorer Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden">
          {/* Top Control Filter Bar */}
          <div className="p-4 sm:p-5 bg-[#E6E4DD]/60 border-b border-slate-200 flex flex-col md:flex-row items-center gap-3">
            {/* Source Selector */}
            <div className="flex-1 w-full relative">
              <div className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-900 flex items-center justify-between">
                <span>{sourceFramework}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 hidden md:block" />

            {/* Target Selector */}
            <div className="flex-1 w-full relative">
              <div className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-900 flex items-center justify-between">
                <span>{targetFramework}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>

            {/* Control ID Search */}
            <div className="w-full md:w-64 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchControl}
                onChange={(e) => setSearchControl(e.target.value)}
                placeholder="Search control ID..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#A91D22] focus:ring-1 focus:ring-[#A91D22] transition-colors"
              />
            </div>
          </div>

          {/* Crosswalk Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#E6E4DD]/40 border-b border-slate-200 text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider">
                  <th className="py-3 px-5">Source Control</th>
                  <th className="py-3 px-5">Target Control</th>
                  <th className="py-3 px-5">Mapping Type</th>
                  <th className="py-3 px-5">Confidence</th>
                  <th className="py-3 px-5">Zoiko Rationale &amp; Evidence Boundary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredMappings.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-extrabold text-[#0B1B26] font-sans">
                      {row.sourceControl}
                    </td>

                    <td className="py-4 px-5 text-slate-600 font-normal">
                      {row.targetControl}
                    </td>

                    <td className="py-4 px-5">
                      {row.mappingType === "Exact Match" && (
                        <span className="px-2.5 py-1 bg-teal-50 text-teal-800 border border-teal-200 rounded-full font-mono text-[11px] font-bold">
                          Exact Match
                        </span>
                      )}
                      {row.mappingType === "Partial" && (
                        <span className="px-2.5 py-1 bg-red-50 text-[#A91D22] border border-red-200 rounded-full font-mono text-[11px] font-bold">
                          Partial
                        </span>
                      )}
                      {row.mappingType === "Unmapped" && (
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded-full font-mono text-[11px] font-bold">
                          Unmapped
                        </span>
                      )}
                    </td>

                    <td className={`py-4 px-5 font-mono font-bold text-[11px] ${row.confidenceColor}`}>
                      {row.confidence}
                    </td>

                    <td className={`py-4 px-5 leading-relaxed font-normal ${
                      row.isUnmappedAlert ? "text-[#A91D22]" : "text-slate-600"
                    }`}>
                      {row.rationale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span>Showing {filteredMappings.length} verified control relationships</span>
            <span>Non-synthetic alignment model</span>
          </div>
        </div>
      </div>
    </section>
  );
};

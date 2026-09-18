"use client";

import React from "react";

export const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="w-full bg-white py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#C53B3B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
              Overview · #overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight">
            One governed record. Clear, separate authorities.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed font-sans">
            A synthetic conceptual model showing how reviewable case context connects without turning the case into an incident verdict.
          </p>
        </div>

        {/* 3 Column Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (4 Spans on LG) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-2.5 hover:border-cyan-950/20 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#C53B3B] flex items-center justify-center font-bold text-xs font-mono">
                  01
                </div>
                <h3 className="text-lg font-extrabold text-[#151B28]">Investigation</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Questions, hypotheses, reviewers and current case context.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-2.5 hover:border-cyan-950/20 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs font-mono">
                  02
                </div>
                <h3 className="text-lg font-extrabold text-[#151B28]">Evidence</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Governed references, lineage, completeness, access and history.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-2.5 hover:border-cyan-950/20 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-xs font-mono">
                  03
                </div>
                <h3 className="text-lg font-extrabold text-[#151B28]">Communications</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Attributable references only when approved.
              </p>
            </div>
          </div>

          {/* Center Dark Column (4 Spans on LG) - Central Case Record */}
          <div className="lg:col-span-4 p-7 bg-[#0B181E] rounded-3xl text-white shadow-xl border border-gray-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-teal-300 tracking-wider uppercase block">
                CENTRAL CASE RECORD
              </span>

              <div className="bg-[#11242C] px-3.5 py-1.5 rounded-lg border border-teal-500/30 inline-block">
                <span className="font-mono text-sm font-extrabold text-teal-200">
                  CASE-SYNTHETIC-7F3A
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white leading-snug">
                Review of approved detection context
              </h3>

              <div className="space-y-2 pt-2 border-t border-gray-800 text-xs text-white/70 font-mono leading-relaxed">
                <p><strong className="text-white">Scope:</strong> public-safe environment & time boundary</p>
                <p><strong className="text-white">Owner / reviewers:</strong> accountable roles only</p>
                <p><strong className="text-white">Workflow state:</strong> authoritative reference only</p>
                <p><strong className="text-white">Visibility:</strong> governed access class</p>
                <p><strong className="text-white">Related refs:</strong> Detection, Analytics, Evidence, AI, integration, response</p>
              </div>
            </div>

            <div className="p-3 bg-red-950/40 rounded-xl border border-red-500/30 font-mono text-[11px] text-red-300">
              Context: missing · stale · restricted · conflicting
            </div>
          </div>

          {/* Right Column (4 Spans on LG) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-2.5 hover:border-cyan-950/20 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs font-mono">
                  04
                </div>
                <h3 className="text-lg font-extrabold text-[#151B28]">Decision history</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Reviewer, decision, rationale, escalation and effective time.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-2.5 hover:border-cyan-950/20 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs font-mono">
                  05
                </div>
                <h3 className="text-lg font-extrabold text-[#151B28]">Ownership</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Accountable role and access boundary.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-2.5 hover:border-cyan-950/20 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs font-mono">
                  06
                </div>
                <h3 className="text-lg font-extrabold text-[#151B28]">Handoffs</h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Separate authorities remain distinct.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;

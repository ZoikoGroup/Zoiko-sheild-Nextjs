"use client";

import React from "react";

export const AiAssistanceSection: React.FC = () => {
  return (
    <section id="assistance" className="w-full bg-white py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#C53B3B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
              Assistance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight">
            Approved context in. Cited assistance out.
          </h2>
        </div>

        {/* 2 Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-5 bg-[#C53B3B]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                  ANALYTICS HANDOFF
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#151B28]">Security Analytics</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                May hand off approved rule, match, correlation, context, replay or priority references when current.
              </p>
            </div>
          </div>

          {/* Right AI Assistance Card */}
          <div className="lg:col-span-7 p-8 bg-white rounded-3xl border border-cyan-950/10 shadow-xl space-y-5 relative overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-teal-700 tracking-wider uppercase">
                AI ASSISTANCE
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#151B28] leading-snug">
              AI may summarize authorized context with citations, retrieve permitted evidence references, or make advisory recommendations when supported.
            </h3>

            <p className="text-xs text-gray-500 leading-relaxed font-sans">
              Grounded, cited, overridable and permission-bound. Separate from human or organizational decisions. No automatic sending, hidden write authority, approval, ownership or response execution.
            </p>

            <div className="p-3.5 bg-red-50 rounded-xl border border-red-200 flex items-center gap-2 font-mono text-xs text-red-600 font-bold">
              <span>AI UNAVAILABLE → DETERMINISTIC / HUMAN FALLBACK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAssistanceSection;

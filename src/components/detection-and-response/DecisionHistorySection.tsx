"use client";

import React from "react";

export default function DecisionHistorySection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, description, and metadata tags */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                05 &bull; DECISION HISTORY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Authority leaves a visible trail.
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-8">
              Reviewer, rationale, approval and escalation stay attached to the
              decision &mdash; not buried in chat or inferred after the fact.
            </p>

            {/* Metadata Tags */}
            <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] text-[#2E7D32] leading-relaxed">
              <span>question</span>
              <span>&bull;</span>
              <span>options</span>
              <span>&bull;</span>
              <span>approver / authority</span>
              <span>&bull;</span>
              <span>outcome</span>
              <span>&bull;</span>
              <span>conditions</span>
              <span>&bull;</span>
              <span>rationale</span>
              <span>&bull;</span>
              <span>timestamp</span>
            </div>
          </div>

          {/* Right Column: Decision Request Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              {/* Card Header Subtitle and Timestamp */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                  DECISION REQUEST
                </span>
                <span className="font-mono text-xs text-[#64748B]">
                  14:32 UTC
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-6">
                Suspend the privileged session?
              </h3>

              {/* Two Inner Cards: Approver vs Outcome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Approver Box */}
                <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1]/60 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-2">
                      Approver
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      M. Rivera &bull; Customer authority
                    </p>
                  </div>
                </div>

                {/* Outcome Box */}
                <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1]/60 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-2">
                      Outcome
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      Escalated &bull; additional evidence required
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Tags */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] text-[#64748B] leading-relaxed">
                <span>Escalation</span>
                <span>&bull;</span>
                <span>decision request</span>
                <span>&bull;</span>
                <span>operational update</span>
                <span>&bull;</span>
                <span>customer notification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

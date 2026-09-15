"use client";

import React from "react";

export default function InvestigationSection() {
  return (
    <section className="w-full bg-[#F0EDE6] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, description, and alert banner */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E04F2E]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                03 &bull; INVESTIGATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Questions before conclusions.
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-8">
              Investigations organize hypotheses, evidence and reviewer actions
              while keeping observations distinct from interpretation.
            </p>

            {/* Alert Banner */}
            <div className="w-full bg-[#F7E8E5] rounded-2xl p-4 flex items-center gap-3">
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                Automation and AI may assist, but consequential conclusions
                retain human authority.
              </p>
            </div>
          </div>

          {/* Right Column: Large Card with Investigation Details */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              {/* Card Subheader */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
                  INVESTIGATION &bull; ZS-1042
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-6">
                Did a privileged identity access a new cloud workload?
              </h3>

              {/* Two Inner Cards: Observed facts vs Interpretation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Observed facts */}
                <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1]/60 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-2">
                      Observed facts
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      New device &bull; 02:14 UTC &bull; privileged session
                      &bull; source records linked
                    </p>
                  </div>
                </div>

                {/* Interpretation */}
                <div className="bg-white rounded-2xl p-6 border border-[#CBD5E1]/60 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-2">
                      Interpretation
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      Behavior is unusual; intent and impact remain
                      undetermined.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Metadata Tags */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] text-[#64748B] leading-relaxed">
                <span>question</span>
                <span>/</span>
                <span>hypothesis</span>
                <span>&bull;</span>
                <span>trigger</span>
                <span>&bull;</span>
                <span>scope</span>
                <span>&bull;</span>
                <span>evidence</span>
                <span>&bull;</span>
                <span>observed facts</span>
                <span>&bull;</span>
                <span>interpretation</span>
                <span>&bull;</span>
                <span>unknowns</span>
                <span>&bull;</span>
                <span>impact</span>
                <span>&bull;</span>
                <span>next action</span>
                <span>&bull;</span>
                <span>owner / reviewer</span>
                <span>&bull;</span>
                <span>customer decision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

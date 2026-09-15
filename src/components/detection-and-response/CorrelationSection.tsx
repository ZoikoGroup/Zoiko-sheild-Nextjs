"use client";

import React from "react";

export default function CorrelationSection() {
  return (
    <section className="relative w-full bg-[#071829] py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Graphic / Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/images/detection/bg.png"
          alt="Background network mesh"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Relationship View Graph Card containing the left-side image asset */}
          <div className="lg:col-span-6 bg-[#123B4C] backdrop-blur-md rounded-3xl p-6 border border-[#FFFFFF1A] shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 font-mono text-xs text-[#94A3B8]">
              <span>RELATIONSHIP VIEW</span>
              <span>CONFIDENCE 0.72</span>
            </div>

            {/* Graph Visual Area with Left-Side Image */}
            <div className="bg-[#050E17] rounded-2xl h-64 sm:h-72 mb-6 border border-[#FFFFFF0D] relative overflow-hidden flex items-center justify-center">
              <img
                src="/images/detection/2.png"
                alt="Relationship view graph matrix"
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 font-mono text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#22D3EE]" />
                <span>Observed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E0967D]" />
                <span>Inferred</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#64748B]" />
                <span>Unknown</span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, description, 3 option cards, and alert banner */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#E0967D]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
                02 &bull; CORRELATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
              Relationship is context &mdash; not a conclusion.
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-8">
              Entity correlation, signal correlation and clusters preserve
              lineage and uncertainty boundaries. Conditional: explore Security
              Analytics for rules, correlation and replay context.
            </p>

            {/* Three Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
              {/* Entity Card */}
              <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-5 border border-[#FFFFFF1A] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">Entity</h3>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Identity, device and resource relationships.
                  </p>
                </div>
              </div>

              {/* Signal Card */}
              <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-5 border border-[#FFFFFF1A] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">Signal</h3>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Events related by time, scope and observable context.
                  </p>
                </div>
              </div>

              {/* Cluster Card */}
              <div className="bg-[#123B4C] backdrop-blur-md rounded-2xl p-5 border border-[#FFFFFF1A] shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">Cluster</h3>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    A reviewable relationship &mdash; not automatic causality.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Warning Banner */}
            <div className="w-full bg-[#C442421C] rounded-2xl p-4 border border-[#C4424266] flex items-center gap-3">
              <p className="text-xs text-[#E2E8F0] font-medium leading-relaxed">
                A correlated relationship is NOT automatically causality,
                compromise, attacker intent, or authorized response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

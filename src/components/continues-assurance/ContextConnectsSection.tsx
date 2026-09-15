"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function ContextConnectsSection() {
  return (
    <section className="relative w-full bg-[#0B2732ED] py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Graphic / Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src="/images/assurance/2.png"
          alt="Background network mesh"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E0967D]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
              HOW RECORDS CONNECT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Context connects. Authority stays bounded.
          </h2>

          <p className="text-xs sm:text-sm text-[#FFFFFFB0] max-w-xl leading-relaxed">
            Continuous Assurance can use approved context from the Compliance
            Control Plane and organize governed records from the Evidence
            Ledger.
          </p>
        </div>

        {/* Two-Column Grid: Compliance Control Plane & Evidence Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Card: Compliance Control Plane */}
          <div className="bg-[#123B4C] backdrop-blur-sm rounded-3xl p-8 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white mb-3">
                Compliance Control Plane
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Approved control, mapping, test, assessment and exception
                context can support the service. Participation does not
                automatically set compliance states.
              </p>
            </div>
          </div>

          {/* Right Card: Evidence Ledger */}
          <div className="bg-[#123B4C] backdrop-blur-sm rounded-3xl p-8 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white mb-3">
                Evidence Ledger
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Evidence may be organized and reviewed when authorized.
                ZolikoShield does not own evidence truth: source, custody and
                authority remain visible.
              </p>
            </div>
          </div>
        </div>

        {/* Platform Tags */}
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="text-xs font-mono text-[#E0967D] hover:underline cursor-pointer">
            Compliance platform &nearr;
          </span>
          <span className="text-xs font-mono text-[#E0967D] hover:underline cursor-pointer">
            Evidence platform &nearr;
          </span>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#123B4C] backdrop-blur-sm rounded-2xl p-4 border border-[#FFFFFF1F] flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E0967D] shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#E0967D]" />
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Participation in Continuous Assurance does not set a control to
            compliant, effective or certified.
          </p>
        </div>
      </div>
    </section>
  );
}

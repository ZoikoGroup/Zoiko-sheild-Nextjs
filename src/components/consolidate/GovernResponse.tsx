"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function GovernResponse() {
  return (
    <section className="relative w-full bg-[#071829] py-16 md:py-24 text-white font-sans overflow-hidden">
      {/* Background Graphic / Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <img
          src="/images/security/bg2.png"
          alt="Background network mesh"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E0967D]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E0967D] uppercase">
              GOVERN RESPONSE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Authority before action. Receipts after execution.
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Separate what a connector can technically do from what people have
            explicitly authorized it to do.
          </p>
        </div>

        {/* Main Content Grid: Left Image, Right Badges & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
          {/* Left Column: Graphic Showcase Container */}
          <div className="lg:col-span-7 relative">
            <img
              src="/images/security/5.png"
              alt="Govern response control center visualization"
              className="w-full h-[380px] sm:h-[420px] object-cover rounded-2xl"
            />
          </div>

          {/* Right Column: Badges & Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Action Tags / Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#FFFFFF0D] backdrop-blur-sm border border-[#FFFFFF1F] text-xs text-white font-medium">
                Advisory
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFFFF0D] backdrop-blur-sm border border-[#FFFFFF1F] text-xs text-white font-medium">
                Review-required
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFFFF0D] backdrop-blur-sm border border-[#FFFFFF1F] text-xs text-white font-medium">
                Approval-required
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFFFF0D] backdrop-blur-sm border border-[#FFFFFF1F] text-xs text-white font-medium">
                Pre-authorized delegated
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFFFF0D] backdrop-blur-sm border border-[#FFFFFF1F] text-xs text-white font-medium">
                Emergency overlay
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFFFF0D] backdrop-blur-sm border border-[#FFFFFF1F] text-xs text-white font-medium">
                Prohibited
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#FFFFFF0D] backdrop-blur-sm border border-[#FFFFFF1F] text-xs text-white font-medium">
                Customer-executed
              </span>
            </div>

            {/* Card 1: Action stages */}
            <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-2xl p-6 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white mb-3">
                  Action stages
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Definition &mdash; Preconditions &mdash; Preview &mdash;
                  Authorization &mdash; Re-authentication &mdash; Execution
                  &mdash; Result &mdash; Receipt &mdash; Validation &mdash;
                  Follow-up.
                </p>
              </div>
            </div>

            {/* Card 2: Failure handling */}
            <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-2xl p-6 border border-[#FFFFFF1F] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-white mb-3">
                  Failure handling
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Precondition failed &mdash; connector unavailable &mdash;
                  timeout &mdash; partial success &mdash; rollback &mdash;
                  forward fix &mdash; manual recovery &mdash; reconciliation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-2xl p-4 border border-[#FFFFFF1F] flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E0967D] shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#E0967D]" />
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            The existence of an integration does not authorize actions &mdash;
            each action class requires its own authority.
          </p>
        </div>
      </div>
    </section>
  );
}

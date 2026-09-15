"use client";

import React from "react";
import {
  Database,
  ShieldCheck,
  UserCheck,
  Cloud,
  Network,
  AlertTriangle,
} from "lucide-react";

export default function SourceSignalsSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading, description, button, and metadata pills */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#1F7A6C]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#1F7A6C] uppercase">
                01 &bull; SOURCE / SIGNALS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[34px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
              Every finding begins with source truth.
            </h2>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-8">
              Origin, scope, time, state and permissions remain attached as
              telemetry moves into investigation.
            </p>

            <button className="px-6 py-3 rounded-full bg-white border border-[#CBD5E1] text-xs font-mono font-bold text-[#0F172A] hover:bg-[#FAF8F5] transition-colors shadow-sm mb-12">
              Explore Integrations
            </button>

            {/* Code/Field Tags */}
            <div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-[11px] text-[#2E7D32] leading-relaxed">
              <span>source_id</span>
              <span>&bull;</span>
              <span>provider</span>
              <span>&bull;</span>
              <span>event_type</span>
              <span>&bull;</span>
              <span>native_timestamp</span>
              <span>&bull;</span>
              <span>received_time</span>
              <span>&bull;</span>
              <span>schema_version</span>
              <span>&bull;</span>
              <span>normalized_fields</span>
              <span>&bull;</span>
              <span>raw_reference</span>
            </div>
          </div>

          {/* Right Column: Connection Cards List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {/* Card 1: SIEM / data platform */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4F0EC] flex items-center justify-center text-[#1F7A6C]">
                  <Database className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#0F172A]">
                  SIEM / data platform
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#2E7D32]">
                CONNECTED
              </span>
            </div>

            {/* Card 2: Endpoint / EDR */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4F0EC] flex items-center justify-center text-[#1F7A6C]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#0F172A]">
                  Endpoint / EDR
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#2E7D32]">
                CONNECTED
              </span>
            </div>

            {/* Card 3: Identity / PAM */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4F0EC] flex items-center justify-center text-[#1F7A6C]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#0F172A]">
                  Identity / PAM
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#2E7D32]">
                CONNECTED
              </span>
            </div>

            {/* Card 4: Cloud / SaaS */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4F0EC] flex items-center justify-center text-[#1F7A6C]">
                  <Cloud className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#0F172A]">
                  Cloud / SaaS
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#2E7D32]">
                CONNECTED
              </span>
            </div>

            {/* Card 5: Network / Email */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4F0EC] flex items-center justify-center text-[#1F7A6C]">
                  <Network className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#0F172A]">
                  Network / Email
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#64748B]">
                AVAILABLE
              </span>
            </div>

            {/* Card 6: Threat Intelligence */}
            <div className="bg-white rounded-2xl px-6 py-4 border border-[#CBD5E1] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E4F0EC] flex items-center justify-center text-[#1F7A6C]">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <span className="font-bold text-sm sm:text-base text-[#0F172A]">
                  Threat Intelligence
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-[#64748B]">
                AVAILABLE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

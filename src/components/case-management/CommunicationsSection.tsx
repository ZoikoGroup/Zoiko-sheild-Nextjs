"use client";

import React from "react";
import { UserCheck, ShieldAlert, Lock } from "lucide-react";

export const CommunicationsSection: React.FC = () => {
  return (
    <section id="communications" className="w-full bg-white py-16 lg:py-20 border-b border-zoiko-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-[#C53B3B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
              Communications · #communications
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] tracking-tight">
            Attributable references, not an invented channel.
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-3xl leading-relaxed font-sans">
            Communication context appears only when disclosure is approved and the reference is current.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-3 flex flex-col justify-between hover:border-cyan-950/20 transition-all">
            <div className="space-y-3">
            
              <h3 className="text-xl font-extrabold text-[#151B28]">Attribution</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Actor or role, time, visibility and audience, with source or channel only when approved.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-3 flex flex-col justify-between hover:border-cyan-950/20 transition-all">
            <div className="space-y-3">
              
              <h3 className="text-xl font-extrabold text-[#151B28]">Scope</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Case scope; native, external or direction only when current; correction and withdrawal history.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-3 flex flex-col justify-between hover:border-cyan-950/20 transition-all">
            <div className="space-y-3">
             
              <h3 className="text-xl font-extrabold text-[#151B28]">Unavailable by design</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                Restricted or unavailable references remain labeled. No claim of chat, email, threads, mentions, templates, notifications, portals, transcripts, attachments or external participants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationsSection;

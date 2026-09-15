"use client";

import React from "react";
import { Check, ShieldAlert } from "lucide-react";

export default function DefineServiceBoundarySection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              SCOPE BEFORE PROMISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Define the service boundary first.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Required identity and engagement inputs are recorded before any
            service promise is made.
          </p>
        </div>

        {/* Two-Column Grid: Left White Card with Field Pills, Right Dark Card with Checklists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-start">
          {/* Left Column: Service identity fields (white card) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm">
            <h3 className="text-base font-bold text-[#0F172A] mb-6">
              Service identity fields
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                service_id
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                display_name
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                service_purpose
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                included_scope
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                excluded_scope
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                eligibility
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                engagement_modes
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                delivery_owner
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                customer_roles
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                third_party_roles
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                regimes / languages
              </div>
              <div className="bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#CBD5E1]/60 font-mono text-xs text-[#0F172A]">
                review_date
              </div>
            </div>
          </div>

          {/* Right Column: Engagement record (dark card) */}
          <div className="lg:col-span-5 bg-[#0F2232] rounded-3xl p-8 border border-[#1E3A52] shadow-sm text-white">
            <h3 className="text-base font-bold text-white mb-6">
              Engagement record
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-[#94A3B8]">
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="text-[#FFFFFFC8]">Engagement ID + authority</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="text-[#FFFFFFC8]">Approved service scope</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="text-[#FFFFFFC8]">Customer + third-party roles</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="te[#FFFFFFC8]ite">
                  Evidence sources + access boundaries
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="text-[#FFFFFFC8]">Review cadence + milestones</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="text-[#FFFFFFC8]">Decision owners + escalation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="text-[#FFFFFFC8]">Output classes + states</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FFFFFFC8] font-bold"><Check/></span>
                <span className="text-[#FFFFFFC8]">Limitations + expiry</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Alert/Note Banner */}
        <div className="bg-[#FAF0ED] rounded-2xl p-4 border border-[#E04F2E]/30 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#E04F2E] shrink-0">
            <ShieldAlert className="w-4 h-4 text-[#E04F2E]" />
          </div>
          <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
            Page shows exactly which scope fields must be defined before a
            service promise.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export default function IncidentReadinessSection() {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] bg-[#C44242]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#C44242] uppercase">
                INCIDENT READINESS SERVICE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-[1.15]">
              Incident Readiness
            </h2>

            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-8">
              Preparation, activation, and response governance &mdash; with
              explicit authority, evidence, communications and service
              limitations.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => console.log("Book a Demo clicked")}
                className="px-5 py-2.5 rounded-xl bg-[#C44242] hover:bg-[#B03A3A] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-[#C44242]/20 cursor-pointer"
              >
                Book a Demo
              </button>

              <a
                href="/detection-response"
                className="px-5 py-2.5 rounded-xl border border-[#CBD5E1] hover:border-[#0F172A] text-[#0F172A] text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2 bg-white"
              >
                Detection &amp; Response &rarr;
              </a>
            </div>

            {/* Service Boundary Box */}
            <div className="p-4 rounded-2xl bg-[#EFECE6] border border-[#E2E8F0] text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
              <strong className="text-[#0F172A] font-semibold">
                Service boundary:
              </strong>{" "}
              Readiness prepares governance and activation pathways. It does not
              itself provide unrestricted emergency response authority.
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
              <img
                src="/images/incident/1.png"
                alt="Incident Readiness Control Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

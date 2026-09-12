"use client";

import React from "react";
import { Shield, ShieldAlert } from "lucide-react";

export default function CoverageTargetsAndMetricsSection() {
  return (
    <section className="w-full bg-[#EEEBE7] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              COVERAGE, TARGETS AND METRICS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            The phrases a retainer page usually leads with.
          </h2>

          <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
            All blocked here until the exact service, region, staffing model,
            entitlement and exception rules are evidenced. These are the
            promises buyers hear most and get in writing least.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Fields that need service authority */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <Shield className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Fields that need service authority
              </h3>

              <div className="space-y-4">
                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Responder hours, on-call structure and surge capacity
                    </strong>{" "}
                    &mdash; an operational policy, never marketed as unlimited.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Activation target
                    </strong>{" "}
                    &mdash; with its trigger, clock basis, business or calendar
                    time, exclusions and whether it measures contact attempt or
                    acknowledgement.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Regions, languages and travel
                    </strong>{" "}
                    &mdash; from service operations, not inferred from office
                    locations.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Annual hours, rollover, minimums and credits
                    </strong>{" "}
                    &mdash; commercial terms from your order form.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Included exercises and refresh cadence
                    </strong>{" "}
                    &mdash; from the approved service catalog.
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Retention, residency and export of response evidence
                    </strong>{" "}
                    &mdash; from privacy and architecture authority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E0402F] border-t-[3px] border-t-[#E0402F] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <ShieldAlert className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Independent from Managed Defense
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                The retainer is{" "}
                <strong className="text-[#0F172A]">not included</strong> with
                Managed Defense, and Managed Defense is{" "}
                <strong className="text-[#0F172A]">not a prerequisite</strong>{" "}
                for the retainer. They are separate service states unless an
                approved commercial package explicitly combines them.
              </p>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Incident Readiness is the solution-level view of the same
                problem and can be pursued without any retainer at all. Nothing
                on this page creates a bundle in either direction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

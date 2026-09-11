"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldAlert } from "lucide-react";

export default function PhrasesThisPageWillNotUseComponent() {
  return (
    <div className="min-h-screen bg-[#E1DDD8] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[1200px]"
      >
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              COVERAGE, METRICS AND EXCLUSIONS
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            The phrases this page will not use.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-xl leading-relaxed">
            Every one of these is blocked until the exact service, region,
            staffing model, entitlement and exception rules are evidenced.
            They&apos;re the phrases buyers most often hear and least often get
            in writing.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 md:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Icon / Badge */}
              <div className="w-8 h-8 rounded bg-[#F4F1EA] flex items-center justify-center text-[#6B7280] mb-6">
                <FileText className="w-4 h-4" />
              </div>

              <h2 className="font-bold text-[#111827] text-[16px] mb-6">
                Coverage fields that need authority
              </h2>

              <div className="space-y-4 text-xs text-[#4B5563] divide-y divide-[#E5E7EB]">
                <div className="pt-4 first:pt-0 flex items-start space-x-2.5">
                  <span className="text-[#DC2626] font-bold mt-0.5">
                    &times;
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Operating hours
                    </span>{" "}
                    and time-zone model, from a named service catalog or signed
                    term.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <span className="text-[#DC2626] font-bold mt-0.5">
                    &times;
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Regions served
                    </span>{" "}
                    — from service operations, never inferred from office
                    locations.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <span className="text-[#DC2626] font-bold mt-0.5">
                    &times;
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Analyst location and languages
                    </span>
                    , where disclosure is security-, privacy- and legally
                    approved.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <span className="text-[#DC2626] font-bold mt-0.5">
                    &times;
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Holiday, maintenance and after-hours escalation
                    </span>
                    , with entitlement and contact method.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <span className="text-[#DC2626] font-bold mt-0.5">
                    &times;
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Queue capacity and surge
                    </span>{" "}
                    — an operational policy, never marketed as unlimited.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <span className="text-[#DC2626] font-bold mt-0.5">
                    &times;
                  </span>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Subcontracted operations
                    </span>
                    , disclosed as applicable.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-[11px] text-[#6B7280] leading-relaxed font-mono">
              <span className="font-bold text-[#111827]">RULE ELESEN</span>
              <br />
              Where a coverage field is unverified, it renders as requiring
              qualification rather than defaulting to the generous reading.
            </div>
          </motion.div>

          {/* Right Card with #E0402F border */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="bg-[#FFFFFF] border border-[#E0402F] border-t-4 border-t-[#E0402F] rounded-[6px] p-6 md:p-8 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Icon / Badge */}
              <div className="w-8 h-8 rounded bg-[#FEF2F2] flex items-center justify-center text-[#E0402F] mb-6">
                <ShieldAlert className="w-4 h-4" />
              </div>

              <h2 className="font-bold text-[#111827] text-[16px] mb-4">
                No metric theater
              </h2>

              <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                Acknowledgement time, triage target, escalation target,
                detection coverage, false-positive rate, MTTD and MTTR are all
                publishable — but only with their definition, service scope,
                measurement period and method, exclusions, owner, review date
                and correction path.
              </p>

              <p className="text-xs text-[#4B5563] leading-relaxed">
                A target number without a clock basis, a denominator and an
                exclusion list isn&apos;t proof of anything. Historical
                performance is also kept separate from a contractual target,
                because they answer different questions.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

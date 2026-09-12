"use client";

import React from "react";
import { Database, FileText } from "lucide-react";

export default function EvidenceAndInvestigationSection() {
  return (
    <section className="w-full bg-[#0B2237] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              EVIDENCE AND INVESTIGATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            Preserved and attributable &mdash; not &ldquo;court-ready.&rdquo;
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
            Response evidence can support investigation, review and your legal
            process. It does not by itself guarantee admissibility, privilege or
            court acceptance, and this page won&apos;t say it does.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What the evidence record carries */}
          <div className="bg-[#0E2C46] rounded-3xl p-8 border border-[#1E3A5F] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#143454] flex items-center justify-center text-white mb-6">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                What the evidence record carries
              </h3>

              <div className="space-y-4">
                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Preservation request</strong>{" "}
                    &mdash; source, scope, time range, responsible party,
                    trigger and status.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Collection</strong> &mdash;
                    method category, operator, source, time, tool version where
                    material, and known limitations.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Integrity</strong> &mdash;
                    hash or equivalent where appropriate, without implying
                    immutability that isn&apos;t there.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Transfers</strong> &mdash;
                    sender, recipient, time, channel, custody note and access
                    restrictions.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Completeness</strong> &mdash;
                    missing periods, unavailable systems, overwritten logs and
                    collection failures stay visible.
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Derived artifacts</strong>{" "}
                    &mdash; queries, timelines and extracted indicators
                    reference their source evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Language discipline */}
          <div className="bg-[#0E2C46] rounded-3xl p-8 border border-[#1E3A5F] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#143454] flex items-center justify-center text-white mb-6">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Language discipline
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                We use &ldquo;preserved and attributable response
                evidence&rdquo; rather than &ldquo;forensically certified&rdquo;
                or &ldquo;court-ready&rdquo; &mdash; unless an approved
                specialist method and authority actually support the stronger
                claim.
              </p>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Legal use is coordinated with your counsel and your process.
                Admissibility, privilege and evidentiary weight are
                determinations that belong to a court and to qualified
                professionals, not to a service description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

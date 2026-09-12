"use client";

import React from "react";
import { Cpu, ShieldAlert } from "lucide-react";

export default function RiskReportingAndAiSection() {
  return (
    <section className="w-full bg-[#EEEBE7] py-16 md:py-24 text-[#0F172A] font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#E04F2E] uppercase">
              RISK REPORTING AND AI
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Bounded AI, and risk that keeps its method.
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
            Underwriting, fraud, claims and payment contexts are exactly where
            an unexplained score or an automated adverse decision does the most
            damage. Both are governed accordingly.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI decision rights in this sector */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <Cpu className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                AI decision rights in this sector
              </h3>

              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Advisory and review-required
                    </strong>{" "}
                    uses may summarize, draft and surface cited evidence.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      Approval-required
                    </strong>{" "}
                    covers anything with a consequence, with an attributable
                    human approver.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#E2E8F0]">
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">Prohibited</strong>{" "}
                    &mdash; automated underwriting decisions, claim denial,
                    payment blocking and legal classification are not available
                    by default and have no bypass.
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    <strong className="text-[#0F172A]">
                      No hidden adverse decision
                    </strong>
                    , and no denial of review by automation.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E2E8F0]">
              <span className="px-4 py-2 rounded-full border border-[#CBD5E1] text-xs font-mono font-semibold text-[#0F172A] bg-white">
                AI decision rights
              </span>
              <span className="px-4 py-2 rounded-full border border-[#CBD5E1] text-xs font-mono font-semibold text-[#0F172A] bg-white">
                Responsible AI
              </span>
            </div>
          </div>

          {/* Risk and Board reporting */}
          <div className="bg-white rounded-3xl p-8 border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F1F0EB] flex items-center justify-center text-[#0F172A] mb-6">
                <ShieldAlert className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                Risk and Board reporting
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                Evidence-linked risk statements carry their method, scope,
                freshness, owner and limitations. One compressed sector risk
                score would hide exactly the payment and insurance unknowns that
                matter most.
              </p>

              <div className="p-4 rounded-2xl bg-[#F7F5F0] border border-[#E2E8F0] mb-8">
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  <strong className="text-[#0F172A]">Not produced here:</strong>{" "}
                  loss probability, expected loss, reserves, materiality
                  determinations or Board conclusions. Those belong to your
                  risk, actuarial, finance and governance authorities.
                </p>
              </div>
            </div>

            <div>
              <a
                href="#report"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#CBD5E1] text-xs font-mono font-bold text-[#0F172A] hover:bg-[#F7F5F0] transition-colors"
              >
                Report risk to the Board
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

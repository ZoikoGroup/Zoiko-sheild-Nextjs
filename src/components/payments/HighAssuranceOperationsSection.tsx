"use client";

import React from "react";
import { ShieldCheck, Clock } from "lucide-react";

export default function HighAssuranceOperationsSection() {
  return (
    <section className="w-full bg-[#0B2237] py-16 md:py-24 text-white font-sans">
      <div className="w-full max-w-6xl mx-auto px-4 text-left">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#E04F2E]" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#93A6B8] uppercase">
              HIGH-ASSURANCE OPERATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-4">
            &ldquo;Logged in&rdquo; is never the same as
            &ldquo;authorized.&rdquo;
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-3xl">
            High-impact payment and insurance actions need explicit access
            context. Consequential action authority stays separate from
            authentication and from technical capability.
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What stronger control looks like */}
          <div className="bg-[#0E2C46] rounded-3xl p-8 border border-[#1E3A5F] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#143454] flex items-center justify-center text-white mb-6">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                What stronger control looks like
              </h3>

              <div className="space-y-4 mb-4">
                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Principal assurance</strong>{" "}
                    &mdash; an authentication level appropriate to the action,
                    with the exact method authority-gated.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Authorization</strong>{" "}
                    &mdash; role plus resource plus action plus purpose plus
                    scope plus environment plus time plus policy.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Step-up</strong> &mdash; for
                    configured high-impact actions, with current context
                    revalidated rather than assumed.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Privileged access</strong>{" "}
                    &mdash; time-bound, purpose-limited, approved, attributable
                    and reviewed.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">
                      Segregation of duties
                    </strong>{" "}
                    &mdash; maker/checker or equivalent where your policy
                    requires it, with conflicts visible.
                  </p>
                </div>

                <div className="pb-4 border-b border-[#1A3855]">
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Break glass</strong> &mdash;
                    explicit trigger, scope, expiry, monitoring and
                    retrospective review.
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    <strong className="text-white">Access review</strong>{" "}
                    &mdash; current access, orphaned roles, stale grants and
                    revocation evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency never widens permission */}
          <div className="bg-[#0E2C46] rounded-3xl p-8 border border-[#1E3A5F] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#143454] flex items-center justify-center text-white mb-6">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Urgency never widens permission
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Payment urgency, claim deadlines, fraud severity and incident
                severity do not silently broaden anyone&apos;s access. That is
                the single most important property of a high-assurance
                environment, and it holds under pressure or it doesn&apos;t hold
                at all.
              </p>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Service identities carry a named owner, defined scopes,
                non-interactive controls, rotation and revocation. Delegation is
                a narrow action class with an effective period, stop conditions
                and receipts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { FileText } from "lucide-react";

export default function TenContextStates() {
  return (
    <div className="min-h-screen bg-[#EEEBE7] text-[#1E293B] font-sans antialiased py-16 px-4 md:px-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-4 h-[2px] bg-[#DC2626]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#DC2626] uppercase">
              GROUNDING, SOURCES AND UNCERTAINTY
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Ten context states. Unknown is one of them.
          </h1>
          <p className="text-sm md:text-base text-[#4B5563] max-w-2xl leading-relaxed">
            A polished answer can conceal uncertainty, so context state changes
            both the presentation and the actions available. There is no
            default-to-benign and no default-to-compromised.
          </p>
        </div>

        {/* 10 States Grid Card */}
        <div className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] overflow-hidden shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
            {/* Column 1 (3 items) */}
            <div className="divide-y divide-[#E5E7EB] flex flex-col">
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Missing
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  State what is missing where safe, then narrow the answer or
                  route to review.
                </p>
              </div>
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Unavailable source
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  Continue on remaining approved context only if adequate —
                  otherwise fail closed.
                </p>
              </div>
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Withdrawn / Invalid
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  Removed from current grounding, with the correction history
                  kept.
                </p>
              </div>
            </div>

            {/* Column 2 (3 items) */}
            <div className="divide-y divide-[#E5E7EB] flex flex-col">
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Stale
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  Timing exposed. No current-state claim rests on a stale input.
                </p>
              </div>
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Unsupported format
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  No hallucinated extraction. Request an approved alternative or
                  fall back.
                </p>
              </div>
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Unknown
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  A permitted answer state in its own right, not a gap to be
                  filled.
                </p>
              </div>
            </div>

            {/* Column 3 (2 items + fill) */}
            <div className="divide-y divide-[#E5E7EB] flex flex-col">
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Conflicting
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  Conflict and uncertainty presented. No synthesized false
                  certainty.
                </p>
              </div>
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Partial evidence
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  Observed facts stay clearly distinguished from unknown gaps.
                </p>
              </div>
              <div className="p-6 hidden lg:block flex-1 bg-white" />
            </div>

            {/* Column 4 (2 items + fill) */}
            <div className="divide-y divide-[#E5E7EB] flex flex-col">
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Restricted
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  Content and sensitive existence stay protected; the access
                  limit is explained where appropriate.
                </p>
              </div>
              <div className="p-6 flex flex-col justify-start flex-1">
                <h3 className="font-bold text-[#111827] text-xs mb-1.5">
                  Superseded
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-relaxed">
                  Prefer current authority while preserving historical context
                  where permitted.
                </p>
              </div>
              <div className="p-6 hidden lg:block flex-1 bg-white" />
            </div>
          </div>
        </div>

        {/* Bottom Two Columns: "What a citation carries" & 3D Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-[#FFFFFF] border border-[#D1CBD4] rounded-[6px] p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div>
              {/* Icon / Badge */}
              <div className="w-8 h-8 rounded bg-[#EEEBE7] flex items-center justify-center text-[#6B7280] mb-6">
                <FileText className="w-4 h-4" />
              </div>

              <h2 className="font-bold text-[#111827] text-[16px] mb-6">
                What a citation carries
              </h2>

              <div className="space-y-4 text-xs text-[#4B5563] divide-y divide-[#E5E7EB]">
                <div className="pt-4 first:pt-0 flex items-start space-x-2.5">
                  <div className="border border-[#E0402F] mt-1 h-2 w-2"></div>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Claim-to-source mapping
                    </span>{" "}
                    &mdash; which specific statement rests on which reference.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <div className="border border-[#E0402F] mt-1 h-2 w-2"></div>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Source version
                    </span>
                    , exposed when a changed version could alter the
                    answer&apos;s meaning.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <div className="border border-[#E0402F] mt-1 h-2 w-2"></div>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Observed or effective time
                    </span>
                    , wherever temporal context matters.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <div className="border border-[#E0402F] mt-1 h-2 w-2"></div>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Freshness state
                    </span>{" "}
                    &mdash; current, stale or unknown. No hidden use of stale
                    input.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <div className="border border-[#E0402F] mt-1 h-2 w-2"></div>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Completeness
                    </span>
                    , defined against an approved expected set &mdash; otherwise
                    partial or unknown.
                  </p>
                </div>
                <div className="pt-4 flex items-start space-x-2.5">
                  <div className="border border-[#E0402F] mt-1 h-2 w-2"></div>
                  <p className="leading-relaxed">
                    <span className="font-bold text-[#111827]">
                      Correction path
                    </span>{" "}
                    &mdash; an updated source triggers answer correction and
                    history, not a silent overwrite.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card with #E0402F border & 3D image */}
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
            <div className="w-full h-full relative rounded-[4px] overflow-hidden min-h-[350px]">
              <Image
                src="/images/investigation/3.png"
                alt="Citation and Sources 3D Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

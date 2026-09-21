"use client";

import React from "react";


export const MetadataBlueprintSection: React.FC = () => {
  return (
    <section
      id="canonical-blueprint"
      className="w-full bg-[#F0EDE6] py-14 px-4 sm:px-6 lg:px-8 border-b border-cyan-950/10"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-3">
            <div className="w-6 h-0.5 bg-red-500" />
            <span className="text-red-500 text-xs font-bold font-mono uppercase tracking-wide">
              REFERENCE SPECIFICATION TEMPLATE
            </span>
          </div>
          <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-extrabold font-sans">
            Canonical Entry Metadata Blueprint
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-normal max-w-3xl leading-relaxed">
            This structure demonstrates the cryptographic validity, security
            implications, and rollback guidelines present on every formal entry.
          </p>
        </div>

        {/* Blueprint Card */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-cyan-950/10 shadow-sm space-y-6">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-gray-500 font-bold">RELEASE ID: REL-2026-089</span>
              <span className="text-cyan-950/20">|</span>
              <span className="text-red-500 font-bold">v2.14.0</span>
            </div>

            <div className="px-3 py-1 bg-red-50 text-rose-800 text-xs font-bold font-mono rounded-full border border-rose-200/70">
              Action required
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column: Narrative Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-slate-900 text-lg font-extrabold font-sans flex items-center gap-2">
                  <span>What Changed</span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The old verification payload utilizing raw MD5 hashes has been
                  completely removed from our processing queue. All webhook listeners
                  must now calculate and match SHA-256 signatures supplied in the{" "}
                  <code className="bg-stone-100 text-slate-900 px-1.5 py-0.5 rounded text-xs font-mono border border-stone-200">
                    X-Zoiko-Signature-256
                  </code>{" "}
                  header payload.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-slate-900 text-lg font-extrabold font-sans">
                  Migration &amp; Rollback Constraints
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rollback to version v2.13.x is supported until the deprecation
                  period expires on August 1, 2026. However, any evidentiary records
                  generated under v2.13.x past May 2026 will carry &apos;Stale&apos; posture
                  warnings in audit logs due to legacy security context.
                </p>
              </div>
            </div>

            {/* Right Column: Matrix & Validation */}
            <div className="space-y-5">
              {/* Matrix Card */}
              <div className="p-5 bg-stone-100/90 rounded-xl border border-cyan-950/10 space-y-3">
                <div className="text-red-500 text-xs font-bold font-mono uppercase tracking-wide">
                  DEVELOPER IMPACT MATRIX
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-stone-200">
                    <span className="text-gray-600">Compatibility Class:</span>
                    <span className="text-rose-800 font-bold font-mono">
                      Breaking Change
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-stone-200">
                    <span className="text-gray-600">API Endpoint Scope:</span>
                    <span className="text-slate-900 font-mono">
                      /v2/webhooks/validate
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600">Required Payload Type:</span>
                    <span className="text-slate-900 font-mono">
                      application/json (SHA-256)
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliance Box */}
              <div className="p-5 bg-teal-50/60 rounded-xl border border-teal-700/20 space-y-2">
                <div className="text-teal-800 text-sm font-extrabold font-sans flex items-center gap-1.5">
                  <span>Validated Security &amp; Compliance</span>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  This migration meets strict cryptographic authentication
                  requirements defined under NIST SP 800-53 Rev. 5 (SC-8). Passing
                  legacy signatures past the deadline is a SOC2 control breach.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Append-Only History */}
          <div className="pt-6 border-t border-cyan-950/10 space-y-3">
            <h3 className="text-slate-900 text-base font-extrabold font-sans flex items-center gap-2">
              <span>Append-Only Correction History</span>
            </h3>

            <div className="p-3.5 bg-stone-100 rounded-lg text-xs leading-relaxed text-gray-600 border border-stone-200">
              <span className="text-red-500 font-bold font-mono mr-1.5">
                [2026-05-19 Correction]:
              </span>
              <span>
                Clarified payload schema to specify signature calculation rules
                when handling nested group arrays in Okta metadata objects.
                Original publication omitted trailing whitespaces.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

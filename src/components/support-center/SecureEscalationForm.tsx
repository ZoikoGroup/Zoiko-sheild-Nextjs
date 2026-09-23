import React from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export default function SecureEscalationForm() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SECURE ESCALATION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-2">
            Open a verified case or continue triage
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Isolated diagnostic data. Never exposes client keys, passwords, or
            raw logs to unauthenticated endpoints.
          </p>
        </div>

        {/* Main Card Wrapper */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-[#E5E7EB]">
          <h2 className="text-lg font-bold text-[#111827] mb-6">
            Diagnostic Telemetry Intake
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Primary Issue Domain */}
            <div>
              <label className="block text-xs font-bold text-[#111827] mb-2 uppercase tracking-wide">
                Primary Issue Domain
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs md:text-sm text-[#111827] focus:outline-none focus:border-[#C53030]">
                  <option>
                    Endpoint Posture Conflict (CrowdStrike/Defender)
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#6B7280] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Observed Severity Signal */}
            <div>
              <label className="block text-xs font-bold text-[#111827] mb-2 uppercase tracking-wide">
                Observed Severity Signal
              </label>
              <div className="relative">
                <select className="w-full appearance-none bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-xs md:text-sm text-[#C53030] font-semibold focus:outline-none focus:border-[#C53030]">
                  <option>
                    Severity 1 — Directory Posture Conflict (Access Blocked)
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#6B7280] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Describe Observed Symptoms / Process Logs */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-[#111827] mb-2 uppercase tracking-wide">
              Describe Observed Symptoms / Process Logs
            </label>
            <textarea
              rows={4}
              defaultValue="Host C02DG901Q05D passes intune policy checks, but Duo authentication traces show access block flag active due to local crowdstrike sensor inactivity. Verification required."
              className="w-full bg-white border border-[#E5E7EB] rounded-xl p-4 text-xs md:text-sm font-mono text-[#374151] focus:outline-none focus:border-[#C53030] resize-none"
            />
          </div>

          {/* Verified Option Banner */}
          <div className="bg-[#E6F4EA] border border-[#CEEAD6] rounded-2xl p-4 flex items-start gap-3 mb-8">
            <CheckCircle2 className="w-4 h-4 text-[#137333] shrink-0 mt-0.5" />
            <p className="text-xs md:text-sm text-[#137333] font-medium leading-relaxed">
              Verified Option: Check this to attach the cryptographically signed
              host audit ledger to this case. (Highly recommended to expedite
              triage response).
            </p>
          </div>

          {/* Footer Requester and Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F3F4F6]">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#C53030] shrink-0"></span>
              <span className="text-xs md:text-sm font-semibold text-[#111827]">
                Requester: alex.rivera@zoiko.com{" "}
                <span className="text-[#6B7280] font-normal">
                  (Auth-Synced)
                </span>
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button className="bg-white hover:bg-[#F9FAFB] text-[#111827] border border-[#D1D5DB] text-xs font-bold px-5 py-3 rounded-xl transition-colors">
                Save Draft
              </button>
              <button className="bg-[#C53030] hover:bg-[#B91C1C] text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm">
                Submit Verified Case
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

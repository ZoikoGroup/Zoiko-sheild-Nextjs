import React from "react";
import { Shield } from "lucide-react";

export default function EstablishClearOperationalUrgencyParameters() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            IMPACT ASSESSMENT FRAMEWORK
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Establish clear operational urgency parameters
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Describe how your business capability or compliance ledger is
            directly impacted. We triage severity by active scope rather than
            simple self-selected priorities.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form Inputs Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Affected Workflow */}
            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                AFFECTED WORKFLOW
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#9CA3AF] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                Select standard workflow block...
              </div>
            </div>

            {/* Affected Users / Endpoints */}
            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                AFFECTED USERS / ENDPOINTS
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#9CA3AF] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                e.g. 50+ Production Sensor Profiles
              </div>
            </div>

            {/* Suspected Data Loss or Degradation */}
            <div>
              <label className="block text-[11px] font-bold text-[#111827] mb-2 uppercase tracking-wider">
                SUSPECTED DATA LOSS OR DEGRADATION
              </label>
              <div className="bg-white border border-[#E5E7EB] rounded-xl px-4 py-3.5 text-sm text-[#374151] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                None detected. Telemetry is simply delayed / stale in UI.
              </div>
            </div>
          </div>

          {/* Right Candidate Card (bg #0A2440) */}
          <div className="lg:col-span-5 bg-[#0A2440] text-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col justify-between">
            <div>
              <p className="text-[#E07A5F] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                TRIAGE CANDIDACY IDENTIFIED
              </p>
              <h3 className="text-xl font-bold tracking-tight mb-4">
                Standard Support Candidate
              </h3>
              <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Based on your selection (Zero active compromise, telemetry stale
                but functional), this ticket qualifies as . No urgent escalation
                keys required at this moment.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-[#CBD5E1]">
              <Shield className="w-4 h-4 text-[#94A3B8] shrink-0" />
              <span>
                Eligible under standard business-hours SLA guidelines.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

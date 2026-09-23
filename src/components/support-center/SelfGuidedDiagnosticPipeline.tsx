import React from "react";
import { AlertTriangle } from "lucide-react";

export default function SelfGuidedDiagnosticPipeline() {
  return (
    <div className="bg-[#F6F4EE] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-10">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SAFE GUIDED REMEDIATION
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-2">
            Self-guided diagnostic pipeline
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Execute validated structural checks on directory postures and
            process traces before opening high-severity cases.
          </p>
        </div>

        {/* Main Card Wrapper */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-[#E5E7EB] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Symptom Selection */}
          <div className="lg:col-span-6 flex flex-col">
            <p className="text-[#C53030] text-xs font-mono font-bold uppercase tracking-wider mb-2">
              STEP 1: SYMPTOM SELECTION
            </p>
            <h2 className="text-lg font-bold text-[#111827] mb-6">
              Select the observed telemetry gap
            </h2>

            <div className="flex flex-col gap-4">
              {/* Option 1: Selected / Unhealthy */}
              <div className="bg-[#FDF2F2] border border-[#F4DCDD] rounded-2xl p-4 flex items-start gap-3 cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C53030] mt-1.5 shrink-0"></span>
                <p className="text-xs md:text-sm font-semibold text-[#111827]">
                  Active Directory sync state is passing, but local EDR sensor
                  registers &apos;Unhealthy&apos;
                </p>
              </div>

              {/* Option 2: Default */}
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex items-start gap-3 cursor-pointer hover:border-[#D1D5DB] transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB] mt-1.5 shrink-0"></span>
                <p className="text-xs md:text-sm text-[#4B5563]">
                  OAuth2 Client Credentials failing auth check during first
                  synchronization
                </p>
              </div>

              {/* Option 3: Consent required */}
              <div className="bg-[#F8F6F0] border border-[#E5E7EB] rounded-2xl p-4 flex items-start gap-3 cursor-pointer">
                <span className="w-2.5 h-2.5 rounded-full bg-[#137333] mt-1.5 shrink-0"></span>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  <strong className="text-[#111827]">Consent required:</strong>{" "}
                  Proceeding allows Zoiko to query localized EDR sensor
                  metadata. No host memory or personal identity data is read.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Diagnosis Box (bg #0A2440) */}
          <div className="lg:col-span-6 bg-[#0A2440] text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <p className="text-[#E07A5F] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                ZOIKO VERIFIED DIAGNOSIS
              </p>
              <h3 className="text-xl font-bold tracking-tight mb-4">
                EDR Control Breach Flag Detected
              </h3>
              <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed mb-6">
                Your directory has successfully authenticated Emma Wilson, but
                host serial{" "}
                <strong className="text-white font-mono">C02DG901Q05D</strong>{" "}
                has had no active sensor heartbeat for 48 hours. This indicates
                a posture drift mismatch.
              </p>

              {/* Risk & Remote Remediation Box */}
              <div className="bg-[#232B3A] border border-[#1E3A60] rounded-xl p-4 mb-6">
                <p className="text-[#E0967D] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  RISK &amp; REMOTE REMEDIATION
                </p>
                <p className="text-xs text-[#9FB8D6] leading-relaxed mb-3">
                  Trigger remote re-verification at the Okta identity boundary
                  to force MFA.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B45309]">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Requires supervisor dual-party approval.</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              <button className="bg-[#C53030] hover:bg-[#B91C1C] text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow-sm">
                Execute Safe Isolation
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs font-bold px-5 py-3 rounded-xl transition-colors">
                Escalate to Analyst
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

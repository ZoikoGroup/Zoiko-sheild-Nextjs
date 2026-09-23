import React from "react";

export default function SecureCryptographicRequestConfirmation() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            TICKET TRANSACTION COMPLETED
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Secure cryptographic request confirmation
          </h1>
          <p className="text-[#4B5563] text-base leading-relaxed">
            Your support request has been locked and assigned a verifiable
            registry placeholder.
          </p>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details Column */}
          <div className="lg:col-span-8 flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-[#111827] tracking-tight mb-4">
              Case Ref: ZSH-2026-8849
            </h2>
            <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed mb-6">
              Your case has successfully reached our central dispatch engine. A
              security architect is being assigned based on your active Premier
              Entitlement profile properties. Real-time timeline telemetry is
              available in your Support Dashboard.
            </p>
            <div>
              <span className="inline-block text-xs font-semibold text-[#137333]">
                SLA target response confirmed within 4 business hours.
              </span>
            </div>
          </div>

          {/* Right Evidentiary Hash Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-mono font-bold text-[#C53030] uppercase tracking-wider mb-2">
                EVIDENTIARY HASH SHA-256
              </p>
              <p className="text-xs font-mono text-[#374151] break-all leading-relaxed mb-6">
                7d3b2e5a401c4ec8c7cf12a78f3e0b5d92e54f186cde65..
              </p>
            </div>

            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333]">
                <span>Integrity Intact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

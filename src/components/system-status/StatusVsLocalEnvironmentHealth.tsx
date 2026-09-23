import React from "react";

export default function StatusVsLocalEnvironmentHealth() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Card Container */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          <h3 className="text-base font-bold text-[#111827] mb-2 tracking-tight">
            Status vs. Your Local Environment Health
          </h3>
          <p className="text-xs md:text-sm text-[#4B5563] mb-6 leading-relaxed">
            If our public status indicators show{" "}
            <span className="font-semibold text-[#137333]">Operational</span>
             but your system remains unable to authenticate or map
            telemetry, your organization may be experiencing a tenant-specific
            routing or integration token expiration. Please verify
            local KMS authority limits in your trust center before escalating a
            major event.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs">
            <button className="bg-[#F0EDE6] hover:bg-[#E5E7EB] text-[#111827] font-bold px-4 py-2.5 rounded-lg border border-[#E5E7EB] transition-colors shadow-sm">
              Check Authenticated Trust Center
            </button>
            <p className="text-[#6B7280]">
              Or, reach our help desk:{" "}
              <a
                href="#support"
                className="font-bold text-[#C53030] hover:text-[#B91C1C] transition-colors"
              >
                Open Support Case
              </a>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

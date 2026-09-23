import React from "react";

export default function PostIncidentReviews() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            Post-Incident Reviews (PIR)
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base">
            Transparent analysis of past disruptions, root causes, and
            prevention plans.
          </p>
        </div>

        {/* PIR Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]">
          {/* Top Row: Title & Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-lg md:text-xl font-bold text-[#111827] tracking-tight">
              PIR-2026-02: CrowdStrike Sensor Telemetry Mapping Failure
            </h2>
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333]">
                PUBLISHED
              </span>
            </div>
          </div>

          {/* Details Content */}
          <div className="space-y-3 mb-8 text-xs md:text-sm">
            <p className="text-[#4B5563]">
              <strong className="text-[#111827] font-semibold">
                Root Cause:
              </strong>{" "}
              A malformed JSON payload returned by an upstream telemetry edge
              endpoint led to parsing state exceptions in our ingestion buffer.
            </p>
            <p className="text-[#4B5563]">
              <strong className="text-[#111827] font-semibold">
                Corrective Action:
              </strong>{" "}
              Strict schema validations have been added to the telemetry worker
              boundary. Ingestion rate-limit rules have been sandboxed.
            </p>
          </div>

          {/* Footer Metadata & Link */}
          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <p className="text-[#6B7280]">
              Published: Jan 20, 2026 • SHA-256 Verified
            </p>
            <a
              href="#read"
              className="font-bold text-[#C53030] hover:text-[#B91C1C] transition-colors whitespace-nowrap"
            >
              Read Complete PIR Document
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

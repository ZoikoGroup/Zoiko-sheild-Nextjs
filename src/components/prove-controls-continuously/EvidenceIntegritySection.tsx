import React from "react";
import SectionEyebrow from "./SectionEyebrow";

export default function EvidenceIntegritySection() {
  return (
    <section className="w-full bg-[#F7F5F0] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="EVIDENCE INTEGRITY" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Unmatched evidence provenance & freshness
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Every evidence object preserves stable identifier records, cryptographic reference hashes, and explicit freshness windows.
          </p>
        </div>

        {/* Evidence Viewer Card */}
        <div className="flex flex-col gap-6 rounded-[16px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm sm:p-8">
          {/* Top Identifier Row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[rgba(18,59,76,0.08)] pb-5">
            <span className="font-jetbrains text-[14px] font-bold text-[#C44242]">
              EVID-9082-CROWDSTRIKE-HEALTH
            </span>
            <div>
              <span className="inline-flex items-center rounded-full bg-[#E4F0EC] px-3 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] text-[#1F7A6C]">
                Fresh (Next Sync in 2h)
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="font-manrope text-[13px] text-[#5B6670]">
                COLLECTOR AGENT
              </span>
              <span className="font-manrope text-[15px] font-bold text-[#0A2029]">
                Zoiko Telemetry Connector v1.2
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-manrope text-[13px] text-[#5B6670]">
                CRYPTOGRAPHIC HASH
              </span>
              <span className="font-jetbrains text-[13px] text-[#5B6670] break-all">
                SHA256: 8f3c7e0b232a901f...77d8a
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

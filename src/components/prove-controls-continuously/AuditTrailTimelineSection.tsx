import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface TimelineEvent {
  time: string;
  title: string;
  detail: string;
}

const events: TimelineEvent[] = [
  {
    time: "10:32 AM",
    title: "Control Owner Transferred",
    detail: "IA-3.2 accountability assigned from GRC Admin to Marcus R. (Platform Team)",
  },
  {
    time: "11:15 AM",
    title: "Automated Evidence Synced",
    detail: "API collector validated 8,900 Active Intune profiles with signed hash (EVID-4402)",
  },
  {
    time: "04:30 PM",
    title: "Risk Waiver Approved",
    detail: "Compensating security posture approved for Sandbox legacy server subnet by CISO",
  },
];

export default function AuditTrailTimelineSection() {
  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="AUDIT TRAIL" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Chronological, as-of historical reconstruction
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Choose any past date to reconstruct control configuration state, effective evidence files, active waivers, and ownership mapping exactly.
          </p>
        </div>

        {/* Timeline Container Card */}
        <div className="flex flex-col gap-6 rounded-[16px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm sm:p-8">
          {/* Top Time Travel Selector */}
          <div className="flex flex-wrap items-center gap-4 border-b border-[rgba(18,59,76,0.08)] pb-4">
            <span className="font-jetbrains text-[14px] font-bold text-[#C44242]">
              TIME TRAVEL SELECTOR
            </span>
            <span className="hidden sm:inline-block h-4 w-[1px] bg-[rgba(18,59,76,0.1)]" />
            <span className="font-manrope text-[14px] font-semibold text-[#0A2029]">
              Viewing State As-Of: October 14, 2025
            </span>
          </div>

          {/* Timeline Events List */}
          <div className="flex flex-col gap-5">
            {events.map((evt, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 rounded-[8px] p-3 transition-colors hover:bg-[#F7F5F0]/60 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="w-[100px] shrink-0">
                  <span className="font-jetbrains text-[13px] font-medium text-[#C44242]">
                    {evt.time}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="font-hanken text-[15px] font-extrabold text-[#0A2029]">
                    {evt.title}
                  </h4>
                  <p className="font-manrope text-[13px] text-[#5B6670]">
                    {evt.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

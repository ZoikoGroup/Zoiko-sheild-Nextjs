import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface IntegrationItem {
  title: string;
  telemetry: string;
  pill: string;
  pillColor: string;
  pillBg: string;
}

const integrations: IntegrationItem[] = [
  {
    title: "Okta (Identity & Directory)",
    telemetry: "Telemetry synced 2m ago",
    pill: "Healthy Integration",
    pillColor: "text-[#1F7A6C]",
    pillBg: "bg-[#E4F0EC]",
  },
  {
    title: "CrowdStrike Falcon (Endpoint)",
    telemetry: "Fallback active, logs queued",
    pill: "Rate Limited (Auto-Retry)",
    pillColor: "text-[#B45309]",
    pillBg: "bg-[#FEF3C7]",
  },
  {
    title: "Microsoft Intune (MDM)",
    telemetry: "Critical gap in posture",
    pill: "Auth Expired (Requires Consent)",
    pillColor: "text-[#C44242]",
    pillBg: "bg-[#FBEFEF]",
  },
];

export default function IntegrationsHealthSection() {
  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="Ecosystem Context" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Source categories & live integration health
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            We connect directly with your source systems of authority. View real-time collector performance, permission status, and Rate-Limit metrics.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between gap-4 rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-hanken text-[18px] font-extrabold text-[#0A2029]">
                  {item.title}
                </h3>
                <p className="font-manrope text-[14px] text-[#5B6670]">
                  {item.telemetry}
                </p>
              </div>

              <div>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] ${item.pillBg} ${item.pillColor}`}
                >
                  {item.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

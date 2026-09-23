import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface PostureMetric {
  label: string;
  count: string;
  pillText: string;
  pillTextColor: string;
  pillBgColor: string;
}

const metrics: PostureMetric[] = [
  {
    label: "Effective Controls",
    count: "142",
    pillText: "Verified Daily",
    pillTextColor: "text-[#1F7A6C]",
    pillBgColor: "bg-[#E4F0EC]",
  },
  {
    label: "At Risk / Stale",
    count: "18",
    pillText: "Verified Daily",
    pillTextColor: "text-[#4E668A]",
    pillBgColor: "bg-[#DDEAF9]",
  },
  {
    label: "Failed / Needs Action",
    count: "4",
    pillText: "Verified Daily",
    pillTextColor: "text-[#C44242]",
    pillBgColor: "bg-[#FBEFEF]",
  },
  {
    label: "Pending Manual Review",
    count: "12",
    pillText: "Verified Daily",
    pillTextColor: "text-[#B45309]",
    pillBgColor: "bg-[#FEF3C7]",
  },
];

export default function LivePostureSnapshotSection() {
  return (
    <section className="w-full bg-[#F0EDE6] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="LIVE ASSURANCE POSTURE" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Credible product-proof assurance snapshot
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            Real-time telemetry distribution. Zoiko Shield rejects artificial 100% compliance claims, surfacing unmitigated risks honestly.
          </p>
        </div>

        {/* Dashboard Simulator Card */}
        <div className="rounded-[16px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-3 rounded-[8px] bg-[#F7F5F0] p-5"
              >
                <span className="font-jetbrains text-[13px] text-[#5B6670]">
                  {metric.label}
                </span>
                <span className="font-hanken text-[36px] font-extrabold text-[#0A2029]">
                  {metric.count}
                </span>
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] ${metric.pillBgColor} ${metric.pillTextColor}`}
                  >
                    {metric.pillText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

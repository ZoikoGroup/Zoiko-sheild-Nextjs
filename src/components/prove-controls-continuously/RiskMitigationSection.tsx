import React from "react";
import SectionEyebrow from "./SectionEyebrow";

interface ExceptionCard {
  title: string;
  risk: string;
  compensating: string;
  pill: string;
}

const exceptionCards: ExceptionCard[] = [
  {
    title: "Legacy Server Exclusion",
    risk: "Risk: No local EDR compatibility",
    compensating: "Compensating Control: Isolated subnet + strict ingress ACLs",
    pill: "Expiring in 14 days",
  },
  {
    title: "Internal Dev Sandbox Waiver",
    risk: "Risk: Unmanaged testing VMs active",
    compensating: "Compensating Control: No persistent data + daily instance wipes",
    pill: "Active / Approved",
  },
  {
    title: "Advisory Temp Exception",
    risk: "Risk: Pending IdP domain validation",
    compensating: "Compensating Control: Manual audit check daily",
    pill: "Review in progress",
  },
];

export default function RiskMitigationSection() {
  return (
    <section className="w-full bg-[#F7F5F0] px-6 py-20 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start gap-4">
          <SectionEyebrow text="RISK MITIGATION" />
          <h2 className="font-hanken text-[28px] font-extrabold tracking-[-0.0222em] text-[#0A2029] sm:text-[36px]">
            Explicit exception tracking & compensating controls
          </h2>
          <p className="max-w-3xl font-manrope text-[16px] font-medium leading-[1.5em] text-[#5B6670]">
            We never hide underlying failed states. Active risk waivers remain visible directly over their parent controls with explicit expiration tracking.
          </p>
        </div>

        {/* 3 Exception Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {exceptionCards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[12px] border border-[rgba(18,59,76,0.1)] bg-white p-6 shadow-sm transition-all hover:shadow-md min-h-[200px]"
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="font-hanken text-[20px] font-extrabold text-[#0A2029]">
                  {card.title}
                </h3>
                <p className="font-manrope text-[14px] font-medium text-[#C44242]">
                  {card.risk}
                </p>
                <p className="font-manrope text-[13px] text-[#5B6670]">
                  {card.compensating}
                </p>
              </div>

              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-[#FEF3C7] px-3 py-1 font-jetbrains text-[11px] font-bold tracking-[0.0455em] text-[#B45309]">
                  {card.pill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

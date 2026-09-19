"use client";

import React from "react";

function CpuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden>
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  );
}

export default function AiSection() {
  return (
    <div className="bg-[#0a2440] flex flex-col gap-4 lg:gap-5 items-start p-5 lg:p-[24px] rounded-[12px] w-full">
      <div className="flex gap-3 items-center w-full">
        <CpuIcon />
        <p className="font-hanken font-extrabold text-white text-[20px] leading-[28px] lg:text-[20px] lg:leading-normal m-0">
          AI &amp; Automated Processing Controls
        </p>
      </div>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#9fb8d6] m-0">
        Authoritative transparency registry for all automated model
        operations inside the Zoiko Shield platform:
      </p>
      <div className="flex flex-col gap-3 items-start w-full">
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 items-start w-full">
          <p className="font-jetbrains font-bold text-[#9fb8d6] text-[12px] lg:w-[180px] shrink-0 m-0">
            FEATURE / ENGINE:
          </p>
          <p className="font-manrope font-normal text-white text-[13px] m-0">
            [AI_REGISTRY_FEATURE_NAME]
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 items-start w-full">
          <p className="font-jetbrains font-bold text-[#9fb8d6] text-[12px] lg:w-[180px] shrink-0 m-0">
            TRAINING POLICY:
          </p>
          <p className="font-manrope font-normal text-white text-[13px] m-0">
            Zoiko Shield does NOT use client personal data or threat
            telemetry to train generalized models.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 items-start w-full">
          <p className="font-jetbrains font-bold text-[#9fb8d6] text-[12px] lg:w-[180px] shrink-0 m-0">
            HUMAN REVIEW RULE:
          </p>
          <p className="font-manrope font-normal text-white text-[13px] m-0">
            Every remediation or containment action triggered by the
            policy model requires human sign-off prior to execution.
          </p>
        </div>
      </div>
    </div>
  );
}

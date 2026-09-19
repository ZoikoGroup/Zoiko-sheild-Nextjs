"use client";

import React from "react";

export default function TelemetrySection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        Security &amp; Product Telemetry Guardrails
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        Zoiko Shield handles host and sensor logs to establish continuous
        defense verification. To avoid standard surveillance or invasive
        monitoring, we operate under explicit security guidelines:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 w-full">
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[8px]">
          <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">Strict Minimization</p>
          <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
            We process only the absolute minimum identifiers needed to
            correlate host identity and alert status. Zero raw file
            contents are scraped.
          </p>
        </div>
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[8px]">
          <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">Need-to-Know Access</p>
          <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
            Telemetry logs are isolated. Only certified security analysts
            with multi-factor, role-bound permissions can inspect
            correlated profiles.
          </p>
        </div>
      </div>
    </div>
  );
}

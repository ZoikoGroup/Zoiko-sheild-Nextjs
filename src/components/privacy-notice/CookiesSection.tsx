"use client";

import React from "react";

function Toggle({ on }: { on: boolean }) {
  return (
    <div className={`h-[10px] w-5 rounded-full flex items-center px-[1px] shrink-0 ${on ? "bg-[#1f7a6c] justify-end" : "bg-[rgba(18,59,76,0.15)] justify-start"}`}>
      <div className="size-2 rounded-full bg-white" />
    </div>
  );
}

export default function CookiesSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        Cookies &amp; Online Tracking Controls
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        We use essential, preference, and analytical cookies on our
        marketing properties. You can fully customize your tracking
        consent at any time:
      </p>

      {/* Desktop pills */}
      <div className="hidden lg:flex gap-3 items-start w-full">
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-start px-4 py-2 rounded-[6px]">
          <p className="font-manrope font-semibold text-[#1f7a6c] text-[13px] m-0 whitespace-nowrap">
            Essential: Always On
          </p>
        </div>
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-start px-4 py-2 rounded-[6px]">
          <p className="font-manrope font-semibold text-[#5b6670] text-[13px] m-0 whitespace-nowrap">
            Analytical: Configurable
          </p>
        </div>
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-start px-4 py-2 rounded-[6px]">
          <p className="font-manrope font-semibold text-[#5b6670] text-[13px] m-0 whitespace-nowrap">
            Marketing: Configurable
          </p>
        </div>
      </div>

      {/* Mobile rows with toggles */}
      <div className="lg:hidden flex flex-col gap-2 w-full">
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-center justify-between px-3 py-3 rounded-[6px] w-full">
          <p className="font-manrope font-semibold text-[#1f7a6c] text-[13px] m-0">Essential: Always On</p>
          <Toggle on={true} />
        </div>
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-center justify-between px-3 py-3 rounded-[6px] w-full">
          <p className="font-manrope font-semibold text-[#5b6670] text-[13px] m-0">Analytical: Configurable</p>
          <Toggle on={false} />
        </div>
      </div>
    </div>
  );
}

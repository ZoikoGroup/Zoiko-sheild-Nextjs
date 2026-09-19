"use client";

import React from "react";

export default function SharingSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <div className="flex flex-col gap-1 lg:gap-2 items-start w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
          Sharing &amp; Active Subprocessor Registry
        </p>
        <p className="font-manrope font-normal text-[#5b6670] text-[13.5px] lg:text-[14.5px] m-0">
          We share data with verified third-party partners and
          infrastructure subprocessors under strict legal agreements:
        </p>
      </div>

      <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-4 rounded-[8px] w-full">
        <div className="flex items-center justify-between w-full">
          <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">
            Active Infrastructure Subprocessors
          </p>
          <div className="bg-[rgba(31,122,108,0.1)] flex items-start px-2 py-[2px] rounded-full shrink-0">
            <p className="font-jetbrains font-bold text-[#1f7a6c] text-[10px] m-0 whitespace-nowrap">
              <span className="lg:hidden">LIVE SYNC</span>
              <span className="hidden lg:inline">REGISTRY SYNCED</span>
            </p>
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden lg:flex border border-[rgba(18,59,76,0.1)] flex-col items-start overflow-hidden rounded-[6px] w-full">
          <div className="bg-[#f0ede6] flex items-start p-2 w-full font-jetbrains font-bold text-[#0a2029] text-[11px]">
            <p className="w-[180px] m-0">ENTITY NAME</p>
            <p className="w-[180px] m-0">SERVICE PERFORMED</p>
            <p className="flex-1 m-0">DATACENTER REGION</p>
          </div>
          <div className="flex items-start p-2 w-full text-[12px]">
            <p className="font-manrope font-semibold text-[#0a2029] w-[180px] m-0">Amazon Web Services</p>
            <p className="font-manrope font-normal text-[#5b6670] w-[180px] m-0">Primary Cloud Host</p>
            <p className="flex-1 font-manrope font-normal text-[#5b6670] m-0">
              US-East / EU-Central (Region Locked)
            </p>
          </div>
        </div>

        {/* Mobile status line */}
        <p className="lg:hidden font-manrope font-normal text-[#5b6670] text-[12px] m-0">
          SUBPROCESSOR STATUS: [LEGAL_REGISTRY]
        </p>

        <p className="font-manrope font-normal text-[#5b6670] text-[12px] leading-[18px] lg:leading-normal m-0">
          <span className="lg:hidden">
            To subscribe to change notifications for our subprocessors
            list, please submit your email to the registry.
          </span>
          <span className="hidden lg:inline">
            To subscribe to change notifications for our subprocessors
            list, please submit your email to [LEGAL_REGISTRY].
          </span>
        </p>
      </div>
    </div>
  );
}

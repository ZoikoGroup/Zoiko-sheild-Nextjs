"use client";

import React from "react";

function ArchiveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a2029" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden>
      <rect x="2" y="4" width="20" height="5" rx="1" />
      <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
      <path d="M10 13h4" />
    </svg>
  );
}

export default function UpdatesSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        Notice Updates &amp; Prior Archive
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        We update this notice as our operations or regulatory landscapes
        shift. When material changes are made, we will notify
        administrators directly through the active platform dashboard:
      </p>
      <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col lg:flex-row gap-3 lg:gap-0 items-start lg:items-center lg:justify-between p-4 rounded-[8px] w-full">
        <div className="flex gap-2 items-center">
          <ArchiveIcon />
          <p className="font-manrope font-semibold text-[#0a2029] text-[14px] m-0 whitespace-nowrap">
            Immutable Version History Archive
          </p>
        </div>
        <div className="bg-[#f0ede6] flex items-start px-3 py-[6px] rounded-[6px]">
          <p className="font-manrope font-bold text-[#0a2029] text-[12px] m-0 whitespace-nowrap">
            Access Prior Versions
          </p>
        </div>
      </div>
    </div>
  );
}

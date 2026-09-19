"use client";

import React from "react";

function AlertTriangleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0" aria-hidden>
      <path d="M8 1.5L15 14.5H1L8 1.5Z" stroke="#a43737" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8 6V9.5" stroke="#a43737" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="11.6" r="0.8" fill="#a43737" />
    </svg>
  );
}

export default function JurisdictionSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
      <div className="flex gap-2 items-center w-full">
        <div className="bg-[#c44242] h-[2px] w-4 lg:w-6 shrink-0" />
        <p className="font-jetbrains font-bold text-[#c44242] text-[12px] tracking-[1.2px] lg:tracking-[1.5px] uppercase m-0">
          07. JURISDICTION &amp; STATUTORY NOTICES
        </p>
      </div>
      <p className="font-sans font-normal leading-[22px] lg:leading-[1.6] text-[14px] lg:text-[15px] text-[#5b6670] m-0 w-full">
        These legal notices are governed by the statutory framework of our
        primary operating jurisdiction. Individual regional constraints
        apply only when mandated by local administrative guidelines.
      </p>

      <div className="bg-[#fdf5f5] border border-[#f1d4d4] flex gap-3 lg:gap-4 items-start p-[14px] lg:p-4 rounded-[8px] w-full">
        <AlertTriangleIcon />
        <div className="flex flex-col gap-1 items-start text-[#a43737] flex-1">
          <p className="font-sans font-bold text-[13px] lg:text-[14px] m-0">
            Statutory Language Lock
          </p>
          <p className="font-sans font-normal leading-[18px] lg:leading-[1.5] text-[12px] lg:text-[13px] m-0">
            To prevent regional compliance ambiguity, exact jurisdictional
            designations and specific state statutory warnings are
            suppressed pending formal local registry verification.
          </p>
        </div>
      </div>
    </div>
  );
}

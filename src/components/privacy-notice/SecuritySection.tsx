"use client";

import React from "react";

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
      <rect x="2.5" y="6.5" width="9" height="6" rx="1" stroke="#1f7a6c" strokeWidth="1.2" />
      <path d="M4.5 6.5V4.5a2.5 2.5 0 0 1 5 0v2" stroke="#1f7a6c" strokeWidth="1.2" />
    </svg>
  );
}
function ShieldAlertIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
      <path d="M7 1L12 3v3.5C12 10 9.5 12 7 12.5C4.5 12 2 10 2 6.5V3L7 1Z" stroke="#1f7a6c" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M7 5v2.5" stroke="#1f7a6c" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="9.2" r="0.6" fill="#1f7a6c" />
    </svg>
  );
}

export default function SecuritySection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        Our Security Standards
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        We implement comprehensive technical and organizational
        safeguards to protect personal data. Because absolute guarantees
        do not exist, we focus on continuous verification:
      </p>
      <div className="flex flex-col gap-3 items-start w-full">
        <div className="flex gap-3 items-start w-full">
          <div className="pt-[2px]"><LockIcon /></div>
          <p className="flex-1 font-manrope font-normal text-[#0a2029] text-[13.5px] lg:text-[14px] m-0">
            All data is encrypted in transit using TLS 1.3 and at rest
            using AES-256.
          </p>
        </div>
        <div className="flex gap-3 items-start w-full">
          <div className="pt-[2px]"><ShieldAlertIcon /></div>
          <p className="flex-1 font-manrope font-normal text-[#0a2029] text-[13.5px] lg:text-[14px] m-0">
            Access to active database environments is strictly controlled
            under Zero Trust guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}

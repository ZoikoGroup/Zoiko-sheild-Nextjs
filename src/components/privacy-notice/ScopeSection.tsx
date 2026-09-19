"use client";

import React from "react";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0" aria-hidden>
      <path d="M2.5 7.2L5.5 10.2L11.5 3.8" stroke="#0a2029" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ScopeSection() {
  return (
    <div className="bg-[#f0ede6] flex flex-col gap-4 lg:gap-5 items-start p-5 lg:p-[24px] rounded-[12px] w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[20px] lg:leading-normal m-0">
        Scope &amp; Who This Notice Covers
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        This Privacy Notice describes how Zoiko Shield processes personal
        data in our capacity as a data controller. This scope encompasses:
      </p>

      <div className="flex flex-col gap-3 items-start w-full">
        <div className="flex gap-3 items-start w-full">
          <div className="pt-[2px]"><CheckIcon /></div>
          <p className="flex-1 font-manrope font-normal text-[#0a2029] text-[13.5px] lg:text-[14px] m-0">
            Visitors to our marketing portals, resource landing sites, and
            event channels.
          </p>
        </div>
        <div className="flex gap-3 items-start w-full">
          <div className="pt-[2px]"><CheckIcon /></div>
          <p className="flex-1 font-manrope font-normal text-[#0a2029] text-[13.5px] lg:text-[14px] m-0">
            <span className="lg:hidden">
              Identity data used for account creation, platform
              authentication, billing, and configuration.
            </span>
            <span className="hidden lg:inline">
              Identity data used for account creation, platform
              authentication, billing, and direct configuration.
            </span>
          </p>
        </div>
        <div className="flex gap-3 items-start w-full">
          <div className="pt-[2px]"><CheckIcon /></div>
          <p className="flex-1 font-manrope font-normal text-[#0a2029] text-[13.5px] lg:text-[14px] m-0">
            <span className="lg:hidden">
              Recruitment candidates, B2B business development, and
              partner relationships.
            </span>
            <span className="hidden lg:inline">
              Recruitment candidates, B2B business development paths, and
              partner organization relationships.
            </span>
          </p>
        </div>
      </div>

      <p className="font-manrope font-normal text-[#5b6670] text-[12.5px] lg:text-[13px] leading-[18px] lg:leading-normal m-0">
        Excluded from this Scope: Enterprise data payloads processed on
        behalf of clients. Such data is managed exclusively under client
        instructions as a data processor.
      </p>
    </div>
  );
}

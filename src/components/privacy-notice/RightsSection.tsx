"use client";

import React from "react";

function UserCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c44242" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M16 11l2 2 4-4" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M2 3.5L5 6.5L8 3.5" stroke="#5b6670" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Select({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-[6px] items-start w-full">
      <p className="font-manrope font-semibold text-[#0a2029] text-[12px] m-0">{label}</p>
      <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-center justify-between px-3 py-2 rounded-[6px] w-full">
        <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">{placeholder}</p>
        <ChevronDownIcon />
      </div>
    </div>
  );
}

export default function RightsSection() {
  return (
    <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-5 lg:gap-6 items-start p-5 lg:p-[24px] rounded-[12px] w-full">
      <div className="flex gap-3 items-center w-full">
        <UserCheckIcon />
        <p className="flex-1 font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
          Your Privacy Rights Desk
        </p>
      </div>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        Depending on your location, you may have the right to access,
        correct, delete, or restrict processing of your personal data.
        Use our direct request portal below to initiate verification:
      </p>

      <div className="bg-[#f0ede6] flex flex-col gap-4 items-start p-4 lg:p-[20px] rounded-[8px] w-full">
        <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] lg:text-[16px] m-0">
          Submit a Data Rights Request
        </p>

        {/* Desktop: 4 select fields */}
        <div className="hidden lg:grid grid-cols-2 gap-3 w-full">
          <Select label="Your Relationship with Zoiko" placeholder="Select status..." />
          <Select label="Right you wish to execute" placeholder="Select right..." />
          <div className="flex flex-col gap-[6px] items-start w-full">
            <p className="font-manrope font-semibold text-[#0a2029] text-[12px] m-0">Email Address</p>
            <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-start px-3 py-2 rounded-[6px] w-full">
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">jane.doe@company.com</p>
            </div>
          </div>
          <Select label="Jurisdiction" placeholder="Select state or region..." />
        </div>

        {/* Mobile: name + email inputs */}
        <div className="lg:hidden flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-[6px] items-start w-full">
            <p className="font-manrope font-semibold text-[#0a2029] text-[12px] m-0">FULL LEGAL NAME</p>
            <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-start px-3 py-[10px] rounded-[6px] w-full">
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">Enter name...</p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] items-start w-full">
            <p className="font-manrope font-semibold text-[#0a2029] text-[12px] m-0">BUSINESS EMAIL</p>
            <div className="bg-white border border-[rgba(18,59,76,0.1)] flex items-start px-3 py-[10px] rounded-[6px] w-full">
              <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">Enter email...</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:justify-between pt-2 w-full">
          <p className="font-manrope font-normal text-[#5b6670] text-[11px] lg:max-w-[400px] m-0">
            * We will perform proportionate verification checks to
            validate identity before processing any rights requests.
          </p>
          <button className="w-full lg:w-auto flex items-center justify-center bg-[#c44242] px-5 py-[10px] rounded-[6px] shrink-0">
            <span className="font-manrope font-bold text-white text-[13px] whitespace-nowrap">
              Submit Request
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

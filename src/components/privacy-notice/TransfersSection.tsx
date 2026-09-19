"use client";

import React from "react";

export default function TransfersSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        <span className="lg:hidden">International Transfers &amp; Residency</span>
        <span className="hidden lg:inline">International Transfers &amp; Data Residency</span>
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        When personal data is transferred outside the European Economic
        Area (EEA), United Kingdom, or Switzerland, we utilize recognized
        regulatory transfer mechanisms to ensure identical protection
        metrics:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 w-full">
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[8px]">
          <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">
            Standard Contractual Clauses
          </p>
          <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
            Every transfer to non-adequate third countries is bound
            strictly by the European Commission&apos;s approved SCCs and
            UK Addendum.
          </p>
        </div>
        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-2 items-start p-4 rounded-[8px]">
          <p className="font-hanken font-extrabold text-[#0a2029] text-[15px] m-0">
            Data Privacy Framework (DPF)
          </p>
          <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
            Zoiko Shield complies with the EU-U.S. Data Privacy Framework,
            the UK Extension, and the Swiss-U.S. DPF as certified.
          </p>
        </div>
      </div>
    </div>
  );
}

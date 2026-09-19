"use client";

import React from "react";

export default function UsStatesSection() {
  return (
    <div className="flex flex-col gap-4 lg:gap-5 items-start w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[22px] lg:leading-normal m-0">
        US State Privacy Addendum
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        For residents of California, Virginia, Colorado, Connecticut,
        Utah, and other US states with active privacy laws: Zoiko Shield
        does not &ldquo;sell&rdquo; or &ldquo;share&rdquo; personal data
        for targeted advertising as defined under state regulations.
      </p>
      <div className="bg-[#f0ede6] flex items-start p-4 rounded-[8px] w-full">
        <p className="font-manrope font-normal text-[#0a2029] text-[13px] leading-[19px] m-0">
          Our websites are configured to detect and honor GPC signals. If
          your browser broadcasts a GPC signal, we automatically disable
          non-essential tracking cookies.
        </p>
      </div>
    </div>
  );
}

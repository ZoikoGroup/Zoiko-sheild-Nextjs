"use client";

import React from "react";

export default function ChildrenSection() {
  return (
    <div className="border border-[rgba(18,59,76,0.1)] flex flex-col gap-4 lg:gap-5 items-start p-4 lg:p-[20px] rounded-[8px] w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[18px] lg:leading-normal m-0">
        Children &amp; Age Restrictions
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14px] text-[#5b6670] m-0">
        Zoiko Shield is designed solely for corporate enterprise
        operations and professionals. We do not knowingly collect or
        target personal data from individuals under the age of{" "}
        <span className="lg:hidden">18</span>
        <span className="hidden lg:inline">[AGE_REGISTRY]</span>. If we
        become aware of accidental collection, we will execute immediate
        erasure.
      </p>
    </div>
  );
}

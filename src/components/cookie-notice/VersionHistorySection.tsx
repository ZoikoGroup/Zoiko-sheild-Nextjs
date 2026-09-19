"use client";

import React from "react";

export default function VersionHistorySection() {
  return (
    <section className="hidden lg:block bg-[#f0ede6] w-full">
      <div className="flex flex-col gap-8 mx-auto max-w-[1440px] px-[108px] py-[60px]">
        <div className="flex flex-col gap-3 items-start">
          <h2 className="font-sans font-extrabold text-[28px] text-[#0a2029] m-0">
            Notice Version Archive &amp; Reprompt Rules
          </h2>
          <p className="font-sans font-normal text-[14px] text-[#5b6670] m-0">
            Historical audit trail of material changes to our notice
            framework.
          </p>
        </div>

        <div className="bg-white border border-[rgba(18,59,76,0.1)] flex flex-col gap-3 items-start p-5 rounded-[8px] w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-sans font-extrabold text-[#0a2029] text-[16px] m-0">
              v2.4 - Current Active Notice
            </p>
            <p className="font-sans font-normal text-[#5b6670] text-[13px] m-0">
              Published: Jan 13, 2026
            </p>
          </div>
          <p className="font-sans font-normal text-[#5b6670] text-[13.5px] leading-[20px] m-0 w-full">
            Updated functional classification framework to separate live
            support chat metrics from general interface memory
            configurations. Real-time consent gate verified with zero
            pre-selection on optional elements.
          </p>
        </div>
      </div>
    </section>
  );
}

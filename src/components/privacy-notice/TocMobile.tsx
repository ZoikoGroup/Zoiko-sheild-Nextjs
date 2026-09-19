"use client";

import React from "react";

const previewItems = [
  "Scope & Applicability",
  "Our Privacy Roles",
  "Personal Data Inventory",
  "Why We Process Data",
];

export default function TocMobile() {
  return (
    <section className="lg:hidden bg-[#f7f5f0] w-full">
      <div className="mx-auto max-w-[1440px] px-4 py-6">
        <details className="bg-white border border-[rgba(18,59,76,0.1)] rounded-[12px] p-4 w-full">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <span className="font-hanken font-extrabold text-[#0a2029] text-[14px]">
              ON THIS PAGE
            </span>
            <span className="bg-[#f0ede6] flex items-start px-[10px] py-1 rounded-full">
              <span className="font-jetbrains font-bold text-[#5b6670] text-[10px]">
                TAP TO EXPAND
              </span>
            </span>
          </summary>
          <div className="flex flex-col gap-3 items-start mt-4 w-full">
            <div className="flex gap-2 items-center">
              <div className="bg-[#c44242] w-[3px] h-3 shrink-0" />
              <p className="font-manrope font-bold text-[#c44242] text-[13px] m-0">
                At-a-Glance Summary
              </p>
            </div>
            {previewItems.map((item) => (
              <p key={item} className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">
                • {item}
              </p>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

"use client";

import React from "react";

const blocks = [
  { label: "OFFICE OF THE DPO", desc: "Zoiko Tech Inc. Attn: Data Protection Officer [DPO_REGISTRY_CONTACT_PLACEHOLDER]" },
  { label: "EU REPRESENTATIVE", desc: "Zoiko Tech Europe Ltd. Attn: EU Legal Representative [DPO_REGISTRY_CONTACT_PLACEHOLDER]" },
  { label: "UK REPRESENTATIVE", desc: "Zoiko Tech UK Ltd. Attn: UK Legal Representative [DPO_REGISTRY_CONTACT_PLACEHOLDER]" },
];

export default function DpoSection() {
  return (
    <div className="bg-[#f0ede6] flex flex-col gap-4 lg:gap-5 items-start p-5 lg:p-[24px] rounded-[12px] w-full">
      <p className="font-hanken font-extrabold text-[#0a2029] text-[20px] leading-[28px] lg:text-[20px] lg:leading-normal m-0">
        Formal Representative &amp; DPO Inquiries
      </p>
      <p className="font-manrope font-normal leading-[20px] lg:leading-[1.5] text-[13.5px] lg:text-[14.5px] text-[#5b6670] m-0">
        If you have unresolved privacy questions, concerns, or wish to
        reach our designated Data Protection Officer (DPO) or regional
        representatives:
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {blocks.map((b) => (
          <div key={b.label} className="flex flex-col gap-[6px] items-start w-full">
            <p className="font-jetbrains font-bold text-[#c44242] text-[11px] m-0">{b.label}</p>
            <p className="font-manrope font-normal text-[#5b6670] text-[13px] m-0">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

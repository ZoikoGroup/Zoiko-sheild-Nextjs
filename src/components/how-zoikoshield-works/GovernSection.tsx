import React from "react";
import Image from "next/image";

export function GovernSection() {
  return (
    <section className="w-full py-[68px] lg:py-[88px] relative bg-[#0A2029]">
      {/* Background Image Absolute */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image src="/images/how-zoikoshield-works/govern.png" alt="Govern Background" fill className="object-cover" />
      </div>

      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-0 items-start relative z-10">
        
        {/* Top Text Area */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[22px] lg:gap-[80px] w-full items-start">
          {/* Left Top: Heading */}
          <div className="flex flex-col gap-[22px] lg:gap-[18px]">
            <div className="flex items-center gap-[10px] lg:gap-[12px]">
              <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
              <p className="font-jetbrains font-medium text-[11px] text-[#e0967d] uppercase leading-[normal] mb-0">
                05 — Govern
              </p>
            </div>
            <h2 className="font-hanken font-[800] leading-[1.08] text-[28px] lg:text-[40px] text-white m-0 max-w-full lg:max-w-[500px]">
              Decision rights remain human-accountable.
            </h2>
          </div>

          {/* Right Top: Description & Alert Box */}
          <div className="flex flex-col gap-[18px]">
            <p className="font-manrope font-[500] text-[16px] leading-[1.55] mb-0 text-white/70">
              Review, approval, attestation and rollback boundaries are applied before action. Every decision names its authority, accountable reviewer and permitted scope.
            </p>
            
            <div className="hidden lg:block bg-[#c44242]/10 border border-[#c44242] rounded-[10px] p-[16px] w-fit">
              <span className="font-hanken font-[800] text-white text-[16px]">
                AI remains bounded, cited and overridable.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[22px] lg:gap-[28px] w-full items-start lg:mt-[40px]">
          
          {/* Left Bottom: Decision Rights Levels */}
          <div className="bg-[#123b4c] lg:bg-white/5 border border-white/12 lg:border-white/10 p-[20px] lg:p-[24px] rounded-[14px] lg:rounded-[20px] flex flex-col gap-[14px] lg:gap-[18px] w-full lg:backdrop-blur-sm shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] lg:shadow-none">
             <h4 className="font-hanken font-[800] text-white text-[18px] lg:text-[20px]">Decision-right levels</h4>
             <div className="flex flex-wrap gap-[8px]">
                {["Advisory", "Review required", "Approval required", "Execution permitted", "Prohibited", "Unknown/conditional"].map(level => (
                  <span key={level} className="text-[#e0967d] lg:text-white text-[10px] lg:text-[12px] font-jetbrains lg:font-manrope font-normal lg:font-[700] lg:border lg:border-white/10 lg:bg-white/5 lg:px-[11px] lg:py-[7px] lg:rounded-[100px]">
                    {level}
                  </span>
                ))}
             </div>
          </div>

          {/* Right Bottom: Properties List */}
          <div className="bg-transparent lg:bg-white/5 border-0 lg:border lg:border-white/10 p-0 lg:p-[24px] rounded-none lg:rounded-[20px] flex flex-col gap-[8px] w-full lg:backdrop-blur-sm">
            {[
              ["authority_policy", "verified value"],
              ["reviewer/approver", "verified value"],
              ["decision", "verified value"],
              ["action scope", "verified value"],
              ["signing/attestation", "verified value"],
              ["rollback/recovery", "verified value"]
            ].map(([k, v], i) => (
              <div key={i} className="flex justify-between items-center px-[12px] lg:px-[14px] py-[11px] lg:py-[10px] bg-white/5 border border-white/12 lg:border-white/10 rounded-[8px] w-full">
                <span className="font-manrope lg:font-jetbrains text-[13px] lg:text-[12px] text-white/70 lg:text-white">{k}</span>
                <span className="font-jetbrains lg:font-manrope text-[10px] lg:text-[12px] text-[#e0967d] lg:text-white/50">{v}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Links */}
        <div className="mt-0 lg:mt-[40px]">
          <span className="font-manrope font-[800] text-[#e0967d] text-[14px] cursor-pointer">
            Detection &amp; Response &rarr;&nbsp;&nbsp;/&nbsp;&nbsp;Compliance &rarr;
          </span>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export function PreserveSection() {
  return (
    <section className="bg-[#F0EDE6] w-full py-[68px] lg:py-[84px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col lg:grid lg:grid-cols-2 gap-[48px] lg:gap-[52px] items-center">
        
        <div className="flex flex-col gap-[22px] lg:gap-[15.2px] relative w-full">
          <div className="flex items-center gap-[10px] lg:gap-3">
            <div className="w-[20px] lg:w-[22px] h-[2px] lg:h-[1px] bg-[#c44242] lg:bg-[#e0402f] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] lg:text-[#e0402f] uppercase leading-[normal] lg:leading-[17.6px] mb-0">
              06 — Preserve
            </p>
          </div>
          
          <h2 className="font-hanken font-[800] leading-[1.08] lg:leading-[40px] text-[28px] lg:text-[36px] text-[#0a2029] lg:text-[#0b2237] m-0">
            Tamper-evident evidence, traceable to origin.
          </h2>
          
          <p className="font-manrope text-[16px] font-medium leading-[1.55] lg:leading-[24px] mb-0 text-[#5b6670] lg:text-[#5c6b79]">
            Evidence objects retain lineage, completeness, integrity signals, packages and a reviewable version history—so proof stays anchored to its stated scope.
          </p>

          <div className="w-full mt-[8px] lg:mt-6 flex flex-col gap-[8px] lg:border-y lg:border-[#e1ddd8] lg:gap-0">
            {[
              ["evidence_id", "verified value"],
              ["evidence_type", "verified value"],
              ["source/origin", "verified value"],
              ["scope", "verified value"],
              ["lineage", "verified value"],
              ["completeness", "verified value"],
              ["integrity/tamper evidence", "verified value"],
              ["version/history", "verified value"]
            ].map(([k, v], i) => (
              <div key={i} className="bg-white lg:bg-transparent border border-[#123b4c]/12 lg:border-0 flex justify-between items-center px-[12px] lg:px-0 py-[11px] lg:py-[10px] rounded-[8px] lg:rounded-none lg:border-b lg:border-[#e1ddd8] last:border-b-0">
                <span className="font-manrope lg:font-mono text-[13px] lg:text-[12px] text-[#5b6670] lg:text-[#0A2731]">{k}</span>
                <span className="font-jetbrains lg:font-sans text-[10px] lg:text-[12px] text-[#1f7a6c] lg:text-[#5c6b79]">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start flex-wrap gap-[7px] mt-[16px] w-full">
            {["Complete for stated scope", "Partial", "Unknown", "Conflicting", "Superseded", "Withdrawn/invalid"].map((badge, i) => (
              <span key={i} className="font-jetbrains lg:font-manrope font-normal lg:font-[700] text-[#1f7a6c] lg:text-[#123B4C] text-[10px] lg:text-[12px] leading-[normal] lg:leading-[100%] lg:bg-[#E4F0EC] lg:border lg:border-[#123B4C]/[0.12] lg:rounded-full lg:px-[11px] lg:py-[7px] whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <span className="font-manrope lg:font-sans font-[800] text-[#c44242] lg:text-[#e0402f] text-[14px] cursor-pointer">
              Evidence Ledger &amp; Verification &rarr;
            </span>
          </div>
        </div>

        <div className="w-full relative rounded-[20px] lg:rounded-[12px] overflow-hidden shadow-[0px_20px_48px_0px_rgba(11,37,48,0.16)] lg:shadow-2xl bg-[#0A2029] flex flex-col">
          <Image 
            src="/images/how-zoikoshield-works/archive_image.webp" 
            alt="Preserve Archive Graphic" 
            width={800}
            height={600}
            className="w-full h-auto object-cover opacity-80"
          />
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <p className="font-mono font-normal text-[#F8E8E5] text-[10px] uppercase">Integrity verified</p>
            <h4 className="font-sans font-extrabold text-white text-[20px] mt-1">Evidence package EVD-2048</h4>
            <p className="font-sans text-white/60 text-[12px]">8 sources · 24 records · immutable history</p>
          </div>
        </div>

      </div>
    </section>
  );
}

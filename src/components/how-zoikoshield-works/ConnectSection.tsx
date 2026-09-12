import React from "react";
import Image from "next/image";

export function ConnectSection() {
  return (
    <section className="bg-[#F7F5F0] w-full py-[68px] lg:py-[84px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col lg:grid lg:grid-cols-2 gap-[48px] lg:gap-[52px] items-center">
        
        <div className="flex flex-col gap-[22px] lg:gap-[15.2px] relative w-full">
          <div className="flex items-center gap-[10px] lg:gap-3">
            <div className="w-[20px] lg:w-[22px] h-[2px] lg:h-[1px] bg-[#c44242] lg:bg-[#e0402f] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] lg:text-[#e0402f] uppercase leading-[normal] lg:leading-[17.6px] mb-0 lg:tracking-[1.76px]">
              03 — Connect
            </p>
          </div>
          
          <h2 className="font-hanken lg:font-sans font-[800] lg:font-extrabold leading-[1.08] lg:leading-[40px] text-[28px] lg:text-[36px] lg:tracking-[-0.714px] text-[#0a2029] lg:text-[#0b2237] m-0">
            Approved sources. Governed relationships.
          </h2>
          
          <p className="font-manrope text-[16px] font-medium leading-[1.55] lg:leading-[24px] mb-0 text-[#5b6670] lg:text-[#5c6b79]">
            ZoikoShield connects tools and sources only when the source, permission, direction, operating mode, health and accountable owner are explicit.
          </p>

          <div className="w-full mt-[8px] lg:mt-6 flex flex-col gap-[8px] lg:border-y lg:border-[#e1ddd8] lg:gap-0">
            {[
              ["source_id", "verified value"],
              ["connection_mode", "verified value"],
              ["direction", "verified value"],
              ["permission_scope", "verified value"],
              ["availability_state", "verified value"],
              ["owner", "verified value"]
            ].map(([k, v], i) => (
              <div key={i} className="bg-white lg:bg-transparent border border-[#123b4c]/12 lg:border-0 flex justify-between items-center px-[12px] lg:px-0 py-[11px] lg:py-[12px] rounded-[8px] lg:rounded-none lg:border-b lg:border-[#e1ddd8] last:border-b-0">
                <span className="font-manrope lg:font-mono text-[13px] lg:text-[12px] text-[#5b6670] lg:text-[#0A2731]">{k}</span>
                <span className="font-jetbrains lg:font-sans text-[10px] lg:text-[12px] text-[#1f7a6c] lg:text-[#5c6b79]">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex items-start flex-wrap gap-[7px] mt-[16px] w-full">
            {["Eligible", "Needs authorization", "Limited/conditional", "Unknown", "Suspended", "Retired"].map((badge, i) => (
              <span key={i} className="font-jetbrains lg:font-manrope font-normal lg:font-[700] text-[#1f7a6c] lg:text-[#123B4C] text-[10px] lg:text-[12px] leading-[normal] lg:leading-[100%] lg:bg-[#E4F0EC] lg:border lg:border-[#123B4C]/[0.12] lg:rounded-full lg:px-[11px] lg:py-[7px] whitespace-nowrap">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <span className="font-manrope font-[800] text-[#c44242] lg:text-[#e0402f] text-[14px] cursor-pointer">
              Explore Integrations &rarr;
            </span>
          </div>
        </div>

        <div className="w-full relative rounded-[20px] lg:rounded-[12px] overflow-hidden shadow-[0px_20px_48px_0px_rgba(11,37,48,0.16)] lg:shadow-2xl bg-white flex flex-col">
          <div className="hidden lg:block absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded z-10">
            <p className="font-mono font-normal text-[#1F7A6C] text-[12px] uppercase">Connection health</p>
            <h4 className="font-sans font-extrabold text-[#0b2237] text-[24px] mt-1">12 sources eligible</h4>
          </div>
          <Image 
            src="/images/how-zoikoshield-works/image.webp" 
            alt="Network Connect Graphic" 
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}

import React from "react";

export function CorrelateSection() {
  return (
    <section className="bg-[#F0EDE6] w-full py-[68px] lg:py-[84px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-[48px] items-start">
        
        {/* Top Text Area */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[22px] lg:gap-[52px] w-full items-start">
          {/* Left Top: Heading */}
          <div className="flex flex-col gap-[22px] lg:gap-[15.2px] relative w-full">
            <div className="flex items-center gap-[10px] lg:gap-3">
              <div className="w-[20px] lg:w-[22px] h-[2px] lg:h-[1px] bg-[#c44242] lg:bg-[#e0402f] shrink-0" />
              <p className="font-jetbrains font-medium text-[11px] text-[#c44242] lg:text-[#e0402f] uppercase leading-[normal] lg:leading-[17.6px] mb-0 lg:tracking-[1.76px]">
                04 — Correlate
              </p>
            </div>
            <h2 className="font-hanken font-[800] leading-[1.08] lg:leading-[40px] text-[28px] lg:text-[36px] lg:tracking-[-0.714px] text-[#0a2029] lg:text-[#0b2237] m-0">
              Context with sources—not opaque certainty.
            </h2>
          </div>

          {/* Right Top: Description & Link */}
          <div className="flex flex-col gap-[16px] lg:pt-[34px]">
            <p className="font-manrope font-[500] text-[16px] leading-[1.55] lg:leading-[24px] mb-0 text-[#5b6670] lg:text-[#5c6b79]">
              Signals become a reviewable correlation record: cited source references, relationship type, time and context scope, quality, completeness and a visible confidence boundary.
            </p>
            <span className="font-manrope font-[700] text-[#c44242] lg:text-[#e0402f] text-[14px] cursor-pointer hidden lg:block">
              Detection &amp; Response &rarr;
            </span>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="w-full bg-transparent lg:bg-white border-0 lg:border lg:border-[#e1ddd8] rounded-none lg:rounded-[12px] p-0 lg:p-[40px] flex flex-col lg:grid lg:grid-cols-2 gap-[22px] lg:gap-[52px]">
          
          {/* Left Side: Dark Box */}
          <div className="bg-[#123B4C] p-[20px] lg:p-[28px] rounded-[14px] flex flex-col gap-[14px] lg:gap-[26px] w-full lg:min-h-[360px] border border-white/12 lg:border-0 shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] lg:shadow-none">
            <p className="font-jetbrains text-[#E0967D] text-[11px] lg:text-[12px] uppercase leading-[normal] lg:tracking-wider">Source relationship graph</p>
            <div className="flex flex-col gap-[12px] lg:gap-[26px] mt-0 lg:mt-2">
              
              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <div className="w-[8px] h-[8px] rounded-[4px] bg-[#1f7a6c] lg:w-[48px] lg:h-[48px] lg:rounded-[12px] lg:bg-white/5 lg:border lg:border-white/10 flex items-center justify-center shrink-0">
                  <svg className="hidden lg:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="12" r="2.5"></circle>
                    <circle cx="18" cy="6" r="2.5"></circle>
                    <circle cx="18" cy="18" r="2.5"></circle>
                    <path d="M8.5 12h3.5l3.5-5"></path>
                    <path d="M12 12l3.5 5"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h4 className="font-manrope font-[400] lg:font-[800] text-white text-[14px] lg:text-[16px] leading-[normal] lg:leading-[1.2] m-0">Identity event</h4>
                  <p className="hidden lg:block font-jetbrains text-white/50 text-[11px] leading-[1.2] m-0">source_ref_01 · cited</p>
                </div>
              </div>

              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <div className="w-[8px] h-[8px] rounded-[4px] bg-[#1f7a6c] lg:w-[48px] lg:h-[48px] lg:rounded-[12px] lg:bg-white/5 lg:border lg:border-white/10 flex items-center justify-center shrink-0">
                  <svg className="hidden lg:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="12" r="2.5"></circle>
                    <circle cx="18" cy="6" r="2.5"></circle>
                    <circle cx="18" cy="18" r="2.5"></circle>
                    <path d="M8.5 12h3.5l3.5-5"></path>
                    <path d="M12 12l3.5 5"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h4 className="font-manrope font-[400] lg:font-[800] text-white text-[14px] lg:text-[16px] leading-[normal] lg:leading-[1.2] m-0">Endpoint signal</h4>
                  <p className="hidden lg:block font-jetbrains text-white/50 text-[11px] leading-[1.2] m-0">source_ref_02 · cited</p>
                </div>
              </div>

              <div className="flex items-center gap-[12px] lg:gap-[16px]">
                <div className="w-[8px] h-[8px] rounded-[4px] bg-[#1f7a6c] lg:w-[48px] lg:h-[48px] lg:rounded-[12px] lg:bg-white/5 lg:border lg:border-white/10 flex items-center justify-center shrink-0">
                  <svg className="hidden lg:block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="6" cy="12" r="2.5"></circle>
                    <circle cx="18" cy="6" r="2.5"></circle>
                    <circle cx="18" cy="18" r="2.5"></circle>
                    <path d="M8.5 12h3.5l3.5-5"></path>
                    <path d="M12 12l3.5 5"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h4 className="font-manrope font-[400] lg:font-[800] text-white text-[14px] lg:text-[16px] leading-[normal] lg:leading-[1.2] m-0">Policy control</h4>
                  <p className="hidden lg:block font-jetbrains text-white/50 text-[11px] leading-[1.2] m-0">source_ref_03 · cited</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Properties & Badges */}
          <div className="flex flex-col relative w-full lg:pt-[8px]">
            <div className="flex flex-col gap-[8px] w-full">
              {[
                ["source_refs", "verified value"],
                ["relationship_type", "verified value"],
                ["time/context scope", "verified value"],
                ["completeness/quality", "verified value"],
                ["confidence boundary", "verified value"]
              ].map(([k, v], i) => (
                <div key={i} className="flex justify-between items-center px-[12px] lg:px-[14px] py-[11px] lg:py-[10px] bg-white lg:bg-[#F7F5F0] border border-[#123b4c]/12 lg:border-[#123B4C]/[0.12] rounded-[8px]">
                  <span className="font-manrope lg:font-jetbrains text-[13px] lg:text-[12px] text-[#5b6670] lg:text-[#0A2731]">{k}</span>
                  <span className="font-jetbrains lg:font-manrope font-normal lg:font-[500] text-[10px] lg:text-[12px] text-[#1f7a6c] lg:text-[#5c6b79]">{v}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-[7px] mt-[16px] lg:mt-[32px] flex-wrap">
              {["Correlated", "Partially correlated", "Conflicting", "Uncorrelated", "Needs review", "Superseded"].map((badge, i) => (
                <span key={i} className="font-jetbrains lg:font-manrope font-normal lg:font-[700] text-[#1f7a6c] lg:text-[#123B4C] text-[10px] lg:text-[12px] leading-[normal] lg:leading-[100%] lg:bg-[#E4F0EC] lg:border lg:border-[#123B4C]/[0.12] lg:rounded-full lg:px-[11px] lg:py-[7px] whitespace-nowrap">
                  {badge}
                </span>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}

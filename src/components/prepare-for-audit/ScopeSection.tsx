import React from "react";
import Image from "next/image";

export function ScopeSection() {
  return (
    <>
              {/* Section 02: SCOPE */}
              <section className="bg-white w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Scope before readiness
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                      A package without a scope manifest is not audit readiness.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#5c6b79] m-0">
                        Every preparation view starts with the scope being prepared for — never a universal organization-wide claim. Exclusions are visible here, not buried in fine print. Values below are synthetic.
                      </p>
                    </div>
                  </div>
                  {/* Manifest Mockup Image */}
                  <div className="w-full border border-[#e1ddd8] rounded-[6px] flex items-center justify-center overflow-hidden bg-white">
                     <Image 
                      src="/images/prepare-for-audit/div.manifest.png" 
                      alt="Manifest Interface mockup" 
                      width={1448} 
                      height={1086} 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </section>

    </>
  );
}

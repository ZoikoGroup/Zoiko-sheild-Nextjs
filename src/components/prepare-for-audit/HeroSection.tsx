import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
              {/* Section 01: HERO */}
              <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-y-12 lg:gap-[52px] items-start">
                  <div className="flex flex-col gap-[11.2px] relative pt-10">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Prepare for audits
                      </p>
                    </div>
                    
                    {/* Headline */}
                    <div className="flex flex-col pt-[5.975px] relative w-full">
                      <h1 className="font-sans font-bold leading-[1.15] text-[36px] sm:text-[40px] md:text-[48px] tracking-[-1.008px] text-[#0b2237] m-0">
                        Prepare evidence for review without hiding gaps or limitations.
                      </h1>
                    </div>
                    
                    {/* Lede */}
                    <div className="flex flex-col font-sans font-normal justify-center max-w-[585px] pt-[3.985px]">
                      <p className="text-[16px] sm:text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                        Organize audit scope, controls, evidence, open gaps, reviewer requests and governed packages so teams can prepare for review with source, version and limitations intact.
                      </p>
                    </div>
                    
                    {/* Buttons Row */}
                    <div className="flex flex-wrap gap-[12px] items-start pt-[16.8px] relative w-full">
                      <div className="bg-[#e0402f] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-red-600 transition-colors">
                        <span className="font-sans font-semibold text-white text-[14px] leading-[22.4px] whitespace-nowrap">
                          Book a Demo
                        </span>
                      </div>
                      <div className="border border-[#e1ddd8] bg-transparent flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                          Explore Compliance Control Plane
                        </span>
                      </div>
                      <div className="border border-[#e1ddd8] bg-transparent flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                          See how Evidence works
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-[#e1ddd8] max-w-[585px]">
                      <p className="font-sans font-normal text-[14px] leading-[22.4px] text-[#8a98a5] m-0">
                        Audit preparation does not guarantee auditor reliance, acceptance, certification, regulator approval, legal compliance or a favourable audit outcome.
                      </p>
                    </div>
                  </div>
                  {/* Right Column / Graphic Space */}
                  <div className="w-full flex items-center justify-center relative rounded-[12px] overflow-hidden">
                    <Image 
                      src="/images/prepare-for-audit/aside.dims.png" 
                      alt="Prepare evidence graphic" 
                      width={1086} 
                      height={1448} 
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </section>

    </>
  );
}

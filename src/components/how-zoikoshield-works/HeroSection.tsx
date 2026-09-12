import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-[#F7F5F0] w-full py-[68px] lg:py-[84px] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[5%] right-[5%] w-[560px] h-[560px] rounded-full bg-[#e0967d] opacity-[0.25] blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#123b4c] opacity-[0.20] blur-[120px] pointer-events-none z-0" />
      
      <div className="w-full mx-auto px-[22px] lg:px-[120px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-y-12 lg:gap-[52px] items-center relative z-10">
        
        <div className="flex flex-col gap-[22px] lg:gap-[11.2px] relative">
          <div className="flex items-center gap-[10px] lg:gap-3">
            <div className="w-[20px] lg:w-[22px] h-[2px] lg:h-[1px] bg-[#e0402f] shrink-0" />
            <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] lg:tracking-[1.76px] uppercase leading-[17.6px] mb-0">
              How ZoikoShield Works
            </p>
          </div>
          
          <div className="flex flex-col relative w-full">
            <h1 className="font-hanken font-[800] leading-[1.05] lg:leading-[106%] text-[38px] lg:text-[60px] tracking-[-1.2px] text-[#0A2029] m-0">
              Connect. Correlate. Govern. Preserve. Verify.
            </h1>
          </div>
          
          <div className="flex flex-col font-sans font-medium justify-center max-w-[585px]">
            <p className="font-manrope font-[500] text-[16px] leading-[1.55] lg:leading-[155%] tracking-[0%] text-[#5B6670] mb-0">
              ZoikoShield connects approved security and assurance systems, correlates source-backed context, governs decision rights, preserves evidence lineage, and exposes clear verification paths.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-[10px] lg:gap-[12px] items-start pt-[8px] lg:pt-[16.8px] relative w-full">
            <div className="bg-[#e0402f] flex items-center justify-center px-[18px] lg:px-[22px] py-[14px] lg:py-[11px] rounded-[10px] lg:rounded-[6px] cursor-pointer hover:bg-red-600 transition-colors">
              <span className="font-manrope font-[700] text-[#FFFFFF] text-[14px] leading-[100%] tracking-[0%] whitespace-nowrap">
                Book a Demo
              </span>
            </div>
            <div className="bg-white border border-[#e1ddd8] flex items-center justify-center px-[18px] lg:px-[22px] py-[14px] lg:py-[11px] rounded-[10px] lg:rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="font-manrope font-[700] text-[#123B4C] text-[14px] leading-[100%] tracking-[0%] whitespace-nowrap">
                Explore the Platform
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center relative rounded-[12px] overflow-hidden shadow-2xl">
          <Image 
            src="/images/how-zoikoshield-works/network_image.webp" 
            alt="Hero Graphic" 
            width={800} 
            height={600} 
            className="w-full h-auto object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}

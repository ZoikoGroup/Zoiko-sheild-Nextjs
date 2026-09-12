import React from "react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="w-full py-[68px] lg:py-[82px] relative overflow-hidden bg-[#0a2029]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-[#0a2029]">
        <Image src="/images/how-zoikoshield-works/cta-bg-clean.png" alt="CTA Background" fill className="object-cover opacity-60" />
      </div>

      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col items-center text-center relative z-10 gap-[22px]">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-[12px]">
          <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
          <p className="font-jetbrains font-medium text-[11px] text-[#e0967d] uppercase leading-[normal] m-0">
            Ready to see the model in action?
          </p>
        </div>
        
        {/* Heading */}
        <h2 className="font-hanken font-[800] leading-[1.08] text-[28px] lg:text-[42px] text-white m-0 max-w-[800px]">
          Build defensible security from source <br className="hidden sm:block" /> to proof.
        </h2>
        
        {/* Description */}
        <p className="font-manrope font-normal text-[16px] leading-[1.55] text-[rgba(255,255,255,0.68)] max-w-[650px] m-0">
          See how ZoikoShield connects your approved systems while keeping authority, evidence and verification visible.
        </p>

        {/* Button */}
        <div className="bg-[#c44242] flex items-center justify-center px-[22px] py-[15px] rounded-[10px] shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] cursor-pointer hover:bg-[#a33525] transition-colors mt-[2px]">
          <span className="font-manrope font-bold text-white text-[14px] leading-[normal]">
            Book a Demo
          </span>
        </div>

      </div>
    </section>
  );
}

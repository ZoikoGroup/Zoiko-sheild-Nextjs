import React from "react";
import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a2029]" />
        <Image
          src="/images/compliance-control-plane/final-cta-bg.webp"
          alt=""
          fill
          className="object-cover opacity-[0.18]"
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden relative flex flex-col gap-[22px] items-center px-[22px] py-[72px] w-full">
        <p className="font-jetbrains font-normal text-[12px] text-[#e0967d] m-0">
          READY WHEN YOUR PROGRAM IS
        </p>
        <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-white text-center m-0">
          Make every compliance state ready to inspect.
        </h2>
        <p className="font-manrope font-normal leading-[1.55] text-[16px] text-[rgba(255,255,255,0.68)] text-center m-0">
          Bring controls, evidence, exceptions and attributable review into one governed operating model.
        </p>
        <button className="bg-[#c44242] border border-[#c44242] flex items-center justify-center h-[53px] px-[20px] rounded-[10px] w-full cursor-pointer hover:bg-[#b23636] transition-colors">
          <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
            Book a Demo
          </span>
        </button>
        <Link
          href="/platform-overview"
          className="bg-[#0a2029] border border-[rgba(255,255,255,0.5)] flex items-center justify-center h-[53px] px-[20px] rounded-[10px] w-full cursor-pointer hover:bg-[#123b4c] transition-colors"
        >
          <span className="font-manrope font-bold text-[15px] text-white whitespace-nowrap">
            Explore the Platform
          </span>
        </Link>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:flex md:flex-col relative gap-[22px] items-center justify-center text-center lg:h-[400px] py-[56px] lg:py-0">
        <div className="w-full mx-auto max-w-[1440px] px-8 lg:px-[120px] flex flex-col gap-[22px] items-center text-center">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase m-0">
              Ready when your program is
            </p>
          </div>

          <h2 className="font-hanken font-extrabold text-[32px] sm:text-[38px] lg:text-[44px] text-white m-0 max-w-[760px]">
            Make every compliance state ready to inspect.
          </h2>

          <p className="font-manrope font-normal text-[15px] text-[rgba(255,255,255,0.68)] m-0 max-w-[650px]">
            Bring controls, evidence, exceptions and attributable review into one governed operating model.
          </p>

          <div className="flex flex-wrap gap-[14px] items-center justify-center">
            <button className="bg-[#c44242] border border-[#c44242] flex items-center justify-center h-[52px] px-[24px] rounded-[8px] cursor-pointer hover:bg-[#b23636] transition-colors">
              <span className="font-manrope font-bold text-[14px] text-white whitespace-nowrap">
                Book a Demo
              </span>
            </button>
            <Link
              href="/platform-overview"
              className="bg-white border border-[#123b4c] flex items-center justify-center h-[52px] px-[24px] rounded-[8px] cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <span className="font-manrope font-bold text-[14px] text-[#123b4c] whitespace-nowrap">
                Explore the Platform
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

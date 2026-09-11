import React from "react";

export function GetStartedSection() {
  return (
    <>
              {/* Section 11: GET STARTED */}
              <section className="bg-zoiko-dark w-full py-[60px] md:py-[100px] relative text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-[24px] relative w-full">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[22px] h-[1px] bg-[#e0402f]" />
                    <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase m-0">
                      Get started
                    </p>
                  </div>
                  
                  <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-white m-0">
                    Bring the request list that's currently in a spreadsheet.
                  </h2>
                  
                  <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#8a98a5] m-0 max-w-[600px] mx-auto">
                    We'll walk how scope, evidence, gaps and reviewer requests get organized — and be straight about which conclusions will always belong to your reviewer rather than to a tool.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[16px] mt-[16px]">
                    <button className="bg-[#e0402f] text-white font-mono font-semibold text-[13px] px-[24px] py-[12px] rounded-[4px] hover:bg-[#c83526] transition-colors">
                      Book a Demo
                    </button>
                    <button className="bg-transparent border border-white/20 text-white font-mono text-[13px] px-[24px] py-[12px] rounded-[4px] hover:bg-white/5 transition-colors">
                      Compliance Control Plane
                    </button>
                    <button className="bg-transparent border border-white/20 text-white font-mono text-[13px] px-[24px] py-[12px] rounded-[4px] hover:bg-white/5 transition-colors">
                      Visit Trust Center
                    </button>
                  </div>
                </div>
              </section>

    </>
  );
}

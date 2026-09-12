import React from "react";

export function CTASection() {
  return (
    <>
              <section className="bg-zoiko-dark w-full py-[100px] relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-[24px] relative w-full">
                  
                  {/* Eyebrow */}
                  <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] m-0">
                    Get started
                  </p>
      
                  {/* Headline */}
                  <h2 className="font-sans font-bold leading-[48px] text-[40px] tracking-[-0.84px] text-white m-0">
                    Bring the statement your Board pushed back on.
                  </h2>
      
                  {/* Text */}
                  <p className="font-sans font-normal text-[18px] leading-[28.8px] text-[#b3b9bf] max-w-[720px] m-0">
                    We&apos;ll take it apart &mdash; scope, period, method, evidence path, what&apos;s stale or missing, and which part of it was actually a decision waiting for an owner.
                  </p>
      
                  {/* Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-[16px] mt-4">
                    <button className="bg-[#e0402f] hover:bg-[#c9392a] text-white font-sans font-semibold text-[15px] px-[28px] py-[14px] rounded-[6px] transition-colors border border-transparent">
                      Book a Demo
                    </button>
                    <button className="bg-transparent hover:bg-[rgba(255,255,255,0.05)] text-white font-sans font-semibold text-[15px] px-[28px] py-[14px] rounded-[6px] transition-colors border border-[#42566b]">
                      See how evidence works
                    </button>
                    <button className="bg-transparent hover:bg-[rgba(255,255,255,0.05)] text-white font-sans font-semibold text-[15px] px-[28px] py-[14px] rounded-[6px] transition-colors border border-[#42566b]">
                      Visit the Trust Center
                    </button>
                  </div>
      
                  {/* Subtext */}
                  <p className="font-sans font-normal text-[13px] leading-[20.8px] text-[#5c6b79] max-w-[640px] m-0 mt-8">
                    Risk methods, metrics, report formats, cadence, audiences, benchmarks, exports and decision workflows vary by approved product, customer governance and source authority.
                  </p>
      
                </div>
              </section>

    </>
  );
}

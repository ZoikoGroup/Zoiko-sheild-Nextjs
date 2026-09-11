import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
              <section className="bg-zoiko-beige w-full py-14 md:py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-y-12 lg:gap-[52px] items-start">
                  
                  {/* Left Column (Content) */}
                  <div className="flex flex-col gap-[11.2px] relative pt-10">
                    
                    {/* Eyebrow */}
                    <div className="relative w-full h-[17.59px]">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                      <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                        <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                          Executive risk reporting
                        </p>
                      </div>
                    </div>
                    
                    {/* Headline */}
                    <div className="flex flex-col pt-[5.975px] relative w-full">
                      <h1 className="font-sans font-bold leading-[1.15] text-[36px] sm:text-[40px] md:text-[48px] tracking-[-1.008px] text-[#0b2237] m-0">
                        Report risk to the Board<br />
                        <span className="text-[#e0402f]">with evidence behind<br />every material statement.</span>
                      </h1>
                    </div>
                    
                    {/* Lede */}
                    <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] pt-[3.985px]">
                      <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                        Turn governed risk and evidence into concise executive context that<br />
                        shows what changed, why it matters, what remains unknown, and which<br />
                        decisions still belong to accountable people.
                      </p>
                    </div>
                    
                    {/* Buttons Row */}
                    <div className="flex flex-wrap gap-[12px] items-start pt-[16.8px] relative w-full">
                      <div className="bg-[#e0402f] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-red-600 transition-colors">
                        <span className="font-sans font-semibold text-white text-[14px] leading-[22.4px] whitespace-nowrap">
                          Book a Demo
                        </span>
                      </div>
                      <div className="border border-[#e1ddd8] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                          See how evidence works
                        </span>
                      </div>
                      <div className="border border-[#e1ddd8] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                          Visit the Trust Center
                        </span>
                      </div>
                    </div>
                    
                    {/* Subtext */}
                    <div className="flex flex-col font-sans font-normal justify-center pt-[0.585px]">
                      <p className="text-[14px] leading-[22.4px] text-[#5c6b79] m-0">
                        Evidence and limitations come before the conversion ask on this page. There is no &ldquo;see<br />
                        the full report in a demo&rdquo; gate in front of the uncertainty.
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Column (Image) */}
                  <div className="relative w-full h-[746.235px] border-t-[3px] border-b-[1px] border-l-[1px] border-r-[1px] border-[#0b2237] border-solid rounded-[6px] overflow-hidden">
                    <Image 
                      src="/images/report-risk-to-the-board/report-risk-to-the-board.png" 
                      alt="Report Risk to the Board" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </section>

    </>
  );
}

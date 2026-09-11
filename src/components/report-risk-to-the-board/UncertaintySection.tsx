import React from "react";

export function UncertaintySection() {
  return (
    <>
              <section className="bg-zoiko-dark w-full py-[60px] md:py-[84px] relative border-b border-[#1b3b56]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
                  
                  {/* Eyebrow */}
                  <div className="relative w-full h-[17.59px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                    <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Assumptions and unknowns
                      </p>
                    </div>
                  </div>
      
                  {/* Headline */}
                  <div className="flex flex-col pt-[2.8px] relative w-full">
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-white m-0">
                      When the basis gets weaker, the statement gets more qualified.
                    </h2>
                  </div>
      
                  {/* Lede */}
                  <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
                    <p className="text-[17px] leading-[27.2px] mb-0 text-[#93a6b8]">
                      Never more confident to keep the presentation simple. Twelve states are carried through to the summary rather than resolved on the way up.
                    </p>
                  </div>
      
                  {/* States Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 border border-[#1b3b56] bg-gradient-to-b from-[#112b45] to-[#0d2338] rounded-[6px] overflow-hidden">
                    <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Assumption</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Stated concisely, linked to the method or risk record it depends on.</p>
                    </div>
                    <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Missing evidence</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Explicitly missing. No optimistic fill from averages or inference.</p>
                    </div>
                    <div className="p-[24px] border-b border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Stale evidence</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">As-of and freshness shown, with the effect on the statement named.</p>
                    </div>
      
                    <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Conflicting evidence</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Conflict and review state shown rather than silently averaged.</p>
                    </div>
                    <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Out of scope</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">The excluded area is named where it is safe and approved to do so.</p>
                    </div>
                    <div className="p-[24px] border-b border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Under review</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">A neutral state. Not presented as resolved in either direction.</p>
                    </div>
      
                    <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Restricted evidence</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">A controlled-access cue, without leaking the detail behind it.</p>
                    </div>
                    <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Method incompatible</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">No trend rendered. The incompatibility is explained instead.</p>
                    </div>
                    <div className="p-[24px] border-b border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Source unavailable</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Last approved context only where governance permits, labelled stale.</p>
                    </div>
      
                    <div className="p-[24px] border-b md:border-b-0 md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Unknown outcome</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Stated as unknown rather than predicted as success or failure.</p>
                    </div>
                    <div className="p-[24px] border-b md:border-b-0 md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Partial coverage</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">The affected statement or metric coverage is spelled out.</p>
                    </div>
                    <div className="p-[24px] flex flex-col gap-[8px]">
                      <h4 className="font-sans font-bold text-white text-[14px] m-0">Correction pending</h4>
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">The prior value stays qualified until the authoritative correction lands.</p>
                    </div>
                  </div>
      
                  <div className="bg-[#0f2942] border border-[#1b3b56] border-l-[3px] border-l-[#e0402f] rounded-[6px] p-[27px] flex flex-col gap-[16px] w-full mt-6">
                    <h3 className="font-sans font-bold text-white text-[16px] m-0">Audience seniority changes framing, not truth</h3>
                    <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                      A label such as &ldquo;Board&rdquo; changes how much detail is appropriate and how the statement is worded. It does not change the underlying risk position, and it never justifies dropping a material limitation. An executive summary is a shorter presentation of the same source truth &mdash; not a stronger one.
                    </p>
                  </div>
      
                </div>
              </section>

    </>
  );
}

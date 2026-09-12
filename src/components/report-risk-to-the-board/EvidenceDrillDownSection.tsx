import React from "react";

export function EvidenceDrillDownSection() {
  return (
    <>
              <section className="bg-white w-full py-14 md:py-20 relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
                  {/* Eyebrow */}
                  <div className="relative w-full h-[17.59px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                    <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Evidence drill-down
                      </p>
                    </div>
                  </div>
      
                  {/* Headline */}
                  <div className="flex flex-col pt-[2.8px] relative w-full">
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                      Five levels, each with its own edge.
                    </h2>
                  </div>
      
                  {/* Lede */}
                  <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
                    <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                      Evidence-linked means a reader can inspect why a statement is present &mdash; without being<br />
                      granted unrestricted access to sensitive records. Public examples are synthetic; real Board<br />
                      papers, risk registers and incident data never appear as marketing proof.
                    </p>
                  </div>
      
                  {/* Ladder */}
                  <div className="w-full mt-8 flex flex-col border border-[#e1ddd8] rounded-[6px] bg-white overflow-hidden overflow-x-auto">
                    <div className="min-w-[700px] flex flex-col w-full">
                    
                    {/* Level 1 */}
                    <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                      <div className="flex flex-col pt-[24px] pl-[20px]">
                        <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">01</p>
                      </div>
                      <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                        <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Executive statement</h4>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          The audience-safe assertion, with scope, period, owner and the limitations that survived the summarization.
                        </p>
                      </div>
                      <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">Cannot strengthen the meaning of anything beneath it.</p>
                      </div>
                    </div>
      
                    {/* Level 2 */}
                    <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                      <div className="flex flex-col pt-[24px] pl-[20px]">
                        <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">02</p>
                      </div>
                      <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                        <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Risk record</h4>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          The governed risk statement, its method and version, assumptions, state and owner &mdash; held by Risk Intelligence.
                        </p>
                      </div>
                      <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">No invented score, severity or appetite is introduced at this level.</p>
                      </div>
                    </div>
      
                    {/* Level 3 */}
                    <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                      <div className="flex flex-col pt-[24px] pl-[20px]">
                        <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">03</p>
                      </div>
                      <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                        <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Evidence set</h4>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          Evidence references with lineage, completeness, freshness and any conflicts between sources.
                        </p>
                      </div>
                      <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">Completeness is not certainty.</p>
                      </div>
                    </div>
      
                    {/* Level 4 */}
                    <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                      <div className="flex flex-col pt-[24px] pl-[20px]">
                        <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">04</p>
                      </div>
                      <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                        <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Source authority</h4>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          The originating system or source, observation and effective dates, and the disclosure or access class.
                        </p>
                      </div>
                      <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">Source availability is not truth.</p>
                      </div>
                    </div>
      
                    {/* Level 5 */}
                    <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                      <div className="flex flex-col pt-[24px] pl-[20px]">
                        <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">05</p>
                      </div>
                      <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                        <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Decision history</h4>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          Reviews, decisions, corrections and supersessions, where the reader is authorized to see them.
                        </p>
                      </div>
                      <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">History is not Board approval by implication.</p>
                      </div>
                    </div>
      
                    {/* Denied */}
                    <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative">
                      <div className="flex flex-col pt-[24px] pl-[20px]">
                        <p className="font-mono font-semibold text-[#a63220] text-[11px] leading-[17.6px] m-0">âœ•</p>
                      </div>
                      <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                        <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">When access is denied</h4>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          A safe explanation and an alternative authorized summary &mdash; never a silent gap, and never a leak of the restricted item&apos;s existence or content.
                        </p>
                      </div>
                      <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">A link never transfers authority. An external framework or advisory reference stays external.</p>
                      </div>
                    </div>
                    </div>
      
                  </div>
      
                  {/* Grid 2 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full mt-8">
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                      <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#f1f4f7] border border-[#cfd8e0] rounded-[6px] text-[#42566b] text-[16px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Verification is not interpretation</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[24px] m-0">
                        The evidence ledger can establish that a record is intact and consistent within its stated scope. It cannot establish that the risk conclusion drawn from that record is correct. Those are separate questions with separate owners, and collapsing them is the most common way evidence-linked reporting goes wrong.
                      </p>
                      <div className="mt-4 border border-[#e1ddd8] inline-flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors self-start">
                        <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                          Evidence ledger &rarr;
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                      <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#eef7f1] border border-[#d2eadc] rounded-[6px] text-[#20663f] text-[16px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Method authority stays where it lives</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[24px] m-0">
                        Risk Intelligence owns risk-method truth. This solution owns how that truth is understood and used for executive reporting. A statement here may summarize an approved risk statement with its scope and time basis &mdash; but never rewrite it in a way that increases certainty.
                      </p>
                      <div className="mt-4 border border-[#e1ddd8] inline-flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors self-start">
                        <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                          Risk intelligence &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
      
                </div>
              </section>

    </>
  );
}

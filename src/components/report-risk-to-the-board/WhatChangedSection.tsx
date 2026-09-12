import React from "react";

export function WhatChangedSection() {
  return (
    <>
              <section className="bg-zoiko-beige w-full pb-14 md:pb-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
                  
                  {/* Eyebrow */}
                  <div className="relative w-full h-[17.59px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                    <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        What changed
                      </p>
                    </div>
                  </div>
      
                  {/* Headline */}
                  <div className="flex flex-col pt-[2.8px] relative w-full">
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                      Executives need the change first. It still has to be earned.
                    </h2>
                  </div>
      
                  {/* Lede */}
                  <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
                    <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                      A red or green arrow is never sufficient. The reader needs to see what changed,<br />
                      under which method and scope, and whether the comparison is genuinely like-for-<br />
                      like. Values below are synthetic, shown to demonstrate the pattern.
                    </p>
                  </div>
      
                  {/* Table Container */}
                  <div className="bg-white border border-[#e1ddd8] border-solid rounded-[6px] overflow-hidden overflow-x-auto relative w-full mt-4 flex flex-col">
                    <div className="min-w-[800px] flex flex-col w-full">
                    
                    {/* Header Row */}
                    <div className="bg-[#0b2237] grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] min-h-[44.8px] w-full">
                      <div className="flex flex-col justify-center px-[20px] py-[14px]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Change type</p>
                      </div>
                      <div className="flex flex-col justify-center px-[20px] py-[14px]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">What changed</p>
                      </div>
                      <div className="flex flex-col justify-center px-[20px] py-[14px]">
                        <p className="font-mono font-semibold text-white text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Why it matters</p>
                      </div>
                      <div className="flex flex-col justify-center px-[20px] py-[14px]">
                        <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Owner</p>
                      </div>
                    </div>
      
                    {/* Row 1 */}
                    <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                      <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Resolved</p>
                      </div>
                      <div className="flex flex-col pt-[16.795px] pb-[39.985px] px-[20px]">
                        <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                          Privileged access review for payment systems<br />
                          completed for the current period.
                        </p>
                      </div>
                      <div className="bg-[#fcfbfa] flex flex-col pt-[18px] pb-[18px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                        <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                          Removes a standing evidence gap raised at the last two<br />
                          reviews. The underlying control design has not changed &mdash;<br />
                          only the evidence for it.
                        </p>
                      </div>
                      <div className="flex flex-col pt-[17.195px] pb-[46.585px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                          Security<br />
                          governance
                        </p>
                      </div>
                    </div>
      
                    {/* Row 2 */}
                    <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                      <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">New</p>
                      </div>
                      <div className="flex flex-col pt-[16.795px] pb-[39.985px] px-[20px]">
                        <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                          Third-party administrator access to a payment-<br />
                          adjacent system identified during scope expansion.
                        </p>
                      </div>
                      <div className="bg-[#fcfbfa] flex flex-col pt-[18px] pb-[18px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                        <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                          Extends the population under review. Whether this is a<br />
                          concern depends on contract terms that Legal has not yet<br />
                          assessed.
                        </p>
                      </div>
                      <div className="flex flex-col pt-[17px] pb-[64.78px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">Vendor risk</p>
                      </div>
                    </div>
      
                    {/* Row 3 */}
                    <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                      <div className="flex flex-col pt-[17px] pb-[44.19px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Reopened</p>
                      </div>
                      <div className="flex flex-col pt-[16.795px] pb-[18.395px] px-[20px]">
                        <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                          Break-glass account attestation lapsed; the prior<br />
                          attestation is now outside its freshness window.
                        </p>
                      </div>
                      <div className="bg-[#fcfbfa] flex flex-col pt-[16.795px] pb-[18.395px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                        <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                          A previously closed item returns to open. Nothing observed<br />
                          suggests misuse &mdash; the evidence has simply expired.
                        </p>
                      </div>
                      <div className="flex flex-col pt-[17.195px] pb-[24.995px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                          Platform<br />
                          engineering
                        </p>
                      </div>
                    </div>
      
                    {/* Row 4 */}
                    <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                      <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Under review</p>
                      </div>
                      <div className="flex flex-col pt-[16.795px] pb-[39.985px] px-[20px]">
                        <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                          Two current sources disagree on privileged-role<br />
                          membership for one system.
                        </p>
                      </div>
                      <div className="bg-[#fcfbfa] flex flex-col pt-[18px] pb-[18px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                        <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                          The conflict is unresolved and is shown as a conflict rather<br />
                          than averaged. Interpretation is deferred until the<br />
                          discrepancy is settled.
                        </p>
                      </div>
                      <div className="flex flex-col pt-[17.195px] pb-[46.585px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                          Identity<br />
                          operations
                        </p>
                      </div>
                    </div>
      
                    {/* Row 5 */}
                    <div className="grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                      <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Not shown</p>
                      </div>
                      <div className="flex flex-col pt-[17px] pb-[61.78px] px-[20px]">
                        <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                          Quarter-over-quarter movement in evidence coverage.
                        </p>
                      </div>
                      <div className="bg-[#fdf7f5] flex flex-col justify-center px-[20px] py-[28px] relative border-l-2 border-[#e0402f]">
                        <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                          <span className="font-bold text-[#7e2413]">Comparison blocked.</span> The method version changed from v1.2<br />
                          to v2.0 and the scope widened to a second region. Any<br />
                          percentage would measure our change, not yours.
                        </p>
                      </div>
                      <div className="flex flex-col pt-[17px] pb-[64.78px] px-[20px]">
                        <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">Reporting owner</p>
                      </div>
                    </div>
                    </div>
      
                  </div>
      
                  {/* Footer Note */}
                  <div className="relative w-full mt-4 flex items-start gap-[9px]">
                    <div className="w-[16px] h-[2px] bg-[#e0402f] mt-[8px] shrink-0" />
                    <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                      Magnitude is published only where an approved quantitative method, unit and denominator exist. &ldquo;Why it matters&rdquo; is a source-backed implication written by a<br />
                      person &mdash; never an automatic materiality verdict, and never generated as authority by AI.
                    </p>
                  </div>
      
                </div>
              </section>

    </>
  );
}

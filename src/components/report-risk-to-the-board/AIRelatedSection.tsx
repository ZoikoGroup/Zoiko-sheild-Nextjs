import React from "react";

export function AIRelatedSection() {
  return (
    <>
              <section className="bg-white w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
                  
                  {/* Eyebrow */}
                  <div className="relative w-full h-[17.59px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                    <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        AI, advisory and adjacent domains
                      </p>
                    </div>
                  </div>
      
                  {/* Headline */}
                  <div className="flex flex-col pt-[2.8px] relative w-full">
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                      Help with the writing. Not with the deciding.
                    </h2>
                  </div>
      
                  {/* Lede */}
                  <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
                    <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                      AI can make dense risk records navigable inside the bounded, cited and overridable model that AI Security &amp; Governance defines. Advisory can prepare the material. Neither becomes Board authority.
                    </p>
                  </div>
      
                  {/* Table */}
                  <div className="w-full mt-8 border border-[#e1ddd8] rounded-[6px] overflow-hidden overflow-x-auto bg-white flex flex-col">
                    <div className="min-w-[800px] flex flex-col w-full">
                    <div className="grid grid-cols-[245px_minmax(0,1.2fr)_minmax(0,1.3fr)] bg-[#fcfbfa] border-b border-[#e1ddd8] min-h-[46px]">
                      <div className="px-[20px] py-[14px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Function</p>
                      </div>
                      <div className="px-[20px] py-[14px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Allowed</p>
                      </div>
                      <div className="px-[20px] py-[14px] flex flex-col justify-center">
                        <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Boundary</p>
                      </div>
                    </div>
      
                    {[
                      ["AI summarize", "Condense authorized risk and evidence, with citations.", "Cannot omit a material limitation to strengthen the message."],
                      ["AI compare", "Explain approved like-for-like changes.", "No invented causal driver behind the change."],
                      ["AI draft", "Draft executive language for human review.", "A draft is not a Board-approved statement."],
                      ["AI recommend", "Only where decision-right policy permits it.", "A recommendation is not a decision or an approval."],
                      ["AI on materiality", "May surface relevant facts and questions.", "Does not make the Board or legal materiality decision."],
                      ["AI approval", "\u2014", "Cannot self-review or self-approve. Cannot set appetite or accept risk."],
                      ["vCISO & Advisory", "Prepare evidence-linked context within the advisory role.", "An advisor does not become a director, officer or independent auditor."],
                      ["Compliance control plane", "Relate findings to controls, tests and exceptions.", "A risk report is not an audit opinion or a certification."],
                      ["Detection & cases", "Contribute incident and investigation context.", "Case correlation does not become root cause or severity."]
                    ].map(([func, allowed, bound], i) => (
                      <div key={i} className="grid grid-cols-[245px_minmax(0,1.2fr)_minmax(0,1.3fr)] border-b border-[#e1ddd8] last:border-b-0 w-full hover:bg-gray-50 transition-colors">
                        <div className="px-[20px] py-[16px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                          <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[20px] m-0">{func}</p>
                        </div>
                        <div className="px-[20px] py-[16px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                          <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[20px] m-0">{allowed}</p>
                        </div>
                        <div className="px-[20px] py-[16px] flex flex-col justify-center">
                          <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[20px] m-0">{bound}</p>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
      
                  {/* Grid 3 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full mt-6">
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between min-h-[224px]">
                      <div className="flex flex-col gap-[16px]">
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0 flex items-center gap-[8px]">
                          Evidence ledger 
                          <span className="inline-flex items-center gap-[4px] bg-[#eef7f1] border border-[#d2eadc] rounded-[3px] px-[6px] py-[2px] ml-1">
                            <span className="font-mono font-bold text-[#20663f] text-[11px] leading-[11px]">â—</span>
                            <span className="font-mono font-semibold text-[#20663f] text-[10.5px] tracking-[0.945px]">Active</span>
                          </span>
                        </h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          Where the drill-down lands. Integrity and lineage within a stated scope.
                        </p>
                      </div>
                      <div className="mt-4 border border-[#e1ddd8] inline-flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors self-start">
                        <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                          Open &rarr;
                        </span>
                      </div>
                    </div>
      
                    <div className="bg-[#fcfbfa] border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between min-h-[224px]">
                      <div className="flex flex-col gap-[16px]">
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0 flex items-start flex-col gap-[8px]">
                          Executive Risk Intelligence
                          <span className="inline-flex items-center gap-[4px] bg-[#f1f4f7] border border-[#cfd8e0] rounded-[3px] px-[6px] py-[2px]">
                            <span className="font-mono font-bold text-[#42566b] text-[11px] leading-[11px]">â—</span>
                            <span className="font-mono font-semibold text-[#42566b] text-[10.5px] uppercase tracking-[0.945px]">When public</span>
                          </span>
                        </h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          The product destination for Board reporting with evidence drill-down. This solution page explains the outcome; it does not stand in for that route or claim a Board dashboard is current.
                        </p>
                      </div>
                    </div>
      
                    <div className="bg-[#fcfbfa] border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between min-h-[224px]">
                      <div className="flex flex-col gap-[16px]">
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0 flex items-start flex-col gap-[8px]">
                          vCISO &amp; Advisory 
                          <span className="inline-flex items-center gap-[4px] bg-[#f1f4f7] border border-[#cfd8e0] rounded-[3px] px-[6px] py-[2px]">
                            <span className="font-mono font-bold text-[#42566b] text-[11px] leading-[11px]">â—</span>
                            <span className="font-mono font-semibold text-[#42566b] text-[10.5px] uppercase tracking-[0.945px]">When public</span>
                          </span>
                        </h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          Can help prepare the reporting architecture and the decision framing. Your governance approves the final material and retains every decision.
                        </p>
                      </div>
                    </div>
                  </div>
      
                </div>
              </section>

    </>
  );
}

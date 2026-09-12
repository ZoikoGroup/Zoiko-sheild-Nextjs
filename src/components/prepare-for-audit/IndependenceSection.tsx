import React from "react";

export function IndependenceSection() {
  return (
    <>
              {/* Section 08: INDEPENDENCE, RELIANCE AND ACCEPTANCE */}
              <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Independence, reliance and acceptance
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                      None of this is a shortcut to external assurance.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#5c6b79] m-0">
                        A reviewer account, a completed request list, a verified package, a framework mapping or a service engagement never substitutes for independence, reliance, acceptance or external assurance authority.
                      </p>
                    </div>
                  </div>
      
                  <div className="relative w-full flex flex-col overflow-x-auto rounded-[6px] border border-[#e1ddd8]">
                    <div className="min-w-[700px]">
                      <div className="grid grid-cols-[250px_minmax(0,1fr)_minmax(0,1fr)] border-b border-[#e1ddd8] bg-[#f4f5f7]">
                        <div className="px-[24px] py-[16px] font-sans font-semibold text-[13px] text-[#0b2237] uppercase tracking-[0.5px]">Concept</div>
                        <div className="px-[24px] py-[16px] font-sans font-semibold text-[13px] text-[#0b2237] uppercase tracking-[0.5px] border-l border-[#e1ddd8]">Default treatment here</div>
                        <div className="px-[24px] py-[16px] font-sans font-semibold text-[13px] text-[#0b2237] uppercase tracking-[0.5px] border-l border-[#e1ddd8]">Required before any stronger claim</div>
                      </div>
      
                      <div className="flex flex-col w-full bg-white">
                        {[
                          ["auditor", '"Reviewer" is used unless the role is verified.', "A verified external audit role and engagement context."],
                          ["independence", "Not claimed.", "A documented independence and conflict model, and the applicable standard."],
                          ["reliance", "Not predicted.", "The reviewer's own criteria and an explicit decision."],
                          ["acceptance", "Never inferred from a status or a completed task.", "Attributable acceptance with an exact stated meaning."],
                          ["audit completion", "Not inferred from workspace closure.", "External engagement authority."],
                          ["opinion / conclusion", "Not generated.", "A qualified issuer, standard, scope and signed authority."],
                          ["certification", "Not claimed, and never shown as a badge.", "A certification body, a current certificate, its scope and dates."],
                          ["regulator approval", "Not implied.", "The exact regulator, decision and current evidence."],
                          ["management assertion", "Customer-owned.", "Your authorized signatory and process."],
                          ["ZoikoShield reviewer", "Not labelled an independent auditor.", "A separate role, engagement and conflict controls."]
                        ].map(([concept, defaultTreatment, required], i) => (
                          <div key={i} className="grid grid-cols-[250px_minmax(0,1fr)_minmax(0,1fr)] border-b border-[#e1ddd8] last:border-b-0 hover:bg-gray-50 transition-colors">
                            <div className="px-[24px] py-[16px] flex items-center">
                              <span className="font-mono text-[#0b2237] text-[13px]">{concept}</span>
                            </div>
                            <div className="px-[24px] py-[16px] flex items-center border-l border-[#e1ddd8]">
                              <span className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px]">{defaultTreatment}</span>
                            </div>
                            <div className="px-[24px] py-[16px] flex items-center border-l border-[#e1ddd8]">
                              <span className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px]">{required}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
      
                  {/* Card underneath table - full width per Figma */}
                  <div className="w-full bg-white border border-[#e1ddd8] border-l-[3px] border-l-[#e0402f] rounded-[6px] pt-[31px] pb-[26px] px-[26px] flex flex-col gap-[10px] mt-[24px]">
                    <h3 className="font-sans font-bold text-[#0b2237] text-[19px] leading-[22px] tracking-[-0.4px] m-0">Professional judgment stays with professionals</h3>
                    <p className="font-sans font-normal text-[#5c6b79] text-[14.5px] leading-[23.2px] m-0">
                      Materiality, audit risk, evidence sufficiency, control significance, legal applicability and external assurance conclusions belong to authorized reviewers and your own qualified advisors. The interface shows the boundary rather than quietly manufacturing those judgments.
                    </p>
                    <p className="font-sans font-normal text-[#5c6b79] text-[14.5px] leading-[23.2px] m-0">
                      Where AI assists, it retrieves, summarizes and drafts from cited authorized records. There is no anonymous &ldquo;AI approved&rdquo;, and human or external authority remains responsible for every consequential conclusion.
                    </p>
                    <div className="flex flex-wrap gap-[12px] pt-[10px]">
                      <span className="font-sans font-semibold text-[14px] text-[#0b2237] border border-[#e1ddd8] px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">AI decision rights</span>
                      <span className="font-sans font-semibold text-[14px] text-[#0b2237] border border-[#e1ddd8] px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">Responsible AI</span>
                    </div>
                  </div>
                </div>
              </section>

    </>
  );
}

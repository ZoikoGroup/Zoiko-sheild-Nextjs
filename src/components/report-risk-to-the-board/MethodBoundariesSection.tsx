import React from "react";

export function MethodBoundariesSection() {
  return (
    <>
              <section className="bg-white w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
                  
                  {/* Eyebrow */}
                  <div className="relative w-full h-[17.59px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                    <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Method, metrics and prediction
                      </p>
                    </div>
                  </div>
      
                  {/* Headline */}
                  <div className="flex flex-col pt-[2.8px] relative w-full">
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                      The page works without numeric scoring &mdash; so it goes without.
                    </h2>
                  </div>
      
                  {/* Lede */}
                  <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
                    <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                      Each construct below could be useful. Each requires its method, authority and interpretation to be controlled first. Until then, evidence-linked statements, change explanations and decision questions carry the report.
                    </p>
                  </div>
      
                  {/* Table */}
                  <div className="w-full mt-8 border border-[#e1ddd8] rounded-[6px] overflow-hidden overflow-x-auto bg-white flex flex-col">
                    <div className="min-w-[800px] flex flex-col w-full">
                    <div className="grid grid-cols-[260px_minmax(0,1fr)] bg-[#fcfbfa] border-b border-[#e1ddd8] min-h-[46px]">
                      <div className="px-[24px] py-[16px] flex flex-col justify-center">
                        <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Construct</p>
                      </div>
                      <div className="px-[24px] py-[16px] flex flex-col justify-center">
                        <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">What must exist before it appears</p>
                      </div>
                    </div>
      
                    {[
                      ["risk score", "Formula and method, inputs, range, interpretation, owner, validation and limitations."],
                      ["severity", "An authoritative taxonomy and mapping. No generic Low / Medium / High invention."],
                      ["risk appetite", "Your organization's authority, with scope, version, effective date and approval."],
                      ["tolerance threshold", "A defined unit, method and owner \u2014 plus the decision effect of crossing it."],
                      ["materiality threshold", "Legal, risk and Board authority. Never inferred by a platform."],
                      ["confidence", "A defined method and meaning. Not a generic percentage."],
                      ["composite index", "A methodology that justifies combining risks that aren't comparable."],
                      ["traffic light", "Exact source semantics and thresholds behind each colour."],
                      ["residual risk", "The treatment method and the responsible authority."],
                      ["accepted risk", "A human decision record. Never derived from a colour or a score."],
                      ["heat map", "Governed dimensions and scaling method \u2014 not a decorative severity matrix."]
                    ].map(([construct, req], i) => (
                      <div key={i} className="grid grid-cols-[260px_minmax(0,1fr)] border-b border-[#e1ddd8] last:border-b-0 w-full hover:bg-gray-50 transition-colors">
                        <div className="px-[24px] py-[16px] flex flex-col justify-center">
                          <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[20px] m-0">{construct}</p>
                        </div>
                        <div className="px-[24px] py-[16px] flex flex-col justify-center">
                          <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[20px] m-0">{req}</p>
                        </div>
                      </div>
                    ))}
                  </div>
      
                  {/* Grid 3 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full mt-6">
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px] relative">
                      <div className="absolute top-[-1px] left-[27px] w-[32px] h-[3px] bg-[#e0402f] rounded-b-[2px]" />
                      <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#e0402f] text-[18px]">
                        §
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Materiality</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                        Approved facts, inputs and questions are presented. Authorized humans decide. Neither the platform nor AI declares legal or Board materiality, and no risk report determines reportability or penalty exposure.
                      </p>
                    </div>
      
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px] relative">
                      <div className="absolute top-[-1px] left-[27px] w-[32px] h-[3px] bg-[#d97706] rounded-b-[2px]" />
                      <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#d97706] text-[18px]">
                        ≠
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Causality and root cause</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                        Correlation or sequence is not cause. A causal conclusion needs a method and authority behind it; root cause needs an authoritative investigation, not a detection correlation that reads suggestively.
                      </p>
                    </div>
      
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px] relative">
                      <div className="absolute top-[-1px] left-[27px] w-[32px] h-[3px] bg-[#4f46e5] rounded-b-[2px]" />
                      <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#4f46e5] text-[18px]">
                        ≅
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Probability and forecast</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                        A likelihood requires an approved predictive model with calibration, population, horizon and limitations. A scenario is clearly hypothetical and assumption-bound &mdash; and stays labelled as one, not quietly upgraded to a prediction.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </section>

    </>
  );
}

import React from "react";

export function EvidenceInventorySection() {
  return (
    <>
              {/* Section 04: EVIDENCE INVENTORY */}
              <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Evidence inventory
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                      More evidence is not automatically better evidence.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#5c6b79] m-0">
                        Readiness depends on relevance, scope, provenance, currency, completeness and reviewer judgment — not on artifact count. The inventory is built to preserve uncertainty rather than to maximize volume.
                      </p>
                    </div>
                  </div>
      
                  {/* Table */}
                  <div className="w-full flex flex-col overflow-x-auto rounded-[6px] border border-[#e1ddd8]">
                    <div className="min-w-[700px]">
                      <div className="grid grid-cols-[200px_minmax(250px,1fr)_minmax(250px,1fr)] bg-[#f4f5f7] border-b border-[#e1ddd8]">
                        <div className="px-[24px] py-[16px] font-sans font-semibold text-[13px] text-[#0b2237] uppercase tracking-[0.5px]">Field</div>
                        <div className="px-[24px] py-[16px] font-sans font-semibold text-[13px] text-[#0b2237] uppercase tracking-[0.5px] border-l border-[#e1ddd8]">What it records</div>
                        <div className="px-[24px] py-[16px] font-sans font-semibold text-[13px] text-[#0b2237] uppercase tracking-[0.5px] border-l border-[#e1ddd8]">Why it can't be collapsed</div>
                      </div>
      
                      {[
                        ["observed / captured / reviewed", "Three semantically distinct timestamps.", "When something happened, when it was collected, and when a person last looked at it are different facts."],
                        ["lineage", "Source → transformation → package or review relationships, where permitted.", "A transformed artifact is not the original observation."],
                        ["completeness", "Complete, partial, missing or unknown.", "Partial coverage presented as coverage is the most common preparation failure."],
                        ["freshness", "Defined age and review semantics for the applicable rule.", "No invented SLA. Age only means something against a stated rule."],
                        ["integrity", "Verification method, version and result where approved.", "Verification is a technical fact, not a judgment about sufficiency."],
                        ["access state", "Available, restricted, expired, revoked or unknown.", "A reference a reviewer cannot open is not usable evidence."],
                        ["sensitivity", "Classification and handling requirements.", "Handling obligations travel with the artifact into every package."],
                        ["limitations", "Known gaps, sampling basis, unavailable sources, ambiguity.", "These are the first things a reviewer asks about."],
                        ["correction", "Prior evidence remains traceable to its replacement.", "A superseded artifact still explains a decision made at the time."]
                      ].map(([field, what, why], i) => (
                        <div key={i} className="grid grid-cols-[200px_minmax(250px,1fr)_minmax(250px,1fr)] border-b border-[#e1ddd8] bg-white hover:bg-gray-50 transition-colors last:border-b-0">
                          <div className="px-[24px] py-[16px] flex flex-col justify-center">
                            <p className="font-mono text-[#e0402f] text-[13.5px] leading-[20px] m-0">{field}</p>
                          </div>
                          <div className="px-[24px] py-[16px] flex flex-col justify-center border-l border-[#e1ddd8]">
                            <p className="font-sans font-medium text-[#0b2237] text-[14px] leading-[22px] m-0">{what}</p>
                          </div>
                          <div className="px-[24px] py-[16px] flex flex-col justify-center border-l border-[#e1ddd8]">
                            <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">{why}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  {/* Grid 2 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full mt-6">
                    {/* Card 1 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between relative">
                      <div className="flex flex-col gap-[16px]">
                        <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#0b2237] text-[18px] font-mono border border-[#e1ddd8]">
                          {">"}
                        </div>
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Sample, population, or unknown subset</h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                          Where evidence represents a sample, the population and the basis of selection are stated. Where the subset is unknown, that is said plainly rather than presented as comprehensive coverage.
                        </p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0 mt-2">
                          Whether a sample is sufficient is a professional judgment belonging to the reviewer. The page exposes the population and sample facts; it does not conclude on sufficiency.
                        </p>
                      </div>
                    </div>
      
                    {/* Card 2 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between relative">
                      <div className="flex flex-col gap-[16px]">
                        <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#0b2237] text-[18px] font-mono border border-[#e1ddd8]">
                          {">"}
                        </div>
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Period truth vs current truth</h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                          Audits are period- and version-sensitive. Today's taxonomy, mapping or control state never retroactively restates what existed during the review period — the historical basis is preserved alongside it.
                        </p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0 mt-2">
                          “Current” and “as of period end” are separate contexts. Evidence received after a cutoff is marked as late, not quietly folded into the period.
                        </p>
                      </div>
                      <div className="mt-6 pt-[16px] border-t border-[#e1ddd8]">
                        <p className="font-sans font-bold text-[#0b2237] text-[12px] uppercase tracking-[1px] mb-2">Snapshots</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          A freeze or snapshot is only described where the capability exists — and a snapshot does not imply immutability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

    </>
  );
}

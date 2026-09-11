import React from "react";

export function ControlsSection() {
  return (
    <>
              {/* Section 03: CONTROLS / MAPPINGS / TESTS */}
              <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Controls, mappings and tests
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                      Three different records, kept separate on purpose.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#5c6b79] m-0">
                        A test result is evidence for review. An assessment is attributable judgment. Neither becomes an external reviewer's conclusion just because it appears in a readiness workspace.
                      </p>
                    </div>
                  </div>
      
                  {/* Grid 3 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full">
                    {/* Card 1 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between h-full relative">
                      <div className="flex flex-col gap-[16px]">
                        <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#fcfbfa] rounded-[6px] text-[#e0402f] text-[16px] font-mono border border-[#e1ddd8]">
                          01
                        </div>
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Control inventory</h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                          Summarized here; owned by the Compliance Control Plane. Each control carries its applicability basis, owner, version and the period its state refers to.
                        </p>
                      </div>
                      <div className="mt-6 pt-[16px] border-t border-[#e1ddd8]">
                        <p className="font-sans font-bold text-[#0b2237] text-[12px] uppercase tracking-[1px] mb-2">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          Applicability is a customer or legal determination — never inferred from website behaviour.
                        </p>
                      </div>
                    </div>
      
                    {/* Card 2 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between h-full relative">
                      <div className="flex flex-col gap-[16px]">
                        <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#fcfbfa] rounded-[6px] text-[#e0402f] text-[16px] font-mono border border-[#e1ddd8]">
                          02
                        </div>
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Mappings</h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                          Framework or standard references with their edition, relationship type and scope. Mapping limitations — partial, contextual, not equivalent, unknown — stay visible alongside the mapping itself.
                        </p>
                      </div>
                      <div className="mt-6 pt-[16px] border-t border-[#e1ddd8]">
                        <p className="font-sans font-bold text-[#0b2237] text-[12px] uppercase tracking-[1px] mb-2">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          No logo wall. Mapped controls do not mean every requirement is satisfied.
                        </p>
                      </div>
                    </div>
      
                    {/* Card 3 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between h-full relative">
                      <div className="flex flex-col gap-[16px]">
                        <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#fcfbfa] rounded-[6px] text-[#e0402f] text-[16px] font-mono border border-[#e1ddd8]">
                          03
                        </div>
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Tests and assessments</h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                          Method and version, population and period, evidence inputs, execution state, result and limitations for a test. Reviewer, basis, conclusion state and open questions for an assessment.
                        </p>
                      </div>
                      <div className="mt-6 pt-[16px] border-t border-[#e1ddd8]">
                        <p className="font-sans font-bold text-[#0b2237] text-[12px] uppercase tracking-[1px] mb-2">Boundary</p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                          Missing, stale or blocked inputs stay visible rather than being coerced into pass or fail.
                        </p>
                      </div>
                    </div>
                  </div>
      
                  {/* Bottom Callout */}
                  <div className="bg-white border border-[#e1ddd8] border-l-[3px] border-l-[#e0402f] rounded-[6px] p-[24px] md:p-[32px] w-full">
                    <h3 className="font-sans font-bold text-[#0b2237] text-[15px] mb-2">Certification is a separate fact with a separate issuer</h3>
                    <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0 max-w-[1060px]">
                      Framework and regulatory references are context for scope and mapping. A certification or attestation requires a certification body, a current certificate, a stated scope and effective dates — held by that issuer, not asserted here. Where framework detail matters, it routes to the Framework Coverage authority rather than being restated.
                    </p>
                  </div>
                </div>
              </section>

    </>
  );
}

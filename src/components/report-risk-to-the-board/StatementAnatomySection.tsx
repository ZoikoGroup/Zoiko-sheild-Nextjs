import React from "react";

export function StatementAnatomySection() {
  return (
    <>
              <section className="bg-[#eeebe7] w-full py-[60px] md:py-[84px] relative border-t border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
                  
                  {/* Eyebrow */}
                  <div className="relative w-full h-[17.59px]">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                    <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Executive statement anatomy
                      </p>
                    </div>
                  </div>
      
                  {/* Headline */}
                  <div className="flex flex-col pt-[2.81px] relative w-full">
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                      The unit of Board reporting is a statement, not a chart.
                    </h2>
                  </div>
      
                  {/* Lede */}
                  <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
                    <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                      An accountable assertion, with a traceable basis, its current limitations, a decision<br />
                      question where one exists, and a named owner for follow-through. Here is one, taken<br />
                      apart.
                    </p>
                  </div>
      
                  {/* Anatomy Card */}
                  <div className="bg-white border border-[#e1ddd8] border-solid rounded-[6px] overflow-hidden relative w-full mt-8 flex flex-col">
                    
                    {/* Card Top / Header */}
                    <div className="bg-[#eeebe7] border-b border-[#e1ddd8] border-solid p-[26px] flex flex-col gap-[13.2px]">
                      <div className="flex flex-wrap justify-between items-start w-full">
                        <span className="font-mono font-normal text-[#6b7c8c] text-[10.5px] tracking-[1.05px] leading-[16.8px]">
                          statement_id Â· ST-2214 Â· report R-2026Q3 Â· v3 (synthetic)
                        </span>
                        <span className="font-mono font-normal text-[#6b7c8c] text-[10.5px] tracking-[1.05px] leading-[16.8px]">
                          as-of 04 Aug 2026 Â· period 01 May â€“ 31 Jul 2026 Â· UTC
                        </span>
                      </div>
                      
                      <div className="max-w-[877.95px]">
                        <p className="font-sans font-bold text-[#0b2237] text-[21px] tracking-[-0.378px] leading-[28.35px] m-0">
                          Privileged access to payment-processing systems is now evidenced for the current<br />
                          period, with two open items and one unresolved source conflict.
                        </p>
                      </div>
      
                      {/* Chips */}
                      <div className="flex flex-wrap gap-[8px] mt-[10px]">
                        <span className="bg-white border border-[#e1ddd8] rounded-full py-[4px] px-[12px] flex items-center gap-[6px]">
                          <span className="w-[6px] h-[6px] rounded-sm bg-[#5c6b79]/55"></span>
                          <span className="font-mono font-normal text-[#5c6b79] text-[11px] tracking-[0.99px] uppercase leading-[17.6px]">Audience: Board risk committee</span>
                        </span>
                        <span className="bg-white border border-[#e1ddd8] rounded-full py-[4px] px-[12px] flex items-center gap-[6px]">
                          <span className="w-[6px] h-[6px] rounded-sm bg-[#5c6b79]/55"></span>
                          <span className="font-mono font-normal text-[#5c6b79] text-[11px] tracking-[0.99px] uppercase leading-[17.6px]">Scope: payment processing, EU-West + US-East</span>
                        </span>
                        <span className="bg-white border border-[#e1ddd8] rounded-full py-[4px] px-[12px] flex items-center gap-[6px]">
                          <span className="w-[6px] h-[6px] rounded-sm bg-[#5c6b79]/55"></span>
                          <span className="font-mono font-normal text-[#5c6b79] text-[11px] tracking-[0.99px] uppercase leading-[17.6px]">Excluded: acquired entities, dev environments</span>
                        </span>
                        <span className="bg-[#fcf6ea] border border-[#e8d6b4] rounded-full py-[4px] px-[12px] flex items-center gap-[6px]">
                          <span className="w-[6px] h-[6px] rounded-sm bg-[#b8791c]/55"></span>
                          <span className="font-mono font-normal text-[#b8791c] text-[11px] tracking-[0.99px] uppercase leading-[17.6px]">Evidence: partial</span>
                        </span>
                      </div>
                    </div>
      
                    {/* Three Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full items-stretch">
                      
                      {/* Column 1: Basis */}
                      <div className="border-b md:border-b-0 md:border-r border-[#e1ddd8] p-[24px] pb-[64.5px] flex flex-col gap-[14px]">
                        <p className="font-mono font-semibold text-[#5c6b79] text-[10px] tracking-[1.3px] uppercase leading-[16px] m-0">Basis</p>
                        <ul className="flex flex-col w-full list-none p-0 m-0">
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Risk record</span>
                              <span className="text-[#5c6b79]"> &mdash; RV-4471, held by Risk Intelligence.</span><br />
                              <span className="text-[#5c6b79]">Method and version are theirs, not restated here.</span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Evidence set</span>
                              <span className="text-[#5c6b79]"> &mdash; ES-4471-a, five source objects</span><br />
                              <span className="text-[#5c6b79]">with mixed states.</span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Prior comparable</span>
                              <span className="text-[#5c6b79]"> &mdash; ST-2118 (Q2), same scope,</span><br />
                              <span className="text-[#5c6b79]">method v1.2.</span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Assumptions</span>
                              <span className="text-[#5c6b79]"> &mdash; the identity provider&apos;s export is</span><br />
                              <span className="text-[#5c6b79]">complete for in-scope systems; role definitions</span><br />
                              <span className="text-[#5c6b79]">were stable across the period.</span>
                            </p>
                          </li>
                          <li className="py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Verification</span>
                              <span className="text-[#5c6b79]"> &mdash; evidence integrity verified in the</span><br />
                              <span className="text-[#5c6b79]">ledger, within its stated scope.</span>
                            </p>
                          </li>
                        </ul>
                      </div>
      
                      {/* Column 2: Limitations */}
                      <div className="bg-[#fcf9f4] border-b md:border-b-0 md:border-r border-[#e1ddd8] p-[24px] pb-[50.5px] flex flex-col gap-[14px]">
                        <p className="font-mono font-semibold text-[#95610f] text-[10px] tracking-[1.3px] uppercase leading-[16px] m-0">Limitations carried to the summary</p>
                        <ul className="flex flex-col w-full list-none p-0 m-0">
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px] relative">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Stale</span>
                              <span className="text-[#5c6b79]"> &mdash; the quarterly access review record sits</span><br />
                              <span className="text-[#5c6b79]">outside the method&apos;s freshness window.</span>
                            </p>
                            <span className="inline-flex mt-1 items-center gap-[4px] bg-[#fcf6ea] border border-[#e8d6b4] rounded-[3px] px-[6px] py-[2px]">
                              <span className="font-mono font-bold text-[#95610f] text-[11px] leading-[11px]">â—</span>
                              <span className="font-mono font-semibold text-[#95610f] text-[10.5px] uppercase tracking-[0.945px]">Stale</span>
                            </span>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px] relative">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Missing</span>
                              <span className="text-[#5c6b79]"> &mdash; break-glass attestation absent. Not</span><br />
                              <span className="text-[#5c6b79]">imputed, not assumed benign.</span>
                              <span className="inline-flex ml-2 items-center gap-[4px] border border-dashed border-[#d3cfc9] rounded-[3px] px-[6px] py-[2px]">
                                <span className="font-mono font-semibold text-[#5c6b79] text-[11px] leading-[11px]">&mdash;</span>
                                <span className="font-mono font-semibold text-[#5c6b79] text-[10.5px] uppercase tracking-[0.945px]">Missing</span>
                              </span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px] relative">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Conflicting</span>
                              <span className="text-[#5c6b79]"> &mdash; two current sources disagree on</span><br />
                              <span className="text-[#5c6b79]">role membership.</span>
                              <span className="inline-flex ml-2 items-center gap-[4px] bg-[#fdf2f0] border border-[#f0ccc5] rounded-[3px] px-[6px] py-[2px]">
                                <span className="font-mono font-semibold text-[#a63220] text-[11px] leading-[11px]">âœ•</span>
                                <span className="font-mono font-semibold text-[#a63220] text-[10.5px] uppercase tracking-[0.945px]">Conflict</span>
                              </span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px] relative">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Restricted</span>
                              <span className="text-[#5c6b79]"> &mdash; a third-party listing supports the</span><br />
                              <span className="text-[#5c6b79]">view without being exposed.</span>
                              <span className="inline-flex ml-2 items-center gap-[4px] bg-[#f1f4f7] border border-[#cfd8e0] rounded-[3px] px-[6px] py-[2px]">
                                <span className="font-mono font-bold text-[#42566b] text-[11px] leading-[11px]">â—‘</span>
                                <span className="font-mono font-semibold text-[#42566b] text-[10.5px] uppercase tracking-[0.945px]">Restricted</span>
                              </span>
                            </p>
                          </li>
                          <li className="py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Out of scope</span>
                              <span className="text-[#5c6b79]"> &mdash; acquired entities not yet in the</span><br />
                              <span className="text-[#5c6b79]">reporting population.</span>
                            </p>
                          </li>
                        </ul>
                      </div>
      
                      {/* Column 3: Decision */}
                      <div className="bg-[#fbfaf9] p-[24px] flex flex-col gap-[14px]">
                        <p className="font-mono font-semibold text-[#5c6b79] text-[10px] tracking-[1.3px] uppercase leading-[16px] m-0">Decision and follow-through</p>
                        <ul className="flex flex-col w-full list-none p-0 m-0">
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Decision question</span>
                              <span className="text-[#5c6b79]"> &mdash; do we accept the current</span><br />
                              <span className="text-[#5c6b79]">evidence position for this period, or hold the</span><br />
                              <span className="text-[#5c6b79]">review open until the conflict is resolved?</span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Options</span>
                              <span className="text-[#5c6b79]"> &mdash; accept with the two open items</span><br />
                              <span className="text-[#5c6b79]">recorded Â· hold pending conflict resolution Â·</span><br />
                              <span className="text-[#5c6b79]">request an interim attestation. No option is pre-</span><br />
                              <span className="text-[#5c6b79]">selected.</span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Authority</span>
                              <span className="text-[#5c6b79]"> &mdash; Board risk committee, on the CRO&apos;s</span><br />
                              <span className="text-[#5c6b79]">recommendation.</span>
                            </p>
                          </li>
                          <li className="border-b border-dashed border-[#e1ddd8] py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Conditions</span>
                              <span className="text-[#5c6b79]"> &mdash; acceptance would be conditional on</span><br />
                              <span className="text-[#5c6b79]">the attestation landing before the next review.</span>
                            </p>
                          </li>
                          <li className="py-[9px]">
                            <p className="font-sans text-[13.5px] leading-[20.25px] m-0">
                              <span className="font-semibold text-[#0b2237]">Next review</span>
                              <span className="text-[#5c6b79]"> &mdash; 12 Nov 2026, per the committee&apos;s</span><br />
                              <span className="text-[#5c6b79]">own governed cadence.</span>
                            </p>
                          </li>
                        </ul>
                      </div>
      
                    </div>
      
                    {/* Bottom Certainty Ceiling */}
                    <div className="bg-[#fdf2f0] border-t-2 border-[#e0402f] p-[26px] pb-[22px] flex flex-col gap-[8px]">
                      <p className="font-mono font-semibold text-[#a63220] text-[11px] tracking-[1.43px] uppercase leading-[17.6px] m-0">Certainty ceiling</p>
                      <h4 className="font-sans font-bold text-[#7e2413] text-[16px] tracking-[-0.34px] leading-[18.56px] m-0">This statement is qualified by its weakest material element.</h4>
                      <p className="font-sans text-[#8a4436] text-[13.5px] leading-[21.6px] m-0 mt-1">
                        The ceiling is set by <code className="bg-white border border-[#e8bfb6] rounded-[3px] px-[6px] font-mono text-[12.5px]">stale: quarterly access review record</code> and <code className="bg-white border border-[#e8bfb6] rounded-[3px] px-[6px] font-mono text-[12.5px]">conflict: privileged-role inventory</code>. The summary therefore says &ldquo;evidenced with two<br />
                        open items and one conflict&rdquo; rather than &ldquo;evidenced&rdquo;. Shortening the sentence for a more senior audience does not license removing those qualifiers &mdash; a more senior<br />
                        reader gets the same truth, faster.
                      </p>
                    </div>
      
                  </div>
                </div>
              </section>

    </>
  );
}

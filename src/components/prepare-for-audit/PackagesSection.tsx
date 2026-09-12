import React from "react";

export function PackagesSection() {
  return (
    <>
              {/* Section 07: PACKAGES */}
              <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Evidence packages
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                      A scoped collection for review. Nothing more than that.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#5c6b79] m-0">
                        A package carries its own manifest so a reviewer can see what was included, at which versions, and what was known to be missing at the time it was generated.
                      </p>
                    </div>
                  </div>
      
                  {/* Package Mockup Container */}
                  <div className="w-full bg-[#0b1b26] border border-[#1a2f42] rounded-[6px] overflow-hidden">
                    <div className="p-[24px] border-b border-[#1a2f42] flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[#8a98a5] text-[12px] mb-2">package_id · PK-3307 v2 · generated 12 Aug 2026 14:22 UTC</p>
                        <h3 className="font-sans font-bold text-white text-[20px] m-0">Controls review package — payment platform, Apr–Sep 2026</h3>
                      </div>
                      <div className="bg-[#132838] border border-[#1a2f42] px-3 py-1.5 rounded-full flex items-center gap-2 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8a98a5]" />
                        <span className="font-sans font-medium text-[12px] text-[#8a98a5] uppercase tracking-wider">Synthetic example</span>
                      </div>
                    </div>
      
                    <div className="w-full overflow-x-auto">
                      <div className="min-w-[600px] flex flex-col">
                        {[
                          ["purpose", "Support the reviewer's questions on access and change management for the stated period."],
                          ["scope manifest", "Bound to SC-0912 v4, including its recorded exclusions."],
                          ["source manifest", "61 evidence references with versions and source classes. 4 restricted items included by reference only."],
                          ["control / mapping refs", "34 applicable controls at control set v3.1; mapping edition and relationship type recorded per control."],
                          ["tests / assessments", "Authorized summaries with links to the underlying records and their method versions."],
                          ["exceptions / gaps", "1 active exception, 1 open gap, 1 overdue item — included, not filtered out."],
                          ["completeness", "Partial. Two required evidence classes absent; both named in the manifest."],
                          ["verification context", "Manifest integrity verified at generation, with method, version and timestamp recorded."],
                          ["limitations", "Late-received evidence marked. Sampling basis stated. Subservice organization coverage unresolved."],
                          ["access / retention", "Permissioned to the named reviewer, expiring with their access. Retention per policy reference."]
                        ].map(([key, val], i) => (
                          <div key={i} className="grid grid-cols-[200px_minmax(0,1fr)] border-b border-[#1a2f42] px-[24px] py-[16px] last:border-b-0">
                            <div className="flex items-start">
                              <span className="font-mono text-[#8a98a5] text-[13px]">{key}</span>
                            </div>
                            <div className="flex items-start">
                              <span className="font-sans font-normal text-[#a4b4c4] text-[14px] leading-[22px]">{val}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-[24px] bg-[#2d1111] border-t border-[#e0402f]">
                      <p className="font-mono font-semibold text-[#e0402f] text-[12px] uppercase tracking-widest mb-2">Labels this package does not carry</p>
                      <p className="font-sans font-normal text-white text-[14px] mb-4">
                        Each of these requires an issuer authority, an applicable standard, a stated scope and a defined legal meaning that a preparation package simply does not have.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["audit-report", "attestation", "certificate", "opinion", "regulatory-evidence", "auditor-approved", "certified-audit-pack"].map((label, i) => (
                          <span key={i} className="border border-[#e0402f] rounded-[4px] px-[12px] py-[6px] font-mono text-[#e0402f] text-[12px]">
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
      
                  {/* Grid 3 Cards - Verification */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full mt-6">
                    {/* Card 1 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                      <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#fcfbfa] rounded-[6px] text-[#e0402f] text-[18px] font-mono border border-[#e1ddd8]">
                        ◈
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">What verification establishes</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                        That the manifest is intact and the included references match their governed sources, under a named method and version, at a recorded time. Success, failure or unknown — each reported as such.
                      </p>
                    </div>
      
                    {/* Card 2 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                      <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#fcfbfa] rounded-[6px] text-[#e0402f] text-[18px] font-mono border border-[#e1ddd8]">
                        ≠
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">What it doesn&apos;t</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                        Completeness, truth, relevance, sufficiency, legal effect, or reviewer acceptance. Verification does not invent completeness — it reports what is known to be missing.
                      </p>
                    </div>
      
                    {/* Card 3 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                      <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#fcfbfa] rounded-[6px] text-[#e0402f] text-[18px] font-mono border border-[#e1ddd8]">
                        ⇄
                      </div>
                      <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Correction and expiry</h3>
                      <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                        A correction issues a replacement version and preserves the prior package with its reason. Evidence that expires stays visibly expired — a package does not freeze freshness semantics forever.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

    </>
  );
}

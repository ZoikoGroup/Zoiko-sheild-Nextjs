import React from "react";

export function NextStepsSection() {
  return (
    <>
              {/* Section 09: WHERE TO GO NEXT */}
              <section className="bg-zoiko-dark w-full py-[60px] md:py-[84px] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Where to go next
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-white m-0">
                      Independent products and services. No prerequisites.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#8a98a5] m-0">
                        This page explains the audit-preparation job and links to the canonical authority for each part of it. Nothing here is bundled, and nothing is required in order to use the rest.
                      </p>
                    </div>
                  </div>
      
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full">
                    {[
                      { title: "Compliance Control Plane", desc: "The product authority for controls, mappings, tests, assessments, exceptions and the audit workspace itself. This page summarizes; that route defines." },
                      { title: "Evidence Ledger & Verification", desc: "Evidence identity, lineage, completeness, verification and packages. Where the drill-down lands, and whose vocabulary this page uses without broadening it." },
                      { title: "Continuous Assurance", desc: "An independent service that can support ongoing control and evidence assurance, including audit readiness. It is not a prerequisite for anything on this page.", isDev: true },
                      { title: "vCISO & Advisory", desc: "Governance support and evidence-linked advisory within the advisory role. An advisor does not become a statutory auditor or your legal adviser by implication.", isBeta: true },
                      { title: "Framework Coverage", desc: "The authority for which program alignments are current. Framework questions route there rather than being answered with a logo here.", isConditional: true },
                      { title: "Trust Center", desc: "Current security, privacy, subprocessor and entity truth for your own diligence. Marketing never overrides what those disclosures say." }
                    ].map((item, i) => (
                      <div key={i} className="bg-[#0b1b26] border border-[#1a2f42] rounded-[6px] p-[32px] flex flex-col justify-between items-start transition-colors hover:bg-[#132838]">
                        <div className="flex flex-col gap-[12px] mb-[32px] w-full">
                          <div className="flex flex-wrap items-center gap-[8px]">
                            <h3 className="font-sans font-bold text-white text-[18px] m-0">{item.title}</h3>
                            {item.isDev && <span className="bg-[#064e3b] text-[#6ee7b7] font-mono font-semibold text-[9px] uppercase px-[6px] py-[2px] rounded-[3px] tracking-wider">▶ DEVELOPMENT</span>}
                            {item.isBeta && <span className="bg-white text-[#0b2237] font-mono font-semibold text-[9px] uppercase px-[6px] py-[2px] rounded-[3px] tracking-wider">▶ BETA. PUBLIC</span>}
                            {item.isConditional && <span className="bg-white text-[#0b2237] font-mono font-semibold text-[9px] uppercase px-[6px] py-[2px] rounded-[3px] tracking-wider">▶ CONDITIONAL</span>}
                          </div>
                          <p className="font-sans font-normal text-[#8a98a5] text-[14px] leading-[22px] m-0">{item.desc}</p>
                        </div>
                        <button className="bg-transparent border border-white/20 text-white font-mono text-[13px] px-[16px] py-[8px] rounded-[4px] hover:bg-white/5 transition-colors">
                          Open →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

    </>
  );
}

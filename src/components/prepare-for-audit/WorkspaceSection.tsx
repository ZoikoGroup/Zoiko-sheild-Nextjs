import React from "react";

export function WorkspaceSection() {
  return (
    <>
              {/* Section 06: WORKSPACE + SEMANTIC LADDER */}
              <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Reviewer workspace
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                      Eight words that all look like a tick.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#5c6b79] m-0">
                        Reviewed, acknowledged, accepted, approved, verified, closed, sufficient, compliant. Collapsing them into one check mark is how a preparation workspace starts implying an outcome it cannot deliver. So they are kept apart, each with its own meaning.
                      </p>
                    </div>
                  </div>
      
                  {/* Table */}
                  <div className="w-full flex flex-col overflow-x-auto rounded-[6px] border border-[#e1ddd8]">
                    <div className="min-w-[700px]">
                      <div className="grid grid-cols-[60px_150px_minmax(250px,1fr)_minmax(250px,1fr)] bg-[#0b2237]">
                        <div className="px-[16px] py-[16px] font-mono font-semibold text-[12px] text-white uppercase tracking-[0.05em]">Mark</div>
                        <div className="px-[16px] py-[16px] font-mono font-semibold text-[12px] text-white uppercase tracking-[0.05em] border-l border-white/20">Word</div>
                        <div className="px-[16px] py-[16px] font-mono font-semibold text-[12px] text-white uppercase tracking-[0.05em] border-l border-white/20">What it means</div>
                        <div className="px-[16px] py-[16px] font-mono font-semibold text-[12px] text-white uppercase tracking-[0.05em] border-l border-white/20">What it does not mean</div>
                      </div>
      
                      {[
                        ["◔", "reviewed", "A named role looked at the record, on a recorded date.", "That they agreed with it, or that anything was concluded.", false],
                        ["◷", "acknowledged", "Received and seen. Nothing more, unless separately defined.", "Agreement, acceptance or any assessment of adequacy.", false],
                        ["◑", "accepted", "Used only with an exact authorized semantic meaning behind it.", "Auditor reliance, sufficiency, or an external conclusion.", false],
                        ["◐", "approved", "An attributable decision by a role with the authority to make it.", "Approval by anyone outside the stated authority — and never inferred from inactivity.", false],
                        ["◈", "verified", "Defined technical facts about identity or integrity, within a stated scope.", "That the content is true, complete, relevant or sufficient.", false],
                        ["◇", "closed", "A workflow state, with a recorded basis and actor.", "External acceptance, or that the underlying issue is resolved.", false],
                        ["✕", "sufficient", "Not asserted here at all.", "Sufficiency is a professional judgment belonging to the reviewer.", true],
                        ["✕", "compliant", "Not asserted here at all.", "Legal applicability and compliance conclusions belong to qualified authority.", true]
                      ].map(([mark, word, yes, no, isRed], i) => (
                        <div key={i} className={`grid grid-cols-[60px_150px_minmax(250px,1fr)_minmax(250px,1fr)] border-b border-[#e1ddd8] last:border-b-0 ${isRed ? 'bg-[#fffaf9]' : (i % 2 === 0 ? 'bg-[#fcfbfa]' : 'bg-white')} transition-colors`}>
                          <div className="px-[16px] py-[16px] flex items-center justify-center border-l border-[#e1ddd8]">
                            <span className={`text-[18px] ${isRed ? 'text-[#e0402f]' : 'text-[#0b2237]'}`}>{mark}</span>
                          </div>
                          <div className="px-[16px] py-[16px] flex items-center border-l border-[#e1ddd8]">
                            <span className="font-mono text-[#0b2237] text-[13.5px]">{word}</span>
                          </div>
                          <div className="px-[16px] py-[16px] flex items-center border-l border-[#e1ddd8]">
                            <span className="font-sans font-normal text-[#0b2237] text-[14px] leading-[22px]">{yes}</span>
                          </div>
                          <div className="px-[16px] py-[16px] flex items-center border-l border-r border-[#e1ddd8]">
                            <span className={`font-sans font-normal text-[14px] leading-[22px] ${isRed ? 'text-[#e0402f]' : 'text-[#a85c32]'}`}>{no}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  {/* Note */}
                  <div className="mt-2 flex items-start gap-2">
                    <span className="font-sans font-normal text-[#e0402f] text-[15px] leading-[24px] shrink-0">—</span>
                    <p className="font-sans font-normal text-[15px] leading-[24px] text-[#5c6b79] m-0">
                      Requests, responses, clarifications, notes and decisions are also distinct records. A note is never silently elevated into a decision, corrections keep the original wording traceable, and marking a request complete does not make the response adequate.
                    </p>
                  </div>
      
                  {/* Grid 2 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full mt-6">
                    {/* Card 1 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between relative">
                      <div className="flex flex-col gap-[16px]">
                        <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#0b2237] text-[18px]">
                          ⚿
                        </div>
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">External access is a trust relationship, not a share link</h3>
                        <div className="flex flex-col w-full m-0">
                          <div className="flex items-start border-b border-[#e1ddd8] py-[16px] first:pt-0">
                            <span className="font-mono text-[#e0402f] text-[15px] mr-[12px] leading-[24px] shrink-0">□</span>
                            <span className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px]"><strong className="text-[#0b2237]">Verified identity</strong> for the person and organization, through the approved access process.</span>
                          </div>
                          <div className="flex items-start border-b border-[#e1ddd8] py-[16px]">
                            <span className="font-mono text-[#e0402f] text-[15px] mr-[12px] leading-[24px] shrink-0">□</span>
                            <span className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px]"><strong className="text-[#0b2237]">Exact scope</strong> — workspace, program, controls, evidence and period. No inherited admin.</span>
                          </div>
                          <div className="flex items-start border-b border-[#e1ddd8] py-[16px]">
                            <span className="font-mono text-[#e0402f] text-[15px] mr-[12px] leading-[24px] shrink-0">□</span>
                            <span className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px]"><strong className="text-[#0b2237]">Time-limited</strong> with a renewal process, and immediate revocation with downstream session handling.</span>
                          </div>
                          <div className="flex items-start border-b border-[#e1ddd8] py-[16px]">
                            <span className="font-mono text-[#e0402f] text-[15px] mr-[12px] leading-[24px] shrink-0">□</span>
                            <span className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px]"><strong className="text-[#0b2237]">Attributable logging</strong> of invite, accept, access, download, comment and revoke.</span>
                          </div>
                          <div className="flex items-start py-[16px]">
                            <span className="font-mono text-[#e0402f] text-[15px] mr-[12px] leading-[24px] shrink-0">□</span>
                            <span className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px]"><strong className="text-[#0b2237]">Role labels used accurately</strong> — reviewer, assessor, auditor, regulator or certifier only where each is true.</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-[16px] border-t border-[#e1ddd8]">
                        <p className="font-mono font-semibold text-[#0b2237] text-[12px] uppercase tracking-widest mb-2">Least-privilege law</p>
                        <p className="font-mono font-normal text-[#5c6b79] text-[13.5px] leading-[22px] m-0">
                          A reviewer's presence does not imply endorsement, independence, reliance or acceptance.
                        </p>
                      </div>
                    </div>
      
                    {/* Card 2 */}
                    <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between relative">
                      <div className="flex flex-col gap-[16px]">
                        <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#0b2237] text-[18px]">
                          ◧
                        </div>
                        <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">What the public page will not become</h3>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                          This is not an intake channel for sensitive material. Evidence uploads, confidential architecture and audit detail do not belong in a demo form — public intake is high-level routing only.
                        </p>
                        <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0 mt-2">
                          Reviewer identities and personal details never reach marketing analytics, and the workspace capability itself stays described as conditional until the access model and reviewer semantics are operationally verified.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

    </>
  );
}

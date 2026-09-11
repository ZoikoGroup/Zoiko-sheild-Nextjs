import React from "react";

export function GapsSection() {
  return (
    <>
              {/* Section 05: GAPS */}
              <section className="bg-zoiko-dark w-full py-[60px] md:py-[84px] relative border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
                  <div className="flex flex-col gap-[15.2px]">
                    <div className="flex items-center gap-3">
                      <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                      <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                        Gaps and open questions
                      </p>
                    </div>
                    <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-white m-0">
                      Nothing is suppressed to improve a readiness figure.
                    </h2>
                    <div className="max-w-[686px]">
                      <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#8a98a5] m-0">
                        Preparation is only credible when unresolved work stays visible and attributable. Unknown is a valid state; silence is not.
                      </p>
                    </div>
                  </div>
      
                  <div className="w-full border border-white/10 rounded-[6px] bg-white/5 flex flex-col overflow-x-auto">
                    <div className="min-w-[700px]">
                      {[
                        ["Gap", "Change-management evidence unavailable for two months of the period", "The source system was migrated mid-period and the prior tooling's export is no longer accessible. Affects 4 controls in scope.", "Platform engineering open · 22 days"],
                        ["Exception", "Approved exception to quarterly review cadence for one low-volume system", "Compensating context recorded. Approved by the control owner's authority, expires 31 Dec 2026, renewal review scheduled.", "Compliance ops active · expiring"],
                        ["Open question", "Does the subservice organization's own report cover the period end?", "Raised during preparation. Requires the provider's current report; the evidence needed is identified but not yet held.", "Vendor risk awaiting evidence"],
                        ["Remediation", "Re-run access recertification for the identity provider", "Action owned, due 19 Sep 2026, dependent on the role-inventory discrepancy being settled first. Evidence of completion defined in advance.", "Identity operations blocked · dependency"],
                        ["Overdue", "Vendor security questionnaire refresh", "Past its due date. Stays visibly overdue with an escalation route — there is no auto-close and no silent deadline reset.", "Vendor risk overdue · 9 days"]
                      ].map(([type, title, desc, status], i) => (
                        <div key={i} className="grid grid-cols-[150px_minmax(0,1fr)_200px] border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors">
                          <div className="p-[20px] flex items-start">
                            <span className="font-sans font-semibold text-[13px] text-[#8a98a5]">{type}</span>
                          </div>
                          <div className="p-[20px] flex flex-col gap-1 border-l border-white/10">
                            <span className="font-sans font-bold text-[15px] text-white">{title}</span>
                            <span className="font-sans font-normal text-[14px] text-[#8a98a5]">{desc}</span>
                          </div>
                          <div className="p-[20px] flex items-start border-l border-white/10">
                            <span className="font-sans font-medium text-[13px] text-[#8a98a5]">{status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  {/* Grid 2 Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full mt-6">
                    <div className="bg-white/5 border border-white/10 rounded-[6px] p-[27px] flex flex-col justify-between relative">
                      <div className="flex flex-col gap-[16px]">
                        <h3 className="font-sans font-bold text-white text-[18px] m-0">Eleven readiness states, none of them a grade</h3>
                        <ul className="list-disc pl-5 m-0 font-sans font-normal text-[#8a98a5] text-[15px] leading-[24px] flex flex-col gap-2">
                          <li>Not scoped · In preparation · Evidence incomplete — work known, no conclusion drawn.</li>
                          <li>Review pending — the basis is assembled; authorized review has not happened.</li>
                          <li>Gap open · Exception active — an exception is a governed state, not a pass.</li>
                          <li>Ready for review — used only where the internal criteria for it are formally governed.</li>
                          <li>Reviewer questions open · Superseded · Unknown or degraded.</li>
                        </ul>
                      </div>
                      <div className="mt-6 pt-[16px] border-t border-white/10">
                        <p className="font-sans font-bold text-[#8a98a5] text-[12px] uppercase tracking-[1px] mb-2">Colour law</p>
                        <p className="font-sans font-normal text-[#8a98a5] text-[14px] leading-[22px] m-0">
                          No single green state may hide stale evidence, open exceptions, unknowns or reviewer questions. Text definition, scope, basis, owner and effective time are required alongside it.
                        </p>
                      </div>
                    </div>
      
                    <div className="bg-white/5 border border-white/10 rounded-[6px] p-[27px] flex flex-col relative">
                      <div className="flex flex-col gap-[16px]">
                        <h3 className="font-sans font-bold text-white text-[18px] m-0">Words that are not available by default</h3>
                        <p className="font-sans font-normal text-[#8a98a5] text-[15px] leading-[24px] m-0">
                          Accepted risk is only used where an authorized risk owner and process exist — never inferred from the presence of an exception. Waiver is not used at all unless its exact policy and legal meaning are defined.
                        </p>
                        <p className="font-sans font-normal text-[#8a98a5] text-[15px] leading-[24px] m-0 mt-2">
                          Closure records its basis, its approver and its supporting evidence, and preserves the prior open state. Closing an item is not the same as resolving what it was about.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

    </>
  );
}

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrepareForAuditPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative overflow-x-hidden">
      <Navbar />

      <main className="flex-grow w-full">
        {/* Section 01: HERO */}
        <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-y-12 lg:gap-[52px] items-start">
            <div className="flex flex-col gap-[11.2px] relative pt-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  Prepare for audits
                </p>
              </div>
              
              {/* Headline */}
              <div className="flex flex-col pt-[5.975px] relative w-full">
                <h1 className="font-sans font-bold leading-[1.15] text-[36px] sm:text-[40px] md:text-[48px] tracking-[-1.008px] text-[#0b2237] m-0">
                  Prepare evidence for review without hiding gaps or limitations.
                </h1>
              </div>
              
              {/* Lede */}
              <div className="flex flex-col font-sans font-normal justify-center max-w-[585px] pt-[3.985px]">
                <p className="text-[16px] sm:text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                  Organize audit scope, controls, evidence, open gaps, reviewer requests and governed packages so teams can prepare for review with source, version and limitations intact.
                </p>
              </div>
              
              {/* Buttons Row */}
              <div className="flex flex-wrap gap-[12px] items-start pt-[16.8px] relative w-full">
                <div className="bg-[#e0402f] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-red-600 transition-colors">
                  <span className="font-sans font-semibold text-white text-[14px] leading-[22.4px] whitespace-nowrap">
                    Book a Demo
                  </span>
                </div>
                <div className="border border-[#e1ddd8] bg-transparent flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                    Explore Compliance Control Plane
                  </span>
                </div>
                <div className="border border-[#e1ddd8] bg-transparent flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                    See how Evidence works
                  </span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#e1ddd8] max-w-[585px]">
                <p className="font-sans font-normal text-[14px] leading-[22.4px] text-[#8a98a5] m-0">
                  Audit preparation does not guarantee auditor reliance, acceptance, certification, regulator approval, legal compliance or a favourable audit outcome.
                </p>
              </div>
            </div>
            {/* Right Column / Graphic Space */}
            <div className="w-full flex items-center justify-center relative rounded-[12px] overflow-hidden">
              <Image 
                src="/images/aside.dims.png" 
                alt="Prepare evidence graphic" 
                width={1086} 
                height={1448} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Section 02: SCOPE */}
        <section className="bg-white w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[42px] relative w-full">
            <div className="flex flex-col gap-[15.2px]">
              <div className="flex items-center gap-3">
                <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  Scope before readiness
                </p>
              </div>
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                A package without a scope manifest is not audit readiness.
              </h2>
              <div className="max-w-[686px]">
                <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#5c6b79] m-0">
                  Every preparation view starts with the scope being prepared for — never a universal organization-wide claim. Exclusions are visible here, not buried in fine print. Values below are synthetic.
                </p>
              </div>
            </div>
            {/* Manifest Mockup Image */}
            <div className="w-full border border-[#e1ddd8] rounded-[6px] flex items-center justify-center overflow-hidden bg-white">
               <Image 
                src="/images/div.manifest.png" 
                alt="Manifest Interface mockup" 
                width={1448} 
                height={1086} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

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

        {/* Section 10: FAQ */}
        <section className="bg-zoiko-beige w-full py-[60px] md:py-[100px] relative border-b border-[#e1ddd8]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[48px] relative w-full">
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[22px] h-[1px] bg-[#e0402f] shrink-0" />
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase m-0 leading-none">
                  Direct answers
                </p>
              </div>
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-[#0b2237] m-0">
                The boundary first, then the answer.
              </h2>
            </div>

            <div className="flex flex-col w-full">
              <div className="border-t border-b border-[#e1ddd8] py-[28px] sm:py-[32px] flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h3 className="font-sans font-bold text-[#0b2237] text-[16px] mb-[12px] m-0">What does Prepare for Audits actually do?</h3>
                  <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0">
                    It explains how audit scope, controls, evidence, gaps, reviewer requests, packages and known limitations can be organized for review using governed records — so that preparation work is respectable rather than assumed.
                  </p>
                </div>
                <span className="font-mono text-[#e0402f] text-[20px] leading-none mt-1 shrink-0">—</span>
              </div>
              {[
                "Do you guarantee we'll pass an audit?",
                "What is an evidence package?",
                "Does a verified package prove compliance?",
                "Can an external auditor use a workspace?",
                "If the workspace shows everything complete, has the auditor accepted it?",
                "How are gaps handled?",
                "Which frameworks are supported?",
                "Do you decide materiality or audit risk?",
                "Is Continuous Assurance required?",
                "Can AI answer audit questions for us?",
                "How is sensitive evidence protected?"
              ].map((question, i) => (
                <div key={i} className="border-b border-[#e1ddd8] py-[20px] sm:py-[24px] flex justify-between items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <h3 className="font-sans font-bold text-[#0b2237] text-[15px] sm:text-[16px] m-0">{question}</h3>
                  <span className="font-mono text-[#e0402f] text-[20px] leading-none shrink-0">+</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 11: GET STARTED */}
        <section className="bg-zoiko-dark w-full py-[60px] md:py-[100px] relative text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-[24px] relative w-full">
            <div className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[1px] bg-[#e0402f]" />
              <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase m-0">
                Get started
              </p>
            </div>
            
            <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.756px] text-white m-0">
              Bring the request list that's currently in a spreadsheet.
            </h2>
            
            <p className="font-sans font-normal text-[16px] sm:text-[17px] leading-[27.2px] text-[#8a98a5] m-0 max-w-[600px] mx-auto">
              We'll walk how scope, evidence, gaps and reviewer requests get organized — and be straight about which conclusions will always belong to your reviewer rather than to a tool.
            </p>
            
            <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[16px] mt-[16px]">
              <button className="bg-[#e0402f] text-white font-mono font-semibold text-[13px] px-[24px] py-[12px] rounded-[4px] hover:bg-[#c83526] transition-colors">
                Book a Demo
              </button>
              <button className="bg-transparent border border-white/20 text-white font-mono text-[13px] px-[24px] py-[12px] rounded-[4px] hover:bg-white/5 transition-colors">
                Compliance Control Plane
              </button>
              <button className="bg-transparent border border-white/20 text-white font-mono text-[13px] px-[24px] py-[12px] rounded-[4px] hover:bg-white/5 transition-colors">
                Visit Trust Center
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

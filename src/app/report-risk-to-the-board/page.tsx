import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ReportRiskToTheBoardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative">
      <Navbar />

      <main className="flex-grow w-full">
        <section className="bg-zoiko-beige w-full py-14 md:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-y-12 lg:gap-[52px] items-start">
            
            {/* Left Column (Content) */}
            <div className="flex flex-col gap-[11.2px] relative pt-10">
              
              {/* Eyebrow */}
              <div className="relative w-full h-[17.59px]">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
                <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                  <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                    Executive risk reporting
                  </p>
                </div>
              </div>
              
              {/* Headline */}
              <div className="flex flex-col pt-[5.975px] relative w-full">
                <h1 className="font-sans font-bold leading-[1.15] text-[36px] sm:text-[40px] md:text-[48px] tracking-[-1.008px] text-[#0b2237] m-0">
                  Report risk to the Board<br />
                  <span className="text-[#e0402f]">with evidence behind<br />every material statement.</span>
                </h1>
              </div>
              
              {/* Lede */}
              <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] pt-[3.985px]">
                <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                  Turn governed risk and evidence into concise executive context that<br />
                  shows what changed, why it matters, what remains unknown, and which<br />
                  decisions still belong to accountable people.
                </p>
              </div>
              
              {/* Buttons Row */}
              <div className="flex flex-wrap gap-[12px] items-start pt-[16.8px] relative w-full">
                <div className="bg-[#e0402f] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-red-600 transition-colors">
                  <span className="font-sans font-semibold text-white text-[14px] leading-[22.4px] whitespace-nowrap">
                    Book a Demo
                  </span>
                </div>
                <div className="border border-[#e1ddd8] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                    See how evidence works
                  </span>
                </div>
                <div className="border border-[#e1ddd8] flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                    Visit the Trust Center
                  </span>
                </div>
              </div>
              
              {/* Subtext */}
              <div className="flex flex-col font-sans font-normal justify-center pt-[0.585px]">
                <p className="text-[14px] leading-[22.4px] text-[#5c6b79] m-0">
                  Evidence and limitations come before the conversion ask on this page. There is no &ldquo;see<br />
                  the full report in a demo&rdquo; gate in front of the uncertainty.
                </p>
              </div>
            </div>
            
            {/* Right Column (Image) */}
            <div className="relative w-full h-[746.235px] border-t-[3px] border-b-[1px] border-l-[1px] border-r-[1px] border-[#0b2237] border-solid rounded-[6px] overflow-hidden">
              <Image 
                src="/images/report-risk-to-the-board.png" 
                alt="Report Risk to the Board" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Second Section: What Changed */}
        <section className="bg-zoiko-beige w-full pb-14 md:pb-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
            
            {/* Eyebrow */}
            <div className="relative w-full h-[17.59px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
              <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  What changed
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col pt-[2.8px] relative w-full">
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                Executives need the change first. It still has to be earned.
              </h2>
            </div>

            {/* Lede */}
            <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
              <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                A red or green arrow is never sufficient. The reader needs to see what changed,<br />
                under which method and scope, and whether the comparison is genuinely like-for-<br />
                like. Values below are synthetic, shown to demonstrate the pattern.
              </p>
            </div>

            {/* Table Container */}
            <div className="bg-white border border-[#e1ddd8] border-solid rounded-[6px] overflow-hidden overflow-x-auto relative w-full mt-4 flex flex-col">
              <div className="min-w-[800px] flex flex-col w-full">
              
              {/* Header Row */}
              <div className="bg-[#0b2237] grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] min-h-[44.8px] w-full">
                <div className="flex flex-col justify-center px-[20px] py-[14px]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Change type</p>
                </div>
                <div className="flex flex-col justify-center px-[20px] py-[14px]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">What changed</p>
                </div>
                <div className="flex flex-col justify-center px-[20px] py-[14px]">
                  <p className="font-mono font-semibold text-white text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Why it matters</p>
                </div>
                <div className="flex flex-col justify-center px-[20px] py-[14px]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Owner</p>
                </div>
              </div>

              {/* Row 1 */}
              <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Resolved</p>
                </div>
                <div className="flex flex-col pt-[16.795px] pb-[39.985px] px-[20px]">
                  <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                    Privileged access review for payment systems<br />
                    completed for the current period.
                  </p>
                </div>
                <div className="bg-[#fcfbfa] flex flex-col pt-[18px] pb-[18px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                  <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                    Removes a standing evidence gap raised at the last two<br />
                    reviews. The underlying control design has not changed &mdash;<br />
                    only the evidence for it.
                  </p>
                </div>
                <div className="flex flex-col pt-[17.195px] pb-[46.585px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                    Security<br />
                    governance
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">New</p>
                </div>
                <div className="flex flex-col pt-[16.795px] pb-[39.985px] px-[20px]">
                  <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                    Third-party administrator access to a payment-<br />
                    adjacent system identified during scope expansion.
                  </p>
                </div>
                <div className="bg-[#fcfbfa] flex flex-col pt-[18px] pb-[18px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                  <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                    Extends the population under review. Whether this is a<br />
                    concern depends on contract terms that Legal has not yet<br />
                    assessed.
                  </p>
                </div>
                <div className="flex flex-col pt-[17px] pb-[64.78px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">Vendor risk</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                <div className="flex flex-col pt-[17px] pb-[44.19px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Reopened</p>
                </div>
                <div className="flex flex-col pt-[16.795px] pb-[18.395px] px-[20px]">
                  <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                    Break-glass account attestation lapsed; the prior<br />
                    attestation is now outside its freshness window.
                  </p>
                </div>
                <div className="bg-[#fcfbfa] flex flex-col pt-[16.795px] pb-[18.395px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                  <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                    A previously closed item returns to open. Nothing observed<br />
                    suggests misuse &mdash; the evidence has simply expired.
                  </p>
                </div>
                <div className="flex flex-col pt-[17.195px] pb-[24.995px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                    Platform<br />
                    engineering
                  </p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="border-b border-[#e1ddd8] border-solid grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Under review</p>
                </div>
                <div className="flex flex-col pt-[16.795px] pb-[39.985px] px-[20px]">
                  <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                    Two current sources disagree on privileged-role<br />
                    membership for one system.
                  </p>
                </div>
                <div className="bg-[#fcfbfa] flex flex-col pt-[18px] pb-[18px] px-[20px] relative border-l-2 border-[#e0402f]/30">
                  <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                    The conflict is unresolved and is shown as a conflict rather<br />
                    than averaged. Interpretation is deferred until the<br />
                    discrepancy is settled.
                  </p>
                </div>
                <div className="flex flex-col pt-[17.195px] pb-[46.585px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                    Identity<br />
                    operations
                  </p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-[130px_minmax(0,1.15fr)_minmax(0,1.25fr)_150px] w-full relative">
                <div className="flex flex-col pt-[17px] pb-[65.78px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11px] leading-[17.6px] m-0">Not shown</p>
                </div>
                <div className="flex flex-col pt-[17px] pb-[61.78px] px-[20px]">
                  <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[21.6px] m-0">
                    Quarter-over-quarter movement in evidence coverage.
                  </p>
                </div>
                <div className="bg-[#fdf7f5] flex flex-col justify-center px-[20px] py-[28px] relative border-l-2 border-[#e0402f]">
                  <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[21.6px] m-0">
                    <span className="font-bold text-[#7e2413]">Comparison blocked.</span> The method version changed from v1.2<br />
                    to v2.0 and the scope widened to a second region. Any<br />
                    percentage would measure our change, not yours.
                  </p>
                </div>
                <div className="flex flex-col pt-[17px] pb-[64.78px] px-[20px]">
                  <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">Reporting owner</p>
                </div>
              </div>
              </div>

            </div>

            {/* Footer Note */}
            <div className="relative w-full mt-4 flex items-start gap-[9px]">
              <div className="w-[16px] h-[2px] bg-[#e0402f] mt-[8px] shrink-0" />
              <p className="font-mono font-normal text-[#5c6b79] text-[11.5px] leading-[18.4px] m-0">
                Magnitude is published only where an approved quantitative method, unit and denominator exist. &ldquo;Why it matters&rdquo; is a source-backed implication written by a<br />
                person &mdash; never an automatic materiality verdict, and never generated as authority by AI.
              </p>
            </div>

          </div>
        </section>

        {/* Third Section: Statement Anatomy */}
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
        {/* Fourth Section: Evidence Drill-Down */}
        <section className="bg-white w-full py-14 md:py-20 relative border-b border-[#e1ddd8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
            {/* Eyebrow */}
            <div className="relative w-full h-[17.59px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
              <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  Evidence drill-down
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col pt-[2.8px] relative w-full">
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                Five levels, each with its own edge.
              </h2>
            </div>

            {/* Lede */}
            <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
              <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                Evidence-linked means a reader can inspect why a statement is present &mdash; without being<br />
                granted unrestricted access to sensitive records. Public examples are synthetic; real Board<br />
                papers, risk registers and incident data never appear as marketing proof.
              </p>
            </div>

            {/* Ladder */}
            <div className="w-full mt-8 flex flex-col border border-[#e1ddd8] rounded-[6px] bg-white overflow-hidden overflow-x-auto">
              <div className="min-w-[700px] flex flex-col w-full">
              
              {/* Level 1 */}
              <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                <div className="flex flex-col pt-[24px] pl-[20px]">
                  <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">01</p>
                </div>
                <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                  <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Executive statement</h4>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    The audience-safe assertion, with scope, period, owner and the limitations that survived the summarization.
                  </p>
                </div>
                <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">Cannot strengthen the meaning of anything beneath it.</p>
                </div>
              </div>

              {/* Level 2 */}
              <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                <div className="flex flex-col pt-[24px] pl-[20px]">
                  <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">02</p>
                </div>
                <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                  <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Risk record</h4>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    The governed risk statement, its method and version, assumptions, state and owner &mdash; held by Risk Intelligence.
                  </p>
                </div>
                <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">No invented score, severity or appetite is introduced at this level.</p>
                </div>
              </div>

              {/* Level 3 */}
              <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                <div className="flex flex-col pt-[24px] pl-[20px]">
                  <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">03</p>
                </div>
                <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                  <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Evidence set</h4>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    Evidence references with lineage, completeness, freshness and any conflicts between sources.
                  </p>
                </div>
                <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">Completeness is not certainty.</p>
                </div>
              </div>

              {/* Level 4 */}
              <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                <div className="flex flex-col pt-[24px] pl-[20px]">
                  <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">04</p>
                </div>
                <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                  <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Source authority</h4>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    The originating system or source, observation and effective dates, and the disclosure or access class.
                  </p>
                </div>
                <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">Source availability is not truth.</p>
                </div>
              </div>

              {/* Level 5 */}
              <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative border-b border-[#e1ddd8]">
                <div className="flex flex-col pt-[24px] pl-[20px]">
                  <p className="font-mono font-semibold text-[#e0402f] text-[11px] leading-[17.6px] m-0">05</p>
                </div>
                <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                  <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">Decision history</h4>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    Reviews, decisions, corrections and supersessions, where the reader is authorized to see them.
                  </p>
                </div>
                <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">History is not Board approval by implication.</p>
                </div>
              </div>

              {/* Denied */}
              <div className="grid grid-cols-[48px_minmax(0,1.15fr)_minmax(0,1.2fr)] w-full relative">
                <div className="flex flex-col pt-[24px] pl-[20px]">
                  <p className="font-mono font-semibold text-[#a63220] text-[11px] leading-[17.6px] m-0">âœ•</p>
                </div>
                <div className="flex flex-col pt-[22px] pb-[24px] pr-[40px] gap-[4px]">
                  <h4 className="font-sans font-bold text-[#0b2237] text-[15px] m-0">When access is denied</h4>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    A safe explanation and an alternative authorized summary &mdash; never a silent gap, and never a leak of the restricted item&apos;s existence or content.
                  </p>
                </div>
                <div className="bg-white flex flex-col pt-[22px] pb-[24px] pl-[24px] pr-[20px] gap-[4px] relative border-l border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#93a6b8] text-[10.5px] uppercase tracking-[1.365px] m-0">Boundary</p>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">A link never transfers authority. An external framework or advisory reference stays external.</p>
                </div>
              </div>
              </div>

            </div>

            {/* Grid 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full mt-8">
              <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#f1f4f7] border border-[#cfd8e0] rounded-[6px] text-[#42566b] text-[16px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Verification is not interpretation</h3>
                <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[24px] m-0">
                  The evidence ledger can establish that a record is intact and consistent within its stated scope. It cannot establish that the risk conclusion drawn from that record is correct. Those are separate questions with separate owners, and collapsing them is the most common way evidence-linked reporting goes wrong.
                </p>
                <div className="mt-4 border border-[#e1ddd8] inline-flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors self-start">
                  <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                    Evidence ledger &rarr;
                  </span>
                </div>
              </div>
              
              <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#eef7f1] border border-[#d2eadc] rounded-[6px] text-[#20663f] text-[16px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Method authority stays where it lives</h3>
                <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[24px] m-0">
                  Risk Intelligence owns risk-method truth. This solution owns how that truth is understood and used for executive reporting. A statement here may summarize an approved risk statement with its scope and time basis &mdash; but never rewrite it in a way that increases certainty.
                </p>
                <div className="mt-4 border border-[#e1ddd8] inline-flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors self-start">
                  <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                    Risk intelligence &rarr;
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Fifth Section: Uncertainty */}
        <section className="bg-zoiko-dark w-full py-[60px] md:py-[84px] relative border-b border-[#1b3b56]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
            
            {/* Eyebrow */}
            <div className="relative w-full h-[17.59px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
              <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  Assumptions and unknowns
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col pt-[2.8px] relative w-full">
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-white m-0">
                When the basis gets weaker, the statement gets more qualified.
              </h2>
            </div>

            {/* Lede */}
            <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
              <p className="text-[17px] leading-[27.2px] mb-0 text-[#93a6b8]">
                Never more confident to keep the presentation simple. Twelve states are carried through to the summary rather than resolved on the way up.
              </p>
            </div>

            {/* States Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 border border-[#1b3b56] bg-gradient-to-b from-[#112b45] to-[#0d2338] rounded-[6px] overflow-hidden">
              <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Assumption</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Stated concisely, linked to the method or risk record it depends on.</p>
              </div>
              <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Missing evidence</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Explicitly missing. No optimistic fill from averages or inference.</p>
              </div>
              <div className="p-[24px] border-b border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Stale evidence</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">As-of and freshness shown, with the effect on the statement named.</p>
              </div>

              <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Conflicting evidence</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Conflict and review state shown rather than silently averaged.</p>
              </div>
              <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Out of scope</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">The excluded area is named where it is safe and approved to do so.</p>
              </div>
              <div className="p-[24px] border-b border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Under review</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">A neutral state. Not presented as resolved in either direction.</p>
              </div>

              <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Restricted evidence</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">A controlled-access cue, without leaking the detail behind it.</p>
              </div>
              <div className="p-[24px] border-b md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Method incompatible</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">No trend rendered. The incompatibility is explained instead.</p>
              </div>
              <div className="p-[24px] border-b border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Source unavailable</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Last approved context only where governance permits, labelled stale.</p>
              </div>

              <div className="p-[24px] border-b md:border-b-0 md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Unknown outcome</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">Stated as unknown rather than predicted as success or failure.</p>
              </div>
              <div className="p-[24px] border-b md:border-b-0 md:border-r border-[#1b3b56] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Partial coverage</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">The affected statement or metric coverage is spelled out.</p>
              </div>
              <div className="p-[24px] flex flex-col gap-[8px]">
                <h4 className="font-sans font-bold text-white text-[14px] m-0">Correction pending</h4>
                <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">The prior value stays qualified until the authoritative correction lands.</p>
              </div>
            </div>

            <div className="bg-[#0f2942] border border-[#1b3b56] border-l-[3px] border-l-[#e0402f] rounded-[6px] p-[27px] flex flex-col gap-[16px] w-full mt-6">
              <h3 className="font-sans font-bold text-white text-[16px] m-0">Audience seniority changes framing, not truth</h3>
              <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                A label such as &ldquo;Board&rdquo; changes how much detail is appropriate and how the statement is worded. It does not change the underlying risk position, and it never justifies dropping a material limitation. An executive summary is a shorter presentation of the same source truth &mdash; not a stronger one.
              </p>
            </div>

          </div>
        </section>
        {/* Sixth Section: Method + Prediction Boundaries */}
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
            <div className="w-full mt-8 border border-[#e1ddd8] rounded-[6px] overflow-hidden bg-white flex flex-col">
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
                  âŠ˜
                </div>
                <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Materiality</h3>
                <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                  Approved facts, inputs and questions are presented. Authorized humans decide. Neither the platform nor AI declares legal or Board materiality, and no risk report determines reportability or penalty exposure.
                </p>
              </div>

              <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px] relative">
                <div className="absolute top-[-1px] left-[27px] w-[32px] h-[3px] bg-[#d97706] rounded-b-[2px]" />
                <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#d97706] text-[18px]">
                  &ne;
                </div>
                <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Causality and root cause</h3>
                <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                  Correlation or sequence is not cause. A causal conclusion needs a method and authority behind it; root cause needs an authoritative investigation, not a detection correlation that reads suggestively.
                </p>
              </div>

              <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col gap-[16px] relative">
                <div className="absolute top-[-1px] left-[27px] w-[32px] h-[3px] bg-[#4f46e5] rounded-b-[2px]" />
                <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#4f46e5] text-[18px]">
                  â‰
                </div>
                <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">Probability and forecast</h3>
                <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                  A likelihood requires an approved predictive model with calibration, population, horizon and limitations. A scenario is clearly hypothetical and assumption-bound &mdash; and stays labelled as one, not quietly upgraded to a prediction.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Seventh Section: Trend + Benchmark */}
        <section className="bg-zoiko-beige w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
            
            {/* Eyebrow */}
            <div className="relative w-full h-[17.59px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
              <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  Trend and comparison
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col pt-[2.8px] relative w-full">
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                Comparability is checked before anything is compared.
              </h2>
            </div>

            {/* Lede */}
            <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
              <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                Definitions, populations, periods and methods must be comparable \u2014 or the differences must be disclosed prominently enough that nobody reads the movement as real.
              </p>
            </div>

            {/* Grid 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full mt-8">
              
              {/* Card 1 */}
              <div className="bg-white border border-[#e1ddd8] rounded-[6px] flex flex-col p-[27px] gap-[16px]">
                <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#5c6b79] text-[18px]">
                  â—
                </div>
                <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">What gets checked first</h3>
                <ul className="flex flex-col gap-[12px] m-0 p-0 list-none mt-2">
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                    <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                      <b className="text-[#0b2237]">Method and version</b> &mdash; a changed method is annotated separately from changed evidence.
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                    <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                      <b className="text-[#0b2237]">Scope and population</b> &mdash; an expanded population is not an increase in risk.
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                    <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                      <b className="text-[#0b2237]">Time basis</b> &mdash; windows of different lengths are not compared.
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                    <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                      <b className="text-[#0b2237]">Source coverage</b> &mdash; a new source appearing can look like a new problem.
                    </p>
                  </li>
                  <li className="flex items-start gap-[12px]">
                    <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                    <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                      <b className="text-[#0b2237]">Units and denominator</b> &mdash; magnitude only where an approved quantitative method defines both.
                    </p>
                  </li>
                </ul>
                <div className="mt-4 flex flex-col gap-[8px]">
                  <p className="font-mono font-semibold text-[10.5px] text-[#e0402f] tracking-[1.365px] uppercase leading-[16.8px] m-0">
                    Failure behaviour
                  </p>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    Mismatch blocks the trend representation and returns an explanation plus a safe alternative &mdash; a restatement or a like-for-like subset.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-[1.5px] border-[#e0402f] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#f4f5f7] rounded-[6px] text-[#5c6b79] text-[18px]">
                  â¦€
                </div>
                <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0">On peer benchmarks</h3>
                <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                  No percentile, sector average, &ldquo;top quartile&rdquo; or maturity rank appears until the dataset source, cohort definition, sample, period, normalization, statistical method, licensing rights and selection-bias limitations are all governed.
                </p>
                <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                  If a benchmark becomes unavailable it is removed or shown as unknown. A cached percentile is never presented as current, and no benchmark is stretched into a risk verdict beyond what its method supports.
                </p>
              </div>

            </div>

          </div>
        </section>
        {/* Eighth Section: AI + Related */}
        <section className="bg-white w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
            
            {/* Eyebrow */}
            <div className="relative w-full h-[17.59px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
              <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  AI, advisory and adjacent domains
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col pt-[2.8px] relative w-full">
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                Help with the writing. Not with the deciding.
              </h2>
            </div>

            {/* Lede */}
            <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
              <p className="text-[17px] leading-[27.2px] mb-0 text-[#5c6b79]">
                AI can make dense risk records navigable inside the bounded, cited and overridable model that AI Security &amp; Governance defines. Advisory can prepare the material. Neither becomes Board authority.
              </p>
            </div>

            {/* Table */}
            <div className="w-full mt-8 border border-[#e1ddd8] rounded-[6px] overflow-hidden bg-white flex flex-col">
              <div className="grid grid-cols-[245px_minmax(0,1.2fr)_minmax(0,1.3fr)] bg-[#fcfbfa] border-b border-[#e1ddd8] min-h-[46px]">
                <div className="px-[20px] py-[14px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Function</p>
                </div>
                <div className="px-[20px] py-[14px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                  <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Allowed</p>
                </div>
                <div className="px-[20px] py-[14px] flex flex-col justify-center">
                  <p className="font-mono font-semibold text-[#5c6b79] text-[10.5px] tracking-[1.365px] uppercase leading-[16.8px] m-0">Boundary</p>
                </div>
              </div>

              {[
                ["AI summarize", "Condense authorized risk and evidence, with citations.", "Cannot omit a material limitation to strengthen the message."],
                ["AI compare", "Explain approved like-for-like changes.", "No invented causal driver behind the change."],
                ["AI draft", "Draft executive language for human review.", "A draft is not a Board-approved statement."],
                ["AI recommend", "Only where decision-right policy permits it.", "A recommendation is not a decision or an approval."],
                ["AI on materiality", "May surface relevant facts and questions.", "Does not make the Board or legal materiality decision."],
                ["AI approval", "\u2014", "Cannot self-review or self-approve. Cannot set appetite or accept risk."],
                ["vCISO & Advisory", "Prepare evidence-linked context within the advisory role.", "An advisor does not become a director, officer or independent auditor."],
                ["Compliance control plane", "Relate findings to controls, tests and exceptions.", "A risk report is not an audit opinion or a certification."],
                ["Detection & cases", "Contribute incident and investigation context.", "Case correlation does not become root cause or severity."]
              ].map(([func, allowed, bound], i) => (
                <div key={i} className="grid grid-cols-[245px_minmax(0,1.2fr)_minmax(0,1.3fr)] border-b border-[#e1ddd8] last:border-b-0 w-full hover:bg-gray-50 transition-colors">
                  <div className="px-[20px] py-[16px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                    <p className="font-sans font-medium text-[#0b2237] text-[13.5px] leading-[20px] m-0">{func}</p>
                  </div>
                  <div className="px-[20px] py-[16px] flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#e1ddd8]">
                    <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[20px] m-0">{allowed}</p>
                  </div>
                  <div className="px-[20px] py-[16px] flex flex-col justify-center">
                    <p className="font-sans font-normal text-[#5c6b79] text-[13.5px] leading-[20px] m-0">{bound}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Grid 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] w-full mt-6">
              <div className="bg-white border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between min-h-[224px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0 flex items-center gap-[8px]">
                    Evidence ledger 
                    <span className="inline-flex items-center gap-[4px] bg-[#eef7f1] border border-[#d2eadc] rounded-[3px] px-[6px] py-[2px] ml-1">
                      <span className="font-mono font-bold text-[#20663f] text-[11px] leading-[11px]">â—</span>
                      <span className="font-mono font-semibold text-[#20663f] text-[10.5px] tracking-[0.945px]">Active</span>
                    </span>
                  </h3>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    Where the drill-down lands. Integrity and lineage within a stated scope.
                  </p>
                </div>
                <div className="mt-4 border border-[#e1ddd8] inline-flex items-center justify-center px-[22px] py-[11px] rounded-[6px] cursor-pointer hover:bg-gray-50 transition-colors self-start">
                  <span className="font-sans font-semibold text-[#0b2237] text-[14px] leading-[22.4px] whitespace-nowrap">
                    Open &rarr;
                  </span>
                </div>
              </div>

              <div className="bg-[#fcfbfa] border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between min-h-[224px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0 flex items-start flex-col gap-[8px]">
                    Executive Risk Intelligence
                    <span className="inline-flex items-center gap-[4px] bg-[#f1f4f7] border border-[#cfd8e0] rounded-[3px] px-[6px] py-[2px]">
                      <span className="font-mono font-bold text-[#42566b] text-[11px] leading-[11px]">â—</span>
                      <span className="font-mono font-semibold text-[#42566b] text-[10.5px] uppercase tracking-[0.945px]">When public</span>
                    </span>
                  </h3>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    The product destination for Board reporting with evidence drill-down. This solution page explains the outcome; it does not stand in for that route or claim a Board dashboard is current.
                  </p>
                </div>
              </div>

              <div className="bg-[#fcfbfa] border border-[#e1ddd8] rounded-[6px] p-[27px] flex flex-col justify-between min-h-[224px]">
                <div className="flex flex-col gap-[16px]">
                  <h3 className="font-sans font-bold text-[#0b2237] text-[18px] m-0 flex items-start flex-col gap-[8px]">
                    vCISO &amp; Advisory 
                    <span className="inline-flex items-center gap-[4px] bg-[#f1f4f7] border border-[#cfd8e0] rounded-[3px] px-[6px] py-[2px]">
                      <span className="font-mono font-bold text-[#42566b] text-[11px] leading-[11px]">â—</span>
                      <span className="font-mono font-semibold text-[#42566b] text-[10.5px] uppercase tracking-[0.945px]">When public</span>
                    </span>
                  </h3>
                  <p className="font-sans font-normal text-[#5c6b79] text-[14px] leading-[22px] m-0">
                    Can help prepare the reporting architecture and the decision framing. Your governance approves the final material and retains every decision.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Ninth Section: Pack + Confidentiality */}
        <section className="bg-zoiko-dark w-full py-[60px] md:py-[84px] relative border-b border-[#1b3b56]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[15.2px] items-start relative w-full">
            
            {/* Eyebrow */}
            <div className="relative w-full h-[17.59px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[22px] h-[1px] bg-[#e0402f]" />
              <div className="absolute left-[32px] top-[calc(50%-0.8px)] -translate-y-1/2 flex flex-col justify-center">
                <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] mb-0">
                  Packs, exports and confidentiality
                </p>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col pt-[2.8px] relative w-full">
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-white m-0">
                Changing the format cannot change the meaning.
              </h2>
            </div>

            {/* Lede */}
            <div className="flex flex-col font-sans font-normal justify-center max-w-[686.375px] relative">
              <p className="text-[17px] leading-[27.2px] mb-0 text-[#93a6b8]">
                Board packs, exports and scheduled delivery are valuable &mdash; and they are capability-gated. Nothing here should be read as a current product feature until its template, versioning, access and delivery model are approved.
              </p>
            </div>

            {/* Grid 2 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] w-full mt-8">
              
              {/* Card 1 */}
              <div className="bg-[#0f2942] border border-[#1b3b56] rounded-[6px] flex flex-col justify-between">
                <div className="p-[27px] flex flex-col gap-[16px]">
                  <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#153451] border border-[#234b6e] rounded-full text-[#719bbd] text-[16px]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                  </div>
                  <h3 className="font-sans font-bold text-white text-[20px] m-0">If and when a pack ships</h3>
                  <ul className="flex flex-col gap-[12px] m-0 p-0 list-none mt-2">
                    <li className="flex items-start gap-[12px]">
                      <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                        Every exported copy carries the same scope, as-of date, evidence basis and material limitations as the source report.
                      </p>
                    </li>
                    <li className="flex items-start gap-[12px]">
                      <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                        PDF output is tagged and accessible, with version and scope visible on the page &mdash; not only in metadata.
                      </p>
                    </li>
                    <li className="flex items-start gap-[12px]">
                      <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                        Offline copies carry a stale-copy warning once they fall outside the freshness policy.
                      </p>
                    </li>
                    <li className="flex items-start gap-[12px]">
                      <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                        Print keeps the limitation text and evidence references legible. No QR-code-only proof.
                      </p>
                    </li>
                    <li className="flex items-start gap-[12px]">
                      <div className="w-[6px] h-[6px] bg-[#e0402f] mt-[8px] shrink-0" />
                      <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                        Presentation mode stays keyboard operable and does not drop evidence or limitations for the sake of a cleaner slide.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-[#1b3b56] p-[24px]">
                  <b className="font-sans font-bold text-[#b3b9bf] text-[12px] uppercase tracking-[0.5px] block mb-2">Not assumed</b>
                  <p className="font-sans font-normal text-[#93a6b8] text-[14px] leading-[22px] m-0">
                    Scheduled delivery, email distribution, signing workflows, watermarking and export revocation are each separately gated. None is implied by this page.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0f2942] border border-[#1b3b56] rounded-[6px] p-[27px] flex flex-col gap-[16px]">
                <div className="w-[34px] h-[34px] flex items-center justify-center bg-[#153451] border border-[#234b6e] rounded-full text-[#719bbd] text-[16px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>
                </div>
                <h3 className="font-sans font-bold text-white text-[20px] m-0">Least disclosure at runtime</h3>
                <p className="font-sans font-normal text-[#93a6b8] text-[15px] leading-[24px] m-0">
                  Real reporting runs under least-privilege authorization and tenant isolation. A more senior audience receives what its purpose requires &mdash; seniority is not a key that opens everything.
                </p>
                <p className="font-sans font-normal text-[#93a6b8] text-[15px] leading-[24px] m-0 mt-2">
                  Everything on this public page is synthetic. Report content, statement text and evidence references are excluded from marketing analytics entirely.
                </p>
                <p className="font-sans font-normal text-[#93a6b8] text-[15px] leading-[24px] m-0 mt-2">
                  <b className="text-white">Lifecycle.</b> A report or statement can be reviewed, corrected, superseded or withdrawn, with the prior version traceable and a replacement pointer. No prior report is silently overwritten, because a decision made last quarter needs to remain understandable on the basis it was actually made.
                </p>
              </div>

            </div>

          </div>
        </section>
        
        {/* Tenth Section: FAQ */}
        <section className="bg-[#fcfbfa] w-full py-[60px] md:py-[84px] relative border-b border-[#e1ddd8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left relative w-full">
            <div className="w-full flex flex-col gap-[15.2px]">
            
            {/* Eyebrow */}
            <div className="flex w-full">
              <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] m-0 flex items-center">
                <span className="inline-block w-[12px] h-[2px] bg-[#e0402f] mr-[12px]"></span>
                Direct answers
              </p>
            </div>

            {/* Headline */}
            <div className="flex flex-col pt-[2.8px] relative w-full">
              <h2 className="font-sans font-bold leading-[1.2] text-[28px] sm:text-[32px] md:text-[34px] tracking-[-0.714px] text-[#0b2237] m-0">
                What a Board and its advisors will ask.
              </h2>
            </div>

            {/* FAQ List */}
            <div className="w-full mt-10 flex flex-col border-t border-[#e1ddd8] text-left">
              {[
                {
                  q: "What does \"report risk to the Board\" mean here?",
                  a: "Preparing concise executive risk context with explicit scope and period, a traceable evidence path, an honest account of what changed, the limitations that remain, and clear human ownership of any decision that follows."
                },
                {
                  q: "Do you calculate one universal risk score?",
                  a: "No. A single risk score spanning security, privacy, and compliance requires combining dimensions that are not mathematically comparable. We preserve the specific metrics and bounds of the original risk method without inventing an artificial summary score."
                },
                {
                  q: "Do you decide what is material for our Board?",
                  a: "No. Materiality is a legal and governance decision. We present the approved facts, inputs, and questions, but authorized humans make the materiality decision."
                },
                {
                  q: "Can each executive statement really be traced to evidence?",
                  a: "Yes. Executive statements are linked to their source risk records and evidence sets, with boundaries defined so the assertion cannot exceed the certainty of its underlying data."
                },
                {
                  q: "Does verified evidence prove the risk conclusion?",
                  a: "No. Verification ensures the record is intact and within scope; interpretation is a separate function owned by risk intelligence."
                },
                {
                  q: "Can AI write our Board report?",
                  a: "AI can draft executive language and summarize authorized risks for human review. It cannot make a Board-approved statement, self-approve, or omit material limitations."
                },
                {
                  q: "Can reports show trends?",
                  a: "Yes, but only when definitions, populations, periods, and methods are comparable. Mismatches block trend representation and return a safe alternative instead."
                },
                {
                  q: "Do you provide peer benchmarks?",
                  a: "No benchmarks appear until the dataset source, cohort, sample, period, statistical method, and limitations are fully governed. Unreliable benchmarks are shown as unknown."
                },
                {
                  q: "Can you generate PDF or PowerPoint Board packs?",
                  a: "Board packs, exports, and scheduled delivery are capability-gated. When exported, copies carry the same scope, freshness, and limitations as the source report."
                },
                {
                  q: "What happens during an active incident?",
                  a: "The reporting system can contribute incident and investigation context, but this correlation does not automatically become root cause or a severity rating."
                },
                {
                  q: "How is confidential Board information protected?",
                  a: "Reporting runs under least-privilege authorization and tenant isolation. An audience only receives what its purpose requires."
                },
                {
                  q: "Does this replace our enterprise risk policy or our auditors?",
                  a: "No. This solution owns how risk truth is understood and used for executive reporting, while Risk Intelligence owns risk-method truth."
                }
              ].map((faq, index) => (
                <div key={index} className="py-[24px] border-b border-[#e1ddd8] last:border-b-0 flex flex-col gap-[16px]">
                  <div className="flex justify-between items-center cursor-pointer">
                    <h4 className="font-sans font-bold text-[#0b2237] text-[16px] leading-[24px] m-0 pr-[20px]">
                      {faq.q}
                    </h4>
                    <span className="text-[#e0402f] text-[20px] font-light leading-none">
                      {index === 0 ? "âˆ’" : "+"}
                    </span>
                  </div>
                  {index === 0 && (
                    <p className="font-sans font-normal text-[#5c6b79] text-[15px] leading-[24px] m-0 pr-[40px]">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="bg-zoiko-dark w-full py-[100px] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-[24px] relative w-full">
            
            {/* Eyebrow */}
            <p className="font-mono font-semibold text-[11px] text-[#e0402f] tracking-[1.76px] uppercase leading-[17.6px] m-0">
              Get started
            </p>

            {/* Headline */}
            <h2 className="font-sans font-bold leading-[48px] text-[40px] tracking-[-0.84px] text-white m-0">
              Bring the statement your Board pushed back on.
            </h2>

            {/* Text */}
            <p className="font-sans font-normal text-[18px] leading-[28.8px] text-[#b3b9bf] max-w-[720px] m-0">
              We&apos;ll take it apart &mdash; scope, period, method, evidence path, what&apos;s stale or missing, and which part of it was actually a decision waiting for an owner.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-[16px] mt-4">
              <button className="bg-[#e0402f] hover:bg-[#c9392a] text-white font-sans font-semibold text-[15px] px-[28px] py-[14px] rounded-[6px] transition-colors border border-transparent">
                Book a Demo
              </button>
              <button className="bg-transparent hover:bg-[rgba(255,255,255,0.05)] text-white font-sans font-semibold text-[15px] px-[28px] py-[14px] rounded-[6px] transition-colors border border-[#42566b]">
                See how evidence works
              </button>
              <button className="bg-transparent hover:bg-[rgba(255,255,255,0.05)] text-white font-sans font-semibold text-[15px] px-[28px] py-[14px] rounded-[6px] transition-colors border border-[#42566b]">
                Visit the Trust Center
              </button>
            </div>

            {/* Subtext */}
            <p className="font-sans font-normal text-[13px] leading-[20.8px] text-[#5c6b79] max-w-[640px] m-0 mt-8">
              Risk methods, metrics, report formats, cadence, audiences, benchmarks, exports and decision workflows vary by approved product, customer governance and source authority.
            </p>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


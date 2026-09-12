import React from "react";

export function FAQSection() {
  return (
    <>
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

    </>
  );
}

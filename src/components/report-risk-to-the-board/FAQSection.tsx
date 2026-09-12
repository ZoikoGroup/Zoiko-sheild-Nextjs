import React from "react";

export function FAQSection() {
  return (
    <>
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

    </>
  );
}

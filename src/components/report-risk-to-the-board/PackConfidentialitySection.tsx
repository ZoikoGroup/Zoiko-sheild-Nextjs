import React from "react";

export function PackConfidentialitySection() {
  return (
    <>
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

    </>
  );
}

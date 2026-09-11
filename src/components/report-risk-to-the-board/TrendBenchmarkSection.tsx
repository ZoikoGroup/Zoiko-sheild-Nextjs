import React from "react";

export function TrendBenchmarkSection() {
  return (
    <>
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

    </>
  );
}

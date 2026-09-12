import React from "react";

export function PathwaysSection() {
  return (
    <section className="bg-[#f7f5f0] w-full py-[68px] lg:py-[88px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-[38px] items-start">
        
        {/* Top Header Text */}
        <div className="flex flex-col gap-[22px] lg:gap-[14px] items-start w-full">
          <div className="flex items-center gap-[10px] lg:gap-[12px]">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase leading-[normal] mb-0">
              09 — Independent service handoffs
            </p>
          </div>

          <h2 className="font-hanken font-[800] leading-[1.08] text-[28px] lg:text-[40px] text-[#0a2029] m-0 w-full">
            Choose an operating path—not a prescribed answer.
          </h2>

          <p className="font-manrope font-[500] text-[16px] leading-[1.55] mb-0 text-[#5b6670] max-w-full lg:max-w-[800px]">
            Managed Defense and Continuous Assurance remain independent peer paths, with a neutral comparison aid for teams deciding where to begin.
          </p>
        </div>

        {/* Service Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[18px]">
          
          {/* Card 1: Managed Defense */}
          <div className="bg-white border border-[#123b4c]/12 rounded-[20px] p-[28px] flex flex-col gap-[18px] items-start shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] min-h-[300px]">
            <div className="bg-[#e4f0ec] px-[10px] py-[6px] rounded-[100px]">
              <p className="font-jetbrains font-normal text-[#1f7a6c] text-[10px] leading-[normal] m-0">
                ACTIVE
              </p>
            </div>
            <h3 className="font-hanken font-[800] text-[#0a2029] text-[24px] leading-[normal] m-0">
              Managed Defense
            </h3>
            <p className="font-jetbrains font-normal text-[#c44242] text-[11px] uppercase leading-[normal] m-0">
              Security-led operating path
            </p>
            <p className="font-manrope font-normal text-[14px] text-[#5b6670] leading-[1.55] flex-grow m-0">
              A managed pathway for continuous investigation, governed response and defensible operational evidence.
            </p>
            <span className="font-manrope font-[800] text-[#c44242] text-[14px] cursor-pointer hover:underline mt-auto">
              Explore path &rarr;
            </span>
          </div>

          {/* Card 2: Continuous Assurance */}
          <div className="bg-[#123b4c] border border-[#123b4c]/12 rounded-[20px] p-[28px] flex flex-col gap-[18px] items-start shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] min-h-[300px]">
            <div className="bg-[#e4f0ec] px-[10px] py-[6px] rounded-[100px]">
              <p className="font-jetbrains font-normal text-[#1f7a6c] text-[10px] leading-[normal] m-0">
                ACTIVE
              </p>
            </div>
            <h3 className="font-hanken font-[800] text-white text-[24px] leading-[normal] m-0">
              Continuous Assurance
            </h3>
            <p className="font-jetbrains font-normal text-[#e0967d] text-[11px] uppercase leading-[normal] m-0">
              Assurance-led operating path
            </p>
            <p className="font-manrope font-normal text-[14px] text-white/60 leading-[1.55] flex-grow m-0">
              A peer pathway for control monitoring, evidence readiness and continuous assurance review.
            </p>
            <span className="font-manrope font-[800] text-[#e0967d] text-[14px] cursor-pointer hover:underline mt-auto">
              Explore path &rarr;
            </span>
          </div>

          {/* Card 3: Compare Starting Paths */}
          <div className="bg-white border border-[#123b4c]/12 rounded-[20px] p-[28px] flex flex-col gap-[18px] items-start shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] min-h-[300px]">
            <div className="bg-[#f0ede6] px-[10px] py-[6px] rounded-[100px]">
              <p className="font-jetbrains font-normal text-[#1f7a6c] text-[10px] leading-[normal] m-0">
                NEUTRAL
              </p>
            </div>
            <h3 className="font-hanken font-[800] text-[#0a2029] text-[24px] leading-[normal] m-0">
              Compare Starting Paths
            </h3>
            <p className="font-jetbrains font-normal text-[#c44242] text-[11px] uppercase leading-[normal] m-0">
              Neutral decision aid
            </p>
            <p className="font-manrope font-normal text-[14px] text-[#5b6670] leading-[1.55] flex-grow m-0">
              Compare operating goals, ownership and handoffs without a preselected choice.
            </p>
            <span className="font-manrope font-[800] text-[#c44242] text-[14px] cursor-pointer hover:underline mt-auto">
              Explore path &rarr;
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

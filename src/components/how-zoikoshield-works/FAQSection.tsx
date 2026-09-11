import React from "react";

export function FAQSection() {
  const faqs = [
    "How does ZoikoShield work?",
    "Does ZoikoShield replace my security tools?",
    "How does ZoikoShield correlate security data?",
    "Can ZoikoShield respond automatically?",
    "What evidence does ZoikoShield preserve?",
    "How can evidence be verified?",
    "Does ZoikoShield guarantee compliance or security?",
    "Where can I see service status?"
  ];

  return (
    <section className="bg-zoiko-beige w-full py-[68px] lg:py-[84px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-[15.2px] items-start relative w-full">
        
        <div className="flex flex-col gap-[22px] lg:gap-[15.2px] items-start w-full">
          <div className="flex items-center gap-[10px] lg:gap-3">
            <div className="w-[20px] lg:w-[22px] h-[2px] lg:h-[1px] bg-[#c44242] lg:bg-[#e0402f] shrink-0" />
            <p className="font-jetbrains lg:font-mono font-medium text-[11px] text-[#c44242] lg:text-[#e0402f] uppercase leading-[normal] lg:leading-[17.6px] mb-0 lg:tracking-[1.76px]">
              Frequently asked questions
            </p>
          </div>

          <h2 className="font-hanken lg:font-sans font-[800] lg:font-extrabold leading-[1.08] lg:leading-[40px] text-[28px] lg:text-[36px] tracking-[0px] lg:tracking-[-0.714px] text-[#0a2029] lg:text-[#0b2237] m-0 w-full">
            Clear answers, bounded claims.
          </h2>
        </div>

        <div className="w-full mt-[10px] lg:mt-[16px] grid grid-cols-1 md:grid-cols-2 gap-[8px] lg:gap-[16px]">
          {faqs.map((q, i) => (
            <div key={i} className="bg-white border border-[#e1ddd8] rounded-[6px] px-[16px] lg:px-[24px] py-[16px] lg:py-[20px] flex justify-between items-center cursor-pointer hover:border-[#0A2731]">
              <span className="font-manrope lg:font-sans font-[500] lg:font-extrabold text-[#0b2237] text-[14px] lg:text-[16px]">{q}</span>
              <span className="text-[#c44242] lg:text-[#e0402f] text-[20px] lg:text-[20px] font-normal">+</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

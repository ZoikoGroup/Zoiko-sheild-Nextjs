import React from "react";

export function OperatingModelSection() {
  const steps = [
    { 
      num: "01", 
      title: "Connect →", 
      desc: "Link approved systems with explicit permissions.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b2237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
      )
    },
    { 
      num: "02", 
      title: "Correlate →", 
      desc: "Relate source-backed signals without opaque certainty.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b2237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          <path d="M10 7v3m0 0v3m0-3h3m-3 0H7"></path>
        </svg>
      )
    },
    { 
      num: "03", 
      title: "Govern →", 
      desc: "Apply decision rights, review and approval boundaries.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b2237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      )
    },
    { 
      num: "04", 
      title: "Preserve →", 
      desc: "Keep tamper-evident lineage and reviewable history.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b2237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="21 8 21 21 3 21 3 8"></polyline>
          <rect x="1" y="3" width="22" height="5"></rect>
          <line x1="10" y1="12" x2="14" y2="12"></line>
        </svg>
      )
    },
    { 
      num: "05", 
      title: "Verify", 
      desc: "Expose scoped, independent proof paths.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0b2237" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <path d="M9 15l2 2 4-4"></path>
        </svg>
      )
    },
  ];

  return (
    <section className="bg-[#F0EDE6] w-full py-[68px] lg:py-[84px] relative border-b border-[#e1ddd8]">
      <div className="w-full mx-auto px-[22px] lg:px-[120px] flex flex-col gap-[22px] lg:gap-[15.2px] items-start relative w-full">
        
        <div className="flex items-center gap-[10px] lg:gap-3">
          <div className="w-[20px] lg:w-[22px] h-[2px] lg:h-[1px] bg-[#c44242] lg:bg-[#e0402f] shrink-0" />
          <p className="font-jetbrains font-medium text-[11px] text-[#c44242] lg:text-[#e0402f] uppercase leading-[normal] lg:leading-[17.6px] mb-0">
            The end-to-end model
          </p>
        </div>

        <h2 className="font-hanken font-[800] leading-[1.08] lg:leading-[1.2] text-[28px] lg:text-[36px] text-[#0a2029] m-0">
          One governed path, in one visual scan.
        </h2>

        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-[12px] lg:gap-[16px] w-full mt-[8px] lg:mt-[24px]">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-[#123b4c]/12 lg:border-[#e1ddd8] rounded-[14px] lg:rounded-[6px] p-[20px] lg:p-[24px] flex flex-col gap-[14px] lg:gap-[0px] hover:shadow-lg transition-shadow relative shadow-[0px_8px_28px_0px_rgba(11,37,48,0.08)] lg:shadow-none min-h-[150px]">
              <div className="flex justify-between items-center w-full">
                <p className="font-jetbrains font-normal lg:font-medium text-[#c44242] lg:text-[#e0402f] text-[11px] lg:text-[12px] leading-[normal] m-0">{step.num}</p>
                <div className="bg-[#f0ede6] lg:bg-transparent flex flex-col items-center justify-center rounded-[12px] lg:rounded-none w-[44px] h-[44px] lg:w-auto lg:h-auto shrink-0">
                  <div className="w-[22px] h-[22px] lg:w-[20px] lg:h-[20px] flex items-center justify-center text-[#0b2237]">
                    {step.icon}
                  </div>
                </div>
              </div>
              <p className="font-hanken font-[800] text-[#0a2029] lg:text-[#0b2237] text-[18px] lg:text-[20px] leading-[normal] lg:mb-[12px] m-0 whitespace-nowrap">{step.title}</p>
              <p className="font-manrope font-normal lg:font-medium text-[#5b6670] lg:text-[#5c6b79] text-[14px] lg:text-[13px] leading-[1.5] lg:leading-[20px] m-0">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

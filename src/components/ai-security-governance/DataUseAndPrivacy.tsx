import React from "react";

const dataItems = [
  "Approved data class",
  "Purpose",
  "Source / authority",
  "Processing location",
  "Retention",
  "Provider sharing",
  "Training / improvement",
  "Logging",
  "Sensitive-data treatment",
  "Rights / deletion routes",
];

export default function DataUseAndPrivacy() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            DATA USE AND PRIVACY
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Claims follow authoritative evidence.
          </h1>
          <p className="text-[#4B5563] text-base md:text-lg leading-relaxed">
            Controlled fields make data handling inspectable. Responsible AI is
            shown only when approved.
          </p>
        </div>

        {/* Grid of Data Use Cards / Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {dataItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB] flex items-center justify-center text-center min-h-[90px]"
            >
              <h3 className="text-sm font-bold text-[#111827] tracking-tight">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#F8EBEB] border border-[#F4DCDD] rounded-2xl p-5">
          <p className="text-xs md:text-sm font-semibold text-[#111827] leading-relaxed">
            The source does not establish a training-data promise,
            zero-retention promise, residency promise or provider-data-use
            claim. Those statements require authoritative Privacy/Trust
            evidence.
          </p>
        </div>
      </div>
    </div>
  );
}

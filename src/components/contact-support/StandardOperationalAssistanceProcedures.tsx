import React from "react";

const faqs = [
  {
    question:
      "What telemetry information is generated during secure log bundle uploads?",
    answer:
      "Our diagnostic packaging scripts pull active process execution tables, sensor registration IDs, and connection timeouts. All payload structures are fully transparent JSON arrays and are verified before transmission.",
  },
  {
    question:
      "Why must identity and endpoint posture be managed within the same case file?",
    answer:
      "When posturing checks fail, identifying whether the failure resides in the IdP session or the local EDR configuration requires cross-referencing timestamps. Resolving these separately creates massive blind spots and delays.",
  },
];

export default function StandardOperationalAssistanceProcedures() {
  return (
    <div className="bg-[#FAF5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-[2px] bg-[#C53030]"></span>
            SUPPORT GUIDE &amp; FAQS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-[#111827] leading-tight mb-3">
            Standard operational assistance procedures
          </h1>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E5E7EB]"
            >
              <h3 className="text-base md:text-lg font-bold text-[#111827] tracking-tight mb-3">
                {faq.question}
              </h3>
              <p className="text-xs md:text-sm text-[#4B5563] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

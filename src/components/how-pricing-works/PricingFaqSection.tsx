import React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Is write access to our Okta or CrowdStrike tenants required?",
    answer:
      "No. Zoiko Shield can run in a completely Read-Only mode to generate continuous compliance evidence. Write access is necessary only if you select dual-party containment rules.",
  },
  {
    question: "How does the scope matching avoid dual-billing?",
    answer:
      "Our correlator cross-references Intune/Jamf hardware serial IDs with active authentication profiles to build a singular verified entity representation.",
  },
  {
    question: "What is the validity window of a certified pricing quote?",
    answer:
      "Every approved quote from our underwriters carries an explicit 30-day commercial validity seal from date of issuance.",
  },
  {
    question: "How are overages handled if host count expands midway through a term?",
    answer:
      "Any scope increases past your contract threshold are tracked dynamically and billed monthly in arrears at your baseline rate.",
  },
];

export const PricingFaqSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F7F5F0] border-b border-stone-300/80 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] tracking-wider uppercase">
              — DETAILED ARCHITECTURE FAQS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 font-['Hanken_Grotesk'] tracking-tight leading-tight">
            Procurement Architecture Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-start hover:border-stone-300 transition-all"
            >
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Hanken_Grotesk'] mb-2">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-['Manrope'] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

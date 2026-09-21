import React from "react";

export const GlossaryFaqSection: React.FC = () => {
  const faqs = [
    {
      question: "Why do some terms have multiple conflicting definitions?",
      answer:
        "Operational compliance varies heavily across different frameworks (e.g., NIST SP 800-53 vs. ISO 27001). Rather than choosing one, Zoiko Shield surfaces both to provide complete coverage of regulatory nuances.",
    },
    {
      question: "Is this glossary certified as legal advice?",
      answer:
        "No. All definitions, guides, and plain-English summaries are provided strictly for educational purposes and operational mapping context. Always consult certified counsel for legal matters.",
    },
  ];

  return (
    <section className="w-full bg-stone-100 border-b border-stone-200/80 py-16 sm:py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="text-red-500 text-xs font-bold font-['JetBrains_Mono'] uppercase tracking-wider">
            QUESTIONS &amp; ANSWERS
          </div>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-extrabold font-['Hanken_Grotesk'] leading-tight tracking-tight">
            Detailed glossary architecture FAQs
          </h2>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-stone-200/90 shadow-sm flex flex-col gap-2 transition-all hover:border-stone-300"
            >
              <h3 className="text-slate-900 text-base sm:text-lg font-bold font-['Hanken_Grotesk'] leading-snug">
                {faq.question}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-normal font-['Manrope'] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

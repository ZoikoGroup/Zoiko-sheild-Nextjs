import React from "react";

const architectureFaqs = [
  {
    question: "How often are component health indices updated?",
    answer:
      "Our edge nodes execute continuous health loops against the core event pipeline every 30 seconds. Upstream directory connectors and external cloud integrations undergo verification sync routines every 5 minutes.",
  },
  {
    question: 'Why are some integration checks marked "Unknown" or "Stale"?',
    answer:
      'When communication channels with third-party service provider registries (e.g. AWS Security Hub or CrowdStrike endpoints) experience transient routing drops, we block green indicators to prevent false trust assurance. Status transitions automatically to "Unknown/Delayed" until telemetry integrity is restored.',
  },
];

export default function DetailedArchitectureAndStateConstraints() {
  return (
    <div className="bg-[#F0EDE6] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111827] mb-2">
            Detailed Architecture &amp; State Constraints
          </h1>
          <p className="text-[#4B5563] text-sm md:text-base">
            Understanding our telemetry monitoring guarantees.
          </p>
        </div>

        {/* FAQs List */}
        <div className="flex flex-col gap-6">
          {architectureFaqs.map((faq, index) => (
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

"use client";

const faqs = [
  {
    question: "What does ZoikoShield Detection & Response cover?",
    answer: "Correlated detection, investigation, cases and governed response.",
  },
  {
    question: "Does ZoikoShield respond automatically?",
    answer: "No autonomous response claim. R0–R4 behavior is conditional.",
  },
  {
    question:
      "What is the difference between correlation and causality?",
    answer:
      "Correlation provides relationship and context; it is not proof of cause.",
  },
  {
    question:
      "Are Security Analytics and Case Management currently available?",
    answer: "CONDITIONAL; availability depends on readiness gates.",
  },
  {
    question: "Where is investigation evidence handled?",
    answer:
      "Evidence Ledger & Verification, with lineage and completeness.",
  },
  {
    question: "Does detection establish risk or compliance?",
    answer: "No. Those use separate authority and state models.",
  },
  {
    question: "Where can I see live service health?",
    answer: "System Status is authoritative.",
  },
];

const proofLinks = ["Trust Center ↗", "Evidence ↗", "Docs ↗", "System Status ↗"];

export default function ProofFAQ() {
  return (
    <section className="w-full bg-stone-100">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-9 overflow-hidden px-28 py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="h-0.5 w-5 bg-red-500" />

          <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
            10 · Proof + FAQ
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-12 overflow-hidden">
          {/* Intro */}
          <div className="flex w-full flex-col items-start gap-5">
            <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
              <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
                Questions deserve direct answers.
              </h2>

              <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
                Inspect the boundaries, source of authority and current
                readiness behind every claim.
              </p>
            </div>

            {/* Proof Links */}
            <div className="flex w-full flex-wrap content-start items-start gap-2.5 overflow-hidden">
              {proofLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  className="rounded-[999px] bg-gray-200 px-3.5 py-2 font-['Manrope'] text-xs font-bold text-teal-700"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="flex w-full flex-col items-start overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="flex w-full items-start gap-5 overflow-hidden border-b border-cyan-950/10 py-5"
              >
                {/* Number */}
                <div className="w-7 shrink-0 font-['JetBrains_Mono'] text-xs font-normal text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Question + Answer */}
                <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5 overflow-hidden">
                  <div className="w-full font-['Hanken_Grotesk'] text-lg font-extrabold text-slate-900">
                    {faq.question}
                  </div>

                  <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
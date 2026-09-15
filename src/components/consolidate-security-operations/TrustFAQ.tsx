"use client";

export default function TrustFAQ() {
  const categories = [
    "Trust Center",
    "Evidence",
    "Detection & Response",
  ];

  const faqs = [
    {
      question: "What does “consolidate security operations” mean?",
      answer:
        "Coordinate approved tools, telemetry, cases and response workflows while preserving source identity, ownership, health and decision authority.",
    },
    {
      question: "Do I need to replace my SIEM or EDR?",
      answer:
        "No forced replacement. Exact compatibility depends on verified integration.",
    },
    {
      question: "How are response actions governed?",
      answer:
        "Every action requires canonical authority, preconditions, preview, approval and receipt.",
    },
    {
      question: "Can it work with my existing SOC?",
      answer:
        "Designed for coexistence. Exact operating model depends on verified configuration.",
    },
    {
      question: "Does consolidation guarantee security outcomes?",
      answer:
        "No. Connector support, data modes, response actions and coverage vary.",
    },
    {
      question: "What about AI in operations?",
      answer:
        "AI may assist but cannot autonomously set consequential states.",
    },
  ];

  return (
    <section className="w-full overflow-hidden px-28 py-20">
      <div className="flex w-full flex-col items-start justify-start gap-7">
        {/* Header */}
        <div className="flex w-full flex-col items-start justify-start gap-3.5 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center justify-start gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-500">
              Trust + FAQ
            </div>
          </div>

          {/* Heading */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
            Direct answers for security leaders.
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex items-start justify-start gap-3 overflow-hidden">
          {categories.map((category) => (
            <div
              key={category}
              className="flex items-start justify-start overflow-hidden rounded-[999px] bg-white px-3 py-2 outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
            >
              <div className="font-['Manrope'] text-xs font-semibold text-cyan-950">
                {category}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="flex w-full flex-wrap content-start items-start justify-start gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="flex h-36 w-[592px] flex-col items-start justify-start overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
            >
              <div className="flex w-full flex-col items-start justify-start gap-2.5">
                {/* Question */}
                <div className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                  {faq.question}
                </div>

                {/* Answer */}
                <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
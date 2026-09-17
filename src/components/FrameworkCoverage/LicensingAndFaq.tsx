import React from "react";

const faqData = [
  {
    question: "Does ZoikoShield certify customers against these frameworks?",
    answer:
      "No. Framework records describe scoped support relationships; they do not certify customers.",
  },
  {
    question: "Does a listed framework mean every requirement is covered?",
    answer:
      "No. Read the exact edition, relationship, scope, exclusions, and limitations for each record.",
  },
  {
    question: "How do I know which edition is referenced?",
    answer:
      "Every approved record must show its exact edition or version and review date.",
  },
  {
    question: "Can verified evidence prove compliance?",
    answer:
      "No. Verified evidence can support an assessment within stated lineage and completeness boundaries; it is not a compliance verdict.",
  },
  {
    question: "Where is ZoikoShield's own certification or assurance status?",
    answer:
      "Use the Trust Center, which preserves the authority and scope of ZoikoShield assurance materials.",
  },
  {
    question:
      "Can ZoikoShield tell me which regulations legally apply to my organization?",
    answer:
      "No. Legal applicability depends on your facts and qualified advice; ZoikoShield does not make that determination.",
  },
];

export default function LicensingAndFaq() {
  return (
    <div className="bg-[#F7F5F0] text-[#111827] px-6 py-16 md:px-12 font-sans antialiased flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Top Section: Licensing and Marks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-5">
            <p className="text-[#C53030] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              LICENSING AND MARKS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111827] leading-tight">
              Text first. Rights explicit.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed">
              Each record distinguishes names, marks, excerpts, derived
              mappings, and download rights. A reference may be visible while
              reproductions or downloads remain restricted.
            </p>
            <div className="bg-[#F7E6E2] text-[#0A2029] px-5 py-3.5 rounded-xl text-xs md:text-sm font-medium">
              No logo wall, badge wall, certification seal, or regulator mark is
              shown unless separately authorized.
            </div>
          </div>
        </div>

        {/* FAQ / Direct Answers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[#3F6212] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              FAQ / DIRECT ANSWERS
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111827] leading-tight mb-4">
              Clear answers, controlled claims.
            </h1>
            <p className="text-[#4B5563] text-sm md:text-base leading-relaxed">
              Designed for non-specialists, with the boundary stated at the
              point of decision.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="py-6 border-t border-[#E5E7EB] last:border-b"
              >
                <h3 className="text-base font-semibold text-[#111827] mb-1.5">
                  {item.question}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

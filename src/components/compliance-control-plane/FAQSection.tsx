import React from "react";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is ZoikoShield Compliance Control Plane?",
    a: "A governed system for controls, mappings, tests, assessments, exceptions and an audit workspace.",
  },
  {
    q: "Does ZoikoShield guarantee compliance?",
    a: "No. Program-alignment references do not imply guaranteed compliance, certification or regulator approval.",
  },
  {
    q: "Does evidence verification mean a control passed?",
    a: "No. Evidence verification and control status have separate governed semantics.",
  },
  {
    q: "Can ZoikoShield map controls to frameworks?",
    a: "Mappings are source-supported; exact frameworks, editions and content require current authority and licensing.",
  },
  {
    q: "Does ZoikoShield automate control testing?",
    a: "Tests are source-supported, but no specific automation engine or universal automatic testing claim is authorized.",
  },
  {
    q: "Can AI approve compliance?",
    a: "No autonomous authority. AI is bounded, cited and overridable.",
  },
  {
    q: "What is the audit workspace?",
    a: "A governed workspace for scoped controls, evidence and request context, assessments, exceptions and history-not proof of reviewer acceptance.",
  },
];

const mobileFaqs: { q: string; a: string }[] = [
  {
    q: "What is ZoikoShield Compliance Control Plane?",
    a: "A governed system for controls, mappings, tests, assessments, exceptions and an audit workspace.",
  },
  {
    q: "Does ZoikoShield generate compliance?",
    a: "No. It organizes attributable records and makes their basis inspectable.",
  },
  {
    q: "Does evidence verification mean a control passed?",
    a: "No. Verification facts remain separate from a governed control decision.",
  },
  {
    q: "Can ZoikoShield map controls to frameworks?",
    a: "Yes—with explicit versions, scope, rights and limitations.",
  },
  {
    q: "Does ZoikoShield automate auditor testing?",
    a: "It supports review workflows without implying auditor acceptance or endorsement.",
  },
  {
    q: "Can AI approve compliance?",
    a: "No. Governed decisions remain attributable to accountable people.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-[#f7f5f0] w-full scroll-mt-24">
      {/* Mobile */}
      <div className="md:hidden flex flex-col gap-[32px] items-start px-[22px] py-[68px] w-full">
        <div className="flex flex-col gap-[12px] items-center text-center w-full">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[12px] text-[#c44242] uppercase m-0">
              Direct answers
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] text-[#0a2029] m-0">
            Questions compliance teams ask before they trust a state.
          </h2>
          <p className="font-manrope font-medium leading-[1.55] text-[16.5px] text-[#5b6670] m-0">
            Clear boundaries are part of the product—not footnotes added after the fact.
          </p>
        </div>

        <div className="flex flex-col w-full">
          {mobileFaqs.map(({ q, a }) => (
            <div key={q} className="border-b border-[rgba(18,59,76,0.12)] flex flex-col gap-[8px] py-[18px] w-full">
              <p className="font-hanken font-extrabold text-[17px] text-[#0a2029] m-0">{q}</p>
              <p className="font-manrope font-normal leading-[1.55] text-[14px] text-[#5b6670] m-0">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop / tablet */}
      <div className="hidden md:flex md:flex-col gap-[40px] lg:gap-[56px] w-full mx-auto max-w-[1440px] px-8 lg:px-[120px] py-[56px] lg:py-[88px]">
        <div className="flex flex-col gap-[14px] items-center text-center">
          <div className="flex gap-[10px] items-center">
            <div className="w-[20px] h-[2px] bg-[#c44242] shrink-0" />
            <p className="font-jetbrains font-medium text-[11px] text-[#c44242] uppercase m-0">
              Direct answers
            </p>
          </div>
          <h2 className="font-hanken font-extrabold leading-[1.08] text-[28px] sm:text-[34px] lg:text-[40px] text-[#c44242] m-0 max-w-[920px]">
            Questions compliance teams ask before they trust a state.
          </h2>
          <p className="font-manrope font-normal leading-[1.55] text-[16px] text-[#5b6670] m-0 max-w-[760px]">
            Clear boundaries are part of the product-not footnotes added after the fact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-0 w-full">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className="border-b border-[rgba(18,59,76,0.12)] flex flex-col gap-[10px] py-[20px]"
            >
              <div className="flex gap-[14px] items-start w-full">
                <p className="font-jetbrains font-normal text-[10px] text-[#c44242] m-0 pt-[3px]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-hanken font-extrabold text-[18px] text-[#0a2029] m-0 flex-1">{q}</p>
              </div>
              <p className="font-manrope font-normal leading-[1.55] text-[13px] text-[#5b6670] m-0">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

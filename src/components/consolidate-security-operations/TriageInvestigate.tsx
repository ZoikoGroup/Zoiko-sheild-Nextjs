"use client";

const investigationCards = [
  {
    title: "Triage queue fields",
    description:
      "Item identity · routing basis · owner · state · priority · SLA / target · dependencies · staleness · escalation · handoff · closure",
  },
  {
    title: "Investigation workspace",
    description:
      "Question / hypothesis · trigger · scope · evidence · observed facts · interpretation · unknowns · impact · next action · owner · customer decision",
  },
];

export default function TriageInvestigate() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-7 overflow-hidden px-28 py-20">
        {/* Heading */}
        <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-medium uppercase text-red-500">
              Triage + investigate
            </div>
          </div>

          {/* Title */}
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
            One queue for facts, hypotheses and ownership.
          </h2>

          {/* Description */}
          <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
            Keep every item attributable, time-bound and explicit about the
            next decision.
          </p>
        </div>

        {/* Cards */}
        <div className="flex w-full items-start gap-5">
          {investigationCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-1 flex-col items-start gap-2.5 overflow-hidden rounded-2xl bg-white p-5 shadow-[0px_12px_36px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
            >
              <h3 className="w-full font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
                {card.title}
              </h3>

              <p className="w-full font-['Manrope'] text-xs font-normal leading-5 text-gray-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Information Note */}
        <div className="flex w-full items-center gap-3 overflow-hidden rounded-2xl bg-gray-200 p-4 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          {/* Shield */}
          <div className="relative h-5 w-5 shrink-0 overflow-hidden">
            <div className="absolute left-[3.33px] top-[1.66px] h-4 w-3.5 rounded-[2px] outline outline-1 outline-offset-[-0.5px] outline-teal-700" />
          </div>

          <div className="flex-1 font-['Manrope'] text-sm font-bold leading-5 text-slate-900">
            Automation and AI may assist but consequential conclusions retain
            human authority.
          </div>
        </div>
      </div>
    </section>
  );
}
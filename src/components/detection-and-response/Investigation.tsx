"use client";

export default function Investigation() {
  return (
    <section className="w-full bg-stone-200">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-9 overflow-hidden px-28 py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="h-0.5 w-5 bg-red-500" />

          <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
            03 · Investigation
          </div>
        </div>

        <div className="flex w-full items-start gap-16">
          {/* Left Content */}
          <div className="flex w-96 shrink-0 flex-col items-start gap-5">
            <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
              <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
                Questions before conclusions.
              </h2>

              <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
                Investigations organize hypotheses, evidence and reviewer
                actions while keeping observations distinct from
                interpretation.
              </p>
            </div>

            {/* Human Authority Notice */}
            <div className="flex w-96 flex-col items-start overflow-hidden rounded-2xl bg-rose-100 p-4">
              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-slate-900">
                Automation and AI may assist, but consequential conclusions
                retain human authority.
              </div>
            </div>
          </div>

          {/* Investigation Card */}
          <div className="flex min-w-0 flex-1 flex-col items-start gap-4 overflow-hidden rounded-[20px] bg-white p-7 shadow-[0px_12px_32px_0px_rgba(11,37,48,0.09)] outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-500">
              INVESTIGATION · ZS-1042
            </div>

            <h3 className="w-full font-['Hanken_Grotesk'] text-2xl font-extrabold text-slate-900">
              Did a privileged identity access a new cloud workload?
            </h3>

            {/* Investigation Details */}
            <div className="flex w-full items-start gap-4 overflow-hidden">
              {/* Observed Facts */}
              <div className="flex w-64 shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
                <div className="w-full font-['Hanken_Grotesk'] text-xl font-extrabold text-slate-900">
                  Observed facts
                </div>

                <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
                  New device · 02:14 UTC · privileged session · source records
                  linked
                </div>
              </div>

              {/* Interpretation */}
              <div className="flex w-64 shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
                <div className="w-full font-['Hanken_Grotesk'] text-xl font-extrabold text-slate-900">
                  Interpretation
                </div>

                <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
                  Behavior is unusual; intent and impact remain undetermined.
                </div>
              </div>
            </div>

            {/* Investigation Metadata */}
            <div className="w-full font-['JetBrains_Mono'] text-xs font-normal leading-5 text-gray-500">
              question / hypothesis · trigger · scope · evidence · observed
              facts · interpretation · unknowns · impact · next action · owner /
              reviewer · customer decision
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
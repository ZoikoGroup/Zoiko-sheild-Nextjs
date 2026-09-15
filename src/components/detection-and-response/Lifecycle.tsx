"use client";

export default function Lifecycle() {
  return (
    <section className="w-full bg-stone-200">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-7 overflow-hidden px-28 py-14">
        <div className="flex w-full items-end justify-between overflow-hidden">
          <div className="flex flex-col items-start gap-2.5 overflow-hidden">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="h-0.5 w-5 bg-red-500" />
              <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
                At a glance lifecycle
              </div>
            </div>

            <h2 className="font-['Hanken_Grotesk'] text-3xl font-extrabold text-slate-900">
              Follow every signal to an accountable outcome.
            </h2>
          </div>

          <p className="w-80 font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
            Jump to any stage to inspect context, evidence and decision
            authority.
          </p>
        </div>

        <div className="flex w-full items-start gap-4 overflow-hidden">
          <div className="flex flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-500">
              01
            </div>

            <div className="font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
              Signal
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-500">
              02
            </div>

            <div className="font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
              Relate
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-cyan-950 p-5 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-400">
              03
            </div>

            <div className="font-['Hanken_Grotesk'] text-base font-extrabold text-white">
              Investigate
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-500">
              04
            </div>

            <div className="font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
              Decide
            </div>
          </div>

          <div className="flex flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-5 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-500">
              05
            </div>

            <div className="font-['Hanken_Grotesk'] text-base font-extrabold text-slate-900">
              Respond / Record
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
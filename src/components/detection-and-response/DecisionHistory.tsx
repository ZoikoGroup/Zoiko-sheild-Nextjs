"use client";

export default function DecisionHistory() {
  return (
    <section className="w-full bg-stone-200">
      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-16 overflow-hidden px-28 py-24">
        {/* Left Content */}
        <div className="flex w-96 shrink-0 flex-col items-start gap-6 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
              05 · Decision history
            </div>
          </div>

          {/* Heading + Description */}
          <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
            <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
              Authority leaves a visible trail.
            </h2>

            <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
              Reviewer, rationale, approval and escalation stay attached to
              the decision—not buried in chat or inferred after the fact.
            </p>
          </div>

          {/* Metadata */}
          <div className="w-full font-['JetBrains_Mono'] text-xs font-normal leading-5 text-teal-700">
            question · options · approver / authority · outcome · conditions ·
            rationale · timestamp
          </div>
        </div>

        {/* Decision Card */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-4 overflow-hidden rounded-[20px] bg-white p-7 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
          {/* Header */}
          <div className="flex w-full items-start justify-between overflow-hidden">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-red-500">
              DECISION REQUEST
            </div>

            <div className="font-['JetBrains_Mono'] text-xs font-normal text-gray-500">
              14:32 UTC
            </div>
          </div>

          {/* Question */}
          <h3 className="font-['Hanken_Grotesk'] text-2xl font-extrabold text-slate-900">
            Suspend the privileged session?
          </h3>

          {/* Details */}
          <div className="flex items-start gap-3 overflow-hidden">
            {/* Approver */}
            <div className="flex w-64 shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
              <div className="w-full font-['Hanken_Grotesk'] text-xl font-extrabold text-slate-900">
                Approver
              </div>

              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
                M. Rivera · Customer authority
              </div>
            </div>

            {/* Outcome */}
            <div className="flex w-64 shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-cyan-950/10">
              <div className="w-full font-['Hanken_Grotesk'] text-xl font-extrabold text-slate-900">
                Outcome
              </div>

              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
                Escalated · additional evidence required
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="w-full font-['Manrope'] text-xs font-normal text-gray-500">
            Escalation · decision request · operational update · customer
            notification
          </div>
        </div>
      </div>
    </section>
  );
}
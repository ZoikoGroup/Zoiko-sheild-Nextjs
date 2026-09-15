"use client";

export default function Evidence() {
  return (
    <section className="w-full bg-stone-100">
      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-16 overflow-hidden px-28 py-24">
        {/* Left Content */}
        <div className="flex flex-1 flex-col items-start gap-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
              04 · Evidence
            </div>
          </div>

          {/* Heading + Description */}
          <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
            <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
              Evidence linked. Boundaries explicit.
            </h2>

            <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
              Governed evidence connects source records, normalized views,
              analyst artifacts, decision records and action receipts—with
              lineage and completeness visible.
            </p>
          </div>

          {/* Notice */}
          <div className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-gray-200 p-4">
            <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-slate-900">
              Verified evidence supports investigation—it does not determine
              intent, compromise, root cause or compliance status.
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-6 outline outline-1 outline-offset-[-1px] outline-cyan-950 transition-colors hover:bg-gray-50"
          >
            <span className="font-['Manrope'] text-sm font-bold text-slate-900">
              Open Evidence →
            </span>
          </button>
        </div>

        {/* Evidence Panel */}
        <div className="flex w-[560px] shrink-0 flex-col items-start overflow-hidden rounded-[20px] bg-cyan-950 p-6 shadow-[0px_12px_32px_0px_rgba(11,37,48,0.09)]">
          {/* Source Record */}
          <div className="flex w-full items-start justify-between overflow-hidden border-b border-white/10 py-4">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-white">
              Source record · SIEM-8891
            </div>

            <div className="font-['JetBrains_Mono'] text-[10px] font-normal text-red-400">
              VERIFIED
            </div>
          </div>

          {/* Normalized View */}
          <div className="flex w-full items-start justify-between overflow-hidden border-b border-white/10 py-4">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-white">
              Normalized view · v3.4
            </div>

            <div className="font-['JetBrains_Mono'] text-[10px] font-normal text-red-400">
              VERIFIED
            </div>
          </div>

          {/* Analyst Artifact */}
          <div className="flex w-full items-start justify-between overflow-hidden border-b border-white/10 py-4">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-white">
              Analyst artifact · hypothesis 02
            </div>

            <div className="font-['JetBrains_Mono'] text-[10px] font-normal text-red-400">
              VERIFIED
            </div>
          </div>

          {/* Decision Record */}
          <div className="flex w-full items-start justify-between overflow-hidden border-b border-white/10 py-4">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-white">
              Decision record · pending
            </div>

            <div className="font-['JetBrains_Mono'] text-[10px] font-normal text-white/40">
              OPEN
            </div>
          </div>

          {/* Action Receipt */}
          <div className="flex w-full items-start justify-between overflow-hidden border-b border-white/10 py-4">
            <div className="font-['JetBrains_Mono'] text-xs font-normal text-white">
              Action receipt · not issued
            </div>

            <div className="font-['JetBrains_Mono'] text-[10px] font-normal text-white/40">
              OPEN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
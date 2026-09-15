"use client";

const capabilities = [
  {
    title: "Security Analytics",
    description: "Rules, correlation and replay context.",
  },
  {
    title: "Case Management",
    description:
      "Investigation, evidence, communications and decision history.",
  },
  {
    title: "Governed Response",
    description: "Decision rights, bounded actions and rollback.",
  },
];

export default function ConditionalChildren() {
  return (
    <section className="w-full bg-stone-100">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 overflow-hidden px-28 py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="h-0.5 w-5 bg-red-500" />

          <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
            07 · Conditional children
          </div>
        </div>

        {/* Heading + Description */}
        <div className="flex w-full flex-col items-start gap-4 overflow-hidden">
          <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
            Capabilities that appear when they are ready.
          </h2>

          <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
            Readiness gates protect the parent platform promise. These
            conditional children are not represented as currently available
            commitments.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="flex w-full items-start gap-5 overflow-hidden">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="flex h-44 w-80 shrink-0 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
            >
              <div className="font-['JetBrains_Mono'] text-[10px] font-normal uppercase text-red-500">
                Available when ready
              </div>

              <div className="w-full font-['Hanken_Grotesk'] text-xl font-extrabold text-slate-900">
                {capability.title}
              </div>

              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
                {capability.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
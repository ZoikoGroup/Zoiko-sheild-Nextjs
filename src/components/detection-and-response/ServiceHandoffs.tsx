 "use client";

const services = [
  {
    label: "Conditional",
    title: "Incident Readiness",
    description:
      "Preparation and response-governance relationship, available when readiness gates are met.",
  },
  {
    label: "Independent service",
    title: "Managed Defense",
    description:
      "A separate security-operations service with its own service contract, coverage and operating model.",
  },
];

export default function ServiceHandoffs() {
  return (
    <section className="w-full bg-stone-200">
      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-16 overflow-hidden px-28 py-24">
        {/* Left Content */}
        <div className="flex w-96 shrink-0 flex-col items-start gap-6 overflow-hidden">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="h-0.5 w-5 bg-red-500" />

            <div className="font-['JetBrains_Mono'] text-xs font-normal uppercase text-red-500">
              08 · Service handoffs
            </div>
          </div>

          {/* Heading + Description */}
          <div className="flex w-full flex-col items-start gap-3.5 overflow-hidden">
            <h2 className="w-full font-['Hanken_Grotesk'] text-4xl font-extrabold leading-10 text-slate-900">
              Clear lines between platform and service.
            </h2>

            <p className="w-full font-['Manrope'] text-base font-normal leading-6 text-gray-500">
              The platform destination does not claim staffed 24x7 response,
              retainer coverage or emergency activation unless a separate
              service contract exists.
            </p>
          </div>

          {/* Notice */}
          <div className="flex w-full flex-col items-start overflow-hidden rounded-2xl bg-rose-100 p-4">
            <div className="w-full font-['Manrope'] text-xs font-normal leading-5 text-slate-900">
              Service scope and activation authority remain explicit.
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex h-60 min-w-0 flex-1 items-start gap-6 overflow-hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-60 min-w-0 flex-1 flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-cyan-950/10"
            >
              <div className="font-['JetBrains_Mono'] text-[10px] font-normal uppercase text-red-500">
                {service.label}
              </div>

              <div className="w-full font-['Hanken_Grotesk'] text-xl font-extrabold text-slate-900">
                {service.title}
              </div>

              <div className="w-full font-['Manrope'] text-sm font-normal leading-5 text-gray-500">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
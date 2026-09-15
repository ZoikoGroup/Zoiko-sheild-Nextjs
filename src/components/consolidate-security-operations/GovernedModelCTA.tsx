"use client";

export default function GovernedModelCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900/70 px-72 py-20">
      {/* Background Image */}
      <img
        src="/images/consolidate-security-operations/background2.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-start gap-6">
        {/* Heading */}
        <h2 className="w-full text-center font-['Hanken_Grotesk'] text-5xl font-extrabold leading-[50.60px] text-white">
          Bring your security operations into one governed model.
        </h2>

        {/* Description */}
        <p className="w-full text-center font-['Manrope'] text-base font-normal text-white/70">
          Connect approved tools, preserve source truth and make every
          consequential action explicit.
        </p>

        {/* Buttons */}
        <div className="flex items-start justify-start gap-3.5 overflow-hidden">
          {/* Book a Demo */}
          <a
            href="/contact-sales"
            className="flex h-12 items-center justify-center overflow-hidden rounded-[10px] bg-red-500 px-6 outline outline-1 outline-offset-[-1px] outline-black/0 transition-opacity hover:opacity-90"
          >
            <span className="font-['Manrope'] text-sm font-bold text-white">
              Book a Demo
            </span>
          </a>

          {/* Explore Detection & Response */}
          <a
            href="/detection-response"
            className="flex h-12 items-center justify-center overflow-hidden rounded-[10px] bg-black/0 px-6 outline outline-1 outline-offset-[-1px] outline-white transition-colors hover:bg-white/10"
          >
            <span className="font-['Manrope'] text-sm font-bold text-white">
              Explore Detection &amp; Response
            </span>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="w-full text-center font-['Manrope'] text-xs font-normal leading-4 text-white/70">
          Consolidation does not guarantee universal tool compatibility,
          complete detection, automatic containment, 24/7 operations,
          compliance or security outcomes.
        </p>
      </div>
    </section>
  );
}
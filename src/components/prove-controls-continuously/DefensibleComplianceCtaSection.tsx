import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DefensibleComplianceCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#081C32] px-6 py-24 sm:px-12 lg:px-24">
      {/* Background Image with Dark Navy Blend */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/prove-controls-continuously/cta-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#081C32]/85" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center text-center">
        <span className="mb-4 font-jetbrains text-[12px] font-bold uppercase tracking-[0.14em] text-[#C44242]">
          READY FOR DEFENSIBLE COMPLIANCE
        </span>

        <h2 className="mb-6 max-w-[800px] font-hanken text-[32px] font-extrabold tracking-[-0.02em] text-white sm:text-[40px] leading-[1.15]">
          Transition from audit panic to a defensible, continuous proof state.
        </h2>

        <p className="mb-10 max-w-[720px] font-manrope text-[16px] font-medium leading-[1.5em] text-[#9FB8D6]">
          Talk with a compliance architect to see how Zoiko Shield unifies your directory, device, and endpoint evidence into cryptographically verified assurance matrices.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#C44242] px-7 py-4 font-manrope text-[15px] font-bold text-white shadow-lg transition-all hover:bg-[#a93030] hover:shadow-xl"
          >
            See Continuous Assurance in Action
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[10px] border border-white px-6 py-4 font-manrope text-[15px] font-bold text-white transition-colors hover:bg-white/10"
          >
            Talk with a Compliance Architect
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";

export default function ReadyToMakeAiAuthorityExplicit() {
  return (
    <div className="relative text-white px-6 py-24 md:py-36 md:px-12 font-sans antialiased flex flex-col items-center justify-center">
      {/* Background Image using Next.js Image component */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/decision/4.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Darkness / Dimming Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#0A2029]/60 backdrop-brightness-75" />

      <div className="w-full max-w-4xl text-center flex flex-col items-center relative z-10">
        {/* Main title */}
        <h1 className="text-3xl md:text-[40px] lg:text-[40px] font-bold tracking-tight text-white leading-tight mb-6">
          Ready to make AI authority explicit?
        </h1>

        {/* Subtitle description */}
        <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          Turn policy, human authority, revalidation and evidence into one
          inspectable operating model.
        </p>

        {/* Action Button */}
        <a
          href="#"
          className="bg-[#D9534F] hover:bg-[#C53030] text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors shadow-lg inline-block"
        >
          Book a Demo
        </a>
      </div>
    </div>
  );
}

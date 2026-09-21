"use client";

import React from "react";
import Image from "next/image";
import { IMG, Reveal, Section, SectionHeader } from "./shared";

export default function VerificationSection() {
  return (
    <Section>
      <SectionHeader eyebrow="HMAC Cryptography" title="Verification Contract & Replay Protection" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
        <Reveal className="flex flex-col gap-4 flex-1 min-w-0">
          <h3 className="font-hanken font-bold text-[20px] text-[#0a2029] m-0">Defensible Cryptographic Signatures</h3>
          <p className="font-manrope text-[15px] leading-[22px] text-[#5b6670] m-0">
            Zoiko Shield signs every delivery payload using a unique
            HMAC-SHA256 signature calculated from the raw payload bytes and
            your verified webhook secret. To prevent replay attacks, the
            payload envelope includes a unique{" "}
            <code className="font-jetbrains text-[14px]">timestamp</code> header.
            Receptors must drop any messages whose timestamp is older than 5
            minutes.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-2 w-full lg:w-[46%] xl:w-[551px] shrink-0">
          <p className="font-manrope font-bold text-[14px] text-[#0a2029] m-0">
            Trusted Infrastructure &amp; Secret Protection
          </p>
          <div className="relative w-full aspect-[551/228] rounded-[12px] overflow-hidden">
            <Image
              src={`${IMG}/verification-visual.webp`}
              alt="Security engineer monitoring signed delivery infrastructure"
              fill
              sizes="(max-width: 1024px) 100vw, 551px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

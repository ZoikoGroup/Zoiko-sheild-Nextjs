"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Download, ShieldCheck } from "lucide-react";

const COUNTDOWN_TARGET = "2026-11-30T23:59:59";

function useCountdown(target: string) {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff / 3600000) % 24),
        min: Math.floor((diff / 60000) % 60),
        sec: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return time;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function DefensibleSecuritySection() {
  const { days, hrs, min, sec } = useCountdown(COUNTDOWN_TARGET);

  const units = [
    { label: "DAYS", value: days },
    { label: "HRS", value: hrs },
    { label: "MIN", value: min },
    { label: "SEC", value: sec },
  ];

  return (
    <section className="relative w-full overflow-x-hidden bg-[#0a1220] px-4 py-12 text-white sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* Top Feature Grid: Immutable Evidence & UI Card */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Text and Checkpoints */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Immutable evidence, traceable to the source.
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/60 sm:mt-4 sm:text-base sm:leading-7">
              Cryptographically verified logs auditors trust and engineers can
              trace. Stop chasing screenshots — start proving control
              effectiveness mathematically.
            </p>

            <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              <li className="flex items-center gap-3 text-xs font-medium text-white/90 sm:text-sm">
                <Check
                  className="h-4 w-4 shrink-0 text-[#4fd1a5]"
                  aria-hidden="true"
                />
                Cryptographic hashing
              </li>
              <li className="flex items-center gap-3 text-xs font-medium text-white/90 sm:text-sm">
                <Check
                  className="h-4 w-4 shrink-0 text-[#4fd1a5]"
                  aria-hidden="true"
                />
                Chain of custody tracking
              </li>
              <li className="flex items-center gap-3 text-xs font-medium text-white/90 sm:text-sm">
                <Check
                  className="h-4 w-4 shrink-0 text-[#4fd1a5]"
                  aria-hidden="true"
                />
                One-click auditor export
              </li>
            </ul>
          </div>

          {/* Right UI Preview Card */}
          <div className="rounded-xl border border-white/10 bg-[#0d1626] p-4 shadow-2xl sm:p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
              </div>
              <span className="rounded bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70 sm:text-xs">
                Verified — Action
              </span>
            </div>

            <div className="mt-4">
              <p className="font-mono text-[10px] uppercase text-white/40 sm:text-xs">
                Evidentiary Record
              </p>
              <h3 className="mt-1 font-mono text-lg font-bold tracking-tight text-white sm:text-xl">
                SHA-256
              </h3>

              <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs sm:gap-4">
                <div>
                  <span className="text-white/40">Audit event</span>
                  <p className="mt-1 text-white/80">0xAB3Y28</p>
                </div>
                <div>
                  <span className="text-white/40">Timestamp</span>
                  <p className="mt-1 truncate text-white/80">2026-06-04T05:42:11Z</p>
                </div>
              </div>

              <div className="mt-4">
                <span className="font-mono text-xs text-white/40">
                  Control ID
                </span>
                <p className="mt-1 font-mono text-xs text-white/85">
                  AC-2 Identity Access Mgmt
                </p>
              </div>

              <div className="mt-4 break-all rounded-lg border border-white/5 bg-[#070e17] p-2.5 font-mono text-[11px] text-[#7fb2ff] sm:p-3 sm:text-xs">
                0d4d04664 d8d7d2d89 ddn90c1f7 6b1d6d29 d1dd1cac6 db7d2ddf32ea4
              </div>

              <div className="mt-4 flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs text-[#4fd1a5]">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>Chain of custody intact</span>
                </div>
                <Link href="/sign-in" className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 font-mono text-xs font-semibold text-white transition hover:bg-white/15 sm:w-auto">
                  <Download className="h-3.5 w-3.5" />
                  Download artifact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Ready for Defensible Security CTA Card */}
        <div className="relative mt-16 overflow-visible rounded-3xl bg-gradient-to-r from-[#0E3450] via-[#7A2A2C] to-[#B23232] px-4 py-12 text-center sm:mt-24 sm:px-12 sm:py-16">
          {/* Black Friday Ribbon anchored precisely to the top-right corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-40px] top-[15px] z-30 hidden w-[150px] rotate-[28deg] rounded-sm bg-[#d9473f] py-1.5 text-center shadow-2xl md:block"
          >
            <p className="text-xs font-extrabold uppercase leading-4 tracking-wider text-white">
              Black Friday
            </p>
            <p className="text-xs italic leading-4 text-white/90">Sale</p>
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
            Ready for defensible security?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
            Talk with our team about unifying control monitoring and automating
            your compliance evidence — before the Black Friday window closes.
          </p>

          {/* Countdown timer */}
          <div className="mx-auto mt-6 flex max-w-md justify-center gap-2 sm:mt-8 sm:gap-3">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="w-16 rounded-xl border border-white/15 bg-black/30 py-2.5 text-center sm:w-20 sm:py-3"
              >
                <p className="font-mono text-xl font-extrabold sm:text-2xl">
                  {pad(unit.value)}
                </p>
                <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-white/50 sm:text-[10px]">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/book-a-demo"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-center text-xs font-semibold text-[#0a1220] shadow-lg transition hover:bg-white/90 sm:w-auto sm:text-sm"
            >
              Book a security consultation →
            </Link>
            <Link
              href="/platform-overview"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-center text-xs font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:text-sm"
            >
              Explore the platform
            </Link>
          </div>

          {/* Disclaimer text */}
          <p className="mx-auto mt-6 max-w-2xl text-[10px] leading-4 text-white/40 sm:mt-8 sm:text-[11px]">
            Black Friday enterprise onboarding terms are proposed and subject to
            approval. Capabilities shown describe platform functionality and are
            not a guarantee of outcomes, certification, or incident-response
            commitments.
          </p>
        </div>
      </div>
    </section>
  );
}
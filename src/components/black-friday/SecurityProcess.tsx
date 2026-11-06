"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, FileText, Search, ShieldCheck, Tag, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STEPS: readonly {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    step: "Step 01",
    title: "Connect",
    description:
      "Ingest data from across your stack — no agents to rebuild, no workflows to replace.",
    icon: Zap,
  },
  {
    step: "Step 02",
    title: "Analyze",
    description:
      "Correlate signals and surface true risk, not noise — tuned for regulated environments.",
    icon: Search,
  },
  {
    step: "Step 03",
    title: "Govern",
    description:
      "Map findings to frameworks — with human oversight and a named approver on key actions.",
    icon: ShieldCheck,
  },
  {
    step: "Step 04",
    title: "Prove",
    description:
      "Generate immutable evidence ledgers your auditors and board can rely on.",
    icon: FileText,
  },
] as const;

const COUNTDOWN_TARGET = "2026-11-30T23:59:59";

const PATHS = [
  {
    eyebrow: "Fully managed",
    title: "Managed Defense",
    description:
      "Partner with our analysts to operate your security and compliance workflows.",
    features: [
      "24/7 analyst coverage",
      "Named approver per action",
      "Quarterly control reviews",
    ],
    cta: "Explore managed services",
    href: "/managed-defense",
    featured: false,
  },
  {
    eyebrow: "Self-directed",
    title: "Continuous Assurance",
    description:
      "Deploy the platform to unify visibility and automate evidence collection.",
    features: [
      "40+ native integrations",
      "Automated evidence collection",
      "Framework mapping & export",
    ],
    cta: "Explore the platform",
    href: "/platform-overview",
    featured: true,
  },
] as const;

function SaleRibbon({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-30 hidden w-[150px] rounded-sm bg-[#d9473f] py-1.5 text-center shadow-2xl md:block ${className}`}
    >
      <p className="text-xs font-extrabold uppercase tracking-wider leading-4 text-white">
        Black Friday
      </p>
      <p className="text-xs italic leading-4 text-white/90">Sale</p>
    </div>
  );
}

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

export default function SecurityProcess() {
  const { days, hrs, min, sec } = useCountdown(COUNTDOWN_TARGET);

  const units = [
    { label: "Days", value: days },
    { label: "Hrs", value: hrs },
    { label: "Min", value: min },
    { label: "Sec", value: sec },
  ];

  return (
    /* Changed overflow-hidden to overflow-x-hidden so vertical overflow isn't chopped off */
    <section className="relative w-full overflow-x-hidden bg-[#0B131C] px-6 py-16 text-white sm:px-8 lg:px-10">
      {/* First Ribbon: Top-Right Corner */}
      <SaleRibbon className="right-[-40px] top-[24px] rotate-[28deg]" />

      {/* From raw signal */}
      <div className="relative mx-auto max-w-[1200px]">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          From raw signal to boardroom-ready proof.
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#111b2e] p-5"
              >
                <p className="font-mono text-sm uppercase tracking-[0.1em] text-[#f0807a]">
                  {item.step}
                </p>
                <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-[#7fb2ff]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/60">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Second Ribbon: Top-Left Corner of the lower section */}
      <SaleRibbon className="left-[-40px] top-[460px] rotate-[-28deg]" />

      {/* Start strong */}
      <div className="relative mx-auto mt-28 max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Start strong — on your terms.
          </h2>
          <p className="mt-3 text-base text-white/60">
            Bring us in to run it, or deploy the platform with your own team.
          </p>
        </div>

        <div className="relative mt-12 grid overflow-visible rounded-2xl border border-white/20 bg-[#0d1626] lg:grid-cols-[0.8fr_1.6fr]">
          {/* Offer panel */}
          <div className="relative rounded-l-2xl bg-gradient-to-br from-[#2a1a22] via-[#13233d] to-[#0f2a4a] p-6 pt-10 sm:p-8 sm:pt-10">
            {/* Circular Save 20% Badge positioned on top border */}
            <div className="absolute left-1/2 top-[-38px] -translate-x-1/2 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#0B131C] border border-white/10 shadow-2xl z-30">
              <div className="text-center">
                <p className="text-[10px] font-extrabold uppercase leading-3 tracking-tight">
                  Save
                </p>
                <p className="text-base font-extrabold leading-4 text-[#f0807a]">
                  20%
                </p>
                <p className="font-mono text-[9px] uppercase leading-3 text-white/60">
                  Year one*
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#d9473f]/60 bg-[#d9473f]/10 px-3 py-1 font-mono text-sm uppercase text-[#f0807a]">
              <Tag className="h-4 w-4" aria-hidden="true" />
              Black Friday Offer
            </span>

            <p className="mt-6 text-5xl font-extrabold leading-none text-[#f0807a]">
              20%
              <br />
              OFF*
            </p>
            <p className="mt-4 text-base leading-6 text-white/85">
              first year of an eligible annual subscription
            </p>

            <ul className="mt-6 grid grid-cols-4 gap-2">
              {units.map((unit) => (
                <li
                  key={unit.label}
                  className="rounded-lg border border-white/15 bg-[#0B131C]/70 py-2 text-center"
                >
                  <p className="font-mono text-xl font-bold">
                    {pad(unit.value)}
                  </p>
                  <p className="font-mono text-xs uppercase text-white/50">
                    {unit.label}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-5 text-white/50">
              *Proposed — subject to product, finance and legal approval. For
              qualified new customers on an eligible annual subscription.
              Standard pricing applies after year one. A no-cost staging call is
              available without any discount claim.
            </p>
          </div>

          {/* Paths */}
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold">Two ways to get started</h3>
            <p className="mt-2 text-sm text-white/60">
              Whichever fits how your team operates.
            </p>

            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {PATHS.map((path) => (
                <li
                  key={path.title}
                  className={
                    path.featured
                      ? "flex flex-col rounded-xl border border-[#d9473f]/70 bg-[#111b2e] p-5 shadow-[0_0_30px_rgba(217,71,63,0.25)]"
                      : "flex flex-col rounded-xl border border-white/10 bg-[#111b2e] p-5"
                  }
                >
                  <p className="font-mono text-sm uppercase tracking-[0.1em] text-white/50">
                    {path.eyebrow}
                  </p>
                  <h4 className="mt-2 text-lg font-bold">{path.title}</h4>
                  <p className="mt-2 text-sm leading-5 text-white/60">
                    {path.description}
                  </p>

                  <ul className="mt-4 space-y-2.5 flex-1">
                    {path.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-white/85"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#4fd1a5]"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={path.href}
                    className={
                      path.featured
                        ? "mt-6 inline-flex items-center justify-center rounded-lg bg-[#d9473f] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d9473f]/40 transition hover:bg-[#c33d35]"
                        : "mt-6 inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    }
                  >
                    {path.cta}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

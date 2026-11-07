import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  Cloud,
  FileCheck,
  Hexagon,
  Landmark,
  LayoutGrid,
  Layers,
  ShieldCheck,
  Tag,
  type LucideIcon,
} from "lucide-react";

type Brand = { name: string; icon: LucideIcon };

const BRANDS: readonly Brand[] = [
  { name: "Meridian Financial", icon: Building2 },
  { name: "Harbor Health", icon: Hexagon },
  { name: "Velocity Cloud", icon: Cloud },
  { name: "Ashford Capital", icon: Landmark },
  { name: "Northwind Systems", icon: Layers },
  { name: "Clearline Pay", icon: CircleDollarSign },
] as const;

const TIERS = [
  {
    name: "Essentials",
    description: "Core control monitoring and evidence for a single team.",
    price: "$1,200",
    unit: "/mo*",
    was: "Year one: ",
    wasPrice: "$960/mo with Black Friday*",
    wasStruck: "$1,200",
    cta: "Book a consultation",
    href: "/book-a-demo",
    featured: false,
    includesLabel: "Includes",
    features: [
      "Up to 25 monitored controls",
      "Continuous control monitoring",
      "Immutable evidence ledger",
      "1 framework mapping",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "Unified assurance and automated evidence across your stack.",
    price: "$3,500",
    unit: "/mo*",
    was: "Year one: ",
    wasPrice: "$2,800/mo with Black Friday*",
    wasStruck: "$3,500",
    cta: "Book a consultation",
    href: "/book-a-demo",
    featured: true,
    includesLabel: "Everything in Essentials, plus",
    features: [
      "Up to 200 monitored controls",
      "40+ native integrations",
      "Multi-framework mapping & export",
      "Correlated risk scoring",
      "Priority support & onboarding",
    ],
  },
  {
    name: "Enterprise",
    description: "Enterprise-wide coverage with managed defense options.",
    price: "Custom",
    unit: "",
    was: "",
    wasPrice: "",
    wasStruck: "Tailored to your environment",
    cta: "Talk to sales",
    href: "/contact",
    featured: false,
    includesLabel: "Everything in Professional, plus",
    features: [
      "Unlimited monitored controls",
      "Managed Defense (24/7 analysts)",
      "Named approver & control reviews",
      "SSO, SCIM & advanced access",
      "Dedicated account team",
    ],
  },
] as const;

const PILLARS: readonly {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Mathematical certainty",
    description:
      "Cryptographic proof that controls are active and effective — not a screenshot or a hash pasted into a slide.",
    icon: ShieldCheck,
  },
  {
    title: "Unified stack",
    description:
      "Ingest telemetry from your existing investments — designed to work with them, not rip-and-replace.",
    icon: LayoutGrid,
  },
  {
    title: "Continuous compliance",
    description:
      "Map controls to common frameworks — such as SOC 2, ISO 27001 and HIPAA — and keep the mapping current.",
    icon: ShieldCheck,
  },
  {
    title: "Defensible evidence",
    description:
      "Immutable ledgers auditors and boards can rely on — exportable in one click.",
    icon: FileCheck,
  },
] as const;

function SaleRibbon({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute hidden w-[150px] rounded-md bg-[#d9473f] py-2 text-center shadow-xl md:block ${className}`}
    >
      <p className="text-sm font-extrabold uppercase leading-4 text-white">
        Black Friday
      </p>
      <p className="text-sm italic leading-4 text-white/90">Sale</p>
    </div>
  );
}

export default function SecurityPricing() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a1220] text-white">
      {/* Trusted by */}
      <div className="border-b border-white/10 px-6 py-4 sm:px-8 lg:px-10">
        <p className="text-center font-mono text-sm uppercase tracking-[0.18em] text-white/50">
          Trusted by security &amp; compliance teams at regulated enterprises
        </p>
        <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {BRANDS.map((brand) => {
            const Icon = brand.icon;
            return (
              <li
                key={brand.name}
                className="flex items-center gap-2 text-sm text-white/70"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {brand.name}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Pricing */}
      <div className="relative px-6 pb-20 pt-16 sm:px-8 lg:px-10">
        <SaleRibbon className="right-[-30px] top-6 rotate-[18deg]" />

        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="mx-auto max-w-[520px] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Protection that scales with your business.
            </h2>
            <p className="mx-auto mt-4 max-w-[460px] text-base leading-7 text-white/60">
              Transparent tiers for every stage — from your first controls to
              enterprise-wide assurance. Billed annually.
            </p>
            <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#d9473f]/50 bg-[#d9473f]/10 px-4 py-1.5 font-mono text-sm text-white/80">
              <Tag className="h-4 w-4 text-[#f0807a]" aria-hidden="true" />
              Black Friday: 20% off year one on eligible tiers*
            </p>
          </div>

          <ul className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {TIERS.map((tier) => (
              <li
                key={tier.name}
                className={
                  tier.featured
                    ? "relative flex flex-col rounded-xl border border-[#d9473f] bg-[#111b2e] p-5 shadow-[0_0_40px_rgba(217,71,63,0.35)]"
                    : "relative flex flex-col rounded-xl border border-white/10 bg-[#111b2e] p-5"
                }
              >
                {tier.featured && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9473f] px-3 py-1 font-mono text-sm font-bold uppercase tracking-[0.08em]">
                    Most popular
                  </span>
                )}

                <h3 className="text-base font-bold">{tier.name}</h3>
                <p className="mt-2 text-sm leading-5 text-white/60">
                  {tier.description}
                </p>

                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">{tier.price}</span>
                  <span className="text-sm text-white/60">{tier.unit}</span>
                </p>
                <p className="mt-1 text-sm text-white/50">
                  {tier.was ? (
                    <>
                      <span className="line-through">{tier.wasStruck}</span>{" "}
                      <span className="font-semibold text-[#f0807a]">
                        {tier.wasPrice}
                      </span>
                    </>
                  ) : (
                    <span className="line-through">{tier.wasStruck}</span>
                  )}
                </p>

                <Link
                  href={tier.href}
                  className={
                    tier.featured
                      ? "mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d9473f] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d9473f]/40"
                      : "mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white"
                  }
                >
                  {tier.cta}
                  {tier.featured && (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-mono text-sm uppercase tracking-[0.1em] text-white/50">
                    {tier.includesLabel}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {tier.features.map((feature) => (
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Prove your controls */}
      <div className="relative px-6 pb-20 pt-10 sm:px-8 lg:px-10">
        <SaleRibbon className="left-[-30px] top-0 rotate-[-18deg]" />

        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <h2 className="mx-auto max-w-[540px] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Prove your controls — don&apos;t just promise them.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base leading-7 text-white/60">
              Credibility built on evidence, not alarmist claims. A
              comprehensive set of security and compliance tools, designed to
              work with the stack you already run.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <li
                  key={pillar.title}
                  className="rounded-xl border border-white/10 bg-[#111b2e] p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9473f]/15 text-[#f0807a]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-5 text-white/60">
                    {pillar.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

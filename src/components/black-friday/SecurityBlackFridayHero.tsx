import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Tag } from "lucide-react";

const HEADLINE = [
  [{ text: "Security deserves", accent: false }],
  [{ text: "more than a", accent: false }],
  [{ text: "promise.", accent: true }],
] as const;

const ACTIONS = [
  {
    label: "Book a security consultation",
    href: "/security-trust-center",
    primary: true,
  },
  {
    label: "Explore the platform",
    href: "/platform-overview",
    primary: false,
  },
] as const;

const BADGES = [
  "Evidence-based",
  "Human-in-the-loop",
  "Framework mapping",
  "Works with your stack",
] as const;

export default function SecurityBlackFridayHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#13233d] text-white">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(120,40,50,0.55),transparent_45%),radial-gradient(ellipse_at_100%_100%,rgba(185,50,45,0.7),transparent_45%),linear-gradient(135deg,#1a2338_0%,#16304f_55%,#1a2a45_100%)]"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold uppercase tracking-[0.06em] text-[#c0392b]">
              <Tag className="h-4 w-4" aria-hidden="true" />
              Black Friday Sale 2026
            </span>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[56px]">
              {HEADLINE.map((line, i) => (
                <span key={i} className="block">
                  {line.map((part) => (
                    <span
                      key={part.text}
                      className={part.accent ? "text-[#f0807a]" : ""}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[420px] text-base leading-7 text-white/80">
              Threat defense, control assurance, and evidence you can trace to
              its source — connected across the security tools you already run.
            </p>

            <div className="mt-6 max-w-[440px] overflow-hidden rounded-xl border border-white/15 shadow-xl">
              <div className="flex items-center justify-between bg-[#0f1a2b] px-4 py-2 font-mono text-sm uppercase tracking-[0.12em]">
                <span className="text-[#f0807a]">Black Friday Offer</span>
                <span className="text-white/60">27 – 30 Nov</span>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 py-3 text-[#14233a]">
                <p className="shrink-0 text-4xl font-extrabold text-[#c0392b]">
                  20%{" "}
                  <span className="text-lg font-bold text-[#14233a]">OFF*</span>
                </p>
                <span aria-hidden="true" className="h-10 w-px bg-[#d9dde4]" />
                <p className="text-sm leading-5">
                  the first year of an{" "}
                  <strong className="font-bold text-[#c0392b]">
                    eligible annual
                  </strong>{" "}
                  <strong className="font-bold text-[#c0392b]">
                    subscription
                  </strong>
                  , for qualified new customers
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex items-center gap-2 rounded-lg bg-[#c0392b] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#c0392b]/40"
                      : "inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white"
                  }
                >
                  {action.label}
                  {action.primary && (
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              ))}
            </div>

            <ul className="mt-6 flex max-w-[440px] flex-wrap gap-x-5 gap-y-2">
              {BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-2 text-sm text-white/80"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-[#4fd1a5]"
                    aria-hidden="true"
                  />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="relative mx-auto w-full max-w-[560px] pt-10 lg:max-w-none">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <Image
                src="/images/home/bg.png"
                alt="Security operations dashboard on a monitor showing a world map and activity charts"
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-lg border border-white/15 bg-[#0f1a2b]/90 px-4 py-3 backdrop-blur">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-[#3ddc84]"
                />
                <div>
                  <p className="font-mono text-sm uppercase leading-4 text-[#4fd1a5]">
                    Verified · Active
                  </p>
                  <p className="font-mono text-sm leading-4 text-white/60">
                    AC-2 · 42 controls monitored
                  </p>
                </div>
              </div>
            </div>

            {/* Save badge */}
            <div className="absolute left-0 top-0 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#0f1a2b] shadow-xl lg:left-[-30px]">
              <div className="text-center">
                <p className="text-sm font-extrabold uppercase leading-4">
                  Save
                </p>
                <p className="text-xl font-extrabold leading-6 text-[#f0807a]">
                  20%
                </p>
                <p className="font-mono text-sm uppercase leading-4 text-white/60">
                  Year one*
                </p>
              </div>
            </div>

            {/* Sale tag */}
            <div className="absolute right-4 top-2 rounded-lg bg-[#0f1a2b] px-4 py-3 shadow-xl sm:right-6">
              <span
                aria-hidden="true"
                className="mb-2 block h-3 w-3 rounded-full border-2 border-white/70"
              />
              <p className="text-base font-extrabold uppercase leading-5">
                Black
                <br />
                Friday
                <br />
                <span className="text-[#f0807a]">Sale</span>
              </p>
              <p className="mt-1 font-mono text-sm uppercase text-white/60">
                Nov 27 – 30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

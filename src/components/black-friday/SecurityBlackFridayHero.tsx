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

      <div className="relative mx-auto max-w-[1200px] px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#c0392b] sm:px-4 sm:text-sm">
              <Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              Black Friday Sale 2026
            </span>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:mt-5 sm:text-6xl lg:text-[56px]">
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

            <p className="mt-4 max-w-[420px] text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7">
              Threat defense, control assurance, and evidence you can trace to
              its source — connected across the security tools you already run.
            </p>

            <div className="mt-6 max-w-[440px] overflow-hidden rounded-xl border border-white/15 shadow-xl">
              <div className="flex items-center justify-between bg-[#0f1a2b] px-3.5 py-2 font-mono text-xs uppercase tracking-[0.12em] sm:px-4 sm:text-sm">
                <span className="text-[#f0807a]">Black Friday Offer</span>
                <span className="text-white/60">27 – 30 Nov</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-3.5 py-3 text-[#14233a] sm:gap-4 sm:px-4">
                <p className="shrink-0 text-3xl font-extrabold text-[#c0392b] sm:text-4xl">
                  20%{" "}
                  <span className="text-base font-bold text-[#14233a] sm:text-lg">
                    OFF*
                  </span>
                </p>
                <span aria-hidden="true" className="h-10 w-px bg-[#d9dde4]" />
                <p className="text-xs leading-4 sm:text-sm sm:leading-5">
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

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {ACTIONS.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className={
                    action.primary
                      ? "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c0392b] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#c0392b]/40 sm:w-auto"
                      : "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
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
                  className="flex items-center gap-2 text-xs text-white/80 sm:text-sm"
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
          <div className="relative mx-auto w-full max-w-[560px] pt-8 sm:pt-10 lg:max-w-none lg:pt-10">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
              <Image
                src="/images/home/bg.png"
                alt="Security operations dashboard on a monitor showing a world map and activity charts"
                fill
                sizes="(min-width: 1024px) 50vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2.5 rounded-lg border border-white/15 bg-[#0f1a2b]/90 px-3 py-2.5 backdrop-blur sm:bottom-6 sm:left-6 sm:gap-3 sm:px-4 sm:py-3">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-[#3ddc84]"
                />
                <div>
                  <p className="font-mono text-xs uppercase leading-4 text-[#4fd1a5] sm:text-sm">
                    Verified · Active
                  </p>
                  <p className="font-mono text-xs leading-4 text-white/60 sm:text-sm">
                    AC-2 · 42 controls monitored
                  </p>
                </div>
              </div>
            </div>

            {/* Save badge */}
            <div className="absolute -top-2 left-0 flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#0f1a2b] shadow-xl sm:top-0 sm:h-[110px] sm:w-[110px] lg:left-[-30px] lg:h-[120px] lg:w-[120px]">
              <div className="text-center">
                <p className="text-xs font-extrabold uppercase leading-3 sm:text-sm sm:leading-4">
                  Save
                </p>
                <p className="text-lg font-extrabold leading-5 text-[#f0807a] sm:text-xl sm:leading-6">
                  20%
                </p>
                <p className="font-mono text-[10px] uppercase leading-3 text-white/60 sm:text-sm sm:leading-4">
                  Year one*
                </p>
              </div>
            </div>

            {/* Sale tag */}
            <div className="absolute right-2 top-0 rounded-lg bg-[#0f1a2b] px-3 py-2.5 shadow-xl sm:right-6 sm:top-2 sm:px-4 sm:py-3">
              <span
                aria-hidden="true"
                className="mb-1.5 block h-2.5 w-2.5 rounded-full border-2 border-white/70 sm:mb-2 sm:h-3 sm:w-3"
              />
              <p className="text-xs font-extrabold uppercase leading-4 sm:text-base sm:leading-5">
                Black
                <br />
                Friday
                <br />
                <span className="text-[#f0807a]">Sale</span>
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase text-white/60 sm:text-sm">
                Nov 27 – 30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Tag, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Config                                                              */
/* ------------------------------------------------------------------ */

// Sale window (27 – 30 Nov 2026). Popup shows as a teaser before the sale,
// switches to a "live" countdown during it, and stops showing once it ends.
const SALE_START = new Date("2026-11-27T00:00:00");
const SALE_END = new Date("2026-11-30T23:59:59");

const OPEN_DELAY_MS = 1500;
const STORAGE_KEY = "zs-bf-2026-popup-dismissed";

// Never interrupt these routes.
const EXCLUDED_PREFIXES = ["/black-friday", "/dashboard", "/sign-in", "/api"];

const BADGES = [
  "Evidence-based",
  "Human-in-the-loop",
  "Framework mapping",
  "Works with your stack",
] as const;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function isExcluded(pathname: string | null) {
  if (!pathname) return true;
  return EXCLUDED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

function wasDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable – popup simply may show again */
  }
}

type Countdown = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: Date, now: Date): Countdown {
  const ms = Math.max(0, target.getTime() - now.getTime());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

function useNow(active: boolean) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, [active]);
  return now;
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function BlackFridayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const now = useNow(open);

  const isLive = now >= SALE_START;
  const countdown = diff(isLive ? SALE_END : SALE_START, now);

  // Decide whether to open (once per session, after a short delay).
  useEffect(() => {
    if (isExcluded(pathname)) {
      setOpen(false);
      return;
    }
    if (new Date() > SALE_END || wasDismissed()) return;

    const id = window.setTimeout(() => {
      lastFocused.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    }, OPEN_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const close = useCallback(() => {
    rememberDismissed();
    setOpen(false);
    lastFocused.current?.focus?.();
  }, []);

  // Escape to close, lock background scroll, move focus into dialog.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, close]);

  const units: [string, number][] = [
    ["Days", countdown.days],
    ["Hrs", countdown.hours],
    ["Min", countdown.minutes],
    ["Sec", countdown.seconds],
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="bf-overlay"
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close Black Friday offer"
            tabIndex={-1}
            onClick={close}
            className="absolute inset-0 cursor-default bg-[#050b16]/75 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="bf-popup-title"
            aria-describedby="bf-popup-desc"
            className="relative w-full max-w-[880px] max-h-[calc(100dvh-2rem)] overflow-y-auto overflow-x-hidden rounded-2xl border border-white/15 bg-[#13233d] text-white shadow-[0_30px_80px_-10px_rgba(0,0,0,0.7),0_0_60px_rgba(217,71,63,0.35)]"
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            {/* Background glow (matches /black-friday hero) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,rgba(120,40,50,0.55),transparent_45%),radial-gradient(ellipse_at_100%_100%,rgba(185,50,45,0.7),transparent_45%),linear-gradient(135deg,#1a2338_0%,#16304f_55%,#1a2a45_100%)]"
            />
            {/* Subtle grid texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:28px_28px]"
            />

            {/* Close */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#0f1a2b]/80 text-white/80 transition hover:rotate-90 hover:bg-[#d9473f] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0807a]"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="relative grid md:grid-cols-[0.9fr_1.1fr]">
              {/* ---------------- Left: visual offer panel ---------------- */}
              <div className="relative flex items-center justify-center overflow-hidden border-b border-white/10 bg-[#0a1220]/70 px-6 pb-8 pt-12 md:border-b-0 md:border-r md:py-10">
                {/* Rotating ring */}
                <motion.div
                  aria-hidden="true"
                  className="absolute h-[260px] w-[260px] rounded-full border border-dashed border-[#f0807a]/40 md:h-[300px] md:w-[300px]"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                />
                {/* Pulsing glow */}
                <motion.div
                  aria-hidden="true"
                  className="absolute h-[180px] w-[180px] rounded-full bg-[#d9473f]/40 blur-3xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />

                <div className="relative text-center">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">
                    Year one*
                  </p>
                  <motion.p
                    className="mt-1 bg-gradient-to-b from-white to-[#f0807a] bg-clip-text text-[96px] font-extrabold leading-none tracking-tight text-transparent md:text-[120px]"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
                  >
                    20%
                  </motion.p>
                  <p className="-mt-1 text-2xl font-extrabold uppercase tracking-[0.2em] md:text-3xl">
                    Off
                  </p>
                  <p className="mx-auto mt-3 max-w-[220px] text-xs leading-5 text-white/70">
                    the first year of an eligible annual subscription
                  </p>
                </div>

                {/* Sale tag (top-left) */}
                <motion.div
                  className="absolute left-4 top-4 rounded-lg bg-[#d9473f] px-3 py-2 shadow-xl"
                  initial={{ rotate: -14, y: -20, opacity: 0 }}
                  animate={{ rotate: -8, y: 0, opacity: 1 }}
                  transition={{ delay: 0.35, type: "spring", stiffness: 220, damping: 14 }}
                >
                  <p className="text-[11px] font-extrabold uppercase leading-[13px]">
                    Black
                    <br />
                    Friday
                  </p>
                  <p className="text-[11px] italic leading-[13px] text-white/90">Sale</p>
                </motion.div>

                {/* Date chip (bottom-right) */}
                <div className="absolute bottom-3 right-4 hidden rounded-md border border-white/15 bg-[#0f1a2b]/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/70 md:block">
                  Nov 27 – 30
                </div>
              </div>

              {/* ---------------- Right: content ---------------- */}
              <div className="relative px-6 py-7 sm:px-8 md:py-9">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#c0392b] sm:text-xs">
                  <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                  Black Friday Sale 2026
                </span>

                <h2
                  id="bf-popup-title"
                  className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl"
                >
                  Security deserves more than a{" "}
                  <span className="text-[#f0807a]">promise.</span>
                </h2>

                <p
                  id="bf-popup-desc"
                  className="mt-3 text-sm leading-6 text-white/75"
                >
                  Threat defense, control assurance, and evidence you can trace
                  to its source — now{" "}
                  <strong className="font-bold text-white">20% off year one</strong>{" "}
                  for qualified new customers.
                </p>

                {/* Countdown */}
                <div className="mt-5">
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60 sm:text-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f0807a] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d9473f]" />
                    </span>
                    {isLive ? "Offer ends in" : "Sale starts in"}
                  </p>
                  <div
                    className="mt-2 grid max-w-[340px] grid-cols-4 gap-2"
                    role="timer"
                    aria-live="off"
                  >
                    {units.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-lg border border-white/15 bg-[#0f1a2b]/80 py-2 text-center"
                      >
                        <p className="font-mono text-xl font-bold tabular-nums leading-6 sm:text-2xl">
                          {String(value).padStart(2, "0")}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/50">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/black-friday"
                    onClick={close}
                    className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#d9473f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#d9473f]/40 transition hover:bg-[#c33d36] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
                  >
                    {/* Shine sweep */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
                      animate={{ left: ["-50%", "150%"] }}
                      transition={{ repeat: Infinity, duration: 2.4, repeatDelay: 1.2, ease: "easeInOut" }}
                    />
                    <span className="relative">Claim 20% off</span>
                    <ArrowRight
                      className="relative h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={close}
                    className="text-sm font-medium text-white/60 underline-offset-4 transition hover:text-white hover:underline"
                  >
                    No thanks, maybe later
                  </button>
                </div>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
                  {BADGES.map((badge) => (
                    <li
                      key={badge}
                      className="flex items-center gap-2 text-xs text-white/75"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-[#4fd1a5]"
                        aria-hidden="true"
                      />
                      {badge}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-[11px] leading-4 text-white/40">
                  *Applies to the first year of an eligible annual subscription
                  for qualified new customers. Offer valid 27 – 30 Nov 2026.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

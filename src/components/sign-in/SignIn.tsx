"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const POINTS = [
  "Phishing-resistant sign-in methods first.",
  "Access scoped to your organization and role.",
  "Every privileged action attributable and reviewable.",
] as const;

const INPUT_CLASS =
  "mt-2 block w-full rounded-md border border-[#C9D4DA] bg-white px-4 py-3.5 text-[14px] text-[#0F3340] outline-none placeholder:text-[#8C9AA2] focus-visible:ring-2 focus-visible:ring-[#C44245]";

export default function SignIn() {
  const [email, setEmail] = useState("");

  return (
    <main className="grid w-full grid-cols-1 bg-white font-sans text-[#0F3340] lg:grid-cols-[0.485fr_0.515fr]">
      <section className="relative min-h-[420px] overflow-hidden text-white lg:min-h-screen">
        <Image
          src="/images/signin/signin.png"
          alt="Professional working on a laptop in a modern office"
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1D4A63]/60 via-[#1D4A63]/75 to-[#17394E]/90"
          aria-hidden="true"
        />

        <div className="relative flex h-full min-h-[420px] flex-col justify-between p-6 sm:p-10 lg:min-h-screen">
          <Link href="/" aria-label="ZoikoShield home" className="w-fit">
            <span className="inline-flex rounded-xl bg-white px-3 py-2">
              <Image
                src="/images/logo.png"
                alt="ZoikoShield"
                width={80}
                height={32}
                priority
                className="h-auto w-[80px]"
              />
            </span>
          </Link>

          <div className="max-w-[400px] py-10 lg:py-0">
            <h2 className="text-[30px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[34px]">
              Secure access. Clear accountability.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-white/80">
              Your organization&apos;s security workspace — detection,
              investigation, governed response and verifiable evidence.
            </p>
            <ul className="mt-9 flex flex-col gap-4">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[14px] leading-snug text-white/85"
                >
                  <span
                    className="mt-1 block h-3 w-3 shrink-0 rounded-[2px] border-[1.5px] border-[#F0A8A8]"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
            Zoiko Tech · Part of Zoiko Group
          </p>
        </div>
      </section>

      <section className="flex flex-col px-6 py-8 sm:px-10 lg:px-[34px]">
        <nav
          aria-label="Secondary"
          className="flex items-center gap-8 text-[13px] text-[#4B5A62]"
        >
          <Link href="/" className="transition-colors hover:text-[#0F3340]">
            Back to website
          </Link>
          <Link href="#" className="transition-colors hover:text-[#0F3340]">
            Help
          </Link>
        </nav>

        <div className="mx-auto flex w-full max-w-[345px] flex-1 flex-col justify-center py-14">
          <h1 className="text-[32px] font-semibold tracking-[-0.025em] text-[#0F3340]">
            Sign in to ZoikoShield
          </h1>
          <p className="mt-2 text-[14px] text-[#5B6A72]">
            Use your organization&apos;s approved sign-in method.
          </p>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 flex flex-col"
          >
            <label
              htmlFor="work-email"
              className="block text-[12px] font-semibold text-[#0F3340]"
            >
              Work email
            </label>
            <input
              id="work-email"
              type="email"
              required
              autoComplete="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={INPUT_CLASS}
            />

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-[#C44245] py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C44245]"
            >
              Continue
            </button>

            <div className="my-5 flex items-center gap-4" aria-hidden="true">
              <span className="h-px flex-1 bg-[#DDE4E8]" />
              <span className="text-[11px] tracking-wide text-[#6B7A82]">
                OR
              </span>
              <span className="h-px flex-1 bg-[#DDE4E8]" />
            </div>

            <button
              type="button"
              className="w-full rounded-md border border-[#C9D4DA] bg-white py-3.5 text-[14px] font-semibold text-[#0F3340] transition-colors hover:bg-[#F5F8FA]"
            >
              Use a Passkey
            </button>
          </form>

          <Link
            href="#"
            className="mt-7 self-center text-[13px] font-semibold text-[#0F3340] underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            Need help signing in?
          </Link>

          <p className="mt-5 flex items-center gap-2 text-[11px] text-[#5B6A72]">
            <span
              className="block h-2 w-2 shrink-0 rounded-full border-2 border-[#0F3340]"
              aria-hidden="true"
            />
            Authorized access to your organization&apos;s security workspace.
          </p>

          <p className="mt-5 border-t border-[#DDE4E8] pt-5 text-[12px] leading-[1.6] text-[#5B6A72]">
            Access is managed by your organization. Contact your administrator
            if you need an invitation.
          </p>
        </div>

        <div className="mx-auto w-full max-w-[345px] border-t border-[#DDE4E8] pt-5">
          <ul className="flex items-center justify-center gap-5 text-[12px] text-[#4B5A62]">
            <li>
              <Link href="#" className="transition-colors hover:text-[#0F3340]">
                Privacy
              </Link>
            </li>
            <li
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#9AA8AF]"
            />
            <li>
              <Link href="#" className="transition-colors hover:text-[#0F3340]">
                Terms
              </Link>
            </li>
            <li
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-[#9AA8AF]"
            />
            <li>
              <Link href="#" className="transition-colors hover:text-[#0F3340]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

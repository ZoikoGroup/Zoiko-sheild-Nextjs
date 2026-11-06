"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed:", email);
  };

  return (
    <section className="relative w-full overflow-x-hidden bg-[#0a1220] text-white">
      <div className="relative mx-auto w-full overflow-hidden bg-[#0d1626] px-8 py-10">
        {/* Black Friday Ribbon anchored to the left edge of the container box */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-45px] top-[25px] z-20 hidden w-[170px] -rotate-[22deg] bg-[#d9473f] py-2 text-center shadow-[0_10px_25px_rgba(217,71,63,0.5)] md:block"
        >
          <p className="text-xs font-extrabold uppercase tracking-wider leading-4 text-white">
            Black Friday
          </p>
          <p className="text-xs italic leading-4 text-white/90">Sale</p>
        </div>

        {/* Content Container (padded left on desktop to give room to the ribbon) */}
        <div className="relative z-10 md:pl-32 lg:pl-40">
          <h3 className="text-lg font-bold tracking-tight sm:text-xl">
            Stay in the loop
          </h3>
          <p className="mt-1.5 text-sm leading-6 text-white/60">
            Security insights and product updates — straight to your inbox.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-5 flex max-w-xl items-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-white/10 bg-[#070e17] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-[#d9473f]/60 focus:ring-1 focus:ring-[#d9473f]/60"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9473f] text-white shadow-lg shadow-[#d9473f]/30 transition hover:bg-[#c33d35]"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

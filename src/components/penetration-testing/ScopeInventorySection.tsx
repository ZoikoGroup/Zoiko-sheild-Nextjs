"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ScopeInventorySection() {
  return (
    <section className="bg-[#F5F2EB] px-5 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-24 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-5 shrink-0 bg-[#E0402F]" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E0402F] sm:text-xs">
            Scope inventory
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-[#0B1B26] sm:text-3xl lg:text-4xl">
          Discovery never silently expands authorization.
        </h2>

        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
          Every asset carries a state, and &ldquo;discovered but
          unauthorized&rdquo; is one of them. Finding something during
          preparation is not the same as being allowed to test it. Values below
          are synthetic.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-lg border border-[#E0DCD3]"
        >
          <img
            src="/images/penetration-testing/div.scope.webp"
            width={1116}
            height={558}
            loading="lazy"
            decoding="async"
            alt="Illustration of a scope inventory: discovered assets sorted into authorized and locked, unauthorized states behind an approval gate"
            className="h-auto w-full max-w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

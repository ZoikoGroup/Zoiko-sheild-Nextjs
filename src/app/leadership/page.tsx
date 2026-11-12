import type { Metadata } from "next";
import Link from "next/link";
import { LeadershipSection, AboutCtaBannerSection } from "@/components/about-zoiko-tech";

export const metadata: Metadata = {
  title: "Leadership | Zoiko Shield",
  description:
    "Named accountable leadership and governance responsibilities behind Zoiko Shield's security architecture, ecosystem stewardship and AI & data governance.",
};

export default function LeadershipPage() {
  return (
    <main className="w-full min-h-screen bg-stone-100 text-slate-900 antialiased selection:bg-red-500 selection:text-white">
      {/* Page header */}
      <section className="w-full bg-[#F7F5F0] border-b border-cyan-950/10 pt-28 sm:pt-32 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-28">
        <div className="max-w-7xl mx-auto space-y-5">
          <nav aria-label="Breadcrumb" className="font-['JetBrains_Mono'] text-[11px] text-gray-500">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span className="mx-1.5 text-gray-400">/</span>
            <Link href="/about-zoiko-tech" className="hover:text-slate-900">About Zoiko Tech</Link>
            <span className="mx-1.5 text-gray-400">/</span>
            <span className="text-slate-900 font-semibold">Leadership</span>
          </nav>

          <h1 className="text-slate-900 text-4xl sm:text-5xl font-extrabold font-['Hanken_Grotesk'] leading-tight tracking-tight">
            Leadership
          </h1>
          <p className="max-w-2xl text-gray-500 text-base sm:text-lg font-medium font-['Manrope'] leading-relaxed">
            The accountable roles that steward Zoiko Shield&apos;s platform design, delivery and
            governance — and where to find verified profiles.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/about-zoiko-tech"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-bold font-['Manrope'] rounded-lg transition-colors text-center"
            >
              About Zoiko Tech
            </Link>
            <Link
              href="/trust-center"
              className="px-6 py-3 bg-transparent hover:bg-slate-900/5 text-slate-900 text-sm font-bold font-['Manrope'] rounded-lg border border-slate-900/20 transition-colors text-center"
            >
              Visit Trust Center
            </Link>
          </div>
        </div>
      </section>

      <LeadershipSection />
      <AboutCtaBannerSection />
    </main>
  );
}

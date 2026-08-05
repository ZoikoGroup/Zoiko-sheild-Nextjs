import React from "react";
import Link from "next/link";
import { ZoikoLogo } from "@/components/common/ZoikoLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A161C] text-white pt-16 pb-12 border-t border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand Info & Compliance Badges */}
          <div className="lg:col-span-4 space-y-5">
            <ZoikoLogo variant="dark" />
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Defensible cybersecurity and continuous assurance for modern regulated enterprises.
            </p>
            {/* Outlined Monospace Badges */}
            <div className="flex items-center gap-2 pt-1">
              <span className="border border-gray-700/60 bg-[#12242B] text-gray-400 text-[11px] font-mono px-2.5 py-1 rounded-md tracking-wider">
                SOC 2
              </span>
              <span className="border border-gray-700/60 bg-[#12242B] text-gray-400 text-[11px] font-mono px-2.5 py-1 rounded-md tracking-wider">
                ISO 27001
              </span>
              <span className="border border-gray-700/60 bg-[#12242B] text-gray-400 text-[11px] font-mono px-2.5 py-1 rounded-md tracking-wider">
                HIPAA
              </span>
            </div>
          </div>

          {/* 5 Navigation Columns (Stacked 1 column on mobile, 5 columns on desktop) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-6 text-xs pt-4 lg:pt-0">
            {/* Column 1: PLATFORM */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-gray-300 text-[11px]">
                PLATFORM
              </h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Managed Defense</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Continuous Assurance</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Evidence Ledger</Link></li>
              </ul>
            </div>

            {/* Column 2: SOLUTIONS */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-gray-300 text-[11px]">
                SOLUTIONS
              </h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Financial Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Healthcare</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">B2B SaaS</Link></li>
              </ul>
            </div>

            {/* Column 3: RESOURCES */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-gray-300 text-[11px]">
                RESOURCES
              </h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Column 4: COMPANY */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-gray-300 text-[11px]">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 5: TRUST & LEGAL */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-gray-300 text-[11px]">
                TRUST & LEGAL
              </h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Trust Center</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/80 my-8" />

        {/* Legal Disclaimer & Bottom Copyright Row */}
        <div className="space-y-6">
          <p className="text-xs text-gray-500 max-w-3xl leading-relaxed">
            Claims regarding compliance automation are subject to specific regulatory interpretations and should be reviewed by legal counsel.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-500">
            <p>© 2026 ZoikoShield. All rights reserved.</p>
            <p className="font-mono text-gray-400">Built for regulated digital operations.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

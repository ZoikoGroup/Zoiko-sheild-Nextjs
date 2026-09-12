import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1E28] text-gray-300 pt-16 pb-12 border-t border-gray-800/80 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ROW 1: BRAND INFO + 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8">
          {/* Brand Info (3 Spans on LG) */}
          <div className="lg:col-span-3 space-y-5">
            <Image
              src="/images/kk.png"
              alt="Zoiko Shield Logo"
              width={160}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
            <p className="text-xs text-gray-300/80 max-w-xs leading-relaxed">
              Defensible cybersecurity and continuous assurance for modern regulated enterprises.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-[#122A36] border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#C53B3B] hover:bg-[#C53B3B]/20 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#122A36] border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#C53B3B] hover:bg-[#C53B3B]/20 transition-all"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="w-8 h-8 rounded-full bg-[#122A36] border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#C53B3B] hover:bg-[#C53B3B]/20 transition-all"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#122A36] border border-gray-700/60 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#C53B3B] hover:bg-[#C53B3B]/20 transition-all"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4 Nav Columns (9 Spans on LG) */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* PLATFORM */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
                PLATFORM
              </h4>
              <ul className="space-y-2 text-gray-300/80">
                <li><Link href="/platform-overview" className="hover:text-white transition-colors">Platform overview</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">How ZoikoShield works</Link></li>
                <li><Link href="/architecture" className="hover:text-white transition-colors">Architecture</Link></li>
                <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>

            {/* EVIDENCE & ASSURANCE */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
                EVIDENCE & ASSURANCE
              </h4>
              <ul className="space-y-2 text-gray-300/80">
                <li><Link href="/verify-evidence" className="hover:text-white transition-colors">Evidence ledger & Verification</Link></li>
                <li><Link href="/compliance-control-plane" className="hover:text-white transition-colors">Compliance control plane</Link></li>
                <li><Link href="/verify-evidence" className="hover:text-white transition-colors">Verify evidence</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Continuous Assurance</Link></li>
              </ul>
            </div>

            {/* DETECTION & RESPONSE */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
                DETECTION & RESPONSE
              </h4>
              <ul className="space-y-2 text-gray-300/80">
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Detection & Response</Link></li>
                <li><Link href="/security-analytics" className="hover:text-white transition-colors">Security analytics</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Case management</Link></li>
                <li><Link href="/governed-response" className="hover:text-white transition-colors">Governed response</Link></li>
              </ul>
            </div>

            {/* AI & RISK INTELLIGENCE */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
                AI & RISK INTELLIGENCE
              </h4>
              <ul className="space-y-2 text-gray-300/80">
                <li><Link href="/risk-intelligence" className="hover:text-white transition-colors">Risk Intelligence</Link></li>
                <li><Link href="/govern-ai-risk" className="hover:text-white transition-colors">AI security & Governance</Link></li>
                <li><Link href="/responsible-ai" className="hover:text-white transition-colors">Responsible AI</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">AI decision rights</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/70" />

        {/* ROW 2: 5 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-2">
          {/* SERVICES */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              SERVICES
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/managed-defense" className="hover:text-white transition-colors">Managed Defense</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Continuous Assurance</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Compare starting paths</Link></li>
              <li><Link href="/ir-retainer" className="hover:text-white transition-colors">Incident Response Retainer</Link></li>
              <li><Link href="/vciso-advisory" className="hover:text-white transition-colors">vCISO & Advisory</Link></li>
            </ul>
          </div>

          {/* SOLUTIONS BY NEED */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              SOLUTIONS BY NEED
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Prove controls continuously</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Consolidate security operations</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Prepare for audits</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Report risk to the Board</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES & SECTOR PACKS */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              INDUSTRIES & SECTOR PACKS
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Financial services & fintech</Link></li>
              <li><Link href="/payments-insurance" className="hover:text-white transition-colors">Payment & Insurance</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">B2B SaaS, Cloud & AI</Link></li>
            </ul>
          </div>

          {/* INTEGRATIONS */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              INTEGRATIONS
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Integration catalog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Microsoft ecosystem</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Cloud platform</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Endpoint & Identity</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Request an integration</Link></li>
            </ul>
          </div>

          {/* DEVELOPERS & DOCS */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              DEVELOPERS & DOCS
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">API reference</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Webhooks</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Release notes</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/70" />

        {/* ROW 3: 5 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-2">
          {/* RESOURCES & EDUCATION */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              RESOURCES & EDUCATION
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Guides & frameworks</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Research & Engineering blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Security & Compliance glossary</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">How pricing works</Link></li>
            </ul>
          </div>

          {/* TRUST & SECURITY */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              TRUST & SECURITY
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Trust Center</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Security practices</Link></li>
              <li><Link href="/responsible-ai" className="hover:text-white transition-colors">Responsible AI</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Privacy & data protection</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Vulnerability disclosure</Link></li>
            </ul>
          </div>

          {/* SUPPORT & STATUS */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              SUPPORT & STATUS
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/contact" className="hover:text-white transition-colors">Support Center</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">System Status</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact support</Link></li>
              <li><Link href="/dashboard" className="hover:text-white transition-colors">Planned maintenance</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              COMPANY
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Zoiko Tech</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* LEGAL & GOVERNANCE */}
          <div className="space-y-3">
            <h4 className="font-mono font-bold uppercase tracking-wider text-[#C53B3B] text-[11px]">
              LEGAL & GOVERNANCE
            </h4>
            <ul className="space-y-2 text-gray-300/80">
              <li><Link href="/about" className="hover:text-white transition-colors">Legal notices</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Privacy notice</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Terms of service</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Cookie notice</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Accessibility statement</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/70" />

        {/* ROW 4: HEADQUARTERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4 max-w-4xl">
          <div className="space-y-2">
            <h4 className="font-mono font-bold text-sm tracking-wider text-[#C53B3B] uppercase">
              GLOBAL HEADQUARTERS
            </h4>
            <p className="text-gray-300/90 text-sm leading-relaxed max-w-xs">
              1401 21st Street, Suite R<br />
              Sacramento, California,<br />
              United States
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono font-bold text-sm tracking-wider text-[#C53B3B] uppercase">
              EUROPEAN HEADQUARTERS
            </h4>
            <p className="text-gray-300/90 text-sm leading-relaxed max-w-xs">
              167-169 Great Portland Street 5th<br />
              Floor, London W1W 5PF United<br />
              Kingdom
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800/70" />

        {/* ROW 5: ENTITY STATEMENT */}
        <div className="text-center text-xs text-gray-400 py-2">
          <span className="font-bold text-white">Zoiko Tech Inc.</span> &nbsp;&middot;&nbsp; Developer and operator of Zoiko Shield. &nbsp;&middot;&nbsp; A Zoiko Group company.
        </div>

        <div className="border-t border-gray-800/70" />

        {/* ROW 6: COPYRIGHT & LEGAL LINKS & LANGUAGE */}
        <div className="space-y-4 pt-2 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            &copy; 2026 Zoiko Shield Inc. All rights reserved. Zoiko Shield is a product of Zoiko Tech Inc., part of Zoiko Group.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-gray-400">
              <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>&middot;</span>
              <Link href="/about" className="hover:text-white transition-colors">Website Terms</Link>
              <span>&middot;</span>
              <Link href="/about" className="hover:text-white transition-colors">Cookie Policy</Link>
              <span>&middot;</span>
              <Link href="/about" className="hover:text-white transition-colors">Cookie Settings</Link>
              <span>&middot;</span>
              <Link href="/about" className="hover:text-white transition-colors">Accessibility</Link>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-400">Language</span>
              <div className="bg-[#122A36] border border-gray-700/70 text-gray-200 px-3 py-1.5 rounded-lg font-medium flex items-center gap-2 shadow-sm">
                <span>English (United States)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

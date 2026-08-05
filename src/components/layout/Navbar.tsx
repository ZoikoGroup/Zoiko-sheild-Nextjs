"use client";

import React from "react";
import Link from "next/link";
import { ZoikoLogo } from "@/components/common/ZoikoLogo";
import {
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Clock,
  Sliders,
  Shield,
  Plug,
  ArrowRight,
  ArrowRightLeft,
  BarChart3,
  Building2,
  CreditCard,
  Cloud,
  FileText,
  BookOpen,
  Bookmark,
  FlaskConical,
  Tag,
  User,
  Mail
} from "lucide-react";

interface NavbarProps {
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* 1. Top Utility Header Bar */}
      <div className="bg-[#0B181E] lg:bg-[#F5F2EB] border-b border-gray-800 lg:border-zoiko-border/70 text-xs text-gray-300 lg:text-zoiko-dark/70 py-1.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-end gap-2 lg:gap-6 font-medium">
          {/* Mobile Only Compliance Badges */}
          <div className="lg:hidden text-[10px] font-mono text-cyan-400 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SOC 2 Type II · ISO 27001 · HIPAA-Ready</span>
          </div>

          <div className="flex items-center gap-3 lg:gap-6 text-[11px] lg:text-xs">
            <Link
              href="/about"
              className="hover:text-zoiko-primary transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 hidden lg:inline text-zoiko-dark/60" />
              <span>Trust Center</span>
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-zoiko-primary transition-colors flex items-center gap-0.5"
            >
              <span>System Status</span>
              <ArrowUpRight className="w-3 h-3 text-gray-400 lg:text-zoiko-dark/50" />
            </Link>

            <Link
              href="/contact"
              className="hover:text-zoiko-primary transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-zoiko-beige/95 backdrop-blur-md border-b border-zoiko-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <ZoikoLogo variant="light" />
          </Link>

          {/* Mobile Right Action Bar: Sign In + Book a Demo Button */}
          <div className="flex lg:hidden items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-semibold text-[#151B28] hover:text-[#C53B3B] transition-colors"
            >
              Sign In
            </Link>
            <button
              onClick={onOpenDemo}
              className="bg-[#C53B3B] hover:bg-[#A91D22] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Book a Demo
            </button>
          </div>

          {/* Navigation Links with Mega-Menu Dropdowns */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zoiko-dark/80">
            
            {/* ========================================= */}
            {/* 1. PLATFORM DROPDOWN */}
            {/* ========================================= */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-zoiko-primary py-4 transition-colors focus:outline-none font-semibold">
                <span>Platform</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-[820px] -translate-x-12 animate-fadeIn">
                <div className="bg-white rounded-3xl shadow-2xl border border-zoiko-border p-6 space-y-4">
                  <div className="text-xs font-bold text-[#151B28] pb-3 border-b border-zoiko-border/60">
                    One control plane across your security estate.
                  </div>

                  <div className="grid grid-cols-12 gap-5">
                    {/* Left 6 items */}
                    <div className="col-span-8 grid grid-cols-2 gap-3">
                      <Link href="/dashboard" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Platform Overview</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">The five layers, operating model, and boundaries.</p>
                        </div>
                      </Link>

                      <Link href="/dashboard" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Sliders className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Compliance Control Plane</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Control library and auditor workspace.</p>
                        </div>
                      </Link>

                      <Link href="/dashboard" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Evidence & Verification</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Lineage, integrity, and frozen packages.</p>
                        </div>
                      </Link>

                      <Link href="/dashboard" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">AI Security & Governance</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Human decision rights and kill switches.</p>
                        </div>
                      </Link>

                      <Link href="/dashboard" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Clock className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Detection & Response</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Correlation, cases, and approvals.</p>
                        </div>
                      </Link>

                      <Link href="/dashboard" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Plug className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Integrations</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Connectors, permissions, and health states.</p>
                        </div>
                      </Link>
                    </div>

                    {/* Right Proof Card */}
                    <div className="col-span-4 bg-[#E8F3F1] p-5 rounded-2xl border border-[#C5E3DF] flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold text-[#2C6E63] tracking-widest uppercase">
                          ● PROOF
                        </span>
                        <h4 className="text-sm font-extrabold text-[#151B28]">Verify it yourself</h4>
                        <p className="text-xs text-[#151B28]/70 leading-relaxed">
                          Inspect the evidence model directly — the package manifest, the verification flow, and its limitations.
                        </p>
                      </div>

                      <Link href="/about" className="text-xs font-bold text-[#2C6E63] hover:text-[#C53B3B] transition-colors flex items-center gap-1">
                        <span>See the evidence model</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* 2. SERVICES DROPDOWN */}
            {/* ========================================= */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-zoiko-primary py-4 transition-colors focus:outline-none font-semibold">
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-[680px] -translate-x-16 animate-fadeIn">
                <div className="bg-white rounded-3xl shadow-2xl border border-zoiko-border p-6 space-y-4">
                  <div className="text-xs font-bold text-[#151B28] pb-3 border-b border-zoiko-border/60">
                    Two ways to start. One governed operating model.
                  </div>

                  {/* Top 2 Cards Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Managed Defense */}
                    <div className="bg-[#F6F4EE] p-5 rounded-2xl border border-zoiko-border/60 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center">
                          <Shield className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-[#151B28]">Managed Defense</h4>
                        <p className="text-xs text-[#151B28]/60 leading-relaxed">
                          Managed detection, investigation, and governed response with evidence linked to material decisions.
                        </p>
                      </div>

                      <Link href="/about">
                        <button className="w-full bg-[#0E2C38] hover:bg-[#153e4f] text-white py-2 px-4 rounded-xl text-xs font-bold transition-colors">
                          Explore Managed Defense
                        </button>
                      </Link>
                    </div>

                    {/* Continuous Assurance */}
                    <div className="bg-[#F6F4EE] p-5 rounded-2xl border border-zoiko-border/60 space-y-3 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-[#2C6E63]" />
                        </div>
                        <h4 className="text-sm font-bold text-[#151B28]">Continuous Assurance</h4>
                        <p className="text-xs text-[#151B28]/60 leading-relaxed">
                          Control monitoring, evidence operations, assessment workflows, and auditor access.
                        </p>
                      </div>

                      <Link href="/dashboard">
                        <button className="w-full bg-[#0E2C38] hover:bg-[#153e4f] text-white py-2 px-4 rounded-xl text-xs font-bold transition-colors">
                          Explore Continuous Assurance
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Full-Width Card */}
                  <Link href="/about" className="block bg-[#F6F4EE] hover:bg-[#EFECE3] p-4 rounded-2xl border border-zoiko-border/60 transition-all group/item">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <ArrowRightLeft className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Compare starting paths</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5">Buyer fit, scope, dependencies, and expansion path.</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* 3. SOLUTIONS DROPDOWN */}
            {/* ========================================= */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-zoiko-primary py-4 transition-colors focus:outline-none font-semibold">
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-[720px] -translate-x-24 animate-fadeIn">
                <div className="bg-white rounded-3xl shadow-2xl border border-zoiko-border p-6 space-y-4">
                  <div className="text-xs font-bold text-[#151B28] pb-3 border-b border-zoiko-border/60">
                    Start from the outcome or the operating environment.
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Column 1: BY NEED */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block mb-2">
                        BY NEED
                      </span>

                      <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item block">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Prove controls continuously</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Evidence gaps, control testing, and audit package.</p>
                        </div>
                      </Link>

                      <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item block">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Consolidate security operations</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Correlated context and governed response.</p>
                        </div>
                      </Link>

                      <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item block">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <BarChart3 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Report risk to leadership</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Evidence drill-down and Board reporting.</p>
                        </div>
                      </Link>
                    </div>

                    {/* Column 2: BY MARKET */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider block mb-2">
                        BY MARKET
                      </span>

                      <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item block">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Financial Services & Fintech</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Operational resilience and evidence pressure.</p>
                        </div>
                      </Link>

                      <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item block">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Payments & Insurance</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Sensitive transactions and supplier requirements.</p>
                        </div>
                      </Link>

                      <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item block">
                        <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                          <Cloud className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">SaaS, Cloud & AI Providers</div>
                          <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Enterprise trust and AI governance at scale.</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* 4. RESOURCES DROPDOWN */}
            {/* ========================================= */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-zoiko-primary py-4 transition-colors focus:outline-none font-semibold">
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-[720px] -translate-x-32 animate-fadeIn">
                <div className="bg-white rounded-3xl shadow-2xl border border-zoiko-border p-6 space-y-4">
                  <div className="text-xs font-bold text-[#151B28] pb-3 border-b border-zoiko-border/60">
                    Use the product, verify the claims, and understand the architecture.
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Documentation</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">API reference, connector guides, release notes.</p>
                      </div>
                    </Link>

                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Evidence Verifier</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Signed releases, checksums, and source.</p>
                      </div>
                    </Link>

                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Guides & Frameworks</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Substantive guides with owners and review dates.</p>
                      </div>
                    </Link>

                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <Bookmark className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Security & Compliance Glossary</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Controlled definitions for buyers and auditors.</p>
                      </div>
                    </Link>

                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <FlaskConical className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Research & Engineering</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Architecture decisions and release analysis.</p>
                      </div>
                    </Link>

                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">How pricing works</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Metrics, packaging logic, and cost drivers.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* 5. COMPANY DROPDOWN */}
            {/* ========================================= */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-zoiko-primary py-4 transition-colors focus:outline-none font-semibold">
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-[680px] -translate-x-48 animate-fadeIn">
                <div className="bg-white rounded-3xl shadow-2xl border border-zoiko-border p-6 space-y-4">
                  <div className="text-xs font-bold text-[#151B28] pb-3 border-b border-zoiko-border/60">
                    Entity clarity, accountability, and trust.
                  </div>

                  <div className="grid grid-cols-2 gap-3.5">
                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">About Zoiko Tech</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Relationship to Zoiko Tech and Zoiko Group.</p>
                      </div>
                    </Link>

                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Trust Center</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Security posture, subprocessors, and disclosure.</p>
                      </div>
                    </Link>

                    <Link href="/about" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Leadership</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Named accountable leaders and responsibilities.</p>
                      </div>
                    </Link>

                    <Link href="/contact" className="bg-[#F6F4EE] hover:bg-[#EFECE3] p-3.5 rounded-2xl border border-zoiko-border/60 transition-all flex items-start gap-3 group/item">
                      <div className="w-8 h-8 rounded-xl bg-white text-[#2C6E63] border border-zoiko-border/50 flex items-center justify-center shrink-0 group-hover/item:text-[#C53B3B]">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#151B28] group-hover/item:text-[#C53B3B]">Contact</div>
                        <p className="text-[11px] text-[#151B28]/60 mt-0.5 leading-tight">Sales, partnerships, press, and security routing.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-medium text-zoiko-dark">
            <Link
              href="/about"
              className="hover:text-zoiko-primary transition-colors flex items-center gap-1"
            >
              <span>Docs</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zoiko-dark/50" />
            </Link>

            <Link
              href="/dashboard"
              className="hover:text-zoiko-primary transition-colors"
            >
              Sign in
            </Link>

            <button
              onClick={onOpenDemo}
              className="bg-[#C53B3B] hover:bg-[#A91D22] text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

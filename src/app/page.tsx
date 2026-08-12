"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DemoModal } from "@/components/ui/DemoModal";
import {
  CheckCircle2,
  LayoutGrid,
  Shield,
  FileText,
  ArrowRight,
  Hexagon,
  Circle,
  Home,
  Plus,
  Check,
  Download,
  Activity,
  Search,
  Zap,
  AlertTriangle,
  Sparkles,
  UserCheck,
  BarChart3,
  ArrowDown
} from "lucide-react";

export default function HomePage() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [overrideActive, setOverrideActive] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative selection:bg-zoiko-primary selection:text-white overflow-x-hidden w-full max-w-full">
      <Navbar onOpenDemo={() => setDemoOpen(true)} />

      <main className="flex-grow w-full space-y-20 lg:space-y-32">
        {/* ============================================ */}
        {/* SECTION 1: HERO */}
        {/* ============================================ */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-16">
          {/* Mobile Ambient Radial Glow */}
          <div className="lg:hidden absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-200/30 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                  GOVERNED AI SECURITY PLATFORM
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#151B28] tracking-tight leading-[1.15] lg:leading-[1.12]">
                Defensible <br />
                cybersecurity for <br />
                <span className="text-[#C53B3B]">regulated</span> digital <br />
                operations.
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#151B28]/70 max-w-xl leading-relaxed">
                Threat defense, control assurance, and evidence you can trace to its source — connected across the security tools you already run.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 max-w-md sm:max-w-none">
                <button
                  onClick={() => setDemoOpen(true)}
                  className="bg-[#C53B3B] hover:bg-[#A91D22] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all text-center"
                >
                  Book a Demo
                </button>

                <Link href="/dashboard" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-transparent hover:bg-white/60 text-[#151B28] border border-[#151B28]/30 hover:border-[#151B28] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all text-center">
                    Explore the Platform
                  </button>
                </Link>
              </div>

              {/* Mobile Sub-link */}
              <div className="pt-2 text-center sm:text-left">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2C6E63] hover:text-[#C53B3B] transition-colors"
                >
                  <span>SEE HOW EVIDENCE WORKS</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Visual Image Desktop Only */}
            <div className="hidden lg:flex lg:col-span-6 relative w-full justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-zoiko-border bg-white group">
                <Image
                  src="/images/hero.png"
                  alt="ZoikoShield Governed AI Security Platform"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Right Mobile Live Evidence Pipeline Card */}
            <div className="block lg:hidden w-full pt-4">
              <div className="bg-[#0B181E] rounded-3xl p-5 border border-gray-800 shadow-2xl text-white space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-800/80">
                  <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase">
                    LIVE EVIDENCE PIPELINE
                  </span>
                  <span className="text-emerald-400 font-mono text-[10px] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ● STREAMING
                  </span>
                </div>

                <div className="space-y-2 font-sans text-xs">
                  <div className="bg-[#11242C] p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Threat Signals</div>
                      <div className="text-[10px] text-gray-400">Telemetry ingested from your existing stack</div>
                    </div>
                  </div>

                  <div className="bg-[#11242C] p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">AI Intelligence</div>
                      <div className="text-[10px] text-gray-400">Correlated, scored, and prioritized</div>
                    </div>
                  </div>

                  <div className="bg-[#11242C] p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Human Approval</div>
                      <div className="text-[10px] text-gray-400">Analyst authorizes remediation action</div>
                    </div>
                  </div>

                  <div className="bg-[#11242C] p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Evidence</div>
                      <div className="text-[10px] text-gray-400">Immutable, cryptographically hashed</div>
                    </div>
                  </div>

                  <div className="bg-[#11242C] p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Compliance</div>
                      <div className="text-[10px] text-gray-400">Mapped to SOC 2, ISO 27001, HIPAA</div>
                    </div>
                  </div>

                  <div className="bg-[#11242C] p-3 rounded-xl border border-gray-800 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Executive Reporting</div>
                      <div className="text-[10px] text-gray-400">Board-ready, defensible proof</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-800/80 text-[10px] font-mono text-emerald-400 text-center tracking-tight">
                  AUDIT_EVENT <span className="text-white font-bold">0xA89F2B</span> · CONTROL <span className="text-white font-bold">AC-2</span> · STATUS <span className="text-emerald-400 font-bold">VERIFIED_</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: LOGO STRIP */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#151B28]/60 font-mono max-w-xl mx-auto">
              TRUSTED BY SECURITY & COMPLIANCE TEAMS AT REGULATED ENTERPRISES
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-[#151B28]/80 text-sm font-semibold items-center justify-items-center">
              <div className="flex items-center gap-2 hover:text-[#C53B3B] transition-colors cursor-pointer">
                <Hexagon className="w-4 h-4 text-[#151B28]/50" />
                <span>Meridian Financial</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#C53B3B] transition-colors cursor-pointer">
                <Circle className="w-4 h-4 text-[#151B28]/50" />
                <span>Northbridge Health</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#C53B3B] transition-colors cursor-pointer">
                <Hexagon className="w-4 h-4 text-[#151B28]/50" />
                <span>Velocity SaaS</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#C53B3B] transition-colors cursor-pointer">
                <Home className="w-4 h-4 text-[#151B28]/50" />
                <span>Ashford Capital</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#C53B3B] transition-colors cursor-pointer">
                <Plus className="w-4 h-4 text-[#151B28]/50" />
                <span>Colton Health</span>
              </div>

              <div className="flex items-center gap-2 hover:text-[#C53B3B] transition-colors cursor-pointer">
                <Circle className="w-4 h-4 text-[#151B28]/50" />
                <span>Fintra Systems</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 3: TRUST PILLARS */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-zoiko-border shadow-sm overflow-hidden p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-zoiko-border">
              <div className="space-y-3 pt-4 first:pt-0 md:pt-0 lg:px-4 first:lg:pl-0">
                <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#2C6E63] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#151B28]">Mathematical Certainty</h4>
                <p className="text-xs text-[#151B28]/60 leading-relaxed">
                  Cryptographic proof that controls are active and effective — not a screenshot, a hash.
                </p>
              </div>

              <div className="space-y-3 pt-6 md:pt-0 lg:px-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#2C6E63] flex items-center justify-center">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#151B28]">Unified Stack</h4>
                <p className="text-xs text-[#151B28]/60 leading-relaxed">
                  Ingest telemetry from your existing security investments — seamlessly, no rip-and-replace.
                </p>
              </div>

              <div className="space-y-3 pt-6 md:pt-0 lg:px-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#2C6E63] flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#151B28]">Continuous Compliance</h4>
                <p className="text-xs text-[#151B28]/60 leading-relaxed">
                  Automated mapping to SOC 2, ISO 27001, and HIPAA mandates — updated as controls change.
                </p>
              </div>

              <div className="space-y-3 pt-6 md:pt-0 lg:px-4 last:lg:pr-0">
                <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#2C6E63] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#151B28]">Defensible Evidence</h4>
                <p className="text-xs text-[#151B28]/60 leading-relaxed">
                  Immutable ledgers that auditors trust and boards rely on, exportable in one click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 4: PLATFORM OVERVIEW */}
        {/* ============================================ */}


        {/* ============================================ */}
        {/* SECTION 5: STATS */}
        {/* ============================================ */}


        {/* ============================================ */}
        {/* SECTION 6: BENTO FEATURE GRID */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                PLATFORM
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28]">
              Flexible defense for every environment.
            </h2>
            <p className="text-sm sm:text-base text-[#151B28]/60 max-w-2xl">
              A comprehensive set of security and compliance tools — designed to work individually or together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-zoiko-border space-y-4 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-[#151B28]">Real-time control monitoring</h3>
                  <p className="text-xs text-[#151B28]/60 mt-1">Every control, continuously verified against live telemetry.</p>
                </div>
                <div className="bg-[#F6F4EE] rounded-2xl p-4 border border-zoiko-border space-y-2.5 font-mono text-xs">
                  <div className="bg-white p-3 rounded-xl border border-zoiko-border flex items-center justify-between">
                    <span className="text-[#151B28] font-semibold">AC-2 · Identity Access Management</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">● Active</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-zoiko-border flex items-center justify-between">
                    <span className="text-[#151B28] font-semibold">CC7.2 · Continuous Monitoring</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">● Active</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-zoiko-border group">
                <Image
                  src="/images/33.jpg"
                  alt="Analyst Workflows"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                  <h4 className="text-lg font-bold">Analyst-ready workflows</h4>
                  <p className="text-xs text-gray-300">Built for the teams who triage every day.</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-zoiko-border space-y-4 shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#151B28]">Correlated risk scoring</h4>
                  <p className="text-xs text-[#151B28]/60 mt-0.5">Signals ranked by real business impact.</p>
                </div>
                <div className="bg-[#F6F4EE] rounded-2xl p-4 border border-zoiko-border h-28 flex items-end justify-between gap-2">
                  <div className="w-full bg-[#2C6E63]/70 h-[35%] rounded-md" />
                  <div className="w-full bg-[#2C6E63]/80 h-[55%] rounded-md" />
                  <div className="w-full bg-[#2C6E63]/70 h-[45%] rounded-md" />
                  <div className="w-full bg-[#2C6E63] h-[75%] rounded-md" />
                  <div className="w-full bg-[#2C6E63]/80 h-[60%] rounded-md" />
                  <div className="w-full bg-[#2C6E63] h-[95%] rounded-md" />
                  <div className="w-full bg-[#2C6E63]/70 h-[40%] rounded-md" />
                </div>
              </div>

              <div className="md:col-span-2 relative aspect-[21/9] rounded-3xl overflow-hidden shadow-sm border border-zoiko-border group">
                <Image
                  src="/images/44.jpg"
                  alt="Built for the whole team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                  <div className="max-w-xl">
                    <h4 className="text-xl font-bold">Built for the whole team</h4>
                    <p className="text-xs text-gray-300 leading-relaxed mt-1">
                      Security, compliance, and leadership — one shared source of truth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-sm border border-zoiko-border min-h-[400px] group">
              <Image
                src="/images/3.png"
                alt="Infrastructure-native"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <h4 className="text-xl font-bold">Infrastructure-native</h4>
                <p className="text-xs text-gray-300 leading-relaxed mt-1">
                  Deploys across cloud, hybrid, and on-prem environments.
                </p>
              </div>
            </div>
          </div>
        </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-12 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-15">
            <svg width="600" height="300" viewBox="0 0 600 300" fill="none">
              <circle cx="300" cy="300" r="120" stroke="#C53B3B" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="300" cy="300" r="200" stroke="#151B28" strokeWidth="1" />
              <circle cx="300" cy="300" r="280" stroke="#151B28" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="300" y1="0" x2="300" y2="300" stroke="#C53B3B" strokeWidth="1" />
              <line x1="0" y1="300" x2="600" y2="300" stroke="#151B28" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative space-y-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28]">
              The backbone of regulated security.
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 font-mono">
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#151B28]">500+</div>
                <div className="text-xs text-[#151B28]/70 font-sans font-medium">Enterprises Protected</div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#151B28]">99.99%</div>
                <div className="text-xs text-[#151B28]/70 font-sans font-medium">Platform Uptime SLA</div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#151B28]">40+</div>
                <div className="text-xs text-[#151B28]/70 font-sans font-medium">Native Integrations</div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#151B28]">12M+</div>
                <div className="text-xs text-[#151B28]/70 font-sans font-medium">Evidence Records Verified</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0B181E] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                    WHAT IS ZOIKOSHIELD?
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  A unified security and compliance platform, built for mathematical proof.
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                  ZoikoShield ingests telemetry from your existing stack, correlates threats with compliance mandates, and generates immutable evidence ledgers to prove your controls are effective — in real time.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#00A8E8] underline underline-offset-4 transition-colors"
                  >
                    <span>View Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                <Image
                  src="/images/88.jpg"
                  alt="ZoikoShield Platform Overview"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 font-mono text-xs text-gray-300 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>● VERIFIED_ACTIVE · 42 controls monitored</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 7: EVIDENCE PLATFORM */}
        {/* ============================================ */}

               <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                CHOOSE YOUR PATH
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28]">
              Choose your path to defense.
            </h2>
            <p className="text-sm text-[#151B28]/60">
              Two ways to work with ZoikoShield — fully managed, or self-directed on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white rounded-3xl p-8 border border-zoiko-border shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-block bg-[#E8F3F1] text-[#2C6E63] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full font-mono">
                  FULLY MANAGED
                </span>
                <h3 className="text-2xl font-bold text-[#151B28]">Managed Defense</h3>
                <p className="text-xs text-[#151B28]/60 leading-relaxed">
                  Outsource your operational security to our expert analysts, backed by the ZoikoShield platform.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zoiko-border font-mono">
                  <div>
                    <div className="text-xl font-bold text-[#151B28]">24/7</div>
                    <div className="text-[10px] text-[#151B28]/50 uppercase">ANALYST COVERAGE</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-[#151B28]">&lt;15m</div>
                    <div className="text-[10px] text-[#151B28]/50 uppercase">AVG. TRIAGE TIME</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setDemoOpen(true)}
                className="w-full bg-transparent hover:bg-[#F6F4EE] text-[#151B28] border border-[#151B28]/30 py-3 rounded-xl font-semibold text-sm transition-colors text-center"
              >
                Explore Managed Services
              </button>
            </div>

            <div className="bg-[#0E2C38] rounded-3xl p-8 text-white border border-gray-800 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-block bg-white/10 text-cyan-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full font-mono">
                  SELF-DIRECTED
                </span>
                <h3 className="text-2xl font-bold text-white">Continuous Assurance</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Deploy our platform to unify your existing team's visibility and automate evidence collection across every control.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800 font-mono">
                  <div>
                    <div className="text-xl font-bold text-white">40+</div>
                    <div className="text-[10px] text-gray-400 uppercase">NATIVE INTEGRATIONS</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-[10px] text-gray-400 uppercase">EVIDENCE AUTOMATED</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setDemoOpen(true)}
                className="w-full bg-[#C53B3B] hover:bg-[#A91D22] text-white py-3 rounded-xl font-semibold text-sm shadow-md transition-colors text-center"
              >
                Explore the Platform
              </button>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 8: HOW IT WORKS */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 font-mono">
                THE PROCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28]">How it works.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-zoiko-border bg-white text-[#151B28] flex items-center justify-center font-bold text-base font-mono">
                1
              </div>
              <h4 className="text-lg font-bold text-[#151B28]">Connect</h4>
              <p className="text-xs text-[#151B28]/60 leading-relaxed">
                Ingest data from across your stack — no agents to rebuild, no workflows to replace.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-zoiko-border bg-white text-[#151B28] flex items-center justify-center font-bold text-base font-mono">
                2
              </div>
              <h4 className="text-lg font-bold text-[#151B28]">Analyze</h4>
              <p className="text-xs text-[#151B28]/60 leading-relaxed">
                Correlate signals and detect threats with AI models tuned for regulated environments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full border border-zoiko-border bg-white text-[#151B28] flex items-center justify-center font-bold text-base font-mono">
                3
              </div>
              <h4 className="text-lg font-bold text-[#151B28]">Govern</h4>
              <p className="text-xs text-[#151B28]/60 leading-relaxed">
                Map findings to compliance frameworks automatically, with full human oversight.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C53B3B] text-white flex items-center justify-center font-bold text-base font-mono shadow-md">
                4
              </div>
              <h4 className="text-lg font-bold text-[#151B28]">Prove</h4>
              <p className="text-xs text-[#151B28]/60 leading-relaxed">
                Generate immutable evidence ledgers your auditors and board can rely on.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 9: TWO PATHS */}
        {/* ============================================ */}
 

        {/* ============================================ */}
        {/* SECTION 10: CASE STUDY */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                POWERING REGULATED ENTERPRISE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28]">
              Trusted for critical infrastructure.
            </h2>
            <p className="text-sm text-[#151B28]/60 max-w-xl">
              From transit networks to trading floors — ZoikoShield secures the systems regulated industries can't afford to get wrong.
            </p>
          </div>

          <div className="relative aspect-[21/9] min-h-[300px] rounded-3xl overflow-hidden shadow-lg border border-zoiko-border group">
            <Image
              src="/images/f5.jpg"
              alt="Meridian Financial Case Study"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-10 flex flex-col justify-end text-white">
              <div className="max-w-2xl">
                <h3 className="text-2xl sm:text-3xl font-extrabold">
                  Meridian Financial unifies real-time risk across 40 systems
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2">
                  Read the story of how a Tier-1 bank cut audit prep from six weeks to three days.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zoiko-border group">
              <Image
                src="/images/00.png"
                alt="Northbridge Health"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white font-bold text-sm">
                Northbridge Health
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zoiko-border group">
              <Image
                src="/images/02.png"
                alt="Velocity SaaS"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white font-bold text-sm">
                Velocity SaaS
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zoiko-border group">
              <Image
                src="/images/01.png"
                alt="Ashford Capital"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-white font-bold text-sm">
                Ashford Capital
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-zoiko-border flex items-center justify-center text-[#151B28] font-bold text-sm shadow-sm hover:border-[#C53B3B] transition-colors cursor-pointer p-6">
              + 500 more
            </div>
          </div>
        </section>
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                  EVIDENCE PLATFORM
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151B28] leading-tight">
                Immutable evidence, traceable to the source.
              </h2>

              <p className="text-sm sm:text-base text-[#151B28]/70 leading-relaxed">
                Cryptographically verified logs that auditors trust and engineers can easily trace. Stop chasing screenshots and start proving compliance mathematically.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-bold text-[#151B28] py-2 border-b border-zoiko-border">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cryptographic Hashing</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#151B28] py-2 border-b border-zoiko-border">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Chain of Custody Tracking</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[#151B28] py-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>One-Click Auditor Export</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0B181E] rounded-3xl p-6 sm:p-8 text-white border border-gray-800 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">
                  VERIFIED · ACTIVE
                </span>
              </div>

              <div className="font-mono text-xs space-y-2 text-gray-300">
                <div className="text-gray-500 text-[10px] uppercase">EVIDENTIARY RECORD</div>
                <div className="text-lg font-bold text-white">SHA-256</div>
                
                <div className="grid grid-cols-3 gap-2 pt-2 text-gray-400">
                  <span>Audit Event</span>
                  <span className="col-span-2 text-white font-semibold">0xA89F2B</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-gray-400">
                  <span>Timestamp</span>
                  <span className="col-span-2 text-white">2026-08-04T08:42:11Z</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-gray-400">
                  <span>Control ID</span>
                  <span className="col-span-2 text-white">AC-2 (Identity Access Mgmt)</span>
                </div>

                <div className="mt-4 bg-[#11242C] p-3 rounded-xl border border-gray-800 text-[11px] text-cyan-400 break-all">
                  8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Chain of Custody Intact
                </span>
                <button
                  onClick={() => setDemoOpen(true)}
                  className="bg-transparent hover:bg-white/10 text-white border border-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 transition-colors text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Artifact</span>
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================ */}
        {/* NEW SECTION 11: SYSTEM ARCHITECTURE (5 Stepper Nodes) */}
        {/* ============================================ */}
        <section className="relative bg-[#0A1D27] text-white py-24 sm:py-32 overflow-hidden">
          {/* Background Team Image with Dark Blue Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/f4.jpg"
              alt="System Architecture Background"
              fill
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-[#0A1D27]/75" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Header */}
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                  SYSTEM ARCHITECTURE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                The complete defense architecture.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
                One continuous pipeline — from raw signal to boardroom-ready proof.
              </p>
            </div>

            {/* 5 Stepper Pipeline Nodes with Horizontal Connecting Arrows */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-4 items-start font-sans">
              {/* Step 01 */}
              <div className="relative flex flex-col items-center text-center space-y-2.5 group">
                <span className="text-[11px] font-mono text-gray-400 font-semibold">01</span>
<div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/15 flex items-center justify-center text-[#3BB49E] sm:text-[#C53B3B] group-hover:bg-[#3BB49E]/10 sm:group-hover:bg-[#C53B3B]/10  transition-all duration-300 shadow-xl backdrop-blur-md">
                  <Activity className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-sm font-bold text-white pt-1">Data Ingestion</h4>
                <p className="text-xs text-gray-300/80 leading-relaxed max-w-[150px]">
                  Pulls telemetry from your existing security stack in real time.
                </p>
                {/* Desktop Connecting Arrow */}
                <div className="hidden lg:block absolute -right-3 top-9 text-gray-500/70 font-mono text-sm pointer-events-none">
                  →
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative flex flex-col items-center text-center space-y-2.5 group">
                <span className="text-[11px] font-mono text-gray-400 font-semibold">02</span>
                <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/15 flex items-center justify-center text-[#3BB49E] sm:text-[#C53B3B] sm:group-hover:border-[#3BB49E]/10 group-hover:border-[#3BB49E]/60 group-hover:bg-[#3BB49E]/10 transition-all duration-300 shadow-xl backdrop-blur-md">
                  <Search className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-sm font-bold text-white pt-1">Threat Detection</h4>
                <p className="text-xs text-gray-300/80 leading-relaxed max-w-[150px]">
                  AI models correlate signals and surface true risk, not noise.
                </p>
                {/* Desktop Connecting Arrow */}
                <div className="hidden lg:block absolute -right-3 top-9 text-gray-500/70 font-mono text-sm pointer-events-none">
                  →
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative flex flex-col items-center text-center space-y-2.5 group">
                <span className="text-[11px] font-mono text-gray-400 font-semibold">03</span>
                <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/15 flex items-center justify-center sm:text-[#C53B3B] sm:group-hover:border-[#3BB49E]/10 text-[#3BB49E] group-hover:border-[#3BB49E]/60 group-hover:bg-[#3BB49E]/10 transition-all duration-300 shadow-xl backdrop-blur-md">
                  <Zap className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-sm font-bold text-white pt-1">Incident Response</h4>
                <p className="text-xs text-gray-300/80 leading-relaxed max-w-[150px]">
                  Human-approved remediation, executed and logged automatically.
                </p>
                {/* Desktop Connecting Arrow */}
                <div className="hidden lg:block absolute -right-3 top-9 text-gray-500/70 font-mono text-sm pointer-events-none">
                  →
                </div>
              </div>

              {/* Step 04 */}
              <div className="relative flex flex-col items-center text-center space-y-2.5 group">
                <span className="text-[11px] font-mono text-gray-400 font-semibold">04</span>
                <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/15 flex items-center justify-center sm:text-[#C53B3B] sm:group-hover:border-[#3BB49E]/10 text-[#3BB49E] group-hover:border-[#3BB49E]/60 group-hover:bg-[#3BB49E]/10 transition-all duration-300 shadow-xl backdrop-blur-md">
                  <Shield className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-sm font-bold text-white pt-1">Compliance Mapping</h4>
                <p className="text-xs text-gray-300/80 leading-relaxed max-w-[150px]">
                  Every action mapped to the framework controls it satisfies.
                </p>
                {/* Desktop Connecting Arrow */}
                <div className="hidden lg:block absolute -right-3 top-9 text-gray-500/70 font-mono text-sm pointer-events-none">
                  →
                </div>
              </div>

              {/* Step 05 */}
              <div className="col-span-2 lg:col-span-1 relative flex flex-col items-center text-center space-y-2.5 group">
                <span className="text-[11px] font-mono text-gray-400 font-semibold">05</span>
                <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/15 flex items-center justify-center sm:text-[#C53B3B] sm:group-hover:border-[#3BB49E]/60 text-[#3BB49E] group-hover:border-[#3BB49E]/10 group-hover:bg-[#3BB49E]/10 transition-all duration-300 shadow-xl backdrop-blur-md">
                  <FileText className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-sm font-bold text-white pt-1">Evidence Generation</h4>
                <p className="text-xs text-gray-300/80 leading-relaxed max-w-[150px]">
                  Immutable, hashed, and ready for auditors on demand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* NEW SECTION 12: GOVERNED AI INTELLIGENCE */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Interactive Alert & Override Card */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zoiko-border shadow-md space-y-4">
                {/* Alert Box */}
                <div className="bg-[#FDF2F2] rounded-2xl p-4 border border-[#FAD4D4] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#C53B3B] flex items-center gap-1.5 font-mono">
                      <AlertTriangle className="w-4 h-4" /> AI Alert: Isolate Host
                    </span>
                    <span className="bg-[#FAD4D4] text-[#C53B3B] text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                      Confidence: 94%
                    </span>
                  </div>
                  <p className="text-xs text-[#151B28]/70 leading-relaxed">
                    Anomalous lateral movement detected on host WEB-PROD-04. Recommended action requires authorization.
                  </p>
                </div>

                {/* Override Control Box */}
                <div className="bg-[#E8F3F1] rounded-2xl p-4 border border-[#C5E3DF] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2C6E63] flex items-center gap-2 font-mono">
                    <CheckCircle2 className="w-4 h-4" /> Human Authority Override
                  </span>
                  <button
                    onClick={() => setOverrideActive(!overrideActive)}
                    className={`w-11 h-6 rounded-full transition-colors p-0.5 flex items-center ${
                      overrideActive ? "bg-[#2C6E63] justify-end" : "bg-gray-300 justify-start"
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-white shadow-md block" />
                  </button>
                </div>

                <p className="text-[11px] text-[#151B28]/50 italic">
                  Every high-impact action waits for a named approver — and logs who, when, and why.
                </p>
              </div>
            </div>

            {/* Right Column: Governed AI Text & Stats */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                  AI GOVERNANCE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151B28] leading-tight">
                Governed AI intelligence.
              </h2>

              <p className="text-sm sm:text-base text-[#151B28]/70 leading-relaxed">
                Leverage advanced machine learning for rapid threat detection, heavily constrained by human-in-the-loop authorization for critical remediation actions.
              </p>

              {/* 3 Stats Columns */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zoiko-border font-mono">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">94%</div>
                  <div className="text-[10px] text-[#151B28]/60 font-sans font-medium uppercase mt-1">
                    DETECTION CONFIDENCE
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">100%</div>
                  <div className="text-[10px] text-[#151B28]/60 font-sans font-medium uppercase mt-1">
                    ACTIONS HUMAN-APPROVED
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#151B28]">0</div>
                  <div className="text-[10px] text-[#151B28]/60 font-sans font-medium uppercase mt-1">
                    AUTONOMOUS OVERRIDES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 13: TESTIMONIAL CARD (KARA MENDOZA) */}
        {/* ============================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-zoiko-border shadow-md overflow-hidden p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-zoiko-border">
                <Image
                  src="/images/f2.png"
                  alt="Kara Mendoza - CISO"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="text-5xl font-serif text-[#C53B3B]/40 leading-none select-none block">“</span>
                <p className="text-xl sm:text-2xl font-bold text-[#151B28] leading-relaxed tracking-tight">
                  "With ZoikoShield, our audit cycle went from weeks of screenshots to a single exportable ledger our auditors trust on sight."
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-[#0E2C38] text-white flex items-center justify-center font-bold text-xs font-mono shrink-0">
                    KM
                  </div>
                  <div>
                    <h5 className="font-bold text-[#151B28] text-sm">Kara Mendoza</h5>
                    <p className="text-xs text-[#151B28]/60 font-mono">CISO, Meridian Financial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 14: FINAL CTA BANNER */}
        {/* ============================================ */}
        <section className="bg-[#0B181E] text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src="/images/f1.jpg"
              alt="Cyber Matrix Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-5 bg-[#C53B3B]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#C53B3B] font-mono">
                GET STARTED
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
              Ready for defensible security?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
              Join industry leaders who trust ZoikoShield to protect their critical infrastructure and automate their compliance evidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto bg-[#C53B3B] hover:bg-[#A91D22] text-white px-8 py-4 rounded-xl font-semibold text-sm shadow-lg transition-all"
              >
                Book a Technical Demo
              </button>

              <Link href="/dashboard" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-8 py-4 rounded-xl font-semibold text-sm transition-all">
                  Explore the Platform
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ============================================ */}
      {/* SECTION 15: FOOTER */}
      {/* ============================================ */}
      <Footer />

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}

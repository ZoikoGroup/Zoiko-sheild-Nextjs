"use client";

import React, { useState } from "react";
import { Button } from "@/components/common/Button";
import { Shield, CheckCircle2, Send } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    nodesCount: "10-50",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-emerald-500/20 text-center max-w-xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-zoiko-emerald flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-zoiko-dark mb-2">Security Architecture Inquiry Received</h3>
        <p className="text-sm text-zoiko-dark/60 mb-6">
          A dedicated Zoiko Shield Cybersecurity Engineer will reach out within 2 hours with customized SLA specs for <span className="text-zoiko-cyan font-semibold">{formData.company || "your organization"}</span>.
        </p>
        <Button variant="primary" onClick={() => setSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-zoiko-border space-y-6 max-w-2xl mx-auto shadow-sm">
      <div className="flex items-center gap-3 pb-4 border-b border-zoiko-border">
        <div className="p-2.5 rounded-xl bg-zoiko-primary/8 text-zoiko-primary border border-zoiko-primary/20">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-zoiko-dark">Deploy Zoiko Shield to Your Enterprise</h3>
          <p className="text-xs text-zoiko-dark/50">Custom node cluster deployment & real-time threat audit</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase text-zoiko-dark/70 mb-1.5">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-lg bg-zoiko-beige border border-zoiko-border focus:border-zoiko-primary text-zoiko-dark text-sm focus:outline-none transition-colors placeholder:text-zoiko-dark/30"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-zoiko-dark/70 mb-1.5">Corporate Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="ciso@company.com"
            className="w-full px-4 py-3 rounded-lg bg-zoiko-beige border border-zoiko-border focus:border-zoiko-primary text-zoiko-dark text-sm focus:outline-none transition-colors placeholder:text-zoiko-dark/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase text-zoiko-dark/70 mb-1.5">Company Name *</label>
          <input
            type="text"
            required
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-lg bg-zoiko-beige border border-zoiko-border focus:border-zoiko-primary text-zoiko-dark text-sm focus:outline-none transition-colors placeholder:text-zoiko-dark/30"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-zoiko-dark/70 mb-1.5">Infrastructure Workloads</label>
          <select
            value={formData.nodesCount}
            onChange={(e) => setFormData({ ...formData, nodesCount: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-zoiko-beige border border-zoiko-border focus:border-zoiko-primary text-zoiko-dark text-sm focus:outline-none transition-colors"
          >
            <option value="1-10">1 - 10 Cloud Instances</option>
            <option value="10-50">10 - 50 Clusters</option>
            <option value="50-500">50 - 500 Enterprise Workloads</option>
            <option value="500+">500+ Global Hyperscale</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase text-zoiko-dark/70 mb-1.5">Threat Defense Requirements</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your current security perimeter challenges, DDoS attack history, or compliance objectives..."
          className="w-full px-4 py-3 rounded-lg bg-zoiko-beige border border-zoiko-border focus:border-zoiko-primary text-zoiko-dark text-sm focus:outline-none transition-colors placeholder:text-zoiko-dark/30"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" icon={<Send className="w-5 h-5" />}>
        Submit Enterprise Security Request
      </Button>
    </form>
  );
};

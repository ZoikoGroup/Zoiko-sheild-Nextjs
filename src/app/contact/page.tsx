import React from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/forms/ContactForm";
import { Badge } from "@/components/common/Badge";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zoiko-beige text-zoiko-dark relative">
      {/* <Navbar /> */}

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 space-y-12 w-full">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="cyan">ENTERPRISE DEFENSE</Badge>
          <h1 className="text-4xl font-extrabold text-zoiko-dark">Contact Security Architecture</h1>
          <p className="text-sm text-zoiko-dark/60">
            Provision dedicated Zoiko Shield clusters or request a custom threat vulnerability audit for your organization.
          </p>
        </div>

        <ContactForm />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

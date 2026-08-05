import React from "react";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { ShieldAlert, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zoiko-beige flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-2xl p-8 border border-zoiko-border text-center space-y-5 shadow-lg">
        <div className="w-16 h-16 rounded-full bg-zoiko-beige text-zoiko-primary flex items-center justify-center mx-auto border border-zoiko-border">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-zoiko-dark font-mono">404</h1>
        <h2 className="text-xl font-bold text-zoiko-dark">Unrestricted Zone Access Denied</h2>
        <p className="text-xs text-zoiko-dark/60">
          The requested endpoint does not exist or has been quarantined by Zoiko Shield security policy.
        </p>
        <Link href="/">
          <Button variant="primary" icon={<Home className="w-4 h-4" />}>
            Return to Secure Perimeter
          </Button>
        </Link>
      </div>
    </div>
  );
}

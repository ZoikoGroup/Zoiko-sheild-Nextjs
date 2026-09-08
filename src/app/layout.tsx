import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SecurityProvider } from "@/context/SecurityContext";

export const metadata: Metadata = {
  title: "Zoiko Shield | Next-Gen Autonomous Cyber Defense Platform",
  description:
    "Real-time autonomous threat neutralization, quantum-resistant lattice encryption, and sub-4ms perimeter DDoS scrubbing network.",
  keywords: [
    "Cybersecurity",
    "Autonomous Defense",
    "DDoS Scrubbing",
    "Quantum Encryption",
    "Zero Trust",
    "Threat Interception",
  ],
  icons: {
    icon: [
      { url: "/images/favicon.png" },
      { url: "/images/favicon.png", type: "image/png" },
    ],
    shortcut: ["/images/favicon.png"],
    apple: [{ url: "/images/favicon.png" }],
  },
};

 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light max-w-full overflow-x-hidden">
      <body className="bg-zoiko-beige text-zoiko-dark min-h-screen selection:bg-zoiko-primary selection:text-white antialiased w-full max-w-full relative overflow-x-hidden">
        <Navbar />
        
        <SecurityProvider>
          {/* Responsive padding: smaller top padding on mobile (pt-16) and larger on desktop (sm:pt-24) */}
          <main className="pt-28 sm:pt-24 min-h-[calc(100vh-80px)] w-full max-w-full overflow-x-hidden">
            {children}
          </main>
        </SecurityProvider>
        
        <Footer />
      </body>
    </html>
  );
}
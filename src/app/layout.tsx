import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SecurityProvider } from "@/context/SecurityContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-ibm-plex-mono" 
});

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
      { url: "/images/favicon.png", type: "image/png" }
    ],
    shortcut: ["/images/favicon.png"],
    apple: [
      { url: "/images/favicon.png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light overflow-x-hidden max-w-full ${inter.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans bg-zoiko-beige text-zoiko-dark min-h-screen selection:bg-zoiko-primary selection:text-white antialiased overflow-x-hidden w-full max-w-full relative">
        <SecurityProvider>{children}</SecurityProvider>
      </body>
    </html>
  );
}

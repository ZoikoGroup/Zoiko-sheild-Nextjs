import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export function generateRandomIp(): string {
  const octet = (): number => Math.floor(Math.random() * 254) + 1;
  return `${octet()}.${octet()}.${octet()}.${octet()}`;
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case "CRITICAL":
      return "text-zoiko-primary bg-zoiko-primary/10 border-zoiko-primary/20";
    case "HIGH":
      return "text-zoiko-amber bg-amber-500/10 border-amber-500/20";
    case "MEDIUM":
      return "text-zoiko-cyan bg-zoiko-cyan/10 border-zoiko-cyan/20";
    default:
      return "text-zoiko-emerald bg-emerald-500/10 border-emerald-500/20";
  }
}

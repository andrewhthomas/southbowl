import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fmt(n: number): string {
  return Number.isInteger(n) ? n.toString() : n.toFixed(1);
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[\s,']+/g, '-').replace(/^-+|-+$/g, '');
}

export const icons = {
  profile: `<svg class="w-3.5 h-3.5 inline-block opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  chevron: `<svg class="w-5 h-5 text-muted-foreground transition-transform duration-200 lg:hidden stats-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`,
};

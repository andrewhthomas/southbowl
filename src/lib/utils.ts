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

// Order-independent slug, so "First Last" (recaps) matches "Last, First" (LeagueSecretary list)
export function normalizedSlug(name: string): string {
  return toSlug(name).split('-').sort().join('-');
}

export const icons = {
  profile: `<svg class="w-3.5 h-3.5 inline-block opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  chevron: `<svg class="w-5 h-5 text-muted-foreground transition-transform duration-200 lg:hidden stats-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>`,
};

// Mobile tab bar glyphs, keyed by the nav href they belong to.
function navIcon(d: string): string {
  return `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
}

export const navIcons: Record<string, string> = {
  "/": navIcon(`<path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z"/>`),
  "/schedule": navIcon(`<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/>`),
  "/standings": navIcon(`<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4ZM7 6H5a2 2 0 0 0 0 4h2M17 6h2a2 2 0 0 1 0 4h-2"/>`),
  "/teams": navIcon(`<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="9" cy="7" r="4"/>`),
  "/bowlers": navIcon(`<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`),
  "/statistics": navIcon(`<path d="M18 20V10M12 20V4M6 20v-6"/>`),
};

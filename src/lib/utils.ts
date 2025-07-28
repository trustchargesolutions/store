import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  }).format(price / 100);
}

export function formatPriceForStripe(price: number): number {
  // Ensure price is in cents
  return Math.round(price * 100);
}
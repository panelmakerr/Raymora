import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

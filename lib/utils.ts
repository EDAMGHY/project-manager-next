import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param name string
 * @returns string
 */
export function getUserName(name: string) {
  if (!name) {
    return name.slice(0, 2);
  }

  return name
    .trim()
    .split(" ")
    .map((str) => str[0])
    .join("");
}

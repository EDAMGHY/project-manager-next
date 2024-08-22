import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserName = (name: string) => {
  return name
    .trim()
    .split(" ")
    .map((str) => str[0])
    .join("");
};

import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isValidObjectId = (id: string) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

// Create axios client with baseURL
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
export const apiClient = axios.create({
  baseURL: apiUrl,
});

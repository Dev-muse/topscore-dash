import { cn } from "@/lib/utils";

export const getScoreDisplayClasses = (score: number | undefined | null): string => {
  const baseClasses = "inline-block px-2.5 py-1 rounded-md text-xs font-semibold min-w-[36px] text-center";

  if (score === undefined || score === null || isNaN(parseFloat(String(score)))) {
    return cn(baseClasses, "bg-slate-100 text-slate-500");
  }

  const numericScore = parseFloat(String(score));

  // Updated logic: 0 should also be red
  if (numericScore < 2) { // Includes 0 and negative numbers, up to 1.99...
    return cn(baseClasses, "bg-red-500 text-white");
  }
  if (numericScore >= 2 && numericScore <= 3.5) {
    return cn(baseClasses, "bg-orange-500 text-white");
  }
  if (numericScore > 3.5) {
    return cn(baseClasses, "bg-green-500 text-white");
  }
  return cn(baseClasses, "bg-slate-100 text-slate-500"); // Fallback
};

export const formatScore = (score: number | undefined | null): string => {
  if (score === undefined || score === null || isNaN(parseFloat(String(score)))) {
    return 'N/A';
  }
  const numericScore = parseFloat(String(score));
  // Ensure 0 is also formatted with one decimal, e.g., 0.0
  // All numbers should be to one decimal place.
  return numericScore.toFixed(1);
};

export const getNestedValue = (obj: any, path: string): any => {
  if (!obj || !path) {
    return undefined;
  }
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};


 
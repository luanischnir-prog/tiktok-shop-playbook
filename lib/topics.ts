export const TOPICS = [
  { slug: "affiliates",  label: "Affiliates",            color: "#534AB7" },
  { slug: "ads",         label: "Ads",                   color: "#993C1D" },
  { slug: "metrics",     label: "Metrics & Reporting",   color: "#0F6E56" },
  { slug: "content",     label: "Content & Trends",      color: "#993556" },
  { slug: "operations",  label: "Operations & Logistics", color: "#854F0B" },
] as const;

export type TopicSlug = (typeof TOPICS)[number]["slug"];

export const TYPES = ["note", "script", "data", "idea"] as const;
export type EntryType = (typeof TYPES)[number];

export function getTopic(slug: string) {
  return TOPICS.find((t) => t.slug === slug);
}

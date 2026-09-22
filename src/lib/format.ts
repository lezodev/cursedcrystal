import type { Rarity } from "@/data/types";

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

export function formatCurrency(value: number): string {
  return `$${formatNumber(value)}`;
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function formatMultiplier(value: number): string {
  return `${value.toFixed(2)}x`;
}

interface RarityStyle {
  label: Rarity;
  text: string;
  bg: string;
  border: string;
}

/**
 * Setiap rarity punya identitas warna sendiri karena ini adalah bahasa
 * fungsional game (bukan dekorasi bebas), dipisah dari palet oranye/hitam
 * situs supaya rarity tetap terbaca sebagai sistem, bukan aksen brand.
 */
const RARITY_STYLES: Record<Rarity, RarityStyle> = {
  Common: { label: "Common", text: "text-stone-300", bg: "bg-stone-500/10", border: "border-stone-500/30" },
  Uncommon: { label: "Uncommon", text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  Rare: { label: "Rare", text: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  Epic: { label: "Epic", text: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30" },
  Legendary: { label: "Legendary", text: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  Mythical: { label: "Mythical", text: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/30" },
  Secret: { label: "Secret", text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
};

export function getRarityStyle(rarity: Rarity): RarityStyle {
  return RARITY_STYLES[rarity];
}

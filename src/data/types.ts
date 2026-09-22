/**
 * Tipe data inti untuk seluruh wiki Cursed Crystal.
 * Setiap kategori (crystal, pickaxe, backpack, curse, nature, boss, dst)
 * mengikuti struktur di sini supaya data baru bisa ditambahkan tanpa
 * mengubah komponen UI.
 */

export type Rarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Mythical"
  | "Secret";

export const RARITY_ORDER: Rarity[] = [
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Mythical",
  "Secret",
];

export interface Crystal {
  slug: string;
  name: string;
  rarity: Rarity;
  hp: number;
  minPower: number;
  chanceOutOf: number;
  baseValue: number;
  xp: number;
  /** Nomor pulau tempat crystal ini bisa muncul, mis. [1, 2, 3] */
  spawnMaps: number[];
  /** Path gambar asli jika tersedia; kosongkan untuk memakai placeholder bergilir */
  image?: string;
}

export interface Pickaxe {
  slug: string;
  name: string;
  map: number;
  currencyType: "Money";
  price: number;
  isStarter: boolean;
  isShop: boolean;
  power: number;
  miningSpeed: number;
  critRate: number;
  critDamage: number;
  image: string;
}

export interface Backpack {
  slug: string;
  name: string;
  map: number;
  price: number;
  capacity: number;
  isStarter: boolean;
  image: string;
}

export interface Nature {
  slug: string;
  name: string;
  description: string;
  image?: string;
}

export interface Curse {
  slug: string;
  name: string;
  description: string;
  effect: string;
  sideEffect: string;
  image?: string;
}

export type NatureEffectiveness = "Excellent" | "Good" | "Weak" | "Cannot";

/** Baris matrix efektivitas: nature -> curse -> level efektivitas */
export interface EffectivenessRow {
  nature: string;
  values: Partial<Record<string, NatureEffectiveness>>;
}

export interface Boss {
  slug: string;
  name: string;
  label: string;
  rarity: Rarity;
  hp: number;
  minPower: number;
  baseValue: number;
  xp: number;
  spawnChanceHidden: boolean;
  description: string;
  image?: string;
}

export interface Island {
  slug: string;
  mapNumber: number;
  name: string;
  description: string;
}

export interface Pet {
  slug: string;
  name: string;
  rarity: Rarity;
  effect: string;
  obtainedFrom: string;
  gemPrice?: number;
}

export interface Guide {
  slug: string;
  title: string;
  summary: string;
}

export interface UpdateNote {
  version: string;
  date: string;
  title: string;
  summary: string;
  changes: string[];
}

export type WikiCategory =
  | "crystals"
  | "pickaxes"
  | "backpacks"
  | "curses"
  | "natures"
  | "islands"
  | "bosses"
  | "quests"
  | "guides";

export interface SearchEntry {
  name: string;
  category: WikiCategory | "pets";
  categoryLabel: string;
  description: string;
  href: string;
}

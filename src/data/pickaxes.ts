import type { Pickaxe } from "./types";

/** Sumber: PickaxeConfig.Items (data resmi dari game), urutan mengikuti PickaxeConfig.Order. */
export const pickaxes: Pickaxe[] = [
  // Map 1 — Starter Island
  { slug: "starter", name: "Starter Pickaxe", map: 1, currencyType: "Money", price: 0, isStarter: true, isShop: true, power: 10, miningSpeed: 1.0, critRate: 0.05, critDamage: 1.5, image: "/images/pickaxes/StarterPickaxe.png" },
  { slug: "bronze", name: "Bronze Pickaxe", map: 1, currencyType: "Money", price: 200, isStarter: false, isShop: true, power: 16, miningSpeed: 1.12, critRate: 0.06, critDamage: 1.5, image: "/images/pickaxes/BronzePickaxe.png" },
  { slug: "copper", name: "Copper Pickaxe", map: 1, currencyType: "Money", price: 5000, isStarter: false, isShop: true, power: 28, miningSpeed: 1.25, critRate: 0.05, critDamage: 1.65, image: "/images/pickaxes/CopperPickaxe.png" },
  { slug: "iron", name: "Iron Pickaxe", map: 1, currencyType: "Money", price: 15000, isStarter: false, isShop: true, power: 40, miningSpeed: 1.4, critRate: 0.08, critDamage: 1.55, image: "/images/pickaxes/IronPickaxe.png" },
  { slug: "azure", name: "Azure Pickaxe", map: 1, currencyType: "Money", price: 35000, isStarter: false, isShop: true, power: 54, miningSpeed: 1.55, critRate: 0.07, critDamage: 1.75, image: "/images/pickaxes/AzurePickaxe.png" },

  // Map 2 — Solis Island
  { slug: "steel", name: "Steel Pickaxe", map: 2, currencyType: "Money", price: 80000, isStarter: false, isShop: true, power: 68, miningSpeed: 1.68, critRate: 0.08, critDamage: 1.65, image: "/images/pickaxes/SteelPickaxe.png" },
  { slug: "titanium", name: "Titanium Pickaxe", map: 2, currencyType: "Money", price: 180000, isStarter: false, isShop: true, power: 82, miningSpeed: 1.8, critRate: 0.1, critDamage: 1.6, image: "/images/pickaxes/TitaniumPickaxe.png" },
  { slug: "topaz", name: "Topaz Pickaxe", map: 2, currencyType: "Money", price: 380000, isStarter: false, isShop: true, power: 98, miningSpeed: 1.92, critRate: 0.09, critDamage: 1.8, image: "/images/pickaxes/TopazPickaxe.png" },
  { slug: "quartz", name: "Quartz Pickaxe", map: 2, currencyType: "Money", price: 700000, isStarter: false, isShop: true, power: 115, miningSpeed: 2.04, critRate: 0.12, critDamage: 1.7, image: "/images/pickaxes/QuartzPickaxe.png" },
  { slug: "tanzanite", name: "Tanzanite Pickaxe", map: 2, currencyType: "Money", price: 1200000, isStarter: false, isShop: true, power: 132, miningSpeed: 2.16, critRate: 0.11, critDamage: 1.9, image: "/images/pickaxes/TanzanitePickaxe.png" },
  { slug: "golden", name: "Golden Pickaxe", map: 2, currencyType: "Money", price: 5300000, isStarter: false, isShop: false, power: 225, miningSpeed: 2.2, critRate: 0.25, critDamage: 1.95, image: "/images/pickaxes/GoldenPickaxe.png" },

  // Map 3 — Tambora Island
  { slug: "obsidian", name: "Obsidian Pickaxe", map: 3, currencyType: "Money", price: 2000000, isStarter: false, isShop: true, power: 155, miningSpeed: 2.28, critRate: 0.12, critDamage: 1.9, image: "/images/pickaxes/ObsidianPickaxe.png" },
  { slug: "magma", name: "Magma Pickaxe", map: 3, currencyType: "Money", price: 3500000, isStarter: false, isShop: true, power: 180, miningSpeed: 2.38, critRate: 0.14, critDamage: 2.05, image: "/images/pickaxes/MagmaPickaxe.png" },
  { slug: "amethyst", name: "Amethyst Pickaxe", map: 3, currencyType: "Money", price: 6000000, isStarter: false, isShop: true, power: 205, miningSpeed: 2.48, critRate: 0.16, critDamage: 1.95, image: "/images/pickaxes/AmethystPickaxe.png" },
  { slug: "inferno", name: "Inferno Pickaxe", map: 3, currencyType: "Money", price: 10000000, isStarter: false, isShop: true, power: 228, miningSpeed: 2.58, critRate: 0.15, critDamage: 2.3, image: "/images/pickaxes/InfernoPickaxe.png" },
  { slug: "jade", name: "Jade Pickaxe", map: 3, currencyType: "Money", price: 16000000, isStarter: false, isShop: true, power: 255, miningSpeed: 2.7, critRate: 0.18, critDamage: 2.2, image: "/images/pickaxes/JadePickaxe.png" },
  { slug: "void", name: "Void Pickaxe", map: 3, currencyType: "Money", price: 25000000, isStarter: false, isShop: false, power: 285, miningSpeed: 2.85, critRate: 0.22, critDamage: 2.5, image: "/images/pickaxes/VoidPickaxe.png" },
];

export function getPickaxeBySlug(slug: string): Pickaxe | undefined {
  return pickaxes.find((p) => p.slug === slug);
}

import type { Backpack } from "./types";

/** Sumber: BackpackConfig.Bag (data resmi dari game), urutan mengikuti BackpackConfig.Order. */
export const backpacks: Backpack[] = [
  // Map 1 — Starter Island
  { slug: "leather-bag", name: "Small Miner Bag", map: 1, price: 3000, capacity: 50, isStarter: false, image: "/images/backpacks/LeatherBag.png" },
  { slug: "reinforced-bag", name: "Reinforced Bag", map: 1, price: 12000, capacity: 75, isStarter: false, image: "/images/backpacks/ReinforcedBag.png" },
  { slug: "explorer-bag", name: "Explorer Bag", map: 1, price: 40000, capacity: 110, isStarter: false, image: "/images/backpacks/ExplorerBag.png" },

  // Map 2 — Solis Island
  { slug: "solis-bag", name: "Solis Bag", map: 2, price: 200000, capacity: 160, isStarter: false, image: "/images/backpacks/SolisBag.png" },
  { slug: "sunbound-bag", name: "Sunbound Bag", map: 2, price: 600000, capacity: 225, isStarter: false, image: "/images/backpacks/SunboundBag.png" },
  { slug: "radiant-bag", name: "Radiant Bag", map: 2, price: 1500000, capacity: 300, isStarter: false, image: "/images/backpacks/RadiantBag.png" },

  // Map 3 — Tambora Island
  { slug: "volcanic-bag", name: "Volcanic Bag", map: 3, price: 6000000, capacity: 425, isStarter: false, image: "/images/backpacks/VolcanicBag.png" },
  { slug: "magma-bag", name: "Magma Bag", map: 3, price: 15000000, capacity: 600, isStarter: false, image: "/images/backpacks/MagmaBag.png" },
  { slug: "inferno-bag", name: "Inferno Bag", map: 3, price: 35000000, capacity: 850, isStarter: false, image: "/images/backpacks/InfernoBag.png" },
];

export function getBackpackBySlug(slug: string): Backpack | undefined {
  return backpacks.find((b) => b.slug === slug);
}

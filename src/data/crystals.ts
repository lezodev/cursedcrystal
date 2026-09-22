import type { Crystal } from "./types";

/**
 * Sumber: CrystalConfig.List (data resmi dari game).
 * Belum ada render/icon untuk crystal, jadi field `image` sengaja
 * dikosongkan di sini. UI memilih placeholder Thumbnail-1/2/3 secara
 * bergilir berdasarkan slug (lihat lib/placeholder.ts).
 */
export const crystals: Crystal[] = [
  // Common
  { slug: "azure", name: "Azure Crystal", rarity: "Common", hp: 50, minPower: 5, chanceOutOf: 5, baseValue: 14, xp: 7, spawnMaps: [1] },
  { slug: "sapphire", name: "Sapphire Crystal", rarity: "Common", hp: 75, minPower: 5, chanceOutOf: 8, baseValue: 22, xp: 13, spawnMaps: [1] },
  { slug: "rosalite", name: "Rosalite Crystal", rarity: "Common", hp: 100, minPower: 5, chanceOutOf: 15, baseValue: 30, xp: 22, spawnMaps: [1] },
  { slug: "copper", name: "Copper Crystal", rarity: "Common", hp: 125, minPower: 5, chanceOutOf: 18, baseValue: 45, xp: 16, spawnMaps: [1] },

  // Uncommon
  { slug: "verdant", name: "Verdant Crystal", rarity: "Uncommon", hp: 200, minPower: 5, chanceOutOf: 25, baseValue: 70, xp: 34, spawnMaps: [1, 2, 3] },
  { slug: "jade", name: "Jade Crystal", rarity: "Uncommon", hp: 250, minPower: 5, chanceOutOf: 35, baseValue: 85, xp: 48, spawnMaps: [1] },
  { slug: "amber", name: "Amber Crystal", rarity: "Uncommon", hp: 300, minPower: 10, chanceOutOf: 45, baseValue: 115, xp: 44, spawnMaps: [1, 2] },
  { slug: "citrine", name: "Citrine Crystal", rarity: "Uncommon", hp: 375, minPower: 10, chanceOutOf: 60, baseValue: 140, xp: 72, spawnMaps: [1, 3] },
  { slug: "ruby", name: "Ruby Crystal", rarity: "Uncommon", hp: 450, minPower: 15, chanceOutOf: 90, baseValue: 190, xp: 78, spawnMaps: [2] },
  { slug: "aquamarine", name: "Aquamarine Crystal", rarity: "Uncommon", hp: 550, minPower: 15, chanceOutOf: 110, baseValue: 240, xp: 118, spawnMaps: [1, 2] },

  // Rare
  { slug: "garnet", name: "Garnet Crystal", rarity: "Rare", hp: 700, minPower: 20, chanceOutOf: 150, baseValue: 450, xp: 140, spawnMaps: [2] },
  { slug: "peridot", name: "Peridot Crystal", rarity: "Rare", hp: 850, minPower: 22, chanceOutOf: 200, baseValue: 560, xp: 195, spawnMaps: [2, 3] },
  { slug: "tourmaline", name: "Tourmaline Crystal", rarity: "Rare", hp: 1000, minPower: 22, chanceOutOf: 275, baseValue: 760, xp: 175, spawnMaps: [2] },
  { slug: "lapis", name: "Lapis Crystal", rarity: "Rare", hp: 1200, minPower: 30, chanceOutOf: 350, baseValue: 850, xp: 285, spawnMaps: [2, 3] },
  { slug: "rhodonite", name: "Rhodonite Crystal", rarity: "Rare", hp: 1400, minPower: 30, chanceOutOf: 450, baseValue: 1150, xp: 245, spawnMaps: [2, 3, 4] },
  { slug: "topaz", name: "Topaz Crystal", rarity: "Rare", hp: 1650, minPower: 30, chanceOutOf: 600, baseValue: 1100, xp: 370, spawnMaps: [2, 4, 5] },

  // Epic
  { slug: "amethyst", name: "Amethyst Crystal", rarity: "Epic", hp: 2000, minPower: 30, chanceOutOf: 800, baseValue: 2200, xp: 540, spawnMaps: [3] },
  { slug: "obsidian", name: "Obsidian Crystal", rarity: "Epic", hp: 2400, minPower: 30, chanceOutOf: 1000, baseValue: 2000, xp: 720, spawnMaps: [2, 4, 5] },
  { slug: "malachite", name: "Malachite Crystal", rarity: "Epic", hp: 2800, minPower: 36, chanceOutOf: 1250, baseValue: 3500, xp: 630, spawnMaps: [3, 4] },
  { slug: "carnelian", name: "Carnelian Crystal", rarity: "Epic", hp: 3200, minPower: 38, chanceOutOf: 1500, baseValue: 2800, xp: 920, spawnMaps: [5] },
  { slug: "moonstone", name: "Moonstone Crystal", rarity: "Epic", hp: 3750, minPower: 40, chanceOutOf: 2000, baseValue: 5000, xp: 1180, spawnMaps: [3] },
  { slug: "sunstone", name: "Sunstone Crystal", rarity: "Epic", hp: 4500, minPower: 42, chanceOutOf: 2500, baseValue: 4500, xp: 1020, spawnMaps: [3, 5] },

  // Legendary
  { slug: "tanzanite", name: "Tanzanite Crystal", rarity: "Legendary", hp: 5500, minPower: 45, chanceOutOf: 5000, baseValue: 13000, xp: 2200, spawnMaps: [3] },
  { slug: "alexandrite", name: "Alexandrite Crystal", rarity: "Legendary", hp: 6500, minPower: 48, chanceOutOf: 7500, baseValue: 8000, xp: 3000, spawnMaps: [5] },
  { slug: "heliodor", name: "Heliodor Crystal", rarity: "Legendary", hp: 7500, minPower: 52, chanceOutOf: 10000, baseValue: 11000, xp: 2600, spawnMaps: [5] },
  { slug: "black-opal", name: "Black Opal Crystal", rarity: "Legendary", hp: 9000, minPower: 56, chanceOutOf: 15000, baseValue: 14000, xp: 4300, spawnMaps: [4, 5] },
  { slug: "bloodstone", name: "Bloodstone Crystal", rarity: "Legendary", hp: 11000, minPower: 60, chanceOutOf: 20000, baseValue: 18000, xp: 3900, spawnMaps: [5] },
  { slug: "star", name: "Star Crystal", rarity: "Legendary", hp: 13000, minPower: 65, chanceOutOf: 25000, baseValue: 24000, xp: 6400, spawnMaps: [4, 5] },

  // Mythical
  { slug: "celestite", name: "Celestite Crystal", rarity: "Mythical", hp: 16000, minPower: 70, chanceOutOf: 50000, baseValue: 90000, xp: 9000, spawnMaps: [3] },
  { slug: "void", name: "Void Crystal", rarity: "Mythical", hp: 20000, minPower: 80, chanceOutOf: 75000, baseValue: 145000, xp: 12000, spawnMaps: [4] },
  { slug: "eclipse", name: "Eclipse Crystal", rarity: "Mythical", hp: 25000, minPower: 90, chanceOutOf: 100000, baseValue: 210000, xp: 16500, spawnMaps: [3] },
  { slug: "radiant", name: "Radiant Crystal", rarity: "Mythical", hp: 30000, minPower: 100, chanceOutOf: 150000, baseValue: 310000, xp: 14500, spawnMaps: [2, 5] },
  { slug: "eternal", name: "Eternal Crystal", rarity: "Mythical", hp: 40000, minPower: 115, chanceOutOf: 250000, baseValue: 520000, xp: 25000, spawnMaps: [5] },

  // Secret
  { slug: "phantom", name: "Phantom Crystal", rarity: "Secret", hp: 50000, minPower: 130, chanceOutOf: 500000, baseValue: 1250000, xp: 18000, spawnMaps: [1] },
  { slug: "unknown", name: "Unknown Crystal", rarity: "Secret", hp: 85000, minPower: 160, chanceOutOf: 750000, baseValue: 1800000, xp: 28000, spawnMaps: [2] },
  { slug: "galaxy", name: "Galaxy Crystal", rarity: "Secret", hp: 75000, minPower: 150, chanceOutOf: 1000000, baseValue: 2500000, xp: 40000, spawnMaps: [3] },
  { slug: "ancient", name: "Ancient Crystal", rarity: "Secret", hp: 100000, minPower: 175, chanceOutOf: 2500000, baseValue: 4000000, xp: 55000, spawnMaps: [4] },
  { slug: "ignis", name: "Ignis Crystal", rarity: "Secret", hp: 150000, minPower: 200, chanceOutOf: 10000000, baseValue: 8000000, xp: 80000, spawnMaps: [5] },
];

export function getCrystalBySlug(slug: string): Crystal | undefined {
  return crystals.find((c) => c.slug === slug);
}

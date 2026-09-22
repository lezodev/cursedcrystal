import type { Boss } from "./types";

/** Sumber: CrystalConfig.ByName.MonolithCrystal (data resmi dari game). */
export const bosses: Boss[] = [
  {
    slug: "monolith",
    name: "Monolith Crystal",
    label: "Crystal Boss",
    rarity: "Secret",
    hp: 4000000,
    minPower: 125,
    baseValue: 5000000,
    xp: 70000,
    spawnChanceHidden: true,
    description:
      "A mysterious crystal boss that can appear in the world and be mined cooperatively by players.",
  },
];

export function getBossBySlug(slug: string): Boss | undefined {
  return bosses.find((b) => b.slug === slug);
}

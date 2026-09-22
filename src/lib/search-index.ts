import { backpacks } from "@/data/backpacks";
import { bosses } from "@/data/bosses";
import { crystals } from "@/data/crystals";
import { curses } from "@/data/curses";
import { guides } from "@/data/guides";
import { islands } from "@/data/islands";
import { natures } from "@/data/natures";
import { pickaxes } from "@/data/pickaxes";
import type { SearchEntry } from "@/data/types";

/**
 * Satu index pencarian gabungan dari seluruh kategori data. Menambah item baru
 * ke data/*.ts otomatis membuatnya bisa dicari, tidak perlu menyentuh file ini.
 */
export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const c of crystals) {
    entries.push({
      name: c.name,
      category: "crystals",
      categoryLabel: "Crystal",
      description: `${c.rarity} · Nilai jual ${c.baseValue}`,
      href: `/wiki/crystals/${c.slug}`,
    });
  }

  for (const p of pickaxes) {
    entries.push({
      name: p.name,
      category: "pickaxes",
      categoryLabel: "Pickaxe",
      description: p.isShop ? `Mining Power ${p.power}` : "Special Acquisition",
      href: `/wiki/pickaxes/${p.slug}`,
    });
  }

  for (const b of backpacks) {
    entries.push({
      name: b.name,
      category: "backpacks",
      categoryLabel: "Backpack",
      description: `Kapasitas ${b.capacity}`,
      href: `/wiki/backpacks/${b.slug}`,
    });
  }

  for (const curse of curses) {
    entries.push({
      name: curse.name,
      category: "curses",
      categoryLabel: "Curse",
      description: curse.description,
      href: `/wiki/curses/${curse.slug}`,
    });
  }

  for (const n of natures) {
    entries.push({
      name: n.name,
      category: "natures",
      categoryLabel: "Nature",
      description: n.description,
      href: `/wiki/natures/${n.slug}`,
    });
  }

  for (const island of islands) {
    entries.push({
      name: island.name,
      category: "islands",
      categoryLabel: "Island",
      description: island.description,
      href: `/wiki/islands/${island.slug}`,
    });
  }

  for (const boss of bosses) {
    entries.push({
      name: boss.name,
      category: "bosses",
      categoryLabel: "Boss",
      description: boss.label,
      href: `/wiki/bosses/${boss.slug}`,
    });
  }

  for (const guide of guides) {
    entries.push({
      name: guide.title,
      category: "guides",
      categoryLabel: "Guide",
      description: guide.summary,
      href: `/wiki/guides/${guide.slug}`,
    });
  }

  return entries;
}

export function searchEntries(query: string, entries: SearchEntry[]): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return entries
    .filter((e) => e.name.toLowerCase().includes(q) || e.description.toLowerCase().includes(q))
    .sort((a, b) => {
      const aStarts = a.name.toLowerCase().startsWith(q) ? 0 : 1;
      const bStarts = b.name.toLowerCase().startsWith(q) ? 0 : 1;
      return aStarts - bStarts;
    })
    .slice(0, 20);
}

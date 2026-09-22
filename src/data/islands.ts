import type { Island } from "./types";

/**
 * Nama pulau diturunkan dari data resmi (Map 1/2/3 pada Pickaxe & Backpack config
 * memakai nama Starter Island, Solis Island, Tambora Island). Detail lore, quest,
 * dan fitur khusus tiap pulau belum didokumentasikan, jadi ditandai "Belum tersedia".
 */
export const islands: Island[] = [
  {
    slug: "starter-island",
    mapNumber: 1,
    name: "Starter Island",
    description: "Pulau awal tempat pemain memulai perjalanan menambang di Cursed Crystal.",
  },
  {
    slug: "solis-island",
    mapNumber: 2,
    name: "Solis Island",
    description: "Pulau kedua dalam progresi Cursed Crystal.",
  },
  {
    slug: "tambora-island",
    mapNumber: 3,
    name: "Tambora Island",
    description: "Pulau ketiga dalam progresi Cursed Crystal.",
  },
];

export function getIslandBySlug(slug: string): Island | undefined {
  return islands.find((i) => i.slug === slug);
}

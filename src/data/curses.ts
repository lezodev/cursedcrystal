import type { Curse } from "./types";

/**
 * Sumber: curseDescriptions resmi + tabel Fungsi/Efek dan Efek Samping (Bahasa Indonesia).
 * PENTING: Arcane Distortion secara spesifik TIDAK mengurangi sell value pada Monolith
 * (lihat halaman boss Monolith untuk detail).
 */
export const curses: Curse[] = [
  {
    slug: "wither",
    name: "Wither",
    description: "Slowly drains the crystal's natural energy.",
    effect: "Mengurangi nilai jual crystal sebesar 20% dan mengurangi damage/power mining terhadap crystal sebesar 10%.",
    sideEffect: "Crystal lebih sulit dihancurkan dan hasil jual lebih rendah.",
    image: "/images/curses/Thorn.png",
  },
  {
    slug: "stonebind",
    name: "Stonebind",
    description: "Locks the crystal inside hardened cursed resonance.",
    effect: "Membuat crystal tidak bisa ditambang selama curse aktif.",
    sideEffect: "Harus dipurify terlebih dahulu sebelum bisa ditambang.",
    image: "/images/curses/Static.png",
  },
  {
    slug: "scorch",
    name: "Scorch",
    description: "Burns through the crystal and radiates unstable heat.",
    effect: "Mengurangi nilai jual 20%, mengurangi mining damage 25%, dan meningkatkan Heat.",
    sideEffect: "Mining jauh lebih lambat dan Heat lebih cepat naik.",
    image: "/images/curses/Blaze.png",
  },
  {
    slug: "drain",
    name: "Drain",
    description: "Pulls energy and mass away from the crystal.",
    effect: "Mengurangi nilai jual 30%.",
    sideEffect: "Final Weight crystal berkurang 15%.",
    image: "/images/curses/Abyss.png",
  },
  {
    slug: "arcane-distortion",
    name: "Arcane Distortion",
    description: "Distorts the crystal's resonance and disrupts precision.",
    effect: "Membuat Crit Rate terhadap crystal menjadi 0%.",
    sideEffect: "Tidak bisa mendapatkan critical hit selama curse aktif.",
    image: "/images/curses/Rift.png",
  },
  {
    slug: "fracture",
    name: "Fracture",
    description: "Destabilizes the crystal's internal structure.",
    effect: "Mengurangi nilai jual 20%.",
    sideEffect: "Crit Damage terhadap crystal berkurang 40%.",
    image: "/images/curses/Fracture.png",
  },
  {
    slug: "voidlock",
    name: "Voidlock",
    description: "Seals the crystal in dense Void resonance.",
    effect: "Mengurangi nilai jual 35%, XP 25%, dan movement di sekitar crystal 10%.",
    sideEffect: "Mining lebih lambat secara keseluruhan dan XP lebih sedikit.",
    image: "/images/curses/Toxic.png",
  },
];

export function getCurseBySlug(slug: string): Curse | undefined {
  return curses.find((c) => c.slug === slug);
}

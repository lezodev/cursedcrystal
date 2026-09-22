import type { EffectivenessRow, Nature } from "./types";

/** Deskripsi resmi dari game (natureDescriptions). Eternal, Unknown, Cosmic, dan Ancient
 * belum punya data efektivitas terhadap curse, jadi tidak muncul di tabel matrix. */
export const natures: Nature[] = [
  { slug: "aqua", name: "Aqua", description: "A calm Nature that stabilizes heat and flowing energy.", image: "/images/natures/Aqua.png" },
  { slug: "bloom", name: "Bloom", description: "A living Nature shaped by growth and restoration.", image: "/images/natures/Bloom.png" },
  { slug: "resin", name: "Resin", description: "A binding Nature that seals unstable crystal structures.", image: "/images/natures/Resin.png" },
  { slug: "mineral", name: "Mineral", description: "A dense Nature built around stability and endurance.", image: "/images/natures/Mineral.png" },
  { slug: "solar", name: "Solar", description: "A radiant Nature that pushes back corruption and darkness.", image: "/images/natures/Solar.png" },
  { slug: "ember", name: "Ember", description: "An aggressive Nature that breaks hardened corruption.", image: "/images/natures/Ember.png" },
  { slug: "arcane", name: "Arcane", description: "A volatile Nature capable of manipulating unstable resonance.", image: "/images/natures/Arcane.png" },
  { slug: "lunar", name: "Lunar", description: "A quiet Nature that suppresses violent resonance.", image: "/images/natures/Lunar.png" },
  { slug: "void", name: "Void", description: "An absorbing Nature that consumes abnormal energy.", image: "/images/natures/Void.png" },
  { slug: "radiant", name: "Radiant", description: "A pure Nature that strongly resists corruption.", image: undefined },
  { slug: "eternal", name: "Eternal", description: "A stable Nature that resists change and decay.", image: undefined },
  { slug: "unknown", name: "Unknown", description: "An unidentified Nature with unpredictable resonance.", image: undefined },
  { slug: "cosmic", name: "Cosmic", description: "A rare Nature connected to spatial resonance.", image: undefined },
  { slug: "ancient", name: "Ancient", description: "An old Nature carrying deeply stabilized energy.", image: undefined },
];

/**
 * Karakteristik naratif per Nature (fungsi/karakteristik + efek samping/kelemahan).
 * Sumber: tabel referensi resmi dalam Bahasa Indonesia.
 */
export const natureCharacteristics: Record<
  string,
  { characteristic: string; weakness: string }
> = {
  aqua: {
    characteristic: "Nature berbasis air. Bagus untuk menghadapi Scorch dan cukup efektif terhadap Wither/Drain.",
    weakness: "Lemah terhadap beberapa Curse; tidak bisa digunakan untuk Voidlock.",
  },
  bloom: {
    characteristic: "Nature kehidupan/tumbuhan. Sangat bagus melawan Wither dan Drain.",
    weakness: "Lemah terhadap Stonebind dan Arcane Distortion; tidak bisa digunakan untuk Scorch.",
  },
  resin: {
    characteristic: "Nature berbasis getah/resin. Sangat bagus untuk Stonebind dan Fracture.",
    weakness: "Lemah terhadap Scorch dan Voidlock; tidak bisa digunakan untuk Scorch.",
  },
  mineral: {
    characteristic: "Nature batu/mineral. Cocok untuk Curse yang berhubungan dengan struktur crystal, terutama Stonebind dan Fracture.",
    weakness: "Lemah terhadap Drain; tidak bisa digunakan untuk Drain.",
  },
  solar: {
    characteristic: "Nature energi matahari. Sangat kuat terhadap Wither dan Voidlock.",
    weakness: "Lemah terhadap Fracture; tidak bisa digunakan untuk Drain.",
  },
  ember: {
    characteristic: "Nature api/panas. Bagus terhadap Stonebind, Fracture, dan cukup baik terhadap Wither/Arcane Distortion.",
    weakness: "Tidak bisa digunakan untuk Scorch karena sifatnya bertentangan; lemah terhadap Drain/Voidlock.",
  },
  arcane: {
    characteristic: "Nature magis. Salah satu Nature paling fleksibel; sangat bagus melawan Arcane Distortion dan Fracture.",
    weakness: "Tidak memiliki hard-counter Curse yang membuatnya sepenuhnya tidak bisa digunakan.",
  },
  lunar: {
    characteristic: "Nature energi bulan. Sangat bagus terhadap Scorch dan Arcane Distortion.",
    weakness: "Lemah terhadap Stonebind; tidak bisa digunakan untuk Stonebind.",
  },
  void: {
    characteristic: "Nature energi Void. Sangat bagus terhadap Drain.",
    weakness: "Sangat lemah terhadap Wither; tidak bisa digunakan untuk Voidlock.",
  },
};

/** Urutan curse yang dipakai di tabel matrix, agar kolom konsisten di seluruh UI. */
export const matrixCurseOrder = [
  "Wither",
  "Stonebind",
  "Scorch",
  "Drain",
  "Arcane Distortion",
  "Fracture",
  "Voidlock",
];

/** Matrix efektivitas Nature vs Curse (Good/Weak/Excellent/Cannot). Sumber: tabel referensi resmi. */
export const effectivenessMatrix: EffectivenessRow[] = [
  { nature: "Aqua", values: { Wither: "Good", Stonebind: "Weak", Scorch: "Excellent", Drain: "Good", "Arcane Distortion": "Weak", Fracture: "Good", Voidlock: "Cannot" } },
  { nature: "Bloom", values: { Wither: "Excellent", Stonebind: "Weak", Scorch: "Cannot", Drain: "Excellent", "Arcane Distortion": "Weak", Fracture: "Good", Voidlock: "Weak" } },
  { nature: "Resin", values: { Wither: "Good", Stonebind: "Excellent", Scorch: "Cannot", Drain: "Good", "Arcane Distortion": "Good", Fracture: "Excellent", Voidlock: "Weak" } },
  { nature: "Mineral", values: { Wither: "Good", Stonebind: "Excellent", Scorch: "Good", Drain: "Cannot", "Arcane Distortion": "Good", Fracture: "Excellent", Voidlock: "Good" } },
  { nature: "Solar", values: { Wither: "Excellent", Stonebind: "Good", Scorch: "Weak", Drain: "Cannot", "Arcane Distortion": "Good", Fracture: "Weak", Voidlock: "Excellent" } },
  { nature: "Ember", values: { Wither: "Good", Stonebind: "Excellent", Scorch: "Cannot", Drain: "Weak", "Arcane Distortion": "Good", Fracture: "Excellent", Voidlock: "Weak" } },
  { nature: "Arcane", values: { Wither: "Good", Stonebind: "Excellent", Scorch: "Good", Drain: "Good", "Arcane Distortion": "Excellent", Fracture: "Excellent", Voidlock: "Good" } },
  { nature: "Lunar", values: { Wither: "Good", Stonebind: "Cannot", Scorch: "Excellent", Drain: "Good", "Arcane Distortion": "Excellent", Fracture: "Good", Voidlock: "Good" } },
  { nature: "Void", values: { Wither: "Weak", Stonebind: "Good", Scorch: "Good", Drain: "Excellent", "Arcane Distortion": "Good", Fracture: "Good", Voidlock: "Cannot" } },
];

export function getNatureBySlug(slug: string): Nature | undefined {
  return natures.find((n) => n.slug === slug);
}

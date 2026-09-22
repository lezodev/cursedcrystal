import type { Guide } from "./types";

/** Judul guide sesuai brief. Isi langkah demi langkah belum didokumentasikan (Belum tersedia). */
export const guides: Guide[] = [
  { slug: "how-to-mine-crystals", title: "How to Mine Crystals", summary: "Dasar-dasar menambang crystal pertama kali." },
  { slug: "how-to-increase-mining-power", title: "How to Increase Mining Power", summary: "Cara meningkatkan Mining Power lewat pickaxe dan upgrade." },
  { slug: "how-to-get-better-pickaxes", title: "How to Get Better Pickaxes", summary: "Panduan progresi pickaxe dari Starter hingga Void." },
  { slug: "how-to-purify-cursed-crystals", title: "How to Purify Cursed Crystals", summary: "Cara memurnikan crystal yang terkena curse memakai Nature yang tepat." },
  { slug: "how-nature-extraction-works", title: "How Nature Extraction Works", summary: "Penjelasan sistem ekstraksi Nature dari crystal." },
  { slug: "how-to-get-nature-charges", title: "How to Get Nature Charges", summary: "Cara mendapatkan Nature Charge untuk purifikasi." },
  { slug: "how-to-get-pets", title: "How to Get Pets", summary: "Cara mendapatkan companion di Cursed Crystal." },
  { slug: "how-to-unlock-golden-pickaxe", title: "How to Unlock Golden Pickaxe", summary: "Syarat membuka Golden Pickaxe lewat trial khusus." },
  { slug: "how-to-unlock-void-pickaxe", title: "How to Unlock Void Pickaxe", summary: "Syarat membuka Void Pickaxe." },
  { slug: "how-the-monolith-crystal-works", title: "How the Monolith Crystal Works", summary: "Mekanisme boss Monolith Crystal secara lengkap." },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

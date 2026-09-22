/**
 * Crystal belum memiliki render asli. Fungsi ini memilih salah satu dari
 * tiga placeholder (Thumbnail-1/2/3) secara konsisten berdasarkan slug,
 * supaya crystal yang sama selalu menampilkan placeholder yang sama, dan
 * menggantinya dengan render asli nanti hanya perlu mengisi field `image`
 * di data/crystals.ts.
 */
export function getCrystalPlaceholder(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const index = (hash % 3) + 1;
  return `/images/placeholders/Thumbnail-${index}.png`;
}

export const genericIconPlaceholder = "/images/placeholders/Icon-1.png";

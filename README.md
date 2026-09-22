# Cursed Crystal — Official Site & Wiki

Website resmi + wiki untuk game Roblox **Cursed Crystal**, dibangun dengan Next.js 16 (App Router), TypeScript, dan Tailwind CSS v4.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Untuk build produksi:

```bash
npm run build
npm start
```

## Struktur data

Seluruh konten wiki bersifat **data-driven** — tidak ada yang di-hardcode ke dalam komponen UI. Semua ada di `src/data/`:

| File | Isi |
|---|---|
| `crystals.ts` | 40 crystal (Common → Secret) |
| `pickaxes.ts` | 17 pickaxe di 3 pulau |
| `backpacks.ts` | 9 backpack di 3 pulau |
| `curses.ts` | 7 curse + efek/efek samping |
| `natures.ts` | 10 nature + matrix efektivitas vs curse |
| `bosses.ts` | Monolith Crystal |
| `islands.ts` | Starter / Solis / Tambora Island |
| `quests.ts` | 5 kategori quest |
| `guides.ts` | 10 judul guide |
| `updates.ts` | Patch notes |

**Menambah item baru** = menambah satu baris ke array yang sesuai. Halaman list, halaman detail, dan pencarian global akan otomatis menyesuaikan — tidak perlu menyentuh komponen.

## Mengganti placeholder dengan aset asli

Gambar pickaxe, backpack, Nature, dan Curse sudah dipetakan ke nama file yang sesuai dengan folder aset kamu. Cukup **timpa file di folder berikut** dengan render asli (nama file harus sama persis):

```
public/images/pickaxes/     → StarterPickaxe.png, BronzePickaxe.png, ... GoldenPickaxe.png, VoidPickaxe.png
public/images/backpacks/    → LeatherBag.png, ReinforcedBag.png, ... InfernoBag.png
public/images/natures/      → Aqua.png, Bloom.png, Resin.png, ... Void.png
public/images/curses/       → Thorn.png (Wither), Static.png (Stonebind), Blaze.png (Scorch),
                               Abyss.png (Drain), Rift.png (Arcane Distortion), Fracture.png,
                               Toxic.png (Voidlock)
```

> Catatan penamaan curse: nama file asset kamu (Thorn, Static, Blaze, Abyss, Rift, Toxic) tidak selalu sama dengan nama curse di game (Wither, Stonebind, Scorch, Drain, Arcane Distortion, Voidlock). Mapping-nya sudah diatur di `src/data/curses.ts` — field `image` tiap curse sudah menunjuk ke nama file asset yang benar. Kalau kamu mengganti nama file asset, cukup update field `image` di file itu.

Crystal **belum punya render asli**, jadi saat ini memakai rotasi otomatis dari:

```
public/images/placeholders/Thumbnail-1.png
public/images/placeholders/Thumbnail-2.png
public/images/placeholders/Thumbnail-3.png
public/images/placeholders/Icon-1.png
```

Begitu render crystal tersedia, isi field `image` pada crystal terkait di `src/data/crystals.ts` — misalnya:

```ts
{ slug: "azure", name: "Azure Crystal", ..., image: "/images/crystals/AzureCrystal.png" }
```

lalu taruh file-nya di `public/images/crystals/`.

Semua file placeholder di repo ini adalah gambar sementara buatan sendiri (bentuk facet oranye sederhana) — **bukan aset final**, murni supaya halaman bisa langsung dijalankan sebelum aset asli ditempel.

## Hal yang sengaja ditandai "Belum tersedia"

Sesuai prinsip tidak mengarang data, beberapa bagian sengaja kosong / bertuliskan "Belum tersedia" karena datanya belum diberikan:

- Heat mechanic & curse purification mechanic detail pada Monolith Crystal
- Reward tier table Monolith Crystal
- Daftar quest individual per kategori
- Isi langkah-langkah tiap Guide
- Lore/fitur khusus tiap Island
- Link sosial media di halaman Community (masih placeholder, `#`)
- Sistem Pet (sengaja tidak ditambahkan — masih rencana, belum final)

Isi bagian-bagian ini di file data terkait begitu datanya siap.

## Palet & identitas visual

- Warna dasar charcoal hangat (`#141110`) + aksen oranye lava (`#FF6A2B`), didefinisikan sebagai CSS custom properties di `src/app/globals.css`.
- Rarity (Common → Secret) punya skala warna sendiri di `src/lib/format.ts`, terpisah dari warna brand.
- Motif "facet corner" (sudut terpotong ala kristal) dipakai konsisten lewat class `.facet-corner` / `.facet-corner-sm`.
- Font: Space Grotesk (heading) + Inter (body), dimuat via `next/font/google` di `src/app/fonts.ts`.

## Struktur halaman

```
/                          Homepage
/wiki                      Index wiki
/wiki/crystals             List + filter (rarity, island, sort)
/wiki/crystals/[slug]      Detail crystal
/wiki/pickaxes             List + Compare tool
/wiki/pickaxes/[slug]      Detail pickaxe
/wiki/backpacks            List
/wiki/backpacks/[slug]     Detail backpack
/wiki/curses               List
/wiki/curses/[slug]        Detail curse + best Nature counter
/wiki/natures              List + tabel efektivitas lengkap
/wiki/natures/[slug]       Detail nature
/wiki/islands              List
/wiki/islands/[slug]       Detail island (crystal/pickaxe/backpack terkait)
/wiki/bosses               List
/wiki/bosses/[slug]        Detail boss (mekanisme Monolith lengkap)
/wiki/quests               List kategori
/wiki/quests/[slug]        Detail kategori quest
/wiki/guides               List
/wiki/guides/[slug]        Detail guide
/wiki/pets                 Placeholder ("segera hadir")
/updates                   Patch notes
/community                 Link komunitas (placeholder)
```

## Catatan teknis

- Semua halaman detail wiki menggunakan `generateStaticParams` (SSG) — 120 halaman ter-generate statis saat build.
- Global search (`src/lib/search-index.ts`) menggabungkan seluruh kategori data secara otomatis.
- Tabel wiki scroll horizontal di layar sempit (`overflow-x-auto`) alih-alih dipaksa muat.
- Dicek dengan `npm run build` dan `npx eslint .` — keduanya bersih tanpa error/warning.

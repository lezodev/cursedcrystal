import type { Metadata } from "next";
import { crystals } from "@/data/crystals";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CrystalBrowser } from "@/components/wiki/crystal-browser";

export const metadata: Metadata = {
  title: "Crystals",
  description: "Semua 40 crystal di Cursed Crystal lengkap dengan rarity, value, XP, minimum power, dan spawn info.",
};

export default function CrystalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Crystals" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Crystals</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Data resmi dari config game. Render crystal belum tersedia, jadi gambar memakai placeholder.
      </p>

      <div className="mt-8">
        <CrystalBrowser crystals={crystals} />
      </div>
    </div>
  );
}

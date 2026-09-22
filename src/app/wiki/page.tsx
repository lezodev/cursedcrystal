import type { Metadata } from "next";
import Link from "next/link";
import { GlobalSearch } from "@/components/global-search";

export const metadata: Metadata = {
  title: "Wiki",
  description: "Wiki lengkap Cursed Crystal: crystal, pickaxe, backpack, curse, Nature, pulau, boss, quest, dan panduan.",
};

const CATEGORIES = [
  { href: "/wiki/crystals", label: "Crystals", description: "40 crystal dari Common hingga Secret." },
  { href: "/wiki/pickaxes", label: "Pickaxes", description: "Progresi pickaxe di tiga pulau." },
  { href: "/wiki/backpacks", label: "Backpacks", description: "Kapasitas dan harga tiap backpack." },
  { href: "/wiki/pets", label: "Pets", description: "Segera hadir." },
  { href: "/wiki/curses", label: "Curses", description: "Efek dan efek samping tiap curse." },
  { href: "/wiki/natures", label: "Natures", description: "Karakteristik dan efektivitas terhadap curse." },
  { href: "/wiki/islands", label: "Islands", description: "Progresi dunia Cursed Crystal." },
  { href: "/wiki/bosses", label: "Bosses", description: "Boss crystal kooperatif seperti Monolith." },
  { href: "/wiki/quests", label: "Quests", description: "Daily, weekly, island, special, dan trial quest." },
  { href: "/wiki/guides", label: "Guides", description: "Panduan langkah demi langkah." },
];

export default function WikiIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">
        Cursed Crystal Wiki
      </h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Semua informasi tentang dunia Cursed Crystal, dari nilai crystal sampai mekanisme boss.
      </p>

      <div className="mt-6 max-w-xl">
        <GlobalSearch placeholder="Search the Cursed Crystal Wiki..." />
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="facet-corner border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <h2 className="font-display text-lg font-semibold text-text">{cat.label}</h2>
            <p className="mt-1.5 text-sm text-text-muted">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

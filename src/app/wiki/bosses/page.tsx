import type { Metadata } from "next";
import Link from "next/link";
import { bosses } from "@/data/bosses";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RarityBadge } from "@/components/ui/rarity-badge";
import { ItemImage } from "@/components/ui/item-image";
import { genericIconPlaceholder } from "@/lib/placeholder";
import { formatCurrency, formatNumber } from "@/lib/format";

export const metadata: Metadata = {
  title: "Bosses",
  description: "Boss crystal kooperatif di Cursed Crystal, dimulai dari Monolith Crystal.",
};

export default function BossesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Bosses" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Bosses</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Boss crystal dapat ditambang bersama-sama oleh banyak pemain sekaligus.
      </p>

      <div className="mt-8 space-y-4">
        {bosses.map((boss) => (
          <Link
            key={boss.slug}
            href={`/wiki/bosses/${boss.slug}`}
            className="facet-corner flex flex-col gap-4 border border-border bg-surface p-5 transition-colors hover:border-accent sm:flex-row sm:items-center"
          >
            <ItemImage src={boss.image} fallbackSrc={genericIconPlaceholder} alt={boss.name} size="lg" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-xl font-semibold text-text">{boss.name}</h2>
                <RarityBadge rarity={boss.rarity} />
              </div>
              <p className="mt-1 text-sm text-text-muted">{boss.description}</p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-text-faint">
                <span>HP: {formatNumber(boss.hp)}</span>
                <span>Base Value: {formatCurrency(boss.baseValue)}</span>
                <span>Min. Power: {boss.minPower}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Crystal, Rarity } from "@/data/types";
import { RARITY_ORDER } from "@/data/types";
import { RarityBadge } from "../ui/rarity-badge";
import { ItemImage } from "../ui/item-image";
import { getCrystalPlaceholder } from "@/lib/placeholder";
import { formatCurrency } from "@/lib/format";

export function CrystalBrowser({ crystals }: { crystals: Crystal[] }) {
  const [rarityFilter, setRarityFilter] = useState<Rarity | "all">("all");
  const [islandFilter, setIslandFilter] = useState<number | "all">("all");
  const [sort, setSort] = useState<"rarity" | "value" | "name">("rarity");

  const filtered = useMemo(() => {
    let result = crystals.filter((c) => {
      if (rarityFilter !== "all" && c.rarity !== rarityFilter) return false;
      if (islandFilter !== "all" && !c.spawnMaps.includes(islandFilter)) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "value") return b.baseValue - a.baseValue;
      return RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity);
    });

    return result;
  }, [crystals, rarityFilter, islandFilter, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 border-b border-border pb-6">
        <div className="flex items-center gap-2">
          <label htmlFor="rarity-filter" className="text-sm text-text-muted">
            Rarity
          </label>
          <select
            id="rarity-filter"
            value={rarityFilter}
            onChange={(e) => setRarityFilter(e.target.value as Rarity | "all")}
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text outline-none focus:border-accent"
          >
            <option value="all">Semua</option>
            {RARITY_ORDER.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="island-filter" className="text-sm text-text-muted">
            Island
          </label>
          <select
            id="island-filter"
            value={islandFilter}
            onChange={(e) =>
              setIslandFilter(e.target.value === "all" ? "all" : Number(e.target.value))
            }
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text outline-none focus:border-accent"
          >
            <option value="all">Semua</option>
            <option value={1}>Map 1</option>
            <option value={2}>Map 2</option>
            <option value={3}>Map 3</option>
            <option value={4}>Map 4</option>
            <option value={5}>Map 5</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-text-muted">
            Urutkan
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as "rarity" | "value" | "name")}
            className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-text outline-none focus:border-accent"
          >
            <option value="rarity">Rarity</option>
            <option value="value">Value tertinggi</option>
            <option value="name">Nama (A-Z)</option>
          </select>
        </div>

        <p className="ml-auto text-sm text-text-faint">{filtered.length} crystal</p>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-text-muted">
          Tidak ada crystal yang cocok dengan filter ini.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((c) => (
            <Link
              key={c.slug}
              href={`/wiki/crystals/${c.slug}`}
              className="group facet-corner-sm flex flex-col items-center gap-3 border border-border bg-surface p-4 text-center transition-colors hover:border-accent"
            >
              <ItemImage
                src={c.image}
                fallbackSrc={getCrystalPlaceholder(c.slug)}
                alt={c.name}
                size="md"
              />
              <div>
                <p className="text-sm font-medium text-text">{c.name}</p>
                <p className="mt-1 text-xs text-text-faint">{formatCurrency(c.baseValue)}</p>
              </div>
              <RarityBadge rarity={c.rarity} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import type { Pickaxe } from "@/data/types";
import { ItemImage } from "../ui/item-image";
import { formatCurrency, formatMultiplier, formatPercent } from "@/lib/format";
import { genericIconPlaceholder } from "@/lib/placeholder";

const MAX_COMPARE = 3;

export function PickaxeCompare({ pickaxes }: { pickaxes: Pickaxe[] }) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, slug];
    });
  }

  const selectedPickaxes = pickaxes.filter((p) => selected.includes(p.slug));

  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-text">Compare Pickaxes</h2>
      <p className="mt-2 text-sm text-text-muted">
        Pilih hingga {MAX_COMPARE} pickaxe untuk dibandingkan berdampingan.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {pickaxes.map((p) => {
          const isSelected = selected.includes(p.slug);
          const isDisabled = !isSelected && selected.length >= MAX_COMPARE;
          return (
            <button
              key={p.slug}
              type="button"
              onClick={() => toggle(p.slug)}
              disabled={isDisabled}
              aria-pressed={isSelected}
              className={`rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${
                isSelected
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-text-muted hover:border-border-strong hover:text-text"
              } ${isDisabled ? "cursor-not-allowed opacity-40" : ""}`}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      {selectedPickaxes.length === 0 ? (
        <p className="mt-6 rounded-md border border-dashed border-border p-6 text-center text-sm text-text-faint">
          Pilih pickaxe di atas untuk melihat perbandingan.
        </p>
      ) : (
        <div className="scrollbar-thin mt-6 overflow-x-auto">
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${selectedPickaxes.length}, minmax(160px, 1fr))` }}
          >
            {selectedPickaxes.map((p) => (
              <div key={p.slug} className="facet-corner-sm border border-border bg-surface p-4">
                <ItemImage src={p.image} fallbackSrc={genericIconPlaceholder} alt={p.name} size="sm" />
                <p className="mt-3 font-display text-sm font-semibold text-text">{p.name}</p>
                <dl className="mt-3 space-y-2 text-xs">
                  <Row label="Price" value={p.isShop ? formatCurrency(p.price) : "Special"} />
                  <Row label="Power" value={String(p.power)} />
                  <Row label="Speed" value={formatMultiplier(p.miningSpeed)} />
                  <Row label="Crit Rate" value={formatPercent(p.critRate)} />
                  <Row label="Crit Damage" value={formatMultiplier(p.critDamage)} />
                </dl>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/60 pb-2">
      <dt className="text-text-faint">{label}</dt>
      <dd className="font-medium text-text">{value}</dd>
    </div>
  );
}

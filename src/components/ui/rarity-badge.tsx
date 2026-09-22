import type { Rarity } from "@/data/types";
import { getRarityStyle } from "@/lib/format";

export function RarityBadge({ rarity, className = "" }: { rarity: Rarity; className?: string }) {
  const style = getRarityStyle(rarity);
  return (
    <span
      className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${style.text} ${style.bg} ${style.border} ${className}`}
    >
      {style.label}
    </span>
  );
}

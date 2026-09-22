import Link from "next/link";
import { bosses } from "@/data/bosses";
import { formatCurrency, formatNumber } from "@/lib/format";
import { RarityBadge } from "../ui/rarity-badge";
import { ItemImage } from "../ui/item-image";
import { genericIconPlaceholder } from "@/lib/placeholder";

export function LatestDiscovery() {
  const monolith = bosses[0];
  if (!monolith) return null;

  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wide text-text-faint">
          Latest Discovery
        </p>

        <div className="mt-4 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <ItemImage
            src={monolith.image}
            fallbackSrc={genericIconPlaceholder}
            alt={monolith.name}
            size="lg"
          />

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="font-display text-3xl font-semibold text-text">{monolith.name}</h2>
              <RarityBadge rarity={monolith.rarity} />
              <span className="rounded border border-border-strong px-2 py-0.5 text-xs font-medium text-text-muted">
                {monolith.label}
              </span>
            </div>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
              {monolith.description}
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <dt className="text-xs uppercase tracking-wide text-text-faint">HP</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-text">
                  {formatNumber(monolith.hp)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-text-faint">Base Value</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-text">
                  {formatCurrency(monolith.baseValue)}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-text-faint">Min. Power</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-text">
                  {monolith.minPower}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-text-faint">Spawn Chance</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-text-faint">???</dd>
              </div>
            </dl>

            <Link
              href={`/wiki/bosses/${monolith.slug}`}
              className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-base transition-colors hover:bg-accent-strong"
            >
              View Monolith
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

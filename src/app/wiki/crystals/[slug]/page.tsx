import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { crystals, getCrystalBySlug } from "@/data/crystals";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RarityBadge } from "@/components/ui/rarity-badge";
import { ItemImage } from "@/components/ui/item-image";
import { getCrystalPlaceholder } from "@/lib/placeholder";
import { formatCurrency, formatNumber } from "@/lib/format";

export function generateStaticParams() {
  return crystals.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const crystal = getCrystalBySlug(params.slug);
  if (!crystal) return {};
  return {
    title: crystal.name,
    description: `${crystal.name}: rarity ${crystal.rarity}, value ${formatCurrency(crystal.baseValue)}, XP ${crystal.xp}.`,
  };
}

export default function CrystalDetailPage({ params }: { params: { slug: string } }) {
  const crystal = getCrystalBySlug(params.slug);
  if (!crystal) notFound();

  const related = crystals
    .filter((c) => c.rarity === crystal.rarity && c.slug !== crystal.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Crystals", href: "/wiki/crystals" },
          { label: crystal.name },
        ]}
      />

      <div className="grid gap-8 sm:grid-cols-[220px_1fr]">
        <ItemImage
          src={crystal.image}
          fallbackSrc={getCrystalPlaceholder(crystal.slug)}
          alt={crystal.name}
          size="lg"
        />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-semibold text-text">{crystal.name}</h1>
            <RarityBadge rarity={crystal.rarity} />
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            <Stat label="Value" value={formatCurrency(crystal.baseValue)} />
            <Stat label="XP" value={`${formatNumber(crystal.xp)} XP`} />
            <Stat label="HP" value={formatNumber(crystal.hp)} />
            <Stat label="Minimum Power" value={String(crystal.minPower)} />
            <Stat label="Spawn Chance" value={`1 / ${formatNumber(crystal.chanceOutOf)}`} />
            <Stat
              label="Found In"
              value={crystal.spawnMaps.map((m) => `Map ${m}`).join(", ")}
            />
          </dl>
        </div>
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="font-display text-xl font-semibold text-text">Overview</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
          {crystal.name} adalah crystal rarity {crystal.rarity} yang dapat ditemukan di{" "}
          {crystal.spawnMaps.map((m) => `Map ${m}`).join(", ")}. Membutuhkan Mining Power
          minimum {crystal.minPower} untuk ditambang.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-semibold text-text">Mining Information</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
          Crystal ini memiliki {formatNumber(crystal.hp)} HP dan peluang muncul 1 banding{" "}
          {formatNumber(crystal.chanceOutOf)} pada spawn pool-nya.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-semibold text-text">Sell Information</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
          Nilai jual dasar {crystal.name} adalah {formatCurrency(crystal.baseValue)} dan
          memberikan {formatNumber(crystal.xp)} XP saat berhasil ditambang. Nilai ini dapat
          berubah jika crystal terkena curse (lihat halaman{" "}
          <Link href="/wiki/curses" className="text-accent hover:underline">
            Curses
          </Link>
          ).
        </p>
      </section>

      {related.length > 0 && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold text-text">Related Crystals</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/wiki/crystals/${r.slug}`}
                className="facet-corner-sm flex flex-col items-center gap-2 border border-border bg-surface p-3 text-center transition-colors hover:border-accent"
              >
                <ItemImage
                  src={r.image}
                  fallbackSrc={getCrystalPlaceholder(r.slug)}
                  alt={r.name}
                  size="sm"
                />
                <p className="text-xs font-medium text-text">{r.name}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-text-faint">{label}</dt>
      <dd className="mt-1 font-display text-base font-semibold text-text">{value}</dd>
    </div>
  );
}

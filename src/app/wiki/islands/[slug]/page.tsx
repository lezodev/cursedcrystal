import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIslandBySlug, islands } from "@/data/islands";
import { crystals } from "@/data/crystals";
import { pickaxes } from "@/data/pickaxes";
import { backpacks } from "@/data/backpacks";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function generateStaticParams() {
  return islands.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const island = getIslandBySlug(params.slug);
  if (!island) return {};
  return { title: island.name, description: island.description };
}

export default function IslandDetailPage({ params }: { params: { slug: string } }) {
  const island = getIslandBySlug(params.slug);
  if (!island) notFound();

  const availableCrystals = crystals.filter((c) => c.spawnMaps.includes(island.mapNumber));
  const availablePickaxes = pickaxes.filter((p) => p.map === island.mapNumber);
  const availableBackpacks = backpacks.filter((b) => b.map === island.mapNumber);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Islands", href: "/wiki/islands" },
          { label: island.name },
        ]}
      />

      <p className="text-xs uppercase tracking-wide text-text-faint">Map {island.mapNumber}</p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-text sm:text-4xl">{island.name}</h1>
      <p className="mt-3 max-w-xl text-text-muted">{island.description}</p>

      <section className="mt-10 border-t border-border pt-8">
        <h2 className="font-display text-lg font-semibold text-text">Available Crystals</h2>
        {availableCrystals.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {availableCrystals.map((c) => (
              <Link
                key={c.slug}
                href={`/wiki/crystals/${c.slug}`}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent hover:text-text"
              >
                {c.name}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-text">Pickaxes</h2>
        {availablePickaxes.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {availablePickaxes.map((p) => (
              <Link
                key={p.slug}
                href={`/wiki/pickaxes/${p.slug}`}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent hover:text-text"
              >
                {p.name}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-text">Backpacks</h2>
        {availableBackpacks.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {availableBackpacks.map((b) => (
              <Link
                key={b.slug}
                href={`/wiki/backpacks/${b.slug}`}
                className="rounded-md border border-border px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-accent hover:text-text"
              >
                {b.name}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-text">Quests</h2>
        <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-text">Special Features</h2>
        <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPickaxeBySlug, pickaxes } from "@/data/pickaxes";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";
import { formatCurrency, formatMultiplier, formatPercent } from "@/lib/format";

export function generateStaticParams() {
  return pickaxes.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pickaxe = getPickaxeBySlug(params.slug);
  if (!pickaxe) return {};
  return {
    title: pickaxe.name,
    description: `${pickaxe.name}: Mining Power ${pickaxe.power}, Speed ${pickaxe.miningSpeed}x.`,
  };
}

export default function PickaxeDetailPage({ params }: { params: { slug: string } }) {
  const pickaxe = getPickaxeBySlug(params.slug);
  if (!pickaxe) notFound();

  const sameMap = pickaxes.filter((p) => p.map === pickaxe.map && p.slug !== pickaxe.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Pickaxes", href: "/wiki/pickaxes" },
          { label: pickaxe.name },
        ]}
      />

      <div className="grid gap-8 sm:grid-cols-[220px_1fr]">
        <ItemImage src={pickaxe.image} fallbackSrc={pickaxe.image} alt={pickaxe.name} size="lg" />

        <div>
          <h1 className="font-display text-3xl font-semibold text-text">{pickaxe.name}</h1>
          <p className="mt-1 text-sm text-text-muted">Map {pickaxe.map}</p>

          {!pickaxe.isShop && (
            <div className="mt-4 inline-flex items-center rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
              Special Acquisition — tidak tersedia di shop biasa
            </div>
          )}

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
            <Stat label="Price" value={pickaxe.isShop ? formatCurrency(pickaxe.price) : "Special"} />
            <Stat label="Mining Power" value={String(pickaxe.power)} />
            <Stat label="Mining Speed" value={formatMultiplier(pickaxe.miningSpeed)} />
            <Stat label="Crit Rate" value={formatPercent(pickaxe.critRate)} />
            <Stat label="Crit Damage" value={formatMultiplier(pickaxe.critDamage)} />
          </dl>
        </div>
      </div>

      {!pickaxe.isShop && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold text-text">How to Obtain</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
            {pickaxe.name} tidak dijual di shop biasa. Metode perolehannya belum
            didokumentasikan secara lengkap di wiki ini. Lihat bagian{" "}
            <Link href="/wiki/guides" className="text-accent hover:underline">
              Guides
            </Link>{" "}
            untuk panduan yang tersedia.
          </p>
        </section>
      )}

      {sameMap.length > 0 && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="font-display text-xl font-semibold text-text">Pickaxe Lain di Map {pickaxe.map}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {sameMap.map((p) => (
              <Link
                key={p.slug}
                href={`/wiki/pickaxes/${p.slug}`}
                className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-accent hover:text-text"
              >
                {p.name}
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

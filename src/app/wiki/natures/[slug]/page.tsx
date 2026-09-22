import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { effectivenessMatrix, getNatureBySlug, natureCharacteristics, natures } from "@/data/natures";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";
import { genericIconPlaceholder } from "@/lib/placeholder";

export function generateStaticParams() {
  return natures.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const nature = getNatureBySlug(params.slug);
  if (!nature) return {};
  return { title: nature.name, description: nature.description };
}

const CELL_STYLE: Record<string, string> = {
  Excellent: "text-emerald-400",
  Good: "text-sky-400",
  Weak: "text-amber-400",
  Cannot: "text-text-faint",
};

export default function NatureDetailPage({ params }: { params: { slug: string } }) {
  const nature = getNatureBySlug(params.slug);
  if (!nature) notFound();

  const row = effectivenessMatrix.find((r) => r.nature.toLowerCase() === nature.slug);
  const characteristics = natureCharacteristics[nature.slug];

  const strongAgainst = row
    ? Object.entries(row.values).filter(([, v]) => v === "Excellent" || v === "Good").map(([k]) => k)
    : [];
  const cannotUse = row
    ? Object.entries(row.values).filter(([, v]) => v === "Cannot").map(([k]) => k)
    : [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Natures", href: "/wiki/natures" },
          { label: nature.name },
        ]}
      />

      <div className="flex items-start gap-5">
        <ItemImage src={nature.image} fallbackSrc={genericIconPlaceholder} alt={nature.name} size="lg" />
        <div>
          <h1 className="font-display text-3xl font-semibold text-text">{nature.name}</h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted">{nature.description}</p>
        </div>
      </div>

      {characteristics && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="font-display text-lg font-semibold text-text">Fungsi / Karakteristik</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{characteristics.characteristic}</p>
        </section>
      )}

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold text-text">Strong Against</h2>
          {strongAgainst.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {strongAgainst.map((curseName) => (
                <Link
                  key={curseName}
                  href={`/wiki/curses/${curseName.toLowerCase().replace(" ", "-")}`}
                  className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400 transition-colors hover:border-emerald-500/60"
                >
                  {curseName}
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
          )}
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-text">Weak Against / Cannot Purify</h2>
          {characteristics ? (
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{characteristics.weakness}</p>
          ) : cannotUse.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {cannotUse.map((curseName) => (
                <span
                  key={curseName}
                  className="rounded-md border border-border-strong px-3 py-1.5 text-sm font-medium text-text-faint"
                >
                  {curseName}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
          )}
        </div>
      </section>

      {row && (
        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold text-text">Found In</h2>
          <p className="mt-2 text-sm text-text-faint">Belum tersedia.</p>
        </section>
      )}

      {row && (
        <section className="mt-8 border-t border-border pt-8">
          <h2 className="font-display text-lg font-semibold text-text">Detail Efektivitas per Curse</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {Object.entries(row.values).map(([curseName, value]) => (
              <div key={curseName} className="rounded-md border border-border bg-surface p-3">
                <p className="text-xs text-text-faint">{curseName}</p>
                <p className={`mt-1 text-sm font-semibold ${CELL_STYLE[value!]}`}>{value}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

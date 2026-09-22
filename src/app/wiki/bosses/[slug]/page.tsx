import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bosses, getBossBySlug } from "@/data/bosses";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RarityBadge } from "@/components/ui/rarity-badge";
import { ItemImage } from "@/components/ui/item-image";
import { genericIconPlaceholder } from "@/lib/placeholder";
import { formatCurrency, formatNumber } from "@/lib/format";
import { DataTable, DataTableBody, DataTableHead, Th, Td } from "@/components/ui/data-table";

export function generateStaticParams() {
  return bosses.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const boss = getBossBySlug(params.slug);
  if (!boss) return {};
  return { title: boss.name, description: boss.description };
}

export default function BossDetailPage({ params }: { params: { slug: string } }) {
  const boss = getBossBySlug(params.slug);
  if (!boss) notFound();

  const isMonolith = boss.slug === "monolith";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Bosses", href: "/wiki/bosses" },
          { label: boss.name },
        ]}
      />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <ItemImage src={boss.image} fallbackSrc={genericIconPlaceholder} alt={boss.name} size="lg" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-semibold text-text">{boss.name}</h1>
            <RarityBadge rarity={boss.rarity} />
            <span className="rounded border border-border-strong px-2 py-0.5 text-xs font-medium text-text-muted">
              {boss.label}
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted">{boss.description}</p>
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
        <Stat label="HP" value={formatNumber(boss.hp)} />
        <Stat label="Base Value" value={formatCurrency(boss.baseValue)} />
        <Stat label="Minimum Power" value={String(boss.minPower)} />
        <Stat label="Spawn Chance" value="???" faint />
      </dl>

      {isMonolith && (
        <>
          <section className="mt-10 border-t border-border pt-8">
            <h2 className="font-display text-xl font-semibold text-text">Cooperative Mining</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden="true">•</span>
                Hingga 16 pemain dapat menambang Monolith Crystal secara bersamaan.
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden="true">•</span>
                Setiap pemain mengumpulkan kontribusi damage pribadi terhadap total HP boss.
              </li>
              <li className="flex gap-2">
                <span className="text-accent" aria-hidden="true">•</span>
                Reward yang didapat ditentukan berdasarkan total damage pribadi masing-masing
                pemain, <strong className="text-text">bukan dibagi rata</strong> antar semua peserta.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-text">Heat Mechanic</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Belum tersedia detail lengkap mekanisme Heat pada Monolith Crystal.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-text">Curse Purification Mechanic</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Belum tersedia detail lengkap mekanisme purifikasi curse pada Monolith Crystal.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-text">Arcane Distortion pada 25% HP</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Monolith Crystal memicu curse Arcane Distortion saat HP mencapai 25%, yang membuat
              Crit Rate terhadap boss menjadi 0%. Curse ini{" "}
              <strong className="text-text">tidak mengurangi nilai jual</strong> Monolith Crystal.
            </p>
          </section>

          <section className="mt-8 border-t border-border pt-8">
            <h2 className="font-display text-xl font-semibold text-text">Reward Tiers</h2>
            <p className="mt-2 text-sm text-text-muted">
              Reward berdasarkan total damage pribadi. Tabel tier detail belum didokumentasikan.
            </p>
            <div className="mt-4">
              <DataTable>
                <DataTableHead>
                  <Th>Tier</Th>
                  <Th>Syarat Damage Kontribusi</Th>
                  <Th>Reward</Th>
                </DataTableHead>
                <DataTableBody>
                  <tr>
                    <Td className="text-text-faint">Belum tersedia</Td>
                    <Td className="text-text-faint">Belum tersedia</Td>
                    <Td className="text-text-faint">Belum tersedia</Td>
                  </tr>
                </DataTableBody>
              </DataTable>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function Stat({ label, value, faint = false }: { label: string; value: string; faint?: boolean }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-text-faint">{label}</dt>
      <dd className={`mt-1 font-display text-lg font-semibold ${faint ? "text-text-faint" : "text-text"}`}>
        {value}
      </dd>
    </div>
  );
}

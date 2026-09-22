import type { Metadata } from "next";
import Link from "next/link";
import { effectivenessMatrix, matrixCurseOrder, natures } from "@/data/natures";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";
import { genericIconPlaceholder } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "Natures",
  description: "14 Nature di Cursed Crystal lengkap dengan tabel efektivitas melawan curse.",
};

const CELL_STYLE: Record<string, string> = {
  Excellent: "text-emerald-400",
  Good: "text-sky-400",
  Weak: "text-amber-400",
  Cannot: "text-text-faint",
};

export default function NaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Natures" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Nature</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Nature dipakai untuk memurnikan crystal dari curse. Setiap Nature punya kekuatan dan
        kelemahan yang berbeda terhadap tiap curse.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {natures.map((n) => (
          <Link
            key={n.slug}
            href={`/wiki/natures/${n.slug}`}
            className="facet-corner-sm flex flex-col items-center gap-3 border border-border bg-surface p-4 text-center transition-colors hover:border-accent"
          >
            <ItemImage src={n.image} fallbackSrc={genericIconPlaceholder} alt={n.name} size="md" />
            <p className="text-sm font-medium text-text">{n.name}</p>
          </Link>
        ))}
      </div>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="font-display text-xl font-semibold text-text">Effectiveness Reference</h2>
        <p className="mt-2 text-sm text-text-muted">
          Untuk 9 Nature utama yang sudah punya data efektivitas terhadap curse.
        </p>

        <div className="scrollbar-thin mt-4 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead className="border-b border-border bg-surface text-left text-xs uppercase tracking-wide text-text-faint">
              <tr>
                <th className="px-4 py-3 font-medium">Nature</th>
                {matrixCurseOrder.map((curseName) => (
                  <th key={curseName} className="px-4 py-3 font-medium">
                    {curseName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {effectivenessMatrix.map((row) => (
                <tr key={row.nature}>
                  <td className="px-4 py-3 font-medium text-text">
                    <Link href={`/wiki/natures/${row.nature.toLowerCase()}`} className="hover:text-accent">
                      {row.nature}
                    </Link>
                  </td>
                  {matrixCurseOrder.map((curseName) => {
                    const value = row.values[curseName];
                    return (
                      <td key={curseName} className={`px-4 py-3 font-medium ${value ? CELL_STYLE[value] : "text-text-faint"}`}>
                        {value ?? "-"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

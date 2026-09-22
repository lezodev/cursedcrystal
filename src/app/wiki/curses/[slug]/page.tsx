import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { curses, getCurseBySlug } from "@/data/curses";
import { effectivenessMatrix } from "@/data/natures";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";

export function generateStaticParams() {
  return curses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const curse = getCurseBySlug(params.slug);
  if (!curse) return {};
  return { title: curse.name, description: curse.description };
}

const EFFECTIVENESS_STYLE: Record<string, string> = {
  Excellent: "text-emerald-400",
  Good: "text-sky-400",
  Weak: "text-amber-400",
  Cannot: "text-text-faint",
};

export default function CurseDetailPage({ params }: { params: { slug: string } }) {
  const curse = getCurseBySlug(params.slug);
  if (!curse) notFound();

  const bestCounters = effectivenessMatrix
    .filter((row) => row.values[curse.name] === "Excellent")
    .map((row) => row.nature);

  const isArcaneDistortion = curse.slug === "arcane-distortion";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Curses", href: "/wiki/curses" },
          { label: curse.name },
        ]}
      />

      <div className="flex items-start gap-5">
        <ItemImage src={curse.image} fallbackSrc={curse.image ?? ""} alt={curse.name} size="lg" />
        <div>
          <h1 className="font-display text-3xl font-semibold text-text">{curse.name}</h1>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text-muted">{curse.description}</p>
        </div>
      </div>

      <section className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg font-semibold text-text">Mining Effect</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{curse.effect}</p>
        </div>
        <div>
          <h2 className="font-display text-lg font-semibold text-text">Side Effect</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{curse.sideEffect}</p>
        </div>
      </section>

      {isArcaneDistortion && (
        <div className="mt-6 rounded-md border border-accent/40 bg-accent/10 p-4 text-sm text-text">
          <strong className="text-accent">Catatan:</strong> Arcane Distortion membuat Crit Rate
          menjadi 0%, tetapi{" "}
          <strong>tidak mengurangi nilai jual crystal</strong>, termasuk pada boss{" "}
          <Link href="/wiki/bosses/monolith" className="text-accent hover:underline">
            Monolith Crystal
          </Link>
          .
        </div>
      )}

      <section className="mt-10 border-t border-border pt-8">
        <h2 className="font-display text-lg font-semibold text-text">Best Nature Counters</h2>
        {bestCounters.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {bestCounters.map((natureName) => (
              <Link
                key={natureName}
                href={`/wiki/natures/${natureName.toLowerCase()}`}
                className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-400 transition-colors hover:border-emerald-500/60"
              >
                {natureName}
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-text">Purification Information</h2>
        <div className="scrollbar-thin mt-3 overflow-x-auto rounded-md border border-border">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead className="border-b border-border bg-surface text-left text-xs uppercase tracking-wide text-text-faint">
              <tr>
                <th className="px-4 py-3 font-medium">Nature</th>
                <th className="px-4 py-3 font-medium">Efektivitas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {effectivenessMatrix.map((row) => {
                const value = row.values[curse.name];
                if (!value) return null;
                return (
                  <tr key={row.nature}>
                    <td className="px-4 py-3">
                      <Link
                        href={`/wiki/natures/${row.nature.toLowerCase()}`}
                        className="font-medium text-text hover:text-accent"
                      >
                        {row.nature}
                      </Link>
                    </td>
                    <td className={`px-4 py-3 font-medium ${EFFECTIVENESS_STYLE[value]}`}>{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

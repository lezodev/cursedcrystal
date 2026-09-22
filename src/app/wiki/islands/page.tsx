import type { Metadata } from "next";
import Link from "next/link";
import { islands } from "@/data/islands";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Islands",
  description: "Progresi pulau di Cursed Crystal: Starter Island, Solis Island, dan Tambora Island.",
};

export default function IslandsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Islands" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Islands</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Progresi dunia Cursed Crystal, dari pulau pemula hingga pulau vulkanik.
      </p>

      <div className="mt-8 space-y-4">
        {islands.map((island) => (
          <Link
            key={island.slug}
            href={`/wiki/islands/${island.slug}`}
            className="facet-corner-sm flex items-center justify-between gap-4 border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <div>
              <p className="text-xs uppercase tracking-wide text-text-faint">Map {island.mapNumber}</p>
              <h2 className="mt-1 font-display text-lg font-semibold text-text">{island.name}</h2>
              <p className="mt-1 text-sm text-text-muted">{island.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

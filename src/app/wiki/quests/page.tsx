import type { Metadata } from "next";
import Link from "next/link";
import { questCategories } from "@/data/quests";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Quests",
  description: "Kategori quest di Cursed Crystal: Daily, Weekly, Island, Special, dan Trial Quest.",
};

export default function QuestsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Quests" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Quests</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Lima kategori quest di Cursed Crystal. Daftar quest individual akan ditambahkan seiring
        dokumentasi berkembang.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {questCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/wiki/quests/${cat.slug}`}
            className="facet-corner-sm border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <h2 className="font-display text-lg font-semibold text-text">{cat.name}</h2>
            <p className="mt-1.5 text-sm text-text-muted">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

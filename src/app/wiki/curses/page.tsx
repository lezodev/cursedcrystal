import type { Metadata } from "next";
import Link from "next/link";
import { curses } from "@/data/curses";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";

export const metadata: Metadata = {
  title: "Curses",
  description: "7 curse di Cursed Crystal lengkap dengan efek, efek samping, dan cara purifikasi.",
};

export default function CursesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Curses" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Curses</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Curse membuat crystal lebih sulit atau kurang menguntungkan untuk ditambang. Gunakan
        Nature yang tepat untuk memurnikannya. Lihat{" "}
        <Link href="/wiki/natures" className="text-accent hover:underline">
          Natures
        </Link>{" "}
        untuk tabel efektivitas lengkap.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {curses.map((curse) => (
          <Link
            key={curse.slug}
            href={`/wiki/curses/${curse.slug}`}
            className="facet-corner-sm flex gap-4 border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <ItemImage src={curse.image} fallbackSrc={curse.image ?? ""} alt={curse.name} size="md" />
            <div>
              <h2 className="font-display text-lg font-semibold text-text">{curse.name}</h2>
              <p className="mt-1 text-sm text-text-muted">{curse.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

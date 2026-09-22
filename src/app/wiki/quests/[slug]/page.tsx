import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { questCategories } from "@/data/quests";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function generateStaticParams() {
  return questCategories.map((q) => ({ slug: q.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = questCategories.find((q) => q.slug === params.slug);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default function QuestCategoryPage({ params }: { params: { slug: string } }) {
  const category = questCategories.find((q) => q.slug === params.slug);
  if (!category) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Quests", href: "/wiki/quests" },
          { label: category.name },
        ]}
      />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">{category.name}</h1>
      <p className="mt-2 max-w-xl text-text-muted">{category.description}</p>

      <section className="mt-10 border-t border-border pt-8">
        <h2 className="font-display text-lg font-semibold text-text">Daftar Quest</h2>
        <p className="mt-3 text-sm text-text-faint">
          Belum tersedia. Daftar quest untuk kategori ini akan ditambahkan setelah didokumentasikan.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-semibold text-text">Reward</h2>
        <p className="mt-3 text-sm text-text-faint">Belum tersedia.</p>
      </section>
    </div>
  );
}

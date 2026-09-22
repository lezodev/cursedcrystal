import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, guides } from "@/data/guides";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.summary };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const otherGuides = guides.filter((g) => g.slug !== guide.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Guides", href: "/wiki/guides" },
          { label: guide.title },
        ]}
      />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">{guide.title}</h1>
      <p className="mt-2 text-text-muted">{guide.summary}</p>

      <div className="mt-8 rounded-md border border-dashed border-border p-8 text-center">
        <p className="text-sm text-text-faint">
          Langkah-langkah panduan ini belum didokumentasikan. Konten akan ditambahkan setelah
          data lengkap tersedia.
        </p>
      </div>

      {otherGuides.length > 0 && (
        <section className="mt-10 border-t border-border pt-8">
          <h2 className="font-display text-lg font-semibold text-text">Related Guides</h2>
          <ul className="mt-4 space-y-2">
            {otherGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/wiki/guides/${g.slug}`}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

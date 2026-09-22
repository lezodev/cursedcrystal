import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Guides",
  description: "Panduan langkah demi langkah untuk bermain Cursed Crystal.",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Guides" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Guides</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        Panduan praktis untuk membantu progresi di Cursed Crystal.
      </p>

      <ul className="mt-8 divide-y divide-border border-t border-border">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/wiki/guides/${guide.slug}`}
              className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
            >
              <div>
                <h2 className="font-display text-base font-semibold text-text">{guide.title}</h2>
                <p className="mt-0.5 text-sm text-text-muted">{guide.summary}</p>
              </div>
              <span className="shrink-0 text-text-faint" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { backpacks, getBackpackBySlug } from "@/data/backpacks";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";
import { formatCurrency, formatNumber } from "@/lib/format";

export function generateStaticParams() {
  return backpacks.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const backpack = getBackpackBySlug(params.slug);
  if (!backpack) return {};
  return {
    title: backpack.name,
    description: `${backpack.name}: kapasitas ${backpack.capacity}, harga ${formatCurrency(backpack.price)}.`,
  };
}

export default function BackpackDetailPage({ params }: { params: { slug: string } }) {
  const backpack = getBackpackBySlug(params.slug);
  if (!backpack) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: "Wiki", href: "/wiki" },
          { label: "Backpacks", href: "/wiki/backpacks" },
          { label: backpack.name },
        ]}
      />

      <div className="grid gap-8 sm:grid-cols-[220px_1fr]">
        <ItemImage src={backpack.image} fallbackSrc={backpack.image} alt={backpack.name} size="lg" />

        <div>
          <h1 className="font-display text-3xl font-semibold text-text">{backpack.name}</h1>
          <p className="mt-1 text-sm text-text-muted">Map {backpack.map}</p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
            <Stat label="Capacity" value={formatNumber(backpack.capacity)} />
            <Stat label="Price" value={formatCurrency(backpack.price)} />
          </dl>
        </div>
      </div>

      <p className="mt-10 border-t border-border pt-6 text-sm text-text-muted">
        Lihat progresi backpack lainnya di halaman{" "}
        <Link href="/wiki/backpacks" className="text-accent hover:underline">
          Backpacks
        </Link>
        .
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-text-faint">{label}</dt>
      <dd className="mt-1 font-display text-base font-semibold text-text">{value}</dd>
    </div>
  );
}

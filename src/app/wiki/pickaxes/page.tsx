import type { Metadata } from "next";
import Link from "next/link";
import { pickaxes } from "@/data/pickaxes";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";
import { DataTable, DataTableBody, DataTableHead, Th, Td } from "@/components/ui/data-table";
import { formatCurrency, formatMultiplier, formatPercent } from "@/lib/format";
import { PickaxeCompare } from "@/components/wiki/pickaxe-compare";

export const metadata: Metadata = {
  title: "Pickaxes",
  description: "Seluruh pickaxe di Cursed Crystal lengkap dengan harga, mining power, speed, crit rate, dan crit damage.",
};

export default function PickaxesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Pickaxes" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Pickaxes</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        17 pickaxe di tiga pulau. Golden dan Void Pickaxe hanya bisa didapat lewat cara khusus, bukan dari shop.
      </p>

      <div className="mt-8">
        <DataTable>
          <DataTableHead>
            <Th></Th>
            <Th>Name</Th>
            <Th>Map</Th>
            <Th>Price</Th>
            <Th>Power</Th>
            <Th>Speed</Th>
            <Th>Crit Rate</Th>
            <Th>Crit Damage</Th>
          </DataTableHead>
          <DataTableBody>
            {pickaxes.map((p) => (
              <tr key={p.slug}>
                <Td>
                  <ItemImage src={p.image} fallbackSrc={p.image} alt={p.name} size="sm" />
                </Td>
                <Td className="font-medium">
                  <Link href={`/wiki/pickaxes/${p.slug}`} className="hover:text-accent">
                    {p.name}
                  </Link>
                </Td>
                <Td>Map {p.map}</Td>
                <Td>
                  {p.isShop ? (
                    formatCurrency(p.price)
                  ) : (
                    <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      Special Acquisition
                    </span>
                  )}
                </Td>
                <Td>{p.power}</Td>
                <Td>{formatMultiplier(p.miningSpeed)}</Td>
                <Td>{formatPercent(p.critRate)}</Td>
                <Td>{formatMultiplier(p.critDamage)}</Td>
              </tr>
            ))}
          </DataTableBody>
        </DataTable>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <PickaxeCompare pickaxes={pickaxes} />
      </div>
    </div>
  );
}

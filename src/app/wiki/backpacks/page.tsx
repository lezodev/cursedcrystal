import type { Metadata } from "next";
import Link from "next/link";
import { backpacks } from "@/data/backpacks";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ItemImage } from "@/components/ui/item-image";
import { DataTable, DataTableBody, DataTableHead, Th, Td } from "@/components/ui/data-table";
import { formatCurrency, formatNumber } from "@/lib/format";

export const metadata: Metadata = {
  title: "Backpacks",
  description: "Progresi backpack Cursed Crystal lengkap dengan kapasitas dan harga.",
};

export default function BackpacksPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Backpacks" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Backpacks</h1>
      <p className="mt-2 max-w-xl text-text-muted">
        9 backpack di tiga pulau, urut dari kapasitas terkecil hingga terbesar.
      </p>

      <div className="mt-8">
        <DataTable>
          <DataTableHead>
            <Th></Th>
            <Th>Backpack</Th>
            <Th>Capacity</Th>
            <Th>Price</Th>
            <Th>Island</Th>
          </DataTableHead>
          <DataTableBody>
            {backpacks.map((b) => (
              <tr key={b.slug}>
                <Td>
                  <ItemImage src={b.image} fallbackSrc={b.image} alt={b.name} size="sm" />
                </Td>
                <Td className="font-medium">
                  <Link href={`/wiki/backpacks/${b.slug}`} className="hover:text-accent">
                    {b.name}
                  </Link>
                </Td>
                <Td>{formatNumber(b.capacity)}</Td>
                <Td>{formatCurrency(b.price)}</Td>
                <Td>Map {b.map}</Td>
              </tr>
            ))}
          </DataTableBody>
        </DataTable>
      </div>
    </div>
  );
}

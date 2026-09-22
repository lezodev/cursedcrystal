import Link from "next/link";
import { crystals } from "@/data/crystals";
import { formatCurrency } from "@/lib/format";
import { RarityBadge } from "../ui/rarity-badge";
import { DataTable, DataTableBody, DataTableHead, Th, Td } from "../ui/data-table";

export function CrystalValues() {
  // Empat contoh pertama (Common -> Uncommon), bukan seluruh 40 crystal.
  const sample = crystals.slice(0, 4);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
            Crystal Values
          </h2>
          <Link
            href="/wiki/crystals"
            className="hidden shrink-0 text-sm font-medium text-accent sm:inline-block"
          >
            View all crystals
          </Link>
        </div>

        <div className="mt-6">
          <DataTable>
            <DataTableHead>
              <Th>Crystal</Th>
              <Th>Rarity</Th>
              <Th>Value</Th>
              <Th>XP</Th>
            </DataTableHead>
            <DataTableBody>
              {sample.map((c) => (
                <tr key={c.slug}>
                  <Td className="font-medium">
                    <Link href={`/wiki/crystals/${c.slug}`} className="hover:text-accent">
                      {c.name}
                    </Link>
                  </Td>
                  <Td>
                    <RarityBadge rarity={c.rarity} />
                  </Td>
                  <Td>{formatCurrency(c.baseValue)}</Td>
                  <Td>{c.xp} XP</Td>
                </tr>
              ))}
            </DataTableBody>
          </DataTable>
        </div>

        <Link
          href="/wiki/crystals"
          className="mt-4 inline-block text-sm font-medium text-accent sm:hidden"
        >
          View all crystals
        </Link>
      </div>
    </section>
  );
}

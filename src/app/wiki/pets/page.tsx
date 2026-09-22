import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: "Pets",
  description: "Sistem companion di Cursed Crystal — segera hadir.",
};

/**
 * Sistem pet masih berupa rencana dan belum final, sehingga halaman ini
 * sengaja tidak menampilkan data pet apa pun (lihat R-catatan brief).
 */
export default function PetsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: "Wiki", href: "/wiki" }, { label: "Pets" }]} />
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Pets</h1>
      <div className="mt-8 rounded-md border border-dashed border-border p-8 text-center">
        <p className="text-sm text-text-faint">
          Sistem companion sedang dalam perencanaan dan belum final. Halaman ini akan diisi
          setelah sistem pet resmi diluncurkan.
        </p>
      </div>
    </div>
  );
}

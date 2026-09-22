import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description: "Bergabung dengan komunitas Cursed Crystal.",
};

/**
 * URL asli belum diberikan, jadi setiap link ditandai jelas sebagai
 * placeholder (href="#") daripada menebak alamat sosial media yang salah.
 */
const COMMUNITY_LINKS = [
  { label: "Roblox", note: "Tautan game di Roblox akan ditambahkan di sini." },
  { label: "Discord", note: "Tautan server Discord akan ditambahkan di sini." },
  { label: "YouTube", note: "Tautan channel YouTube akan ditambahkan di sini." },
  { label: "TikTok", note: "Tautan akun TikTok akan ditambahkan di sini." },
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">Community</h1>
      <p className="mt-2 text-text-muted">
        Ikuti Cursed Crystal di platform berikut. Tautan akan diaktifkan setelah tersedia.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {COMMUNITY_LINKS.map((link) => (
          <div
            key={link.label}
            className="facet-corner-sm border border-dashed border-border bg-surface p-5"
          >
            <h2 className="font-display text-lg font-semibold text-text-muted">{link.label}</h2>
            <p className="mt-1 text-xs text-text-faint">{link.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

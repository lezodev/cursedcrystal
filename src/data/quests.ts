export interface QuestCategory {
  slug: string;
  name: string;
  description: string;
}

/**
 * Kategori quest sudah dikonfirmasi lewat brief; daftar quest individual per
 * kategori belum didokumentasikan, jadi halaman kategori menampilkan "Belum
 * tersedia" untuk daftarnya.
 */
export const questCategories: QuestCategory[] = [
  { slug: "daily", name: "Daily Quests", description: "Quest yang dapat diselesaikan setiap hari." },
  { slug: "weekly", name: "Weekly Quests", description: "Quest dengan siklus mingguan." },
  { slug: "island", name: "Island Quests", description: "Quest yang terikat pada progres di sebuah pulau." },
  { slug: "special", name: "Special Quests", description: "Quest edisi khusus di luar siklus rutin." },
  { slug: "trial", name: "Trial Quests", description: "Quest berbasis tantangan atau uji ketahanan, seperti Golden Pickaxe Trial." },
];

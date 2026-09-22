import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-6xl font-semibold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-text">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 text-sm text-text-muted">
        Item atau halaman yang kamu cari mungkin sudah dipindahkan atau belum ada di wiki ini.
      </p>
      <Link
        href="/wiki"
        className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-base transition-colors hover:bg-accent-strong"
      >
        Kembali ke Wiki
      </Link>
    </div>
  );
}

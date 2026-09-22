import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-muted" aria-label="Navigasi footer">
          <Link href="/" className="transition-colors hover:text-text">Home</Link>
          <Link href="/wiki" className="transition-colors hover:text-text">Wiki</Link>
          <Link href="/updates" className="transition-colors hover:text-text">Updates</Link>
          <Link href="/community" className="transition-colors hover:text-text">Community</Link>
        </nav>
        <p className="text-xs text-text-faint">
          Cursed Crystal adalah game independen di Roblox. Situs ini bukan produk resmi Roblox Corporation.
        </p>
      </div>
    </footer>
  );
}

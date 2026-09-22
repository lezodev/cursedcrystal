import Image from "next/image";
import Link from "next/link";
import { GlobalSearch } from "../global-search";

/**
 * Hero adalah satu-satunya tempat aksen oranye dipakai secara besar (garis
 * facet di belakang render + tombol utama), sesuai prinsip "satu aksen di
 * momen yang tepat". Sisanya di halaman ini netral.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-20 lg:px-8">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Discover the
            <br />
            <span className="text-accent">Crystal World.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
            Mine rare crystals, uncover ancient curses, upgrade your gear, and discover what lies beyond each island.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.roblox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-base transition-colors hover:bg-accent-strong"
            >
              Play on Roblox
            </a>
            <Link
              href="/wiki"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border-strong px-6 text-sm font-semibold text-text transition-colors hover:bg-surface"
            >
              Explore Wiki
            </Link>
          </div>

          <div className="mt-8 max-w-md">
            <GlobalSearch placeholder="What do you want to find?" />
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div
            className="facet-corner absolute inset-0 border border-border-strong bg-surface"
            aria-hidden="true"
          />
          <Image
            src="/images/placeholders/Thumbnail-1.png"
            alt="Ilustrasi crystal dan pemandangan mining Cursed Crystal"
            fill
            priority
            className="facet-corner object-cover"
          />
        </div>
      </div>
    </section>
  );
}

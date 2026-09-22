import Link from "next/link";

const FEATURED = [
  {
    href: "/wiki/crystals",
    title: "Crystals",
    description: "Discover crystals, rarities, values and spawn information.",
  },
  {
    href: "/wiki/pickaxes",
    title: "Pickaxes",
    description: "Compare mining power, speed, prices and progression.",
  },
  {
    href: "/wiki/curses",
    title: "Curses",
    description: "Learn about cursed crystals, Nature and purification.",
  },
];

const SMALL_LINKS = [
  { href: "/wiki/backpacks", label: "Backpacks" },
  { href: "/wiki/natures", label: "Natures" },
  { href: "/wiki/islands", label: "Islands" },
  { href: "/wiki/bosses", label: "Bosses" },
  { href: "/wiki/quests", label: "Quests" },
  { href: "/wiki/guides", label: "Guides" },
];

export function FeaturedCategories() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold text-text sm:text-3xl">
          Where do you want to start?
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {FEATURED.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group facet-corner border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-accent">
                Lihat semua
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {SMALL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-text-muted transition-colors hover:border-border-strong hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

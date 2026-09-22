import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-text-faint">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-text">
              {item.label}
            </Link>
          ) : (
            <span className="text-text-muted">{item.label}</span>
          )}
          {i < items.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </nav>
  );
}

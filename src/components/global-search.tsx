"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { buildSearchIndex, searchEntries } from "@/lib/search-index";

interface GlobalSearchProps {
  placeholder?: string;
  autoFocus?: boolean;
  size?: "default" | "large";
}

export function GlobalSearch({
  placeholder = "Search crystals, pickaxes, curses, islands...",
  autoFocus = false,
  size = "default",
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchEntries(query, index), [query, index]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      setIsOpen(false);
      (event.target as HTMLInputElement).blur();
    }
  }

  const inputHeight = size === "large" ? "h-14 text-base" : "h-11 text-sm";

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-faint"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          autoFocus={autoFocus}
          placeholder={placeholder}
          aria-label="Cari di wiki Cursed Crystal"
          className={`w-full rounded-md border border-border bg-surface pl-11 pr-4 ${inputHeight} text-text placeholder:text-text-faint outline-none transition-colors focus:border-accent`}
        />
      </div>

      {isOpen && query.trim() !== "" && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-md border border-border bg-surface-raised shadow-xl">
          {results.length === 0 ? (
            <p className="px-4 py-4 text-sm text-text-muted">
              Tidak ada hasil untuk &quot;{query}&quot;. Coba kata kunci lain.
            </p>
          ) : (
            <ul className="max-h-96 overflow-y-auto scrollbar-thin">
              {results.map((entry) => (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between gap-3 border-b border-border/60 px-4 py-3 transition-colors last:border-b-0 hover:bg-base"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-text">
                        {entry.name}
                      </span>
                      <span className="block truncate text-xs text-text-muted">
                        {entry.description}
                      </span>
                    </span>
                    <span className="shrink-0 rounded border border-border-strong px-2 py-0.5 text-[11px] uppercase text-text-faint">
                      {entry.categoryLabel}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

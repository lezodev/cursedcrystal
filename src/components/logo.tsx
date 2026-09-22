/**
 * Logo dibangun sebagai wordmark + mark geometris (bukan aset final di luar
 * instruksi eksplisit, sesuai R-23). Mark berupa crystal segi bersudut yang
 * dipotong asimetris, memakai motif facet-corner yang sama dengan kartu item
 * supaya konsisten sebagai identitas visual situs.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M13 1L23 8.5L19.5 22H6.5L3 8.5L13 1Z"
          fill="var(--color-accent)"
        />
        <path d="M13 1L23 8.5L13 12L3 8.5L13 1Z" fill="var(--color-accent-strong)" />
        <path d="M13 12L23 8.5L19.5 22L13 12Z" fill="var(--color-accent-muted)" opacity="0.7" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-text">
        CURSED CRYSTAL
      </span>
    </span>
  );
}

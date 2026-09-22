import Image from "next/image";

interface ItemImageProps {
  src?: string;
  alt: string;
  fallbackSrc: string;
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP = {
  sm: 56,
  md: 96,
  lg: 220,
};

/**
 * Bingkai gambar item dengan sudut terpotong (facet-corner), motif identitas
 * situs yang meniru potongan kristal. Fallback ke placeholder saat render
 * asli belum ada, tanpa menyamarkannya sebagai aset final.
 */
export function ItemImage({ src, alt, fallbackSrc, size = "md" }: ItemImageProps) {
  const dimension = SIZE_MAP[size];
  const resolvedSrc = src ?? fallbackSrc;
  const isPlaceholder = !src;

  return (
    <div
      className="facet-corner-sm relative flex shrink-0 items-center justify-center overflow-hidden border border-border bg-surface"
      style={{ width: dimension, height: dimension }}
    >
      <Image
        src={resolvedSrc}
        alt={alt}
        width={dimension}
        height={dimension}
        className="h-full w-full object-cover"
      />
      {isPlaceholder && (
        <span className="absolute bottom-0.5 right-0.5 rounded-sm bg-base/80 px-1 text-[9px] uppercase tracking-wide text-text-faint">
          Placeholder
        </span>
      )}
    </div>
  );
}

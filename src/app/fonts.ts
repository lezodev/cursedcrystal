import { Inter, Space_Grotesk } from "next/font/google";

/**
 * Space Grotesk untuk heading: geometris dan bersudut tegas, cocok dengan
 * identitas "blocky/faceted" Cursed Crystal tanpa jatuh ke tebakan AI-default
 * (monospace besar / huruf kapital bertaburan). Inter untuk body karena wiki
 * ini padat data (tabel, angka) dan butuh keterbacaan tinggi di ukuran kecil.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const fontVariables = `${spaceGrotesk.variable} ${inter.variable}`;

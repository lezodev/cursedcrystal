import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { fontVariables } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "Cursed Crystal — Official Site & Wiki",
    template: "%s | Cursed Crystal",
  },
  description:
    "Situs resmi dan wiki lengkap Cursed Crystal, game Roblox mining & adventure. Temukan crystal, pickaxe, curse, Nature, pulau, boss, quest, dan panduan lengkap.",
  openGraph: {
    title: "Cursed Crystal — Official Site & Wiki",
    description:
      "Mine rare crystals, uncover ancient curses, upgrade your gear, and discover what lies beyond each island.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${fontVariables} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

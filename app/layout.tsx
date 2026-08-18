import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Sama-Boutique",
  description: "Gestion simple de votre boutique",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-[#1F2617]">
              Sama-Boutique
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-[#1F2617] hover:underline">
                Accueil
              </Link>
              <Link href="/produits" className="text-[#1F2617] hover:underline">
                Produits
              </Link>
              <Link href="/produits/nouveau" className="text-[#1F2617] hover:underline">
                Nouveau produit
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
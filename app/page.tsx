"use client";

import Link from "next/link";
import {
  ShoppingCart,
  Package,
  HandCoins,
  BarChart3,
  AlertTriangle,
  Plus,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

const stats = [
  { title: "Ventes aujourd'hui", value: "32", subtitle: "commandes", icon: ShoppingCart },
  { title: "Produits", value: "184", subtitle: "en stock", icon: Package },
  { title: "Lebalma", value: "75 000", subtitle: "FCFA à récupérer", icon: HandCoins },
  { title: "Chiffre d'affaires", value: "125 500", subtitle: "FCFA aujourd'hui", icon: Wallet },
];

const lowStock = [
  { name: "Huile 1L", stock: 4 },
  { name: "Sucre 1kg", stock: 3 },
  { name: "Lait en poudre", stock: 2 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F8F2] text-[#1F2617]">
      <header className="border-b border-[#556B2F]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <p className="text-sm font-medium text-[#718C42]">Bienvenue</p>
            <h1 className="text-2xl font-bold text-[#556B2F]">
              Sama Boutique
            </h1>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#556B2F] text-lg font-bold text-white">
            S
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <section className="mb-6 overflow-hidden rounded-3xl bg-[#556B2F] p-6 text-white shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-sm text-white/70">
                Aujourd'hui
              </p>

              <h2 className="text-2xl font-bold">
                Votre boutique en un coup d'oeil.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                Suivez vos ventes, votre stock et vos crédits Lebalma simplement.
              </p>
            </div>

            <button
              disabled
              className="flex w-fit cursor-not-allowed items-center gap-2 rounded-xl bg-white/50 px-4 py-3 text-sm font-semibold text-[#556B2F]/50"
              title="Bientôt disponible"
            >
              <Plus size={18} />
              Nouvelle vente
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-[#556B2F]/10 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#556B2F]/10 text-[#556B2F]">
                    <Icon size={20} />
                  </div>

                  <ArrowUpRight size={18} className="text-[#718C42]" />
                </div>

                <p className="text-sm text-gray-500">{stat.title}</p>

                <p className="mt-1 text-2xl font-bold">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#556B2F]/10 bg-white p-5 shadow-sm lg:col-span-2">
            <h3 className="text-lg font-bold">Actions rapides</h3>

            <p className="mb-5 text-sm text-gray-500">
              Gérez votre boutique rapidement.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <button
                disabled
                className="cursor-not-allowed rounded-2xl border border-[#556B2F]/10 p-4 text-left opacity-40"
                title="Bientôt disponible"
              >
                <ShoppingCart size={22} className="mb-3 text-[#556B2F]" />
                <p className="text-sm font-semibold">Nouvelle vente</p>
              </button>

              <Link
                href="/produits/nouveau"
                className="rounded-2xl border border-[#556B2F]/10 p-4 text-left transition hover:border-[#556B2F]/40 hover:bg-[#556B2F]/5"
              >
                <Package size={22} className="mb-3 text-[#556B2F]" />
                <p className="text-sm font-semibold">Ajouter produit</p>
              </Link>

              <button
                disabled
                className="cursor-not-allowed rounded-2xl border border-[#556B2F]/10 p-4 text-left opacity-40"
                title="Bientôt disponible"
              >
                <HandCoins size={22} className="mb-3 text-[#556B2F]" />
                <p className="text-sm font-semibold">Lebalma</p>
              </button>

              <Link
                href="/produits"
                className="rounded-2xl border border-[#556B2F]/10 p-4 text-left transition hover:border-[#556B2F]/40 hover:bg-[#556B2F]/5"
              >
                <BarChart3 size={22} className="mb-3 text-[#556B2F]" />
                <p className="text-sm font-semibold">Inventaire</p>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#556B2F]/10 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <AlertTriangle size={20} />
              </div>

              <div>
                <h3 className="font-bold">Stock faible</h3>
                <p className="text-xs text-gray-500">
                  À réapprovisionner
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {lowStock.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {product.name}
                    </p>

                    <p className="text-xs text-gray-400">
                      Stock restant
                    </p>
                  </div>

                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                    {product.stock} unités
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-[#556B2F]/10 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#556B2F]/10 text-[#556B2F]">
                <HandCoins size={24} />
              </div>

              <div>
                <h3 className="font-bold">Lebalma</h3>
                <p className="text-sm text-gray-500">
                  Les crédits de vos clients
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                Total à récupérer
              </p>

              <p className="text-xl font-bold text-[#556B2F]">
                75 000 FCFA
              </p>
            </div>
          </div>
        </section>
      </div>

      <nav className="sticky bottom-0 mt-8 border-t border-[#556B2F]/10 bg-white px-3 py-3 sm:hidden">
        <div className="grid grid-cols-5 gap-1 text-center">
          <Link href="/" className="text-[#556B2F]">
            <BarChart3 size={20} className="mx-auto" />
            <span className="text-[11px] font-semibold">Accueil</span>
          </Link>

          <Link href="/produits" className="text-gray-400">
            <Package size={20} className="mx-auto" />
            <span className="text-[11px]">Stock</span>
          </Link>

          <button disabled className="cursor-not-allowed text-gray-300">
            <ShoppingCart size={20} className="mx-auto" />
            <span className="text-[11px]">Ventes</span>
          </button>

          <button disabled className="cursor-not-allowed text-gray-300">
            <HandCoins size={20} className="mx-auto" />
            <span className="text-[11px]">Lebalma</span>
          </button>

          <button disabled className="cursor-not-allowed text-gray-300">
            <BarChart3 size={20} className="mx-auto" />
            <span className="text-[11px]">Rapports</span>
          </button>
        </div>
      </nav>
    </main>
  );
}
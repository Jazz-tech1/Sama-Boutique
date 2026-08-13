"use client";

import {
  ArrowLeft,
  Package,
  Plus,
  Search,
  MoreVertical,
  AlertTriangle,
  Boxes,
} from "lucide-react";

const products = [
  {
    name: "Huile 1L",
    category: "Alimentation",
    stock: 24,
    price: "1 200",
    sold: 76,
    status: "En stock",
  },
  {
    name: "Sucre 1kg",
    category: "Alimentation",
    stock: 4,
    price: "800",
    sold: 46,
    status: "Stock faible",
  },
  {
    name: "Lait en poudre",
    category: "Alimentation",
    stock: 2,
    price: "2 500",
    sold: 31,
    status: "Stock faible",
  },
  {
    name: "Coca-Cola 33cl",
    category: "Boissons",
    stock: 48,
    price: "500",
    sold: 112,
    status: "En stock",
  },
  {
    name: "Eau 1,5L",
    category: "Boissons",
    stock: 63,
    price: "500",
    sold: 137,
    status: "En stock",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8F2] text-[#1F2617]">
      {/* Header */}
      <header className="border-b border-[#556B2F]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#556B2F]/10 text-[#556B2F]"
            >
              <ArrowLeft size={20} />
            </a>

            <div>
              <p className="text-xs text-[#718C42]">
                Sama Boutique
              </p>

              <h1 className="text-xl font-bold">
                Produits & Stock
              </h1>
            </div>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-[#556B2F] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#465A27]">
            <Plus size={18} />
            <span className="hidden sm:inline">
              Ajouter un produit
            </span>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        {/* Stats */}
        <section className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-[#556B2F]/10 bg-white p-4 shadow-sm">
            <Package className="mb-3 text-[#556B2F]" size={22} />
            <p className="text-xs text-gray-500">
              Produits
            </p>
            <p className="mt-1 text-2xl font-bold">
              184
            </p>
          </div>

          <div className="rounded-2xl border border-[#556B2F]/10 bg-white p-4 shadow-sm">
            <Boxes className="mb-3 text-[#556B2F]" size={22} />
            <p className="text-xs text-gray-500">
              Unités en stock
            </p>
            <p className="mt-1 text-2xl font-bold">
              1 248
            </p>
          </div>

          <div className="rounded-2xl border border-[#556B2F]/10 bg-white p-4 shadow-sm">
            <AlertTriangle className="mb-3 text-orange-500" size={22} />
            <p className="text-xs text-gray-500">
              Stock faible
            </p>
            <p className="mt-1 text-2xl font-bold">
              7
            </p>
          </div>

          <div className="rounded-2xl border border-[#556B2F]/10 bg-white p-4 shadow-sm">
            <Package className="mb-3 text-red-500" size={22} />
            <p className="text-xs text-gray-500">
              Épuisés
            </p>
            <p className="mt-1 text-2xl font-bold">
              2
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="mb-6 rounded-2xl border border-[#556B2F]/10 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3 rounded-xl bg-[#F7F8F2] px-4 py-3">
            <Search size={20} className="text-gray-400" />

            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </section>

        {/* Products */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">
                Tous les produits
              </h2>

              <p className="text-sm text-gray-500">
                Gérez votre stock et vos produits.
              </p>
            </div>

            <span className="rounded-full bg-[#556B2F]/10 px-3 py-1 text-xs font-semibold text-[#556B2F]">
              184 produits
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const lowStock = product.stock <= 5;

              return (
                <article
                  key={product.name}
                  className="rounded-2xl border border-[#556B2F]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#556B2F]/10 text-[#556B2F]">
                        <Package size={22} />
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {product.name}
                        </h3>

                        <p className="text-xs text-gray-400">
                          {product.category}
                        </p>
                      </div>
                    </div>

                    <button className="text-gray-400 hover:text-[#556B2F]">
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400">
                        Prix de vente
                      </p>

                      <p className="mt-1 font-bold">
                        {product.price} FCFA
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">
                        Vendu
                      </p>

                      <p className="mt-1 font-bold">
                        {product.sold} unités
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">
                          Stock restant
                        </p>

                        <p className="mt-1 text-xl font-bold">
                          {product.stock}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                          lowStock
                            ? "bg-orange-50 text-orange-600"
                            : "bg-[#556B2F]/10 text-[#556B2F]"
                        }`}
                      >
                        {lowStock
                          ? "Stock faible"
                          : "En stock"}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

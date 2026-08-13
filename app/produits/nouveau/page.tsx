"use client";

import { ArrowLeft, Package, Save } from "lucide-react";
import { useState } from "react";

export default function NewProductPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [stock, setStock] = useState("");
  const [alertThreshold, setAlertThreshold] = useState("5");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      `Produit ajouté : ${name}\nStock : ${stock} unités\nPrix : ${sellingPrice} FCFA`
    );
  };

  return (
    <main className="min-h-screen bg-[#F7F8F2] text-[#1F2617]">
      <header className="border-b border-[#556B2F]/10 bg-white">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-4 sm:px-8">
          <a
            href="/produits"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#556B2F]/10 text-[#556B2F]"
          >
            <ArrowLeft size={20} />
          </a>

          <div>
            <p className="text-xs text-[#718C42]">
              Sama Boutique
            </p>

            <h1 className="text-xl font-bold">
              Ajouter un produit
            </h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
        <div className="mb-6 rounded-3xl bg-[#556B2F] p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Package size={28} />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Nouveau produit
              </h2>

              <p className="mt-1 text-sm text-white/70">
                Ajoutez un produit à votre stock.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#556B2F]/10 bg-white p-5 shadow-sm sm:p-7"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Nom du produit
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Ex : Huile 1L"
                className="w-full rounded-xl border border-gray-200 bg-[#F7F8F2] px-4 py-3 outline-none transition focus:border-[#556B2F] focus:ring-2 focus:ring-[#556B2F]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Catégorie
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-200 bg-[#F7F8F2] px-4 py-3 outline-none focus:border-[#556B2F]"
              >
                <option value="">Choisir une catégorie</option>
                <option value="Alimentation">Alimentation</option>
                <option value="Boissons">Boissons</option>
                <option value="Hygiène">Hygiène</option>
                <option value="Maison">Maison</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Prix d'achat
                </label>

                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={purchasePrice}
                    onChange={(e) =>
                      setPurchasePrice(e.target.value)
                    }
                    required
                    placeholder="1000"
                    className="w-full rounded-xl border border-gray-200 bg-[#F7F8F2] px-4 py-3 pr-16 outline-none focus:border-[#556B2F]"
                  />

                  <span className="absolute right-4 top-3.5 text-xs font-semibold text-gray-400">
                    FCFA
                  </span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Prix de vente
                </label>

                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    value={sellingPrice}
                    onChange={(e) =>
                      setSellingPrice(e.target.value)
                    }
                    required
                    placeholder="1200"
                    className="w-full rounded-xl border border-gray-200 bg-[#F7F8F2] px-4 py-3 pr-16 outline-none focus:border-[#556B2F]"
                  />

                  <span className="absolute right-4 top-3.5 text-xs font-semibold text-gray-400">
                    FCFA
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Quantité initiale
                </label>

                <input
                  type="number"
                  min="0"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  required
                  placeholder="50"
                  className="w-full rounded-xl border border-gray-200 bg-[#F7F8F2] px-4 py-3 outline-none focus:border-[#556B2F]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Seuil d'alerte
                </label>

                <input
                  type="number"
                  min="0"
                  value={alertThreshold}
                  onChange={(e) =>
                    setAlertThreshold(e.target.value)
                  }
                  required
                  placeholder="5"
                  className="w-full rounded-xl border border-gray-200 bg-[#F7F8F2] px-4 py-3 outline-none focus:border-[#556B2F]"
                />

                <p className="mt-1 text-xs text-gray-400">
                  Vous serez alerté lorsque le stock atteint ce niveau.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <a
              href="/produits"
              className="rounded-xl border border-gray-200 px-5 py-3 text-center text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Annuler
            </a>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#556B2F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#465A27]"
            >
              <Save size={18} />
              Ajouter le produit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";

import {
  ArrowLeft,
  Package,
  Plus,
  Search,
  MoreVertical,
  AlertTriangle,
  Boxes,
} from "lucide-react";

import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#F7F8F2] text-[#1F2617]">

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

          <button className="flex items-center gap-2 rounded-xl bg-[#556B2F] px-4 py-3 text-sm font-semibold text-white">
            <Plus size={18} />
            Ajouter un produit
          </button>

        </div>
      </header>


      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">

        <section className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">

          <div className="rounded-2xl bg-white p-4 shadow">
            <Package className="mb-3 text-[#556B2F]" />
            <p className="text-xs text-gray-500">
              Produits
            </p>
            <p className="text-2xl font-bold">
              {products.length}
            </p>
          </div>


          <div className="rounded-2xl bg-white p-4 shadow">
            <Boxes className="mb-3 text-[#556B2F]" />
            <p className="text-xs text-gray-500">
              Unités en stock
            </p>
            <p className="text-2xl font-bold">
              {products.reduce(
                (total, product) => total + product.stock,
                0
              )}
            </p>
          </div>


          <div className="rounded-2xl bg-white p-4 shadow">
            <AlertTriangle className="mb-3 text-orange-500" />
            <p className="text-xs text-gray-500">
              Stock faible
            </p>
            <p className="text-2xl font-bold">
              {
                products.filter(
                  (product) => product.stock <= 5
                ).length
              }
            </p>
          </div>


          <div className="rounded-2xl bg-white p-4 shadow">
            <Package className="mb-3 text-red-500" />
            <p className="text-xs text-gray-500">
              Épuisés
            </p>
            <p className="text-2xl font-bold">
              {
                products.filter(
                  (product) => product.stock === 0
                ).length
              }
            </p>
          </div>

        </section>



        <section className="mb-6 rounded-2xl bg-white p-4 shadow">

          <div className="flex items-center gap-3 rounded-xl bg-[#F7F8F2] px-4 py-3">

            <Search size={20} className="text-gray-400" />

            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full bg-transparent outline-none"
            />

          </div>

        </section>



        <section>

          <div className="mb-4">

            <h2 className="text-lg font-bold">
              Tous les produits
            </h2>

            <p className="text-sm text-gray-500">
              Gérez votre stock et vos produits.
            </p>

          </div>



          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => {

              const lowStock = product.stock <= 5;

              return (

                <article
                  key={product.id}
                  className="rounded-2xl bg-white p-5 shadow"
                >

                  <div className="mb-4 flex justify-between">

                    <div className="flex gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#556B2F]/10">
                        <Package size={22}/>
                      </div>


                      <div>

                        <h3 className="font-bold">
                          {product.name}
                        </h3>

                        <p className="text-xs text-gray-400">
                          Produit boutique
                        </p>

                      </div>

                    </div>


                    <MoreVertical size={20}/>

                  </div>



                  <p className="font-bold">
                    {product.price} FCFA
                  </p>


                  <div className="mt-4 flex justify-between">

                    <span>
                      Stock : {product.stock}
                    </span>


                    <span
                      className={
                        lowStock
                        ? "text-orange-600"
                        : "text-green-600"
                      }
                    >
                      {lowStock
                      ? "Stock faible"
                      : "En stock"}
                    </span>

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
"use server";

import { createClient } from "@/lib/supabase/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { redirect } from "next/navigation";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function createProduct(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Non authentifié");
  }

  const name = formData.get("name") as string;
  const sellingPrice = parseFloat(formData.get("sellingPrice") as string);
  const stock = parseInt(formData.get("stock") as string, 10);

  await prisma.product.create({
    data: {
      name,
      price: sellingPrice,
      stock,
      profileId: user.id,
    },
  });

  redirect("/produits");
}
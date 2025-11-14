"use client";
import React, { useState } from "react";
import productsJson from "../../public/data/products.json";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const [products] = useState(productsJson.products);

  return (
    <div>
      <Header />

      <main className="container py-5">
        <h1 className="mb-4 text-center">Tienda de Seguridad</h1>

        <div className="row">
          {products.map((p) => (
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </main>

      <CartDrawer />
      <FloatingCartButton />
    </div>
  );
}

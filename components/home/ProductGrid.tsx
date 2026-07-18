"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { productGrid } from "@/data/products";

const FILTERS = ["All", "Women", "Men", "Kids"] as const;

export default function ProductGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const filtered =
    filter === "All" ? productGrid : productGrid.filter((p) => p.department === filter);

  return (
    <section aria-labelledby="product-grid-heading" className="py-20">
      <div className="container-boutique">
        <SectionHeading eyebrow="Bestsellers" title="Loved across every wardrobe." />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by department">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`focus-ring rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-widest2 transition-colors ${
                filter === f
                  ? "border-rose-500 bg-rose-500 text-paper"
                  : "border-line text-ink-soft hover:border-rose-300 hover:text-rose-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types";

function formatPrice(value: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(value);
}

export default function ProductCard({ product }: { product: Product }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-bone">
        <Link href={`/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest2 text-rose-600">
            New
          </span>
        )}

        <button
          type="button"
          onClick={() => setWishlisted((w) => !w)}
          aria-pressed={wishlisted}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className="focus-ring absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink transition-colors hover:bg-paper"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={wishlisted ? "#B76E79" : "none"}
            stroke={wishlisted ? "#B76E79" : "currentColor"}
            strokeWidth="1.8"
          >
            <path d="M12 21s-7.5-4.7-10-9.3C.5 8 2.4 4.5 6 4.1c2-.2 3.7.9 6 3.4 2.3-2.5 4-3.6 6-3.4 3.6.4 5.5 3.9 4 7.6-2.5 4.6-10 9.3-10 9.3Z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label={`Quick add ${product.name}`}
          className="focus-ring absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-ink py-2.5 text-xs font-bold uppercase tracking-widest2 text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </div>

      <div className="mt-3 flex flex-1 flex-col gap-1">
        <Link href={`/product/${product.id}`} className="focus-ring text-sm font-bold text-ink hover:text-rose-600">
          {product.name}
        </Link>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-bold text-rose-600">{formatPrice(product.price, product.currency)}</span>
          {product.compareAtPrice && (
            <span className="text-ink-soft line-through">
              {formatPrice(product.compareAtPrice, product.currency)}
            </span>
          )}
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          {product.colors.map((color) => (
            <span
              key={color}
              className="h-3.5 w-3.5 rounded-full border border-line"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
          ))}
          <span className="ml-1 text-xs text-ink-soft">{product.sizes.length} sizes</span>
        </div>
      </div>
    </div>
  );
}

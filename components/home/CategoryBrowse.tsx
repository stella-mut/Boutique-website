import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { categoryTiles } from "@/data/products";

export default function CategoryBrowse() {
  return (
    <section aria-labelledby="category-heading" className="bg-bone py-20">
      <div className="container-boutique">
        <SectionHeading
          eyebrow="Browse By Category"
          title="Find it by what it is."
          align="center"
        />

        <div className="mt-10 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:thin] md:grid md:grid-cols-4 md:overflow-visible lg:grid-cols-7">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex w-32 shrink-0 flex-col items-center gap-3 md:w-auto"
            >
              <div className="relative aspect-square w-32 overflow-hidden rounded-full ring-1 ring-line md:w-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-bold text-ink group-hover:text-rose-600">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

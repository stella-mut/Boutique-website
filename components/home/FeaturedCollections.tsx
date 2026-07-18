import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredCollections } from "@/data/products";

export default function FeaturedCollections() {
  const [lead, ...rest] = featuredCollections;

  return (
    <section aria-labelledby="collections-heading" className="py-20">
      <div className="container-boutique">
        <SectionHeading
          eyebrow="Featured Collections"
          title="Edits curated for the season."
          description="Seasonal drops, streetwear capsules, and occasionwear — each edit built around how you'll actually wear it."
          ctaLabel="Shop All Collections"
          ctaHref="/collections"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Link href={lead.href} className="group relative block aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto lg:row-span-2">
            <Image
              src={lead.image}
              alt={lead.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-paper">
              <p className="eyebrow text-rose-200">{lead.tag}</p>
              <h3 className="mt-1 font-lato text-2xl font-light md:text-3xl">{lead.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-paper/80">{lead.description}</p>
            </div>
          </Link>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((col) => (
              <Link key={col.id} href={col.href} className="group relative block aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-paper">
                  <p className="eyebrow text-rose-200">{col.tag}</p>
                  <h3 className="mt-1 font-lato text-lg font-light">{col.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

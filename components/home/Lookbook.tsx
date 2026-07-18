import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { lookbookLooks } from "@/data/products";

export default function Lookbook() {
  return (
    <section aria-labelledby="lookbook-heading" className="bg-ink py-20 text-paper">
      <div className="container-boutique">
        <SectionHeading
          eyebrow="Editorial"
          title="The Lookbook"
          description="Styled outfits from our seasonal campaign — shop each look piece by piece."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lookbookLooks.map((look) => (
            <div key={look.id} className="group relative overflow-hidden rounded-md">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-lato text-lg font-light">{look.title}</h3>
                <ul className="mt-2 flex flex-col gap-1">
                  {look.products.map((p) => (
                    <li key={p.name} className="text-xs text-paper/75">
                      {p.name} — ${p.price}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="focus-ring mt-3 text-xs font-bold uppercase tracking-widest2 text-rose-300 underline-offset-4 hover:underline"
                >
                  Shop The Look →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

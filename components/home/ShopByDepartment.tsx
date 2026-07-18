import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import TapeDivider from "@/components/ui/TapeDivider";
import { departmentTiles } from "@/data/products";

export default function ShopByDepartment() {
  return (
    <section aria-labelledby="dept-heading" className="py-20">
      <TapeDivider />
      <div className="container-boutique mt-10">
        <SectionHeading
          eyebrow="Shop By Department"
          title="Three wardrobes, one point of view."
          description="Every department shares the same fabrics and finishing — sized and styled for how you actually dress."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {departmentTiles.map((dept) => (
            <div key={dept.department} className="group relative overflow-hidden rounded-md">
              <Link href={dept.href} className="block aspect-[3/4] w-full">
                <Image
                  src={dept.image}
                  alt={`${dept.department}'s collection`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              </Link>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 text-paper">
                <p className="eyebrow text-rose-200">{dept.tagline}</p>
                <h3 className="mt-1 font-lato text-2xl font-light">{dept.department}&apos;s</h3>
                <ul className="pointer-events-auto mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {dept.subcategories.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="focus-ring text-xs font-bold uppercase tracking-wide text-paper/85 underline-offset-4 hover:text-paper hover:underline"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

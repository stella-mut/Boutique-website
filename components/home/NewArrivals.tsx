import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import { newArrivals } from "@/data/products";

export default function NewArrivals() {
  return (
    <section aria-labelledby="new-arrivals-heading" className="bg-bone py-20">
      <div className="container-boutique">
        <SectionHeading
          eyebrow="Just In"
          title="New Arrivals"
          description="Fresh across women's, men's, and kids' — new every week."
          ctaLabel="View All"
          ctaHref="/new-arrivals"
        />

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

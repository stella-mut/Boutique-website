import SectionHeading from "@/components/ui/SectionHeading";
import { reviews, pressMentions } from "@/data/products";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "#B76E79" : "none"}
          stroke="#B76E79"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section aria-labelledby="social-proof-heading" className="bg-bone py-20">
      <div className="container-boutique">
        <SectionHeading eyebrow="From Our Customers" title="Worn, washed, and worth it." align="center" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.id} className="rounded-md border border-line bg-paper p-6">
              <Stars rating={review.rating} />
              <blockquote className="mt-4 text-sm text-ink">&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-xs font-bold uppercase tracking-wide text-ink-soft">
                {review.name} — {review.location}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 border-t border-line pt-10">
          <p className="eyebrow mb-6 text-center">As Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {pressMentions.map((press) => (
              <div key={press.outlet} className="text-center">
                <p className="font-lato text-lg font-black tracking-tight text-ink">{press.outlet}</p>
                <p className="mt-1 max-w-[16rem] text-xs text-ink-soft">&ldquo;{press.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

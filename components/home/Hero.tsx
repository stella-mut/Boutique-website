import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section aria-label="Featured campaign" className="relative overflow-hidden bg-bone">
      <div className="container-boutique grid min-h-[600px] items-center gap-10 py-16 lg:grid-cols-2 lg:py-0">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <p className="eyebrow">Autumn / Winter Campaign</p>
          <h1 className="max-w-xl font-lato text-4xl font-light leading-[1.1] tracking-tight text-ink md:text-6xl">
            Dressed for the life you actually live.
          </h1>
          <p className="max-w-md text-base text-ink-soft md:text-lg">
            Considered pieces for women, men, and kids — tailored details,
            honest fabrics, and a rose gold thread running through every
            edit.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <LinkButton href="/women" variant="primary">
              Shop Women
            </LinkButton>
            <LinkButton href="/men" variant="secondary">
              Shop Men
            </LinkButton>
            <LinkButton href="/kids" variant="secondary">
              Shop Kids
            </LinkButton>
          </div>
          <a
            href="/new-arrivals"
            className="focus-ring mt-1 text-sm font-bold uppercase tracking-widest2 text-rose-600 underline-offset-4 hover:underline"
          >
            Explore New Arrivals →
          </a>
        </div>

        <div className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-md lg:order-2 lg:aspect-auto lg:h-[640px]">
          <Image
            src="https://picsum.photos/seed/zuri-hero-campaign/1200/1500"
            alt="Zuri Boutique autumn campaign — model in rose blush tailoring"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

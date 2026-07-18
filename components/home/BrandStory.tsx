import Image from "next/image";
import TapeDivider from "@/components/ui/TapeDivider";
import { LinkButton } from "@/components/ui/Button";

const PILLARS = [
  {
    title: "Curated, not endless",
    body: "Every piece earns its place in the edit — no filler, no fast-fashion churn.",
  },
  {
    title: "Cut with intention",
    body: "Our tailoring room finishes hems, seams, and closures by hand before anything ships.",
  },
  {
    title: "Built for real wardrobes",
    body: "Fabrics chosen to soften with wear, not fall apart after one season.",
  },
];

export default function BrandStory() {
  return (
    <section aria-labelledby="brand-story-heading" className="py-20">
      <TapeDivider label="Since the first stitch" />
      <div className="container-boutique mt-10 grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src="https://picsum.photos/seed/zuri-brand-story/1000/750"
            alt="Zuri Boutique's tailoring room, where garments are finished by hand"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow mb-3">Our Story</p>
          <h2 id="brand-story-heading" className="font-lato text-3xl font-light tracking-tight text-ink md:text-4xl">
            A boutique built around the measuring tape, not the trend cycle.
          </h2>
          <p className="mt-4 max-w-lg text-ink-soft">
            Zuri started as a single tailoring room and grew into a curated
            destination for women, men, and kids — but the standard never
            changed. We choose fabric first, fit second, and trend last, so
            what you buy this season still earns its spot in your closet
            next year.
          </p>

          <ul className="mt-8 flex flex-col gap-6">
            {PILLARS.map((pillar) => (
              <li key={pillar.title} className="flex gap-4">
                <span className="tape-rule mt-3 w-8 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{pillar.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <LinkButton href="/our-story" variant="secondary" className="mt-8">
            Read Our Full Story
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

# Zuri Boutique

A fashion boutique storefront for women's, men's, and kids' collections,
built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS (white + rose gold theme)
- Google Font: **Lato** (loaded via `next/font/google`, weights 300/400/700/900)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
app/                    Routes, root layout, global styles
  layout.tsx             Loads Lato, wraps every page with Header/Footer
  page.tsx                Homepage — assembles all 12 sections
  globals.css             Tailwind layers + design tokens (eyebrow, tape-rule, etc.)

components/
  layout/                Header, Footer, Newsletter
  home/                  One component per homepage section:
                          Hero, ShopByDepartment, NewArrivals,
                          FeaturedCollections, CategoryBrowse, ProductGrid,
                          Lookbook, BrandStory, SocialProof
  ui/                    Reusable primitives: Button, SectionHeading,
                          ProductCard, TapeDivider (signature element)

data/products.ts         Typed mock data: products, collections, looks,
                          reviews, press mentions
types/index.ts            Shared TypeScript interfaces
tailwind.config.ts        Rose gold + white color tokens, Lato font family
```

## Design system

- **Palette:** white (`paper` #FFFFFF, `bone` #FAF6F3) with a rose gold
  family from blush `#E8C4C4` to deep rose `#7E4750`, plus warm ink
  `#2B2422` for text.
- **Typography:** Lato only, carried across weights — light (300) for
  display headlines, bold (700) for labels/CTAs, black (900) for the
  wordmark — so hierarchy comes from weight and tracking, not a second
  typeface.
- **Signature element — the "tape rule":** a dashed rose-gold divider
  (`.tape-rule` in `globals.css`, wrapped by `components/ui/TapeDivider.tsx`)
  styled after a tailor's measuring tape. It marks section transitions and
  anchors the Brand Story section, tying the visual language back to the
  boutique's tailoring roots.

## Replacing imagery

All images currently use seeded [picsum.photos](https://picsum.photos)
placeholders (`data/products.ts`, `Hero.tsx`, `BrandStory.tsx`) so the site
runs with zero setup. Swap the `image` / `src` URLs for real campaign and
product photography before launch — `next.config.js` currently only
allowlists `images.unsplash.com` as an example remote host, so update
`remotePatterns` to match wherever your final images are hosted.

## Notes on functionality

This is a front-end storefront shell: wishlist/quick-add/newsletter/search
interactions are wired up with local React state for a realistic feel, but
there's no cart, auth, checkout, or CMS/backend wired in yet. Product,
category, and account routes (e.g. `/women`, `/product/[id]`, `/cart`) are
linked from the UI but not yet built — the homepage is fully complete.

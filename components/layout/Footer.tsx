import Link from "next/link";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "Women", href: "/women" },
      { label: "Men", href: "/men" },
      { label: "Kids", href: "/kids" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Customer Service", href: "/customer-service" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="container-boutique grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="font-lato text-2xl font-black tracking-tight text-ink">
            ZURI<span className="text-rose-500">.</span>
          </span>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            Considered fashion for women, men, and kids — tailored details,
            seasonal edits, and pieces made to be worn often.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-rose-500 hover:text-rose-600"
              >
                <span className="text-xs font-bold">{s.label.slice(0, 2)}</span>
              </Link>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow mb-4">{col.title}</h3>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring text-sm text-ink-soft transition-colors hover:text-rose-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="tape-rule container-boutique" />

      <div className="container-boutique flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-soft md:flex-row">
        <p>&copy; {new Date().getFullYear()} Zuri Boutique. All rights reserved.</p>
        <p>Designed with rose gold, always.</p>
      </div>
    </footer>
  );
}

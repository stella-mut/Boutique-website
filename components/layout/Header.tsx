"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Kids", href: "/kids" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Collections", href: "/collections" },
  { label: "Sale", href: "/sale", accent: true },
];

const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
} as const;

function IconButton({
  label,
  onClick,
  href,
  children,
  badge,
}: {
  label: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  badge?: number;
}) {
  const classes =
    "focus-ring relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-bone";
  const content = (
    <>
      {children}
      {typeof badge === "number" && badge > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-paper">
          {badge}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" aria-label={label} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      {/* Announcement bar */}
      <div className="bg-ink py-2 text-center text-xs font-bold uppercase tracking-widest2 text-paper">
        Complimentary shipping on orders over $150
      </div>

      <div className="container-boutique flex h-20 items-center justify-between gap-4">
        {/* Mobile menu toggle */}
        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link href="/" className="focus-ring shrink-0" aria-label="Zuri Boutique home">
          <span className="font-lato text-2xl font-black tracking-tight text-ink">
            ZURI<span className="text-rose-500">.</span>
          </span>
        </Link>

        {/* Primary nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`focus-ring text-sm font-bold uppercase tracking-wide transition-colors ${
                    link.accent ? "text-rose-600 hover:text-rose-700" : "text-ink hover:text-rose-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Utility icons */}
        <div className="flex items-center gap-1">
          <IconButton label="Search" onClick={() => setSearchOpen((o) => !o)}>
            <svg {...ICON_PROPS}>
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </IconButton>
          <IconButton label="Account" href="/account">
            <svg {...ICON_PROPS}>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </IconButton>
          <IconButton label="Wishlist" href="/wishlist" badge={2}>
            <svg {...ICON_PROPS}>
              <path d="M12 21s-7.5-4.7-10-9.3C.5 8 2.4 4.5 6 4.1c2-.2 3.7.9 6 3.4 2.3-2.5 4-3.6 6-3.4 3.6.4 5.5 3.9 4 7.6-2.5 4.6-10 9.3-10 9.3Z" />
            </svg>
          </IconButton>
          <IconButton label="Cart" href="/cart" badge={3}>
            <svg {...ICON_PROPS}>
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6 5 3H2" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
            </svg>
          </IconButton>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-line bg-bone">
          <div className="container-boutique py-4">
            <label htmlFor="site-search" className="sr-only">
              Search products
            </label>
            <div className="flex items-center gap-3 rounded-full border border-line bg-paper px-5 py-3">
              <svg {...ICON_PROPS} className="shrink-0 text-ink-soft">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                id="site-search"
                type="search"
                placeholder="Search dresses, suits, sneakers…"
                className="w-full bg-transparent text-sm text-ink placeholder:text-ink-soft focus:outline-none"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile nav */}
      {menuOpen && (
        <nav aria-label="Mobile" className="border-t border-line bg-paper lg:hidden">
          <ul className="container-boutique flex flex-col divide-y divide-line py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`focus-ring block py-3 text-sm font-bold uppercase tracking-wide ${
                    link.accent ? "text-rose-600" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

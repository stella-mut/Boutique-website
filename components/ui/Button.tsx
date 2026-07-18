import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-widest2 transition-colors focus-ring";

const variants: Record<Variant, string> = {
  primary: "bg-rose-500 text-paper hover:bg-rose-600",
  secondary: "bg-paper text-ink border border-ink hover:bg-ink hover:text-paper",
  ghost: "bg-transparent text-paper border border-paper/70 hover:bg-paper hover:text-ink",
};

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export function LinkButton({ href, variant = "primary", className = "", children, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

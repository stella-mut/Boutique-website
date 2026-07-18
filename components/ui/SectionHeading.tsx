import { LinkButton } from "./Button";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  ctaLabel?: string;
  ctaHref?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  ctaLabel,
  ctaHref,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${ctaLabel ? "md:flex-row md:items-end md:justify-between md:text-left" : ""}`}
    >
      <div className={isCenter ? "max-w-2xl" : "max-w-xl"}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="font-lato text-3xl font-light tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base text-ink-soft">{description}</p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <LinkButton href={ctaHref} variant="secondary" className="shrink-0">
          {ctaLabel}
        </LinkButton>
      )}
    </div>
  );
}

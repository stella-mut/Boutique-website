/**
 * Signature element: a "measuring tape" rule.
 * Rose-gold ticks reference the boutique's tailoring roots (see Brand Story)
 * and mark the seam between sections the way a tailor's tape marks a hem.
 */
export default function TapeDivider({ label }: { label?: string }) {
  return (
    <div className="container-boutique flex items-center gap-4 py-2" aria-hidden={!label}>
      <div className="tape-rule flex-1" />
      {label && (
        <span className="eyebrow whitespace-nowrap text-rose-500">{label}</span>
      )}
      <div className="tape-rule flex-1" />
    </div>
  );
}

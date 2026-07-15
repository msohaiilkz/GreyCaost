import { Link } from "react-router-dom";

/**
 * Breadcrumb path — har inner page ka header path.
 * items: [{ label, to }] — last item current page (no link).
 */
export default function Breadcrumb({ items, className = "" }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-sm ${className}`}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={i} className="inline-flex items-center gap-2">
            {last || !it.to ? (
              <span className="font-semibold text-royal-500">{it.label}</span>
            ) : (
              <Link to={it.to} className="text-muted transition-colors hover:text-navy-700">
                {it.label}
              </Link>
            )}
            {!last && <span className="text-navy-900/30">›</span>}
          </span>
        );
      })}
    </nav>
  );
}

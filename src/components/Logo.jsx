import { Link } from "react-router-dom";
import { asset } from "../lib/assets";

/**
 * Brand logo. variant: "full" | "icon" | "white"
 * Sirf navy logo available hai — "white" ke liye CSS filter se white bana dete hain.
 */
export default function Logo({ variant = "full", className = "", to = "/" }) {
  const src = asset("logo-full.png");
  const isWhite = variant === "white";

  const content = src ? (
    <img
      src={src}
      alt="Greycoast Capital"
      className={className}
      style={isWhite ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  ) : (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-display text-xl font-extrabold tracking-tight ${isWhite ? "text-white" : "text-navy-700"}`}>
        GREYCOAST
      </span>
      <span className={`text-[10px] tracking-[0.25em] ${isWhite ? "text-white/70" : "text-muted"}`}>
        Capital Pte Ltd
      </span>
    </span>
  );

  if (to) return <Link to={to} aria-label="Greycoast Capital home">{content}</Link>;
  return content;
}
